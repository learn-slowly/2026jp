(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Navigation(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "e5d43b97ee174edbe3b4f951d3f93931ac4def3c0687dee9e814c31cff6be4f1") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e5d43b97ee174edbe3b4f951d3f93931ac4def3c0687dee9e814c31cff6be4f1";
    }
    const { name, slug } = t0;
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Navigation[useEffect()]": ()=>{
                const handleScroll = {
                    "Navigation[useEffect() > handleScroll]": ()=>{
                        setIsScrolled(window.scrollY > 50);
                    }
                }["Navigation[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Navigation[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Navigation[scrollToSection]": (id)=>{
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth"
                    });
                    setIsMobileMenuOpen(false);
                }
            }
        })["Navigation[scrollToSection]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const scrollToSection = t3;
    const t4 = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`;
    const t5 = `/${slug}`;
    const t6 = isScrolled ? "/images/logo-y.gif" : "/images/logo-w.gif";
    let t7;
    if ($[4] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-24 h-8 md:w-28 md:h-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: t6,
                alt: "Logo",
                className: "w-full h-full object-contain object-left"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
                lineNumber: 70,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[4] = t6;
        $[5] = t7;
    } else {
        t7 = $[5];
    }
    const t8 = `font-bold text-xl transition-colors ${isScrolled ? "text-gray-900" : "text-black"}`;
    let t9;
    if ($[6] !== name || $[7] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t8,
            children: name
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[6] = name;
        $[7] = t8;
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    let t10;
    if ($[9] !== t5 || $[10] !== t7 || $[11] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t5,
            className: "flex items-center gap-2 group",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[9] = t5;
        $[10] = t7;
        $[11] = t9;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = [
            "\uC18C\uAC1C",
            "\uC57D\uC18D",
            "\uD65C\uB3D9",
            "\uD6C4\uC6D0"
        ];
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== isScrolled) {
        t12 = t11.map({
            "Navigation[(anonymous)()]": (item, idx)=>{
                const ids = [
                    "about",
                    "policies",
                    "reports",
                    "donation"
                ];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Navigation[(anonymous)() > <button>.onClick]": ()=>scrollToSection(ids[idx])
                    }["Navigation[(anonymous)() > <button>.onClick]"],
                    className: `font-medium text-lg transition-colors hover:text-white ${isScrolled ? "text-gray-600" : "text-black"}`,
                    children: item
                }, item, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
                    lineNumber: 108,
                    columnNumber: 16
                }, this);
            }
        }["Navigation[(anonymous)()]"]);
        $[14] = isScrolled;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "Navigation[<button>.onClick]": ()=>scrollToSection("donation")
        })["Navigation[<button>.onClick]"];
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    const t14 = `px-6 py-2 rounded-full font-bold transition-all ${isScrolled ? "bg-justice-yellow text-black hover:bg-justice-yellow-dark" : "bg-white text-black hover:bg-gray-100"}`;
    let t15;
    if ($[17] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t13,
            className: t14,
            children: "후원하기"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[17] = t14;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== t12 || $[20] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center gap-8",
            children: [
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[19] = t12;
        $[20] = t15;
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    let t17;
    if ($[22] !== isMobileMenuOpen) {
        t17 = ({
            "Navigation[<button>.onClick]": ()=>setIsMobileMenuOpen(!isMobileMenuOpen)
        })["Navigation[<button>.onClick]"];
        $[22] = isMobileMenuOpen;
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] !== isMobileMenuOpen || $[25] !== isScrolled) {
        t18 = isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
            lineNumber: 157,
            columnNumber: 30
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            className: `w-8 h-8 ${isScrolled ? "text-black" : "text-white"}`
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
            lineNumber: 157,
            columnNumber: 58
        }, this);
        $[24] = isMobileMenuOpen;
        $[25] = isScrolled;
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] !== t17 || $[28] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "md:hidden text-justice-green",
            onClick: t17,
            children: t18
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[27] = t17;
        $[28] = t18;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] !== t10 || $[31] !== t16 || $[32] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center",
            children: [
                t10,
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[30] = t10;
        $[31] = t16;
        $[32] = t19;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== isMobileMenuOpen) {
        t21 = isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden border-t",
            children: [
                "\uC18C\uAC1C",
                "\uC57D\uC18D",
                "\uD65C\uB3D9",
                "\uD6C4\uC6D0"
            ].map({
                "Navigation[(anonymous)()]": (item_0, idx_0)=>{
                    const ids_0 = [
                        "about",
                        "policies",
                        "reports",
                        "donation"
                    ];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "Navigation[(anonymous)() > <button>.onClick]": ()=>scrollToSection(ids_0[idx_0])
                        }["Navigation[(anonymous)() > <button>.onClick]"],
                        className: "text-left py-3 text-lg font-medium text-gray-800 border-b border-gray-100 last:border-0",
                        children: item_0
                    }, item_0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
                        lineNumber: 188,
                        columnNumber: 18
                    }, this);
                }
            }["Navigation[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
            lineNumber: 185,
            columnNumber: 31
        }, this);
        $[34] = isMobileMenuOpen;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== t20 || $[37] !== t21 || $[38] !== t4) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t4,
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Navigation.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[36] = t20;
        $[37] = t21;
        $[38] = t4;
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    return t22;
}
_s(Navigation, "0+zEKVBL95ILuBb5rHE6ViYOHu8=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function HeroSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "11098fb8a693e314260af3120ddc68307ed059f706ee537faf197fb31e34c0b3") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11098fb8a693e314260af3120ddc68307ed059f706ee537faf197fb31e34c0b3";
    }
    const { candidate } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-10",
            style: {
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px"
            }
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== candidate.category) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block text-black bg-white backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold border border-white/30 mb-4",
            children: [
                "2026 지방선거 ",
                candidate.category,
                " 후보"
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[2] = candidate.category;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = candidate.mayorExtra?.visionTitle || candidate.slogan;
    let t4;
    if ($[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "block text-black drop-shadow-md",
            children: t3
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== candidate.mayorExtra) {
        t5 = candidate.mayorExtra?.visionSubtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-3xl md:text-4xl block font-medium mb-2",
            children: candidate.mayorExtra.visionSubtitle
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 48,
            columnNumber: 49
        }, this) : null;
        $[6] = candidate.mayorExtra;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const t6 = candidate.mayorExtra?.position || `정의당 ${candidate.name}`;
    let t7;
    if ($[8] !== t5 || $[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "block mt-2",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t4 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl md:text-7xl font-extrabold leading-tight tracking-tight",
            children: [
                t4,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== candidate.intro) {
        t9 = candidate.intro.split("\n");
        $[14] = candidate.intro;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t9[0]) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "hero_txt text-xl md:text-2xl text-black font-medium leading-relaxed max-w-lg",
            children: t9[0]
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 83,
            columnNumber: 11
        }, this);
        $[16] = t9[0];
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 pt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: _HeroSectionButtonOnClick,
                    className: "bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg",
                    children: "약속 보기"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
                    lineNumber: 91,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: _HeroSectionButtonOnClick2,
                    className: "bg-transparent border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:justice-yellow-dark/10 transition",
                    children: "후원하기"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
                    lineNumber: 91,
                    columnNumber: 214
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 91,
            columnNumber: 11
        }, this);
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t10 || $[20] !== t2 || $[21] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-black space-y-6 animate-in slide-in-from-bottom-10 duration-700 fade-in",
            children: [
                t2,
                t8,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t2;
        $[21] = t8;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:block absolute inset-0 bg-gradient-to-t from-justice-yellow/50 to-transparent bottom-0 h-1/3 z-10 pointer-events-none md:hidden"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    const t14 = candidate.mayorExtra?.heroImageUrl || candidate.photoUrl || "/placeholder-candidate.png";
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
        };
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== candidate.name || $[26] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[40vh] md:h-[80vh] flex items-end justify-center md:justify-end animate-in fade-in duration-1000 delay-300",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: t14,
                    alt: candidate.name,
                    className: "h-full w-auto object-contain object-bottom drop-shadow-2xl relative z-0 mask-image-gradient",
                    style: t15
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
                    lineNumber: 125,
                    columnNumber: 151
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[25] = candidate.name;
        $[26] = t14;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t12 || $[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl w-full mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10",
            children: [
                t12,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative min-h-fit flex items-center justify-center overflow-hidden bg-justice-yellow pt-20",
            children: [
                t1,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/HeroSection.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[32] = t17;
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    return t19;
}
_c = HeroSection;
function _HeroSectionButtonOnClick2() {
    return document.getElementById("donation")?.scrollIntoView({
        behavior: "smooth"
    });
}
function _HeroSectionButtonOnClick() {
    return document.getElementById("policies")?.scrollIntoView({
        behavior: "smooth"
    });
}
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function AboutSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "a8a42cc282908ad9a015d30ae7db9570c312f200f594d394216cca55f6ec1402") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a8a42cc282908ad9a015d30ae7db9570c312f200f594d394216cca55f6ec1402";
    }
    const { candidate } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-gray-900 font-bold text-lg tracking-wider uppercase",
            children: "당신의 곁에 정의당이 있습니다"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== candidate.mayorExtra?.greetingTitle) {
        t2 = candidate.mayorExtra?.greetingTitle || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block",
                    children: "걸어온 길,"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
                    lineNumber: 28,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block",
                    children: "변화의 시작"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
                    lineNumber: 28,
                    columnNumber: 88
                }, this)
            ]
        }, void 0, true);
        $[2] = candidate.mayorExtra?.greetingTitle;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-4xl md:text-5xl font-bold text-gray-900 leading-tight",
            children: t2
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = candidate.mayorExtra?.greetingText || candidate.intro;
    let t5;
    if ($[6] !== t4) {
        t5 = t4.split("\n").map(_AboutSectionAnonymous);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "prose prose-lg text-gray-600 space-y-6",
            children: t5
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t3 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                t1,
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-2xl font-bold text-gray-900 mb-8 border-b pb-4",
            children: "주요 경력"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== candidate.careers) {
        t9 = candidate.careers.map(_AboutSectionCandidateCareersMap);
        $[14] = candidate.careers;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-6",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
                    lineNumber: 85,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
            lineNumber: 85,
            columnNumber: 11
        }, this);
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "py-24 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-start",
                    children: [
                        t7,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
                    lineNumber: 93,
                    columnNumber: 106
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
                lineNumber: 93,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t7;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    return t11;
}
_c = AboutSection;
function _AboutSectionCandidateCareersMap(career, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2 h-2 mt-2.5 rounded-full bg-justice-yellow flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
                lineNumber: 103,
                columnNumber: 47
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-lg text-gray-700 font-medium leading-relaxed",
                children: career
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
                lineNumber: 103,
                columnNumber: 126
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
        lineNumber: 103,
        columnNumber: 10
    }, this);
}
function _AboutSectionAnonymous(line, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: line
    }, i, false, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/AboutSection.tsx",
        lineNumber: 106,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolicySection",
    ()=>PolicySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
'use client';
;
;
;
function PolicySection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "382ffb0fd4a822b6d087db190fd6867d7fc28a45d0064b351cf01d755b208a17") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "382ffb0fd4a822b6d087db190fd6867d7fc28a45d0064b351cf01d755b208a17";
    }
    const { candidate } = t0;
    if (!candidate.policies || candidate.policies.length === 0) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-gray-900 font-bold text-lg tracking-wider uppercase mb-4",
            children: "당신의 삶을 바꾸는 가장 확실한 방법"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== candidate.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
            children: [
                candidate.name,
                "의 약속"
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[2] = candidate.name;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl text-gray-600",
            children: "더 나은 삶, 더 정의로운 사회를 위한 핵심 공약입니다."
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== candidate.policies) {
        t5 = candidate.policies.map(_PolicySectionCandidatePoliciesMap);
        $[7] = candidate.policies;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: t5
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t4 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "policies",
            className: "py-24 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 md:px-8",
                children: [
                    t4,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
                lineNumber: 71,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
}
_c = PolicySection;
function _PolicySectionCandidatePoliciesMap(policy, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 bg-justice-yellow rounded-full flex items-center justify-center mb-6 group-hover:bg-justice-yellow-dark transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-black font-bold text-xl group-hover:text-black transition-colors",
                    children: i + 1
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
                    lineNumber: 81,
                    columnNumber: 282
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
                lineNumber: 81,
                columnNumber: 133
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-xl font-bold text-gray-900 mb-2 leading-snug min-h-[2rem] flex items-center",
                children: typeof policy === "string" ? policy : policy.title
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
                lineNumber: 81,
                columnNumber: 390
            }, this),
            typeof policy !== "string" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 text-sm mb-4 line-clamp-3",
                children: policy.content
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
                lineNumber: 81,
                columnNumber: 575
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center text-black font-medium text-sm mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
                        lineNumber: 81,
                        columnNumber: 725
                    }, this),
                    "확실한 이행 약속"
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
                lineNumber: 81,
                columnNumber: 651
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/PolicySection.tsx",
        lineNumber: 81,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "PolicySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportSection",
    ()=>ReportSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
'use client';
;
;
;
function ReportSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "5122fad75900294fd5cb75808c739a8613b397e1aa2878c2c7e7d6da8f7f2db0") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5122fad75900294fd5cb75808c739a8613b397e1aa2878c2c7e7d6da8f7f2db0";
    }
    const { candidate } = t0;
    if (!candidate.isIncumbent || !candidate.reports || candidate.reports.length === 0) {
        return null;
    }
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== candidate.reports) {
        const sortedReports = [
            ...candidate.reports
        ].sort(_ReportSectionAnonymous);
        t7 = "reports";
        t8 = "py-24 bg-white overflow-hidden";
        t5 = "max-w-7xl mx-auto px-4 md:px-8";
        let t9;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-justice-green font-bold text-lg tracking-wider uppercase mb-4",
                children: "Activities"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                lineNumber: 38,
                columnNumber: 12
            }, this);
            $[10] = t9;
        } else {
            t9 = $[10];
        }
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900",
                        children: [
                            "의정 활동 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-justice-green",
                                children: "보고"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                                lineNumber: 44,
                                columnNumber: 118
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                        lineNumber: 44,
                        columnNumber: 51
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                lineNumber: 44,
                columnNumber: 12
            }, this);
            $[11] = t6;
        } else {
            t6 = $[11];
        }
        t3 = "relative";
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform -translate-x-1/2 md:translate-x-0"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                lineNumber: 51,
                columnNumber: 12
            }, this);
            $[12] = t4;
        } else {
            t4 = $[12];
        }
        t1 = "space-y-12";
        t2 = sortedReports.map(_ReportSectionSortedReportsMap);
        $[1] = candidate.reports;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[13] !== t1 || $[14] !== t2) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[13] = t1;
        $[14] = t2;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t3 || $[17] !== t4 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[16] = t3;
        $[17] = t4;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t5 || $[22] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t5;
        $[22] = t6;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11 || $[25] !== t7 || $[26] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t7,
            className: t8,
            children: t11
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t7;
        $[26] = t8;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    return t12;
}
_c = ReportSection;
function _ReportSectionSortedReportsMap(report, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex flex-col md:flex-row gap-8 items-start ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[19px] md:left-1/2 top-0 transform -translate-x-1/2 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-justice-green text-white font-bold text-sm px-3 py-1 rounded-full border-4 border-white shadow-sm whitespace-nowrap",
                    children: [
                        report.year,
                        ".",
                        report.month
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                    lineNumber: 119,
                    columnNumber: 222
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                lineNumber: 119,
                columnNumber: 134
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-12 md:ml-0 md:w-1/2 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative group ${i % 2 === 0 ? "md:mr-12" : "md:ml-12"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute top-3 w-4 h-4 bg-white border border-gray-100 rotate-45 ${i % 2 === 0 ? "md:-right-2 md:border-l-0 md:border-b-0" : "md:-left-2 md:border-r-0 md:border-t-0 -left-2 border-r-0 border-t-0 hidden md:block"}`
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                            lineNumber: 119,
                            columnNumber: 610
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-3 -left-2 w-4 h-4 bg-white border-l border-b border-gray-100 rotate-45 md:hidden"
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                            lineNumber: 119,
                            columnNumber: 844
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-xl font-bold text-gray-900 mb-2 group-hover:text-justice-green transition-colors",
                            children: report.title
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                            lineNumber: 119,
                            columnNumber: 957
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 leading-relaxed mb-4",
                            children: report.description
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                            lineNumber: 119,
                            columnNumber: 1078
                        }, this),
                        report.linkUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: report.linkUrl,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "inline-flex items-center text-sm font-bold text-justice-green hover:underline",
                            children: [
                                "자세히 보기 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-4 h-4 ml-1"
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                                    lineNumber: 119,
                                    columnNumber: 1326
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                            lineNumber: 119,
                            columnNumber: 1171
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                    lineNumber: 119,
                    columnNumber: 443
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                lineNumber: 119,
                columnNumber: 398
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block md:w-1/2"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
                lineNumber: 119,
                columnNumber: 1380
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ReportSection.tsx",
        lineNumber: 119,
        columnNumber: 10
    }, this);
}
function _ReportSectionAnonymous(a, b) {
    const yDiff = Number(b.year) - Number(a.year);
    if (yDiff !== 0) {
        return yDiff;
    }
    return Number(b.month) - Number(a.month);
}
var _c;
__turbopack_context__.k.register(_c, "ReportSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
'use client';
;
;
;
function Footer(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "7f001c8ff679d502a50d11695130da01f9284b7e9092c2deed6a311751c35720") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7f001c8ff679d502a50d11695130da01f9284b7e9092c2deed6a311751c35720";
    }
    const { candidate } = t0;
    const handleCopy = _FooterHandleCopy;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/images/logo-w.gif",
                alt: "Logo",
                className: "w-full h-full object-contain"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                lineNumber: 23,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== candidate.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold",
            children: [
                "정의당 ",
                candidate.name
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[2] = candidate.name;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== candidate.category) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/60 text-sm",
            children: [
                "2026 지방선거 ",
                candidate.category,
                " 후보"
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[4] = candidate.category;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t2,
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 46,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== candidate.name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/70 leading-relaxed max-w-xs",
            children: [
                "시민의 삶을 바꾸는 정의로운 선택.",
                t5,
                candidate.name,
                "과 함께해주십시오."
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[10] = candidate.name;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t4 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-lg font-bold text-justice-yellow",
            children: "Contact Info"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== candidate.address) {
        t9 = candidate.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4 text-white/80",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "w-5 h-5 mt-1 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 86,
                    columnNumber: 85
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: candidate.address
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 86,
                    columnNumber: 129
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 86,
            columnNumber: 31
        }, this);
        $[16] = candidate.address;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== candidate.contact) {
        t10 = candidate.contact?.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `tel:${candidate.contact.phone}`,
            className: "flex items-center gap-4 text-white/80 hover:text-white hover:underline transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "w-5 h-5 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 94,
                    columnNumber: 183
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: candidate.contact.phone
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 94,
                    columnNumber: 221
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 94,
            columnNumber: 39
        }, this);
        $[18] = candidate.contact;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== candidate.contact) {
        t11 = candidate.contact?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `mailto:${candidate.contact.email}`,
            className: "flex items-center gap-4 text-white/80 hover:text-white hover:underline transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                    className: "w-5 h-5 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 102,
                    columnNumber: 186
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: candidate.contact.email
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 102,
                    columnNumber: 223
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 102,
            columnNumber: 39
        }, this);
        $[20] = candidate.contact;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== candidate.contact) {
        t12 = candidate.contact?.kakao && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 text-white/80",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-justice-yellow w-5 text-center text-xs",
                    children: "K"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 110,
                    columnNumber: 94
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: candidate.contact.kakao
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 110,
                    columnNumber: 174
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 110,
            columnNumber: 39
        }, this);
        $[22] = candidate.contact;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== candidate.contact) {
        t13 = candidate.contact?.telegram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 text-white/80",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-justice-yellow w-5 text-center text-xs",
                    children: "T"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 118,
                    columnNumber: 97
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: candidate.contact.telegram
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 118,
                    columnNumber: 177
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 118,
            columnNumber: 42
        }, this);
        $[24] = candidate.contact;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t10 || $[27] !== t11 || $[28] !== t12 || $[29] !== t13 || $[30] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t9,
                        t10,
                        t11,
                        t12,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 126,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t11;
        $[28] = t12;
        $[29] = t13;
        $[30] = t9;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-lg font-bold text-justice-yellow",
            children: "Social Media"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== candidate.social) {
        t16 = candidate.social?.youtube && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: candidate.social.youtube,
            target: "_blank",
            rel: "noreferrer",
            className: "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                lineNumber: 145,
                columnNumber: 237
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 145,
            columnNumber: 40
        }, this);
        $[33] = candidate.social;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== candidate.social) {
        t17 = candidate.social?.facebook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: candidate.social.facebook,
            target: "_blank",
            rel: "noreferrer",
            className: "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                lineNumber: 153,
                columnNumber: 240
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 153,
            columnNumber: 41
        }, this);
        $[35] = candidate.social;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== candidate.social) {
        t18 = candidate.social?.instagram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: candidate.social.instagram,
            target: "_blank",
            rel: "noreferrer",
            className: "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                lineNumber: 161,
                columnNumber: 242
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 161,
            columnNumber: 42
        }, this);
        $[37] = candidate.social;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== candidate.social) {
        t19 = candidate.social?.x && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: candidate.social.x,
            target: "_blank",
            rel: "noreferrer",
            className: "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                lineNumber: 169,
                columnNumber: 223
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 169,
            columnNumber: 34
        }, this);
        $[39] = candidate.social;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== candidate.social) {
        t20 = candidate.social?.blog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: candidate.social.blog,
            target: "_blank",
            rel: "noreferrer",
            className: "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                lineNumber: 177,
                columnNumber: 233
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 177,
            columnNumber: 37
        }, this);
        $[41] = candidate.social;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] !== t16 || $[44] !== t17 || $[45] !== t18 || $[46] !== t19 || $[47] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-1 space-y-6",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4",
                    children: [
                        t16,
                        t17,
                        t18,
                        t19,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 185,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[43] = t16;
        $[44] = t17;
        $[45] = t18;
        $[46] = t19;
        $[47] = t20;
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    let t22;
    if ($[49] !== candidate.donation.account || $[50] !== candidate.donation.holder) {
        t22 = candidate.donation.account && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-lg font-bold text-justice-yellow",
                    children: "후원 안내"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 197,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/10 rounded-xl p-6 border border-white/10 hover:bg-white/15 transition cursor-pointer group",
                    onClick: {
                        "Footer[<div>.onClick]": ()=>handleCopy(candidate.donation.account || "", "\uACC4\uC88C\uBC88\uD638")
                    }["Footer[<div>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/60 mb-2",
                            children: "후원회 계좌 (클릭하여 복사)"
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                            lineNumber: 199,
                            columnNumber: 35
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-xl font-bold tracking-wider",
                                    children: candidate.donation.account
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                                    lineNumber: 199,
                                    columnNumber: 154
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "w-5 h-5 text-white/60 group-hover:text-white transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                                    lineNumber: 199,
                                    columnNumber: 244
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                            lineNumber: 199,
                            columnNumber: 97
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-right text-sm mt-2 text-white/80",
                            children: [
                                "예금주: ",
                                candidate.donation.holder
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                            lineNumber: 199,
                            columnNumber: 333
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 197,
                    columnNumber: 132
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 197,
            columnNumber: 41
        }, this);
        $[49] = candidate.donation.account;
        $[50] = candidate.donation.holder;
        $[51] = t22;
    } else {
        t22 = $[51];
    }
    let t23;
    if ($[52] !== t14 || $[53] !== t21 || $[54] !== t22 || $[55] !== t7) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16",
            children: [
                t7,
                t14,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[52] = t14;
        $[53] = t21;
        $[54] = t22;
        $[55] = t7;
        $[56] = t23;
    } else {
        t23 = $[56];
    }
    let t24;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-white/10 pt-10 pb-4 flex flex-col items-center text-center text-white/40 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.justice21.org/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "hover:opacity-80 transition flex items-center justify-center px-2 py-2 h-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo-03.png",
                                alt: "\uC815\uC758\uB2F9",
                                className: "h-full w-auto object-contain"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                                lineNumber: 219,
                                columnNumber: 341
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                            lineNumber: 219,
                            columnNumber: 183
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://2026.justice21.org/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "inline-flex items-center justify-center h-12 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition font-bold text-sm shadow-sm backdrop-blur-sm",
                            children: "2026 지선 특별 페이지"
                        }, void 0, false, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                            lineNumber: 219,
                            columnNumber: 439
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                    lineNumber: 219,
                    columnNumber: 125
                }, this),
                "© 2026 Justice Party. All rights reserved."
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[57] = t24;
    } else {
        t24 = $[57];
    }
    let t25;
    if ($[58] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            id: "donation",
            className: "bg-gray-900 text-white py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 md:px-8",
                children: [
                    t23,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
                lineNumber: 226,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/Footer.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[58] = t23;
        $[59] = t25;
    } else {
        t25 = $[59];
    }
    return t25;
}
_c = Footer;
function _FooterHandleCopy(text, label) {
    navigator.clipboard.writeText(text);
    alert(`${label}가 복사되었습니다.`);
}
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScheduleSection",
    ()=>ScheduleSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
