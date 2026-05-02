'use client';

import type { Candidate } from '@justice/types';
import { HeroV3 } from './v3/HeroV3';
import { DeclarationV3 } from './v3/DeclarationV3';
import { ScheduleV3 } from './v3/ScheduleV3';
import { PoliciesV3 } from './v3/PoliciesV3';
import { GalleryV3 } from './v3/GalleryV3';
import { FooterV3 } from './v3/FooterV3';
import { CandidateCard } from './CandidateCard';
import {
    parseCareer,
    splitLines,
    mergeLines,
    extractYoutubeId,
    buildSchedulePreview,
} from '@/lib/preview';

interface CandidatePreviewProps {
    data: any; // react-hook-form 의 watch 결과 (FormData 부분 채워짐)
    pageSettings?: Record<string, string>;
    cardSettings?: Record<string, string>;
}

function parseOptionalNumber(value: string | undefined): number | undefined {
    if (value === undefined || value === '') return undefined;
    const n = Number(value);
    return Number.isFinite(n) ? n : undefined;
}

export function CandidatePreview({ data, pageSettings = {}, cardSettings = {} }: CandidatePreviewProps) {
    const isMayor = (data?.category || '').includes('단체장');

    if (isMayor) {
        return <MayorPagePreview data={data} settings={pageSettings} />;
    }

    return <CardPreview data={data} />;
}

function MayorPagePreview({ data, settings }: { data: any; settings: Record<string, string> }) {
    const mayorExtra = data?.mayorExtra || {};
    const candidateName = data?.name || '';
    const position = mayorExtra.position || '';
    const election = mayorExtra.election || settings.election || '';

    const visionLines = mergeLines(mayorExtra.visionTitle, mayorExtra.visionSubtitle);
    const introLines = mergeLines(mayorExtra.greetingTitle, mayorExtra.greetingText, data?.intro);

    const careers = (data?.careers || [])
        .filter((c: string) => c && c.trim())
        .map((c: string) => parseCareer(c));

    // 슬라이더 값 (빈 문자열 → undefined → HeroV3에서 기존 동작 유지)
    const heroImageScale = parseOptionalNumber(mayorExtra.heroImageScale);
    const heroImageOffsetX = parseOptionalNumber(mayorExtra.heroImageOffsetX);
    const heroImageOffsetY = parseOptionalNumber(mayorExtra.heroImageOffsetY);

    const heroCandidate = {
        name: candidateName,
        position,
        election,
        visionLines,
        introLines,
        careers,
        heroImage: mayorExtra.heroImageUrl || '/images/v3-hero-candidate.png',
        heroImageScale,
        heroImageOffsetX,
        heroImageOffsetY,
    };

    const scheduleItems = buildSchedulePreview(data?.mayorSchedules || []);

    const slogans = splitLines(mayorExtra.slogans || settings.v3_slogans);
    const ctaLines = splitLines(mayorExtra.ctaLines || settings.v3_cta_lines);

    const policyItems = (data?.policies || [])
        .filter((p: any) => p && (p.title || p.content))
        .map((p: any, i: number) => ({
            number: i + 1,
            title: p.title || '',
            description: p.content || '',
        }));

    const videoId = extractYoutubeId(mayorExtra.declarationVideoUrl);
    const hasDeclaration = !!videoId || !!(mayorExtra.declarationText && mayorExtra.declarationText.trim());

    const galleryItems = (data?.mayorGallery || [])
        .filter((g: any) => g && g.visible !== false && (g.imageUrl || g.caption))
        .slice()
        .sort((a: any, b: any) => (b.date || '').localeCompare(a.date || ''))
        .map((g: any) => ({
            date: g.date || '',
            caption: g.caption || '',
            imageUrl: g.imageUrl || '',
        }));

    return (
        <main className="v3-page bg-white text-d-blueblack overflow-x-hidden">
            <HeroV3 candidate={heroCandidate} />
            {hasDeclaration && (
                <DeclarationV3
                    candidateName={candidateName}
                    position={position}
                    videoId={videoId}
                    image="/images/v3-declaration.png"
                    declarationText={mayorExtra.declarationText}
                />
            )}
            {scheduleItems.length > 0 && <ScheduleV3 items={scheduleItems} />}
            <PoliciesV3 slogans={slogans} ctaLines={ctaLines} items={policyItems} />
            <GalleryV3 items={galleryItems} />
            <FooterV3
                candidate={{
                    name: candidateName,
                    position,
                    election,
                }}
                donation={data?.donation}
                social={data?.social}
                pageName={settings.v3_footer_page_name || '2026 정의당 지방선거특별페이지'}
                pageUrl={settings.v3_footer_page_url}
                copyright={settings.v3_footer_copyright || 'ⓒ2026. Justice Party. No rights reserved.'}
            />
        </main>
    );
}

function CardPreview({ data }: { data: any }) {
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

    return <CandidateCard candidate={candidate} />;
}
