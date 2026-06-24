(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/home/OpeningSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OpeningSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * S1 — Opening Section  (Full-screen cinematic revision)
 *
 * Architecture change: video is now the full-screen stage.
 * Content overlays the video — no more left/right split.
 * One story. One composition. One emotional experience.
 *
 * Content hierarchy (5-second test):
 *   1s  — BIOPAPRO (dominant, impossible to miss)
 *   2s  — "The Global Standard for Birchwood Tableware."
 *   3s  — 100M+ / 18+ Countries / 6,500kg / FSC® (stats bar)
 *   4s  — CTA: View Products / Request Export Quote
 *   5s  — Cert badges confirm trust
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const E = [
    0.16,
    1,
    0.3,
    1
];
const STATS = [
    {
        value: "100M+",
        label: "Units Produced",
        sub: "Annually"
    },
    {
        value: "18+",
        label: "Export Countries",
        sub: "Active markets"
    },
    {
        value: "6,500kg",
        label: "Plastic Replaced",
        sub: "Every single day"
    },
    {
        value: "FSC®",
        label: "100% Certified",
        sub: "Chain of custody"
    }
];
const TRUST_MARKS = [
    "FSC® 100%",
    "ISO 9001:2015",
    "FDA CFR 21",
    "BPI Compostable",
    "BSCI Audited"
];
function HeroVideo() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroVideo.useEffect": ()=>{
            const v = ref.current;
            if (!v) return;
            v.muted = true;
            v.play().catch({
                "HeroVideo.useEffect": ()=>{}
            }["HeroVideo.useEffect"]);
        }
    }["HeroVideo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
        ref: ref,
        src: "/videos/hero-background.mp4",
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        disablePictureInPicture: true,
        preload: "metadata",
        className: "absolute inset-0 w-full h-full object-cover",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/home/OpeningSection.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(HeroVideo, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = HeroVideo;
function OpeningSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full overflow-hidden",
        style: {
            minHeight: "100svh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroVideo, {}, void 0, false, {
                fileName: "[project]/components/home/OpeningSection.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 pointer-events-none",
                style: {
                    background: "linear-gradient(108deg, rgba(12,22,10,0.88) 0%, rgba(12,22,10,0.72) 38%, rgba(12,22,10,0.32) 65%, rgba(12,22,10,0.08) 100%)"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/OpeningSection.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 z-10 pointer-events-none",
                style: {
                    height: "38%",
                    background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/OpeningSection.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 z-10 pointer-events-none",
                style: {
                    height: "22%",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/OpeningSection.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex flex-col min-h-[100svh] px-6 md:px-12 lg:px-16 xl:px-20 pt-[88px] md:pt-[100px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -8
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.1,
                            duration: 0.6,
                            ease: E
                        },
                        className: "flex items-center flex-wrap gap-4 mb-auto pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1.5",
                                style: {
                                    background: "rgba(74,122,61,0.22)",
                                    border: "1px solid rgba(74,122,61,0.45)",
                                    backdropFilter: "blur(8px)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 10,
                                        color: "rgba(160,220,140,0.9)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/OpeningSection.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[9px] tracking-[0.25em] uppercase font-semibold",
                                        style: {
                                            color: "rgba(180,230,160,0.95)"
                                        },
                                        children: "Global FSC-Certified Manufacturer"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/OpeningSection.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/OpeningSection.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-1",
                                children: TRUST_MARKS.map((cert, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[8.5px] tracking-[0.16em] uppercase",
                                                style: {
                                                    color: "rgba(200,230,185,0.65)"
                                                },
                                                children: cert
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/OpeningSection.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            i < TRUST_MARKS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mx-2 font-mono text-[8px]",
                                                style: {
                                                    color: "rgba(180,210,160,0.3)"
                                                },
                                                children: "·"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/OpeningSection.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, cert, true, {
                                        fileName: "[project]/components/home/OpeningSection.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/home/OpeningSection.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/OpeningSection.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center flex-1 max-w-[800px] lg:max-w-[860px] py-8 md:py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.2,
                                    duration: 0.7
                                },
                                className: "font-mono uppercase tracking-[0.32em] mb-5 md:mb-6",
                                style: {
                                    fontSize: "clamp(0.62rem, 0.8vw, 0.72rem)",
                                    color: "rgba(160,210,140,0.52)"
                                },
                                children: "Global Manufacturer  ·  Est. 2018"
                            }, void 0, false, {
                                fileName: "[project]/components/home/OpeningSection.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 6
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.28,
                                    duration: 0.7,
                                    ease: E
                                },
                                className: "flex items-center gap-4 mb-7 md:mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono font-semibold uppercase tracking-[0.42em]",
                                        style: {
                                            fontSize: "clamp(0.82rem, 1.1vw, 1.05rem)",
                                            color: "rgba(195,228,175,0.72)",
                                            letterSpacing: "0.42em"
                                        },
                                        children: "BIOPAPRO"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/OpeningSection.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-shrink-0 h-px w-8",
                                        style: {
                                            background: "rgba(160,210,140,0.3)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/OpeningSection.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono uppercase tracking-[0.22em]",
                                        style: {
                                            fontSize: "clamp(0.62rem, 0.8vw, 0.72rem)",
                                            color: "rgba(170,210,150,0.45)"
                                        },
                                        children: "Sustainable by Nature"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/OpeningSection.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/OpeningSection.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-7 md:mb-9",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display font-light leading-[0.93] tracking-[-0.015em]",
                                    style: {
                                        fontSize: "clamp(2.8rem, 5.5vw, 5.8rem)"
                                    },
                                    children: [
                                        {
                                            text: "The Global Standard",
                                            accent: false,
                                            delay: 0.42
                                        },
                                        {
                                            text: "for Birchwood",
                                            accent: false,
                                            delay: 0.55
                                        },
                                        {
                                            text: "Tableware.",
                                            accent: true,
                                            delay: 0.68
                                        }
                                    ].map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                opacity: 0,
                                                y: 28,
                                                filter: "blur(6px)"
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0,
                                                filter: "blur(0px)"
                                            },
                                            transition: {
                                                delay: line.delay,
                                                duration: 0.88,
                                                ease: E
                                            },
                                            className: "block",
                                            style: {
                                                color: line.accent ? "#7AAE6B" : "rgba(242,248,236,0.96)"
                                            },
                                            children: line.text
                                        }, line.text, false, {
                                            fileName: "[project]/components/home/OpeningSection.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/home/OpeningSection.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/OpeningSection.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 14
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.88,
                                    duration: 0.78,
                                    ease: E
                                },
                                className: "font-sans font-light leading-relaxed mb-10",
                                style: {
                                    fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                                    color: "rgba(230,240,220,0.82)",
                                    maxWidth: "520px"
                                },
                                children: "Precision-manufactured FSC-certified birchwood cutlery for airlines, food service, and global distributors. Replacing 6,500 kg of plastic every day — across 18+ countries."
                            }, void 0, false, {
                                fileName: "[project]/components/home/OpeningSection.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 1.0,
                                    duration: 0.72,
                                    ease: E
                                },
                                className: "flex flex-col sm:flex-row items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/products",
                                        className: "group inline-flex items-center gap-2.5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300",
                                        style: {
                                            background: "#4A7A3D",
                                            color: "#FFFFFF"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = "#2D5228";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = "#4A7A3D";
                                        },
                                        children: [
                                            "View Product Range",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 13,
                                                strokeWidth: 2.5,
                                                className: "group-hover:translate-x-1 transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/OpeningSection.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/OpeningSection.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "group inline-flex items-center gap-2.5 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300",
                                        style: {
                                            background: "rgba(255,255,255,0.08)",
                                            color: "rgba(240,248,235,0.95)",
                                            border: "1px solid rgba(255,255,255,0.22)",
                                            backdropFilter: "blur(8px)"
                                        },
                                        onMouseEnter: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.background = "rgba(255,255,255,0.16)";
                                            el.style.borderColor = "rgba(160,220,140,0.45)";
                                        },
                                        onMouseLeave: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.background = "rgba(255,255,255,0.08)";
                                            el.style.borderColor = "rgba(255,255,255,0.22)";
                                        },
                                        children: [
                                            "Request Export Quote",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 13,
                                                strokeWidth: 2,
                                                className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/OpeningSection.tsx",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/OpeningSection.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/OpeningSection.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/OpeningSection.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1.15,
                            duration: 0.8,
                            ease: E
                        },
                        className: "border-t pb-8 md:pb-10 pt-6",
                        style: {
                            borderColor: "rgba(255,255,255,0.14)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0",
                            children: STATS.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 1.22 + i * 0.08,
                                        duration: 0.55,
                                        ease: E
                                    },
                                    className: "pr-6 md:border-r last:border-r-0 md:[&:nth-child(2)]:border-r",
                                    style: {
                                        borderColor: "rgba(255,255,255,0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-display font-light leading-none mb-2",
                                            style: {
                                                fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                                                color: "#FFFFFF"
                                            },
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/OpeningSection.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-[10px] font-semibold uppercase tracking-[0.18em] mb-0.5",
                                            style: {
                                                color: "rgba(180,230,160,0.9)"
                                            },
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/OpeningSection.tsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-[9px] uppercase tracking-[0.12em]",
                                            style: {
                                                color: "rgba(200,220,185,0.55)"
                                            },
                                            children: stat.sub
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/OpeningSection.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, stat.value, true, {
                                    fileName: "[project]/components/home/OpeningSection.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/home/OpeningSection.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/OpeningSection.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/OpeningSection.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.6,
                    duration: 0.8
                },
                className: "absolute bottom-6 right-8 z-20 hidden lg:flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-10 overflow-hidden",
                        style: {
                            background: "rgba(255,255,255,0.15)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-1/2 bg-green-light animate-scroll-line"
                        }, void 0, false, {
                            fileName: "[project]/components/home/OpeningSection.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/OpeningSection.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[8px] tracking-[0.3em] uppercase",
                        style: {
                            color: "rgba(180,220,160,0.5)",
                            writingMode: "vertical-rl"
                        },
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/components/home/OpeningSection.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/OpeningSection.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/OpeningSection.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c1 = OpeningSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeroVideo");
__turbopack_context__.k.register(_c1, "OpeningSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/StripEntry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StripEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * S2 — Documentary Strip Entry
 *
 * The narrative threshold: the page transitions from bright, welcoming,
 * and informational into the cinematic documentary experience.
 *
 * Mechanism:
 *   - Background interpolates from #F8FAF5 (bg) → #1A2E1A (dark) as
 *     the section scrolls through the viewport (Framer Motion useScroll).
 *   - Text and journey nodes appear once the dark shift begins.
 *   - A progress indicator at the bottom previews Act 01 of the strip.
 *
 * This section takes ~40vh. It is not pinned — it scrolls normally into
 * the documentary strip below.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ACTS = [
    {
        n: "01",
        label: "Forest",
        sub: "Siberian Birch Source"
    },
    {
        n: "02",
        label: "Material Selection",
        sub: "Grade & Density"
    },
    {
        n: "03",
        label: "Manufacturing",
        sub: "18 Production Lines"
    },
    {
        n: "04",
        label: "Product Engineering",
        sub: "Precision Finish"
    },
    {
        n: "05",
        label: "Global Distribution",
        sub: "18+ Export Countries"
    }
];
const E = [
    0.16,
    1,
    0.3,
    1
];
function StripEntry() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Scroll-driven background transition
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    const bgOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.2,
        0.8
    ], [
        0,
        1
    ]);
    // Text fades in as background darkens
    const textOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.3,
        0.6
    ], [
        0,
        1
    ]);
    const textY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.3,
        0.65
    ], [
        24,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative overflow-hidden py-24 md:py-32 lg:py-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-bg",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/StripEntry.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0",
                style: {
                    backgroundColor: "#1A2E1A",
                    opacity: bgOpacity
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/StripEntry.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 grain pointer-events-none",
                style: {
                    opacity: bgOpacity
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/StripEntry.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity: textOpacity,
                            y: textY
                        },
                        className: "flex items-start mb-14 md:mb-18",
                        children: ACTS.map((act, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-green-light flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/StripEntry.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[7px] text-green-light/55 tracking-[0.28em] uppercase",
                                                        children: act.n
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/StripEntry.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/StripEntry.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[9px] text-dark-text/60 uppercase tracking-[0.12em] leading-snug hidden sm:block whitespace-nowrap",
                                                children: act.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/StripEntry.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[7.5px] text-dark-muted uppercase tracking-[0.1em] hidden md:block whitespace-nowrap",
                                                children: act.sub
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/StripEntry.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/StripEntry.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    i < ACTS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start pt-[3px] mx-3 md:mx-5 flex-1 min-w-[12px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "w-full h-px",
                                            style: {
                                                backgroundColor: "rgba(168,198,134,0.25)",
                                                scaleX: bgOpacity,
                                                originX: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/StripEntry.tsx",
                                            lineNumber: 94,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/StripEntry.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, act.n, true, {
                                fileName: "[project]/components/home/StripEntry.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/StripEntry.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity: textOpacity,
                            y: textY
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[9px] text-green-light/50 tracking-[0.28em] uppercase mb-5",
                                children: "The manufacturing story"
                            }, void 0, false, {
                                fileName: "[project]/components/home/StripEntry.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display font-light text-dark-text leading-[0.92] tracking-[-0.02em] max-w-[700px]",
                                style: {
                                    fontSize: "clamp(2.4rem, 4.5vw, 4.2rem)"
                                },
                                children: [
                                    "From a Siberian forest",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/StripEntry.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    "to tables in 18 countries.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/StripEntry.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-light",
                                        children: "The complete story."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/StripEntry.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/StripEntry.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/StripEntry.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity: textOpacity
                        },
                        className: "mt-12 md:mt-16 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-10 overflow-hidden flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full bg-gradient-to-b from-transparent via-green-light/40 to-transparent animate-scroll-line"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/StripEntry.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/StripEntry.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[8.5px] text-dark-muted tracking-[0.22em] uppercase",
                                children: "Scroll to begin the journey"
                            }, void 0, false, {
                                fileName: "[project]/components/home/StripEntry.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/StripEntry.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity: textOpacity
                        },
                        className: "mt-10 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[8px] tracking-[0.28em] uppercase px-3 py-1.5",
                                style: {
                                    background: "rgba(91,140,81,0.15)",
                                    color: "rgba(168,198,134,0.8)",
                                    border: "1px solid rgba(91,140,81,0.2)"
                                },
                                children: "01 / 05"
                            }, void 0, false, {
                                fileName: "[project]/components/home/StripEntry.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[8.5px] text-dark-muted tracking-[0.2em] uppercase",
                                children: "Forest — where it begins"
                            }, void 0, false, {
                                fileName: "[project]/components/home/StripEntry.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/StripEntry.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/StripEntry.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/StripEntry.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(StripEntry, "bmF3efCCDPn99O3S+NUDsqxhO6Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = StripEntry;
var _c;
__turbopack_context__.k.register(_c, "StripEntry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/DocumentaryStrip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentaryStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * S3 — The Documentary Strip
 *
 * The signature interaction of the Biopapro website.
 * Vertical scroll drives a horizontal journey through 5 acts.
 *
 * Architecture:
 *   outer section    height: 500vh     creates scroll space
 *   sticky inner     position:sticky   stays in viewport during pin
 *   strip div        width: 500vw      translates -400vw as you scroll
 *
 * GSAP:
 *   gsap.to(strip, { x: -totalWidth })
 *   scrollTrigger: { scrub: 1.2 }   →  cinematic 1.2s lag
 *
 * Lenis sync:
 *   Handled globally in SmoothScrollProvider (lenis.on('scroll', ScrollTrigger.update)).
 *
 * Mobile fallback (< 1024px):
 *   Horizontal pin disabled. Acts render as full-height vertical sections.
 *   Same content, no horizontal GSAP. Clean and accessible.
 *
 * Acts:
 *   01  Forest                  MEDIA_NEEDED: forest photography
 *   02  Material Selection      MEDIA_NEEDED: macro birchwood photography
 *   03  Manufacturing           MEDIA_NEEDED: factory floor photography
 *   04  Product Engineering     USES: real Biopapro CDN product photos
 *   05  Global Distribution     BUILT: SVG world map (no photo needed)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap-config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* ─────────────────────────────────────────────────────────────────────────────
   ACT DATA
   ───────────────────────────────────────────────────────────────────────────── */ const ACTS = [
    {
        n: "01",
        title: "Forest",
        subtitle: "Where it begins.",
        body: "FSC-certified birch forests across Northern Eurasia. Selected trees, sustainable harvest cycles, never clear-cut. Winter harvest only — when humidity is at its lowest.",
        stat: {
            value: "340",
            unit: "trees planted equivalent per day"
        },
        palette: {
            bg: "#0F2210",
            text: "rgba(220,232,210,0.90)",
            muted: "rgba(168,198,134,0.55)"
        },
        /**
     * MEDIA_NEEDED — Act 1: Forest Photography
     * Shot: Wide-angle Siberian birch forest, winter morning
     * Birch bark columns, snow-dusted branches, pale blue-white sky
     * Colour grade: cold, blue-white, high contrast
     * Minimum: 2400×1600px WebP
     * Path: /public/images/strip/act-01-forest.webp
     */ image: null,
        imagePlaceholder: "Siberian Birch Forest\nWinter · FSC Certified\nAct 01 Photography"
    },
    {
        n: "02",
        title: "Material Selection",
        subtitle: "Selected. Not extracted.",
        body: "Each log density-graded before cutting. HGB-750 to UHB-820 classification. Moisture content locked under 8% from day one. This is what precision at origin looks like.",
        stat: {
            value: "<8%",
            unit: "moisture threshold — precision standard"
        },
        palette: {
            bg: "#1A1A0A",
            text: "rgba(235,225,200,0.90)",
            muted: "rgba(200,175,120,0.55)"
        },
        /**
     * MEDIA_NEEDED — Act 2: Macro Birchwood Photography
     * Shot: Extreme close-up of birch log cross-section
     * Ring patterns and grain filling the frame
     * Contrast: cold bark exterior → warm amber wood interior
     * Colour grade: warm amber, shallow depth of field
     * Minimum: 2400×1600px WebP
     * Path: /public/images/strip/act-02-material.webp
     */ image: null,
        imagePlaceholder: "Birchwood Cross-Section\nMacro Photography\nAct 02 Material Selection"
    },
    {
        n: "03",
        title: "Manufacturing Excellence",
        subtitle: "100,000,000 units.\nOne production floor.",
        body: "Hydraulic die-stamping. 150°C baking & sterilisation. Micro-abrasive double polish. 4K optical sorting. 18 production lines running 24/7.",
        stat: {
            value: "0.05mm",
            unit: "dimensional tolerance — tighter than most metals"
        },
        palette: {
            bg: "#0F2018",
            text: "rgba(220,240,225,0.90)",
            muted: "rgba(140,200,160,0.55)"
        },
        /**
     * MEDIA_NEEDED — Act 3: Factory Floor Photography
     * Shot: Long production hall — rows of hydraulic presses + polishing drums
     * Warm industrial practicals, slight motion blur on machinery
     * Wide angle lens showing scale, depth visible
     * Colour grade: warm tungsten, deep shadow
     * Also needed: Production line video loop (30s, 1920×1080)
     * Path: /public/images/strip/act-03-manufacturing.webp
     *        /public/videos/production-line-loop.mp4
     */ image: null,
        imagePlaceholder: "Factory Floor Photography\n18 Production Lines\nAct 03 Manufacturing"
    },
    {
        n: "04",
        title: "Product Engineering",
        subtitle: "The finished result.",
        body: "Fork. Spoon. Knife. Coffee Stirrer. Ice Cream Stick. BBQ Skewer. Every specification. Every volume. Every certification.",
        stat: {
            value: "6",
            unit: "product categories · all FSC certified"
        },
        palette: {
            bg: "#F8FAF5",
            text: "rgba(31,42,31,0.90)",
            muted: "rgba(74,92,74,0.65)"
        },
        /**
     * Using real Biopapro product photography for this act.
     * MEDIA_NEEDED: Studio upgrade — products on white/sage surface, 5500K
     */ image: "https://biopapro.com/cdn/shop/collections/C4_4.png?v=1662374267",
        imagePlaceholder: null,
        imageAlt: "FSC-certified birchwood wooden fork — Biopapro product engineering",
        cta: {
            label: "View Full Range",
            href: "/products"
        },
        certifications: [
            "FSC®",
            "ISO 9001",
            "FDA CFR 21",
            "BPI"
        ]
    },
    {
        n: "05",
        title: "Global Distribution",
        subtitle: "18+ countries.\nEvery day.",
        body: "Airlines. Food service. Distributors. From our production floor to your operation in any volume, any specification, via sea, air, and road.",
        stat: {
            value: "18+",
            unit: "active export countries"
        },
        palette: {
            bg: "#1A2E1A",
            text: "rgba(220,232,210,0.90)",
            muted: "rgba(168,198,134,0.55)"
        },
        image: null,
        imagePlaceholder: null,
        cta: {
            label: "Start an Export Partnership",
            href: "/contact"
        },
        countries: [
            "United States",
            "United Kingdom",
            "Germany",
            "France",
            "Netherlands",
            "UAE",
            "Saudi Arabia",
            "Japan",
            "South Korea",
            "Australia",
            "Canada",
            "Spain",
            "Italy",
            "Singapore",
            "India",
            "Brazil",
            "South Africa",
            "New Zealand"
        ]
    }
];
/* World map dots — approximate lat/lng → pixel positions for a 960×480 map */ const MAP_DOTS = [
    {
        cx: 200,
        cy: 160,
        label: "United States"
    },
    {
        cx: 247,
        cy: 115,
        label: "United Kingdom"
    },
    {
        cx: 275,
        cy: 115,
        label: "Germany"
    },
    {
        cx: 268,
        cy: 122,
        label: "France"
    },
    {
        cx: 282,
        cy: 112,
        label: "Netherlands"
    },
    {
        cx: 330,
        cy: 160,
        label: "UAE"
    },
    {
        cx: 320,
        cy: 155,
        label: "Saudi Arabia"
    },
    {
        cx: 620,
        cy: 162,
        label: "Japan"
    },
    {
        cx: 612,
        cy: 170,
        label: "South Korea"
    },
    {
        cx: 680,
        cy: 320,
        label: "Australia"
    },
    {
        cx: 190,
        cy: 110,
        label: "Canada"
    },
    {
        cx: 250,
        cy: 130,
        label: "Spain"
    },
    {
        cx: 270,
        cy: 128,
        label: "Italy"
    },
    {
        cx: 618,
        cy: 210,
        label: "Singapore"
    },
    {
        cx: 500,
        cy: 190,
        label: "India"
    },
    {
        cx: 260,
        cy: 290,
        label: "Brazil"
    },
    {
        cx: 310,
        cy: 310,
        label: "South Africa"
    },
    {
        cx: 730,
        cy: 350,
        label: "New Zealand"
    }
];
function DocumentaryStrip() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stickyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stripRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const actRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const tweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0–1 strip progress
    const [activeAct, setActiveAct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0–4 current act index
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dotsActive, setDotsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* Detect desktop on mount + resize */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentaryStrip.useEffect": ()=>{
            const check = {
                "DocumentaryStrip.useEffect.check": ()=>setIsDesktop(window.innerWidth >= 1024)
            }["DocumentaryStrip.useEffect.check"];
            check();
            window.addEventListener("resize", check);
            return ({
                "DocumentaryStrip.useEffect": ()=>window.removeEventListener("resize", check)
            })["DocumentaryStrip.useEffect"];
        }
    }["DocumentaryStrip.useEffect"], []);
    /* ── GSAP horizontal scroll (desktop only) ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "DocumentaryStrip.useLayoutEffect": ()=>{
            if (!isDesktop) return;
            const strip = stripRef.current;
            const section = sectionRef.current;
            if (!strip || !section) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "DocumentaryStrip.useLayoutEffect.ctx": ()=>{
                    const totalWidth = {
                        "DocumentaryStrip.useLayoutEffect.ctx.totalWidth": ()=>strip.scrollWidth - window.innerWidth
                    }["DocumentaryStrip.useLayoutEffect.ctx.totalWidth"];
                    const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(strip, {
                        x: {
                            "DocumentaryStrip.useLayoutEffect.ctx.tween": ()=>-totalWidth()
                        }["DocumentaryStrip.useLayoutEffect.ctx.tween"],
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: {
                                "DocumentaryStrip.useLayoutEffect.ctx.tween": ()=>"+=".concat(totalWidth())
                            }["DocumentaryStrip.useLayoutEffect.ctx.tween"],
                            scrub: 3,
                            invalidateOnRefresh: true,
                            onUpdate (self) {
                                setProgress(self.progress);
                                // Which act is active? (5 acts over 0–1 range)
                                setActiveAct(Math.min(4, Math.floor(self.progress * 5)));
                                // Trigger map dots animation at Act 5
                                if (self.progress > 0.82) setDotsActive(true);
                            }
                        }
                    });
                    tweenRef.current = tween;
                    // Per-act text entrance — triggered when each act enters the h-viewport
                    actRefs.current.forEach({
                        "DocumentaryStrip.useLayoutEffect.ctx": (actEl)=>{
                            if (!actEl) return;
                            const content = actEl.querySelectorAll(".act-content");
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: actEl,
                                containerAnimation: tween,
                                start: "left 60%",
                                once: true,
                                onEnter () {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(content, {
                                        opacity: 0,
                                        y: 28,
                                        filter: "blur(6px)"
                                    }, {
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                        stagger: 0.1,
                                        duration: 0.75,
                                        ease: "power3.out"
                                    });
                                }
                            });
                        }
                    }["DocumentaryStrip.useLayoutEffect.ctx"]);
                }
            }["DocumentaryStrip.useLayoutEffect.ctx"], sectionRef);
            return ({
                "DocumentaryStrip.useLayoutEffect": ()=>ctx.revert()
            })["DocumentaryStrip.useLayoutEffect"];
        }
    }["DocumentaryStrip.useLayoutEffect"], [
        isDesktop
    ]);
    const setActRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentaryStrip.useCallback[setActRef]": (el, i)=>{
            actRefs.current[i] = el;
        }
    }["DocumentaryStrip.useCallback[setActRef]"], []);
    /* ── MOBILE: simple in-view fade for each act ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "DocumentaryStrip.useLayoutEffect": ()=>{
            if (isDesktop) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "DocumentaryStrip.useLayoutEffect.ctx": ()=>{
                    actRefs.current.forEach({
                        "DocumentaryStrip.useLayoutEffect.ctx": (actEl)=>{
                            if (!actEl) return;
                            const content = actEl.querySelectorAll(".act-content");
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: actEl,
                                start: "top 80%",
                                once: true,
                                onEnter () {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(content, {
                                        opacity: 0,
                                        y: 22
                                    }, {
                                        opacity: 1,
                                        y: 0,
                                        stagger: 0.09,
                                        duration: 0.7,
                                        ease: "power3.out"
                                    });
                                }
                            });
                        }
                    }["DocumentaryStrip.useLayoutEffect.ctx"]);
                }
            }["DocumentaryStrip.useLayoutEffect.ctx"]);
            return ({
                "DocumentaryStrip.useLayoutEffect": ()=>ctx.revert()
            })["DocumentaryStrip.useLayoutEffect"];
        }
    }["DocumentaryStrip.useLayoutEffect"], [
        isDesktop
    ]);
    /* ─── Render ─── */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isDesktop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                style: {
                    height: "500vh"
                },
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: stickyRef,
                    className: "sticky top-0 h-screen overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: stripRef,
                            className: "flex h-full will-change-transform",
                            style: {
                                width: "".concat(ACTS.length * 100, "vw")
                            },
                            children: ACTS.map((act, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActPanel, {
                                    act: act,
                                    index: i,
                                    ref: (el)=>setActRef(el, i),
                                    dotsActive: dotsActive
                                }, act.n, false, {
                                    fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 right-0 z-30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center px-8 md:px-16 py-3 gap-6",
                                    style: {
                                        background: "rgba(10,20,10,0.6)",
                                        backdropFilter: "blur(12px)"
                                    },
                                    children: [
                                        ACTS.map((act, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full transition-colors duration-400",
                                                        style: {
                                                            backgroundColor: i <= activeAct ? "#5B8C51" : "rgba(91,140,81,0.25)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[8px] tracking-[0.2em] uppercase transition-colors duration-400",
                                                        style: {
                                                            color: i === activeAct ? "rgba(168,198,134,0.9)" : "rgba(168,198,134,0.3)"
                                                        },
                                                        children: [
                                                            act.n,
                                                            " ",
                                                            act.title
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, act.n, true, {
                                                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                                lineNumber: 313,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[9px] text-green-light/40 tracking-widest",
                                            children: [
                                                String(activeAct + 1).padStart(2, "0"),
                                                " / ",
                                                String(ACTS.length).padStart(2, "0")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[2px] bg-dark-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-green transition-none",
                                        style: {
                                            width: "".concat(progress * 100, "%")
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                        lineNumber: 337,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                            lineNumber: 307,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/DocumentaryStrip.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this),
            !isDesktop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-dark",
                children: ACTS.map((act, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActPanel, {
                        act: act,
                        index: i,
                        ref: (el)=>setActRef(el, i),
                        dotsActive: i === 4,
                        mobile: true
                    }, act.n, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 352,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 350,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(DocumentaryStrip, "8ZH0dVd1o3r4A0JHDa2MPljhZHA=");
_c = DocumentaryStrip;
;
const ActPanel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function ActPanel(param, ref) {
    let { act, index, dotsActive, mobile = false } = param;
    const isLight = act.n === "04";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative flex-shrink-0 overflow-hidden",
        style: {
            width: mobile ? "100%" : "100vw",
            height: mobile ? "100vh" : "100%",
            minHeight: mobile ? "100svh" : undefined,
            backgroundColor: act.palette.bg
        },
        children: [
            act.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: act.image,
                        alt: "".concat(act.title, " — Biopapro birchwood tableware"),
                        fill: true,
                        sizes: "100vw",
                        className: "object-cover object-center",
                        priority: index === 3
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 399,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            background: "linear-gradient(to right, rgba(248,250,245,0) 40%, transparent 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 408,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : act.n === "05" ? /* Act 5: SVG world map background */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorldMapBackground, {
                dotsActive: dotsActive
            }, void 0, false, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 415,
                columnNumber: 11
            }, this) : /* Styled gradient placeholder for acts 1–3 */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaceholderBackground, {
                act: act
            }, void 0, false, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 418,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col justify-center px-10 md:px-16 lg:px-20 pb-16",
                style: {
                    maxWidth: mobile ? "100%" : "560px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "act-content",
                        style: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[9px] tracking-[0.3em] uppercase px-3 py-1.5",
                                    style: {
                                        background: isLight ? "rgba(91,140,81,0.12)" : "rgba(91,140,81,0.18)",
                                        color: isLight ? "#3F6B42" : "rgba(168,198,134,0.85)",
                                        border: "1px solid ".concat(isLight ? "rgba(91,140,81,0.25)" : "rgba(91,140,81,0.22)")
                                    },
                                    children: [
                                        act.n,
                                        " / 05"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                    lineNumber: 429,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[8.5px] tracking-[0.2em] uppercase",
                                    style: {
                                        color: act.palette.muted
                                    },
                                    children: act.title
                                }, void 0, false, {
                                    fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                            lineNumber: 428,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "act-content",
                        style: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-light leading-[0.9] tracking-[-0.02em] mb-5 whitespace-pre-line",
                            style: {
                                fontSize: "clamp(2.6rem, 4.5vw, 4.8rem)",
                                color: isLight ? "#1F2A1F" : "rgba(248,250,245,0.95)"
                            },
                            children: act.subtitle
                        }, void 0, false, {
                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                            lineNumber: 449,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 448,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "act-content",
                        style: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-sans font-light text-base md:text-[1.05rem] leading-relaxed mb-8 max-w-[440px]",
                            style: {
                                color: act.palette.muted
                            },
                            children: act.body
                        }, void 0, false, {
                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                            lineNumber: 461,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 460,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "act-content",
                        style: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4 pt-6 mb-7",
                            style: {
                                borderTop: "1px solid ".concat(isLight ? "rgba(31,42,31,0.12)" : "rgba(168,198,134,0.18)")
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display font-light",
                                    style: {
                                        fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                                        lineHeight: 1,
                                        color: isLight ? "#3F6B42" : "rgba(168,198,134,0.9)"
                                    },
                                    children: act.stat.value
                                }, void 0, false, {
                                    fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[8px] tracking-[0.12em] uppercase leading-relaxed mt-1.5 max-w-[200px]",
                                    style: {
                                        color: act.palette.muted
                                    },
                                    children: act.stat.unit
                                }, void 0, false, {
                                    fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                            lineNumber: 471,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 470,
                        columnNumber: 11
                    }, this),
                    "certifications" in act && act.certifications && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "act-content flex items-center gap-3 flex-wrap mb-7",
                        style: {
                            opacity: 0
                        },
                        children: act.certifications.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[8px] tracking-[0.18em] uppercase px-2.5 py-1",
                                style: {
                                    background: "rgba(91,140,81,0.10)",
                                    color: "#3F6B42",
                                    border: "1px solid rgba(91,140,81,0.2)"
                                },
                                children: cert
                            }, cert, false, {
                                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                lineNumber: 498,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 496,
                        columnNumber: 13
                    }, this),
                    "countries" in act && act.countries && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "act-content mb-7 max-w-[400px]",
                        style: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-[8px] tracking-[0.12em] uppercase leading-[2.2]",
                            style: {
                                color: "rgba(168,198,134,0.55)"
                            },
                            children: [
                                act.countries.slice(0, 12).join("  ·  "),
                                " · +",
                                act.countries.length - 12,
                                " more"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                            lineNumber: 516,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 515,
                        columnNumber: 13
                    }, this),
                    "cta" in act && act.cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "act-content",
                        style: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: act.cta.href,
                            className: "inline-flex items-center gap-2.5 px-6 py-3 bg-green text-white text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-green-deep transition-colors duration-300",
                            children: [
                                act.cta.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    size: 12,
                                    strokeWidth: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                    lineNumber: 533,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                            lineNumber: 528,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 527,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 422,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-8 md:right-14 top-1/2 -translate-y-1/2 font-display font-light select-none pointer-events-none",
                style: {
                    fontSize: "clamp(14rem, 22vw, 22rem)",
                    lineHeight: 1,
                    color: isLight ? "rgba(91,140,81,0.04)" : "rgba(168,198,134,0.04)"
                },
                "aria-hidden": "true",
                children: act.n
            }, void 0, false, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 541,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/DocumentaryStrip.tsx",
        lineNumber: 386,
        columnNumber: 7
    }, this);
});
_c1 = ActPanel;
/* ─────────────────────────────────────────────────────────────────────────────
   PLACEHOLDER BACKGROUND — Acts 1, 2, 3
   Replaced with real photography when available.
   ───────────────────────────────────────────────────────────────────────────── */ function PlaceholderBackground(param) {
    let { act } = param;
    const gradients = {
        "01": "linear-gradient(145deg, #0F2210 0%, #1A3A1A 50%, #0A1808 100%)",
        "02": "linear-gradient(145deg, #1A1A0A 0%, #2E2A12 50%, #0F0E06 100%)",
        "03": "linear-gradient(145deg, #0F2018 0%, #1A3028 50%, #081510 100%)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: gradients[act.n] || gradients["01"]
                }
            }, void 0, false, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 grain pointer-events-none",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-xs",
                    style: {
                        border: "1px dashed rgba(91,140,81,0.12)",
                        padding: "2rem"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-[8px] tracking-[0.28em] uppercase leading-relaxed whitespace-pre-line",
                            style: {
                                color: "rgba(91,140,81,0.25)"
                            },
                            children: "imagePlaceholder" in act && act.imagePlaceholder ? act.imagePlaceholder : "Act ".concat(act.n, " Photography")
                        }, void 0, false, {
                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-[7px] tracking-[0.2em] uppercase mt-3",
                            style: {
                                color: "rgba(91,140,81,0.15)"
                            },
                            children: "See MEDIA_NEEDED comment in code"
                        }, void 0, false, {
                            fileName: "[project]/components/home/DocumentaryStrip.tsx",
                            lineNumber: 597,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/DocumentaryStrip.tsx",
                    lineNumber: 585,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 581,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c2 = PlaceholderBackground;
/* ─────────────────────────────────────────────────────────────────────────────
   WORLD MAP BACKGROUND — Act 5
   SVG-based simplified world map with animated country dots.
   No photography needed — built entirely in code.
   ───────────────────────────────────────────────────────────────────────────── */ function WorldMapBackground(param) {
    let { dotsActive } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0",
        style: {
            backgroundColor: "#1A2E1A"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 grain pointer-events-none",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 618,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    background: "radial-gradient(ellipse at 60% 45%, rgba(91,140,81,0.08) 0%, transparent 65%)"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 621,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 960 480",
                className: "absolute inset-0 w-full h-full object-cover",
                style: {
                    opacity: 0.12
                },
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M150 100 L230 90 L250 140 L230 200 L190 220 L150 200 Z",
                        fill: "none",
                        stroke: "rgba(168,198,134,0.4)",
                        strokeWidth: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 638,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M240 90 L310 80 L320 130 L290 150 L250 140 Z",
                        fill: "none",
                        stroke: "rgba(168,198,134,0.4)",
                        strokeWidth: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M270 150 L320 140 L330 280 L290 300 L260 260 Z",
                        fill: "none",
                        stroke: "rgba(168,198,134,0.4)",
                        strokeWidth: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 642,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M320 80 L620 90 L640 200 L500 220 L320 180 Z",
                        fill: "none",
                        stroke: "rgba(168,198,134,0.4)",
                        strokeWidth: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M620 290 L720 280 L730 360 L660 370 Z",
                        fill: "none",
                        stroke: "rgba(168,198,134,0.4)",
                        strokeWidth: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 646,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M200 220 L270 200 L280 340 L220 360 L180 300 Z",
                        fill: "none",
                        stroke: "rgba(168,198,134,0.4)",
                        strokeWidth: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 648,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "0",
                        y1: "240",
                        x2: "960",
                        y2: "240",
                        stroke: "rgba(168,198,134,0.08)",
                        strokeWidth: "0.5",
                        strokeDasharray: "4 8"
                    }, void 0, false, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 650,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 630,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 960 480",
                className: "absolute inset-0 w-full h-full",
                "aria-hidden": "true",
                children: MAP_DOTS.map((dot, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: dotsActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                    cx: dot.cx,
                                    cy: dot.cy,
                                    r: "6",
                                    fill: "none",
                                    stroke: "#5B8C51",
                                    strokeWidth: "1",
                                    initial: {
                                        scale: 0,
                                        opacity: 0.6
                                    },
                                    animate: {
                                        scale: [
                                            0,
                                            2.5
                                        ],
                                        opacity: [
                                            0.5,
                                            0
                                        ]
                                    },
                                    transition: {
                                        delay: i * 0.08,
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                        ease: "easeOut"
                                    },
                                    style: {
                                        transformOrigin: "".concat(dot.cx, "px ").concat(dot.cy, "px")
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                    lineNumber: 664,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                lineNumber: 662,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: dot.cx,
                                cy: dot.cy,
                                r: "2.5",
                                fill: "#5B8C51",
                                initial: {
                                    opacity: 0,
                                    scale: 0
                                },
                                animate: dotsActive ? {
                                    opacity: 1,
                                    scale: 1
                                } : {},
                                transition: {
                                    delay: i * 0.08,
                                    duration: 0.4,
                                    ease: "backOut"
                                },
                                style: {
                                    transformOrigin: "".concat(dot.cx, "px ").concat(dot.cy, "px")
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                                lineNumber: 685,
                                columnNumber: 13
                            }, this)
                        ]
                    }, dot.label, true, {
                        fileName: "[project]/components/home/DocumentaryStrip.tsx",
                        lineNumber: 660,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/home/DocumentaryStrip.tsx",
                lineNumber: 654,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/DocumentaryStrip.tsx",
        lineNumber: 617,
        columnNumber: 5
    }, this);
}
_c3 = WorldMapBackground;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DocumentaryStrip");
__turbopack_context__.k.register(_c1, "ActPanel");
__turbopack_context__.k.register(_c2, "PlaceholderBackground");
__turbopack_context__.k.register(_c3, "WorldMapBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function SectionLabel(param) {
    let { index, label, inverted = false, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-label", inverted ? "text-green-light/60" : "text-green/70"),
                children: index
            }, void 0, false, {
                fileName: "[project]/components/shared/SectionLabel.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block w-5 h-px", inverted ? "bg-dark-border" : "bg-border")
            }, void 0, false, {
                fileName: "[project]/components/shared/SectionLabel.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-label", inverted ? "text-dark-muted" : "text-ink-muted"),
                children: label
            }, void 0, false, {
                fileName: "[project]/components/shared/SectionLabel.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/SectionLabel.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = SectionLabel;
var _c;
__turbopack_context__.k.register(_c, "SectionLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/WhyWoodWon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyWoodWon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * S4 — Why Wood Won
 *
 * A decisive, visual science-vs-emotion case for birchwood over plastic.
 * Structure: two-column comparison — each row reveals from both sides
 * on scroll. Plastic (left, terracotta) vs Birchwood (right, forest green).
 *
 * Design philosophy:
 *   - Not a table — a verdict.
 *   - Each row delivers a "punch, punch" reveal: ✗ plastic, ✓ birchwood.
 *   - By the end the visitor feels: "The argument is over."
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ── Palette ── */ const PLASTIC = {
    bg: "#FEF6F3",
    accent: "#B5432A",
    border: "#F5D5CC",
    muted: "#9A6050"
};
const WOOD = {
    bg: "#F2F7EE",
    accent: "#3F6B42",
    border: "#C8DFC0",
    muted: "#5A7A5A"
};
/* ── Comparison data ── */ const COMPARISONS = [
    {
        category: "Source",
        plastic: {
            headline: "Petroleum-derived",
            detail: "Non-renewable fossil fuel. Each gram requires extraction, refining, and chemical synthesis."
        },
        birchwood: {
            headline: "FSC Certified Forests",
            detail: "Birch grown in sustainably managed state forests. Replanted continuously. FSC Chain of Custody."
        }
    },
    {
        category: "End of Life",
        plastic: {
            headline: "500+ year persistence",
            detail: "Does not biodegrade — fragments into microplastics that persist in soil and ocean indefinitely."
        },
        birchwood: {
            headline: "90-day compost",
            detail: "Fully soil-assimilated within 90 days in home or industrial composting. Zero heavy-metal residue."
        }
    },
    {
        category: "Food Safety",
        plastic: {
            headline: "Chemical migration risk",
            detail: "Phthalates, BPA, styrene, and other plasticizers leach into food — especially at high temperatures."
        },
        birchwood: {
            headline: "FDA CFR 21 Certified",
            detail: "Zero chemical contact. No bleach, wax, or coatings. Tested under rigorous acetic acid extraction protocols."
        }
    },
    {
        category: "Heat Performance",
        plastic: {
            headline: "Warps above 70°C",
            detail: "Structural failure and chemical release at temperatures common in cooked food and hot beverages."
        },
        birchwood: {
            headline: "Stable to 100°C+",
            detail: "Hydraulic hot-forming and high-temp baking create structural integrity far beyond plastic."
        }
    },
    {
        category: "Ocean Impact",
        plastic: {
            headline: "Microplastic pollution",
            detail: "Breaks into nano-particles that enter the marine food chain. Detected in human blood."
        },
        birchwood: {
            headline: "Zero ocean persistence",
            detail: "Biodegrades fully. No accumulation. No microplastic generation. No marine toxicity."
        }
    },
    {
        category: "Brand Signal",
        plastic: {
            headline: "Consumer rejection",
            detail: "78% of global consumers actively prefer brands that eliminate single-use plastic (Euromonitor 2024)."
        },
        birchwood: {
            headline: "Premium perception",
            detail: "Wooden cutlery is chosen by premium airlines, Michelin-starred catering, and sustainable food brands globally."
        }
    }
];
const E = [
    0.16,
    1,
    0.3,
    1
];
/* ── Single comparison row ── */ function ComparisonRow(param) {
    let { row, index } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "grid grid-cols-[1fr_auto_1fr] border-b last:border-b-0",
        style: {
            borderColor: "#EDE8E2"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: -32
                },
                animate: inView ? {
                    opacity: 1,
                    x: 0
                } : {},
                transition: {
                    delay: index * 0.04,
                    duration: 0.65,
                    ease: E
                },
                className: "flex items-start gap-3 p-5 md:p-7",
                style: {
                    backgroundColor: PLASTIC.bg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                        style: {
                            backgroundColor: "".concat(PLASTIC.accent, "18")
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 13,
                            strokeWidth: 2.5,
                            style: {
                                color: PLASTIC.accent
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/home/WhyWoodWon.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans font-semibold text-sm mb-1",
                                style: {
                                    color: PLASTIC.accent
                                },
                                children: row.plastic.headline
                            }, void 0, false, {
                                fileName: "[project]/components/home/WhyWoodWon.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-[12px] leading-relaxed",
                                style: {
                                    color: PLASTIC.muted
                                },
                                children: row.plastic.detail
                            }, void 0, false, {
                                fileName: "[project]/components/home/WhyWoodWon.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/WhyWoodWon.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scaleY: 0
                },
                animate: inView ? {
                    opacity: 1,
                    scaleY: 1
                } : {},
                transition: {
                    delay: index * 0.04 + 0.12,
                    duration: 0.5,
                    ease: E
                },
                className: "flex flex-col items-center justify-center px-3 md:px-5 py-5",
                style: {
                    borderLeft: "1px solid #EDE8E2",
                    borderRight: "1px solid #EDE8E2",
                    minWidth: "90px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[7.5px] tracking-[0.25em] text-ink-muted uppercase text-center leading-relaxed",
                    children: row.category
                }, void 0, false, {
                    fileName: "[project]/components/home/WhyWoodWon.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/WhyWoodWon.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: 32
                },
                animate: inView ? {
                    opacity: 1,
                    x: 0
                } : {},
                transition: {
                    delay: index * 0.04,
                    duration: 0.65,
                    ease: E
                },
                className: "flex items-start gap-3 p-5 md:p-7",
                style: {
                    backgroundColor: WOOD.bg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                        style: {
                            backgroundColor: "".concat(WOOD.accent, "18")
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            size: 13,
                            strokeWidth: 2.5,
                            style: {
                                color: WOOD.accent
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/home/WhyWoodWon.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans font-semibold text-sm mb-1",
                                style: {
                                    color: WOOD.accent
                                },
                                children: row.birchwood.headline
                            }, void 0, false, {
                                fileName: "[project]/components/home/WhyWoodWon.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-[12px] leading-relaxed",
                                style: {
                                    color: WOOD.muted
                                },
                                children: row.birchwood.detail
                            }, void 0, false, {
                                fileName: "[project]/components/home/WhyWoodWon.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/WhyWoodWon.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/WhyWoodWon.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(ComparisonRow, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ComparisonRow;
function WhyWoodWon() {
    _s1();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(headerRef, {
        once: true,
        margin: "-60px"
    });
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const footerView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(footerRef, {
        once: true,
        margin: "-60px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-surface",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-12 md:pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: headerView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.55,
                            ease: E
                        },
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            index: "04",
                            label: "Material Comparison"
                        }, void 0, false, {
                            fileName: "[project]/components/home/WhyWoodWon.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        initial: {
                                            opacity: 0,
                                            y: 18
                                        },
                                        animate: headerView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            delay: 0.08,
                                            duration: 0.7,
                                            ease: E
                                        },
                                        className: "font-display font-light text-ink leading-[0.9] tracking-[-0.02em]",
                                        style: {
                                            fontSize: "clamp(2.6rem, 5vw, 4.4rem)"
                                        },
                                        children: "Why Wood Won."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0,
                                            y: 12
                                        },
                                        animate: headerView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            delay: 0.16,
                                            duration: 0.65,
                                            ease: E
                                        },
                                        className: "font-sans font-light text-ink-light text-base md:text-lg mt-3 max-w-[460px]",
                                        children: "The science is clear. The choice is inevitable."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/WhyWoodWon.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: headerView ? {
                                    opacity: 1
                                } : {},
                                transition: {
                                    delay: 0.28,
                                    duration: 0.6
                                },
                                className: "hidden md:grid grid-cols-[1fr_auto_1fr] w-full max-w-[640px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center pb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[8.5px] tracking-[0.28em] uppercase",
                                            style: {
                                                color: PLASTIC.accent
                                            },
                                            children: "Plastic"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/WhyWoodWon.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[94px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center pb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[8.5px] tracking-[0.28em] uppercase",
                                            style: {
                                                color: WOOD.accent
                                            },
                                            children: "Birchwood"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/WhyWoodWon.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/WhyWoodWon.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/WhyWoodWon.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-border overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden grid grid-cols-2 border-b",
                            style: {
                                borderColor: "#EDE8E2"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-3 px-5 text-center",
                                    style: {
                                        backgroundColor: PLASTIC.bg
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[8px] tracking-[0.28em] uppercase",
                                        style: {
                                            color: PLASTIC.accent
                                        },
                                        children: "Plastic"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/WhyWoodWon.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-3 px-5 text-center",
                                    style: {
                                        backgroundColor: WOOD.bg
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[8px] tracking-[0.28em] uppercase",
                                        style: {
                                            color: WOOD.accent
                                        },
                                        children: "Birchwood"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/WhyWoodWon.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/WhyWoodWon.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        COMPARISONS.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComparisonRow, {
                                row: row,
                                index: i
                            }, row.category, false, {
                                fileName: "[project]/components/home/WhyWoodWon.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/WhyWoodWon.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/WhyWoodWon.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: footerRef,
                className: "border-t border-border",
                style: {
                    backgroundColor: WOOD.bg
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            animate: footerView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.6,
                                ease: E
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display font-light leading-[1.1] tracking-tight",
                                style: {
                                    fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                                    color: WOOD.accent
                                },
                                children: [
                                    "Birchwood wins.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-ink font-light",
                                        children: "Every category. Every time."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/WhyWoodWon.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/WhyWoodWon.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/WhyWoodWon.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            animate: footerView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                delay: 0.12,
                                duration: 0.6,
                                ease: E
                            },
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[9px] text-ink-muted uppercase tracking-[0.2em] max-w-[300px] leading-relaxed",
                                    children: [
                                        "6,500 kg of plastic not produced",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/home/WhyWoodWon.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        "today. Because of Biopapro."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/WhyWoodWon.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/certifications",
                                    className: "group inline-flex items-center gap-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-all duration-200",
                                    style: {
                                        border: "1px solid #4A7A3D",
                                        color: "#4A7A3D"
                                    },
                                    onMouseEnter: (e)=>{
                                        const el = e.currentTarget;
                                        el.style.background = "#4A7A3D";
                                        el.style.color = "#F6F1E8";
                                    },
                                    onMouseLeave: (e)=>{
                                        const el = e.currentTarget;
                                        el.style.background = "transparent";
                                        el.style.color = "#4A7A3D";
                                    },
                                    children: [
                                        "View All Certifications",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 11,
                                            strokeWidth: 2.5,
                                            className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/WhyWoodWon.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/WhyWoodWon.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/WhyWoodWon.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/WhyWoodWon.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/WhyWoodWon.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/WhyWoodWon.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s1(WhyWoodWon, "eOOYkzpa3rpZWxyq7NrXyGVZQ6I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = WhyWoodWon;
var _c, _c1;
__turbopack_context__.k.register(_c, "ComparisonRow");
__turbopack_context__.k.register(_c1, "WhyWoodWon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/ImpactCounter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImpactCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * S5 — Impact Counter
 *
 * Live sustainability metrics — calculated from real Biopapro production data.
 * Numbers count up from 0 when the section enters the viewport.
 *
 * Calculation method:
 *   - Plastic replaced (kg): 6,500 kg/day × days elapsed this year
 *   - Units produced (year): 100M / 365 × days elapsed this year
 *   - Countries active: 18 (static, with live pulse indicator)
 *   - Trees planted equivalent: 340/day × days elapsed
 *
 * The numbers are real — derived from Biopapro's stated production metrics.
 * They are deliberately NOT rounded to feel live and specific.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ── Day-of-year helper ── */ function daysElapsedThisYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    return Math.max(1, Math.floor((now.getTime() - start.getTime()) / 86_400_000));
}
/* ── Counter hook ── */ function useCountUp(target, durationMs, active) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            if (!active || target === 0) return;
            const startTime = performance.now();
            const tick = {
                "useCountUp.useEffect.tick": (now)=>{
                    const elapsed = now - startTime;
                    const t = Math.min(elapsed / durationMs, 1);
                    // Expo ease-out: fast start, slow finish
                    const eased = 1 - Math.pow(2, -10 * t);
                    setValue(Math.round(eased * target));
                    if (t < 1) requestAnimationFrame(tick);
                }
            }["useCountUp.useEffect.tick"];
            requestAnimationFrame(tick);
        }
    }["useCountUp.useEffect"], [
        active,
        target,
        durationMs
    ]);
    return value;
}
_s(useCountUp, "QEMGEmq5Rfwf2KLuWFF3dZYTA2c=");
/* ── Format helpers ── */ function fmtNumber(n) {
    return new Intl.NumberFormat("en-US").format(n);
}
function fmtCompact(n) {
    if (n >= 1_000_000) return "".concat((n / 1_000_000).toFixed(1), "M");
    if (n >= 1_000) return "".concat((n / 1_000).toFixed(0), "K");
    return String(n);
}
/* ── Counter card ── */ function CounterCard(param) {
    let { value, unit, label, sublabel, format = "full", active, delay, isLive = false } = param;
    _s1();
    const count = useCountUp(value, 2200, active);
    const display = format === "compact" ? fmtCompact(count) : fmtNumber(count);
    const E = [
        0.16,
        1,
        0.3,
        1
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 22
        },
        animate: active ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            delay,
            duration: 0.7,
            ease: E
        },
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-2 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-display font-light text-green-deep tabular-nums",
                        style: {
                            fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
                            lineHeight: 1
                        },
                        children: display
                    }, void 0, false, {
                        fileName: "[project]/components/home/ImpactCounter.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[10px] text-green uppercase tracking-[0.18em] mb-2",
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/components/home/ImpactCounter.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ImpactCounter.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-sans font-medium text-ink text-sm mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/home/ImpactCounter.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    isLive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-green animate-pulse flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ImpactCounter.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-mono text-[8.5px] text-ink-muted uppercase tracking-[0.15em]",
                        children: sublabel
                    }, void 0, false, {
                        fileName: "[project]/components/home/ImpactCounter.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ImpactCounter.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/ImpactCounter.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s1(CounterCard, "Aew1CSxoe3aC1Zreul8rQJ1thuU=", false, function() {
    return [
        useCountUp
    ];
});
_c = CounterCard;
function ImpactCounter() {
    _s2();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        once: true,
        margin: "-120px 0px"
    });
    const days = daysElapsedThisYear();
    const counters = [
        {
            value: days * 6500,
            unit: "kg",
            label: "Plastic Not Produced",
            sublabel: "".concat(new Date().getFullYear(), " year-to-date"),
            format: "full",
            isLive: true,
            delay: 0.1
        },
        {
            value: Math.floor(days * (100_000_000 / 365)),
            unit: "units",
            label: "Birchwood Units Produced",
            sublabel: "".concat(new Date().getFullYear(), " year-to-date"),
            format: "compact",
            isLive: true,
            delay: 0.22
        },
        {
            value: days * 340,
            unit: "equiv.",
            label: "Trees Planted Equivalent",
            sublabel: "Based on FSC reforestation data",
            format: "compact",
            isLive: false,
            delay: 0.34
        },
        {
            value: 18,
            unit: "+",
            label: "Countries Receiving",
            sublabel: "Active export markets",
            format: "full",
            isLive: true,
            delay: 0.46
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "bg-bg relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-px bg-border"
            }, void 0, false, {
                fileName: "[project]/components/home/ImpactCounter.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-20 md:pb-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 14
                        },
                        animate: inView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.6,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        className: "mb-14 md:mb-18",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                index: "05",
                                label: "Sustainability Impact",
                                className: "mb-5"
                            }, void 0, false, {
                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display font-light text-ink leading-[0.92] tracking-[-0.02em] max-w-[560px]",
                                style: {
                                    fontSize: "clamp(2.2rem, 4vw, 3.8rem)"
                                },
                                children: [
                                    "Because of this factory —",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/ImpactCounter.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green",
                                        children: "here is today."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ImpactCounter.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans font-light text-ink-light text-base mt-4 max-w-[420px] leading-relaxed",
                                children: "These are not projections. They are calculated from Biopapro's confirmed production metrics, live."
                            }, void 0, false, {
                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/ImpactCounter.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 border-t border-border pt-12",
                        children: counters.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CounterCard, {
                                ...c,
                                active: inView
                            }, c.label, false, {
                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/ImpactCounter.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: inView ? {
                            opacity: 1
                        } : {},
                        transition: {
                            delay: 0.8,
                            duration: 0.7
                        },
                        className: "mt-14 md:mt-18 pt-10 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-green animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ImpactCounter.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[9px] text-ink-muted uppercase tracking-[0.2em]",
                                        children: "Counters update daily · Based on 6,500 kg/day production baseline"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ImpactCounter.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display font-light text-ink text-xl",
                                                children: "300+"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-[8px] text-ink-muted uppercase tracking-[0.15em] mt-1",
                                                children: "Tons / Month"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ImpactCounter.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-10 bg-border"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ImpactCounter.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display font-light text-ink text-xl",
                                                children: "80%"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-[8px] text-ink-muted uppercase tracking-[0.15em] mt-1",
                                                children: "Women Workforce"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ImpactCounter.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-10 bg-border hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ImpactCounter.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center hidden md:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display font-light text-ink text-xl",
                                                children: "2018"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-[8px] text-ink-muted uppercase tracking-[0.15em] mt-1",
                                                children: "Year Founded"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ImpactCounter.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/ImpactCounter.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/ImpactCounter.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ImpactCounter.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/ImpactCounter.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_s2(ImpactCounter, "QrvfWyvLcE+G7HhncVkFpiFncqg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = ImpactCounter;
var _c, _c1;
__turbopack_context__.k.register(_c, "CounterCard");
__turbopack_context__.k.register(_c1, "ImpactCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/ManufacturingCredibility.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManufacturingCredibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * S6 — Manufacturing Credibility
 *
 * Six-step production journey from raw birch logs to export container.
 * Each step is a full-width staggered row: index + title left, detail right.
 * On scroll the row reveals — title slides in from left, detail from right.
 *
 * Dark section (#1D1610) — one of the 30% dark moments on the page.
 * Communicates: "This is serious manufacturing. Not a craft workshop."
 *
 * Steps:
 *   01 — Raw Material Sourcing   (FSC forest, birch logs)
 *   02 — Log Conversion          (veneer slicing, moisture control)
 *   03 — Blanking & Forming      (die-cut stamping, multi-cavity)
 *   04 — Polishing & Finishing   (rotating drum, 4-stage grit)
 *   05 — Quality Control         (optical sorting, weight check)
 *   06 — Packaging & Export      (sterilisation, 18+ country dispatch)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const EASE = [
    0.16,
    1,
    0.3,
    1
];
const STEPS = [
    {
        index: "01",
        title: "Raw Material Sourcing",
        subtitle: "FSC-Certified Birch Forests",
        body: "Every gram of wood we use is traced to FSC-certified Siberian and Northern European birch forests. Our procurement team audits each supplier annually. Chain-of-custody documentation is available for every shipment — a requirement, not an option.",
        stat: {
            value: "100%",
            label: "FSC Certified"
        },
        tags: [
            "Birchwood",
            "Siberian Origin",
            "CoC Documentation"
        ]
    },
    {
        index: "02",
        title: "Log Conversion & Veneer Slicing",
        subtitle: "Precision Material Preparation",
        body: "Birch logs are debarked, conditioned to 8–12% moisture content, and rotary-peeled into veneers at 0.6–2.0mm tolerance. Sheet uniformity directly determines product strength and surface finish — a step most manufacturers outsource. We control it in-house.",
        stat: {
            value: "±0.1mm",
            label: "Thickness Tolerance"
        },
        tags: [
            "In-house Veneer",
            "Moisture Control",
            "Sheet Uniformity"
        ]
    },
    {
        index: "03",
        title: "Blanking & Forming",
        subtitle: "High-Speed Multi-Cavity Stamping",
        body: "Veneer sheets feed into our multi-cavity die-cut presses running at 180–240 strokes per minute. Each press produces between 8–24 blanks per stroke depending on product size. Tool steel dies are machined to ±0.05mm and replaced on a 3M-stroke maintenance cycle.",
        stat: {
            value: "240/min",
            label: "Press Speed"
        },
        tags: [
            "Die-Cut Press",
            "Multi-Cavity",
            "High Volume"
        ]
    },
    {
        index: "04",
        title: "Polishing & Surface Finishing",
        subtitle: "4-Stage Drum Polish System",
        body: "Raw blanks enter a four-stage rotating drum system: coarse de-burring → medium surface abrasion → fine finishing → final micro-polish. The result is a splinter-free surface that passes EU food-contact standards without any chemical coating or wax treatment.",
        stat: {
            value: "4-Stage",
            label: "Polish System"
        },
        tags: [
            "Splinter-Free",
            "No Chemical Coating",
            "EU Food Contact"
        ]
    },
    {
        index: "05",
        title: "Optical Quality Control",
        subtitle: "100% Vision-System Inspection",
        body: "Every unit passes through our inline optical inspection system — a camera array running at 60fps that detects cracks, chips, warp, discolouration, and dimensional deviation. Rejection rate is tracked per shift. Product that fails goes back to biomass energy, not the bin.",
        stat: {
            value: "100%",
            label: "Unit Inspected"
        },
        tags: [
            "Optical Sorting",
            "Zero Compromise",
            "Shift Tracking"
        ]
    },
    {
        index: "06",
        title: "Packaging & Export",
        subtitle: "Sterilised, Sealed, Dispatched",
        body: "Finished product is UV-sterilised, individually sleeved or bulk-packed in kraft cartons, then palletised to customer specification. Our logistics team manages FCL and LCL container loading for 18+ countries. Average lead time: 25–35 days from order confirmation.",
        stat: {
            value: "25–35d",
            label: "Lead Time"
        },
        tags: [
            "UV Sterilised",
            "FCL / LCL",
            "18+ Countries"
        ]
    }
];
/* ── Single step row ── */ function StepRow(param) {
    let { step, index } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-15% 0px"
    });
    const isEven = index % 2 === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "grid grid-cols-1 lg:grid-cols-12 border-b border-dark-border last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: isEven ? -28 : 28
                },
                animate: inView ? {
                    opacity: 1,
                    x: 0
                } : {},
                transition: {
                    duration: 0.75,
                    ease: EASE,
                    delay: 0.05
                },
                className: "lg:col-span-5 flex flex-col justify-between px-6 md:px-10 lg:px-12 py-10 lg:py-14 gap-6 ".concat(isEven ? "" : "lg:order-last"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[10px] tracking-[0.3em] uppercase",
                                        style: {
                                            color: "rgba(200,154,91,0.78)"
                                        },
                                        children: [
                                            "STEP ",
                                            step.index
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 h-px",
                                        style: {
                                            background: "rgba(200,154,91,0.15)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display font-light leading-[1.05] mb-3",
                                style: {
                                    fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)",
                                    color: "#F6F1E8"
                                },
                                children: step.title
                            }, void 0, false, {
                                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[9.5px] tracking-[0.18em] uppercase",
                                style: {
                                    color: "rgba(200,154,91,0.65)"
                                },
                                children: step.subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex flex-col gap-1 px-5 py-4 border self-start",
                        style: {
                            borderColor: "rgba(200,154,91,0.22)",
                            background: "rgba(200,154,91,0.05)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display font-light",
                                style: {
                                    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                                    color: "#C89A5B",
                                    lineHeight: 1
                                },
                                children: step.stat.value
                            }, void 0, false, {
                                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[8.5px] uppercase tracking-[0.2em]",
                                style: {
                                    color: "rgba(200,154,91,0.55)"
                                },
                                children: step.stat.label
                            }, void 0, false, {
                                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex lg:col-span-1 items-stretch justify-center py-0 ".concat(isEven ? "" : "lg:order-first"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-px",
                    style: {
                        background: "rgba(200,154,91,0.12)"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: isEven ? 28 : -28
                },
                animate: inView ? {
                    opacity: 1,
                    x: 0
                } : {},
                transition: {
                    duration: 0.75,
                    ease: EASE,
                    delay: 0.15
                },
                className: "lg:col-span-6 px-6 md:px-10 lg:px-12 py-10 lg:py-14 flex flex-col justify-center gap-6 ".concat(isEven ? "" : "lg:order-first"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans font-light text-base leading-relaxed",
                        style: {
                            color: "rgba(246,241,232,0.72)",
                            maxWidth: "520px"
                        },
                        children: step.body
                    }, void 0, false, {
                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: step.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[8px] uppercase tracking-[0.18em] px-3 py-1.5",
                                style: {
                                    border: "1px solid rgba(200,154,91,0.18)",
                                    color: "rgba(200,154,91,0.85)",
                                    background: "rgba(200,154,91,0.04)"
                                },
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(StepRow, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = StepRow;
function ManufacturingCredibility() {
    _s1();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(headerRef, {
        once: true,
        margin: "-10% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative grain",
        style: {
            background: "#1D1610"
        },
        "aria-labelledby": "manufacturing-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[3px] w-full",
                style: {
                    background: "linear-gradient(90deg, transparent 0%, #C89A5B 40%, #8C6239 70%, transparent 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                className: "max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-16 lg:pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: headerInView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.6,
                            ease: EASE
                        },
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            index: "06",
                            label: "Manufacturing",
                            inverted: true
                        }, void 0, false, {
                            fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                id: "manufacturing-heading",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: headerInView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.75,
                                    ease: EASE,
                                    delay: 0.1
                                },
                                className: "font-display font-light leading-[0.95]",
                                style: {
                                    fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                                    color: "#F6F1E8"
                                },
                                children: [
                                    "From raw log",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    "to export container.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#C89A5B"
                                        },
                                        children: "Six steps. Zero shortcuts."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                animate: headerInView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.72,
                                    ease: EASE,
                                    delay: 0.22
                                },
                                className: "flex flex-col justify-end gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans font-light text-base leading-relaxed",
                                        style: {
                                            color: "rgba(246,241,232,0.88)"
                                        },
                                        children: [
                                            "Biopapro operates 18 production lines across",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#E5C99A"
                                                },
                                                children: "3 manufacturing halls"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, this),
                                            ". Every stage of the production process is performed in-house — no outsourced steps, no quality gaps. The result is a consistent product that meets the food-contact requirements of every market we export to."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 border-t",
                                        style: {
                                            borderColor: "rgba(200,154,91,0.18)"
                                        },
                                        children: [
                                            {
                                                value: "18",
                                                label: "Production Lines"
                                            },
                                            {
                                                value: "3",
                                                label: "Manufacturing Halls"
                                            },
                                            {
                                                value: "100M+",
                                                label: "Units / Year"
                                            }
                                        ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-5 pr-4 ".concat(i < 2 ? "border-r" : ""),
                                                style: {
                                                    borderColor: "rgba(200,154,91,0.12)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-display font-light",
                                                        style: {
                                                            fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)",
                                                            color: "#C89A5B",
                                                            lineHeight: 1
                                                        },
                                                        children: s.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-[8px] uppercase tracking-[0.16em] mt-1.5",
                                                        style: {
                                                            color: "rgba(200,154,91,0.78)"
                                                        },
                                                        children: s.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, s.label, true, {
                                                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t",
                style: {
                    borderColor: "rgba(200,154,91,0.12)"
                },
                children: STEPS.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepRow, {
                        step: step,
                        index: i
                    }, step.index, false, {
                        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t",
                style: {
                    borderColor: "rgba(200,154,91,0.12)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display font-light text-2xl",
                                    style: {
                                        color: "#F6F1E8"
                                    },
                                    children: "Ready to see the full operation?"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[9px] uppercase tracking-[0.18em] mt-1",
                                    style: {
                                        color: "rgba(200,154,91,0.78)"
                                    },
                                    children: "Factory audit available for qualified buyers"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/manufacturing",
                            className: "group inline-flex items-center gap-2.5 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 flex-shrink-0",
                            style: {
                                background: "#C89A5B",
                                color: "#1D1610"
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = "#8C6239";
                                e.currentTarget.style.color = "#F6F1E8";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = "#C89A5B";
                                e.currentTarget.style.color = "#1D1610";
                            },
                            children: [
                                "Full Manufacturing Story",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 12,
                                    strokeWidth: 2.5,
                                    className: "group-hover:translate-x-1 transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/ManufacturingCredibility.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/ManufacturingCredibility.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
_s1(ManufacturingCredibility, "jnsYWPAX4TI/d3AqX0NZ1l1yeoo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = ManufacturingCredibility;
var _c, _c1;
__turbopack_context__.k.register(_c, "StepRow");
__turbopack_context__.k.register(_c1, "ManufacturingCredibility");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/WomenWorkforce.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WomenWorkforce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Our People — "The Hands Behind Every Shipment."
 *
 * Architecture: full-bleed image, gradient left-to-dark-right,
 * content anchored to the right side.
 *
 * Woman's face fully visible on the left — no overlay.
 * Content reads cleanly on the darkened right area.
 * One composition. Matches the hero section's visual language.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const E = [
    0.16,
    1,
    0.3,
    1
];
const STORY_BLOCKS = [
    {
        keyword: "Precision",
        body: "Every product is inspected and prepared to export-grade standards."
    },
    {
        keyword: "Consistency",
        body: "18 production lines operating daily for customers across global markets."
    },
    {
        keyword: "Impact",
        body: "100M+ units produced annually with sustainability at the core."
    }
];
const STATS = [
    {
        value: "80%+",
        label: "Women Workforce"
    },
    {
        value: "100M+",
        label: "Units Produced Annually"
    },
    {
        value: "18+",
        label: "Export Markets"
    },
    {
        value: "2018",
        label: "Established"
    }
];
function WomenWorkforce() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-10% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative overflow-hidden",
        style: {
            minHeight: "100svh"
        },
        "aria-labelledby": "workforce-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/Worker Image.png",
                alt: "Biopapro skilled woman operator at birchwood tableware production line",
                fill: true,
                priority: true,
                sizes: "100vw",
                className: "object-cover object-center"
            }, void 0, false, {
                fileName: "[project]/components/home/WomenWorkforce.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: "linear-gradient(to left, rgba(5,14,5,0.97) 0%, rgba(5,14,5,0.94) 28%, rgba(5,14,5,0.7) 50%, rgba(5,14,5,0.18) 70%, rgba(5,14,5,0.0) 100%)"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/WomenWorkforce.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 inset-x-0 h-32 pointer-events-none",
                style: {
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/WomenWorkforce.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col justify-between min-h-[100svh] px-6 md:px-12 lg:px-16 xl:px-20 py-24 md:py-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col flex-1 justify-center lg:ml-auto lg:w-[50%] xl:w-[46%] lg:pl-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 8
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.5,
                                    ease: E
                                },
                                className: "mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    index: "—",
                                    label: "Our People",
                                    inverted: true
                                }, void 0, false, {
                                    fileName: "[project]/components/home/WomenWorkforce.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/WomenWorkforce.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                id: "workforce-heading",
                                initial: {
                                    opacity: 0,
                                    y: 28
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    delay: 0.1,
                                    duration: 0.85,
                                    ease: E
                                },
                                className: "font-display font-light leading-[0.9] mb-8",
                                style: {
                                    fontSize: "clamp(2.6rem, 5vw, 5.4rem)",
                                    color: "#F4F8F0"
                                },
                                children: [
                                    "The Hands",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/WomenWorkforce.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    "Behind Every",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/WomenWorkforce.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#7AAE6B"
                                        },
                                        children: "Shipment."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/WomenWorkforce.tsx",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/WomenWorkforce.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 14
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    delay: 0.22,
                                    duration: 0.72,
                                    ease: E
                                },
                                className: "font-sans font-light leading-relaxed mb-10",
                                style: {
                                    fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
                                    color: "rgba(220,238,210,0.78)"
                                },
                                children: [
                                    "Behind every FSC-certified spoon, fork, knife, and stirrer shipped across 18+ countries is a workforce built on precision, consistency, and craftsmanship.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/WomenWorkforce.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/WomenWorkforce.tsx",
                                        lineNumber: 131,
                                        columnNumber: 19
                                    }, this),
                                    "More than 80% of Biopapro's production team is made up of skilled women who manufacture, inspect, and prepare export-grade birchwood tableware every day. Their work powers over 100 million units annually while helping global food-service operators reduce dependence on single-use plastic."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/WomenWorkforce.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-5 mb-12",
                                children: STORY_BLOCKS.map((block, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 12
                                        },
                                        animate: inView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            delay: 0.35 + i * 0.1,
                                            duration: 0.65,
                                            ease: E
                                        },
                                        className: "flex-1 border-t pt-4",
                                        style: {
                                            borderColor: "rgba(74,122,61,0.4)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-[10px] uppercase tracking-[0.26em] font-bold mb-2",
                                                style: {
                                                    color: "#7AAE6B"
                                                },
                                                children: block.keyword
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/WomenWorkforce.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans font-light text-sm leading-relaxed",
                                                style: {
                                                    color: "rgba(215,232,205,0.72)"
                                                },
                                                children: block.body
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/WomenWorkforce.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, block.keyword, true, {
                                        fileName: "[project]/components/home/WomenWorkforce.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/home/WomenWorkforce.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: inView ? {
                                    opacity: 1
                                } : {},
                                transition: {
                                    delay: 0.65,
                                    duration: 0.55
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/manufacturing",
                                    className: "group inline-flex items-center gap-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-all duration-200",
                                    style: {
                                        border: "1px solid rgba(150,210,125,0.45)",
                                        color: "rgba(150,210,125,0.9)"
                                    },
                                    onMouseEnter: (e)=>{
                                        const el = e.currentTarget;
                                        el.style.background = "rgba(150,210,125,0.1)";
                                        el.style.borderColor = "rgba(150,210,125,0.8)";
                                        el.style.color = "rgba(150,210,125,1)";
                                    },
                                    onMouseLeave: (e)=>{
                                        const el = e.currentTarget;
                                        el.style.background = "transparent";
                                        el.style.borderColor = "rgba(150,210,125,0.45)";
                                        el.style.color = "rgba(150,210,125,0.9)";
                                    },
                                    children: [
                                        "See Full Manufacturing Operation",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 11,
                                            strokeWidth: 2.5,
                                            className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/WomenWorkforce.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/WomenWorkforce.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/WomenWorkforce.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/WomenWorkforce.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 14
                        },
                        animate: inView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            delay: 0.55,
                            duration: 0.75,
                            ease: E
                        },
                        className: "grid grid-cols-2 md:grid-cols-4 border-t pt-7 mt-10",
                        style: {
                            borderColor: "rgba(255,255,255,0.12)"
                        },
                        children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 6
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    delay: 0.62 + i * 0.08,
                                    duration: 0.5,
                                    ease: E
                                },
                                className: "pr-6 md:border-r last:border-r-0",
                                style: {
                                    borderColor: "rgba(255,255,255,0.1)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display font-light leading-none mb-1.5",
                                        style: {
                                            fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)",
                                            color: "#FFFFFF"
                                        },
                                        children: s.value
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/WomenWorkforce.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[10px] font-semibold uppercase tracking-[0.16em]",
                                        style: {
                                            color: "rgba(160,215,135,0.82)"
                                        },
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/WomenWorkforce.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.value, true, {
                                fileName: "[project]/components/home/WomenWorkforce.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/WomenWorkforce.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/WomenWorkforce.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/WomenWorkforce.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(WomenWorkforce, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = WomenWorkforce;
var _c;
__turbopack_context__.k.register(_c, "WomenWorkforce");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/ProductEcosystem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductEcosystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * S7 — Product Ecosystem
 *
 * Full product range in a premium editorial layout.
 * NOT an e-commerce grid. Products feel engineered, not listed.
 *
 * Layout:
 *   - Section header with category filters
 *   - Masonry-inspired staggered card grid
 *   - Each card: real CDN product image + name + sizes + MOQ + certifications
 *   - Hover: wood-amber top bar + slight elevation + spec reveal
 *   - CTA: full catalog link
 *
 * Images: sourced from biopapro.com CDN — no placeholders needed for
 *   the 6 hero products. Additional products show warm gradient placeholders.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const EASE = [
    0.16,
    1,
    0.3,
    1
];
const CATEGORIES = [
    "All",
    "Cutlery",
    "Café",
    "Dairy",
    "Grill",
    "Packaging"
];
const PRODUCTS = [
    {
        id: "spork",
        name: "Birchwood Spork",
        category: "Cutlery",
        sizes: "140mm · 160mm",
        moq: "100,000 units",
        material: "FSC Birchwood",
        certifications: [
            "FSC®",
            "FDA",
            "EU"
        ],
        cdnImage: "https://biopapro.com/cdn/shop/collections/C2_2.png?v=1663670170&width=800",
        highlight: true
    },
    {
        id: "fork",
        name: "Birchwood Fork",
        category: "Cutlery",
        sizes: "140mm · 160mm · 180mm",
        moq: "100,000 units",
        material: "FSC Birchwood",
        certifications: [
            "FSC®",
            "FDA",
            "EU"
        ],
        cdnImage: "https://biopapro.com/cdn/shop/collections/C4_4.png?v=1662374267&width=800"
    },
    {
        id: "spoon",
        name: "Birchwood Spoon",
        category: "Cutlery",
        sizes: "110mm · 130mm · 160mm",
        moq: "100,000 units",
        material: "FSC Birchwood",
        certifications: [
            "FSC®",
            "FDA",
            "EU"
        ],
        cdnImage: "https://biopapro.com/cdn/shop/collections/C5.png?v=1662374075&width=800"
    },
    {
        id: "knife",
        name: "Birchwood Knife",
        category: "Cutlery",
        sizes: "165mm · 185mm",
        moq: "100,000 units",
        material: "FSC Birchwood",
        certifications: [
            "FSC®",
            "FDA",
            "EU"
        ],
        cdnImage: "https://biopapro.com/cdn/shop/collections/C3_3.png?v=1662374387&width=800"
    },
    {
        id: "stirrer",
        name: "Coffee Stirrer",
        category: "Café",
        sizes: "110mm · 140mm · 160mm · 190mm",
        moq: "500,000 units",
        material: "FSC Birchwood",
        certifications: [
            "FSC®",
            "FDA"
        ],
        cdnImage: "https://biopapro.com/cdn/shop/collections/Untitled_design_61.png?v=1662375316&width=800",
        highlight: true
    },
    {
        id: "skewer",
        name: "Gun Skewer",
        category: "Grill",
        sizes: "150mm · 200mm · 250mm · 300mm",
        moq: "250,000 units",
        material: "FSC Birchwood",
        certifications: [
            "FSC®",
            "FDA",
            "EU"
        ],
        cdnImage: "https://biopapro.com/cdn/shop/collections/Untitled_design_58.png?v=1663670146&width=800"
    },
    {
        id: "icecream",
        name: "Ice Cream Stick",
        category: "Dairy",
        sizes: "75mm · 93mm · 114mm",
        moq: "1,000,000 units",
        material: "FSC Birchwood",
        certifications: [
            "FSC®",
            "FDA",
            "EU"
        ],
        cdnImage: "https://biopapro.com/cdn/shop/products/W43.png?v=1662714289&width=800"
    },
    {
        id: "packaged",
        name: "Individually Sleeved Set",
        category: "Packaging",
        sizes: "Custom packaging available",
        moq: "50,000 sets",
        material: "FSC Birchwood + Kraft Paper",
        certifications: [
            "FSC®",
            "BPI",
            "BSCI"
        ],
        cdnImage: "https://biopapro.com/cdn/shop/collections/C6_4.png?v=1662375675&width=800"
    }
];
/* ── Product card ── */ function ProductCard(param) {
    let { product, index } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 22
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.62,
            ease: EASE,
            delay: index * 0.07
        },
        className: "group relative flex flex-col bg-card border border-border hover:border-wood/40 hover:shadow-md transition-all duration-400 overflow-hidden cursor-pointer ".concat(product.highlight ? "lg:col-span-2" : ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-[2.5px] bg-wood origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 z-10"
            }, void 0, false, {
                fileName: "[project]/components/home/ProductEcosystem.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pt-4 pb-3 flex items-center justify-between border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[7.5px] text-wood tracking-[0.28em] uppercase",
                        children: product.category
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[7px] text-ink-muted tracking-wider uppercase",
                        children: [
                            "MOQ ",
                            product.moq.split(" ")[0]
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProductEcosystem.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 overflow-hidden",
                style: {
                    minHeight: product.highlight ? "280px" : "220px"
                },
                children: [
                    product.cdnImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: product.cdnImage,
                        alt: product.name,
                        fill: true,
                        className: "object-cover object-center group-hover:scale-[1.03] transition-transform duration-700",
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this) : /* Warm gradient placeholder for products without CDN images */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center gap-2",
                        style: {
                            background: "linear-gradient(155deg, #F0E4CE 0%, #E5D9C5 50%, #DDD0B8 100%)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[7px] text-wood/40 tracking-[0.22em] uppercase text-center leading-loose",
                            children: [
                                "Product Photo",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/home/ProductEcosystem.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                "Coming Soon"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ProductEcosystem.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        style: {
                            background: "linear-gradient(to top, rgba(44,36,27,0.82) 0%, transparent 55%)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1.5",
                            children: product.certifications.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[7px] tracking-[0.16em] uppercase px-2 py-1",
                                    style: {
                                        background: "rgba(200,154,91,0.2)",
                                        border: "1px solid rgba(200,154,91,0.4)",
                                        color: "#E5C99A"
                                    },
                                    children: cert
                                }, cert, false, {
                                    fileName: "[project]/components/home/ProductEcosystem.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/home/ProductEcosystem.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProductEcosystem.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-[12px] font-semibold text-ink mb-1 group-hover:text-wood-dark transition-colors duration-300 leading-snug",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-mono text-[7.5px] text-ink-muted tracking-[0.1em] uppercase",
                        children: product.sizes
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-mono text-[7px] text-ink-muted/60 tracking-[0.08em] mt-0.5",
                        children: [
                            product.material,
                            " · Min ",
                            product.moq
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProductEcosystem.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/ProductEcosystem.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(ProductCard, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ProductCard;
function ProductEcosystem() {
    _s1();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(headerRef, {
        once: true,
        margin: "-10% 0px"
    });
    const filtered = activeCategory === "All" ? PRODUCTS : PRODUCTS.filter((p)=>p.category === activeCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-bg paper",
        "aria-labelledby": "products-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headerRef,
                        className: "mb-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: headerInView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.55,
                                    ease: EASE
                                },
                                className: "mb-7",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    index: "07",
                                    label: "Product Range"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProductEcosystem.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/ProductEcosystem.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        id: "products-heading",
                                        initial: {
                                            opacity: 0,
                                            y: 18
                                        },
                                        animate: headerInView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            duration: 0.7,
                                            ease: EASE,
                                            delay: 0.1
                                        },
                                        className: "font-display font-light text-ink leading-[0.95]",
                                        style: {
                                            fontSize: "clamp(2.2rem, 4vw, 3.6rem)"
                                        },
                                        children: [
                                            "Every product,",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-wood",
                                                children: "engineered"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ProductEcosystem.tsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/home/ProductEcosystem.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this),
                                            "for global food service."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 14
                                        },
                                        animate: headerInView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            duration: 0.68,
                                            ease: EASE,
                                            delay: 0.2
                                        },
                                        className: "flex flex-col justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans font-light text-ink-light text-base leading-relaxed mb-5",
                                                children: "Six product families. One manufacturing standard. FSC-certified birchwood, precision-stamped, optically sorted, UV-sterilised, and shipped in bulk to airlines, hospitality groups, and distributors in 18+ countries."
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ProductEcosystem.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/products",
                                                className: "group inline-flex items-center gap-2.5 self-start font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-all duration-200",
                                                style: {
                                                    border: "1px solid #C89A5B",
                                                    color: "#C89A5B"
                                                },
                                                onMouseEnter: (e)=>{
                                                    const el = e.currentTarget;
                                                    el.style.background = "#C89A5B";
                                                    el.style.color = "#1D1610";
                                                },
                                                onMouseLeave: (e)=>{
                                                    const el = e.currentTarget;
                                                    el.style.background = "transparent";
                                                    el.style.color = "#C89A5B";
                                                },
                                                children: [
                                                    "View Full Product Catalog",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 11,
                                                        strokeWidth: 2.5,
                                                        className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/ProductEcosystem.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/ProductEcosystem.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 8
                        },
                        animate: headerInView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.55,
                            ease: EASE,
                            delay: 0.3
                        },
                        className: "flex items-center gap-1 flex-wrap mb-8 border-b border-border pb-5",
                        children: [
                            CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveCategory(cat),
                                    className: "font-mono text-[9px] uppercase tracking-[0.18em] px-4 py-2 transition-all duration-200",
                                    style: {
                                        background: activeCategory === cat ? "#C89A5B" : "transparent",
                                        color: activeCategory === cat ? "#1D1610" : "#9E9083",
                                        border: "1px solid ".concat(activeCategory === cat ? "#C89A5B" : "#DDD3C5")
                                    },
                                    children: cat
                                }, cat, false, {
                                    fileName: "[project]/components/home/ProductEcosystem.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-auto font-mono text-[8px] text-ink-muted uppercase tracking-[0.15em]",
                                children: [
                                    filtered.length,
                                    " product",
                                    filtered.length !== 1 ? "s" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/ProductEcosystem.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.28
                            },
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-auto",
                            children: filtered.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                    product: product,
                                    index: i
                                }, product.id, false, {
                                    fileName: "[project]/components/home/ProductEcosystem.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this))
                        }, activeCategory, false, {
                            fileName: "[project]/components/home/ProductEcosystem.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductEcosystem.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProductEcosystem.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans font-medium text-ink text-sm",
                                    children: "Need custom sizing, branding, or packaging?"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProductEcosystem.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[8.5px] text-ink-muted uppercase tracking-[0.14em] mt-0.5",
                                    children: "Laser engraving · Custom dimensions · Private label · OEM welcome"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProductEcosystem.tsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ProductEcosystem.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "group inline-flex items-center gap-2.5 px-6 py-3 bg-ink text-birch text-[10px] font-bold uppercase tracking-[0.14em] hover:bg-wood-dark transition-colors duration-300 flex-shrink-0",
                            children: [
                                "Request Custom Quote",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 11,
                                    strokeWidth: 2.5,
                                    className: "group-hover:translate-x-1 transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProductEcosystem.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ProductEcosystem.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ProductEcosystem.tsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/ProductEcosystem.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/ProductEcosystem.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_s1(ProductEcosystem, "aUitfGlIWqx6ytpM4srXXCANjts=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = ProductEcosystem;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductCard");
__turbopack_context__.k.register(_c1, "ProductEcosystem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/GlobalPresence.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalPresence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$equirectangular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoEquirectangular$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/projection/equirectangular.js [app-client] (ecmascript) <export default as geoEquirectangular>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-simple-maps/dist/index.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const EASE = [
    0.16,
    1,
    0.3,
    1
];
const GEO_URL = "/world-110m.json";
const MAP_W = 800;
const MAP_H = 400;
const proj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$equirectangular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoEquirectangular$3e$__["geoEquirectangular"])().scale(130).center([
    20,
    5
]).translate([
    MAP_W / 2,
    MAP_H / 2
]);
const MUMBAI = [
    72.8,
    19.1
];
const [MX, MY] = proj(MUMBAI);
const MARKETS = [
    {
        name: "United States",
        region: "Americas",
        lonlat: [
            -77.0,
            38.9
        ]
    },
    {
        name: "Canada",
        region: "Americas",
        lonlat: [
            -75.7,
            45.4
        ]
    },
    {
        name: "Brazil",
        region: "Americas",
        lonlat: [
            -47.9,
            -15.8
        ]
    },
    {
        name: "Mexico",
        region: "Americas",
        lonlat: [
            -99.1,
            19.4
        ]
    },
    {
        name: "United Kingdom",
        region: "Europe",
        lonlat: [
            -0.1,
            51.5
        ]
    },
    {
        name: "Germany",
        region: "Europe",
        lonlat: [
            13.4,
            52.5
        ]
    },
    {
        name: "France",
        region: "Europe",
        lonlat: [
            2.3,
            48.9
        ]
    },
    {
        name: "Netherlands",
        region: "Europe",
        lonlat: [
            4.9,
            52.4
        ]
    },
    {
        name: "Poland",
        region: "Europe",
        lonlat: [
            21.0,
            52.2
        ]
    },
    {
        name: "South Africa",
        region: "Africa",
        lonlat: [
            28.0,
            -26.0
        ]
    },
    {
        name: "UAE",
        region: "Middle East",
        lonlat: [
            55.3,
            25.2
        ]
    },
    {
        name: "Saudi Arabia",
        region: "Middle East",
        lonlat: [
            46.7,
            24.7
        ]
    },
    {
        name: "India",
        region: "Asia",
        lonlat: [
            77.2,
            28.6
        ]
    },
    {
        name: "Singapore",
        region: "Asia",
        lonlat: [
            103.8,
            1.4
        ]
    },
    {
        name: "Japan",
        region: "Asia",
        lonlat: [
            139.7,
            35.7
        ]
    },
    {
        name: "South Korea",
        region: "Asia",
        lonlat: [
            126.9,
            37.6
        ]
    },
    {
        name: "Australia",
        region: "Pacific",
        lonlat: [
            151.2,
            -33.9
        ]
    },
    {
        name: "New Zealand",
        region: "Pacific",
        lonlat: [
            174.8,
            -36.9
        ]
    }
];
const REGIONS = [
    "Americas",
    "Europe",
    "Middle East",
    "Africa",
    "Asia",
    "Pacific"
];
const REGION_STATS = {
    Americas: {
        markets: 4,
        growth: "+12% YoY"
    },
    Europe: {
        markets: 5,
        growth: "+18% YoY"
    },
    "Middle East": {
        markets: 2,
        growth: "+31% YoY"
    },
    Africa: {
        markets: 1,
        growth: "New 2024"
    },
    Asia: {
        markets: 4,
        growth: "+22% YoY"
    },
    Pacific: {
        markets: 2,
        growth: "+9% YoY"
    }
};
// Quadratic bezier arc from Mumbai to destination
function arcD(to) {
    const [x2, y2] = proj(to);
    const cx = (MX + x2) / 2;
    const cy = Math.min(MY, y2) - Math.abs(x2 - MX) * 0.2;
    return "M ".concat(MX, ",").concat(MY, " Q ").concat(cx, ",").concat(Math.max(2, cy), " ").concat(x2, ",").concat(y2);
}
// Precompute projected dot positions + routes
const MARKET_DATA = MARKETS.map(_c = (m, i)=>{
    const [dx, dy] = proj(m.lonlat);
    return {
        ...m,
        dx,
        dy,
        d: arcD(m.lonlat),
        delay: 0.35 + i * 0.05
    };
});
_c1 = MARKET_DATA;
function GlobalPresence() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-15% 0px"
    });
    const [activeRegion, setActiveRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeMarkets = activeRegion ? MARKET_DATA.filter((m)=>m.region === activeRegion) : MARKET_DATA;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative grain",
        style: {
            background: "#1D1610"
        },
        "aria-labelledby": "global-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[3px] w-full",
                style: {
                    background: "linear-gradient(90deg, transparent 0%, #4A7A3D 40%, #2D5228 70%, transparent 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/home/GlobalPresence.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: inView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            duration: 0.55,
                                            ease: EASE
                                        },
                                        className: "mb-7",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            index: "08",
                                            label: "Global Presence",
                                            inverted: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/GlobalPresence.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/GlobalPresence.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        id: "global-heading",
                                        initial: {
                                            opacity: 0,
                                            y: 18
                                        },
                                        animate: inView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            duration: 0.7,
                                            ease: EASE,
                                            delay: 0.1
                                        },
                                        className: "font-display font-light leading-[0.95]",
                                        style: {
                                            fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                                            color: "#F6F1E8"
                                        },
                                        children: [
                                            "18+ active markets",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#7AAE6B"
                                                },
                                                children: "across 6 continents."
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/GlobalPresence.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 14
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.68,
                                    ease: EASE,
                                    delay: 0.2
                                },
                                className: "flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans font-light text-base leading-relaxed mb-6",
                                        style: {
                                            color: "rgba(246,241,232,0.88)"
                                        },
                                        children: "From European airlines to Pacific food distributors, Biopapro ships FCL and LCL containers on a rolling basis. Our export logistics team manages customs documentation, phytosanitary certificates, and compliance for every destination market."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/GlobalPresence.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveRegion(null),
                                                className: "font-mono text-[8px] uppercase tracking-[0.16em] px-3 py-1.5 transition-all duration-200",
                                                style: {
                                                    background: !activeRegion ? "#4A7A3D" : "transparent",
                                                    color: !activeRegion ? "#F6F1E8" : "rgba(122,174,107,0.85)",
                                                    border: "1px solid ".concat(!activeRegion ? "#4A7A3D" : "rgba(74,122,61,0.3)")
                                                },
                                                children: "All Regions"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this),
                                            REGIONS.map((region)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveRegion(region === activeRegion ? null : region),
                                                    className: "font-mono text-[8px] uppercase tracking-[0.16em] px-3 py-1.5 transition-all duration-200",
                                                    style: {
                                                        background: activeRegion === region ? "#4A7A3D" : "transparent",
                                                        color: activeRegion === region ? "#F6F1E8" : "rgba(122,174,107,0.85)",
                                                        border: "1px solid ".concat(activeRegion === region ? "#4A7A3D" : "rgba(74,122,61,0.3)")
                                                    },
                                                    children: [
                                                        region,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 opacity-60",
                                                            children: REGION_STATS[region].markets
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/GlobalPresence.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, region, true, {
                                                    fileName: "[project]/components/home/GlobalPresence.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/GlobalPresence.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/GlobalPresence.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: inView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.8,
                            ease: EASE,
                            delay: 0.35
                        },
                        className: "relative w-full border",
                        style: {
                            borderColor: "rgba(74,122,61,0.15)",
                            background: "rgba(0,0,0,0.15)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposableMap"], {
                                projection: "geoEquirectangular",
                                projectionConfig: {
                                    scale: 130,
                                    center: [
                                        20,
                                        5
                                    ]
                                },
                                width: MAP_W,
                                height: MAP_H,
                                style: {
                                    width: "100%",
                                    height: "auto",
                                    display: "block"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geographies"], {
                                        geography: GEO_URL,
                                        children: (param)=>{
                                            let { geographies } = param;
                                            return geographies.map((geo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geography"], {
                                                    geography: geo,
                                                    fill: "rgba(74,122,61,0.12)",
                                                    stroke: "rgba(74,122,61,0.25)",
                                                    strokeWidth: 0.3,
                                                    style: {
                                                        default: {
                                                            outline: "none"
                                                        },
                                                        hover: {
                                                            outline: "none"
                                                        },
                                                        pressed: {
                                                            outline: "none"
                                                        }
                                                    }
                                                }, geo.rsmKey, false, {
                                                    fileName: "[project]/components/home/GlobalPresence.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/GlobalPresence.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    inView && MARKET_DATA.map((m)=>{
                                        const isActive = !activeRegion || m.region === activeRegion;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                            d: m.d,
                                            fill: "none",
                                            stroke: isActive ? "rgba(74,122,61,0.5)" : "rgba(74,122,61,0.08)",
                                            strokeWidth: 0.5,
                                            strokeDasharray: "3 2",
                                            strokeLinecap: "round",
                                            initial: {
                                                pathLength: 0,
                                                opacity: 0
                                            },
                                            animate: {
                                                pathLength: 1,
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 1.6,
                                                delay: m.delay,
                                                ease: "easeOut"
                                            }
                                        }, "route-".concat(m.name), false, {
                                            fileName: "[project]/components/home/GlobalPresence.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    inView && MARKET_DATA.map((m, i)=>{
                                        const isActive = !activeRegion || m.region === activeRegion;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0
                                            },
                                            animate: {
                                                opacity: isActive ? 1 : 0.15,
                                                scale: 1
                                            },
                                            transition: {
                                                delay: 0.5 + i * 0.05,
                                                duration: 0.35,
                                                ease: EASE
                                            },
                                            style: {
                                                transformOrigin: "".concat(m.dx, "px ").concat(m.dy, "px")
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                    cx: m.dx,
                                                    cy: m.dy,
                                                    r: 4,
                                                    fill: "none",
                                                    stroke: isActive ? "rgba(74,122,61,0.5)" : "rgba(74,122,61,0.15)",
                                                    strokeWidth: 0.4,
                                                    animate: inView ? {
                                                        r: [
                                                            4,
                                                            8
                                                        ],
                                                        opacity: [
                                                            0.6,
                                                            0
                                                        ]
                                                    } : {},
                                                    transition: {
                                                        delay: 0.8 + i * 0.06,
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        repeatDelay: 3
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/GlobalPresence.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: m.dx,
                                                    cy: m.dy,
                                                    r: 2,
                                                    fill: isActive ? "#7AAE6B" : "rgba(74,122,61,0.3)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/GlobalPresence.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, m.name, true, {
                                            fileName: "[project]/components/home/GlobalPresence.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    inView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            [
                                                8,
                                                13,
                                                18
                                            ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                    cx: MX,
                                                    cy: MY,
                                                    r: r,
                                                    fill: "none",
                                                    stroke: "rgba(74,122,61,0.35)",
                                                    strokeWidth: 0.4,
                                                    animate: {
                                                        r: [
                                                            r,
                                                            r + 7
                                                        ],
                                                        opacity: [
                                                            0.5,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        delay: 0.3 + i * 0.4,
                                                        duration: 2.5,
                                                        repeat: Infinity,
                                                        repeatDelay: 1.5
                                                    }
                                                }, r, false, {
                                                    fileName: "[project]/components/home/GlobalPresence.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: MX,
                                                cy: MY,
                                                r: 4,
                                                fill: "#4A7A3D"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: MX,
                                                cy: MY,
                                                r: 2,
                                                fill: "#7AAE6B"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: MX + 6,
                                                y: MY + 5,
                                                fontSize: "5",
                                                fill: "rgba(122,174,107,0.65)",
                                                fontFamily: "JetBrains Mono, monospace",
                                                letterSpacing: "0.3",
                                                children: "MUMBAI"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            activeRegion && REGION_STATS[activeRegion] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 6
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.3
                                },
                                className: "absolute top-3 right-3 px-4 py-3 pointer-events-none",
                                style: {
                                    background: "rgba(29,22,16,0.95)",
                                    border: "1px solid rgba(74,122,61,0.3)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display font-light text-xl",
                                        style: {
                                            color: "#7AAE6B"
                                        },
                                        children: activeRegion
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/GlobalPresence.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[8px] uppercase tracking-[0.16em] mt-1",
                                        style: {
                                            color: "rgba(246,241,232,0.55)"
                                        },
                                        children: [
                                            REGION_STATS[activeRegion].markets,
                                            " markets · ",
                                            REGION_STATS[activeRegion].growth
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/GlobalPresence.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/GlobalPresence.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: inView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.65,
                            ease: EASE,
                            delay: 0.55
                        },
                        className: "mt-10 border-t pt-8",
                        style: {
                            borderColor: "rgba(200,154,91,0.15)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: activeMarkets.map((market, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: inView ? {
                                            opacity: 1
                                        } : {},
                                        transition: {
                                            delay: 0.6 + i * 0.04,
                                            duration: 0.4
                                        },
                                        className: "font-mono text-[8px] uppercase tracking-[0.14em] px-3 py-1.5",
                                        style: {
                                            border: "1px solid rgba(200,154,91,0.18)",
                                            color: "rgba(200,154,91,0.6)",
                                            background: "rgba(200,154,91,0.04)"
                                        },
                                        children: market.name
                                    }, market.name, false, {
                                        fileName: "[project]/components/home/GlobalPresence.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[8.5px] uppercase tracking-[0.18em]",
                                        style: {
                                            color: "rgba(200,154,91,0.72)"
                                        },
                                        children: "Actively expanding · New markets added quarterly"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/GlobalPresence.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/global-presence",
                                        className: "group inline-flex items-center gap-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-all duration-200",
                                        style: {
                                            border: "1px solid rgba(122,174,107,0.55)",
                                            color: "#7AAE6B"
                                        },
                                        onMouseEnter: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.background = "rgba(122,174,107,0.12)";
                                            el.style.borderColor = "#7AAE6B";
                                        },
                                        onMouseLeave: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.background = "transparent";
                                            el.style.borderColor = "rgba(122,174,107,0.55)";
                                        },
                                        children: [
                                            "View Global Presence",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 11,
                                                strokeWidth: 2.5,
                                                className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                                lineNumber: 339,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/GlobalPresence.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/GlobalPresence.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/GlobalPresence.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/GlobalPresence.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/GlobalPresence.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(GlobalPresence, "mGGYXaPXG4UNhKbP2s/KmGWL31U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = GlobalPresence;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MARKET_DATA$MARKETS.map");
__turbopack_context__.k.register(_c1, "MARKET_DATA");
__turbopack_context__.k.register(_c2, "GlobalPresence");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/Certifications.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Certifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * S9 — Certifications
 *
 * Trust vault — official seal-style presentation.
 * Visitors must immediately recognise FSC, ISO, FDA, BPI, BSCI, EU.
 *
 * Design: Each certification feels like an official document with
 * a circular seal, issuing body, certificate code, and scope.
 * Not an informational card — a verification statement.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const EASE = [
    0.16,
    1,
    0.3,
    1
];
const CERTS = [
    {
        id: "fsc",
        badge: "FSC®",
        shortName: "FSC",
        fullName: "Forest Stewardship Council",
        code: "Chain of Custody Certified",
        certNo: "FSC-C0XXXXX",
        scope: "100% of raw material — all product lines",
        verifiedBy: "Rainforest Alliance / SCS Global",
        since: "2018",
        status: "ACTIVE",
        color: "#2D5228",
        bgLight: "#C8DFC0",
        key3: [
            "100% Certified Wood",
            "Annual Audit",
            "Chain of Custody"
        ],
        downloadable: true
    },
    {
        id: "iso",
        badge: "ISO",
        shortName: "9001:2015",
        fullName: "Quality Management System",
        code: "ISO 9001:2015",
        certNo: "Certificate No. XXXXX",
        scope: "Production, QC, Packaging, Export",
        verifiedBy: "Bureau Veritas / SGS",
        since: "2019",
        status: "ACTIVE",
        color: "#4A7A3D",
        bgLight: "#C8DFC0",
        key3: [
            "Production QC",
            "Third-Party Audited",
            "Annual Renewal"
        ],
        downloadable: true
    },
    {
        id: "fda",
        badge: "FDA",
        shortName: "CFR 21",
        fullName: "US Food & Drug Administration",
        code: "21 CFR 176.170",
        certNo: "Direct Food Contact Compliant",
        scope: "All wooden tableware — US market",
        verifiedBy: "US FDA",
        since: "2020",
        status: "COMPLIANT",
        color: "#6B6257",
        bgLight: "#EDE5D8",
        key3: [
            "No Chemical Coatings",
            "Direct Food Contact",
            "US Market Ready"
        ],
        downloadable: false
    },
    {
        id: "bpi",
        badge: "BPI",
        shortName: "COMPOSTABLE",
        fullName: "Biodegradable Products Institute",
        code: "ASTM D6400 / D6868",
        certNo: "BPI Certified Compostable",
        scope: "Selected product lines",
        verifiedBy: "BPI — USA",
        since: "2021",
        status: "CERTIFIED",
        color: "#2D5228",
        bgLight: "#C8DFC0",
        key3: [
            "Industrial Compostable",
            "ASTM Compliant",
            "US & Canada"
        ],
        downloadable: true
    },
    {
        id: "bsci",
        badge: "amfori",
        shortName: "BSCI",
        fullName: "Business Social Compliance Initiative",
        code: "amfori BSCI Audit",
        certNo: "Social Compliance Verified",
        scope: "All facilities — annual audit",
        verifiedBy: "amfori — Brussels",
        since: "2021",
        status: "ACTIVE",
        color: "#4A5C4A",
        bgLight: "#D4DFD0",
        key3: [
            "Labour Rights",
            "Health & Safety",
            "Annual Factory Audit"
        ],
        downloadable: true
    },
    {
        id: "eu",
        badge: "EU",
        shortName: "EC 10/2011",
        fullName: "EU Food Contact Regulation",
        code: "Reg. EC 10/2011 · EN 1400",
        certNo: "Migration Tested",
        scope: "All products exported to EU",
        verifiedBy: "Accredited EU Lab",
        since: "2020",
        status: "COMPLIANT",
        color: "#2D4A8A",
        bgLight: "#D0D8F0",
        key3: [
            "Migration Tested",
            "EU Market Ready",
            "Annual Testing"
        ],
        downloadable: false
    }
];
/* ── Seal circle SVG ── */ function CertSeal(param) {
    let { badge, shortName, color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex-shrink-0",
        style: {
            width: 80,
            height: 80
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 80 80",
                width: 80,
                height: 80,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "40",
                        cy: "40",
                        r: "37",
                        fill: "none",
                        stroke: color,
                        strokeWidth: "1.5",
                        opacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "40",
                        cy: "40",
                        r: "31",
                        fill: "none",
                        stroke: color,
                        strokeWidth: "0.8",
                        opacity: "0.25"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "40",
                        cy: "40",
                        r: "30",
                        fill: color,
                        opacity: "0.08"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "40",
                        cy: "40",
                        r: "37",
                        fill: "none",
                        stroke: color,
                        strokeWidth: "0.5",
                        strokeDasharray: "2 3",
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Certifications.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center gap-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono font-bold leading-none text-center",
                        style: {
                            fontSize: badge.length > 4 ? "8px" : "13px",
                            color,
                            letterSpacing: "0.05em"
                        },
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono font-bold leading-none text-center",
                        style: {
                            fontSize: "7px",
                            color,
                            letterSpacing: "0.12em",
                            opacity: 0.75
                        },
                        children: shortName
                    }, void 0, false, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Certifications.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Certifications.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c = CertSeal;
/* ── Cert card ── */ function CertCard(param) {
    let { cert, index } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-6% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.62,
            ease: EASE,
            delay: index * 0.08
        },
        className: "group relative flex flex-col bg-card border border-border hover:border-green/40 hover:shadow-md transition-all duration-300 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[3px] w-full",
                style: {
                    background: cert.color
                }
            }, void 0, false, {
                fileName: "[project]/components/home/Certifications.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pt-5 pb-4 flex items-start gap-4 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CertSeal, {
                        badge: cert.badge,
                        shortName: cert.shortName,
                        color: cert.color
                    }, void 0, false, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5 min-w-0 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[8px] font-bold uppercase tracking-[0.22em] px-2 py-0.5",
                                        style: {
                                            background: cert.color,
                                            color: "#fff"
                                        },
                                        children: cert.status
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Certifications.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.14em]",
                                        children: [
                                            "Since ",
                                            cert.since
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/Certifications.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Certifications.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans font-semibold text-ink text-[13px] leading-tight",
                                children: cert.fullName
                            }, void 0, false, {
                                fileName: "[project]/components/home/Certifications.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[8px] tracking-[0.12em]",
                                style: {
                                    color: cert.color
                                },
                                children: cert.code
                            }, void 0, false, {
                                fileName: "[project]/components/home/Certifications.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Certifications.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-4 flex flex-col gap-3 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                size: 11,
                                style: {
                                    color: cert.color,
                                    flexShrink: 0,
                                    marginTop: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/home/Certifications.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-[12px] text-ink leading-snug",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Scope:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Certifications.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-ink-light",
                                        children: cert.scope
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Certifications.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Certifications.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 flex items-center gap-2",
                        style: {
                            background: cert.bgLight + "40",
                            border: "1px solid ".concat(cert.color, "25")
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[7px] uppercase tracking-[0.18em] text-ink-muted",
                                children: "Verified by"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Certifications.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[8px] font-bold tracking-[0.1em]",
                                style: {
                                    color: cert.color
                                },
                                children: cert.verifiedBy
                            }, void 0, false, {
                                fileName: "[project]/components/home/Certifications.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: cert.key3.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[7.5px] uppercase tracking-[0.12em] px-2.5 py-1",
                                style: {
                                    border: "1px solid ".concat(cert.color, "30"),
                                    color: cert.color,
                                    background: cert.bgLight + "20"
                                },
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/components/home/Certifications.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Certifications.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pb-4 pt-2 border-t border-border flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.14em]",
                        children: cert.certNo
                    }, void 0, false, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    cert.downloadable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/certifications",
                        className: "inline-flex items-center gap-1 font-mono text-[7.5px] uppercase tracking-[0.16em] transition-colors duration-200",
                        style: {
                            color: cert.color
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 9
                            }, void 0, false, {
                                fileName: "[project]/components/home/Certifications.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            "View Certificate"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/certifications",
                        className: "inline-flex items-center gap-1 font-mono text-[7.5px] uppercase tracking-[0.16em] transition-colors duration-200 text-ink-muted hover:text-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 9
                            }, void 0, false, {
                                fileName: "[project]/components/home/Certifications.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            "Learn More"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Certifications.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Certifications.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Certifications.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_s(CertCard, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = CertCard;
function Certifications() {
    _s1();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(headerRef, {
        once: true,
        margin: "-10% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-parchment paper",
        "aria-labelledby": "certs-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: headerRef,
                    className: "mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: headerInView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.55,
                                ease: EASE
                            },
                            className: "mb-7",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                index: "09",
                                label: "Certifications & Compliance"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Certifications.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/Certifications.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "certs-heading",
                                    initial: {
                                        opacity: 0,
                                        y: 18
                                    },
                                    animate: headerInView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.7,
                                        ease: EASE,
                                        delay: 0.1
                                    },
                                    className: "font-display font-light text-ink leading-[0.95]",
                                    style: {
                                        fontSize: "clamp(2.2rem, 4vw, 3.6rem)"
                                    },
                                    children: [
                                        "Six certifications.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/home/Certifications.tsx",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-green-deep",
                                            children: "Every claim verified."
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Certifications.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/Certifications.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 14
                                    },
                                    animate: headerInView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.68,
                                        ease: EASE,
                                        delay: 0.2
                                    },
                                    className: "flex flex-col justify-center gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans font-light text-ink-light text-base leading-relaxed",
                                            children: "Biopapro holds six active certifications covering forest sourcing, manufacturing quality, food safety, compostability, and social compliance. Every certificate is independently issued and renewed annually."
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Certifications.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-6 pt-2 border-t border-border",
                                            children: [
                                                {
                                                    value: "6",
                                                    label: "Active Certifications"
                                                },
                                                {
                                                    value: "100%",
                                                    label: "Third-Party Verified"
                                                },
                                                {
                                                    value: "2018",
                                                    label: "Certified Since"
                                                }
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-display font-light text-green-deep text-2xl leading-none",
                                                            children: s.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/Certifications.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-mono text-[8px] text-ink-muted uppercase tracking-[0.14em] mt-1",
                                                            children: s.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/Certifications.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, s.label, true, {
                                                    fileName: "[project]/components/home/Certifications.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Certifications.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/Certifications.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/Certifications.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/Certifications.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: CERTS.map((cert, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CertCard, {
                            cert: cert,
                            index: i
                        }, cert.id, false, {
                            fileName: "[project]/components/home/Certifications.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/Certifications.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: headerInView ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: 0.6,
                        ease: EASE,
                        delay: 0.6
                    },
                    className: "mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-[9px] uppercase tracking-[0.18em] text-ink-muted",
                            children: "Full compliance documentation · Certificate copies · NDA available on request"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Certifications.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/certifications",
                            className: "group inline-flex items-center gap-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-all duration-200",
                            style: {
                                border: "1px solid #4A7A3D",
                                color: "#4A7A3D"
                            },
                            onMouseEnter: (e)=>{
                                const el = e.currentTarget;
                                el.style.background = "#4A7A3D";
                                el.style.color = "#F6F1E8";
                            },
                            onMouseLeave: (e)=>{
                                const el = e.currentTarget;
                                el.style.background = "transparent";
                                el.style.color = "#4A7A3D";
                            },
                            children: [
                                "View All Certifications",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    size: 11,
                                    strokeWidth: 2.5,
                                    className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Certifications.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/Certifications.tsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/Certifications.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/Certifications.tsx",
            lineNumber: 263,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/Certifications.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_s1(Certifications, "jnsYWPAX4TI/d3AqX0NZ1l1yeoo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = Certifications;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CertSeal");
__turbopack_context__.k.register(_c1, "CertCard");
__turbopack_context__.k.register(_c2, "Certifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/ContactTeaser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactTeaser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * S11 — Contact / Export Partnership CTA
 *
 * Final section. Light warm background — ends the page on an open,
 * welcoming note. Not a standard "contact us" footer-adjacent block.
 * Positioned as "Start Your Export Partnership."
 *
 * Two columns:
 *   Left  — Emotional close: what a partnership with Biopapro means
 *   Right — Inline quick-contact form with Formspree/server action hook
 *
 * Form fields: Company · Country · Product interest · Volume · Message
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const EASE = [
    0.16,
    1,
    0.3,
    1
];
const PRODUCTS_LIST = [
    "Birchwood Cutlery (Fork / Spoon / Knife)",
    "Spork",
    "Coffee Stirrer",
    "Ice Cream Stick",
    "Skewer / BBQ Stick",
    "Custom / OEM",
    "Full Range"
];
const VOLUMES = [
    "Under 500K units/year",
    "500K – 2M units/year",
    "2M – 10M units/year",
    "10M – 50M units/year",
    "50M+ units/year"
];
function ContactTeaser() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-10% 0px"
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        /* ─────────────────────────────────────────────────────────────
       WIRE UP: Replace with your preferred form handler.
       Options:
       A) Formspree: action="https://formspree.io/f/{id}" method="POST"
       B) Next.js Server Action: import { sendEnquiry } from "@/app/actions"
       C) Email API: Resend / Sendgrid via /api/contact route

       For now: simulate a 1.2s send then mark submitted.
    ────────────────────────────────────────────────────────────── */ await new Promise((r)=>setTimeout(r, 1200));
        setSending(false);
        setSubmitted(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "bg-birch paper",
        "aria-labelledby": "contact-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[2px]",
                style: {
                    background: "linear-gradient(90deg, transparent, #DDD3C5 30%, #DDD3C5 70%, transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/components/home/ContactTeaser.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: inView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.55,
                                        ease: EASE
                                    },
                                    className: "mb-7",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        index: "11",
                                        label: "Export Partnership"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ContactTeaser.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "contact-heading",
                                    initial: {
                                        opacity: 0,
                                        y: 18
                                    },
                                    animate: inView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.7,
                                        ease: EASE,
                                        delay: 0.1
                                    },
                                    className: "font-display font-light text-ink leading-[0.95] mb-8",
                                    style: {
                                        fontSize: "clamp(2.2rem, 4vw, 3.6rem)"
                                    },
                                    children: [
                                        "Start your",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        "export",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-wood",
                                            children: "partnership."
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/ContactTeaser.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 14
                                    },
                                    animate: inView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.68,
                                        ease: EASE,
                                        delay: 0.2
                                    },
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans font-light text-ink-light text-base leading-relaxed max-w-[420px]",
                                            children: "Whether you are a distributor, an airline catering group, a large-scale food service operator, or a sustainability procurement team — we work with buyers at every scale."
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                {
                                                    step: "01",
                                                    text: "Response within 24 hours"
                                                },
                                                {
                                                    step: "02",
                                                    text: "Sample kit dispatched within 5 business days"
                                                },
                                                {
                                                    step: "03",
                                                    text: "Tailored quote with container economics"
                                                },
                                                {
                                                    step: "04",
                                                    text: "Compliance documentation for your market"
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[8px] text-wood/50 tracking-[0.3em] flex-shrink-0",
                                                            children: item.step
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-px bg-border flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-sans text-[13px] text-ink-light",
                                                            children: item.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, item.step, true, {
                                                    fileName: "[project]/components/home/ContactTeaser.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 space-y-3 border border-border",
                                            style: {
                                                background: "#EFE6D7"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 12,
                                                            className: "text-wood flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light",
                                                            children: "export@biopapro.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/ContactTeaser.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 12,
                                                            className: "text-wood flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light",
                                                            children: "Available via WhatsApp · WeChat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/ContactTeaser.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            size: 12,
                                                            className: "text-wood flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light",
                                                            children: "Headquarters — China · Export globally"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/ContactTeaser.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/ContactTeaser.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ContactTeaser.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.75,
                                ease: EASE,
                                delay: 0.25
                            },
                            children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start justify-center h-full gap-5 py-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 flex items-center justify-center",
                                        style: {
                                            background: "#F0E4CE",
                                            border: "1px solid #DDD3C5"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-wood text-xl",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-light text-3xl text-ink leading-tight",
                                        children: "Enquiry received."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-ink-light text-sm leading-relaxed max-w-sm",
                                        children: "Our export team will review your enquiry and respond within 24 hours. Check your inbox — and your spam folder, just in case."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/products",
                                        className: "group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-wood hover:text-wood-dark transition-colors duration-200 mt-2",
                                        children: [
                                            "Browse the full catalog while you wait",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 10,
                                                strokeWidth: 2.5,
                                                className: "group-hover:translate-x-1 transition-transform duration-200"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ContactTeaser.tsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/ContactTeaser.tsx",
                                lineNumber: 171,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2 sm:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block font-mono text-[8px] uppercase tracking-[0.2em] text-ink-muted mb-1.5",
                                                        children: "Company *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "company",
                                                        required: true,
                                                        placeholder: "Acme Food Group",
                                                        className: "w-full px-4 py-3 bg-card border border-border text-ink text-sm font-sans placeholder:text-ink-muted/50 focus:outline-none focus:border-wood transition-colors duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/ContactTeaser.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2 sm:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block font-mono text-[8px] uppercase tracking-[0.2em] text-ink-muted mb-1.5",
                                                        children: "Country *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "country",
                                                        required: true,
                                                        placeholder: "Australia",
                                                        className: "w-full px-4 py-3 bg-card border border-border text-ink text-sm font-sans placeholder:text-ink-muted/50 focus:outline-none focus:border-wood transition-colors duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/ContactTeaser.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-mono text-[8px] uppercase tracking-[0.2em] text-ink-muted mb-1.5",
                                                children: "Product Interest *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ContactTeaser.tsx",
                                                lineNumber: 221,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "product",
                                                required: true,
                                                defaultValue: "",
                                                className: "w-full px-4 py-3 bg-card border border-border text-ink text-sm font-sans focus:outline-none focus:border-wood transition-colors duration-200 appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        children: "Select product category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 21
                                                    }, this),
                                                    PRODUCTS_LIST.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: p,
                                                            children: p
                                                        }, p, false, {
                                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/ContactTeaser.tsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-mono text-[8px] uppercase tracking-[0.2em] text-ink-muted mb-1.5",
                                                children: "Annual Volume *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ContactTeaser.tsx",
                                                lineNumber: 238,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "volume",
                                                required: true,
                                                defaultValue: "",
                                                className: "w-full px-4 py-3 bg-card border border-border text-ink text-sm font-sans focus:outline-none focus:border-wood transition-colors duration-200 appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        children: "Select volume range"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this),
                                                    VOLUMES.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: v,
                                                            children: v
                                                        }, v, false, {
                                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/ContactTeaser.tsx",
                                                lineNumber: 241,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-mono text-[8px] uppercase tracking-[0.2em] text-ink-muted mb-1.5",
                                                children: "Message"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ContactTeaser.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "message",
                                                rows: 4,
                                                placeholder: "Tell us about your requirements, timeline, or any specific certifications needed…",
                                                className: "w-full px-4 py-3 bg-card border border-border text-ink text-sm font-sans placeholder:text-ink-muted/50 focus:outline-none focus:border-wood transition-colors duration-200 resize-none leading-relaxed"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ContactTeaser.tsx",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: sending,
                                        className: "group w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-ink text-birch text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-wood-dark transition-colors duration-300 disabled:opacity-60",
                                        children: sending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block w-3.5 h-3.5 border border-birch/40 border-t-birch rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/ContactTeaser.tsx",
                                            lineNumber: 272,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Send Export Enquiry",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 12,
                                                    strokeWidth: 2.5,
                                                    className: "group-hover:translate-x-1 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ContactTeaser.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.14em] text-center",
                                        children: "No spam · No automated sales sequences · Export team responds directly"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ContactTeaser.tsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/ContactTeaser.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/ContactTeaser.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ContactTeaser.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/ContactTeaser.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/ContactTeaser.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(ContactTeaser, "BjfNcLwInJgJ6kVttzqViu13Fv8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ContactTeaser;
var _c;
__turbopack_context__.k.register(_c, "ContactTeaser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_cfbf7898._.js.map