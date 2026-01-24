import { google } from 'googleapis';
import { Candidate } from '@justice/types';

export class SheetsClient {
    private sheets;
    private sheetId: string;

    constructor() {
        const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
        this.sheetId = process.env.SHEET_ID || '';

        if (!serviceAccountKey) {
            throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY is missing');
        }
        if (!this.sheetId) {
            throw new Error('SHEET_ID is missing');
        }

        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(serviceAccountKey),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'], // Full access for writing
        });

        this.sheets = google.sheets({ version: 'v4', auth });
    }

    async getCandidates(): Promise<Candidate[]> {
        try {
            const response = await this.sheets.spreadsheets.values.get({
                spreadsheetId: this.sheetId,
                range: 'candidates!A2:AW',
            });

            const rows = response.data.values || [];
            const allCandidates = rows.map((row) => this.mapRowToCandidate(row));

            // Deduplicate: Keep only the latest entry for each slug based on updatedAt
            const latestCandidatesMap = new Map<string, Candidate>();

            allCandidates.forEach(candidate => {
                const existing = latestCandidatesMap.get(candidate.slug);
                if (!existing) {
                    latestCandidatesMap.set(candidate.slug, candidate);
                } else {
                    const existingTime = existing.updatedAt?.getTime() || 0;
                    const newTime = candidate.updatedAt?.getTime() || 0;
                    if (newTime > existingTime) {
                        latestCandidatesMap.set(candidate.slug, candidate);
                    }
                }
            });

            return Array.from(latestCandidatesMap.values());
        } catch (error) {
            console.error('Error fetching candidates:', error);
            return [];
        }
    }

    async getCandidateBySlug(slug: string): Promise<Candidate | null> {
        const candidates = await this.getCandidates();
        return candidates.find((c) => c.slug === slug) || null;
    }

    async saveCandidate(candidate: Candidate): Promise<boolean> {
        try {
            // Prepare arrays for careers and pledges (pad with empty strings up to 10)
            const careers = Array(10).fill('');
            candidate.careers?.forEach((c, i) => {
                if (i < 10) careers[i] = c;
            });

            const policies = Array(20).fill(''); // 10 policies * 2 fields (title, content) = 20 columns

            candidate.policies?.forEach((p, i) => {
                if (i < 10) {
                    policies[i * 2] = p.title;     // Title
                    policies[i * 2 + 1] = p.content; // Content
                }
            });

            const row = [
                // A-K (Standard)
                candidate.slug,
                candidate.name,
                candidate.district,
                candidate.number?.toString() || '',
                candidate.category,
                candidate.status,
                candidate.slogan,
                candidate.intro,
                candidate.photoUrl,
                candidate.donation.account,
                candidate.donation.holder,

                // L-U (Careers 1-10)
                ...careers,

                // V-AO (Policies 1-10: Title, Content)
                ...policies,

                // AP-AS (Social)
                candidate.social.facebook || '',
                candidate.social.youtube || '',
                candidate.social.instagram || '',
                candidate.social.x || '',

                // AT (Contact)
                candidate.contact.phone || '',

                // AU (Incumbent)
                candidate.isIncumbent ? 'TRUE' : 'FALSE',

                // AV (Address)
                candidate.address || '',

                // AW (UpdatedAt)
                new Date().toISOString()
            ];

            await this.sheets.spreadsheets.values.append({
                spreadsheetId: this.sheetId,
                range: 'candidates!A:A',
                valueInputOption: 'USER_ENTERED',
                requestBody: { values: [row] },
            });
            return true;
        } catch (error) {
            console.error('Error saving candidate:', error);
            return false;
        }
    }

    private mapRowToCandidate(row: string[]): Candidate {
        // Safe access helper
        const get = (idx: number) => (row[idx] || '').trim();

        const slug = get(0);
        const name = get(1);

        // Careers: Indices 11(L) to 20(U)
        const careers: string[] = [];
        for (let i = 11; i <= 20; i++) {
            const val = get(i);
            if (val) careers.push(val);
        }

        // Policies: Indices 21(V) to 40(AO)
        // Structure: Title, Content, Title, Content...
        const policies: { title: string; content: string }[] = [];

        for (let i = 0; i < 10; i++) {
            const titleIdx = 21 + (i * 2);
            const contentIdx = titleIdx + 1;
            const title = get(titleIdx);
            const content = get(contentIdx);

            if (title) {
                policies.push({ title, content });
            }
        }

        return {
            slug,
            name,
            district: get(2),
            number: row[3] ? parseInt(row[3], 10) : undefined,
            category: (get(4) as any) || '기초지역구',
            status: (get(5) as any) || 'active',
            slogan: get(6),
            intro: get(7),
            photoUrl: get(8),
            donation: {
                account: get(9),
                holder: get(10),
            },
            careers,
            policies,
            social: {
                facebook: get(41) || undefined,
                youtube: get(42) || undefined,
                instagram: get(43) || undefined,
                x: get(44) || undefined,
            },
            contact: {
                phone: get(45) || undefined,
            },
            isIncumbent: get(46).toUpperCase() === 'TRUE',
            address: get(47) || undefined,
            updatedAt: row[48] ? new Date(row[48]) : new Date(0),
        };
    }
}

export const sheetsClient = new SheetsClient();
