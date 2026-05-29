"use client";

// 시안 likethis — A 매거진 골격 + B의 부드러움(둥근 카드·옅은 블롭·따뜻한 카피)
// 새 PRD "둘끼가?" 흐름: 팩트 2연타 → 질문 클라이맥스 → 비례 설명 → 공약 → 사람 → 추천
// 노랑 풀블록은 "이대로 둘끼가?" 단 한 번. 공약 답이 곧 "두지 않겠다."

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  provincePolicies,
  provinceSlogan,
  type JusticeColor,
  type Policy,
} from "@/data/policies-province";
import { cityPolicies, citySlogan } from "@/data/policies-city";
import { candidates } from "@/data/candidates";
import { endorsements } from "@/data/endorsements";

// 사진 자리 — 실제 파일을 public/에 떨어뜨리고 경로만 채우면 자동 적용된다.
// 빈 문자열이면 점선 플레이스홀더(단체사진) / 이니셜 배지(프로필) / 텍스트 배지(로고)로 폴백.
const LOGO_SRC = "/logo-justice.png";
const GROUP_VERTICAL_SRC = "/candidates/group-vertical.jpg";
const GROUP_HORIZONTAL_SRC = "/candidates/group-horizontal.jpg";

const serif = { fontFamily: "var(--font-display-serif)" };
const poster = { fontFamily: "var(--font-display-poster)" };
const mono = { fontFamily: "var(--font-mono)" };

