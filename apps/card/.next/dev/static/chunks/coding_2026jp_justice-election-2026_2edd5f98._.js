(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CandidateCard",
    ()=>CandidateCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
'use client';
;
;
;
function CandidateCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(80);
    if ($[0] !== "8b827fdaf42b555a1ceaf8087b3cc992a7e3fa7c907873ff6a0e89b0b691334b") {
        for(let $i = 0; $i < 80; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8b827fdaf42b555a1ceaf8087b3cc992a7e3fa7c907873ff6a0e89b0b691334b";
    }
    const { candidate } = t0;
    const handleCopy = _CandidateCardHandleCopy;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end items-center gap-3 mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/logo-4.gif",
                alt: "\uC815\uC758\uB2F9",
                className: "h-12 w-auto drop-shadow-lg filter brightness-0 invert"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 23,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== candidate.name || $[3] !== candidate.photoUrl) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6 bg-gray-100 flex items-center justify-center",
            children: candidate.photoUrl && candidate.photoUrl.startsWith("http") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: candidate.photoUrl,
                alt: candidate.name,
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 30,
                columnNumber: 198
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                className: "w-12 h-12 text-gray-400"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 30,
                columnNumber: 293
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[2] = candidate.name;
        $[3] = candidate.photoUrl;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== candidate.number) {
        t3 = candidate.number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-4xl font-black text-justice-pink",
            children: candidate.number
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 39,
            columnNumber: 30
        }, this);
        $[5] = candidate.number;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== candidate.name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl font-black text-gray-900 tracking-tight",
            children: candidate.name
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[7] = candidate.name;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-2",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== candidate.slogan) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl font-bold mb-4 break-keep italic font-black",
            children: [
                '"',
                candidate.slogan,
                '"'
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[12] = candidate.slogan;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== candidate.district) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block px-4 py-1 bg-gray-100 rounded-full text-gray-600 font-medium mb-6 font-black",
            children: candidate.district
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[14] = candidate.district;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== candidate.intro) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "c_card text-left leading-relaxed break-keep text-black",
            children: candidate.intro
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[16] = candidate.intro;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t2 || $[19] !== t5 || $[20] !== t6 || $[21] !== t7 || $[22] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative py-2 px-6 flex flex-col justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-xl mx-auto w-full",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl shadow-2xl p-8 transform transition-transform hover:scale-[1.01]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center",
                            children: [
                                t2,
                                t5,
                                t6,
                                t7,
                                t8
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 88,
                            columnNumber: 227
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                        lineNumber: 88,
                        columnNumber: 124
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 88,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[18] = t2;
        $[19] = t5;
        $[20] = t6;
        $[21] = t7;
        $[22] = t8;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== candidate.careers) {
        t10 = candidate.careers && candidate.careers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative py-2 px-6 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-xl mx-auto w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900 mb-4 flex items-center gap-2",
                            children: "🔥 걸어온 길"
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 100,
                            columnNumber: 280
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-left",
                            children: candidate.careers.map(_CandidateCardCandidateCareersMap)
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 100,
                            columnNumber: 370
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 100,
                    columnNumber: 178
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 100,
                columnNumber: 137
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 100,
            columnNumber: 64
        }, this);
        $[24] = candidate.careers;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== candidate.reports) {
        t11 = candidate.reports && candidate.reports.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative py-2 px-6 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-xl mx-auto w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900 mb-6 flex items-center gap-2",
                            children: "🏆 주요 의정 성과"
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 108,
                            columnNumber: 280
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar",
                            children: [
                                ...candidate.reports
                            ].sort(_CandidateCardAnonymous).map(_CandidateCardAnonymous2)
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 108,
                            columnNumber: 373
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 108,
                    columnNumber: 178
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 108,
                columnNumber: 137
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 108,
            columnNumber: 64
        }, this);
        $[26] = candidate.reports;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== candidate.policies) {
        t12 = candidate.policies && candidate.policies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative py-2 px-6 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-xl mx-auto w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900 mb-4 flex items-center gap-2",
                            children: "📢 핵심 공약"
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 116,
                            columnNumber: 282
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-left max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar",
                            children: candidate.policies.map(_CandidateCardCandidatePoliciesMap)
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 116,
                            columnNumber: 372
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 116,
                    columnNumber: 180
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 116,
                columnNumber: 139
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 116,
            columnNumber: 66
        }, this);
        $[28] = candidate.policies;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== candidate.social.x) {
        t13 = candidate.social.x && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: candidate.social.x,
            target: "_blank",
            rel: "noreferrer",
            className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/icons/x.png",
                alt: "X",
                className: "w-full h-full object-contain"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 124,
                columnNumber: 178
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 124,
            columnNumber: 33
        }, this);
        $[30] = candidate.social.x;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== candidate.social.facebook) {
        t14 = candidate.social.facebook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: candidate.social.facebook,
            target: "_blank",
            rel: "noreferrer",
            className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/icons/facebook.png",
                alt: "Facebook",
                className: "w-full h-full object-contain"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 132,
                columnNumber: 192
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 132,
            columnNumber: 40
        }, this);
        $[32] = candidate.social.facebook;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== candidate.social.youtube) {
        t15 = candidate.social.youtube && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: candidate.social.youtube,
            target: "_blank",
            rel: "noreferrer",
            className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/icons/youtube.png",
                alt: "Youtube",
                className: "w-full h-full object-contain"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 140,
                columnNumber: 190
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 140,
            columnNumber: 39
        }, this);
        $[34] = candidate.social.youtube;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== candidate.social.instagram) {
        t16 = candidate.social.instagram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: candidate.social.instagram,
            target: "_blank",
            rel: "noreferrer",
            className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/icons/instagram.png",
                alt: "Instagram",
                className: "w-full h-full object-contain"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 148,
                columnNumber: 194
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 148,
            columnNumber: 41
        }, this);
        $[36] = candidate.social.instagram;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] !== candidate.social.blog) {
        t17 = candidate.social.blog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: candidate.social.blog,
            target: "_blank",
            rel: "noreferrer",
            className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/icons/blog.png",
                alt: "Blog",
                className: "w-full h-full object-contain"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 156,
                columnNumber: 184
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 156,
            columnNumber: 36
        }, this);
        $[38] = candidate.social.blog;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== candidate.category || $[41] !== candidate.slug) {
        t18 = candidate.category.includes("\uB2E8\uCCB4\uC7A5") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `https://page.justice21.org/${candidate.slug}`,
            target: "_blank",
            rel: "noreferrer",
            className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/icons/homepage.png",
                alt: "Homepage",
                className: "w-full h-full object-contain"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 164,
                columnNumber: 237
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 164,
            columnNumber: 64
        }, this);
        $[40] = candidate.category;
        $[41] = candidate.slug;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== t13 || $[44] !== t14 || $[45] !== t15 || $[46] !== t16 || $[47] !== t17 || $[48] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center gap-4",
            children: [
                t13,
                t14,
                t15,
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[43] = t13;
        $[44] = t14;
        $[45] = t15;
        $[46] = t16;
        $[47] = t17;
        $[48] = t18;
        $[49] = t19;
    } else {
        t19 = $[49];
    }
    let t20;
    let t21;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 w-full h-2 bg-white opacity-30"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-4 text-gray-900",
            children: "🚀 후원으로 함께하기"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[50] = t20;
        $[51] = t21;
    } else {
        t20 = $[50];
        t21 = $[51];
    }
    let t22;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 mb-2",
            children: "후원계좌 (클릭하여 복사)"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[52] = t22;
    } else {
        t22 = $[52];
    }
    let t23;
    if ($[53] !== candidate.donation.account) {
        t23 = ({
            "CandidateCard[<div>.onClick]": ()=>handleCopy(candidate.donation.account, "\uACC4\uC88C\uBC88\uD638")
        })["CandidateCard[<div>.onClick]"];
        $[53] = candidate.donation.account;
        $[54] = t23;
    } else {
        t23 = $[54];
    }
    let t24;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-300 text-sm group-hover:text-justice-green",
            children: "📋"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[55] = t24;
    } else {
        t24 = $[55];
    }
    let t25;
    if ($[56] !== candidate.donation.account) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl font-bold text-gray-900 mb-2 tracking-wider flex items-center justify-center gap-2",
            children: [
                candidate.donation.account,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[56] = candidate.donation.account;
        $[57] = t25;
    } else {
        t25 = $[57];
    }
    let t26;
    if ($[58] !== t23 || $[59] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: t23,
            className: "cursor-pointer p-2 -m-2 rounded-lg transition-colors group",
            children: t25
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[58] = t23;
        $[59] = t25;
        $[60] = t26;
    } else {
        t26 = $[60];
    }
    let t27;
    if ($[61] !== candidate.donation.holder) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-md text-gray-700 font-medium",
            children: [
                "예금주: ",
                candidate.donation.holder
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[61] = candidate.donation.holder;
        $[62] = t27;
    } else {
        t27 = $[62];
    }
    let t28;
    if ($[63] !== t26 || $[64] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-8 shadow-xl text-center relative overflow-hidden",
            children: [
                t20,
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-justice-yellow p-6 rounded-xl shadow-sm",
                    children: [
                        t22,
                        t26,
                        t27
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 246,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[63] = t26;
        $[64] = t27;
        $[65] = t28;
    } else {
        t28 = $[65];
    }
    let t29;
    if ($[66] !== candidate.address || $[67] !== candidate.contact) {
        t29 = (candidate.contact?.phone || candidate.contact?.email || candidate.address) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-black shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold mb-4 flex items-center gap-2",
                    children: "📞 문의 / 위치"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 255,
                    columnNumber: 193
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        candidate.contact?.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `tel:${candidate.contact.phone}`,
                            className: "flex items-center gap-3 hover:opacity-80 transition cursor-pointer contact-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm flex-shrink-0 self-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/phone.png",
                                        alt: "Phone",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 255,
                                        columnNumber: 583
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 255,
                                    columnNumber: 461
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/70",
                                            children: "연락처"
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 255,
                                            columnNumber: 718
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "contact_info font-bold text-lg",
                                            children: candidate.contact.phone
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 255,
                                            columnNumber: 762
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 255,
                                    columnNumber: 672
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 255,
                            columnNumber: 327
                        }, this),
                        candidate.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 contact-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm flex-shrink-0 self-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/address.png",
                                        alt: "Address",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 255,
                                        columnNumber: 1045
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 255,
                                    columnNumber: 923
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/70",
                                            children: "주소"
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 255,
                                            columnNumber: 1184
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "contact_info font-medium",
                                            children: candidate.address
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 255,
                                            columnNumber: 1227
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 255,
                                    columnNumber: 1138
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 255,
                            columnNumber: 870
                        }, this),
                        candidate.contact?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${candidate.contact.email}`,
                            className: "flex items-center gap-3 hover:opacity-80 transition cursor-pointer contact-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm flex-shrink-0 self-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/email.png",
                                        alt: "Email",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 255,
                                        columnNumber: 1591
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 255,
                                    columnNumber: 1469
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/70",
                                            children: "이메일"
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 255,
                                            columnNumber: 1726
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "contact_info font-medium text-lg",
                                            children: candidate.contact.email
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 255,
                                            columnNumber: 1770
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 255,
                                    columnNumber: 1680
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 255,
                            columnNumber: 1332
                        }, this),
                        candidate.contact?.kakao && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: {
                                "CandidateCard[<div>.onClick]": ()=>handleCopy(candidate.contact.kakao || "", "\uCE74\uCE74\uC624\uD1A1 ID")
                            }["CandidateCard[<div>.onClick]"],
                            className: "flex items-center gap-3 hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2 shadow-sm flex-shrink-0 self-center contact-row",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/kakao.png",
                                        alt: "Kakao",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 257,
                                        columnNumber: 298
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 257,
                                    columnNumber: 150
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-white/70",
                                                    children: "카카오톡 ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 484
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white/80",
                                                    children: "복사"
                                                }, void 0, false, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 532
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 257,
                                            columnNumber: 419
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "contact_info font-medium text-lg truncate",
                                            children: candidate.contact.kakao
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 257,
                                            columnNumber: 625
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 257,
                                    columnNumber: 387
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 255,
                            columnNumber: 1887
                        }, this),
                        candidate.contact?.telegram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `https://t.me/${candidate.contact.telegram.replace("@", "")}`,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "flex items-center gap-3 hover:opacity-80 transition cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2 shadow-sm self-center contact-row",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/telegram.png",
                                        alt: "Telegram",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 257,
                                        columnNumber: 1074
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 257,
                                    columnNumber: 940
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/70",
                                            children: "텔레그램 ID"
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 257,
                                            columnNumber: 1174
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "contact_info font-medium text-lg",
                                            children: candidate.contact.telegram
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 257,
                                            columnNumber: 1222
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 257,
                                    columnNumber: 1169
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 257,
                            columnNumber: 756
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 255,
                    columnNumber: 271
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 255,
            columnNumber: 90
        }, this);
        $[66] = candidate.address;
        $[67] = candidate.contact;
        $[68] = t29;
    } else {
        t29 = $[68];
    }
    let t30;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "py-8 pb-12 text-center text-white/80 text-sm flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-3 mb-6 px-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.justice21.org/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "hover:scale-105 transition-transform flex items-center justify-center px-2 py-1.5 h-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo-03.png",
                                alt: "\uC815\uC758\uB2F9",
                                className: "h-full w-auto object-contain"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                lineNumber: 266,
                                columnNumber: 335
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 266,
                            columnNumber: 166
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://2026.justice21.org/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "inline-flex items-center justify-center h-12 px-4 rounded-2xl bg-black/20 hover:bg-black/30 border border-white/20 text-white transition-all font-bold text-sm shadow-lg backdrop-blur-md cursor-pointer z-10 w-auto relative pointer-events-auto",
                            children: "2026 지선 특별 페이지"
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 266,
                            columnNumber: 433
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 266,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "opacity-60",
                    children: "© 2026 Justice Party. All rights reserved."
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 266,
                    columnNumber: 782
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[69] = t30;
    } else {
        t30 = $[69];
    }
    let t31;
    if ($[70] !== t19 || $[71] !== t28 || $[72] !== t29) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-10 px-6 flex flex-col justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-xl mx-auto w-full space-y-6",
                children: [
                    t19,
                    t28,
                    t29,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 273,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[70] = t19;
        $[71] = t28;
        $[72] = t29;
        $[73] = t31;
    } else {
        t31 = $[73];
    }
    let t32;
    if ($[74] !== t10 || $[75] !== t11 || $[76] !== t12 || $[77] !== t31 || $[78] !== t9) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen overflow-y-scroll scroll-smooth bg-gradient-to-br from-justice-green via-justice-yellow to-justice-pink",
            children: [
                t9,
                t10,
                t11,
                t12,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[74] = t10;
        $[75] = t11;
        $[76] = t12;
        $[77] = t31;
        $[78] = t9;
        $[79] = t32;
    } else {
        t32 = $[79];
    }
    return t32;
}
_c = CandidateCard;
/*
function ScrollHint() {
    return (
        <!div className="absolute bottom-8 left-0 right-0 text-center animate-bounce text-white/50 pointer-events-none">
            <span className="text-sm shadow-sm">아래로 스크롤하여 더 보기</span>
            <div className="mt-1">↓</div>
        </div>
    );
}
*/ function _CandidateCardCandidatePoliciesMap(p, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-yellow-100 rounded-xl p-5 border border-yellow-50 flex gap-4 hover:bg-yellow-100 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-justice-pink font-black text-xl flex-shrink-0 pt-0.5",
                children: [
                    i_1 + 1,
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 306,
                columnNumber: 139
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-gray-900 font-bold text-lg leading-snug",
                        children: p.title
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                        lineNumber: 306,
                        columnNumber: 259
                    }, this),
                    p.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm leading-relaxed whitespace-pre-wrap",
                        children: p.content
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                        lineNumber: 306,
                        columnNumber: 348
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 306,
                columnNumber: 232
            }, this)
        ]
    }, i_1, true, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
        lineNumber: 306,
        columnNumber: 10
    }, this);
}
function _CandidateCardAnonymous2(r, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative pl-6 border-l-2 border-justice-yellow last:border-0 pb-6 last:pb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-justice-yellow shadow-sm"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 309,
                columnNumber: 113
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold text-black bg-justice-yellow px-2 py-0.5 rounded-full w-fit",
                        children: [
                            r.year,
                            ".",
                            r.month,
                            " · ",
                            r.category
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                        lineNumber: 309,
                        columnNumber: 245
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-bold text-gray-900 leading-tight mt-1",
                        children: r.title
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                        lineNumber: 309,
                        columnNumber: 381
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm leading-relaxed whitespace-pre-wrap",
                        children: r.description
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                        lineNumber: 309,
                        columnNumber: 462
                    }, this),
                    r.linkUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: r.linkUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-xs text-justice-pink hover:text-justice-pink-dark hover:underline mt-1 block",
                        children: "자세히 보기 →"
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                        lineNumber: 309,
                        columnNumber: 568
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 309,
                columnNumber: 208
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
        lineNumber: 309,
        columnNumber: 10
    }, this);
}
function _CandidateCardAnonymous(a, b) {
    const yearDiff = Number(b.year) - Number(a.year);
    if (yearDiff !== 0) {
        return yearDiff;
    }
    return Number(b.month) - Number(a.month);
}
function _CandidateCardCandidateCareersMap(c, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start gap-2 text-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-2 w-1.5 h-1.5 bg-justice-yellow rounded-full flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 319,
                columnNumber: 71
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "leading-relaxed",
                children: c
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 319,
                columnNumber: 153
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
        lineNumber: 319,
        columnNumber: 10
    }, this);
}
function _CandidateCardHandleCopy(text, label) {
    navigator.clipboard.writeText(text).then({
        "CandidateCard[handleCopy > (anonymous)(arg0)]": ()=>{
            alert(`${label}가 복사되었습니다!`);
        }
    }["CandidateCard[handleCopy > (anonymous)(arg0)]"], _CandidateCardHandleCopyAnonymousArg);
}
function _CandidateCardHandleCopyAnonymousArg() {
    alert("\uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uC9C1\uC811 \uBCF5\uC0AC\uD574\uC8FC\uC138\uC694.");
}
var _c;
__turbopack_context__.k.register(_c, "CandidateCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=mergeClasses.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
 //# sourceMappingURL=toKebabCase.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
 //# sourceMappingURL=toCamelCase.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
 //# sourceMappingURL=toPascalCase.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
 //# sourceMappingURL=hasA11yProp.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Camera
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
            key: "18u6gg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "3",
            key: "1vg3eu"
        }
    ]
];
const Camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("camera", __iconNode);
;
 //# sourceMappingURL=camera.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Camera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=coding_2026jp_justice-election-2026_2edd5f98._.js.map