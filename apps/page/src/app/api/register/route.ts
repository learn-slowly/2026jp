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

        // 기존 후보자인 경우 비밀번호 검증
        const existing = await sheetsClient.getCandidate(body.slug);
        if (existing && existing.password) {
            if (!body.password || existing.password !== body.password) {
                return NextResponse.json(
                    { error: 'Unauthorized: invalid password' },
                    { status: 401 }
                );
            }
        }

        // Construct Candidate object from request body
        const candidate: Candidate = {
            slug: body.slug,
            name: body.name,
            district: body.district || '',
            category: body.category || '기초지역구',
            number: body.number ? parseInt(body.number) : undefined,
            status: 'active',
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
                blog: body.social?.blog,
            },
            contact: {
                phone: body.contact?.phone,
                email: body.contact?.email,
                kakao: body.contact?.kakao,
                telegram: body.contact?.telegram,
            },
            isIncumbent: body.isIncumbent === true || body.isIncumbent === 'true',
            address: body.address || '',
            password: body.password || '',
            updatedAt: new Date(),
        };

        const success = await sheetsClient.saveCandidate(candidate);

        if (success && body.reports !== undefined) {
            // Attach slug to reports
            const reports = body.reports.map((r: any) => ({
                ...r,
                candidateSlug: candidate.slug
            }));
            await sheetsClient.saveReports(candidate.slug, reports);
        }

        // Save Mayor Specific Data if present
        if (success) {
            if (body.mayorExtra) {
                await sheetsClient.saveMayorExtra({
                    ...body.mayorExtra,
                    candidateSlug: candidate.slug
                });
            }

            if (body.mayorStories !== undefined) {
                const stories = body.mayorStories.map((s: any) => ({
                    ...s,
                    candidateSlug: candidate.slug
                }));
                await sheetsClient.saveMayorStories(candidate.slug, stories);
            }

            if (body.mayorSchedules !== undefined) {
                const schedules = body.mayorSchedules.map((s: any) => ({
                    ...s,
                    candidateSlug: candidate.slug
                }));
                await sheetsClient.saveMayorSchedules(candidate.slug, schedules);
            }

            if (body.mayorGallery !== undefined) {
                const gallery = body.mayorGallery.map((g: any) => ({
                    ...g,
                    candidateSlug: candidate.slug
                }));
                await sheetsClient.saveMayorGallery(candidate.slug, gallery);
            }
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
