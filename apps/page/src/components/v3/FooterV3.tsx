'use client';

import { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

interface FooterV3Props {
  candidate: {
    name: string;
    position: string;
    election: string;
  };
}

const SNS_LINKS = [
  { src: '/fb.png', href: '#', label: 'Facebook' },
  { src: '/x.png', href: '#', label: 'Twitter / X' },
  { src: '/ig.png', href: '#', label: 'Instagram' },
  { src: '/yt.png', href: '#', label: 'YouTube' },
  { src: '/blog.png', href: '#', label: 'Blog' },
  { src: '/home.png', href: '#', label: 'Homepage' },
];

const ACCOUNT_NUMBER = '301-0217-9031-51';

export function FooterV3({ candidate }: FooterV3Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof navigator === 'undefined') return;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(ACCOUNT_NUMBER);
      } else {
        // Fallback for older / insecure contexts
        const ta = document.createElement('textarea');
        ta.value = ACCOUNT_NUMBER;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* swallow */
    }
  };

  return (
    <footer id="donation" className="bg-d-blueblack text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr_1fr] gap-10 md:gap-8 items-start">
          {/* Left: candidate info + SNS */}
          <div className="space-y-5">
            <p
              className="text-justice-yellow-bright text-sm md:text-base font-bold"
              style={{ fontFamily: 'var(--font-paperlogy)' }}
            >
              {candidate.election}
            </p>

            {/* check + (name / position) — name and position share the same start line */}
            <div className="flex items-center gap-2.5" style={{ display: 'flex' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/check-white.svg"
                alt=""
                aria-hidden="true"
                className="h-7 md:h-8 w-auto"
              />
              <div className="flex flex-col" style={{ display: 'flex' }}>
                <span
                  className="text-2xl md:text-3xl tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 900 }}
                >
                  {candidate.name}
                </span>
                <p className="text-xs md:text-sm text-white/85 mt-0.5">
                  {candidate.position}
                </p>
              </div>
            </div>

            {/* SNS icons (6) — original PNG sizes */}
            <div className="flex items-center gap-1.5" style={{ display: 'flex' }}>
              {SNS_LINKS.map(({ src, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-block hover:opacity-80 transition"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={label} />
                </a>
              ))}
            </div>
          </div>

          {/* Center: donation info box */}
          <div className="space-y-3">
            <p
              className="text-white text-sm font-bold"
              style={{ fontFamily: 'var(--font-paperlogy)' }}
            >
              후원정보
            </p>
            <div className="relative rounded-2xl border border-white/15 bg-black/20 px-7 py-6 md:px-8 md:py-7">
              <p className="text-lg md:text-xl font-bold text-white mb-2">농협</p>
              <div className="flex items-baseline gap-x-3 whitespace-nowrap" style={{ display: 'flex' }}>
                <span
                  className="text-[28px] md:text-[36px] tracking-tight text-white leading-none"
                  style={{ fontFamily: 'var(--font-inter)', fontWeight: 800 }}
                >
                  {ACCOUNT_NUMBER}
                </span>
                <span className="text-sm text-white/70 shrink-0">정의당중앙당후원회</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                aria-label={copied ? '계좌번호가 복사되었습니다' : '계좌번호 복사'}
                className="absolute top-5 right-5 w-9 h-9 rounded-md hover:bg-white/10 flex items-center justify-center transition"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-justice-yellow-bright" />
                ) : (
                  <Copy className="w-5 h-5 text-white/70" />
                )}
              </button>
              {copied && (
                <span
                  role="status"
                  aria-live="polite"
                  className="absolute -bottom-7 right-2 text-xs text-justice-yellow-bright font-bold"
                >
                  복사됨
                </span>
              )}
            </div>
          </div>

          {/* Right: justice party logo + page name + copyright */}
          <div className="space-y-3 md:text-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Group-1.svg"
              alt="정의당"
              className="h-12 w-auto md:ml-auto"
            />
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-bold hover:opacity-80 transition"
            >
              2026 정의당 지방선거특별페이지
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <p
              className="text-xs text-d-mutedgrey"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              ⓒ2021. Justice Party. No rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
