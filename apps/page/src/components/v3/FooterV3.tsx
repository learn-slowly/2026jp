'use client';

import { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

interface FooterV3Props {
  candidate: {
    name: string;
    position: string;
    election: string;
  };
  donation?: {
    account?: string;
    holder?: string;
  };
  social?: {
    facebook?: string;
    youtube?: string;
    instagram?: string;
    x?: string;
    blog?: string;
  };
  pageName?: string;
  pageUrl?: string;
  copyright?: string;
}

const SNS_DEFS: { key: 'facebook' | 'x' | 'instagram' | 'youtube' | 'blog'; src: string; label: string }[] = [
  { key: 'facebook', src: '/fb.png', label: 'Facebook' },
  { key: 'x', src: '/x.png', label: 'Twitter / X' },
  { key: 'instagram', src: '/ig.png', label: 'Instagram' },
  { key: 'youtube', src: '/yt.png', label: 'YouTube' },
  { key: 'blog', src: '/blog.png', label: 'Blog' },
];

export function FooterV3({ candidate, donation, social, pageName, pageUrl, copyright }: FooterV3Props) {
  const [copied, setCopied] = useState(false);

  const accountNumber = donation?.account?.trim() || '';
  const accountHolder = donation?.holder?.trim() || '';

  const snsLinks = SNS_DEFS.map((def) => ({
    ...def,
    href: social?.[def.key]?.trim() || '',
  })).filter((s) => s.href);

  const handleCopy = async () => {
    if (typeof navigator === 'undefined' || !accountNumber) return;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(accountNumber);
      } else {
        const ta = document.createElement('textarea');
        ta.value = accountNumber;
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

            {/* SNS icons — 등록된 링크만 표시 */}
            {snsLinks.length > 0 && (
              <div className="flex items-center gap-1.5" style={{ display: 'flex' }}>
                {snsLinks.map(({ src, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-block hover:opacity-80 transition"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={label} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Center: donation info box */}
          {accountNumber && (
            <div className="space-y-3">
              <p
                className="text-white text-sm font-bold"
                style={{ fontFamily: 'var(--font-paperlogy)' }}
              >
                후원정보
              </p>
              <div className="relative rounded-2xl border border-white/15 bg-black/20 px-5 py-5 pr-14 md:px-7 md:py-6 md:pr-16">
                <div className="flex flex-col gap-y-1" style={{ display: 'flex' }}>
                  <span
                    className="text-xl md:text-2xl tracking-tight text-white leading-tight break-all"
                    style={{ fontFamily: 'var(--font-inter)', fontWeight: 800 }}
                  >
                    {accountNumber}
                  </span>
                  {accountHolder && (
                    <span className="text-xs md:text-sm text-white/70 break-keep">
                      {accountHolder}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label={copied ? '계좌번호가 복사되었습니다' : '계좌번호 복사'}
                  className="absolute top-4 right-4 md:top-5 md:right-5 w-9 h-9 rounded-md hover:bg-white/10 flex items-center justify-center transition"
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
          )}

          {/* Right: justice party logo + page name + copyright */}
          <div className="space-y-3 md:text-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Group-1.svg"
              alt="정의당"
              className="h-12 w-auto md:ml-auto"
            />
            {pageName && (
              <a
                href={pageUrl?.trim() || '#'}
                target={pageUrl?.startsWith('http') ? '_blank' : undefined}
                rel={pageUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1 text-sm font-bold hover:opacity-80 transition"
              >
                {pageName}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {copyright && (
              <p
                className="text-xs text-d-mutedgrey"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {copyright}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
