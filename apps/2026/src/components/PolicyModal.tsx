'use client';

import { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';

export type PolicyModalColor = 'green' | 'purple' | 'green-dark' | 'yellow' | 'pink';

const HEADER_GRADIENT: Record<PolicyModalColor, string> = {
  green: 'from-justice-green to-justice-green-dark',
  purple: 'from-justice-purple to-justice-purple-dark',
  'green-dark': 'from-justice-green-dark to-justice-green',
  yellow: 'from-justice-yellow to-justice-yellow-dark',
  pink: 'from-justice-pink to-justice-pink-dark',
};

const HEADER_TEXT: Record<PolicyModalColor, string> = {
  green: 'text-white',
  purple: 'text-white',
  'green-dark': 'text-white',
  yellow: 'text-gray-900',
  pink: 'text-white',
};

const SECTION_NUMBER_COLOR: Record<PolicyModalColor, string> = {
  green: 'text-justice-green',
  purple: 'text-justice-purple',
  'green-dark': 'text-justice-green-dark',
  yellow: 'text-justice-yellow-dark',
  pink: 'text-justice-pink',
};

export type PolicyModalSection = {
  title: string;
  policies: string[];
};

export type PolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  accentColor: PolicyModalColor;
  sections: PolicyModalSection[];
  pdfHref?: string;
};

const NUMBER_CHARS = ['❶', '❷', '❸', '❹', '❺', '❻', '❼'];

export function PolicyModal({
  isOpen,
  onClose,
  eyebrow,
  title,
  subtitle,
  description,
  accentColor,
  sections,
  pdfHref = '/justice-2026-policy.pdf',
}: PolicyModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const showNumber = sections.length > 1;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
        tabIndex={-1}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
        className={`relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col transition-transform duration-200 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        <div
          className={`relative px-6 md:px-10 py-8 md:py-12 bg-gradient-to-br ${HEADER_GRADIENT[accentColor]} ${HEADER_TEXT[accentColor]}`}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>

          {eyebrow && (
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider opacity-80 mb-2">
              {eyebrow}
            </p>
          )}
          <h2
            id="policy-modal-title"
            className="text-3xl md:text-4xl font-black break-keep leading-tight"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-lg md:text-xl font-medium opacity-95 break-keep leading-relaxed">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="mt-3 text-sm md:text-base opacity-80 break-keep leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3 break-keep">
                  {showNumber && (
                    <span className={`${SECTION_NUMBER_COLOR[accentColor]} text-2xl md:text-3xl`}>
                      {NUMBER_CHARS[i] ?? '•'}
                    </span>
                  )}
                  {section.title}
                </h3>
                <ul className="space-y-2 pl-1">
                  {section.policies.map((p, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-gray-700 text-base md:text-[17px] leading-relaxed break-keep"
                    >
                      <span className="text-gray-400 shrink-0">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 px-6 md:px-10 py-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between bg-gray-50">
          <a
            href={pdfHref}
            download="정의당-제9회-지방선거-정책공약집.pdf"
            className="inline-flex items-center gap-2 text-gray-900 font-bold hover:opacity-70 transition"
          >
            PDF에서 자세히 보기
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 font-bold transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
