"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getMatchedPolicies, getPersona, type QuizResult } from "@/lib/sms-quiz";
import type { SharePayload } from "@/lib/kakao";
import { CountUp } from "./CountUp";
import { PersonaPolicyCard } from "./PersonaPolicyCard";
import { ShareBar } from "./ShareBar";

const poster = { fontFamily: "var(--font-display-poster)" };
const serif = { fontFamily: "var(--font-display-serif)" };
const mono = { fontFamily: "var(--font-mono)" };

const HERO_BG: Record<string, string> = {
  yellow: "bg-justice-yellow text-ink",
  red: "bg-justice-red text-paper",
  green: "bg-justice-green text-paper",
  purple: "bg-justice-purple text-paper",
};

export function QuizResultView({
  result,
  onRestart,
}: {
  result: QuizResult;
  onRestart: () => void;
}) {
  const persona = getPersona(result.personaId);
  const policies = getMatchedPolicies(result.personaId, result.region);

  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://2026jpgn.vercel.app";
  const payload: SharePayload = {
    title: `나는 '${persona.name}' ${persona.emoji} · 경남 생존력 ${result.survivalScore}%`,
    description: persona.verdict,
    imageUrl: `${origin}/og-sms-survey.jpg`,
    linkUrl: `${origin}/sms`,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-cream min-h-[100dvh]"
    >
      {/* 페르소나 히어로 */}
      <section className={`grain relative px-7 pt-14 pb-12 text-center ${HERO_BG[persona.color]}`}>
        <p style={mono} className="text-[11px] tracking-[0.3em] uppercase opacity-70 mb-4">
          당신은
        </p>
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
          className="text-[72px] leading-none mb-3"
        >
          {persona.emoji}
        </motion.div>
        <h1 style={poster} className="text-[44px] leading-[1.05]">
          {persona.name}
        </h1>
        <p style={poster} className="mt-5 text-[20px] opacity-90">
          경남 생존력 <CountUp to={result.survivalScore} />%
        </p>
        <p style={serif} className="mt-5 text-[16px] leading-[1.7] font-bold opacity-90 max-w-[20rem] mx-auto">
          &ldquo;{persona.verdict}&rdquo;
        </p>
      </section>

      {/* 매칭 공약 */}
      <section className="px-7 py-10">
        <p style={mono} className="text-[11px] tracking-[0.25em] uppercase text-ink/55 mb-4">
          당신을 살리는 정의당 공약
        </p>
        <div className="space-y-3">
          {policies.map((p) => (
            <PersonaPolicyCard key={`${p.color}-${p.id}-${p.title}`} policy={p} />
          ))}
        </div>
      </section>

      {/* 공유 + CTA */}
      <section className="px-7 pb-6">
        <ShareBar payload={payload} />
      </section>

      <section className="bg-ink text-paper px-7 py-12 mt-2">
        <p style={serif} className="text-[22px] font-black leading-[1.35] text-center">
          경남도의회 <span className="text-justice-yellow">9번</span> · 창원시의회{" "}
          <span className="text-justice-yellow">7번</span>
        </p>
        <Link
          href="/gn"
          style={poster}
          className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-justice-yellow text-ink py-5 text-[18px] min-h-[44px] active:scale-[0.98] transition-transform"
        >
          공약 전체 보기 →
        </Link>
        <button
          onClick={onRestart}
          className="mt-4 w-full text-center text-[13px] text-paper/55 underline underline-offset-4 min-h-[44px]"
        >
          다시 해보기
        </button>
      </section>

      <footer className="bg-cream border-t border-ink/10">
        <div className="h-2 bg-justice-yellow" />
        <div className="px-7 py-8">
          <p style={serif} className="text-[13px] leading-relaxed text-ink/75">
            정의당 경상남도당
            <br />
            <a href="tel:055-267-6467" className="font-bold text-ink underline underline-offset-2">
              055-267-6467
            </a>
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
