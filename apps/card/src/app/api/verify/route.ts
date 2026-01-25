import { NextRequest, NextResponse } from 'next/server';
import { SheetsClient } from '@justice/api-client';

const sheetsClient = new SheetsClient();

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
            return NextResponse.json({
                valid: true,
                isNew: false,
                candidate
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
