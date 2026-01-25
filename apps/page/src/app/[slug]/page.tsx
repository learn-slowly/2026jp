import { SheetsClient } from '@justice/api-client';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PolicySection } from '@/components/PolicySection';
import { ReportSection } from '@/components/ReportSection';
import { Footer } from '@/components/Footer';
import { ScheduleSection } from '@/components/ScheduleSection';
import { StorySection } from '@/components/StorySection';
import { GallerySection } from '@/components/GallerySection';

const sheetsClient = new SheetsClient();

export const dynamic = 'force-dynamic';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const candidate = await sheetsClient.getCandidate(slug);

    if (!candidate) return { title: '후보자를 찾을 수 없습니다' };

    return {
        title: `${candidate.name} - 2026 지방선거 ${candidate.category} 후보`,
        description: candidate.slogan,
        openGraph: {
            title: `정의당 ${candidate.name}와 함께해주십시오`,
            description: candidate.intro.slice(0, 100) + '...',
            images: candidate.photoUrl ? [candidate.photoUrl] : [],
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const candidate = await sheetsClient.getCandidate(slug);

    if (!candidate) {
        notFound();
    }

    if (candidate.isIncumbent) {
        // Fetch reports if incumbent
        const reports = await sheetsClient.getReports(slug);
        candidate.reports = reports;
    }

    if (candidate.category.includes('단체장')) {
        const [extra, stories, schedules, gallery] = await Promise.all([
            sheetsClient.getMayorExtra(slug),
            sheetsClient.getMayorStories(slug),
            sheetsClient.getMayorSchedules(slug),
            sheetsClient.getMayorGallery(slug)
        ]);
        candidate.mayorExtra = extra;
        candidate.mayorStories = stories;
        candidate.mayorSchedules = schedules;
        candidate.mayorGallery = gallery;
    }

    return (
        <main className="min-h-screen bg-white">
            <Navigation name={candidate.name} slug={slug} />
            <HeroSection candidate={candidate} />
            <AboutSection candidate={candidate} />
            {/* Mayor Specific Sections */}
            {candidate.mayorSchedules && candidate.mayorSchedules.length > 0 && (
                <ScheduleSection candidate={candidate} />
            )}
            {candidate.mayorStories && candidate.mayorStories.length > 0 && (
                <StorySection candidate={candidate} />
            )}
            <PolicySection candidate={candidate} />
            <ReportSection candidate={candidate} />
            {candidate.mayorGallery && candidate.mayorGallery.length > 0 && (
                <GallerySection candidate={candidate} />
            )}
            <Footer candidate={candidate} />
        </main>
    );
}
