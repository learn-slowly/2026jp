'use client';

import { Candidate } from '@justice/types';
import { Mail, Phone, MapPin, Copy, Youtube, Facebook, Instagram, Twitter, Globe } from 'lucide-react';

interface FooterProps {
    candidate: Candidate;
    settings: Record<string, string>;
}

export function Footer({ candidate, settings }: FooterProps) {
    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        alert(`${label}가 복사되었습니다.`);
    };

    return (
        <footer id="donation" className="bg-gray-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 relative">
                                <img src="/images/logo-w.gif" alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">정의당 {candidate.name}</h3>
                                <p className="text-white/60 text-sm">2026 지방선거 {candidate.category} 후보</p>
                            </div>
                        </div>
                        <p className="text-white/70 leading-relaxed max-w-xs">
                            {settings.footer_message || '시민의 삶을 바꾸는 정의로운 선택.'}<br />
                            {candidate.name}과 함께해주십시오.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-justice-yellow">Contact Info</h4>
                        <div className="space-y-4">
                            {candidate.address && (
                                <div className="flex items-start gap-4 text-white/80">
                                    <MapPin className="w-5 h-5 mt-1 shrink-0" />
                                    <span>{candidate.address}</span>
                                </div>
                            )}
                            {candidate.contact?.phone && (
                                <a href={`tel:${candidate.contact.phone}`} className="flex items-center gap-4 text-white/80 hover:text-white hover:underline transition-colors">
                                    <Phone className="w-5 h-5 shrink-0" />
                                    <span>{candidate.contact.phone}</span>
                                </a>
                            )}
                            {candidate.contact?.email && (
                                <a href={`mailto:${candidate.contact.email}`} className="flex items-center gap-4 text-white/80 hover:text-white hover:underline transition-colors">
                                    <Mail className="w-5 h-5 shrink-0" />
                                    <span>{candidate.contact.email}</span>
                                </a>
                            )}
                            {candidate.contact?.kakao && (
                                <div className="flex items-center gap-4 text-white/80">
                                    <span className="font-bold text-justice-yellow w-5 text-center text-xs">K</span>
                                    <span>{candidate.contact.kakao}</span>
                                </div>
                            )}
                            {candidate.contact?.telegram && (
                                <div className="flex items-center gap-4 text-white/80">
                                    <span className="font-bold text-justice-yellow w-5 text-center text-xs">T</span>
                                    <span>{candidate.contact.telegram}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Social - Mobile: Full width, Desktop: Part of grid if needed. actually putting it under Contact for now or Brand?
                       Let's put Social media under Brand section as planned. I will modify Brand section separately.
                       Here we just close the Contact div.
                    */}
                    <div className="md:col-span-1 space-y-6">
                        <h4 className="text-lg font-bold text-justice-yellow">Social Media</h4>
                        <div className="flex flex-wrap gap-4">
                            {candidate.social?.youtube && (
                                <a href={candidate.social.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            )}
                            {candidate.social?.facebook && (
                                <a href={candidate.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            )}
                            {candidate.social?.instagram && (
                                <a href={candidate.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            )}
                            {candidate.social?.x && (
                                <a href={candidate.social.x} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            )}
                            {candidate.social?.blog && (
                                <a href={candidate.social.blog} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                                    <Globe className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Donation */}
                    {candidate.donation.account && (
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-justice-yellow">{settings.footer_donation || '후원 안내'}</h4>
                            <div className="bg-white/10 rounded-xl p-6 border border-white/10 hover:bg-white/15 transition cursor-pointer group"
                                onClick={() => handleCopy(candidate.donation.account || '', '계좌번호')}>
                                <p className="text-sm text-white/60 mb-2">{settings.footer_donation_guide || '후원회 계좌 (클릭하여 복사)'}</p>
                                <div className="flex items-center justify-between gap-4">
                                    <p className="font-mono text-xl font-bold tracking-wider">{candidate.donation.account}</p>
                                    <Copy className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-right text-sm mt-2 text-white/80">예금주: {candidate.donation.holder}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="border-t border-white/10 pt-10 pb-4 flex flex-col items-center text-center text-white/40 text-sm">
                    <div className="flex flex-wrap items-center justify-center gap-5 mb-8">
                        <a href="https://www.justice21.org/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition flex items-center justify-center h-8">
                            <img src="/logo-03.png" alt="정의당" className="h-full w-auto object-contain" />
                        </a>
                        <div className="w-[1px] h-4 bg-white/20"></div>
                        <a href="https://2026.justice21.org/" target="_blank" rel="noreferrer" className="hover:text-justice-yellow transition text-white/90 font-bold text-sm tracking-wide flex items-center gap-1">
                            2026 지선 특별 페이지 <span className="text-white/40 text-xs">↗</span>
                        </a>
                    </div>
                    © 2026 Justice Party. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
