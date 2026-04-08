module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CandidateCard",
    ()=>CandidateCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
'use client';
;
;
function CandidateCard({ candidate }) {
    // Safe color access using Tailwind classes we defined
    const gradientBg = "bg-gradient-to-br from-justice-green via-justice-yellow to-justice-pink";
    // Copy to clipboard helper
    const handleCopy = (text, label)=>{
        navigator.clipboard.writeText(text).then(()=>{
            alert(`${label}가 복사되었습니다!`);
        }, ()=>{
            alert('복사에 실패했습니다. 직접 복사해주세요.');
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-screen overflow-y-scroll scroll-smooth ${gradientBg}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-2 px-6 flex flex-col justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mx-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end items-center gap-3 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo-4.gif",
                                alt: "정의당",
                                className: "h-12 w-auto drop-shadow-lg filter brightness-0 invert"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                lineNumber: 30,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-3xl shadow-2xl p-8 transform transition-transform hover:scale-[1.01]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6 bg-gray-100 flex items-center justify-center",
                                        children: candidate.photoUrl && candidate.photoUrl.startsWith('http') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: candidate.photoUrl,
                                            alt: candidate.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 43,
                                            columnNumber: 37
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                            className: "w-12 h-12 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 49,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 41,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [
                                            candidate.number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl font-black text-justice-pink",
                                                children: candidate.number
                                            }, void 0, false, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                lineNumber: 56,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-4xl font-black text-gray-900 tracking-tight",
                                                children: candidate.name
                                            }, void 0, false, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                lineNumber: 60,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-bold mb-4 break-keep italic font-black",
                                        children: [
                                            '"',
                                            candidate.slogan,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block px-4 py-1 bg-gray-100 rounded-full text-gray-600 font-medium mb-6 font-black",
                                        children: candidate.district
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "c_card text-left leading-relaxed break-keep text-black",
                                        children: candidate.intro
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            candidate.careers && candidate.careers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-2 px-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mx-auto w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-900 mb-4 flex items-center gap-2",
                                children: "🔥 걸어온 길"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                lineNumber: 92,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 text-left",
                                children: candidate.careers.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-2 text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-2 w-1.5 h-1.5 bg-justice-yellow rounded-full flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                lineNumber: 98,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "leading-relaxed",
                                                children: c
                                            }, void 0, false, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                lineNumber: 99,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                lineNumber: 95,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                        lineNumber: 91,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 90,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 89,
                columnNumber: 17
            }, this),
            candidate.reports && candidate.reports.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-2 px-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mx-auto w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-900 mb-6 flex items-center gap-2",
                                children: "🏆 주요 의정 성과"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                lineNumber: 113,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar",
                                children: [
                                    ...candidate.reports
                                ].sort((a, b)=>{
                                    const yearDiff = Number(b.year) - Number(a.year);
                                    if (yearDiff !== 0) return yearDiff;
                                    return Number(b.month) - Number(a.month);
                                }).map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative pl-6 border-l-2 border-justice-yellow last:border-0 pb-6 last:pb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-justice-yellow shadow-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                lineNumber: 125,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        lineNumber: 127,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-bold text-gray-900 leading-tight mt-1",
                                                        children: r.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm leading-relaxed whitespace-pre-wrap",
                                                        children: r.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 49
                                                    }, this),
                                                    r.linkUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: r.linkUrl,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "text-xs text-justice-pink hover:text-justice-pink-dark hover:underline mt-1 block",
                                                        children: "자세히 보기 →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                lineNumber: 126,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 124,
                                        columnNumber: 41
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                lineNumber: 116,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                        lineNumber: 112,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 111,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 110,
                columnNumber: 17
            }, this),
            candidate.policies && candidate.policies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-2 px-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mx-auto w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl shadow-xl p-8 transform transition-transform hover:scale-[1.01]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-900 mb-4 flex items-center gap-2",
                                children: "📢 핵심 공약"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                lineNumber: 160,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 text-left max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar",
                                children: candidate.policies.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-100 rounded-xl p-5 border border-yellow-50 flex gap-4 hover:bg-yellow-100 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-justice-pink font-black text-xl flex-shrink-0 pt-0.5",
                                                children: [
                                                    i + 1,
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                lineNumber: 166,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-gray-900 font-bold text-lg leading-snug",
                                                        children: p.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 45
                                                    }, this),
                                                    p.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm leading-relaxed whitespace-pre-wrap",
                                                        children: p.content
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                lineNumber: 167,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 165,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                lineNumber: 163,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                        lineNumber: 159,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 158,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 157,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-10 px-6 flex flex-col justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mx-auto w-full space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-4",
                            children: [
                                candidate.social.x && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: candidate.social.x,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/x.png",
                                        alt: "X",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 188,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 187,
                                    columnNumber: 29
                                }, this),
                                candidate.social.facebook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: candidate.social.facebook,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/facebook.png",
                                        alt: "Facebook",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 193,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 192,
                                    columnNumber: 29
                                }, this),
                                candidate.social.youtube && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: candidate.social.youtube,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/youtube.png",
                                        alt: "Youtube",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 198,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 197,
                                    columnNumber: 29
                                }, this),
                                candidate.social.instagram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: candidate.social.instagram,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/instagram.png",
                                        alt: "Instagram",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 203,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 202,
                                    columnNumber: 29
                                }, this),
                                candidate.social.blog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: candidate.social.blog,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/blog.png",
                                        alt: "Blog",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 208,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 207,
                                    columnNumber: 29
                                }, this),
                                candidate.category.includes('단체장') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://page.justice21.org/${candidate.slug}`,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "w-12 h-12 flex items-center justify-center hover:opacity-80 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/icons/homepage.png",
                                        alt: "Homepage",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                        lineNumber: 213,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 212,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 185,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl p-8 shadow-xl text-center relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-0 w-full h-2 bg-white opacity-30"
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 219,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4 text-gray-900",
                                    children: "🚀 후원으로 함께하기"
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 220,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-justice-yellow p-6 rounded-xl shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mb-2",
                                            children: "후원계좌 (클릭하여 복사)"
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 224,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>handleCopy(candidate.donation.account, '계좌번호'),
                                            className: "cursor-pointer p-2 -m-2 rounded-lg transition-colors group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl font-bold text-gray-900 mb-2 tracking-wider flex items-center justify-center gap-2",
                                                children: [
                                                    candidate.donation.account,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-300 text-sm group-hover:text-justice-green",
                                                        children: "📋"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                lineNumber: 229,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 225,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-md text-gray-700 font-medium",
                                            children: [
                                                "예금주: ",
                                                candidate.donation.holder
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 234,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 223,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 218,
                            columnNumber: 21
                        }, this),
                        (candidate.contact?.phone || candidate.contact?.email || candidate.address) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-black shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-4 flex items-center gap-2",
                                    children: "📞 문의 / 위치"
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 242,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        candidate.contact?.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${candidate.contact.phone}`,
                                            className: "flex items-center gap-3 hover:opacity-80 transition cursor-pointer contact-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm flex-shrink-0 self-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/phone.png",
                                                        alt: "Phone",
                                                        className: "w-full h-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col justify-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white/70",
                                                            children: "연락처"
                                                        }, void 0, false, {
                                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "contact_info font-bold text-lg",
                                                            children: candidate.contact.phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 247,
                                            columnNumber: 37
                                        }, this),
                                        candidate.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 contact-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm flex-shrink-0 self-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/address.png",
                                                        alt: "Address",
                                                        className: "w-full h-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col justify-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white/70",
                                                            children: "주소"
                                                        }, void 0, false, {
                                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "contact_info font-medium",
                                                            children: candidate.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 258,
                                            columnNumber: 37
                                        }, this),
                                        candidate.contact?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${candidate.contact.email}`,
                                            className: "flex items-center gap-3 hover:opacity-80 transition cursor-pointer contact-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm flex-shrink-0 self-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/email.png",
                                                        alt: "Email",
                                                        className: "w-full h-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col justify-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white/70",
                                                            children: "이메일"
                                                        }, void 0, false, {
                                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "contact_info font-medium text-lg",
                                                            children: candidate.contact.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 269,
                                            columnNumber: 37
                                        }, this),
                                        candidate.contact?.kakao && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>handleCopy(candidate.contact.kakao || '', '카카오톡 ID'),
                                            className: "flex items-center gap-3 hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2 shadow-sm flex-shrink-0 self-center contact-row",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/kakao.png",
                                                        alt: "Kakao",
                                                        className: "w-full h-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 flex-col justify-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-white/70",
                                                                    children: "카카오톡 ID"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white/80",
                                                                    children: "복사"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "contact_info font-medium text-lg truncate",
                                                            children: candidate.contact.kakao
                                                        }, void 0, false, {
                                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 280,
                                            columnNumber: 37
                                        }, this),
                                        candidate.contact?.telegram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://t.me/${candidate.contact.telegram.replace('@', '')}`,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "flex items-center gap-3 hover:opacity-80 transition cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2 shadow-sm self-center contact-row",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/telegram.png",
                                                        alt: "Telegram",
                                                        className: "w-full h-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white/70",
                                                            children: "텔레그램 ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "contact_info font-medium text-lg",
                                                            children: candidate.contact.telegram
                                                        }, void 0, false, {
                                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 297,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 245,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 241,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                            className: "py-8 pb-12 text-center text-white/80 text-sm flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-center gap-5 mb-6 px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.justice21.org/",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "hover:scale-105 transition-transform flex items-center justify-center h-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/logo-03.png",
                                                alt: "정의당",
                                                className: "h-full w-auto object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                lineNumber: 314,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 313,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[1px] h-4 bg-white/30"
                                        }, void 0, false, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 316,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://2026.justice21.org/",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "hover:text-justice-yellow transition-all text-white/90 font-bold text-sm tracking-wide cursor-pointer z-10 relative pointer-events-auto flex items-center gap-1",
                                            children: [
                                                "2026 지선 특별 페이지 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/50 text-xs",
                                                    children: "↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 48
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                            lineNumber: 317,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 312,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "opacity-60",
                                    children: "© 2026 Justice Party. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                                    lineNumber: 321,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                            lineNumber: 311,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                    lineNumber: 183,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
                lineNumber: 182,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/card/src/components/CandidateCard.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
} /*
function ScrollHint() {
    return (
        <!div className="absolute bottom-8 left-0 right-0 text-center animate-bounce text-white/50 pointer-events-none">
            <span className="text-sm shadow-sm">아래로 스크롤하여 더 보기</span>
            <div className="mt-1">↓</div>
        </div>
    );
}
*/ 
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-ssr] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
 //# sourceMappingURL=toPascalCase.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-ssr] (ecmascript)");
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const Camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("camera", __iconNode);
;
 //# sourceMappingURL=camera.js.map
}),
"[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Camera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__758d0c67._.js.map