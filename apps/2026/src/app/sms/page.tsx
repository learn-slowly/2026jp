"use client";

// /sms — "경남 하루" 페르소나 퀴즈. 문자 클릭 후 30초 안에 핵심 전달 + 메인 유도.
import { useState } from "react";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { SCENES } from "@/data/sms-scenes";
import { scoreQuiz, type QuizOption, type QuizResult } from "@/lib/sms-quiz";
import { QuizIntro } from "@/components/sms/QuizIntro";
import { QuizScene } from "@/components/sms/QuizScene";
import { QuizResultView } from "@/components/sms/QuizResult";

const poster = { fontFamily: "var(--font-display-poster)" };

type Phase = "intro" | "quiz" | "scoring" | "result";

function Scoring() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-[100dvh] bg-ink text-justice-yellow flex items-center justify-center"
    >
      <motion.p
        style={poster}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-[28px]"
      >
        채점 중…
      </motion.p>
    </motion.section>
  );
}

export default function SmsLanding() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [sceneIdx, setSceneIdx] = useState(0);
  const [answers, setAnswers] = useState<QuizOption[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  function start() {
    setAnswers([]);
    setSceneIdx(0);
    setPhase("quiz");
  }

  function choose(opt: QuizOption) {
    const next = [...answers, opt];
    setAnswers(next);
    if (sceneIdx + 1 < SCENES.length) {
      setSceneIdx(sceneIdx + 1);
      return;
    }
    setResult(scoreQuiz(next));
    setPhase("scoring");
    setTimeout(() => setPhase("result"), 1000);
  }

  function restart() {
    setPhase("intro");
  }

  return (
    <main className="bg-cream">
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
        strategy="afterInteractive"
      />
      <AnimatePresence mode="wait">
        {phase === "intro" && <QuizIntro key="intro" onStart={start} />}
        {phase === "quiz" && (
          <QuizScene
            key={`scene-${sceneIdx}`}
            scene={SCENES[sceneIdx]}
            index={sceneIdx}
            total={SCENES.length}
            onChoose={choose}
          />
        )}
        {phase === "scoring" && <Scoring key="scoring" />}
        {phase === "result" && result && (
          <QuizResultView key="result" result={result} onRestart={restart} />
        )}
      </AnimatePresence>
    </main>
  );
}
