'use client';

import { Candidate } from '@justice/types';
import { Camera, Phone, MapPin, Copy } from 'lucide-react';

interface CandidateCardProps {
    candidate: Candidate;
}

export function CandidateCard({ candidate }: CandidateCardProps) {
    // Safe color access using Tailwind classes we defined
    const gradientBg = "bg-gradient-to-br from-justice-green via-justice-yellow to-justice-pink";

    // Copy to clipboard helper
    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`${label}가 복사되었습니다!`);
        }, () => {
            alert('복사에 실패했습니다. 직접 복사해주세요.');
        });
    };

    const parseDistrict = (district: string) => {
        if (!district) return { mainTitle: '', pills: [] };
        const parentMatch = district.match(/^([^(]+)\s*\(([^)]+)\)/);
        if (parentMatch) {
            return {
                mainTitle: parentMatch[1].trim(),
                pills: parentMatch[2].split(',').map((s) => s.trim()).filter(Boolean),
            };
        }
        return {
            mainTitle: district,
            pills: [district].filter(Boolean),
        };
    };

    return (
        <div className={`h-screen overflow-y-scroll scroll-smooth ${gradientBg}`}>
            {/* Hero Section */}
            <section className="relative py-2 px-6 flex flex-col justify-center">
                <div className="max-w-xl mx-auto w-full">
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
                            <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6 bg-gray-100 flex items-center justify-center">
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
                            <p className="text-xl text-black mb-4 break-keep italic font-black">
                                "{candidate.slogan}"
                            </p>

                            {/* 지역구 */}
                            <div className="flex flex-col items-center gap-2 mb-6">
                                <div className="text-lg font-bold text-gray-800">
                                    {(() => {
                                        const { mainTitle } = parseDistrict(candidate.district);
                                        let catLabel: string = candidate.category;
                                        if (catLabel.includes('광역단체장')) catLabel = '시장후보';
                                        else if (catLabel.includes('기초단체장')) catLabel = '구청장후보';
                                        else if (catLabel.includes('기초의원')) catLabel = '시의원후보';
                                        else if (catLabel.includes('광역의원')) catLabel = '시의원후보';
                                        else if (!catLabel.includes('후보')) catLabel += '후보';
                                        
                                        if (mainTitle.endsWith('시') && catLabel === '시장후보') {
                                            return `${mainTitle.slice(0, -1)} ${catLabel}`;
                                        }
                                        return `${mainTitle} ${catLabel}`;
                                    })()}
                                </div>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {parseDistrict(candidate.district).pills.map((pill, idx) => (
                                        <div key={idx} className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1.5 rounded-full text-sm font-bold text-gray-700 shadow-sm">
                                            <MapPin className="w-4 h-4 text-justice-yellow fill-justice-yellow" />
                                            <span>{pill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 소개 */}
                            <p className="c_card text-left leading-relaxed break-keep text-black whitespace-pre-wrap">
                                {candidate.intro}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Scroll hint arrow */}
                {/* Scroll hint arrow */}
                {/* <ScrollHint /> */}
            </section>

            {/* Careers Section */}
            {candidate.careers && candidate.careers.length > 0 && (
                <section className="relative py-2 px-6 flex items-center justify-center">
                    <div className="max-w-xl mx-auto w-full">
                        <div className="bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                🔥 걸어온 길
                            </h3>
                            <ul className="space-y-2 text-left">
                                {candidate.careers.map((c, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="mt-2 w-1.5 h-1.5 bg-justice-yellow rounded-full flex-shrink-0" />
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
                <section className="relative py-2 px-6 flex items-center justify-center">
                    <div className="max-w-xl mx-auto w-full">
                        <div className="bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                🏆 주요 의정 성과
                            </h3>
                            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                {[...candidate.reports]
                                    .sort((a, b) => {
                                        const yearDiff = Number(b.year) - Number(a.year);
                                        if (yearDiff !== 0) return yearDiff;
                                        return Number(b.month) - Number(a.month);
                                    })
                                    .map((r, i) => (
                                        <div key={i} className="relative pl-6 border-l-2 border-justice-yellow last:border-0 pb-6 last:pb-0">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-justice-yellow shadow-sm" />
                                            <div className="flex flex-col gap-1">
                                                <span className="text-xs font-bold text-black bg-justice-yellow px-2 py-0.5 rounded-full w-fit">
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
                                                        className="text-xs text-justice-pink hover:text-justice-pink-dark hover:underline mt-1 block"
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
                <section className="relative py-2 px-6 flex items-center justify-center">
                    <div className="max-w-xl mx-auto w-full">
                        <div className="bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                📢 핵심 공약
                            </h3>
                            <div className="space-y-4 text-left max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                {candidate.policies.map((p, i) => (
                                    <div key={i} className="bg-yellow-100 rounded-xl p-5 border border-yellow-50 flex gap-4 hover:bg-yellow-100 transition-colors">
                                        <span className="text-justice-pink font-black text-xl flex-shrink-0 pt-0.5">{i + 1}.</span>
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
            <section className="py-10 px-6 flex flex-col justify-center">
                <div className="max-w-xl mx-auto w-full space-y-6">
                    {/* 소셜 미디어 링크 */}
                    <div className="flex justify-center gap-4">
                        {candidate.social.x && (
                            <a href={candidate.social.x} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition">
                                <img src="/icons/x.png" alt="X" className="w-full h-full object-contain" />
                            </a>
                        )}
                        {candidate.social.facebook && (
                            <a href={candidate.social.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition">
                                <img src="/icons/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
                            </a>
                        )}
                        {candidate.social.youtube && (
                            <a href={candidate.social.youtube} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition">
                                <img src="/icons/youtube.png" alt="Youtube" className="w-full h-full object-contain" />
                            </a>
                        )}
                        {candidate.social.instagram && (
                            <a href={candidate.social.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition">
                                <img src="/icons/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
                            </a>
                        )}
                        {candidate.social.blog && (
                            <a href={candidate.social.blog} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition">
                                <img src="/icons/blog.png" alt="Blog" className="w-full h-full object-contain" />
                            </a>
                        )}
                        {candidate.category.includes('단체장') && (
                            <a href={`https://page.justice21.org/${candidate.slug}`} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition">
                                <img src="/icons/homepage.png" alt="Homepage" className="w-full h-full object-contain" />
                            </a>
                        )}
                    </div>

                    <div className="text-center relative">
                        {/* 흰색 카드 (타이틀 포함) */}
                        <div className="bg-white rounded-3xl p-6 shadow-xl">
                            <h2 className="text-2xl font-bold mb-5 text-gray-900 flex items-center justify-center gap-1">
                                💛 후원으로 함께하기
                            </h2>

                            <div
                                onClick={() => handleCopy(candidate.donation.account, '계좌번호')}
                                className="cursor-pointer group"
                            >
                                {/* 노란색 계좌 박스 */}
                                <div className="bg-[#FFF000] rounded-xl px-2 py-7 transition-all active:scale-[0.98] flex flex-col items-center justify-center gap-1 shadow-sm">
                                    {/* 복사 안내 문구 */}
                                    <div className="text-[#00A651] font-bold text-sm md:text-base flex items-center justify-center gap-1.5 mb-1.5">
                                        <Copy size={16} strokeWidth={2.5} />
                                        클릭하면 후원계좌가 복사됩니다!
                                    </div>
                                    
                                    <p className="text-2xl md:text-[28px] lg:text-3xl font-black text-gray-900 tracking-tight leading-tight">
                                        {candidate.donation.account}
                                    </p>
                                    <p className="text-sm md:text-base text-gray-800 font-bold mt-1 tracking-tight">
                                        예금주: {candidate.donation.holder}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {(candidate.contact?.phone || candidate.contact?.email || candidate.address) && (
                        <div className="bg-white backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-black shadow-lg">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                📞 문의 / 위치
                            </h3>
                            <div className="space-y-4">
                                {candidate.contact?.phone && (
                                    <a href={`tel:${candidate.contact.phone}`} className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer contact-row">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm flex-shrink-0 self-center">
                                            <img src="/icons/phone.png" alt="Phone" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-sm text-white/70">연락처</p>
                                            <p className="contact_info font-bold text-lg">{candidate.contact.phone}</p>
                                        </div>
                                    </a>
                                )}
                                {candidate.address && (
                                    <div className="flex items-center gap-3 contact-row">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm flex-shrink-0 self-center">
                                            <img src="/icons/address.png" alt="Address" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-sm text-white/70">주소</p>
                                            <p className="contact_info font-medium">{candidate.address}</p>
                                        </div>
                                    </div>
                                )}
                                {candidate.contact?.email && (
                                    <a href={`mailto:${candidate.contact.email}`} className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer contact-row">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm flex-shrink-0 self-center">
                                            <img src="/icons/email.png" alt="Email" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-sm text-white/70">이메일</p>
                                            <p className="contact_info font-medium text-lg">{candidate.contact.email}</p>
                                        </div>
                                    </a>
                                )}
                                {candidate.contact?.kakao && (
                                    <div
                                        onClick={() => handleCopy(candidate.contact.kakao || '', '카카오톡 ID')}
                                        className="flex items-center gap-3 hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors cursor-pointer"
                                    >
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2 shadow-sm flex-shrink-0 self-center contact-row">
                                            <img src="/icons/kakao.png" alt="Kakao" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-col justify-center">
                                                <p className="text-sm text-white/70">카카오톡 ID</p>
                                                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white/80">복사</span>
                                            </div>
                                            <p className="contact_info font-medium text-lg truncate">{candidate.contact.kakao}</p>
                                        </div>
                                    </div>
                                )}
                                {candidate.contact?.telegram && (
                                    <a href={`https://t.me/${candidate.contact.telegram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2 shadow-sm self-center contact-row">
                                            <img src="/icons/telegram.png" alt="Telegram" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/70">텔레그램 ID</p>
                                            <p className="contact_info font-medium text-lg">{candidate.contact.telegram}</p>
                                        </div>
                                    </a>
                                )}
                            </div>
                        </div>
                    )}

                    <footer className="py-8 pb-12 text-center text-white/80 text-sm flex flex-col items-center">
                        <div className="flex flex-wrap items-center justify-center gap-5 mb-6 px-2">
                            <a href="https://www.justice21.org/" target="_blank" rel="noreferrer" className="hover:scale-105 transition-transform flex items-center justify-center h-8">
                                <img src="/logo-03.png" alt="정의당" className="h-full w-auto object-contain" />
                            </a>
                            <div className="w-[1px] h-4 bg-white/30"></div>
                            <a href="https://2026.justice21.org/" target="_blank" rel="noreferrer" className="hover:text-justice-yellow transition-all text-white/90 font-bold text-sm tracking-wide cursor-pointer z-10 relative pointer-events-auto flex items-center gap-1">
                                2026 지선 특별 페이지 <span className="text-white/50 text-xs">↗</span>
                            </a>
                        </div>
                        <p className="opacity-60">&copy; 2026 Justice Party. All rights reserved.</p>
                    </footer>
                </div>
            </section>
        </div>
    );
}
/*
function ScrollHint() {
    return (
        <!div className="absolute bottom-8 left-0 right-0 text-center animate-bounce text-white/50 pointer-events-none">
            <span className="text-sm shadow-sm">아래로 스크롤하여 더 보기</span>
            <div className="mt-1">↓</div>
        </div>
    );
}
*/
