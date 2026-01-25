'use client';

import { Candidate } from '@justice/types';

interface AboutSectionProps {
    candidate: Candidate;
}

export function AboutSection({ candidate }: AboutSectionProps) {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <h2 className="text-justice-green font-bold text-lg tracking-wider uppercase">About Candidate</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            {candidate.mayorExtra?.greetingTitle || <><span className="block">걸어온 길,</span><span className="block">변화의 시작</span></>}
                        </h3>
                        <div className="prose prose-lg text-gray-600 space-y-6">
                            {(candidate.mayorExtra?.greetingText || candidate.intro).split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <h4 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">주요 경력</h4>
                        <ul className="space-y-6">
                            {candidate.careers.map((career, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-justice-green flex-shrink-0" />
                                    <span className="text-lg text-gray-700 font-medium leading-relaxed">{career}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
