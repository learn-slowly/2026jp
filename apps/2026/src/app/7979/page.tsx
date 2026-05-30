"use client";

// /7979 — 모바일 풀스크린 세로 스냅 피드. 영상은 탭하면 인라인 재생(평소엔 썸네일).
// html { scroll-snap-type: y mandatory } 위에서 각 섹션 snap-start로 넘어간다.

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { shorts, promos, type Short, type Promo } from "@/data/clips";
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

function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  };
}

function Intro() {
  return (
    <section className="grain relative flex min-h-[100dvh] snap-start flex-col justify-center overflow-hidden bg-justice-yellow px-7 py-16 text-ink">
      <motion.div {...fadeIn()} className="relative z-10">
        <p style={mono} className="mb-6 text-[11px] uppercase tracking-[0.3em] text-ink/60">
          정의당 경남 · 영상 모음
        </p>
        <h1 style={poster} className="text-[44px] leading-[1.05]">
          정의당이 떴다,
          <br />
          김경옥이 떴다 🔥
        </h1>
        <p style={serif} className="mt-6 text-[18px] leading-relaxed text-ink/80">
          정말 미치도록 일하고 싶습니다.
          <br />
          경남 도비례 1번, 김경옥.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          <span style={poster} className="rounded-full border-2 border-ink px-4 py-2 text-[14px]">
            경남도의회 9번
          </span>
          <span style={poster} className="rounded-full border-2 border-ink px-4 py-2 text-[14px]">
            창원시의회 7번
          </span>
        </div>
        <p style={mono} className="mt-12 text-[11px] uppercase tracking-[0.25em] text-ink/55">
          ↓ 밀어서 영상 보기
        </p>
      </motion.div>
    </section>
  );
}

function ShortCard({ short, index }: { short: Short; index: number }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // 패널이 화면에서 절반 이하로 밀려나면 재생 정지(썸네일로 복귀) — 다음 영상과 소리 겹침 방지
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setPlaying(false);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  async function shareSingle() {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://2026.justice21.org";
    const url = `${origin}/7979/${index + 1}`;
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
        alert("링크를 복사했어요.");
        return;
      } catch {
        // 마지막 폴백
      }
    }
    alert(url);
  }

  return (
    <section
      ref={ref}
      className="flex min-h-[100dvh] snap-start flex-col justify-center bg-ink px-6 py-14 text-paper"
    >
      <div className="mx-auto w-full max-w-[440px]">
        <div className="mb-4 flex items-center justify-between">
          <span style={mono} className={`text-[11px] tracking-[0.25em] ${accentText[short.color]}`}>
            {String(index + 1).padStart(2, "0")} / {String(shorts.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={shareSingle}
            aria-label={`${short.title} 공유 링크`}
            style={mono}
            className={`text-[11px] uppercase tracking-[0.2em] ${accentText[short.color]} -my-2 -mr-2 px-2 py-2 active:opacity-60`}
          >
            공유 ↗
          </button>
        </div>

        <div className="relative mx-auto aspect-[9/16] h-[68dvh] max-h-[680px] max-w-[92vw] overflow-hidden rounded-3xl border border-paper/10 bg-black">
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
              {/* 유튜브 썸네일(외부, 이미 최적화됨) — 탭 전까지만 노출 */}
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
              <span style={poster} className="absolute inset-x-4 bottom-4 block text-[22px] leading-tight text-paper">
                {short.emoji} {short.title}
              </span>
            </button>
          )}
        </div>

        {short.sub && (
          <p style={serif} className="mt-5 text-center text-[15px] leading-relaxed text-paper/75">
            {short.sub}
          </p>
        )}
      </div>
    </section>
  );
}

function PromoPanel({ promo }: { promo: Promo }) {
  return (
    <section className="flex min-h-[100dvh] snap-start flex-col justify-center bg-ink px-6 py-14 text-paper">
      <motion.div {...fadeIn()} className="mx-auto w-full max-w-[460px] text-center">
        <Image
          src={promo.src}
          alt={promo.alt}
          width={promo.width}
          height={promo.height}
          sizes="(max-width: 480px) 92vw, 460px"
          className="mx-auto max-h-[76dvh] w-auto max-w-[92vw] rounded-2xl border border-paper/10 object-contain"
        />
        {promo.caption && (
          <p style={serif} className="mt-5 text-[16px] text-paper/80">
            {promo.caption}
          </p>
        )}
      </motion.div>
    </section>
  );
}

function Cta() {
  async function share() {
    const url =
      typeof window !== "undefined" ? window.location.href : "https://2026.justice21.org/7979";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "정의당 경남 영상 모음 — 김경옥", url });
        return;
      } catch {
        // 사용자가 취소 — 무시
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        alert("링크를 복사했어요. 친구에게 붙여넣어 보내주세요!");
        return;
      } catch {
        // 복사 실패 — 폴백
      }
    }
    alert(url);
  }

  return (
    <section className="grain relative flex min-h-[100dvh] snap-start flex-col justify-center overflow-hidden bg-justice-yellow px-7 py-16 text-ink">
      <div className="relative z-10">
        <p style={mono} className="mb-5 text-[11px] uppercase tracking-[0.3em] text-ink/60">
          2026.06.03 · 비례대표
        </p>
        <h2 style={poster} className="text-[34px] leading-[1.12]">
          비례 두 장은,
          <br />
          정의당입니다
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border-2 border-ink bg-paper p-3">
            <div className="relative aspect-[821/1146] w-full">
              <Image
                src="/ballots/9.png"
                alt="경남도의회 비례 9번 정의당"
                fill
                sizes="200px"
                className="object-contain"
              />
            </div>
            <p style={poster} className="mt-2 text-center text-[15px]">
              도의회 9번
            </p>
          </div>
          <div className="rounded-2xl border-2 border-ink bg-paper p-3">
            <div className="relative aspect-[821/1146] w-full">
              <Image
                src="/ballots/7.png"
                alt="창원시의회 비례 7번 정의당"
                fill
                sizes="200px"
                className="object-contain"
              />
            </div>
            <p style={poster} className="mt-2 text-center text-[15px]">
              시의회 7번
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={share}
          style={poster}
          className="mt-8 min-h-[44px] w-full rounded-2xl bg-ink py-4 text-[17px] text-justice-yellow transition-transform active:scale-[0.98]"
        >
          친구에게 공유하기
        </button>
        <Link
          href="/gn"
          style={serif}
          className="mt-3 block text-center text-[14px] text-ink/70 underline underline-offset-4"
        >
          공약 전체 보기 →
        </Link>
      </div>
    </section>
  );
}

export default function ClipsPage() {
  return (
    <main className="bg-ink">
      <Intro />
      {shorts.map((s, i) => (
        <ShortCard key={s.id} short={s} index={i} />
      ))}
      {promos.map((p) => (
        <PromoPanel key={p.src} promo={p} />
      ))}
      <Cta />
    </main>
  );
}
