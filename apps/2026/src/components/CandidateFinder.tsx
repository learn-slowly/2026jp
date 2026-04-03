
'use client';

import { useState, useMemo } from 'react';
import { Candidate } from '@justice/types';
import { Search, MapPin, User, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface CandidateFinderProps {
    candidates: Candidate[];
}

export function CandidateFinder({ candidates }: CandidateFinderProps) {
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

    return (
        <section id="map" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-justice-green font-bold text-lg tracking-wider uppercase mb-3">Candidates</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900">
                        우리 동네 <span className="text-justice-green">일꾼</span> 찾기
                    </h3>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        전국 방방곡곡, 당신의 곁에 정의당이 있습니다.
                    </p>
                </div>

                {/* Filter & Search */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-justice-green w-5 h-5" />
                        <input
                            type="text"
                            placeholder="이름이나 지역명으로 검색해보세요"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:border-justice-green focus:ring-2 focus:ring-justice-green/20 outline-none transition-all shadow-sm text-gray-900 placeholder:text-gray-500 font-medium"
                        />
                    </div>

                    {/* Region Pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {regions.map(region => (
                            <button
                                key={region}
                                onClick={() => setSelectedRegion(region)}
                                className={`px-5 py-2 rounded-full font-bold transition-all ${selectedRegion === region
                                    ? 'bg-justice-green text-white shadow-lg shadow-justice-green/20 scale-105'
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
                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
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
                                    <div className="absolute top-3 right-3 w-8 h-8 bg-justice-yellow rounded-full flex items-center justify-center text-gray-900 font-bold opacity-0 group-hover:opacity-100 transition-all shadow-lg scale-0 group-hover:scale-100">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                        <MapPin className="w-4 h-4 shrink-0 text-justice-green" />
                                        <span className="truncate">{candidate.district}</span>
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="text-xl font-black text-gray-900 group-hover:text-justice-green transition-colors">
                                            {candidate.name} <span className="text-base font-normal text-gray-400">후보</span>
                                        </h3>
                                    </div>
                                    <p className="mt-auto text-sm text-gray-600 line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100">
                                        "{candidate.slogan}"
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                        <p className="text-gray-400 text-lg">해당하는 후보자가 없습니다.</p>
                        <button
                            onClick={() => { setSelectedRegion('전체'); setSearchTerm(''); }}
                            className="mt-4 text-justice-green font-bold hover:underline"
                        >
                            전체 보기
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
