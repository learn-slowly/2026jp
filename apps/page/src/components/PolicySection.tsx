'use client';

import { Candidate } from '@justice/types';
import { CheckCircle2 } from 'lucide-react';

interface PolicySectionProps {
    candidate: Candidate;
}

export function PolicySection({ candidate }: PolicySectionProps) {
    if (!candidate.policies || candidate.policies.length === 0) return null;

    return (
        <section id="policies" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-gray-900 font-bold text-lg tracking-wider uppercase mb-4">당신의 삶을 바꾸는 가장 확실한 방법</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {candidate.name}의 약속
                    </h3>
                    <p className="text-xl text-gray-600">
                        더 나은 삶, 더 정의로운 사회를 위한 핵심 공약입니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {candidate.policies.map((policy, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                            <div className="w-12 h-12 bg-justice-yellow rounded-full flex items-center justify-center mb-6 group-hover:bg-justice-yellow-dark transition-colors">
                                <span className="text-black font-bold text-xl group-hover:text-black transition-colors">{i + 1}</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2 leading-snug min-h-[2rem] flex items-center">
                                {typeof policy === 'string' ? policy : policy.title}
                            </h4>
                            {typeof policy !== 'string' && (
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {policy.content}
                                </p>
                            )}
                            <div className="flex items-center text-black font-medium text-sm mt-auto">
                                <CheckCircle2 className="w-4 h-4 mr-2" />
                                확실한 이행 약속
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
