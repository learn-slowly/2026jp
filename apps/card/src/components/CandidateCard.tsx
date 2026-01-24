'use client';

import { Candidate } from '@justice/types';
import { Camera, Phone, MapPin } from 'lucide-react';

interface CandidateCardProps {
    candidate: Candidate;
}

export function CandidateCard({ candidate }: CandidateCardProps) {
    // Safe color access using Tailwind classes we defined
    const gradientBg = "bg-gradient-to-br from-justice-green via-justice-purple to-justice-pink";

    return (
        <div className={`h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth ${gradientBg}`}>
            {/* Hero Section */}
            <section className="relative min-h-screen py-10 px-6 snap-start flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full">
                    {/* 정의당 로고 */}
                    <div className="flex justify-end items-center gap-3 mb-4">
                        <img
                            src="/logo-4.gif"
                            alt="정의당"
                            className="h-12 w-auto drop-shadow-lg filter brightness-0 invert"
                        />
                    </div>

                    {/* 후보자 정보 Card */}
                    <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-transform hover:scale-[1.01]">
                        <div className="flex flex-col items-center text-center">
                            {/* 프로필 사진 */}
                            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-justice-green shadow-lg mb-6 bg-gray-100 flex items-center justify-center">
                                {candidate.photoUrl && candidate.photoUrl.startsWith('http') ? (
                                    <img
                                        src={candidate.photoUrl}
                                        alt={candidate.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <Camera className="w-12 h-12 text-gray-400" />
                                )}
                            </div>

                            {/* 기호 + 이름 */}
                            <div className="flex items-center gap-3 mb-2">
                                {candidate.number && (
                                    <span className="text-4xl font-black text-justice-pink">
                                        {candidate.number}
                                    </span>
                                )}
                                <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                                    {candidate.name}
                                </h1>
                            </div>

                            {/* 슬로건 */}
                            <p className="text-xl font-bold text-justice-purple mb-4 break-keep italic">
                                "{candidate.slogan}"
                            </p>

                            {/* 지역구 */}
                            <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-gray-600 font-medium mb-6">
                                {candidate.district}
                            </div>

                            {/* 소개 */}
                            <p className="text-md text-gray-700 leading-relaxed break-keep">
                                {candidate.intro}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Scroll hint arrow */}
                <div className="absolute bottom-8 left-0 right-0 text-center animate-bounce text-white/50">
                    <span className="text-sm">아래로 스크롤하여 더 보기</span>
                    <div className="mt-1">↓</div>
                </div>
            </section>

            {/* Careers Section */}
            {candidate.careers && candidate.careers.length > 0 && (
                <section className="min-h-screen py-20 px-6 snap-start flex items-center justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <div className="bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                🔥 걸어온 길
                            </h3>
                            <ul className="space-y-2 text-left">
                                {candidate.careers.map((c, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="mt-2 w-1.5 h-1.5 bg-justice-green rounded-full flex-shrink-0" />
                                        <span className="leading-relaxed">{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {/* Policies Section */}
            {candidate.policies && candidate.policies.length > 0 && (
                <section className="min-h-screen py-20 px-6 snap-start flex items-center justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <div className="bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                📢 핵심 공약
                            </h3>
                            <div className="space-y-4 text-left max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                {candidate.policies.map((p, i) => (
                                    <div key={i} className="bg-green-50 rounded-xl p-5 border border-green-100 flex gap-4 hover:bg-green-100 transition-colors">
                                        <span className="text-justice-green font-black text-xl flex-shrink-0 pt-0.5">{i + 1}.</span>
                                        <div className="space-y-1">
                                            <h4 className="text-gray-900 font-bold text-lg leading-snug">{p.title}</h4>
                                            {p.content && (
                                                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{p.content}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 후원 & Contact Section combined for last snap */}
            <section className="min-h-screen py-20 px-6 snap-start flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full space-y-6">
                    {/* 소셜 미디어 링크 */}
                    <div className="flex justify-center gap-4">
                        {candidate.social.x && (
                            <a href={candidate.social.x} target="_blank" rel="noreferrer" className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition">
                                <span className="font-bold text-xl">X</span>
                            </a>
                        )}
                        {candidate.social.facebook && (
                            <a href={candidate.social.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:opacity-80 transition">
                                <span className="font-bold text-xl">f</span>
                            </a>
                        )}
                        {candidate.social.youtube && (
                            <a href={candidate.social.youtube} target="_blank" rel="noreferrer" className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:opacity-80 transition">
                                <span className="font-bold text-sm">YT</span>
                            </a>
                        )}
                        {candidate.social.instagram && (
                            <a href={candidate.social.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:opacity-80 transition">
                                <span className="font-bold text-xl">Ig</span>
                            </a>
                        )}
                    </div>

                    <div className="bg-justice-yellow rounded-2xl p-8 shadow-xl text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-white opacity-30"></div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">
                            🚀 후원으로 함께하기
                        </h2>
                        <div className="bg-white/90 p-6 rounded-xl shadow-sm">
                            <p className="text-sm text-gray-500 mb-2">후원계좌</p>
                            <p className="text-xl font-bold text-gray-900 mb-2 tracking-wider">
                                {candidate.donation.account}
                            </p>
                            <p className="text-md text-gray-700 font-medium">
                                예금주: {candidate.donation.holder}
                            </p>
                        </div>
                    </div>

                    {(candidate.contact?.phone || candidate.address) && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-white shadow-lg">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                📞 문의 / 위치
                            </h3>
                            <div className="space-y-4">
                                {candidate.contact?.phone && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/70">연락처</p>
                                            <p className="font-bold text-lg">{candidate.contact.phone}</p>
                                        </div>
                                    </div>
                                )}
                                {candidate.address && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/70">주소</p>
                                            <p className="font-medium">{candidate.address}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <footer className="py-8 text-center text-white/60 text-sm">
                        &copy; 2026 Justice Party. All rights reserved.
                    </footer>
                </div>
            </section>
        </div>
    );
}
