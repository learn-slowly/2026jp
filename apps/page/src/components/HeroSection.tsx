'use client';

import { Candidate } from '@justice/types';

interface HeroSectionProps {
    candidate: Candidate;
}

export function HeroSection({ candidate }: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-justice-yellow">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl w-full mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 pt-20">
                <div className="text-black space-y-6 animate-in slide-in-from-bottom-10 duration-700 fade-in">
                    <div className="inline-block text-black bg-white backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold border border-white/30 mb-4">
                        2026 지방선거 {candidate.category} 후보
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                        <span className="block text-black drop-shadow-md">
                            {candidate.mayorExtra?.visionTitle || candidate.slogan}
                        </span>
                        <span className="block mt-2">
                            {candidate.mayorExtra?.visionSubtitle ? (
                                <span className="text-3xl md:text-4xl block font-medium mb-2">{candidate.mayorExtra.visionSubtitle}</span>
                            ) : null}
                            {candidate.mayorExtra?.position || `정의당 ${candidate.name}`}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-black font-light leading-relaxed max-w-lg">
                        {candidate.intro.split('\n')[0]}
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button
                            onClick={() => document.getElementById('policies')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
                        >
                            약속 보기
                        </button>
                        <button
                            onClick={() => document.getElementById('donation')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:justice-yellow-dark/10 transition"
                        >
                            후원하기
                        </button>
                    </div>
                </div>

                <div className="relative h-[60vh] md:h-[80vh] flex items-end justify-center md:justify-end animate-in fade-in duration-1000 delay-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-justice-yellow/50 to-transparent bottom-0 h-1/3 z-10 pointer-events-none md:hidden"></div>
                    <img
                        src={candidate.mayorExtra?.heroImageUrl || candidate.photoUrl || '/placeholder-candidate.png'}
                        alt={candidate.name}
                        className="h-full w-auto object-contain object-bottom drop-shadow-2xl relative z-0 mask-image-gradient"
                        style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                    />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
}
