'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DeclarationV3Props {
  candidateName: string;
  position: string;
  image?: string;
  videoId?: string;
  declarationText?: string;
}

export function DeclarationV3({
  candidateName,
  position,
  image,
  videoId,
  declarationText,
}: DeclarationV3Props) {
  const [isOpen, setIsOpen] = useState(false);
  const cleanPosition = position.replace(/\s*후보$/, '');

  return (
    <section id="declaration" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-6">
        {/* Hero media (video or image) with overlay */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/8] bg-d-blueblack">
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title={`${candidateName} 출마선언`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={`${candidateName} 출마선언`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {/* Dark gradient overlay (only for image) */}
          {!videoId && (
            <div className="absolute inset-0 bg-gradient-to-t from-d-blueblack/55 via-d-blueblack/15 to-transparent pointer-events-none"></div>
          )}

          {/* Text overlays only when showing image */}
          {!videoId && (
            <>
              {/* Top-right Justice Party wordmark */}
              <div className="absolute top-6 right-6 md:top-8 md:right-10 pointer-events-none">
                <span
                  className="text-2xl md:text-3xl text-white tracking-tight drop-shadow-md"
                  style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 900 }}
                >
                  정의당
                </span>
              </div>

              {/* Big text */}
              <div className="absolute bottom-8 md:bottom-12 left-8 md:left-14 pointer-events-none">
                <p
                  className="text-4xl sm:text-5xl md:text-7xl text-white leading-[1.1] tracking-tight break-keep"
                  style={{
                    fontFamily: 'var(--font-paperlogy)',
                    fontWeight: 800,
                    textShadow: '0 2px 12px rgba(0,0,0,0.25)',
                  }}
                >
                  {candidateName}
                  <br />
                  {cleanPosition} 출마선언
                </p>
              </div>
            </>
          )}
        </div>

        {/* Read full declaration button (toggles full text) */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="declaration-fulltext"
          className="w-full flex items-center justify-between gap-2 bg-d-darkgrey/15 hover:bg-d-darkgrey/25 transition rounded-2xl px-4 md:px-8 py-3 md:py-4 shadow-md group"
        >
          <div className="flex items-center gap-2 md:gap-4 min-w-0" style={{ display: 'flex' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Rectangle.png"
              alt=""
              aria-hidden="true"
              className="w-6 h-6 md:w-8 md:h-8 object-contain flex-shrink-0"
            />
            <span className="text-base sm:text-lg md:text-2xl font-bold text-d-softblack whitespace-nowrap">
              출마선언문 전문 보기
            </span>
          </div>
          <span className="inline-flex flex-shrink-0 items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-white group-hover:bg-d-lightgrey transition">
            <ChevronDown
              className={`w-4 h-4 md:w-5 md:h-5 text-d-grey group-hover:text-d-blueblack transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </span>
        </button>

        {/* Full declaration text (expanded panel) */}
        <div
          id="declaration-fulltext"
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsOpen(false);
              }
            }}
            aria-label="출마선언문 전문 접기"
            className="rounded-2xl bg-d-darkgrey/10 hover:bg-d-darkgrey/15 transition cursor-pointer px-6 md:px-10 py-8 md:py-10"
          >
            {declarationText ? (
              <div className="text-base md:text-lg leading-loose text-d-blueblack break-keep whitespace-pre-line">
                {declarationText}
              </div>
            ) : (
              <p className="text-sm md:text-base text-d-grey break-keep">
                출마선언문 전문이 아직 등록되지 않았습니다.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
