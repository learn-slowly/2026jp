'use client';

import { useState } from 'react';
import { Candidate } from '@justice/types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DeclarationSectionProps {
    candidate: Candidate;
}

export function DeclarationSection({ candidate }: DeclarationSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
    
    // Only render if we have at least a video or text
    if (!candidate.mayorExtra?.declarationVideoUrl && !candidate.mayorExtra?.declarationText) {
        return null;
    }

    const { declarationTitle, declarationVideoUrl, declarationText } = candidate.mayorExtra;

    // Extract YouTube ID
    const getYouTubeId = (url: string) => {
        try {
            let fullUrl = url;
            if (!/^https?:\/\//i.test(url)) fullUrl = 'https://' + url;
            const urlObj = new URL(fullUrl);
            if (urlObj.hostname.includes('youtube.com')) {
                if (urlObj.pathname.startsWith('/shorts/')) return urlObj.pathname.split('/')[2];
                if (urlObj.pathname.startsWith('/live/')) return urlObj.pathname.split('/')[2];
                if (urlObj.searchParams.has('v')) return urlObj.searchParams.get('v');
            } else if (urlObj.hostname.includes('youtu.be')) {
                return urlObj.pathname.replace(/^\/+/, '');
            }
        } catch (e) {
            // ignore URL parse errors
        }
        const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regExp);
        return match ? match[1] : null;
    };

    const videoId = declarationVideoUrl ? getYouTubeId(declarationVideoUrl) : null;

    return (
        <section className="bg-gray-50 py-16 px-4 md:px-8 border-b border-gray-200">
            <div className="max-w-4xl mx-auto space-y-12">
                
                {videoId && (
                    <div className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900">{declarationTitle || "출마를 선언하며"}</h2>
                            <p className="text-gray-600 mt-2">{candidate.name} 후보의 약속을 영상으로 만나보세요</p>
                        </div>
                        <div className="relative w-full bg-black overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5" style={{ paddingTop: '56.25%' }}>
                            <iframe 
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?rel=0`} 
                                title="출마선언 영상" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}

                {declarationText && (
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full flex items-center justify-between text-left focus:outline-none group"
                        >
                            <span className="text-xl font-extrabold text-gray-900 group-hover:text-justice-green transition flex items-center gap-3">
                                📖 출마선언문 전문 보기
                            </span>
                            <div className="p-3 bg-gray-50 rounded-full group-hover:bg-justice-green/10 transition">
                                {isOpen ? (
                                    <ChevronUp className="w-6 h-6 text-gray-600 group-hover:text-justice-green transition-transform" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-gray-600 group-hover:text-justice-green transition-transform" />
                                )}
                            </div>
                        </button>

                        {isOpen && (
                            <div className="mt-8 pt-8 border-t border-gray-100 animate-in slide-in-from-top-6 duration-500">
                                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-wrap font-medium">
                                    {declarationText}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
