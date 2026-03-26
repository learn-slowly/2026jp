import { SheetsClient } from '@justice/api-client';
import { CandidateCard } from '@/components/CandidateCard';
import { notFound } from 'next/navigation';

const sheetsClient = new SheetsClient();

// Disable caching for the demo to see updates immediately
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
            description: candidate.intro?.slice(0, 100) + '...',
            images: candidate.photoUrl ? [candidate.photoUrl] : [],
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const candidate = await sheetsClient.getCandidate(slug);

    if (!candidate) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold text-red-500 mb-4">후보자를 찾을 수 없습니다</h1>
                    <p className="text-gray-600 mb-6">요청하신 <strong>{slug}</strong> 후보자의 정보가 없습니다.</p>
                    <p className="text-sm text-gray-500">Google Sheet에 데이터가 정확히 입력되었는지 확인해주세요.</p>
                </div>
            </div>
        );
    }

    if (candidate && candidate.isIncumbent) {
        const reports = await sheetsClient.getReports(slug);
        candidate.reports = reports;
    }

    return <CandidateCard candidate={candidate} />;
}
