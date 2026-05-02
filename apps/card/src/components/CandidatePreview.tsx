'use client';

import type { Candidate } from '@justice/types';
import { CandidateCard } from './CandidateCard';
import { ExternalLink } from 'lucide-react';

interface CandidatePreviewProps {
    data: any; // react-hook-form 의 watch 결과
    cardSettings?: Record<string, string>;
}

export function CandidatePreview({ data, cardSettings = {} }: CandidatePreviewProps) {
    const isMayor = (data?.category || '').includes('단체장');

    if (isMayor) {
        return <MayorNotice />;
    }

    return <CardPreview data={data} settings={cardSettings} />;
}

function MayorNotice() {
    return (
        <div className="h-full flex items-center justify-center p-8">
            <div className="max-w-md text-center bg-white rounded-2xl shadow-lg p-8 space-y-4">
                <div className="text-5xl">🏛️</div>
                <h3 className="text-xl font-bold text-gray-900 break-keep">
                    단체장 페이지 미리보기는 페이지 앱에서 확인해주세요
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed break-keep">
                    단체장(시장·구청장 등) 후보는 별도의 페이지(apps/page)에서 등록·확인됩니다.
                    아래 링크에서 같은 정보를 입력하면 실시간 미리보기가 가능합니다.
                </p>
                <a
                    href="https://page.justice21.org/register"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-2 bg-justice-purple hover:bg-justice-purple-dark text-white font-bold px-5 py-3 rounded-xl transition"
                >
                    페이지 앱으로 이동
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}

function CardPreview({ data, settings }: { data: any; settings: Record<string, string> }) {
    const candidate: Candidate = {
        slug: data?.slug || '',
        name: data?.name || '',
        district: data?.district || '',
        category: (data?.category || '기초지역구') as Candidate['category'],
        number: data?.number ? Number(data.number) : undefined,
        photoUrl: data?.photoUrl || '',
        slogan: data?.slogan || '',
        intro: data?.intro || '',
        careers: (data?.careers || []).filter((c: string) => c && c.trim()),
        policies: (data?.policies || []).filter((p: any) => p && (p.title || p.content)),
        donation: {
            account: data?.donation?.account || '',
            holder: data?.donation?.holder || '',
        },
        social: data?.social || {},
        contact: data?.contact || {},
        isIncumbent: !!data?.isIncumbent,
        address: data?.address || '',
        reports: (data?.reports || []).filter((r: any) => r && r.visible !== false && (r.title || r.description)),
        status: 'active',
        updatedAt: new Date(),
    };

    return <CandidateCard candidate={candidate} settings={settings} />;
}
