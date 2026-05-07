
'use client';

import { useState, useMemo } from 'react';
import { Candidate } from '@justice/types';
import { Search, MapPin, User, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface CandidateFinderProps {
    candidates: Candidate[];
    settings: Record<string, string>;
}

export function CandidateFinder({ candidates, settings }: CandidateFinderProps) {
    const [selectedRegion, setSelectedRegion] = useState('전체');
    const [searchTerm, setSearchTerm] = useState('');

    // Extract regions (First word of district)
    const regions = useMemo(() => {
        const unique = new Set(candidates.map(c => c.district.split(' ')[0]));
        return ['전체', ...Array.from(unique).sort()];
    }, [candidates]);

    const filteredCandidates = candidates.filter(c => {
        const matchRegion = selectedRegion === '전체' || c.district.startsWith(selectedRegion);
        const matchSearch = c.name.includes(searchTerm) || c.district.includes(searchTerm);
        return matchRegion && matchSearch;
    });

    const getLink = (candidate: Candidate) => {
        // 단체장은 홈페이지(page), 의원은 웹명함(card)으로 연결
        // 실제 도메인 환경변수 처리 필요하지만 여기선 예시 도메인 사용
        if (candidate.category.includes('단체장')) {
            return `https://page.justice21.org/${candidate.slug}`;
        }
        return `https://card.justice21.org/${candidate.slug}`;
    };

    const parseDistrict = (district: string) => {
        if (!district) return { mainTitle: '', pills: [] };
        const parentMatch = district.match(/^([^(]+)\s*\(([^)]+)\)/);
        if (parentMatch) {
            return {
                mainTitle: parentMatch[1].trim(),
                pills: parentMatch[2].split(',').map(s => s.trim()).filter(Boolean)
            };
        }
        return {
            mainTitle: district,
            pills: [district].filter(Boolean)
        };
    };

    // 광역단체(특별시·광역시·세종) 리스트 — 기초자치 추출 시 제외용
    const WIDE_REGIONS = new Set([
        '서울특별시', '서울시', '서울',
        '부산광역시', '부산시', '부산',
        '대구광역시', '대구시', '대구',
        '인천광역시', '인천시', '인천',
        '광주광역시', '광주시', '광주',
        '대전광역시', '대전시', '대전',
        '울산광역시', '울산시', '울산',
        '세종특별자치시', '세종시', '세종',
    ]);

    // 광역(시·도) 토큰 추출 — 광역 카테고리용
    const findWideSuffix = (district: string): string => {
        const cleaned = district.replace(/\([^)]*\)/g, ' ').trim();
        const tokens = cleaned.split(/\s+/).filter(Boolean);
        for (let i = tokens.length - 1; i >= 0; i--) {
            if (/[시도]$/.test(tokens[i])) return tokens[i].slice(-1);
        }
        return '';
    };

    // 기초(시·군·구) 토큰 추출 — 기초 카테고리용. 광역 토큰은 스킵.
    const findBasicSuffix = (district: string): string => {
        const cleaned = district.replace(/\([^)]*\)/g, ' ').trim();
        const tokens = cleaned.split(/\s+/).filter(Boolean);
        for (let i = tokens.length - 1; i >= 0; i--) {
            if (WIDE_REGIONS.has(tokens[i])) continue;
            if (/[시군구]$/.test(tokens[i])) return tokens[i].slice(-1);
        }
        return '';
    };

    // category + district 로 직책 라벨 결정.
    const resolvePositionLabel = (category: string, district: string): string => {
        if (category.includes('광역단체장')) {
            const s = findWideSuffix(district);
            if (s === '도') return '도지사후보';
            if (s === '시') return '시장후보';
            return '광역단체장후보';
        }
        if (category.includes('기초단체장')) {
            const s = findBasicSuffix(district);
            if (s === '구') return '구청장후보';
            if (s === '군') return '군수후보';
            if (s === '시') return '시장후보';
            return '기초단체장후보';
        }
        if (category.includes('광역비례')) {
            const s = findWideSuffix(district);
            if (s === '도') return '도의원후보(비례)';
            if (s === '시') return '시의원후보(비례)';
            return '광역의원후보(비례)';
        }
        if (category.includes('기초비례')) {
            const s = findBasicSuffix(district);
            if (s === '구') return '구의원후보(비례)';
            if (s === '군') return '군의원후보(비례)';
            if (s === '시') return '시의원후보(비례)';
            return '기초의원후보(비례)';
        }
        if (category.includes('광역의원')) {
            const s = findWideSuffix(district);
            if (s === '도') return '도의원후보';
            if (s === '시') return '시의원후보';
            return '광역의원후보';
        }
        if (category.includes('기초의원')) {
            const s = findBasicSuffix(district);
            if (s === '구') return '구의원후보';
            if (s === '군') return '군의원후보';
            if (s === '시') return '시의원후보';
            return '기초의원후보';
        }
        return category.includes('후보') ? category : `${category}후보`;
    };

    // mainTitle 끝글자(시/도/구/군)와 catLabel 첫글자가 같으면 한 글자로 합쳐 표기.
    // 예: "파주시" + "시의원후보" → "파주시의원후보"
    const composeTitle = (mainTitle: string, catLabel: string): string => {
        const last = mainTitle.slice(-1);
        const first = catLabel.charAt(0);
        if (last === first && /[시도구군]/.test(last)) {
            return `${mainTitle.slice(0, -1)}${catLabel}`;
        }
        return `${mainTitle} ${catLabel}`;
    };

    return (
        <section id="map" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-justice-yellow font-bold text-lg tracking-wider uppercase mb-3">Candidates</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900">
                        {settings.finder_heading || '우리 동네 정의당 찾기'}
                    </h3>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        {settings.finder_description || '당신 곁에 정의당이 있습니다'}
                    </p>
                </div>

                {/* Filter & Search */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-justice-yellow w-5 h-5" />
                        <input
                            type="text"
                            placeholder={settings.finder_search_placeholder || '이름이나 지역명으로 검색해보세요'}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:border-justice-yellow focus:ring-2 focus:ring-justice-yellow/20 outline-none transition-all shadow-sm text-gray-900 placeholder:text-gray-500 font-medium"
                        />
                    </div>

                    {/* Region Pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {regions.map(region => (
                            <button
                                key={region}
                                onClick={() => setSelectedRegion(region)}
                                className={`px-5 py-2 rounded-full font-bold transition-all ${selectedRegion === region
                                    ? 'bg-justice-yellow text-white shadow-lg shadow-justice-yellow/20 scale-105'
                                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
                                    }`}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                {filteredCandidates.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredCandidates.map(candidate => (
                            <a
                                key={candidate.slug}
                                href={getLink(candidate)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-justice-yellow/50 to-white">
                                    {candidate.photoUrl ? (
                                        <Image
                                            src={candidate.photoUrl}
                                            alt={candidate.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                                            <User className="w-16 h-16" />
                                        </div>
                                    )}
                                    <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold opacity-0 group-hover:opacity-100 transition-all shadow-lg scale-0 group-hover:scale-100">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-black text-gray-900 mb-1">
                                        {candidate.name}
                                    </h3>

                                    <div className="text-sm font-bold text-gray-800 mb-3">
                                        {composeTitle(
                                            parseDistrict(candidate.district).mainTitle,
                                            resolvePositionLabel(candidate.category, candidate.district)
                                        )}
                                    </div>

                                    <div className="mb-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {parseDistrict(candidate.district).pills.map((pill, i) => (
                                            <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.125rem' }} className="bg-white border border-gray-200 px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-700 shadow-sm">
                                                <MapPin className="w-3 h-3 text-justice-yellow fill-justice-yellow" />
                                                <span>{pill}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="mt-auto text-[15px] font-medium text-gray-500 line-clamp-2 leading-relaxed">
                                        "{candidate.slogan}"
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                        <p className="text-gray-400 text-lg">{settings.finder_empty || '해당하는 후보자가 없습니다.'}</p>
                        <button
                            onClick={() => { setSelectedRegion('전체'); setSearchTerm(''); }}
                            className="mt-4 text-justice-yellow font-bold hover:underline"
                        >
                            전체 보기
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
