import { NextRequest, NextResponse } from 'next/server';
import { sheetsClient } from '@justice/api-client';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { slug, password } = body;

        console.log('[VerifyAPI] Verifying:', slug);

        if (!slug) {
            return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
        }

        const candidate = await sheetsClient.getCandidate(slug);

        // Case 1: New Candidate (Slug not found)
        if (!candidate) {
            return NextResponse.json({
                valid: true,
                isNew: true,
                candidate: null
            });
        }

        // Case 2: Existing Candidate
        // If password is NOT set in DB, allow access (First time setup for existing data)
        // If password IS set, verify match
        if (!candidate.password || candidate.password === password) {
            // Fetch associated data
            const reports = await sheetsClient.getReports(slug);
            candidate.reports = reports;

            if (candidate.category.includes('단체장')) {
                const [extra, stories, schedules, gallery, candidatePolicies] = await Promise.all([
                    sheetsClient.getMayorExtra(slug),
                    sheetsClient.getMayorStories(slug),
                    sheetsClient.getMayorSchedules(slug),
                    sheetsClient.getMayorGallery(slug),
                    sheetsClient.getCandidatePolicies(slug).catch(() => []),
                ]);
                candidate.mayorExtra = extra;
                candidate.mayorStories = stories;
                candidate.mayorSchedules = schedules;
                candidate.mayorGallery = gallery;
                if (candidatePolicies.length > 0) {
                    candidate.policies = candidatePolicies.map((p) => ({ title: p.title, content: p.content }));
                }
            }

            const { password: _, ...safeCandidate } = candidate;
            return NextResponse.json({
                valid: true,
                isNew: false,
                candidate: safeCandidate
            });
        }

        // Case 3: Wrong Password
        return NextResponse.json({
            valid: false,
            isNew: false,
            candidate: null
        }, { status: 401 });

    } catch (error) {
        console.error('Error verifying candidate:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
