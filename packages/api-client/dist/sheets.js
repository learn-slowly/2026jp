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
                    range: 'candidates!A2:BB',
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
    getCandidate(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const candidates = yield this.getCandidates();
            return candidates.find((c) => c.slug === slug) || null;
        });
    }
    verifyCandidate(slug, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const candidate = yield this.getCandidate(slug);
            if (!candidate)
                return null; // Candidate doesn't exist
            // If candidate has no password (migration/legacy), allow access or require setup?
            // Assuming we want to allow claiming if empty, but here we just check equality if set.
            if (candidate.password && candidate.password !== password) {
                return null; // Password mismatch
            }
            return candidate;
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
                    new Date().toISOString(),
                    // BB (Password)
                    candidate.password || ''
                ];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'candidates!A:A',
                    valueInputOption: 'RAW',
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
                const candidateRows = rows.filter(row => (row[0] || '').trim() === slug);
                if (!candidateRows.length)
                    return [];
                let maxTime = 0;
                candidateRows.forEach(row => {
                    const timeStr = row[8];
                    if (timeStr) {
                        const time = new Date(timeStr).getTime();
                        if (time > maxTime)
                            maxTime = time;
                    }
                });
                return candidateRows
                    .filter(row => row[8] && new Date(row[8]).getTime() === maxTime)
                    .filter(row => row[7] !== 'DELETED_BATCH')
                    .map((row) => ({
                    candidateSlug: (row[0] || '').trim(),
                    year: (row[1] || '').trim(),
                    month: (row[2] || '').trim(),
                    category: (row[3] || '').trim(),
                    title: (row[4] || '').trim(),
                    description: (row[5] || '').trim(),
                    linkUrl: (row[6] || '').trim(),
                    visible: (row[7] || '').trim().toUpperCase() === 'TRUE',
                    updatedAt: new Date(row[8]),
                }))
                    .filter((r) => r.visible);
            }
            catch (error) {
                console.error('Error fetching reports:', error);
                return [];
            }
        });
    }
    saveReports(slug, reports) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const now = new Date().toISOString();
                const rows = reports.length ? reports.map((r) => [
                    slug,
                    r.year,
                    r.month,
                    r.category,
                    r.title,
                    r.description,
                    r.linkUrl || '',
                    r.visible ? 'TRUE' : 'FALSE',
                    now
                ]) : [[slug, '', '', '', '', '', '', 'DELETED_BATCH', now]];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'reports!A:I',
                    valueInputOption: 'RAW',
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
    // --- Mayor Extra (Vision, Greeting) ---
    getMayorExtra(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_extra!A2:P',
                });
                const rows = response.data.values || [];
                // Find latest entry for slug
                const row = rows
                    .filter(r => (r[0] || '').trim() === slug)
                    .pop(); // Use latest if duplicates
                if (!row)
                    return undefined;
                return {
                    candidateSlug: row[0],
                    position: row[1] || '',
                    visionTitle: row[2] || '',
                    visionSubtitle: row[3] || '',
                    greetingTitle: row[4] || '',
                    greetingText: row[5] || '',
                    heroImageUrl: row[6] || '',
                    declarationTitle: row[7] || '',
                    declarationVideoUrl: row[8] || '',
                    declarationText: row[9] || '',
                    election: row[10] || '',
                    slogans: row[11] || '',
                    ctaLines: row[12] || '',
                    heroImageScale: row[13] || '',
                    heroImageOffsetX: row[14] || '',
                    heroImageOffsetY: row[15] || '',
                };
            }
            catch (error) {
                console.error('Error fetching mayor_extra:', error);
                return undefined;
            }
        });
    }
    saveMayorExtra(extra) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const row = [
                    extra.candidateSlug,
                    extra.position,
                    extra.visionTitle,
                    extra.visionSubtitle,
                    extra.greetingTitle,
                    extra.greetingText,
                    extra.heroImageUrl,
                    extra.declarationTitle || '',
                    extra.declarationVideoUrl || '',
                    extra.declarationText || '',
                    extra.election || '',
                    extra.slogans || '',
                    extra.ctaLines || '',
                    extra.heroImageScale || '',
                    extra.heroImageOffsetX || '',
                    extra.heroImageOffsetY || '',
                ];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_extra!A:P',
                    valueInputOption: 'RAW',
                    requestBody: { values: [row] },
                });
                return true;
            }
            catch (error) {
                console.error('Error saving mayor_extra:', error);
                return false;
            }
        });
    }
    // --- Mayor Stories ---
    getMayorStories(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_stories!A2:H',
                });
                const rows = response.data.values || [];
                const candidateRows = rows.filter(row => (row[0] || '').trim() === slug);
                if (!candidateRows.length)
                    return [];
                let maxTime = 0;
                candidateRows.forEach(row => {
                    const timeStr = row[7];
                    if (timeStr) {
                        const time = new Date(timeStr).getTime();
                        if (time > maxTime)
                            maxTime = time;
                    }
                });
                return candidateRows
                    .filter(row => row[7] && new Date(row[7]).getTime() === maxTime)
                    .filter(row => row[6] !== 'DELETED_BATCH')
                    .map(row => ({
                    candidateSlug: row[0] || '',
                    date: row[1] || '',
                    category: row[2] || '',
                    title: row[3] || '',
                    content: row[4] || '',
                    imageUrl: row[5] || '',
                    visible: (row[6] || '').toUpperCase() === 'TRUE',
                }))
                    .filter(s => s.visible);
            }
            catch (error) {
                console.error('Error fetching mayor_stories:', error);
                return [];
            }
        });
    }
    saveMayorStories(slug, stories) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const now = new Date().toISOString();
                const rows = stories.length ? stories.map(s => [
                    slug,
                    s.date,
                    s.category,
                    s.title,
                    s.content,
                    s.imageUrl || '',
                    s.visible ? 'TRUE' : 'FALSE',
                    now
                ]) : [[slug, '', '', '', '', '', 'DELETED_BATCH', now]];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_stories!A:H',
                    valueInputOption: 'RAW',
                    requestBody: { values: rows },
                });
                return true;
            }
            catch (error) {
                console.error('Error saving mayor_stories:', error);
                return false;
            }
        });
    }
    // --- Mayor Schedules ---
    getMayorSchedules(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_schedules!A2:G',
                });
                const rows = response.data.values || [];
                const candidateRows = rows.filter(row => (row[0] || '').trim() === slug);
                if (!candidateRows.length)
                    return [];
                let maxTime = 0;
                candidateRows.forEach(row => {
                    const timeStr = row[6];
                    if (timeStr) {
                        const time = new Date(timeStr).getTime();
                        if (time > maxTime)
                            maxTime = time;
                    }
                });
                return candidateRows
                    .filter(row => row[6] && new Date(row[6]).getTime() === maxTime)
                    .filter(row => row[5] !== 'DELETED_BATCH')
                    .map(row => ({
                    candidateSlug: row[0] || '',
                    date: row[1] || '',
                    time: row[2] || '',
                    title: row[3] || '',
                    location: row[4] || '',
                    visible: (row[5] || '').toUpperCase() === 'TRUE',
                }))
                    .filter(s => s.visible);
            }
            catch (error) {
                console.error('Error fetching mayor_schedules:', error);
                return [];
            }
        });
    }
    saveMayorSchedules(slug, schedules) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const now = new Date().toISOString();
                const rows = schedules.length ? schedules.map(s => [
                    slug,
                    s.date,
                    s.time,
                    s.title,
                    s.location,
                    s.visible ? 'TRUE' : 'FALSE',
                    now
                ]) : [[slug, '', '', '', '', 'DELETED_BATCH', now]];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_schedules!A:G',
                    valueInputOption: 'RAW',
                    requestBody: { values: rows },
                });
                return true;
            }
            catch (error) {
                console.error('Error saving mayor_schedules:', error);
                return false;
            }
        });
    }
    // --- Mayor Gallery ---
    getMayorGallery(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_gallery!A2:F',
                });
                const rows = response.data.values || [];
                const candidateRows = rows.filter(row => (row[0] || '').trim() === slug);
                if (!candidateRows.length)
                    return [];
                let maxTime = 0;
                candidateRows.forEach(row => {
                    const timeStr = row[5];
                    if (timeStr) {
                        const time = new Date(timeStr).getTime();
                        if (time > maxTime)
                            maxTime = time;
                    }
                });
                return candidateRows
                    .filter(row => row[5] && new Date(row[5]).getTime() === maxTime)
                    .filter(row => row[4] !== 'DELETED_BATCH')
                    .map(row => ({
                    candidateSlug: row[0] || '',
                    date: row[1] || '',
                    caption: row[2] || '',
                    imageUrl: row[3] || '',
                    visible: (row[4] || '').toUpperCase() === 'TRUE',
                }))
                    .filter(s => s.visible);
            }
            catch (error) {
                console.error('Error fetching mayor_gallery:', error);
                return [];
            }
        });
    }
    saveMayorGallery(slug, gallery) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const now = new Date().toISOString();
                const rows = gallery.length ? gallery.map(g => [
                    slug,
                    g.date,
                    g.caption,
                    g.imageUrl,
                    g.visible ? 'TRUE' : 'FALSE',
                    now
                ]) : [[slug, '', '', '', 'DELETED_BATCH', now]];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_gallery!A:F',
                    valueInputOption: 'RAW',
                    requestBody: { values: rows },
                });
                return true;
            }
            catch (error) {
                console.error('Error saving mayor_gallery:', error);
                return false;
            }
        });
    }
    // --- Candidate Policies (별도 시트, 무한대 정책 지원) ---
    getCandidatePolicies(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'candidate_policies!A2:F',
                });
                const rows = response.data.values || [];
                const candidateRows = rows.filter(row => (row[0] || '').trim() === slug);
                if (!candidateRows.length)
                    return [];
                // 가장 최근 batch만 유지 (DELETED_BATCH 처리는 mayor_schedules와 동일 패턴)
                let maxTime = 0;
                candidateRows.forEach(row => {
                    const timeStr = row[5];
                    if (timeStr) {
                        const time = new Date(timeStr).getTime();
                        if (time > maxTime)
                            maxTime = time;
                    }
                });
                return candidateRows
                    .filter(row => row[5] && new Date(row[5]).getTime() === maxTime)
                    .filter(row => row[4] !== 'DELETED_BATCH')
                    .map(row => ({
                    candidateSlug: row[0] || '',
                    order: parseInt(row[1]) || 999,
                    title: row[2] || '',
                    content: row[3] || '',
                    visible: (row[4] || '').toUpperCase() === 'TRUE',
                    updatedAt: new Date(row[5]),
                }))
                    .filter(p => p.visible)
                    .sort((a, b) => a.order - b.order);
            }
            catch (error) {
                console.error('Error fetching candidate_policies:', error);
                return [];
            }
        });
    }
    saveCandidatePolicies(slug, policies) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const now = new Date().toISOString();
                const rows = policies.length
                    ? policies.map((p, i) => [
                        slug,
                        String(i + 1),
                        p.title,
                        p.content,
                        'TRUE',
                        now,
                    ])
                    : [[slug, '', '', '', 'DELETED_BATCH', now]];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'candidate_policies!A:F',
                    valueInputOption: 'RAW',
                    requestBody: { values: rows },
                });
                return true;
            }
            catch (error) {
                console.error('Error saving candidate_policies:', error);
                return false;
            }
        });
    }
    // --- Settings (key-value) ---
    getSettings(tabName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: `${tabName}!A2:B`,
                });
                const rows = response.data.values || [];
                const settings = {};
                rows.forEach(row => {
                    const key = (row[0] || '').trim();
                    const value = (row[1] || '').trim();
                    if (key)
                        settings[key] = value;
                });
                return settings;
            }
            catch (error) {
                console.error(`Error fetching settings from ${tabName}:`, error);
                return {};
            }
        });
    }
    // --- Central Policies ---
    getCentralPolicies() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sheets)
                return [];
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'central_policies!A2:H',
                });
                const rows = response.data.values || [];
                return rows
                    .filter((row) => row[7] === 'TRUE')
                    .map((row) => ({
                    category: row[0] || '',
                    order: parseInt(row[1]) || 999,
                    title: row[2] || '',
                    summary: row[3] || '',
                    content: row[4] || '',
                    imageUrl: row[5] || '',
                    linkUrl: row[6] || '',
                    visible: row[7] === 'TRUE'
                }))
                    .sort((a, b) => a.order - b.order);
            }
            catch (error) {
                console.error('Error fetching central policies:', error);
                return [];
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
            password: get(53) || undefined, // BB
        };
    }
}
exports.SheetsClient = SheetsClient;
exports.sheetsClient = new SheetsClient();
