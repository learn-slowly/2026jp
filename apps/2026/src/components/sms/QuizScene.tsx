"use client";

import { motion } from "framer-motion";
import type { QuizScene as Scene, QuizOption } from "@/lib/sms-quiz";

const poster = { fontFamily: "var(--font-display-poster)" };
const serif = { fontFamily: "var(--font-display-serif)" };
const mono = { fontFamily: "var(--font-mono)" };

// 장면 색 → 배경/강조 유틸
const BG: Record<string, string> = {
  yellow: "bg-justice-yellow text-ink",
  red: "bg-justice-red text-paper",
  green: "bg-justice-green text-paper",
  purple: "bg-justice-purple text-paper",
};
const BAR: Record<string, string> = {
  yellow: "bg-ink",
  red: "bg-paper",
  green: "bg-paper",
  purple: "bg-paper",
};

export function QuizScene({
  scene,
  index,
  total,
  onChoose,
}: {
  scene: Scene;
  index: number;
  total: number;
  onChoose: (opt: QuizOption) => void;
}) {
  const isYellow = scene.color === "yellow";
  const optBtn = isYellow
    ? "border-ink/20 bg-paper/40 text-ink active:bg-paper/70"
    : "border-paper/30 bg-paper/10 text-paper active:bg-paper/25";

  return (
    <motion.section
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`grain relative h-[100dvh] overflow-y-auto flex flex-col px-7 pt-12 pb-10 ${BG[scene.color]}`}
    >
      {/* 진행바 */}
      <div className="flex gap-1.5 mb-8">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${
              i <= index ? BAR[scene.color] : isYellow ? "bg-ink/15" : "bg-paper/25"
            }`}
          />
        ))}
      </div>

      <p style={mono} className="text-[11px] tracking-[0.25em] uppercase opacity-70 mb-3">
        {scene.eyebrow}
      </p>
      <h2 style={poster} className="text-[40px] leading-[1.05] mb-9">
        {scene.prompt}
      </h2>

      <div className="mt-auto space-y-3">
        {scene.options.map((opt) => (
          <motion.button
            key={opt.label}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChoose(opt)}
            className={`w-full text-left rounded-2xl border-2 px-5 py-4 min-h-[44px] transition-colors ${optBtn}`}
          >
            <span style={serif} className="block text-[18px] font-bold leading-snug">
              {opt.label}
            </span>
            {opt.sub && <span className="block text-[13px] opacity-70 mt-0.5">{opt.sub}</span>}
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}
