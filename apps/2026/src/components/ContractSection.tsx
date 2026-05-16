'use client';

import { useState } from 'react';
import { contracts, type Contract } from '@/data/contracts';
import { ContractCard } from './ContractCard';
import { PolicyModal } from './PolicyModal';

export function ContractSection() {
  const [selected, setSelected] = useState<Contract | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (c: Contract) => {
    setSelected(c);
    setIsOpen(true);
  };

  return (
    <section id="contracts" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-justice-green via-justice-purple to-justice-pink font-bold text-lg tracking-wider uppercase mb-3">
            Social Contract
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900">
            5대 사회계약
          </h3>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto break-keep">
            같이 살고, 같이 가는 공존의 약속
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {contracts.map((c, i) => {
            const lgSpan = i < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            const mdSpan = i === contracts.length - 1 ? 'md:col-span-2' : '';
            return (
              <div key={c.id} className={`${mdSpan} ${lgSpan}`.trim()}>
                <ContractCard contract={c} onClick={() => handleSelect(c)} />
              </div>
            );
          })}
        </div>
      </div>

      <PolicyModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        eyebrow={selected ? `5대 사회계약 · ${String(selected.number).padStart(2, '0')}` : undefined}
        title={selected?.title ?? ''}
        subtitle={selected?.slogan}
        description={selected?.subSlogan}
        accentColor={selected?.color ?? 'green'}
        sections={selected?.subAxes ?? []}
      />
    </section>
  );
}
