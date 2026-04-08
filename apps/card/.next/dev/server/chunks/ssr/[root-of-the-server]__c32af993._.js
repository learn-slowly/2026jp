module.exports = [
"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/favicon.ico.mjs { IMAGE => \"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/apps/card/src/app/favicon.ico.mjs { IMAGE => \"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/icon.png.mjs { IMAGE => \"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/apps/card/src/app/icon.png.mjs { IMAGE => \"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/apple-icon.png.mjs { IMAGE => \"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/apple-icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/apps/card/src/app/apple-icon.png.mjs { IMAGE => \"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/apple-icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/apps/card/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/coding/2026jp/justice-election-2026/packages/api-client/dist/sheets.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __awaiter = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sheetsClient = exports.SheetsClient = void 0;
const googleapis_1 = __turbopack_context__.r("[externals]/googleapis [external] (googleapis, cjs, [project]/coding/2026jp/justice-election-2026/packages/api-client/node_modules/googleapis)");
class SheetsClient {
    constructor(){
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
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });
        this.sheets = googleapis_1.google.sheets({
            version: 'v4',
            auth
        });
    }
    getCandidates() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'candidates!A2:BB'
                });
                const rows = response.data.values || [];
                const allCandidates = rows.map((row)=>this.mapRowToCandidate(row));
                // Deduplicate: Keep only the latest entry for each slug based on updatedAt
                const latestCandidatesMap = new Map();
                allCandidates.forEach((candidate)=>{
                    var _a, _b;
                    const existing = latestCandidatesMap.get(candidate.slug);
                    if (!existing) {
                        latestCandidatesMap.set(candidate.slug, candidate);
                    } else {
                        const existingTime = ((_a = existing.updatedAt) === null || _a === void 0 ? void 0 : _a.getTime()) || 0;
                        const newTime = ((_b = candidate.updatedAt) === null || _b === void 0 ? void 0 : _b.getTime()) || 0;
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
        });
    }
    getCandidate(slug) {
        return __awaiter(this, void 0, void 0, function*() {
            const candidates = yield this.getCandidates();
            return candidates.find((c)=>c.slug === slug) || null;
        });
    }
    verifyCandidate(slug, password) {
        return __awaiter(this, void 0, void 0, function*() {
            const candidate = yield this.getCandidate(slug);
            if (!candidate) return null; // Candidate doesn't exist
            // If candidate has no password (migration/legacy), allow access or require setup?
            // Assuming we want to allow claiming if empty, but here we just check equality if set.
            if (candidate.password && candidate.password !== password) {
                return null; // Password mismatch
            }
            return candidate;
        });
    }
    saveCandidate(candidate) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a, _b, _c;
            try {
                // Prepare arrays for careers and pledges (pad with empty strings up to 10)
                const careers = Array(10).fill('');
                (_a = candidate.careers) === null || _a === void 0 ? void 0 : _a.forEach((c, i)=>{
                    if (i < 10) careers[i] = c;
                });
                const policies = Array(20).fill(''); // 10 policies * 2 fields (title, content) = 20 columns
                (_b = candidate.policies) === null || _b === void 0 ? void 0 : _b.forEach((p, i)=>{
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
                    candidate.social.blog || '',
                    // AU-AV (Contact)
                    candidate.contact.phone || '',
                    candidate.contact.email || '',
                    candidate.contact.kakao || '',
                    candidate.contact.telegram || '',
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
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: [
                            row
                        ]
                    }
                });
                return true;
            } catch (error) {
                console.error('Error saving candidate:', error);
                return false;
            }
        });
    }
    getReports(slug) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'reports!A2:I'
                });
                const rows = response.data.values || [];
                const candidateRows = rows.filter((row)=>(row[0] || '').trim() === slug);
                if (!candidateRows.length) return [];
                let maxTime = 0;
                candidateRows.forEach((row)=>{
                    const timeStr = row[8];
                    if (timeStr) {
                        const time = new Date(timeStr).getTime();
                        if (time > maxTime) maxTime = time;
                    }
                });
                return candidateRows.filter((row)=>row[8] && new Date(row[8]).getTime() === maxTime).filter((row)=>row[7] !== 'DELETED_BATCH').map((row)=>({
                        candidateSlug: (row[0] || '').trim(),
                        year: (row[1] || '').trim(),
                        month: (row[2] || '').trim(),
                        category: (row[3] || '').trim(),
                        title: (row[4] || '').trim(),
                        description: (row[5] || '').trim(),
                        linkUrl: (row[6] || '').trim(),
                        visible: (row[7] || '').trim().toUpperCase() === 'TRUE',
                        updatedAt: new Date(row[8])
                    })).filter((r)=>r.visible);
            } catch (error) {
                console.error('Error fetching reports:', error);
                return [];
            }
        });
    }
    saveReports(slug, reports) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const now = new Date().toISOString();
                const rows = reports.length ? reports.map((r)=>[
                        slug,
                        r.year,
                        r.month,
                        r.category,
                        r.title,
                        r.description,
                        r.linkUrl || '',
                        r.visible ? 'TRUE' : 'FALSE',
                        now
                    ]) : [
                    [
                        slug,
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        'DELETED_BATCH',
                        now
                    ]
                ];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'reports!A:I',
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: rows
                    }
                });
                return true;
            } catch (error) {
                console.error('Error saving reports:', error);
                return false;
            }
        });
    }
    // --- Mayor Extra (Vision, Greeting) ---
    getMayorExtra(slug) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_extra!A2:G'
                });
                const rows = response.data.values || [];
                // Find latest entry for slug
                const row = rows.filter((r)=>(r[0] || '').trim() === slug).pop(); // Use latest if duplicates
                if (!row) return undefined;
                return {
                    candidateSlug: row[0],
                    position: row[1] || '',
                    visionTitle: row[2] || '',
                    visionSubtitle: row[3] || '',
                    greetingTitle: row[4] || '',
                    greetingText: row[5] || '',
                    heroImageUrl: row[6] || ''
                };
            } catch (error) {
                console.error('Error fetching mayor_extra:', error);
                return undefined;
            }
        });
    }
    saveMayorExtra(extra) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const row = [
                    extra.candidateSlug,
                    extra.position,
                    extra.visionTitle,
                    extra.visionSubtitle,
                    extra.greetingTitle,
                    extra.greetingText,
                    extra.heroImageUrl
                ];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_extra!A:G',
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: [
                            row
                        ]
                    }
                });
                return true;
            } catch (error) {
                console.error('Error saving mayor_extra:', error);
                return false;
            }
        });
    }
    // --- Mayor Stories ---
    getMayorStories(slug) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_stories!A2:H'
                });
                const rows = response.data.values || [];
                const candidateRows = rows.filter((row)=>(row[0] || '').trim() === slug);
                if (!candidateRows.length) return [];
                let maxTime = 0;
                candidateRows.forEach((row)=>{
                    const timeStr = row[7];
                    if (timeStr) {
                        const time = new Date(timeStr).getTime();
                        if (time > maxTime) maxTime = time;
                    }
                });
                return candidateRows.filter((row)=>row[7] && new Date(row[7]).getTime() === maxTime).filter((row)=>row[6] !== 'DELETED_BATCH').map((row)=>({
                        candidateSlug: row[0] || '',
                        date: row[1] || '',
                        category: row[2] || '',
                        title: row[3] || '',
                        content: row[4] || '',
                        imageUrl: row[5] || '',
                        visible: (row[6] || '').toUpperCase() === 'TRUE'
                    })).filter((s)=>s.visible);
            } catch (error) {
                console.error('Error fetching mayor_stories:', error);
                return [];
            }
        });
    }
    saveMayorStories(slug, stories) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const now = new Date().toISOString();
                const rows = stories.length ? stories.map((s)=>[
                        slug,
                        s.date,
                        s.category,
                        s.title,
                        s.content,
                        s.imageUrl || '',
                        s.visible ? 'TRUE' : 'FALSE',
                        now
                    ]) : [
                    [
                        slug,
                        '',
                        '',
                        '',
                        '',
                        '',
                        'DELETED_BATCH',
                        now
                    ]
                ];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_stories!A:H',
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: rows
                    }
                });
                return true;
            } catch (error) {
                console.error('Error saving mayor_stories:', error);
                return false;
            }
        });
    }
    // --- Mayor Schedules ---
    getMayorSchedules(slug) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_schedules!A2:G'
                });
                const rows = response.data.values || [];
                const candidateRows = rows.filter((row)=>(row[0] || '').trim() === slug);
                if (!candidateRows.length) return [];
                let maxTime = 0;
                candidateRows.forEach((row)=>{
                    const timeStr = row[6];
                    if (timeStr) {
                        const time = new Date(timeStr).getTime();
                        if (time > maxTime) maxTime = time;
                    }
                });
                return candidateRows.filter((row)=>row[6] && new Date(row[6]).getTime() === maxTime).filter((row)=>row[5] !== 'DELETED_BATCH').map((row)=>({
                        candidateSlug: row[0] || '',
                        date: row[1] || '',
                        time: row[2] || '',
                        title: row[3] || '',
                        location: row[4] || '',
                        visible: (row[5] || '').toUpperCase() === 'TRUE'
                    })).filter((s)=>s.visible);
            } catch (error) {
                console.error('Error fetching mayor_schedules:', error);
                return [];
            }
        });
    }
    saveMayorSchedules(slug, schedules) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const now = new Date().toISOString();
                const rows = schedules.length ? schedules.map((s)=>[
                        slug,
                        s.date,
                        s.time,
                        s.title,
                        s.location,
                        s.visible ? 'TRUE' : 'FALSE',
                        now
                    ]) : [
                    [
                        slug,
                        '',
                        '',
                        '',
                        '',
                        'DELETED_BATCH',
                        now
                    ]
                ];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_schedules!A:G',
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: rows
                    }
                });
                return true;
            } catch (error) {
                console.error('Error saving mayor_schedules:', error);
                return false;
            }
        });
    }
    // --- Mayor Gallery ---
    getMayorGallery(slug) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_gallery!A2:F'
                });
                const rows = response.data.values || [];
                const candidateRows = rows.filter((row)=>(row[0] || '').trim() === slug);
                if (!candidateRows.length) return [];
                let maxTime = 0;
                candidateRows.forEach((row)=>{
                    const timeStr = row[5];
                    if (timeStr) {
                        const time = new Date(timeStr).getTime();
                        if (time > maxTime) maxTime = time;
                    }
                });
                return candidateRows.filter((row)=>row[5] && new Date(row[5]).getTime() === maxTime).filter((row)=>row[4] !== 'DELETED_BATCH').map((row)=>({
                        candidateSlug: row[0] || '',
                        date: row[1] || '',
                        caption: row[2] || '',
                        imageUrl: row[3] || '',
                        visible: (row[4] || '').toUpperCase() === 'TRUE'
                    })).filter((s)=>s.visible);
            } catch (error) {
                console.error('Error fetching mayor_gallery:', error);
                return [];
            }
        });
    }
    saveMayorGallery(slug, gallery) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const now = new Date().toISOString();
                const rows = gallery.length ? gallery.map((g)=>[
                        slug,
                        g.date,
                        g.caption,
                        g.imageUrl,
                        g.visible ? 'TRUE' : 'FALSE',
                        now
                    ]) : [
                    [
                        slug,
                        '',
                        '',
                        '',
                        'DELETED_BATCH',
                        now
                    ]
                ];
                yield this.sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: 'mayor_gallery!A:F',
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: rows
                    }
                });
                return true;
            } catch (error) {
                console.error('Error saving mayor_gallery:', error);
                return false;
            }
        });
    }
    // --- Central Policies ---
    getCentralPolicies() {
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.sheets) return [];
            try {
                const response = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: this.sheetId,
                    range: 'central_policies!A2:H'
                });
                const rows = response.data.values || [];
                return rows.filter((row)=>row[7] === 'TRUE').map((row)=>({
                        category: row[0] || '',
                        order: parseInt(row[1]) || 999,
                        title: row[2] || '',
                        summary: row[3] || '',
                        content: row[4] || '',
                        imageUrl: row[5] || '',
                        linkUrl: row[6] || '',
                        visible: row[7] === 'TRUE'
                    })).sort((a, b)=>a.order - b.order);
            } catch (error) {
                console.error('Error fetching central policies:', error);
                return [];
            }
        });
    }
    mapRowToCandidate(row) {
        // Safe access helper
        const get = (idx)=>(row[idx] || '').trim();
        const slug = get(0);
        const name = get(1);
        // Careers: Indices 11(L) to 20(U)
        const careers = [];
        for(let i = 11; i <= 20; i++){
            const val = get(i);
            if (val) careers.push(val);
        }
        // Policies: Indices 21(V) to 40(AO)
        // Structure: Title, Content, Title, Content...
        const policies = [];
        for(let i = 0; i < 10; i++){
            const titleIdx = 21 + i * 2;
            const contentIdx = titleIdx + 1;
            const title = get(titleIdx);
            const content = get(contentIdx);
            if (title) {
                policies.push({
                    title,
                    content
                });
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
                holder: get(10)
            },
            careers,
            policies,
            social: {
                facebook: get(41) || undefined,
                youtube: get(42) || undefined,
                instagram: get(43) || undefined,
                x: get(44) || undefined,
                blog: get(45) || undefined
            },
            contact: {
                phone: get(46) || undefined,
                email: get(47) || undefined,
                kakao: get(48) || undefined,
                telegram: get(49) || undefined
            },
            isIncumbent: get(50).toUpperCase() === 'TRUE',
            address: get(51) || undefined,
            updatedAt: row[52] ? new Date(row[52]) : new Date(0),
            password: get(53) || undefined
        };
    }
}
exports.SheetsClient = SheetsClient;
exports.sheetsClient = new SheetsClient();
}),
"[project]/coding/2026jp/justice-election-2026/packages/api-client/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/coding/2026jp/justice-election-2026/packages/api-client/dist/sheets.js [app-rsc] (ecmascript)"), exports);
}),
"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/user.js [app-rsc] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$packages$2f$api$2d$client$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/packages/api-client/dist/index.js [app-rsc] (ecmascript)");
;
;
;
;
const revalidate = 60; // Refresh every 60 seconds
async function Home() {
    const candidates = await __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$packages$2f$api$2d$client$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sheetsClient"].getCandidates();
    // Sort active candidates first, then alphabetical (or leave as Google Sheets order)
    const activeCandidates = candidates.filter((c)=>c.status === 'active' || !c.status);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex flex-col items-center pb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-justice-green p-8 md:p-12 text-center shadow-md relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl mb-4 backdrop-blur-sm border border-white/30 shadow-inner",
                                children: "JP"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight",
                                children: "2026 지방선거 디지털 웹플랫폼"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                lineNumber: 22,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-green-100 text-lg md:text-xl font-medium",
                                children: "우리 지역을 바꿀 든든한 일꾼들을 소개합니다."
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-[100px] -left-[100px] w-64 h-64 rounded-full bg-white blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[50px] -right-[50px] w-96 h-96 rounded-full bg-justice-purple blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl w-full px-4 mt-8 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2",
                                children: [
                                    "등록된 후보자 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-justice-purple text-white px-3 py-0.5 rounded-full text-lg shadow-sm",
                                        children: activeCandidates.length
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 33
                                    }, this),
                                    "명"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/qr",
                                className: "px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all text-sm md:text-base border border-gray-200 shadow-sm hover:shadow-md",
                                children: "QR코드 생성기"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    activeCandidates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl shadow-sm border border-gray-100 p-16 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "w-12 h-12 text-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-600",
                                children: "현재 등록된 후보자가 없습니다."
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                lineNumber: 55,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mt-2",
                                children: "새로운 명함을 등록해 보세요!"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                lineNumber: 56,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
                        children: activeCandidates.map((candidate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${candidate.slug}`,
                                className: "group flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-32 bg-gradient-to-br from-gray-50 to-gray-200 relative w-full flex items-center justify-center p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -bottom-10 shadow-lg w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden z-10 flex items-center justify-center",
                                                children: candidate.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: candidate.photoUrl,
                                                    alt: candidate.name,
                                                    width: "96",
                                                    height: "96",
                                                    className: "w-full h-full object-cover",
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-10 h-10 text-gray-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 right-4 px-3 py-1 bg-[#FFED00] text-gray-900 text-xs font-bold rounded-full shadow-sm border border-yellow-300",
                                                children: candidate.category
                                            }, void 0, false, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                lineNumber: 75,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-14 pb-6 px-6 flex-1 flex flex-col items-center text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-900 group-hover:text-justice-purple transition-colors mb-1 flex items-center justify-center gap-2",
                                                children: [
                                                    candidate.name,
                                                    candidate.isIncumbent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-bold bg-justice-green text-white px-2 py-0.5 rounded-md shadow-sm tracking-wide",
                                                        children: "현역"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 font-semibold mb-3",
                                                children: [
                                                    candidate.district,
                                                    " ",
                                                    candidate.number ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-300 font-normal mx-1",
                                                        children: "|"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 82
                                                    }, this) : '',
                                                    " ",
                                                    candidate.number ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-justice-green",
                                                        children: [
                                                            "기호 ",
                                                            candidate.number,
                                                            "번"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 166
                                                    }, this) : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-1 bg-gray-100 rounded-full mb-4 transition-colors group-hover:bg-justice-purple/20"
                                            }, void 0, false, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 text-sm md:text-base line-clamp-2 leading-relaxed flex-1 font-medium px-2",
                                                children: candidate.slogan || candidate.intro || '우리지역을 바꿀 정의당 후보입니다.'
                                            }, void 0, false, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 w-full py-3.5 bg-gray-50 group-hover:bg-justice-green text-gray-600 group-hover:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base border border-gray-100 group-hover:border-justice-green shadow-sm",
                                                children: [
                                                    "명함 보기",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, candidate.slug, true, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                                lineNumber: 61,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                        lineNumber: 59,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/apps/card/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c32af993._.js.map