// 미리보기에서 폼 데이터를 v3 섹션 props로 변환할 때 사용하는 헬퍼들.
// 원본 로직은 apps/page/src/app/[slug]/page.tsx의 서버 컴포넌트에 있다.

const KOREAN_DAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

export function parseCareer(raw: string): { type: string; text: string } {
    const trimmed = raw.trim();
    const match = trimmed.match(/^[\[\(]?\s*(현|전)\s*[\]\)\|:\-·]?\s*(.+)$/);
    if (match) {
        return { type: match[1], text: match[2].trim() };
    }
    return { type: '', text: trimmed };
}

export function splitLines(input?: string): string[] {
    if (!input) return [];
    return input
        .split(/[\n|]+/)
        .map((l) => l.trim())
        .filter(Boolean);
}

export function mergeLines(...sources: (string | undefined)[]) {
    const seen = new Set<string>();
    const out: string[] = [];
    for (const src of sources) {
        if (!src) continue;
        for (const raw of src.split(/\r?\n/)) {
            const line = raw.trim();
            if (!line || seen.has(line)) continue;
            seen.add(line);
            out.push(line);
        }
    }
    return out;
}

export function extractYoutubeId(input?: string): string | undefined {
    if (!input) return undefined;
    const trimmed = input.trim();
    if (!trimmed) return undefined;
    if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed;
    const patterns = [
        /[?&]v=([A-Za-z0-9_-]{11})/,
        /youtu\.be\/([A-Za-z0-9_-]{11})/,
        /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
        /youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,
    ];
    for (const re of patterns) {
        const m = trimmed.match(re);
        if (m) return m[1];
    }
    return undefined;
}

export interface ScheduleViewItem {
    isoDate: string;
    date: string;
    day: string;
    title: string;
    time: string;
    location: string;
}

export function toScheduleItem(s: { date: string; time: string; title: string; location: string }): ScheduleViewItem {
    const d = new Date(s.date);
    const valid = !Number.isNaN(d.getTime());
    const isoDate = valid ? new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(d) : s.date;
    const display = valid ? `${d.getMonth() + 1}.${d.getDate()}` : s.date;
    const day = valid ? KOREAN_DAYS[d.getDay()] : '';
    return { isoDate, date: display, day, title: s.title, time: s.time, location: s.location };
}

// 미리보기에서는 입력된 일정 전부를 시간순으로 보여준다 (날짜 필터 미적용)
export function buildSchedulePreview(
    items: { date: string; time: string; title: string; location: string; visible?: boolean }[]
): ScheduleViewItem[] {
    return items
        .filter((s) => s && s.visible !== false && (s.title || s.date))
        .map(toScheduleItem)
        .sort((a, b) => a.isoDate.localeCompare(b.isoDate));
}
