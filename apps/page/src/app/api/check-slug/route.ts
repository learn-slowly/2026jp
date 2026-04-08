import { SheetsClient } from '@justice/api-client';
import { NextRequest, NextResponse } from 'next/server';

const sheetsClient = new SheetsClient();

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get('slug');

    if (!slug) {
        return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    // Validate slug format (lowercase english + numbers + hyphen)
    const slugRegex = /^[a-z0-9-]+$/;
    if (!slugRegex.test(slug)) {
        return NextResponse.json(
            { error: 'Invalid slug format. Use lowercase letters, numbers, and hyphens.' },
            { status: 400 }
        );
    }

    try {
        const candidate = await sheetsClient.getCandidate(slug);

        if (candidate) {
            return NextResponse.json({
                available: false,
                exists: true
            });
        }

        return NextResponse.json({ available: true });
    } catch (error) {
        console.error('Error checking slug:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
