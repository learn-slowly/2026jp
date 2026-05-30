"use client";

// 단일 영상 페이지의 본문 — 풀스크린 플레이어 + 다른 영상 스트립 + 공유 버튼.
import { useState } from "react";
import Link from "next/link";
import { shorts, type Short } from "@/data/clips";
import type { JusticeColor } from "@/data/policies-province";

const poster = { fontFamily: "var(--font-display-poster)" };
const serif = { fontFamily: "var(--font-display-serif)" };
const mono = { fontFamily: "var(--font-mono)" };

const accentText: Record<JusticeColor, string> = {
  yellow: "text-justice-yellow",
  red: "text-justice-red",
  green: "text-justice-green",
  purple: "text-justice-purple",
};
const accentBg: Record<JusticeColor, string> = {
  yellow: "bg-justice-yellow",
  red: "bg-justice-red",
  green: "bg-justice-green",
  purple: "bg-justice-purple",
};

export function SingleClipView({
  short,
  index,
  total,
}: {
  short: Short;
  index: number;
  total: number;
}) {
  const [playing, setPlaying] = useState(false);

  async function shareClip() {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : `https://2026.justice21.org/7979/${index + 1}`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: `${short.emoji} ${short.title}`, url });
        return;
      } catch {
        // 사용자가 공유 취소 — 무시
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        alert("링크를 복사했어요. 친구에게 붙여넣어 보내주세요!");
        return;
      } catch {
        // 복사 실패 — 마지막 폴백
      }
    }
    alert(url);
  }

  return (
    <main className="flex min-h-[100dvh] flex-col bg-ink text-paper">
      {/* 상단 — 전체로 돌아가기 + 인덱스 */}
      <header className="flex items-center justify-between px-6 py-5">
        <Link
          href="/7979"
          style={mono}
          className="text-[11px] uppercase tracking-[0.25em] text-paper/60 transition-opacity active:opacity-60"
        >
          ← 전체 영상
        </Link>
        <span
          style={mono}
          className={`text-[11px] tracking-[0.25em] ${accentText[short.color]}`}
        >
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </header>

      {/* 플레이어 */}
      <div className="flex flex-col items-center px-6">
        <div className="w-full max-w-[440px]">
          <div className="relative mx-auto aspect-[9/16] h-[55dvh] max-h-[640px] max-w-[92vw] overflow-hidden rounded-3xl border border-paper/10 bg-black">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${short.id}?autoplay=1&playsinline=1&rel=0`}
                title={short.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`${short.title} 재생`}
                className="absolute inset-0 h-full w-full text-left"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${short.id}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35"
                />
                <span
                  className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg ${accentBg[short.color]} ${short.color === "yellow" ? "text-ink" : "text-paper"}`}
                >
                  <span className="ml-1 text-[26px] leading-none">▶</span>
                </span>
                <span
                  style={poster}
                  className="absolute inset-x-4 bottom-4 block text-[22px] leading-tight text-paper"
                >
                  {short.emoji} {short.title}
                </span>
              </button>
            )}
          </div>
          {short.sub && (
            <p
              style={serif}
              className="mt-5 text-center text-[15px] leading-relaxed text-paper/75"
            >
              {short.sub}
            </p>
          )}
        </div>
      </div>

      {/* 하단 CTA */}
      <footer className="mt-8 space-y-5 border-t border-paper/10 px-6 py-6">
        <p style={serif} className="text-center text-[15px] leading-snug">
          경남도의회 <span className="font-bold text-justice-yellow">9번</span> ·
          창원시의회 <span className="font-bold text-justice-yellow">7번</span> 정의당
        </p>

        {/* 다른 영상 보러가기 — 가로 스크롤 썸네일 */}
        <section aria-label="다른 영상 보러가기">
          <p
            style={mono}
            className="mb-3 text-[10px] uppercase tracking-[0.2em] text-paper/55"
          >
            다른 영상 보러가기
          </p>
          <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2">
            {shorts.map((s, i) => {
              if (i === index) return null;
              return (
                <Link
                  key={s.id}
                  href={`/7979/${i + 1}`}
                  aria-label={`${s.title} 보기`}
                  className="block shrink-0 active:opacity-70 transition-opacity"
                >
                  <div className="relative aspect-[9/16] w-[92px] overflow-hidden rounded-xl border border-paper/15 bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${s.id}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/15"
                    />
                    <span
                      style={mono}
                      className={`absolute right-1.5 top-1.5 text-[10px] tracking-[0.15em] ${accentText[s.color]}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute inset-x-1.5 bottom-1.5 line-clamp-2 text-[10px] leading-tight text-paper">
                      {s.emoji} {s.title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <button
          type="button"
          onClick={shareClip}
          style={poster}
          className="min-h-[44px] w-full rounded-2xl bg-justice-yellow py-4 text-[17px] text-ink transition-transform active:scale-[0.98]"
        >
          이 영상 공유
        </button>
      </footer>
    </main>
  );
}
