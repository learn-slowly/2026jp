
'use client';

import { CentralPolicy } from '@justice/types';
import Link from 'next/link';

interface PolicyShowcaseProps {
    policies: CentralPolicy[];
    settings: Record<string, string>;
}

export function PolicyShowcase({ policies, settings }: PolicyShowcaseProps) {
    if (!policies || policies.length === 0) return null;

    const getColors = (category: string) => {
        if (category.includes('기후')) return 'from-justice-green to-justice-green-dark';
        if (category.includes('노동')) return 'from-justice-pink to-justice-pink-dark';
        if (category.includes('돌봄')) return 'from-justice-purple to-justice-purple-dark';
        return 'from-justice-yellow to-justice-yellow-dark';
    };

    const getTextColor = (category: string) => {
        if (category.includes('노동') || category.includes('기후') || category.includes('돌봄')) return 'text-white';
        return 'text-gray-900'; // Yellow background needs dark text
    };

    return (
        <section id="policies" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-justice-green font-bold text-lg tracking-wider uppercase mb-3">Promises</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900">
                        {settings.policy_heading || '정의당의 약속'}
                    </h3>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        {settings.policy_description || '당신의 삶을 바꾸는 가장 확실한 방법'}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center py-24 bg-gray-50 rounded-3xl border border-gray-100/50 shadow-inner">
                    <span className="text-5xl mb-6 drop-shadow-sm">🚧</span>
                    <h4 className="text-2xl md:text-3xl font-black text-gray-800 mb-3 tracking-tight">{settings.policy_empty_heading || '공약 준비 중입니다'}</h4>
                    <p className="text-lg text-gray-500 text-center break-keep">
                        {settings.policy_empty_description || '정의당의 2026 지방선거 핵심 공약을 세밀하게 다듬고 있습니다. 곧 공개됩니다!'}
                    </p>
                </div>
            </div>
        </section>
    );
}
