import { sheetsClient } from '@justice/api-client';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { HeroV3 } from '@/components/v3/HeroV3';
import { DeclarationV3 } from '@/components/v3/DeclarationV3';
import { ScheduleV3 } from '@/components/v3/ScheduleV3';
import { PoliciesV3 } from '@/components/v3/PoliciesV3';
import { GalleryV3 } from '@/components/v3/GalleryV3';
import { FooterV3 } from '@/components/v3/FooterV3';
import { MobileHeaderV3 } from '@/components/v3/MobileHeaderV3';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const [candidate, mayorExtra, settings] = await Promise.all([
    sheetsClient.getCandidate(slug),
    sheetsClient.getMayorExtra(slug).catch(() => undefined),
    sheetsClient.getSettings('page_settings').catch(() => ({} as Record<string, string>)),
  ]);

  if (!candidate) {
    return { title: '후보자를 찾을 수 없습니다 | 정의당 2026' };
  }

  const position = mayorExtra?.position || '';
  const election = mayorExtra?.election || settings.election || '';
  const titleParts = [candidate.name, position].filter(Boolean).join(' ');
  const title = `${titleParts} | 정의당 2026`;
  const description =
    [election, '정의당', titleParts].filter(Boolean).join(' · ') ||
    '정의당 2026 캠페인';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: candidate.photoUrl ? [candidate.photoUrl] : [],
    },
  };
}

const KOREAN_DAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

function toScheduleItem(s: { date: string; time: string; title: string; location: string }) {
  const d = new Date(s.date);
  const valid = !Number.isNaN(d.getTime());
  const isoDate = valid ? new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(d) : s.date;
  const display = valid ? `${d.getMonth() + 1}.${d.getDate()}` : s.date;
  const day = valid ? KOREAN_DAYS[d.getDay()] : '';
  return { isoDate, date: display, day, title: s.title, time: s.time, location: s.location };
}

function shiftKstIsoDate(daysOffset: number): string {
  const shifted = new Date(Date.now() + daysOffset * 86400000);
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(shifted);
}

function parseCareer(raw: string): { type: string; text: string } {
  const trimmed = raw.trim();
  const match = trimmed.match(/^[\[\(]?\s*(현|전)\s*[\]\)\|:\-·]?\s*(.+)$/);
  if (match) {
    return { type: match[1], text: match[2].trim() };
  }
  return { type: '', text: trimmed };
}

function extractYoutubeId(input?: string): string | undefined {
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

function splitLines(input?: string): string[] {
  if (!input) return [];
  return input
    .split(/[\n|]+/)
    .map((l) => l.trim())
    .filter(Boolean);
}

function mergeLines(...sources: (string | undefined)[]) {
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

export default async function CandidatePage({ params }: PageProps) {
  const { slug } = await params;

  const [candidate, mayorExtra, mayorSchedules, mayorGallery, candidatePolicies, settings] =
    await Promise.all([
      sheetsClient.getCandidate(slug),
      sheetsClient.getMayorExtra(slug).catch(() => undefined),
      sheetsClient.getMayorSchedules(slug).catch(() => []),
      sheetsClient.getMayorGallery(slug).catch(() => []),
      sheetsClient.getCandidatePolicies(slug).catch(() => []),
      sheetsClient.getSettings('page_settings').catch(() => ({} as Record<string, string>)),
    ]);

  if (!candidate) {
    notFound();
  }

  const visionLines = mergeLines(mayorExtra?.visionTitle, mayorExtra?.visionSubtitle);
  const introLines = mergeLines(mayorExtra?.greetingTitle, mayorExtra?.greetingText, candidate.intro);

  const parseOptionalNumber = (value: string | undefined): number | undefined => {
    if (value === undefined || value === '') return undefined;
    const n = Number(value);
    return Number.isFinite(n) ? n : undefined;
  };

  const heroCandidate = {
    name: candidate.name,
    position: mayorExtra?.position || '',
    election: mayorExtra?.election || settings.election || '',
    visionLines,
    introLines,
    careers: candidate.careers.map(parseCareer),
    heroImage: mayorExtra?.heroImageUrl || '/images/v3-hero-candidate.png',
    heroImageScale: parseOptionalNumber(mayorExtra?.heroImageScale),
    heroImageOffsetX: parseOptionalNumber(mayorExtra?.heroImageOffsetX),
    heroImageOffsetY: parseOptionalNumber(mayorExtra?.heroImageOffsetY),
  };

  const allowedDates = new Set([
    shiftKstIsoDate(-1),
    shiftKstIsoDate(0),
    shiftKstIsoDate(1),
  ]);
  const scheduleItems = mayorSchedules
    .map(toScheduleItem)
    .filter((s) => allowedDates.has(s.isoDate))
    .sort((a, b) => a.isoDate.localeCompare(b.isoDate));

  const slogans = splitLines(mayorExtra?.slogans || settings.v3_slogans);
  const ctaLines = splitLines(mayorExtra?.ctaLines || settings.v3_cta_lines);

  const policySource =
    candidatePolicies.length > 0
      ? candidatePolicies.map((p) => ({ title: p.title, content: p.content }))
      : candidate.policies;

  const policyItems = policySource.map((p, i) => ({
    number: i + 1,
    title: p.title,
    description: p.content,
  }));

  const videoId = extractYoutubeId(mayorExtra?.declarationVideoUrl);
  const hasDeclaration = !!videoId || !!(mayorExtra?.declarationText && mayorExtra.declarationText.trim());

  return (
    <main className="v3-page bg-white text-d-blueblack overflow-x-hidden">
      <MobileHeaderV3 candidateName={candidate.name} candidatePosition={heroCandidate.position} />
      <HeroV3 candidate={heroCandidate} />
      {hasDeclaration && (
        <DeclarationV3
          candidateName={candidate.name}
          position={heroCandidate.position}
          videoId={videoId}
          image="/images/v3-declaration.png"
          declarationText={mayorExtra?.declarationText}
        />
      )}
      {scheduleItems.length > 0 && <ScheduleV3 items={scheduleItems} />}
      <PoliciesV3 slogans={slogans} ctaLines={ctaLines} items={policyItems} />
      <GalleryV3
        items={[...mayorGallery]
          .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
          .map((g) => ({
            date: g.date,
            caption: g.caption,
            imageUrl: g.imageUrl,
          }))}
      />
      <FooterV3
        candidate={{
          name: candidate.name,
          position: heroCandidate.position,
          election: heroCandidate.election,
        }}
        donation={candidate.donation}
        social={candidate.social}
        pageName={settings.v3_footer_page_name || '2026 정의당 지방선거특별페이지'}
        pageUrl={settings.v3_footer_page_url}
        copyright={settings.v3_footer_copyright || 'ⓒ2026. Justice Party. No rights reserved.'}
      />
    </main>
  );
}
