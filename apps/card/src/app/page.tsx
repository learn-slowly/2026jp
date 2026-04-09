import Link from 'next/link';
import { ArrowRight, User } from 'lucide-react';
import { sheetsClient } from '@justice/api-client';
import { Candidate } from '@justice/types';

export const revalidate = 60; // Refresh every 60 seconds

export default async function Home() {
    const candidates: Candidate[] = await sheetsClient.getCandidates();

    // Sort active candidates first, then alphabetical (or leave as Google Sheets order)
    const activeCandidates = candidates.filter((c: Candidate) => c.status === 'active' || !c.status);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center pb-12">
            {/* Header Area */}
            <div className="w-full bg-justice-green p-8 md:p-12 text-center shadow-md relative overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl mb-4 backdrop-blur-sm border border-white/30 shadow-inner">
                        JP
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                        2026 지방선거 디지털 웹플랫폼
                    </h1>
                    <p className="text-green-100 text-lg md:text-xl font-medium">
                        우리 지역을 바꿀 든든한 일꾼들을 소개합니다.
                    </p>
                </div>
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                    <div className="absolute -top-[100px] -left-[100px] w-64 h-64 rounded-full bg-white blur-3xl"></div>
                    <div className="absolute top-[50px] -right-[50px] w-96 h-96 rounded-full bg-justice-purple blur-3xl"></div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-6xl w-full px-4 mt-8 space-y-6">
                <div className="flex justify-between items-center bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
                        등록된 후보자 <span className="bg-justice-purple text-white px-3 py-0.5 rounded-full text-lg shadow-sm">{activeCandidates.length}</span>명
                    </h2>
                    <div className="flex gap-2">
                        <a
                            href="https://page.justice21.org/register"
                            className="px-5 py-2.5 bg-justice-green hover:bg-justice-green-dark text-white font-bold rounded-xl transition-all text-sm md:text-base shadow-sm hover:shadow-md flex items-center gap-1.5"
                        >
                            후보자 등록
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <Link
                            href="/qr"
                            className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all text-sm md:text-base border border-gray-200 shadow-sm hover:shadow-md"
                        >
                            QR코드 생성기
                        </Link>
                    </div>
                </div>

                {activeCandidates.length === 0 ? (
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-16 text-center">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <User className="w-12 h-12 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-600">현재 등록된 후보자가 없습니다.</h3>
                        <p className="text-gray-400 mt-2">새로운 명함을 등록해 보세요!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {activeCandidates.map((candidate: Candidate) => (
                            <Link
                                key={candidate.slug}
                                href={`/${candidate.slug}`}
                                className="group flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {/* Thumbnail Header */}
                                <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-200 relative w-full flex items-center justify-center p-4">
                                    <div className="absolute -bottom-10 shadow-lg w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden z-10 flex items-center justify-center">
                                        {candidate.photoUrl ? (
                                            <img src={candidate.photoUrl} alt={candidate.name} width="96" height="96" className="w-full h-full object-cover" loading="lazy" />
                                        ) : (
                                            <User className="w-10 h-10 text-gray-300" />
                                        )}
                                    </div>
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#FFED00] text-gray-900 text-xs font-bold rounded-full shadow-sm border border-yellow-300">
                                        {candidate.category}
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="pt-14 pb-6 px-6 flex-1 flex flex-col items-center text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-justice-purple transition-colors mb-1 flex items-center justify-center gap-2">
                                        {candidate.name}
                                        {candidate.isIncumbent && (
                                            <span className="text-[11px] font-bold bg-justice-green text-white px-2 py-0.5 rounded-md shadow-sm tracking-wide">
                                                현역
                                            </span>
                                        )}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-semibold mb-3">
                                        {candidate.district} {candidate.number ? <span className="text-gray-300 font-normal mx-1">|</span> : ''} {candidate.number ? <span className="text-justice-green">기호 {candidate.number}번</span> : ''}
                                    </p>
                                    
                                    <div className="w-12 h-1 bg-gray-100 rounded-full mb-4 transition-colors group-hover:bg-justice-purple/20"></div>

                                    <p className="text-gray-700 text-sm md:text-base line-clamp-2 leading-relaxed flex-1 font-medium px-2">
                                        {candidate.slogan || candidate.intro || '우리지역을 바꿀 정의당 후보입니다.'}
                                    </p>

                                    <div className="mt-6 w-full py-3.5 bg-gray-50 group-hover:bg-justice-green text-gray-600 group-hover:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base border border-gray-100 group-hover:border-justice-green shadow-sm">
                                        명함 보기
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
