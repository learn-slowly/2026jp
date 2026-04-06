
'use client';

import { CentralPolicy } from '@justice/types';
import Link from 'next/link';

interface PolicyShowcaseProps {
    policies: CentralPolicy[];
}

export function PolicyShowcase({ policies }: PolicyShowcaseProps) {
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
                        정의당의 약속
                    </h3>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        당신의 삶을 바꾸는 가장 확실한 방법
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {policies.map((policy, i) => (
                        <div
                            key={i}
                            className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${getColors(policy.category)}`}
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl opacity-50 pointer-events-none"></div>

                            <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                <div>
                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-white/20 backdrop-blur-sm ${getTextColor(policy.category)}`}>
                                        #{policy.category}
                                    </div>
                                    <h4 className={`text-2xl font-black mb-4 ${getTextColor(policy.category)}`}>
                                        {policy.title}
                                    </h4>
                                    <p className={`text-lg font-medium opacity-90 mb-6 ${getTextColor(policy.category)}`}>
                                        {policy.summary}
                                    </p>
                                    <p className={`text-sm opacity-80 line-clamp-4 leading-relaxed ${getTextColor(policy.category)}`}>
                                        {policy.content}
                                    </p>
                                </div>

                                {policy.linkUrl && (
                                    <div className="mt-8 pt-6 border-t border-white/20">
                                        <Link
                                            href={policy.linkUrl}
                                            className={`inline-flex items-center gap-2 font-bold hover:underline ${getTextColor(policy.category)}`}
                                        >
                                            자세히 보기 →
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
