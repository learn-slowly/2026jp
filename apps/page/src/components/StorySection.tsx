'use client';

import { Candidate } from '@justice/types';
import { Newspaper, ChevronRight } from 'lucide-react';

interface StorySectionProps {
    candidate: Candidate;
}

export function StorySection({ candidate }: StorySectionProps) {
    if (!candidate.mayorStories || candidate.mayorStories.length === 0) return null;

    const stories = [...candidate.mayorStories].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-justice-green font-bold text-lg tracking-wider uppercase mb-2">News & Story</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                        현장 <span className="text-justice-green">소식</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story, i) => (
                        <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full group">
                            {story.imageUrl && (
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={story.imageUrl}
                                        alt={story.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-justice-green/10 text-justice-green text-xs font-bold px-2 py-1 rounded-full uppercase">
                                        {story.category}
                                    </span>
                                    <span className="text-gray-400 text-xs">
                                        {story.date}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-justice-green transition-colors">
                                    {story.title}
                                </h4>
                                <p className="text-gray-600 line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
                                    {story.content}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-sm font-bold text-gray-900 group-hover:text-justice-green transition-colors">
                                    자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
