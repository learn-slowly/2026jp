
'use client';

import { CentralPolicy } from '@justice/types';
import { FileText, Download } from 'lucide-react';

interface PolicyShowcaseProps {
    policies: CentralPolicy[];
    settings: Record<string, string>;
}

export function PolicyShowcase({ settings }: PolicyShowcaseProps) {
    const pdfHref = settings.policy_pdf_url || '/justice-2026-policy.pdf';
    const pdfFilename = settings.policy_pdf_filename || '정의당-제9회-지방선거-정책공약집.pdf';
    const pdfTitle = settings.policy_pdf_title || '제9회 지방선거 정의당 정책공약집';
    const pdfDescription = settings.policy_pdf_description
        || '내란 너머, 회귀가 아닌 전환. 공존을 위한 5대 사회계약으로 누구나 마음 놓고 사는 지역을 만들겠습니다.';
    const pdfMeta = settings.policy_pdf_meta || 'PDF · 220쪽 · 약 3.6MB';

    return (
        <section id="policies" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-justice-green font-bold text-base tracking-[0.25em] uppercase mb-4">Promises</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        {settings.policy_heading || '정의당의 약속'}
                    </h3>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto break-keep">
                        {settings.policy_description || '당신의 삶을 바꾸는 가장 확실한 방법'}
                    </p>
                </div>

                <div className="rounded-3xl shadow-2xl p-8 md:p-12 bg-gradient-to-br from-justice-green via-justice-purple to-justice-pink">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="shrink-0 w-32 h-40 md:w-40 md:h-52 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center shadow-inner">
                            <FileText className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <p className="text-justice-yellow font-bold uppercase tracking-wider text-sm mb-3">Policy Booklet</p>
                            <h4 className="text-2xl md:text-4xl font-black text-white mb-4 break-keep leading-tight">
                                {pdfTitle}
                            </h4>
                            <p className="text-base md:text-lg text-white/85 leading-relaxed break-keep mb-6">
                                {pdfDescription}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <a
                                    href={pdfHref}
                                    download={pdfFilename}
                                    className="inline-flex items-center gap-2 bg-justice-yellow text-gray-900 px-6 md:px-8 py-4 rounded-2xl font-bold text-base md:text-lg hover:opacity-80 active:scale-[0.98] transition shadow-xl"
                                >
                                    <Download className="w-5 h-5" />
                                    정책공약집 다운로드
                                </a>
                                <span className="text-sm text-white/70 font-medium">
                                    {pdfMeta}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
