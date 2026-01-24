import { sheetsClient } from '@justice/api-client';
import { Candidate } from '@justice/types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.slug || !body.name) {
            return NextResponse.json(
                { error: 'Missing required fields (slug, name)' },
                { status: 400 }
            );
        }

        // Construct Candidate object from request body
        // Ensure we don't trust the client for sensitive fields if any were sensitive,
        // but here we trust the form input for simplicity in this sample.
        const candidate: Candidate = {
            slug: body.slug,
            name: body.name,
            district: body.district || '',
            category: body.category || '기초지역구',
            number: body.number ? parseInt(body.number) : undefined,
            status: 'active', // Default to active for now
            slogan: body.slogan || '',
            intro: body.intro || '',
            photoUrl: body.photoUrl || '',
            donation: {
                account: body.donation?.account || '',
                holder: body.donation?.holder || '',
            },
            careers: body.careers || [],
            policies: body.policies || [],
            social: {
                x: body.social?.x,
                facebook: body.social?.facebook,
                youtube: body.social?.youtube,
                instagram: body.social?.instagram,
            },
            contact: {
                phone: body.contact?.phone,
                email: body.contact?.email,
            },
            isIncumbent: body.isIncumbent === true || body.isIncumbent === 'true',
        };

        const success = await sheetsClient.saveCandidate(candidate);

        if (success && body.reports && body.reports.length > 0) {
            // Attach slug to reports
            const reports = body.reports.map((r: any) => ({
                ...r,
                candidateSlug: candidate.slug
            }));
            await sheetsClient.saveReports(reports);
        }

        if (success) {
            return NextResponse.json({ success: true, slug: candidate.slug });
        } else {
            return NextResponse.json(
                { error: 'Failed to save to Google Sheets' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Error registering candidate:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
