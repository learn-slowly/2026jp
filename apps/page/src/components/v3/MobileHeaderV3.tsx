'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: '후보소개', href: '#about' },
  { label: '출마선언', href: '#declaration' },
  { label: '정책공약', href: '#policies' },
  { label: '활동', href: '#activities' },
  { label: '일정', href: '#schedule' },
];

interface MobileHeaderV3Props {
  candidateName?: string;
  candidatePosition?: string;
}

export function MobileHeaderV3({ candidateName, candidatePosition }: MobileHeaderV3Props) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="md:hidden fixed top-0 left-0 right-0 z-50 bg-justice-yellow-bright"
    >
      <div
        className="h-14 px-4 flex items-center justify-between gap-3"
        style={{ display: 'flex' }}
      >
        <a
          href="#about"
          aria-label="페이지 상단으로"
          className="inline-flex items-end gap-2.5 min-w-0"
          style={{ display: 'inline-flex' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Group-8.svg" alt="정의당" className="h-7 w-auto block flex-shrink-0" />
          {(candidatePosition || candidateName) && (
            <div
              className="flex flex-col leading-tight text-d-blueblack min-w-0"
              style={{ display: 'flex' }}
            >
              {candidatePosition && (
                <span className="text-[11px] font-bold whitespace-nowrap truncate">
                  {candidatePosition}
                </span>
              )}
              {candidateName && (
                <span
                  className="text-base whitespace-nowrap truncate"
                  style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 800 }}
                >
                  {candidateName}
                </span>
              )}
            </div>
          )}
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          aria-controls="mobile-header-nav"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-d-blueblack hover:bg-white/80 active:scale-[0.96] transition"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        id="mobile-header-nav"
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-4 pb-4 pt-1 space-y-1 text-base font-medium text-d-blueblack">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 bg-white/70 hover:bg-white transition"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#donation"
              onClick={() => setOpen(false)}
              className="block text-center rounded-xl px-4 py-3 bg-d-blueblack text-justice-yellow-bright font-bold transition"
            >
              후원하기
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
