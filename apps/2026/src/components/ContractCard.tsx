'use client';

import { ArrowUpRight } from 'lucide-react';
import type { Contract, ContractColor } from '@/data/contracts';

const CARD_BG: Record<ContractColor, string> = {
  green: 'bg-gradient-to-br from-justice-green to-justice-green-dark',
  purple: 'bg-gradient-to-br from-justice-purple to-justice-purple-dark',
  'green-dark': 'bg-gradient-to-br from-justice-green-dark to-justice-green',
  yellow: 'bg-gradient-to-br from-justice-yellow to-justice-yellow-dark',
  pink: 'bg-gradient-to-br from-justice-pink to-justice-pink-dark',
};

const CARD_TEXT: Record<ContractColor, string> = {
  green: 'text-white',
  purple: 'text-white',
  'green-dark': 'text-white',
  yellow: 'text-gray-900',
  pink: 'text-white',
};

type Props = {
  contract: Contract;
  onClick: () => void;
};

export function ContractCard({ contract, onClick }: Props) {
  const { number, title, slogan, color, subAxes } = contract;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${title} 사회계약 상세 보기`}
      className={`group relative w-full h-full text-left rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] transition cursor-pointer ${CARD_BG[color]} ${CARD_TEXT[color]}`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-5xl md:text-6xl font-black opacity-30 leading-none tracking-tighter">
          {String(number).padStart(2, '0')}
        </span>
        <ArrowUpRight className="w-6 h-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition" />
      </div>

      <h3 className="text-2xl md:text-3xl font-black mb-2 break-keep leading-tight">
        {title}
      </h3>
      <p className="text-base md:text-lg opacity-90 mb-5 break-keep leading-relaxed">
        {slogan}
      </p>

      <ul className="space-y-1.5">
        {subAxes.map((axis, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm md:text-base opacity-85 break-keep"
          >
            <span className="shrink-0">•</span>
            <span className="font-medium">{axis.title}</span>
          </li>
        ))}
      </ul>
    </button>
  );
}