const dotColor: Record<JusticeColor, string> = {
  yellow: "bg-justice-yellow",
  red: "bg-justice-red",
  green: "bg-justice-green",
  purple: "bg-justice-purple",
};
const stampBorder: Record<JusticeColor, string> = {
  yellow: "border-justice-yellow",
  red: "border-justice-red",
  green: "border-justice-green",
  purple: "border-justice-purple",
};
const stampText: Record<JusticeColor, string> = {
  yellow: "text-ink",
  red: "text-justice-red",
  green: "text-justice-green",
  purple: "text-justice-purple",
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Chapter({
  no,
  kicker,
  inverted = false,
}: {
  no: string;
  kicker: string;
  inverted?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <span
        style={serif}
        className={`text-[44px] leading-none ${inverted ? "text-paper/40" : "text-ink/30"}`}
      >
        {no}
      </span>
      <span
        style={mono}
        className={`text-[10px] tracking-[0.25em] uppercase ${inverted ? "text-paper/60" : "text-ink/50"}`}
      >
        {kicker}
      </span>
    </div>
  );
}

function Stamp({
  no,
  color = "yellow",
}: {
  no: string;
  color?: JusticeColor;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center w-12 h-12 rounded-full border-[2.5px] bg-paper ${stampBorder[color]} ${stampText[color]}`}
      style={{ ...poster, transform: "rotate(-5deg)" }}
    >
      <span className="text-[20px] leading-none">{no}</span>
    </span>
  );
}

// B에서 가져온 옅은 블롭 — 배경에 단 한두 개만, 잉크 번짐처럼
function Blob({
  color,
  className,
  opacity = 0.12,
}: {
  color: JusticeColor;
  className?: string;
  opacity?: number;
}) {
  const fill = {
    yellow: "#ffed00",
    red: "#e8306d",
    green: "#00a366",
    purple: "#623e91",
  }[color];
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={`absolute pointer-events-none ${className ?? ""}`}
      style={{ opacity }}
    >
      <path
        fill={fill}
        d="M44.7,-58.6C57.3,-49.5,66.4,-34.7,69.7,-18.7C73,-2.6,70.5,14.6,62.5,28.7C54.4,42.7,40.8,53.7,25.4,60.4C10,67.2,-7.2,69.6,-23.5,65.5C-39.7,61.4,-55.1,50.7,-63.6,36C-72.1,21.3,-73.7,2.5,-69.4,-14.4C-65.1,-31.3,-54.9,-46.4,-41.5,-55.7C-28.1,-65,-14.1,-68.5,1.4,-70.3C16.8,-72.2,32.1,-67.7,44.7,-58.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative grain bg-cream px-7 pt-20 pb-24 overflow-hidden snap-start min-h-[100dvh] flex flex-col justify-center">
      <Blob color="yellow" className="w-[420px] h-[420px] -top-24 -right-32" opacity={0.16} />
      <div className="relative z-10 -mt-[30px]">
        <Reveal>
          <p style={mono} className="text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-6">
            A WEB DOCUMENTARY · 2026 정의당 경남
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={serif} className="text-[17px] leading-[1.85] text-ink/80">
            공보물 한 장에 다 담지 못한 이야기.
            <br />
            스크롤로 천천히 따라와 주세요.
          </p>
        </Reveal>

        {/* 투표용지 두 장 — 살포시 등장 후, 각 카드의 정의당 영역에 도장이 찍힘 */}
        {/* -mx-7로 섹션 좌우 패딩을 벗어나 풀폭 사용 → 겹침 최소화 */}
        <div className="mt-6 -mx-7 relative h-[360px] flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 68, x: -76, rotate: -9 }}
            animate={{ opacity: 1, y: 40, x: -76, rotate: -9 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="absolute z-0"
          >
            <div className="relative">
              <Image
                src="/ballots/9.png"
                alt="경상남도의회 비례 투표용지 — 9번 정의당"
                width={220}
                height={307}
                className="drop-shadow-[0_14px_32px_rgba(0,0,0,0.22)]"
                priority
              />
              {/* 도장 — 9번 정의당 띠 위에 찍힘 */}
              <motion.div
                initial={{ opacity: 0, scale: 2.6 }}
                animate={{
                  opacity: 1,
                  scale: [2.6, 1, 0.88, 1.07, 1],
                }}
                transition={{
                  duration: 0.55,
                  delay: 1.4,
                  times: [0, 0.55, 0.72, 0.88, 1],
                  ease: ["easeIn", "easeOut", "easeOut", "easeOut"],
                  opacity: { duration: 0.18, delay: 1.4, ease: "easeOut" },
                }}
                className="absolute bottom-[20px] right-[14px]"
                style={{ transformOrigin: "center" }}
              >
                <div style={{ transform: "rotate(-14deg)" }}>
                  <Image
                    src="/ballots/in.png"
                    alt="기표 도장"
                    width={28}
                    height={27}
                    className="drop-shadow-[0_3px_6px_rgba(0,0,0,0.18)]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -2, x: 76, rotate: 7 }}
            animate={{ opacity: 1, y: -30, x: 76, rotate: 7 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
            className="absolute z-10"
          >
            <div className="relative">
              <Image
                src="/ballots/7.png"
                alt="창원시의회 비례 투표용지 — 7번 정의당"
                width={220}
                height={307}
                className="drop-shadow-[0_14px_32px_rgba(0,0,0,0.22)]"
                priority
              />
              {/* 도장 — 7번 정의당 띠 위에 찍힘 */}
              <motion.div
                initial={{ opacity: 0, scale: 2.6 }}
                animate={{
                  opacity: 1,
                  scale: [2.6, 1, 0.88, 1.07, 1],
                }}
                transition={{
                  duration: 0.55,
                  delay: 1.75,
                  times: [0, 0.55, 0.72, 0.88, 1],
                  ease: ["easeIn", "easeOut", "easeOut", "easeOut"],
                  opacity: { duration: 0.18, delay: 1.75, ease: "easeOut" },
                }}
                className="absolute bottom-[22px] right-[14px]"
                style={{ transformOrigin: "center" }}
              >
                <div style={{ transform: "rotate(-14deg)" }}>
                  <Image
                    src="/ballots/in.png"
                    alt="기표 도장"
                    width={28}
                    height={27}
                    className="drop-shadow-[0_3px_6px_rgba(0,0,0,0.18)]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <Reveal delay={2.4}>
          <div className="mt-10 flex items-center gap-3 text-ink/55">
            <span style={mono} className="text-[10px] tracking-[0.2em] uppercase">
              scroll
            </span>
            <span className="h-px flex-1 bg-ink/20" />
            <span style={mono} className="text-[10px] tracking-[0.2em]">
              01 / 09
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// 팩트 1 — 경남 인구유출 1위 → (0.5초 stagger) 창원 수도권 순유출 1위 (이중 타격)
function FactOne() {
  return (
    <section className="relative grain bg-paper px-7 py-24 border-t border-ink/10 overflow-hidden snap-start min-h-[100dvh]">
      <div className="relative z-10">
        <Chapter no="02" kicker="A FACT" />

        {/* 1차 — 경남 인구유출 1위 */}
        <Reveal>
          <p style={serif} className="text-[19px] leading-[1.7] text-ink/85">
            전국에서 인구가 가장 빠르게 빠져나간 광역지자체.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={poster} className="mt-8 text-[140px] leading-[0.85] text-ink">
            1위
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <p style={serif} className="mt-3 text-[17px] leading-snug font-bold text-ink/80">
            2026년 1분기, 경상남도
          </p>
        </Reveal>

        {/* 2차 — 창원 수도권 순유출 1위 (0.5초 뒤 stagger로 이중 타격) */}
        <Reveal delay={0.85}>
          <p style={serif} className="mt-16 text-[19px] leading-[1.7] text-ink/85">
            그중에서도, 수도권으로 가장 많이 빠져나간 도시.
          </p>
        </Reveal>
        <Reveal delay={1.05}>
          <p style={poster} className="mt-8 text-[140px] leading-[0.85] text-ink">
            1위
          </p>
        </Reveal>
        <Reveal delay={1.2}>
          <p style={serif} className="mt-3 text-[17px] leading-snug font-bold text-ink/80">
            2024년, 창원
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// 팩트 2 — 1인당 자동차 보유 전국 2위 (제주 제외)
function FactTwo() {
  return (
    <section className="relative grain bg-cream px-7 py-24 border-t border-ink/10 overflow-hidden snap-start min-h-[100dvh] flex flex-col justify-center">
      <Blob color="red" className="w-[280px] h-[280px] -bottom-20 -left-20" opacity={0.1} />
      <div className="relative z-10">
        <Chapter no="03" kicker="A FACT" />

        <Reveal>
          <p style={serif} className="text-[19px] leading-[1.7] text-ink/85">
            1인당 자동차 보유, 제주 빼면 전국에서 두 번째.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-baseline gap-3">
            <span style={poster} className="text-[160px] leading-[0.85] text-ink">
              2위
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.35}>
          <p style={serif} className="mt-4 text-[18px] leading-snug font-bold text-ink/80 whitespace-nowrap">
            — 차 없으면 출퇴근도 못 하는 경남.
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <p style={mono} className="mt-12 text-[10px] tracking-[0.2em] uppercase text-ink/45">
            출처 · 국토교통부 자동차등록통계 · 2025.06 기준
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// 질문 — 단 한 번의 노랑 풀블록 클라이맥스
function Question() {
  return (
    <section className="relative grain bg-justice-yellow text-ink px-7 py-28 overflow-hidden snap-start min-h-[100dvh] flex flex-col justify-center">
      <div className="relative z-10">
        <Chapter no="04" kicker="THE QUESTION" />
        <Reveal>
          <p style={mono} className="text-[10px] tracking-[0.3em] uppercase text-ink/70 mb-5">
            팩트 두 개를 보고 나면, 남는 건 하나의 질문
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 style={serif} className="text-[40px] leading-[1.1] font-black">
            경남,
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <h2 style={poster} className="mt-2 text-[88px] leading-[0.9] text-ink">
            이대로
            <br />
            둘끼가?
          </h2>
        </Reveal>

        <Reveal delay={0.5}>
          <p style={serif} className="mt-12 text-[16px] leading-[1.85] text-ink/80 max-w-sm">
            이대로 두지 않기 위해, 우리는 답을 가지고 있습니다.
            <br />
            먼저, 그 답을
            <br />
            어디에 적어야 하는지부터.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function BallotRow({
  stampImg,
  stampW,
  stampH,
  stampAlt,
  label,
  desc,
}: {
  stampImg: string;
  stampW: number;
  stampH: number;
  stampAlt: string;
  label: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border-2 border-ink bg-paper p-5 grid grid-cols-[auto_1fr] gap-4 items-center">
      <Image
        src={stampImg}
        alt={stampAlt}
        width={stampW}
        height={stampH}
        className="shrink-0"
      />
      <div className="pt-1">
        <p style={serif} className="text-[18px] font-bold">
          {label}
        </p>
        <p className="text-[14px] text-ink/65 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Explain() {
  return (
    <section className="relative grain bg-cream px-7 py-16 border-t border-ink/10 overflow-hidden snap-start min-h-[100dvh] flex flex-col justify-center">
      <div className="relative z-10">
        <Chapter no="05" kicker="HOW TO VOTE" />

        <Reveal>
          <p style={serif} className="text-[18px] leading-tight font-bold text-ink/75">
            투표용지,
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-1 flex items-baseline gap-3">
            <span style={poster} className="text-[80px] leading-[0.85]">
              7장
            </span>
            <span style={serif} className="text-[18px] font-bold text-ink/75">
              받습니다.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p style={serif} className="mt-6 text-[15px] leading-[1.75] text-ink/80">
            선거일은 <strong>3장 먼저, 4장 나중에</strong>.
            <br />
            사전 투표는 <strong>7장 한꺼번에</strong>.
            <br />그 중{" "}
            <span className="bg-justice-yellow px-1 text-ink">
              정당 이름만 적힌 두 장
            </span>
            이 비례대표입니다.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-6 grid grid-cols-1 gap-3">
            <BallotRow
              stampImg="/ballots/no9.png"
              stampW={52}
              stampH={62}
              stampAlt="9번"
              label="경남도의회 비례"
              desc="경남도 정책 · 경남 도민 모두"
            />
            <BallotRow
              stampImg="/ballots/no7.png"
              stampW={52}
              stampH={60}
              stampAlt="7번"
              label="창원시의회 비례"
              desc="창원 정책 · 창원시민만"
            />
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <p style={serif} className="mt-8 text-[24px] leading-[1.15] font-black">
            비례대표는
            <br />
            투표용지 맨 아래,{" "}
            <span
              style={poster}
              className="bg-ink text-justice-yellow px-2 inline-block leading-[1] py-1 font-normal"
            >
              정의당
            </span>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PolicyItem({ policy, idx }: { policy: Policy; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`relative rounded-2xl border-2 border-ink/15 bg-paper overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-ink/30 active:translate-y-0 active:shadow-sm ${open ? "shadow-md border-ink/30" : ""}`}
    >
      {/* 좌측 컬러 stripe — 공약 컬러 + 클릭 가능성 신호 */}
      <span
        aria-hidden
        className={`absolute left-0 top-0 bottom-0 w-[6px] ${dotColor[policy.color]}`}
      />
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full text-left p-6 pl-7 min-h-[44px]"
      >
        <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
          <Stamp no={String(idx + 1).padStart(2, "0")} color={policy.color} />
          <div>
            <div className="flex items-center gap-2 mb-2 mt-1">
              <span
                className={`w-1.5 h-1.5 rounded-full ${dotColor[policy.color]}`}
                aria-hidden
              />
              <span style={mono} className="text-[10px] tracking-[0.2em] uppercase text-ink/50">
                policy {policy.id}
              </span>
            </div>
            <h3 style={serif} className="text-[24px] font-black leading-tight">
              {policy.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{policy.summary}</p>
          </div>
        </div>
        {/* 하단 CTA — 펼침/접힘 명시 */}
        <div className="mt-5 pl-[64px] flex items-center gap-2 text-ink/70">
          <span style={mono} className="text-[11px] tracking-[0.2em] uppercase font-bold">
            {open ? "본문 접기" : "본문 보기"}
          </span>
          <span
            aria-hidden
            className="text-[14px] font-bold transition-transform duration-300"
            style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            →
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-7 pl-[92px] space-y-6">
              {policy.description && (
                <p
                  style={serif}
                  className="text-[14px] leading-[1.75] text-ink/70 border-l-2 border-ink/15 pl-3 italic"
                >
                  {policy.description}
                </p>
              )}
              {policy.details.map((d) => (
                <div key={d.subtitle}>
                  <p style={serif} className="text-[15px] font-bold text-ink mb-2">
                    {d.subtitle}
                  </p>
                  {d.items.length > 0 && (
                    <ul className="space-y-2">
                      {d.items.map((it, i) => (
                        <li
                          key={i}
                          className="text-[14px] leading-relaxed text-ink/75 pl-3 border-l border-ink/20"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function ProvincePolicies() {
  return (
    <section className="relative bg-paper px-7 py-24 border-t border-ink/10 overflow-hidden snap-start">
      <Blob color="purple" className="w-[280px] h-[280px] -top-16 -right-24" opacity={0.1} />
      <div className="relative z-10">
        <Chapter no="06" kicker="PROMISES — 경남도비례" />

        <Reveal>
          <h2 style={serif} className="text-[34px] leading-[1.1] font-black">
            공보물은 얇아도, <br />
            공약은
            <br />
            <span style={poster} className="text-[44px] leading-none font-normal">
              두껍습니다.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 rounded-2xl border-2 border-ink bg-cream p-5">
            <p style={mono} className="text-[10px] tracking-[0.25em] uppercase text-ink/55 mb-2">
              경남 비전
            </p>
            <p
              style={serif}
              className="text-[18px] leading-[1.55] font-bold text-ink whitespace-pre-line text-center"
            >
              &ldquo;{provinceSlogan}&rdquo;
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={serif} className="mt-5 text-[16px] leading-[1.85] text-ink/70">
            {provincePolicies.length}개의 약속.
            <br />
            카드를 펼쳐 본문까지 읽어주세요.
          </p>
        </Reveal>
        <div className="mt-10 space-y-4">
          {provincePolicies.map((p, i) => (
            <PolicyItem key={p.id} policy={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CityPolicies() {
  if (cityPolicies.length === 0) {
    return (
      <section className="relative grain bg-cream px-7 py-20 border-t border-ink/10 overflow-hidden snap-start">
        <div className="relative z-10">
          <Chapter no="07" kicker="PROMISES — 창원시비례" />
          <Reveal>
            <h2 style={serif} className="text-[28px] leading-tight font-black">
              창원에서, 함께.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 rounded-2xl border-2 border-dashed border-ink/30 bg-paper py-9 px-6">
              <p style={mono} className="text-[10px] tracking-[0.25em] uppercase text-ink/55 mb-3">
                COMING SOON
              </p>
              <p style={serif} className="text-[16px] leading-relaxed text-ink/75">
                창원시비례 공약은 곧 이 자리에 채워집니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="relative grain bg-cream px-7 py-24 border-t border-ink/10 overflow-hidden snap-start">
      <Blob color="green" className="w-[260px] h-[260px] -bottom-20 -left-20" opacity={0.1} />
      <div className="relative z-10">
        <Chapter no="07" kicker="PROMISES — 창원시비례" />
        <Reveal>
          <h2 style={serif} className="text-[34px] leading-[1.1] font-black">
            창원에서,{" "}
            <span style={poster} className="text-[44px] leading-none font-normal">
              함께.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 rounded-2xl border-2 border-ink bg-paper p-5">
            <p style={mono} className="text-[10px] tracking-[0.25em] uppercase text-ink/55 mb-2">
              창원 비전
            </p>
            <p
              style={serif}
              className="text-[18px] leading-[1.55] font-bold text-ink whitespace-pre-line text-center"
            >
              &ldquo;{citySlogan}&rdquo;
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={serif} className="mt-5 text-[16px] leading-[1.85] text-ink/70">
            창원시민만 받는 한 장. {cityPolicies.length}개의 약속.
          </p>
        </Reveal>
        <div className="mt-10 space-y-4">
          {cityPolicies.map((p, i) => (
            <PolicyItem key={p.id} policy={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function People() {
  return (
    <section className="relative bg-paper px-7 py-24 border-t border-ink/10 overflow-hidden snap-start">
      <Blob color="yellow" className="w-[300px] h-[300px] top-32 -left-24" opacity={0.1} />
      <div className="relative z-10">
        <Chapter no="08" kicker="PEOPLE" />
        <Reveal>
          <h2 style={serif} className="text-[34px] leading-[1.1] font-black">
            얼굴이 보이는 <br />
            경남의 정치.
          </h2>
        </Reveal>

        {/* 후보 단체사진 (세로) */}
        <Reveal delay={0.1}>
          {GROUP_VERTICAL_SRC ? (
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-ink/15 mt-10">
              <Image
                src={GROUP_VERTICAL_SRC}
                alt="정의당 경남 비례 후보 단체사진"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[4/5] rounded-2xl border-2 border-dashed border-ink/25 bg-cream flex items-center justify-center mt-10">
              <p style={mono} className="text-[10px] tracking-[0.2em] uppercase text-ink/40 text-center px-4 leading-relaxed">
                후보 단체사진 (세로)
                <br />
                /images/candidates/group-vertical.jpg
              </p>
            </div>
          )}
        </Reveal>

        <div className="mt-10 space-y-6">
          {candidates.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <article className="rounded-2xl border-2 border-ink/15 bg-cream p-6 grid grid-cols-[72px_1fr] gap-5">
                {c.photo ? (
                  <div
                    className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-ink/20 bg-paper"
                    aria-label={`${c.name} 후보`}
                  >
                    <Image
                      src={c.photo}
                      alt={c.name}
                      fill
                      sizes="72px"
                      className="object-cover"
                      style={c.photoTransform ? { transform: c.photoTransform } : undefined}
                    />
                  </div>
                ) : (
                  <div
                    className="w-[72px] h-[72px] rounded-full bg-paper border-2 border-ink/20 flex items-center justify-center"
                    aria-label={`${c.name} 후보`}
                  >
                    <span style={poster} className="text-[36px] leading-none text-ink">
                      {c.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p style={mono} className="text-[10px] tracking-[0.25em] uppercase text-ink/55">
                    {c.position}
                  </p>
                  <h3 style={serif} className="text-[24px] font-black mt-1 leading-tight">
                    {c.name}
                  </h3>
                  <p className="text-[13px] text-ink/65 mt-0.5">{c.nickname}</p>
                  {c.careers && c.careers.length > 0 ? (
                    <ul className="mt-3 space-y-1.5">
                      {c.careers.map((line, li) => (
                        <li
                          key={li}
                          className="text-[13px] leading-relaxed text-ink/80 pl-3 border-l border-ink/15"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  ) : c.bio ? (
                    <p className="mt-3 text-[14px] leading-relaxed text-ink/80">{c.bio}</p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// 추천사와 푸터 사이의 가로 단체사진
function GroupShot() {
  if (GROUP_HORIZONTAL_SRC) {
    return (
      <section className="bg-cream snap-start">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={GROUP_HORIZONTAL_SRC}
            alt="정의당 경남 비례 후보 단체사진"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
    );
  }
  return (
    <section className="bg-cream px-7 py-10 snap-start">
      <div className="aspect-[16/9] rounded-2xl border-2 border-dashed border-ink/25 bg-paper flex items-center justify-center">
        <p style={mono} className="text-[10px] tracking-[0.2em] uppercase text-ink/40 text-center px-4 leading-relaxed">
          후보 단체사진 (가로)
          <br />
          /images/candidates/group-horizontal.jpg
        </p>
      </div>
    </section>
  );
}

function Endorsements() {
  return (
    <section className="bg-ink text-paper px-7 py-24 snap-start">
      <Chapter no="09" kicker="ENDORSEMENTS" inverted />
      <div className="space-y-16">
        {endorsements.map((e, i) => (
          <Reveal key={e.id} delay={i * 0.1}>
            <article>
              <p style={poster} className="text-justice-yellow text-[68px] leading-none -ml-1">
                &ldquo;
              </p>
              <blockquote style={serif} className="text-[22px] leading-[1.5] font-bold mt-2">
                {e.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                {e.photo && (
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-justice-yellow">
                    <Image src={e.photo} alt={e.name} fill sizes="44px" className="object-cover" />
                  </div>
                )}
                <div>
                  <p style={serif} className="text-[17px] font-bold">
                    {e.name}
                  </p>
                  <p style={mono} className="text-[10px] tracking-[0.2em] uppercase text-paper/60 mt-0.5">
                    {e.title}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="bg-cream border-t border-ink/10 snap-start">
      <div className="h-2 bg-justice-yellow" />
      <div className="px-7 py-14">
        <div className="flex items-start justify-between gap-6">
          <div>
            {LOGO_SRC ? (
              <div className="mb-4">
                <Image
                  src={LOGO_SRC}
                  alt="정의당"
                  width={130}
                  height={81}
                  className="w-auto h-[44px]"
                />
              </div>
            ) : (
              <div className="inline-block border-2 border-ink rounded-md px-2.5 py-1 mb-4">
                <span style={poster} className="text-[18px] text-ink leading-none">
                  정의당
                </span>
              </div>
            )}
            <p style={serif} className="text-[13px] leading-relaxed text-ink/75">
              정의당 경상남도당
              <br />
              <a
                href="tel:055-267-6467"
                className="font-bold text-ink underline underline-offset-2"
              >
                055-267-6467
              </a>
            </p>
          </div>
          <p
            style={mono}
            className="text-[10px] tracking-[0.2em] uppercase text-ink/45 text-right leading-relaxed"
          >
            제9회
            <br />
            전국동시지방선거
            <br />
            2026.06.03
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function PageLikethis() {
  return (
    <main className="bg-cream">
      <Hero />
      <FactOne />
      <FactTwo />
      <Question />
      <Explain />
      <ProvincePolicies />
      <CityPolicies />
      <People />
      <Endorsements />
      <GroupShot />
      <Foot />
    </main>
  );
}
