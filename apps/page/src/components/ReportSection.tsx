'use client';

import { Candidate } from '@justice/types';
import { Calendar } from 'lucide-react';

interface ReportSectionProps {
    candidate: Candidate;
    settings: Record<string, string>;
}

export function ReportSection({ candidate, settings }: ReportSectionProps) {
    if (!candidate.isIncumbent || !candidate.reports || candidate.reports.length === 0) return null;

    // Sort reports desc
    const sortedReports = [...candidate.reports].sort((a, b) => {
        const yDiff = Number(b.year) - Number(a.year);
        if (yDiff !== 0) return yDiff;
        return Number(b.month) - Number(a.month);
    });

    return (
        <section id="reports" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-justice-green font-bold text-lg tracking-wider uppercase mb-4">Activities</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                        {settings.section_reports || '의정 활동 보고'}
                    </h3>
                </div>

                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform -translate-x-1/2 md:translate-x-0"></div>

                    <div className="space-y-12">
                        {sortedReports.map((report, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row gap-8 items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}>
                                {/* Date Badge (Desktop Center) */}
                                <div className="absolute left-[19px] md:left-1/2 top-0 transform -translate-x-1/2 z-10">
                                    <div className="bg-justice-green text-white font-bold text-sm px-3 py-1 rounded-full border-4 border-white shadow-sm whitespace-nowrap">
                                        {report.year}.{report.month}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                                    <div className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative group ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                                        }`}>
                                        <div className={`absolute top-3 w-4 h-4 bg-white border border-gray-100 rotate-45 ${i % 2 === 0 ? 'md:-right-2 md:border-l-0 md:border-b-0' : 'md:-left-2 md:border-r-0 md:border-t-0 -left-2 border-r-0 border-t-0 hidden md:block'
                                            }`}></div>
                                        {/* Mobile Triangle */}
                                        <div className="absolute top-3 -left-2 w-4 h-4 bg-white border-l border-b border-gray-100 rotate-45 md:hidden"></div>

                                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-justice-green transition-colors">
                                            {report.title}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {report.description}
                                        </p>

                                        {report.linkUrl && (
                                            <a
                                                href={report.linkUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center text-sm font-bold text-justice-green hover:underline"
                                            >
                                                자세히 보기 <Calendar className="w-4 h-4 ml-1" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
