'use client';

import { Candidate } from '@justice/types';
import { Camera, Phone, MapPin } from 'lucide-react';

interface CandidateCardProps {
    candidate: Candidate;
}

export function CandidateCard({ candidate }: CandidateCardProps) {
    // Safe color access using Tailwind classes we defined
    const gradientBg = "bg-gradient-to-br from-justice-green via-justice-purple to-justice-pink";

    // Copy to clipboard helper
    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`${label}가 복사되었습니다!`);
        }, () => {
            alert('복사에 실패했습니다. 직접 복사해주세요.');
        });
    };

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
                {/* Scroll hint arrow */}
                <ScrollHint />
            </section>

            {/* Careers Section */}
            {candidate.careers && candidate.careers.length > 0 && (
                <section className="relative min-h-screen py-20 px-6 snap-start flex items-center justify-center">
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

            {/* Reports Section (Incumbent Only) */}
            {candidate.reports && candidate.reports.length > 0 && (
                <section className="relative min-h-screen py-20 px-6 snap-start flex items-center justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <div className="bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                🏆 주요 의정 성과
                            </h3>
                            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                {candidate.reports.map((r, i) => (
                                    <div key={i} className="relative pl-6 border-l-2 border-justice-green/30 last:border-0 pb-6 last:pb-0">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-justice-green border-4 border-white shadow-sm" />
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-bold text-justice-green bg-green-50 px-2 py-0.5 rounded-full w-fit">
                                                {r.year}.{r.month} · {r.category}
                                            </span>
                                            <h4 className="text-lg font-bold text-gray-900 leading-tight mt-1">
                                                {r.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                                                {r.description}
                                            </p>
                                            {r.linkUrl && (
                                                <a
                                                    href={r.linkUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xs text-blue-500 hover:text-blue-700 hover:underline mt-1 block"
                                                >
                                                    자세히 보기 →
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Policies Section */}
            {candidate.policies && candidate.policies.length > 0 && (
                <section className="relative min-h-screen py-20 px-6 snap-start flex items-center justify-center">
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
                            <a href={candidate.social.x} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition shadow-sm p-2">
                                <img src="/icons/x.png" alt="X" className="w-full h-full object-contain" />
                            </a>
                        )}
                        {candidate.social.facebook && (
                            <a href={candidate.social.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition shadow-sm p-1">
                                <img src="/icons/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
                            </a>
                        )}
                        {candidate.social.youtube && (
                            <a href={candidate.social.youtube} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition shadow-sm p-1">
                                <img src="/icons/youtube.png" alt="Youtube" className="w-full h-full object-contain" />
                            </a>
                        )}
                        {candidate.social.instagram && (
                            <a href={candidate.social.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition shadow-sm p-1">
                                <img src="/icons/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
                            </a>
                        )}
                        {candidate.social.blog && (
                            <a href={candidate.social.blog} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition shadow-sm p-1">
                                <img src="/icons/blog.png" alt="Blog" className="w-full h-full object-contain" />
                            </a>
                        )}
                        {candidate.category.includes('단체장') && (
                            <a href={`https://page.justice21.org/${candidate.slug}`} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition shadow-sm p-1">
                                <img src="/icons/homepage.png" alt="Homepage" className="w-full h-full object-contain" />
                            </a>
                        )}
                    </div>

                    <div className="bg-justice-yellow rounded-2xl p-8 shadow-xl text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-white opacity-30"></div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">
                            🚀 후원으로 함께하기
                        </h2>
                        <div className="bg-white/90 p-6 rounded-xl shadow-sm">
                            <p className="text-sm text-gray-500 mb-2">후원계좌 (클릭하여 복사)</p>
                            <div
                                onClick={() => handleCopy(candidate.donation.account, '계좌번호')}
                                className="cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors group"
                            >
                                <p className="text-xl font-bold text-gray-900 mb-2 tracking-wider flex items-center justify-center gap-2">
                                    {candidate.donation.account}
                                    <span className="text-gray-300 text-sm group-hover:text-justice-green">📋</span>
                                </p>
                            </div>
                            <p className="text-md text-gray-700 font-medium">
                                예금주: {candidate.donation.holder}
                            </p>
                        </div>
                    </div>

                    {(candidate.contact?.phone || candidate.contact?.email || candidate.address) && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-white shadow-lg">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                📞 문의 / 위치
                            </h3>
                            <div className="space-y-4">
                                {candidate.contact?.phone && (
                                    <a href={`tel:${candidate.contact.phone}`} className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm">
                                            <img src="/icons/phone.png" alt="Phone" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/70">연락처</p>
                                            <p className="font-bold text-lg">{candidate.contact.phone}</p>
                                        </div>
                                    </a>
                                )}
                                {candidate.address && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm">
                                            <img src="/icons/address.png" alt="Address" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/70">주소</p>
                                            <p className="font-medium">{candidate.address}</p>
                                        </div>
                                    </div>
                                )}
                                {candidate.contact?.email && (
                                    <a href={`mailto:${candidate.contact.email}`} className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm">
                                            <img src="/icons/email.png" alt="Email" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/70">이메일</p>
                                            <p className="font-medium text-lg">{candidate.contact.email}</p>
                                        </div>
                                    </a>
                                )}
                                {candidate.contact?.kakao && (
                                    <div
                                        onClick={() => handleCopy(candidate.contact.kakao || '', '카카오톡 ID')}
                                        className="flex items-center gap-3 hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors cursor-pointer"
                                    >
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2 shadow-sm">
                                            <img src="/icons/kakao.png" alt="Kakao" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm text-white/70">카카오톡 ID</p>
                                                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white/80">복사</span>
                                            </div>
                                            <p className="font-medium text-lg truncate">{candidate.contact.kakao}</p>
                                        </div>
                                    </div>
                                )}
                                {candidate.contact?.telegram && (
                                    <a href={`https://t.me/${candidate.contact.telegram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2 shadow-sm">
                                            <img src="/icons/telegram.png" alt="Telegram" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/70">텔레그램 ID</p>
                                            <p className="font-medium text-lg">{candidate.contact.telegram}</p>
                                        </div>
                                    </a>
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

function ScrollHint() {
    return (
        <div className="absolute bottom-8 left-0 right-0 text-center animate-bounce text-white/50 pointer-events-none">
            <span className="text-sm shadow-sm">아래로 스크롤하여 더 보기</span>
            <div className="mt-1">↓</div>
        </div>
    );
}
