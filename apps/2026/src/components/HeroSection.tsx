
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HomepageButton, YouthButton, FinderButton, PolicyButton } from './HeroButtons';

interface HeroSectionProps {
    settings: Record<string, string>;
}

export function HeroSection({ settings }: HeroSectionProps) {
    const [dDay, setDDay] = useState('');

    useEffect(() => {
        const electionDate = new Date('2026-06-03T00:00:00+09:00');
        const today = new Date();
        const diff = electionDate.getTime() - today.getTime();
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        setDDay(days > 0 ? `D-${days}` : days === 0 ? 'D-Day' : `D+${Math.abs(days)}`);
    }, []);

    return (
        <section className="hero relative min-h-[90vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>
            <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 z-0"></div>

            {/* Animated Shapes */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-justice-yellow rounded-full blur-[100px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-justice-pink rounded-full blur-[100px] opacity-20 animate-pulse delay-1000"></div>

            <div className="hero_title relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="inline-block px-4 py-2 rounded-full border border-justice-yellow text-justice-yellow font-bold text-lg mb-8 animate-fade-in-up">
                    제9회 전국동시지방선거 {dDay}
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in-up delay-200">
                    {settings.hero_heading || '이제, 같이 삽시다'}<br />
                    <span className="text-justice-yellow">
                        {settings.hero_heading_highlight || '같이 갑시다'}
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
                    {settings.hero_description || '정치가 놓친 삶의 의제'}
                </p>

                <div className="hero_button flex flex-col items-center animate-fade-in-up delay-500">
                    {/* 1행 (데스크탑) / 1·2행 (모바일): 홈페이지 + 청년후보 */}
                    <div className="flex flex-col items-center md:flex-row md:-translate-x-[10px]">
                        <a
                            href="https://www.justice21.org/newhome/main/default.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="정의당 홈페이지 바로가기"
                            className="flex-none hover:opacity-85 active:scale-95 transition-all duration-150"
                        >
                            <HomepageButton className="h-[82px] md:h-[104px] w-auto" />
                        </a>
                        <a
                            href="https://26you.justice21.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="청년후보페이지 보러가기"
                            className="flex-none -mt-[20px] md:mt-0 md:-ml-[35px] hover:opacity-85 active:scale-95 transition-all duration-150"
                        >
                            <YouthButton className="h-[82px] md:h-[104px] w-auto" />
                        </a>
                    </div>
                    {/* 2행 (데스크탑) / 3·4행 (모바일): 후보 찾기 + 핵심 공약 */}
                    <div className="flex flex-col items-center -mt-[20px] md:flex-row md:-mt-[26px]">
                        <Link
                            href="#map"
                            className="flex-none hover:opacity-85 active:scale-95 transition-all duration-150"
                            aria-label="우리동네 후보 찾기"
                        >
                            <FinderButton className="h-[82px] md:h-[104px] w-auto" />
                        </Link>
                        <Link
                            href="#policies"
                            className="flex-none -mt-[20px] md:mt-0 md:-ml-[1px] hover:opacity-85 active:scale-95 transition-all duration-150"
                            aria-label="정의당 핵심 공약"
                        >
                            <PolicyButton className="h-[82px] md:h-[104px] w-auto" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
