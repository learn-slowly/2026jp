'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeroV3Props {
  candidate: {
    name: string;
    position: string;
    election: string;
    visionLines: string[];
    introLines: string[];
    careers: { type: string; text: string }[];
    heroImage: string;
    // 옵션: 후보별 hero 이미지 위치/크기 조정. 미입력 시 기본값(1.5, 0, 0) 적용.
    heroImageScale?: number;
    heroImageOffsetX?: number;
    heroImageOffsetY?: number;
  };
}

const NAV_ITEMS = [
  { label: '후보소개', href: '#about' },
  { label: '출마선언', href: '#declaration' },
  { label: '정책공약', href: '#policies' },
  { label: '활동', href: '#activities' },
  { label: '일정', href: '#schedule' },
];

export function HeroV3({ candidate }: HeroV3Props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // 후보별 커스텀 위치/크기 — 값이 명시적으로 들어왔을 때만 transform 적용.
  // (기존 후보자 데이터 호환: 시트가 비어있으면 기존 모바일 1.5x / 데스크탑 1x 동작 유지)
  const hasCustom =
    candidate.heroImageScale !== undefined ||
    candidate.heroImageOffsetX !== undefined ||
    candidate.heroImageOffsetY !== undefined;
  const customScale = candidate.heroImageScale ?? 1.5;
  const customOffsetX = candidate.heroImageOffsetX ?? 0;
  const customOffsetY = candidate.heroImageOffsetY ?? 0;
  const customStyle: React.CSSProperties | undefined = hasCustom
    ? {
        transform: `translate(${customOffsetX}%, ${customOffsetY}%) scale(${customScale})`,
        transformOrigin: 'top center',
      }
    : undefined;

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, #FFF000 0%, #FFF000 95%, #ffffff 100%)',
      }}
    >
      {/* Top Navigation */}
      <nav className="relative z-20">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-end justify-between gap-4">
          <div className="flex items-end gap-3 sm:gap-6 min-w-0" style={{ display: 'flex' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Group-8.svg"
              alt="정의당"
              className="h-10 sm:h-12 md:h-14 w-auto block flex-shrink-0"
            />
            {(candidate.position || candidate.name) && (
              <div
                className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-2.5 text-d-blueblack leading-tight min-w-0"
                style={{ display: 'flex' }}
              >
                {candidate.position && (
                  <span className="text-[11px] sm:text-base md:text-lg font-bold whitespace-nowrap">
                    {candidate.position}
                  </span>
                )}
                {candidate.name && (
                  <span
                    className="text-base sm:text-xl md:text-2xl whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 800 }}
                  >
                    {candidate.name}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3" style={{ display: 'flex' }}>
            <ul className="hidden md:flex items-center gap-2 text-base lg:text-lg font-medium text-d-blueblack">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block rounded-full px-4 py-2.5 hover:bg-white focus:bg-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#donation"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-white text-d-blueblack px-5 py-2.5 text-base lg:text-lg font-bold shadow-sm hover:opacity-90 active:scale-[0.98] transition"
            >
              후원하기
            </a>
            {/* 모바일 햄버거 버튼 (md 이하에서만 표시) */}
            <button
              type="button"
              onClick={() => setMobileNavOpen((v) => !v)}
              aria-label={mobileNavOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-d-blueblack shadow-sm hover:opacity-90 active:scale-[0.98] transition"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 모바일 nav 드롭다운 */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileNavOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="px-6 pb-4 space-y-1 text-base font-medium text-d-blueblack">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="block rounded-xl px-4 py-3 bg-white/60 hover:bg-white transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#donation"
                onClick={() => setMobileNavOpen(false)}
                className="block text-center rounded-xl px-4 py-3 bg-d-blueblack text-justice-yellow-bright font-bold transition"
              >
                후원하기
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-6xl w-full px-6 pt-8 md:pt-10 pb-12 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6 z-10 min-w-0">
          {/* Election badge */}
          <div
            className="inline-flex items-center rounded-full bg-white px-5 py-2 shadow-sm"
            style={{ display: 'inline-flex' }}
          >
            <span className="text-sm md:text-base font-bold text-d-blueblack">
              {candidate.election}
            </span>
          </div>

          {/* Big Headline (Paperlogy ExtraBold) */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] tracking-tight break-keep text-d-blueblack"
            style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 800 }}
          >
            {candidate.visionLines.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>
                {line}
              </span>
            ))}
          </h1>

          {/* 모바일 전용: visionLines와 introLines 사이에 후보자 이미지 */}
          <div className="md:hidden relative h-[420px] sm:h-[480px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={candidate.heroImage}
              alt={candidate.name}
              className={
                hasCustom
                  ? 'w-full h-full object-contain object-top drop-shadow-xl'
                  : 'w-full h-full object-contain object-top drop-shadow-xl scale-[1.5] origin-top'
              }
              style={customStyle}
            />
            {/* 하단 페이드 그라데이션 (hero 배경 노랑색과 자연스럽게 이어짐) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(255,240,0,0) 0%, rgba(255,240,0,0.6) 50%, #FFF000 100%)',
              }}
            />
          </div>

          {/* Intro position */}
          <div className="space-y-1 text-base md:text-lg font-bold leading-snug text-d-blueblack">
            {candidate.introLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* Career list */}
          <ul className="space-y-1 sm:space-y-1.5 pt-2 w-full max-w-full">
            {candidate.careers.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 w-full max-w-full"
                style={{ display: 'flex', minWidth: 0 }}
              >
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 rounded bg-d-blueblack text-justice-yellow-bright text-[9px] sm:text-[11px] font-extrabold"
                  style={{ fontFamily: 'var(--font-paperlogy)' }}
                >
                  {c.type}
                </span>
                <span
                  className="flex-1 text-xs sm:text-sm md:text-base font-semibold leading-snug sm:leading-relaxed break-keep text-d-blueblack"
                  style={{ minWidth: 0, overflowWrap: 'anywhere' }}
                >
                  {c.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Image (데스크톱 전용 — 모바일에서는 위 텍스트 사이에 표시됨) */}
        <div className="hidden md:block relative md:h-[617px] lg:h-[692px] overflow-hidden self-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={candidate.heroImage}
            alt={candidate.name}
            className="w-full h-auto block drop-shadow-xl"
            style={customStyle}
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
              const parent = img.parentElement;
              if (parent && !parent.querySelector('.fallback')) {
                const div = document.createElement('div');
                div.className =
                  'fallback w-full h-full flex items-center justify-center rounded-2xl bg-d-blueblack/5 border-2 border-dashed border-d-blueblack/20 text-d-blueblack/40 text-sm';
                div.textContent = '후보 사진 영역 (/images/v3-hero-candidate.png)';
                parent.appendChild(div);
              }
            }}
          />
          {/* 하단 페이드 그라데이션 (hero 배경 노랑색과 자연스럽게 이어짐) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 lg:h-48"
            style={{
              background:
                'linear-gradient(to bottom, rgba(255,240,0,0) 0%, rgba(255,240,0,0.6) 50%, #FFF000 100%)',
            }}
          />
        </div>
      </div>

      {/* Bottom white fade overlay (다음 섹션과 자연스럽게 이어지도록 짧은 페이드) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white z-10"
      />
    </section>
  );
}