'use client';
;
;
;
function ScheduleSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "4cc7f175d8978eb6a2db1babed4f9581cd0d9f09b64ec81d78d35383fd5246cd") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4cc7f175d8978eb6a2db1babed4f9581cd0d9f09b64ec81d78d35383fd5246cd";
    }
    const { candidate } = t0;
    if (!candidate.mayorSchedules || candidate.mayorSchedules.length === 0) {
        return null;
    }
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== candidate.mayorSchedules) {
        const schedules = [
            ...candidate.mayorSchedules
        ].sort(_ScheduleSectionAnonymous);
        t5 = "py-24 bg-white relative overflow-hidden";
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-1/3 h-full bg-justice-yellow/5 skew-x-12 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                lineNumber: 33,
                columnNumber: 12
            }, this);
            $[8] = t6;
        } else {
            t6 = $[8];
        }
        t3 = "max-w-7xl mx-auto px-4 md:px-8 relative z-10";
        let t7;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-justice-green font-bold text-lg tracking-wider uppercase mb-2",
                children: "Schedule"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                lineNumber: 41,
                columnNumber: 12
            }, this);
            $[9] = t7;
        } else {
            t7 = $[9];
        }
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-4xl md:text-5xl font-bold text-gray-900",
                            children: [
                                "후보자 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-justice-green",
                                    children: "동정"
                                }, void 0, false, {
                                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 170
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                            lineNumber: 47,
                            columnNumber: 105
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                    lineNumber: 47,
                    columnNumber: 96
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                lineNumber: 47,
                columnNumber: 12
            }, this);
            $[10] = t4;
        } else {
            t4 = $[10];
        }
        t1 = "grid grid-cols-1 lg:grid-cols-2 gap-8";
        t2 = schedules.map(_ScheduleSectionSchedulesMap);
        $[1] = candidate.mayorSchedules;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[11] !== t1 || $[12] !== t2) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[11] = t1;
        $[12] = t2;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t3 || $[15] !== t4 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[14] = t3;
        $[15] = t4;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t5 || $[19] !== t6 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t5,
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[18] = t5;
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    return t9;
}
_c = ScheduleSection;
function _ScheduleSectionSchedulesMap(schedule, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-6 items-start p-6 rounded-2xl border border-gray-100 bg-white hover:border-justice-green/30 hover:shadow-lg transition-all group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 bg-justice-green/10 text-justice-green rounded-xl p-4 text-center min-w-[5rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-bold uppercase",
                        children: new Date(schedule.date).toLocaleDateString("en-US", {
                            month: "short"
                        })
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                        lineNumber: 101,
                        columnNumber: 283
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold",
                        children: new Date(schedule.date).getDate()
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                        lineNumber: 103,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                lineNumber: 101,
                columnNumber: 173
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xl font-bold text-gray-900 group-hover:text-justice-green transition-colors",
                        children: schedule.title
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                        lineNumber: 103,
                        columnNumber: 128
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4 text-sm text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                                        lineNumber: 103,
                                        columnNumber: 347
                                    }, this),
                                    schedule.time
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                                lineNumber: 103,
                                columnNumber: 306
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                                        lineNumber: 103,
                                        columnNumber: 438
                                    }, this),
                                    schedule.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                                lineNumber: 103,
                                columnNumber: 397
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                        lineNumber: 103,
                        columnNumber: 246
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
                lineNumber: 103,
                columnNumber: 101
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/ScheduleSection.tsx",
        lineNumber: 101,
        columnNumber: 10
    }, this);
}
function _ScheduleSectionAnonymous(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}
var _c;
__turbopack_context__.k.register(_c, "ScheduleSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorySection",
    ()=>StorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
'use client';
;
;
;
function StorySection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "e9fa6f711e78a97cd93c2dd0c5779e2bcc76a8c3bac1605f79a16ab67ce8c7e2") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e9fa6f711e78a97cd93c2dd0c5779e2bcc76a8c3bac1605f79a16ab67ce8c7e2";
    }
    const { candidate } = t0;
    if (!candidate.mayorStories || candidate.mayorStories.length === 0) {
        return null;
    }
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== candidate.mayorStories) {
        const stories = [
            ...candidate.mayorStories
        ].sort(_StorySectionAnonymous);
        t5 = "py-24 bg-gray-50";
        t3 = "max-w-7xl mx-auto px-4 md:px-8";
        let t6;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-justice-green font-bold text-lg tracking-wider uppercase mb-2",
                children: "News & Story"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                lineNumber: 34,
                columnNumber: 12
            }, this);
            $[7] = t6;
        } else {
            t6 = $[7];
        }
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: [
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900",
                        children: [
                            "현장 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-justice-green",
                                children: "소식"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                                lineNumber: 40,
                                columnNumber: 115
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                        lineNumber: 40,
                        columnNumber: 51
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                lineNumber: 40,
                columnNumber: 12
            }, this);
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        t1 = "grid grid-cols-1 md:grid-cols-3 gap-8";
        t2 = stories.map(_StorySectionStoriesMap);
        $[1] = candidate.mayorStories;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[9] !== t1 || $[10] !== t2) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[9] = t1;
        $[10] = t2;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t3 || $[13] !== t4 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[12] = t3;
        $[13] = t4;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t5 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t5,
            children: t7
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[16] = t5;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    return t8;
}
_c = StorySection;
function _StorySectionStoriesMap(story, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full group",
        children: [
            story.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-48 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: story.imageUrl,
                    alt: story.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }, void 0, false, {
                    fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                    lineNumber: 91,
                    columnNumber: 204
                }, this)
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                lineNumber: 91,
                columnNumber: 166
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-justice-green/10 text-justice-green text-xs font-bold px-2 py-1 rounded-full uppercase",
                                children: story.category
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                                lineNumber: 91,
                                columnNumber: 440
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400 text-xs",
                                children: story.date
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                                lineNumber: 91,
                                columnNumber: 571
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                        lineNumber: 91,
                        columnNumber: 394
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-justice-green transition-colors",
                        children: story.title
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                        lineNumber: 91,
                        columnNumber: 636
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 line-clamp-3 mb-6 flex-1 text-sm leading-relaxed",
                        children: story.content
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                        lineNumber: 91,
                        columnNumber: 769
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto pt-4 border-t border-gray-100 flex items-center text-sm font-bold text-gray-900 group-hover:text-justice-green transition-colors",
                        children: [
                            "자세히 보기 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4 ml-1"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                                lineNumber: 91,
                                columnNumber: 1027
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                        lineNumber: 91,
                        columnNumber: 866
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
                lineNumber: 91,
                columnNumber: 352
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/StorySection.tsx",
        lineNumber: 91,
        columnNumber: 10
    }, this);
}
function _StorySectionAnonymous(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}
var _c;
__turbopack_context__.k.register(_c, "StorySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GallerySection",
    ()=>GallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coding/2026jp/justice-election-2026/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function GallerySection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "63cdd0a1f3f0991089f45d24bb225259539ece7b1c7532fa9bc4cd1f3c7a5b30") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "63cdd0a1f3f0991089f45d24bb225259539ece7b1c7532fa9bc4cd1f3c7a5b30";
    }
    const { candidate } = t0;
    if (!candidate.mayorGallery || candidate.mayorGallery.length === 0) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-justice-green font-bold text-lg tracking-wider uppercase mb-2",
            children: "Gallery"
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-end justify-between mb-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-4xl md:text-5xl font-bold",
                        children: [
                            "현장의 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-justice-green",
                                children: "열기"
                            }, void 0, false, {
                                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
                                lineNumber: 31,
                                columnNumber: 124
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
                        lineNumber: 31,
                        columnNumber: 73
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
                lineNumber: 31,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== candidate.mayorGallery) {
        t3 = candidate.mayorGallery.map(_GallerySectionCandidateMayorGalleryMap);
        $[3] = candidate.mayorGallery;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-24 bg-black text-white overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 md:px-8",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:auto-rows-[200px] pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0",
                        children: t3
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
                        lineNumber: 46,
                        columnNumber: 125
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
                lineNumber: 46,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
}
_c = GallerySection;
function _GallerySectionCandidateMayorGalleryMap(item, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative rounded-xl overflow-hidden group min-w-[85vw] h-[60vh] md:h-auto md:min-w-0 flex-shrink-0 ${i % 3 === 0 ? "md:col-span-2 md:row-span-2" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: item.imageUrl,
                alt: item.caption,
                className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            }, void 0, false, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
                lineNumber: 55,
                columnNumber: 188
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold text-justice-green mb-1",
                        children: item.date
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
                        lineNumber: 55,
                        columnNumber: 553
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coding$2f$2026jp$2f$justice$2d$election$2d$2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-medium text-lg md:text-base",
                        children: item.caption
                    }, void 0, false, {
                        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
                        lineNumber: 55,
                        columnNumber: 625
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
                lineNumber: 55,
                columnNumber: 346
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/coding/2026jp/justice-election-2026/apps/page/src/components/GallerySection.tsx",
        lineNumber: 55,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "GallerySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=coding_2026jp_justice-election-2026_apps_page_src_components_d3c1620c._.js.map