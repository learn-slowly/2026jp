"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sheetsClient = exports.SheetsClient = void 0;
const googleapis_1 = require("googleapis");
class SheetsClient {
    constructor() {
        const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
        this.sheetId = process.env.SHEET_ID || '';
        if (!serviceAccountKey) {
            throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY is missing');
        }
        if (!this.sheetId) {
            throw new Error('SHEET_ID is missing');
        }
        const auth = new googleapis_1.google.auth.GoogleAuth({
            credentials: JSON.parse(serviceAccountKey),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'], // Full access for writing
        });
        this.sheets = googleapis_1.google.sheets({ version: 'v4', auth });
    }
    getCandidates() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'candidates!A2:BA',
                });
                const rows = response.data.values || [];
                const allCandidates = rows.map((row) => this.mapRowToCandidate(row));
                // Deduplicate: Keep only the latest entry for each slug based on updatedAt
                const latestCandidatesMap = new Map();
                allCandidates.forEach(candidate => {
                    var _a, _b;
                    const existing = latestCandidatesMap.get(candidate.slug);
                    if (!existing) {
                        latestCandidatesMap.set(candidate.slug, candidate);
                    }
                    else {
                        const existingTime = ((_a = existing.updatedAt) === null || _a === void 0 ? void 0 : _a.getTime()) || 0;
                        const newTime = ((_b = candidate.updatedAt) === null || _b === void 0 ? void 0 : _b.getTime()) || 0;
                        if (newTime > existingTime) {
                            latestCandidatesMap.set(candidate.slug, candidate);
                        }
                    }
                });
                return Array.from(latestCandidatesMap.values());
            }
            catch (error) {
                console.error('Error fetching candidates:', error);
                return [];
            }
        });
    }
    getCandidateBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const candidates = yield this.getCandidates();
            return candidates.find((c) => c.slug === slug) || null;
        });
    }
    saveCandidate(candidate) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                // Prepare arrays for careers and pledges (pad with empty strings up to 10)
                const careers = Array(10).fill('');
                (_a = candidate.careers) === null || _a === void 0 ? void 0 : _a.forEach((c, i) => {
                    if (i < 10)
                        careers[i] = c;
                });
                const policies = Array(20).fill(''); // 10 policies * 2 fields (title, content) = 20 columns
                (_b = candidate.policies) === null || _b === void 0 ? void 0 : _b.forEach((p, i) => {
                    if (i < 10) {
                        policies[i * 2] = p.title; // Title
                        policies[i * 2 + 1] = p.content; // Content
                    }
                });
                const row = [
                    // A-K (Standard)
                    candidate.slug,
                    candidate.name,
                    candidate.district,
                    ((_c = candidate.number) === null || _c === void 0 ? void 0 : _c.toString()) || '',
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
                    candidate.social.blog || '', // AT (New: Blog)
                    // AU-AV (Contact)
                    candidate.contact.phone || '',
                    candidate.contact.email || '', // AV
                    candidate.contact.kakao || '', // AW (New: Kakao)
                    candidate.contact.telegram || '', // AX (New: Telegram)
                    // AY (Incumbent)
                    candidate.isIncumbent ? 'TRUE' : 'FALSE',
                    // AZ (Address)
                    candidate.address || '',
                    // BA (UpdatedAt)
                    new Date().toISOString()
                ];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'candidates!A:A',
                    valueInputOption: 'USER_ENTERED',
                    requestBody: { values: [row] },
                });
                return true;
            }
            catch (error) {
                console.error('Error saving candidate:', error);
                return false;
            }
        });
    }
    getReports(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'reports!A2:I',
                });
                const rows = response.data.values || [];
                return rows
                    .map((row) => ({
                    candidateSlug: (row[0] || '').trim(),
                    year: (row[1] || '').trim(),
                    month: (row[2] || '').trim(),
                    category: (row[3] || '').trim(),
                    title: (row[4] || '').trim(),
                    description: (row[5] || '').trim(),
                    linkUrl: (row[6] || '').trim(),
                    visible: (row[7] || '').trim().toUpperCase() === 'TRUE',
                    updatedAt: row[8] ? new Date(row[8]) : undefined,
                }))
                    .filter((r) => r.candidateSlug === slug && r.visible);
            }
            catch (error) {
                console.error('Error fetching reports:', error);
                return [];
            }
        });
    }
    saveReports(reports) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!reports.length)
                return true;
            try {
                const rows = reports.map((r) => [
                    r.candidateSlug,
                    r.year,
                    r.month,
                    r.category,
                    r.title,
                    r.description,
                    r.linkUrl || '',
                    r.visible ? 'TRUE' : 'FALSE',
                    new Date().toISOString()
                ]);
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'reports!A:I',
                    valueInputOption: 'USER_ENTERED',
                    requestBody: { values: rows },
                });
                return true;
            }
            catch (error) {
                console.error('Error saving reports:', error);
                return false;
            }
        });
    }
    mapRowToCandidate(row) {
        // Safe access helper
        const get = (idx) => (row[idx] || '').trim();
        const slug = get(0);
        const name = get(1);
        // Careers: Indices 11(L) to 20(U)
        const careers = [];
        for (let i = 11; i <= 20; i++) {
            const val = get(i);
            if (val)
                careers.push(val);
        }
        // Policies: Indices 21(V) to 40(AO)
        // Structure: Title, Content, Title, Content...
        const policies = [];
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
            category: get(4) || '기초지역구',
            status: get(5) || 'active',
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
                blog: get(45) || undefined, // AT
            },
            contact: {
                phone: get(46) || undefined, // AU
                email: get(47) || undefined, // AV
                kakao: get(48) || undefined, // AW
                telegram: get(49) || undefined, // AX
            },
            isIncumbent: get(50).toUpperCase() === 'TRUE', // AY
            address: get(51) || undefined, // AZ
            updatedAt: row[52] ? new Date(row[52]) : new Date(0), // BA
        };
    }
}
exports.SheetsClient = SheetsClient;
exports.sheetsClient = new SheetsClient();
