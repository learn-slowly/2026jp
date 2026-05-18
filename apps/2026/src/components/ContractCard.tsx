'use client';

import { ArrowRight } from 'lucide-react';
import type { Contract, ContractColor } from '@/data/contracts';

const ACCENT_BORDER: Record<ContractColor, string> = {
  green: 'border-justice-green',
  purple: 'border-justice-purple',
  'green-dark': 'border-justice-green-dark',
  yellow: 'border-justice-yellow-dark',
  pink: 'border-justice-pink',
};

const ACCENT_TEXT: Record<ContractColor, string> = {
  green: 'text-justice-green',
  purple: 'text-justice-purple',
  'green-dark': 'text-justice-green-dark',
  yellow: 'text-justice-yellow-dark',
  pink: 'text-justice-pink',
};

const ACCENT_DOT: Record<ContractColor, string> = {
  green: 'bg-justice-green',
  purple: 'bg-justice-purple',
  'green-dark': 'bg-justice-green-dark',
  yellow: 'bg-justice-yellow-dark',
  pink: 'bg-justice-pink',
};

type Props = {
  contract: Contract;
  onClick: () => void;
};

export function ContractCard({ contract, onClick }: Props) {
  const { number, title, slogan, subSlogan, color } = contract;
  const numberStr = String(number).padStart(2, '0');

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${title} 사회계약 상세 보기`}
      className={`group relative w-full h-full text-left bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all border-l-[6px] ${ACCENT_BORDER[color]} cursor-pointer`}
    >
      <div className="flex items-start gap-5 md:gap-6 p-6 md:p-8">
        <div className="shrink-0">
          <div
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-[2.5px] ${ACCENT_BORDER[color]} flex items-center justify-center ${ACCENT_TEXT[color]} group-hover:scale-105 transition-transform`}
          >
            <span className="text-base md:text-lg font-black tracking-tight">
              {numberStr}
            </span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${ACCENT_DOT[color]}`} />
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
              Social Contract {numberStr}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 break-keep leading-tight">
            {title}
          </h3>

          <p className="text-[15px] md:text-base text-gray-700 break-keep leading-relaxed">
            {slogan}
          </p>
          {subSlogan && (
            <p className="text-sm md:text-base text-gray-500 break-keep mt-1 mb-5">
              {subSlogan}
            </p>
          )}
          {!subSlogan && <div className="mb-5" />}

          <div className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-800 group-hover:gap-2.5 transition-all">
            자세히 보기
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </button>
  );
}
