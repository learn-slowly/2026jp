'use client';

import { Candidate } from '@justice/types';

interface GallerySectionProps {
    candidate: Candidate;
}

export function GallerySection({ candidate }: GallerySectionProps) {
    if (!candidate.mayorGallery || candidate.mayorGallery.length === 0) return null;

    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-justice-green font-bold text-lg tracking-wider uppercase mb-2">Gallery</h2>
                        <h3 className="text-4xl md:text-5xl font-bold">
                            현장의 <span className="text-justice-green">열기</span>
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {candidate.mayorGallery.map((item, i) => (
                        <div
                            key={i}
                            className={`relative rounded-xl overflow-hidden group ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                }`}
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.caption}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <p className="text-sm font-bold text-justice-green mb-1">{item.date}</p>
                                <p className="text-white font-medium">{item.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
