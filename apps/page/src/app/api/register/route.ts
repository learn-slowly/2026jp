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

        // 정책은 별도 시트(candidate_policies)에도 저장 (개수 무제한)
        if (success && body.policies !== undefined) {
            await sheetsClient.saveCandidatePolicies(candidate.slug, body.policies);
        }

        // Save Mayor Specific Data if present
        // 부분 실패(quota exceeded 등)를 묵음 처리하지 않고 client에 알린다.
        const partialFailures: string[] = [];
        if (success) {
            if (body.mayorExtra) {
                const ok = await sheetsClient.saveMayorExtra({
                    ...body.mayorExtra,
                    candidateSlug: candidate.slug
                });
                if (!ok) partialFailures.push('mayorExtra');
            }

            if (body.mayorStories !== undefined) {
                const stories = body.mayorStories.map((s: any) => ({
                    ...s,
                    candidateSlug: candidate.slug
                }));
                const ok = await sheetsClient.saveMayorStories(candidate.slug, stories);
                if (!ok) partialFailures.push('mayorStories');
            }

            if (body.mayorSchedules !== undefined) {
                const schedules = body.mayorSchedules.map((s: any) => ({
                    ...s,
                    candidateSlug: candidate.slug
                }));
                const ok = await sheetsClient.saveMayorSchedules(candidate.slug, schedules);
                if (!ok) partialFailures.push('mayorSchedules');
            }

            if (body.mayorGallery !== undefined) {
                const gallery = body.mayorGallery.map((g: any) => ({
                    ...g,
                    candidateSlug: candidate.slug
                }));
                const ok = await sheetsClient.saveMayorGallery(candidate.slug, gallery);
                if (!ok) partialFailures.push('mayorGallery');
            }
        }

        if (partialFailures.length > 0) {
            return NextResponse.json(
                {
                    error: `일부 데이터 저장에 실패했습니다 (${partialFailures.join(', ')}). 잠시 후 다시 시도해주세요. (Google Sheets API quota 초과 가능성)`,
                    partialFailures,
                },
                { status: 502 }
            );
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
