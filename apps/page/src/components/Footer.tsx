'use client';

import { Candidate } from '@justice/types';
import { Mail, Phone, MapPin, Copy } from 'lucide-react';

interface FooterProps {
    candidate: Candidate;
}

export function Footer({ candidate }: FooterProps) {
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
                            <div className="w-12 h-12 bg-justice-yellow rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl">
                                JP
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">정의당 {candidate.name}</h3>
                                <p className="text-white/60 text-sm">2026 지방선거 {candidate.category} 후보</p>
                            </div>
                        </div>
                        <p className="text-white/70 leading-relaxed max-w-xs">
                            시민의 삶을 바꾸는 정의로운 선택.<br />
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
                                <div className="flex items-center gap-4 text-white/80">
                                    <Phone className="w-5 h-5 shrink-0" />
                                    <span>{candidate.contact.phone}</span>
                                </div>
                            )}
                            {candidate.contact?.email && (
                                <div className="flex items-center gap-4 text-white/80">
                                    <Mail className="w-5 h-5 shrink-0" />
                                    <span>{candidate.contact.email}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Donation */}
                    {candidate.donation.account && (
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-justice-yellow">후원 안내</h4>
                            <div className="bg-white/10 rounded-xl p-6 border border-white/10 hover:bg-white/15 transition cursor-pointer group"
                                onClick={() => handleCopy(candidate.donation.account || '', '계좌번호')}>
                                <p className="text-sm text-white/60 mb-2">후원회 계좌 (클릭하여 복사)</p>
                                <div className="flex items-center justify-between gap-4">
                                    <p className="font-mono text-xl font-bold tracking-wider">{candidate.donation.account}</p>
                                    <Copy className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-right text-sm mt-2 text-white/80">예금주: {candidate.donation.holder}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
                    © 2026 Justice Party Election Camp. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
