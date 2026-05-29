"use client";

import { motion } from "framer-motion";

const poster = { fontFamily: "var(--font-display-poster)" };
const serif = { fontFamily: "var(--font-display-serif)" };
const mono = { fontFamily: "var(--font-mono)" };

export function QuizIntro({ onStart }: { onStart: () => void }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="grain relative h-[100dvh] overflow-hidden bg-justice-yellow text-ink flex flex-col justify-center px-7"
    >
      <p style={mono} className="text-[11px] tracking-[0.3em] uppercase text-ink/65 mb-6">
        제9회 전국동시지방선거 · 정의당 경남
      </p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={poster}
        className="text-[60px] leading-[0.95]"
      >
        당신의
        <br />
        경남 하루,
        <br />
        버틸 수 있을까?
      </motion.h1>
      <p style={serif} className="mt-7 text-[16px] leading-[1.7] font-bold text-ink/80">
        6개의 장면, 30초.
        <br />
        당신이 어떤 경남 사람인지 알려드립니다.
      </p>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        style={poster}
        className="mt-10 w-full rounded-2xl bg-ink text-justice-yellow py-5 text-[22px] min-h-[44px]"
      >
        시작하기 →
      </motion.button>
    </motion.section>
  );
}
