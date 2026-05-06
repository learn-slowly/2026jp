
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
                    {settings.hero_heading || '이제 같이 삽시다'}<br />
                    <span className="text-justice-yellow">
                        {settings.hero_heading_highlight || '같이 잘 삽시다'}
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
                    {settings.hero_description || '정치가 놓친 삶의 의제'}
                </p>

                <div className="hero_button flex flex-col items-center animate-fade-in-up delay-500">
                    {/* 1행: flex-none으로 압축 방지, 음수 마진으로 SVG 그림자 여백 제거 */}
                    <div className="flex items-center -translate-x-[7px] md:-translate-x-[10px]">
                        <a
                            href="https://www.justice21.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-none hover:opacity-85 active:scale-95 transition-all duration-150"
                        >
                            <img src="/buttons/button-homepage.svg" alt="정의당 홈페이지 바로가기" className="h-14 md:h-20 w-auto" />
                        </a>
                        <a
                            href="https://26you.justice21.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-none -ml-[25px] md:-ml-[35px] hover:opacity-85 active:scale-95 transition-all duration-150"
                        >
                            <img src="/buttons/button-youth.svg" alt="청년후보페이지 보러가기" className="h-14 md:h-20 w-auto" />
                        </a>
                    </div>
                    {/* 2행: 상하 그림자 여백 상쇄, 모바일/데스크탑 각각 조정 */}
                    <div className="relative inline-block -mt-[18px] md:-mt-[26px]">
                        <img src="/buttons/button-pair.svg" alt="우리동네 후보 찾기 / 정의당 핵심 공약" className="h-14 md:h-20 w-auto" />
                        <Link
                            href="#map"
                            className="absolute inset-y-0 left-0 w-[48%]"
                            aria-label="우리동네 후보 찾기"
                        />
                        <Link
                            href="#policies"
                            className="absolute inset-y-0 right-0 w-[50%]"
                            aria-label="정의당 핵심 공약"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
