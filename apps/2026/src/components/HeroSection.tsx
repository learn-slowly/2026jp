
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export function HeroSection() {
    const [dDay, setDDay] = useState('');

    useEffect(() => {
        const electionDate = new Date('2026-06-03');
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
                    이제 같이 삽시다<br />
                    <span className="text-justice-yellow bg-clip-text bg-gradient-to-r">
                        같이 잘 삽시다
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
                    정치가 놓친 삶의 의제
                </p>

                <div className="hero_button flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up delay-500">
                    <Link
                        href="#policies"
                        className="w-full md:w-auto px-8 py-4 bg-justice-yellow hover:bg-justice-yellow-dark text-d-black rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group"
                    >
                        핵심 공약 보기
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#map"
                        className="w-full md:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                    >
                        <MapPin className="w-5 h-5" />
                        우리 동네 후보 찾기
                    </Link>
                </div>
            </div>
        </section>
    );
}
