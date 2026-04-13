'use client';

import { Candidate } from '@justice/types';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface ScheduleSectionProps {
    candidate: Candidate;
}

export function ScheduleSection({ candidate }: ScheduleSectionProps) {
    if (!candidate.mayorSchedules || candidate.mayorSchedules.length === 0) return null;

    // Filter visible and sort by date ascending (if future) or descending (if past)? 
    // Usually schedules are upcoming > past. Let's just sort by date desc for now or logic.
    // Let's sort Descending (Newest first).
    const schedules = [...candidate.mayorSchedules].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-justice-yellow/5 skew-x-12 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                            후보자 주요 일정
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {schedules.map((schedule, i) => (
                        <div key={i} className="flex gap-6 items-start p-6 rounded-2xl border border-gray-100 bg-white hover:border-justice-yellow/30 hover:shadow-lg transition-all group">
                            <div className="flex-shrink-0 bg-justice-yellow text-black rounded-xl p-4 text-center min-w-[5rem]">
                                <div className="text-sm font-bold uppercase">{new Date(schedule.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                                <div className="text-2xl font-bold">{new Date(schedule.date).getDate()}</div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-gray-900 group-hover:text-justice-yellow transition-colors">
                                    {schedule.title}
                                </h4>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {schedule.time}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {schedule.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
