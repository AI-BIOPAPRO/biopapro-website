(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/lib/manufacturing-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Biopapro Manufacturing Data
 *
 * ACCURACY NOTE: Biopapro does NOT harvest forests or process raw timber.
 * The manufacturing model is:
 *   - FSC-certified semi-finished birchwood sourced from approved suppliers (Russia / China)
 *   - Biopapro performs: incoming inspection → finishing → QC → packaging → export
 * All content below reflects this actual operation.
 */ __turbopack_context__.s([
    "BUYER_TRUST_POINTS",
    ()=>BUYER_TRUST_POINTS,
    "CAPABILITY_METRICS",
    ()=>CAPABILITY_METRICS,
    "EXPORT_CAPABILITIES",
    ()=>EXPORT_CAPABILITIES,
    "FACTORY_CAPABILITIES",
    ()=>FACTORY_CAPABILITIES,
    "MFG_HERO_STATS",
    ()=>MFG_HERO_STATS,
    "MFG_METRICS",
    ()=>MFG_METRICS,
    "PRODUCTION_STEPS",
    ()=>PRODUCTION_STEPS,
    "QA_CHECKPOINTS",
    ()=>QA_CHECKPOINTS
]);
const MFG_HERO_STATS = [
    {
        value: "100M+",
        label: "Units / Month"
    },
    {
        value: "18+",
        label: "Export Markets"
    },
    {
        value: "380+",
        label: "Employees"
    },
    {
        value: "2019",
        label: "Established"
    }
];
const CAPABILITY_METRICS = [
    {
        label: "Facility",
        value: "Mumbai, Maharashtra, India"
    },
    {
        label: "Operating Since",
        value: "2019"
    },
    {
        label: "Workforce",
        value: "380+ employees"
    },
    {
        label: "Women in Workforce",
        value: "70%+"
    },
    {
        label: "Monthly Output",
        value: "100M+ units"
    },
    {
        label: "Material Processed",
        value: "300+ tons / month"
    },
    {
        label: "Export Port",
        value: "JNPT Mumbai — India's largest"
    },
    {
        label: "Active Markets",
        value: "18+ countries across 6 continents"
    },
    {
        label: "Lead Time",
        value: "21–28 days typical ocean transit"
    },
    {
        label: "Certifications",
        value: "ISO 9001 · ISO 14001 · ISO 45001 · BRCGS · FSC®"
    }
];
const PRODUCTION_STEPS = [
    {
        step: "01",
        title: "Certified Birchwood Supply",
        body: "FSC-certified semi-finished birchwood is sourced from approved suppliers in Russia and China. Every incoming batch arrives with full FSC chain-of-custody documentation. Supplier qualification is maintained under ISO 9001 procurement controls.",
        tag: "Supplier Management",
        accent: "#C89A5B"
    },
    {
        step: "02",
        title: "Incoming Material Inspection",
        body: "Every batch is inspected on arrival at the Mumbai facility. Checks cover dimensional specification, surface quality grading, and moisture content. Sub-specification material is rejected at intake — before it enters the production line.",
        tag: "Quality Gate 1",
        accent: "#C89A5B"
    },
    {
        step: "03",
        title: "Precision Finishing & Manufacturing",
        body: "High-speed stamping and finishing lines process semi-finished birchwood into final product form. Dimensional tolerances are maintained across production runs. Output: 100M+ units per month from a single facility in Mumbai.",
        tag: "Manufacturing",
        accent: "#C89A5B"
    },
    {
        step: "04",
        title: "Quality Control & Food Safety",
        body: "Automated optical sorting identifies and rejects dimensional defects and surface flaws. Manual AQL 2.5 inspection follows, conducted by trained QC operators. All food-contact units pass through a UV sterilisation tunnel — compliant with FDA CFR 21 and EU 10/2011.",
        tag: "Quality Gate 2",
        accent: "#4A7A3D"
    },
    {
        step: "05",
        title: "Packaging & Export Preparation",
        body: "Units are packed into OPP polybags (100 or 500 pcs) and standardised export cartons sized for container optimisation. Full export documentation is prepared in parallel: FSC certificate, phytosanitary certificate, certificate of origin, commercial invoice, packing list.",
        tag: "Export Prep",
        accent: "#4A7A3D"
    },
    {
        step: "06",
        title: "Global Distribution",
        body: "Palletised cartons are loaded into 20ft or 40ft FCL containers at JNPT — Jawaharlal Nehru Port Trust, Mumbai, India's largest container port. LCL consolidation available for smaller volumes. 18+ active export markets across 6 continents.",
        tag: "Distribution",
        accent: "#4A7A3D"
    }
];
const FACTORY_CAPABILITIES = [
    {
        id: "inspection",
        title: "Incoming Inspection",
        body: "Every batch of semi-finished birchwood is inspected before production begins. Dimensional checks, surface grading, and moisture measurement at intake ensure only specification-grade material enters the line.",
        metric: "100% batch inspection"
    },
    {
        id: "finishing",
        title: "Precision Finishing",
        body: "High-speed stamping and finishing lines convert semi-finished birchwood to final product dimensions. Production tolerances are controlled and verified per ISO 9001 in-process inspection procedures.",
        metric: "300+ tons / month"
    },
    {
        id: "uv",
        title: "UV Sterilisation",
        body: "All food-contact units pass through a UV sterilisation tunnel before packaging. Food-safety compliance is maintained to FDA CFR Title 21 and EU Regulation 10/2011 standards.",
        metric: "FDA + EU compliant"
    },
    {
        id: "qc",
        title: "Optical Sorting",
        body: "Automated optical sorting systems inspect every unit for dimensional variation and surface defects. Rejected units are isolated before manual AQL 2.5 verification by trained inspectors.",
        metric: "AQL 2.5 standard"
    },
    {
        id: "packaging",
        title: "Export Packaging",
        body: "OPP bag packing (100 or 500 pcs), then export carton assembly sized for container fill optimisation. Kraft-sleeve and private-label retail-ready packaging also available at MOQ.",
        metric: "FCL-optimised cartons"
    },
    {
        id: "documentation",
        title: "Export Documentation",
        body: "Full documentation package prepared for every shipment: FSC® chain-of-custody, phytosanitary certificate, certificate of origin, commercial invoice, packing list, and ISO / compliance certificates on request.",
        metric: "15+ documents per shipment"
    }
];
const QA_CHECKPOINTS = [
    {
        stage: "Pre-Production",
        check: "Incoming material inspection — dimensional, surface, moisture"
    },
    {
        stage: "Pre-Production",
        check: "Supplier FSC chain-of-custody documentation verified"
    },
    {
        stage: "In-Process",
        check: "Stamping dimension check — first-off and in-run sampling"
    },
    {
        stage: "In-Process",
        check: "Surface finish verification per specification"
    },
    {
        stage: "Post-Production",
        check: "Automated optical sorting — 100% of units screened"
    },
    {
        stage: "Post-Production",
        check: "Manual AQL 2.5 sampling inspection by QC team"
    },
    {
        stage: "Food Safety",
        check: "UV sterilisation tunnel — all food-contact units"
    },
    {
        stage: "Food Safety",
        check: "FDA CFR 21 and EU 10/2011 compliance verified per batch"
    },
    {
        stage: "Packaging",
        check: "Count verification — OPP bag and carton quantity audit"
    },
    {
        stage: "Packaging",
        check: "Carton labelling and export marking verified"
    },
    {
        stage: "Pre-Shipment",
        check: "Documentation package review — FSC cert, phytosanitary, COO, invoices"
    },
    {
        stage: "Pre-Shipment",
        check: "Batch release sign-off by QC manager before loading"
    }
];
const EXPORT_CAPABILITIES = [
    {
        label: "Container Types",
        value: "20ft FCL · 40ft FCL · LCL consolidation"
    },
    {
        label: "Loading Port",
        value: "JNPT Mumbai — India's largest container port"
    },
    {
        label: "Transit Times",
        value: "Europe 21–26 days · Middle East 10–14 days · USA 28–35 days"
    },
    {
        label: "Documentation",
        value: "FSC cert · Phytosanitary · COO · Invoice · B/L"
    },
    {
        label: "MOQ (FCL)",
        value: "From 20,000 pcs — full container preferred"
    },
    {
        label: "MOQ (LCL)",
        value: "From 5,000 pcs — consolidated shipping available"
    },
    {
        label: "Packaging Options",
        value: "OPP bulk · Kraft sleeve retail · Custom private label"
    },
    {
        label: "Shipment Frequency",
        value: "Rolling monthly schedule · spot containers available"
    }
];
const MFG_METRICS = [
    {
        value: "100M",
        suffix: "+",
        label: "Units per Month",
        sub: "Single facility, Mumbai"
    },
    {
        value: "300",
        suffix: "T",
        label: "Tons per Month",
        sub: "Birchwood processed"
    },
    {
        value: "380",
        suffix: "+",
        label: "Employees",
        sub: "70%+ women"
    },
    {
        value: "18",
        suffix: "+",
        label: "Export Markets",
        sub: "6 continents"
    },
    {
        value: "9",
        suffix: "",
        label: "Certifications",
        sub: "ISO · FSC · BRCGS · BPI · BSCI"
    },
    {
        value: "12",
        suffix: "+",
        label: "QA Checkpoints",
        sub: "Per production batch"
    }
];
const BUYER_TRUST_POINTS = [
    {
        title: "Consistent Supply",
        body: "100M+ units per month from a single facility. Rolling container schedules mean buyers receive on-time delivery without production gaps."
    },
    {
        title: "Verified Sourcing",
        body: "FSC®-certified semi-finished birchwood from approved suppliers. Chain-of-custody documentation issued with every batch — independently audited annually."
    },
    {
        title: "Certified Quality System",
        body: "ISO 9001:2015 quality management across all production. BRCGS Food Safety certification. 12+ controlled checkpoints from intake to shipment."
    },
    {
        title: "Export Experience",
        body: "Operating since 2019 with an established export operation at JNPT Mumbai. 18+ active markets. Full documentation for customs clearance included."
    },
    {
        title: "Regulatory Compliance",
        body: "ISO 14001, ISO 45001, FDA CFR 21, EU 10/2011, BPI Compostable, BSCI — compliance maintained continuously, not just at audit time."
    },
    {
        title: "Workforce Stability",
        body: "380+ employees, 70%+ women. Long-term workforce with deep process knowledge — the consistency that prevents quality variation at scale."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/manufacturing/ManufacturingHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManufacturingHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/manufacturing-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function ManufacturingHero() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative overflow-hidden grain pt-[72px]",
        style: {
            background: "#1D1610"
        },
        "aria-labelledby": "mfg-hero-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        className: "w-full h-full object-cover",
                        style: {
                            opacity: 0.18
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "/videos/hero-background.mp4",
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            background: "linear-gradient(to bottom, rgba(29,22,16,0.5) 0%, rgba(29,22,16,0.85) 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-[2px] w-full",
                style: {
                    background: "linear-gradient(90deg, transparent 0%, #C89A5B 30%, #8C6239 60%, transparent 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-20 lg:pt-24 lg:pb-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[860px]",
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
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                index: "01",
                                label: "Manufacturing"
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            id: "mfg-hero-heading",
                            initial: {
                                opacity: 0,
                                y: 28
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.8,
                                ease: EASE,
                                delay: 0.08
                            },
                            className: "font-display font-light leading-[0.92] mb-8",
                            style: {
                                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                                color: "#F6F1E8"
                            },
                            children: [
                                "Built for",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "not-italic",
                                    style: {
                                        color: "#C89A5B",
                                        fontStyle: "italic",
                                        fontFamily: "inherit"
                                    },
                                    children: "global supply."
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                delay: 0.18
                            },
                            className: "font-sans font-light leading-relaxed max-w-[580px] mb-12",
                            style: {
                                fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                                color: "rgba(230,210,185,0.72)"
                            },
                            children: "From a single manufacturing facility in Mumbai, Biopapro delivers consistent, certified birchwood tableware to 18+ markets worldwide. 100M+ units per month. Every batch documented. Every shipment on schedule."
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                            lineNumber: 70,
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
                                duration: 0.6,
                                ease: EASE,
                                delay: 0.26
                            },
                            className: "grid grid-cols-2 sm:grid-cols-4 gap-px mb-12",
                            style: {
                                background: "#3D2E22",
                                border: "1px solid #3D2E22"
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MFG_HERO_STATS"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col px-6 py-5",
                                    style: {
                                        background: "rgba(29,22,16,0.9)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-bold leading-none mb-1.5",
                                            style: {
                                                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                                                color: "#C89A5B"
                                            },
                                            children: s.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans text-[13px] font-medium",
                                            style: {
                                                color: "rgba(230,210,185,0.55)"
                                            },
                                            children: s.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.label, true, {
                                    fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
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
                                duration: 0.6,
                                ease: EASE,
                                delay: 0.34
                            },
                            className: "flex flex-wrap items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors duration-300",
                                    style: {
                                        background: "#4A7A3D",
                                        color: "#F6F1E8"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.background = "#2D5228",
                                    onMouseLeave: (e)=>e.currentTarget.style.background = "#4A7A3D",
                                    children: [
                                        "Request Export Quote",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 13,
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#production",
                                    className: "font-sans text-[13px] transition-colors duration-200",
                                    style: {
                                        color: "rgba(230,210,185,0.5)"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.color = "rgba(230,210,185,0.9)",
                                    onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(230,210,185,0.5)",
                                    children: "See how we manufacture →"
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/manufacturing/ManufacturingHero.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(ManufacturingHero, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ManufacturingHero;
var _c;
__turbopack_context__.k.register(_c, "ManufacturingHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/manufacturing/CapabilityOverview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CapabilityOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/manufacturing-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function CapabilityOverview() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#F6F1E8"
        },
        className: "paper",
        "aria-labelledby": "capability-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
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
                                index: "02",
                                label: "Capability Overview"
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "capability-heading",
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    animate: inView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.7,
                                        ease: EASE,
                                        delay: 0.08
                                    },
                                    className: "font-display font-light text-ink leading-[0.95]",
                                    style: {
                                        fontSize: "clamp(2rem, 3.5vw, 3.2rem)"
                                    },
                                    children: [
                                        "Investor-grade",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "manufacturing facts."
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
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
                                        duration: 0.68,
                                        ease: EASE,
                                        delay: 0.16
                                    },
                                    className: "font-sans font-light text-ink-light leading-relaxed flex items-center",
                                    style: {
                                        fontSize: "clamp(1rem, 1.1vw, 1.05rem)"
                                    },
                                    children: "A complete picture of Biopapro's manufacturing and export capability — facility, workforce, certifications, capacity, and logistics in one view."
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px",
                    style: {
                        background: "#DDD3C5",
                        border: "1px solid #DDD3C5"
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAPABILITY_METRICS"].map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.5,
                                ease: EASE,
                                delay: 0.1 + i * 0.05
                            },
                            className: "flex flex-col px-7 py-6",
                            style: {
                                background: "#F6F1E8"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-2",
                                    children: m.label
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-sans font-medium text-ink leading-snug",
                                    style: {
                                        fontSize: "clamp(0.9rem, 1.1vw, 1rem)"
                                    },
                                    children: m.value
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, m.label, true, {
                            fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0
                    },
                    animate: inView ? {
                        opacity: 1
                    } : {},
                    transition: {
                        duration: 0.6,
                        ease: EASE,
                        delay: 0.6
                    },
                    className: "mt-8 font-sans text-[14px] text-ink-muted leading-relaxed max-w-2xl",
                    children: "All figures reflect current production capacity at Biopapro's Mumbai facility. Certifications are maintained continuously — not only at audit intervals. Independent audit reports available on request."
                }, void 0, false, {
                    fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/manufacturing/CapabilityOverview.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(CapabilityOverview, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = CapabilityOverview;
var _c;
__turbopack_context__.k.register(_c, "CapabilityOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/manufacturing/ProductionJourney.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductionJourney
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/manufacturing-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function ProductionJourney() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "production",
        style: {
            background: "#EFE6D7"
        },
        "aria-labelledby": "journey-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-14",
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
                                index: "03",
                                label: "Production Journey"
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "journey-heading",
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    animate: inView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.7,
                                        ease: EASE,
                                        delay: 0.08
                                    },
                                    className: "font-display font-light text-ink leading-[0.95]",
                                    style: {
                                        fontSize: "clamp(2rem, 3.5vw, 3.2rem)"
                                    },
                                    children: [
                                        "From certified supply",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "to your warehouse."
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
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
                                        duration: 0.68,
                                        ease: EASE,
                                        delay: 0.16
                                    },
                                    className: "font-sans font-light text-ink-light leading-relaxed flex items-center",
                                    style: {
                                        fontSize: "clamp(1rem, 1.1vw, 1.05rem)"
                                    },
                                    children: "Biopapro's production model begins with certified semi-finished birchwood from approved suppliers and ends with a fully documented container at your port. Six controlled stages. No shortcuts."
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTION_STEPS"].map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.6,
                                ease: EASE,
                                delay: 0.1 + i * 0.08
                            },
                            className: "relative p-6",
                            style: {
                                background: "#FBF8F2",
                                border: "1px solid #DDD3C5"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-bold leading-none",
                                            style: {
                                                fontSize: "clamp(2rem, 3vw, 2.6rem)",
                                                color: "rgba(200,154,91,0.18)"
                                            },
                                            children: step.step
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1",
                                            style: {
                                                background: step.accent === "#4A7A3D" ? "rgba(74,122,61,0.1)" : "rgba(200,154,91,0.1)",
                                                border: "1px solid ".concat(step.accent, "33"),
                                                color: step.accent === "#4A7A3D" ? "#4A7A3D" : "#8C6239"
                                            },
                                            children: step.tag
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-sans font-semibold text-ink mb-3 leading-snug",
                                    style: {
                                        fontSize: "clamp(1rem, 1.2vw, 1.1rem)"
                                    },
                                    children: step.title
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans font-light text-ink-light leading-relaxed",
                                    style: {
                                        fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)"
                                    },
                                    children: step.body
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                i < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTION_STEPS"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M8 12h8M13 8l4 4-4 4",
                                            stroke: "#C89A5B",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            opacity: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, step.step, true, {
                            fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/manufacturing/ProductionJourney.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(ProductionJourney, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ProductionJourney;
var _c;
__turbopack_context__.k.register(_c, "ProductionJourney");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/manufacturing/QualityAssurance.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QualityAssurance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/manufacturing-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const STAGE_COLORS = {
    "Pre-Production": "#C89A5B",
    "In-Process": "#8C6239",
    "Post-Production": "#4A7A3D",
    "Food Safety": "#4A7A3D",
    "Packaging": "#C89A5B",
    "Pre-Shipment": "#C89A5B"
};
function QualityAssurance() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    // Group checkpoints by stage
    const stages = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QA_CHECKPOINTS"].map((c)=>c.stage)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#1D1610"
        },
        className: "grain",
        "aria-labelledby": "qa-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-14",
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
                                index: "04",
                                label: "Quality Assurance"
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "qa-heading",
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    animate: inView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.7,
                                        ease: EASE,
                                        delay: 0.08
                                    },
                                    className: "font-display font-light leading-[0.95]",
                                    style: {
                                        fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                                        color: "#F6F1E8"
                                    },
                                    children: [
                                        "Every shipment",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "controlled and repeatable."
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
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
                                        duration: 0.68,
                                        ease: EASE,
                                        delay: 0.16
                                    },
                                    className: "font-sans font-light leading-relaxed flex items-center",
                                    style: {
                                        fontSize: "clamp(1rem, 1.1vw, 1.05rem)",
                                        color: "rgba(230,210,185,0.70)"
                                    },
                                    children: "ISO 9001:2015 certified quality management. BRCGS Food Safety certified. 12+ controlled checkpoints from material intake to container loading — each one documented and signed off before the next stage begins."
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: inView ? {
                                        opacity: 1
                                    } : {},
                                    transition: {
                                        duration: 0.5,
                                        ease: EASE,
                                        delay: 0.2
                                    },
                                    className: "font-sans text-[12px] font-semibold uppercase tracking-[0.12em] mb-5",
                                    style: {
                                        color: "rgba(200,154,91,0.65)"
                                    },
                                    children: "Operational Capabilities"
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FACTORY_CAPABILITIES"].map((cap, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: -12
                                            },
                                            animate: inView ? {
                                                opacity: 1,
                                                x: 0
                                            } : {},
                                            transition: {
                                                duration: 0.5,
                                                ease: EASE,
                                                delay: 0.2 + i * 0.07
                                            },
                                            className: "p-5",
                                            style: {
                                                border: "1px solid #3D2E22",
                                                background: "rgba(255,255,255,0.02)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between gap-4 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-sans font-semibold text-[15px]",
                                                            style: {
                                                                color: "#F6F1E8"
                                                            },
                                                            children: cap.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[11px] px-2.5 py-1 flex-shrink-0",
                                                            style: {
                                                                background: "rgba(200,154,91,0.1)",
                                                                border: "1px solid rgba(200,154,91,0.25)",
                                                                color: "#C89A5B"
                                                            },
                                                            children: cap.metric
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-sans text-[14px] leading-relaxed",
                                                    style: {
                                                        color: "rgba(230,210,185,0.65)"
                                                    },
                                                    children: cap.body
                                                }, void 0, false, {
                                                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, cap.id, true, {
                                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: inView ? {
                                        opacity: 1
                                    } : {},
                                    transition: {
                                        duration: 0.5,
                                        ease: EASE,
                                        delay: 0.2
                                    },
                                    className: "font-sans text-[12px] font-semibold uppercase tracking-[0.12em] mb-5",
                                    style: {
                                        color: "rgba(200,154,91,0.65)"
                                    },
                                    children: "Quality Checkpoints — 12 per batch"
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-6",
                                    children: stages.map((stage, si)=>{
                                        const checks = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QA_CHECKPOINTS"].filter((c)=>c.stage === stage);
                                        var _STAGE_COLORS_stage;
                                        const color = (_STAGE_COLORS_stage = STAGE_COLORS[stage]) !== null && _STAGE_COLORS_stage !== void 0 ? _STAGE_COLORS_stage : "#C89A5B";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: 12
                                            },
                                            animate: inView ? {
                                                opacity: 1,
                                                x: 0
                                            } : {},
                                            transition: {
                                                duration: 0.5,
                                                ease: EASE,
                                                delay: 0.25 + si * 0.08
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 rounded-full flex-shrink-0",
                                                            style: {
                                                                background: color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-sans text-[12px] font-semibold uppercase tracking-[0.1em]",
                                                            style: {
                                                                color
                                                            },
                                                            children: stage
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-2 pl-4",
                                                    style: {
                                                        borderLeft: "1px solid ".concat(color, "33")
                                                    },
                                                    children: checks.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-sans text-[13px] leading-snug",
                                                            style: {
                                                                color: "rgba(230,210,185,0.65)"
                                                            },
                                                            children: c.check
                                                        }, c.check, false, {
                                                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, stage, true, {
                                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/manufacturing/QualityAssurance.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(QualityAssurance, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = QualityAssurance;
var _c;
__turbopack_context__.k.register(_c, "QualityAssurance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/manufacturing/WorkforceSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkforceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const EASE = [
    0.16,
    1,
    0.3,
    1
];
const WORKFORCE_POINTS = [
    {
        title: "Skilled Operators",
        body: "Every production line is staffed by operators trained across material inspection, finishing, QC, packaging, and export preparation. Deep process knowledge at every stage."
    },
    {
        title: "70%+ Women Workforce",
        body: "More than 70% of Biopapro's 380+ employees are women. This is not a statistic — it is a structural commitment to workforce inclusion that has been consistent since founding."
    },
    {
        title: "Long-Term Stability",
        body: "Consistent workforce means consistent quality. Operators who have worked through hundreds of production runs carry the process knowledge that prevents variation at scale."
    },
    {
        title: "BSCI Audited",
        body: "Independent amfori BSCI social compliance audit verified. Labour rights, fair wages, workplace safety, and working hours are audited — not self-reported."
    }
];
function WorkforceSection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#FBF8F2"
        },
        className: "paper",
        "aria-labelledby": "workforce-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "lg:col-span-5",
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: inView ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: 0.8,
                            ease: EASE,
                            delay: 0.1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden",
                            style: {
                                aspectRatio: "4/5",
                                background: "#1D1610"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    autoPlay: true,
                                    muted: true,
                                    loop: true,
                                    playsInline: true,
                                    className: "absolute inset-0 w-full h-full object-cover",
                                    style: {
                                        opacity: 0.9
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                        src: "/videos/Manufacturing page women working.mp4",
                                        type: "video/mp4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 px-6 py-5",
                                    style: {
                                        background: "linear-gradient(to top, rgba(29,22,16,0.88) 0%, transparent 100%)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono font-bold text-[2rem] leading-none",
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "70%+"
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans text-[14px] mt-1",
                                            style: {
                                                color: "rgba(246,241,232,0.8)"
                                            },
                                            children: "Women in workforce"
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7",
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
                                    index: "05",
                                    label: "Our Workforce"
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                id: "workforce-heading",
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.7,
                                    ease: EASE,
                                    delay: 0.08
                                },
                                className: "font-display font-light text-ink leading-[0.95] mb-6",
                                style: {
                                    fontSize: "clamp(2rem, 3.2vw, 3rem)"
                                },
                                children: [
                                    "The people behind",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#C89A5B"
                                        },
                                        children: "every shipment."
                                    }, void 0, false, {
                                        fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                lineNumber: 78,
                                columnNumber: 13
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
                                    duration: 0.68,
                                    ease: EASE,
                                    delay: 0.16
                                },
                                className: "font-sans font-light text-ink-light leading-relaxed mb-10",
                                style: {
                                    fontSize: "clamp(1rem, 1.1vw, 1.05rem)"
                                },
                                children: "380+ employees work across material inspection, manufacturing, quality control, and export operations. The consistency of Biopapro's output is inseparable from the people who produce it — many of whom have been with the company since its founding in 2019."
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children: WORKFORCE_POINTS.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 12
                                        },
                                        animate: inView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            duration: 0.5,
                                            ease: EASE,
                                            delay: 0.22 + i * 0.07
                                        },
                                        className: "p-5",
                                        style: {
                                            background: "#F6F1E8",
                                            border: "1px solid #DDD3C5"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-sans font-semibold text-ink mb-2",
                                                style: {
                                                    fontSize: "15px"
                                                },
                                                children: point.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans text-[14px] text-ink-light leading-relaxed",
                                                children: point.body
                                            }, void 0, false, {
                                                fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, point.title, true, {
                                        fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/manufacturing/WorkforceSection.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(WorkforceSection, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = WorkforceSection;
var _c;
__turbopack_context__.k.register(_c, "WorkforceSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/manufacturing/ExportOperations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExportOperations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/manufacturing-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const LOGISTICS_STEPS = [
    {
        step: "01",
        title: "Order Confirmation",
        body: "Purchase order confirmed. Production schedule allocated. Export documentation preparation begins in parallel with manufacturing."
    },
    {
        step: "02",
        title: "Production & Packaging",
        body: "Units manufactured, QC-cleared, and packed into OPP bags and export cartons. Cartons optimised for container fill to minimise freight cost."
    },
    {
        step: "03",
        title: "Documentation Package",
        body: "FSC® certificate, phytosanitary certificate, certificate of origin, commercial invoice, and packing list issued. Compliance declarations prepared on request."
    },
    {
        step: "04",
        title: "Container Loading",
        body: "Palletised cartons loaded at JNPT Mumbai — India's largest container port. FCL (20ft / 40ft) or LCL consolidation. Container seal number issued."
    },
    {
        step: "05",
        title: "Ocean Freight",
        body: "Container departs Mumbai on scheduled service. Bill of lading issued. Tracking reference provided. Transit: 10–35 days depending on destination."
    },
    {
        step: "06",
        title: "Delivery",
        body: "Container arrives at destination port with full documentation for customs clearance. Phytosanitary and origin certificates accepted in all 18+ active markets."
    }
];
function ExportOperations() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#EFE6D7"
        },
        "aria-labelledby": "export-ops-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-14",
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
                                index: "06",
                                label: "Export Operations"
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "export-ops-heading",
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    animate: inView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.7,
                                        ease: EASE,
                                        delay: 0.08
                                    },
                                    className: "font-display font-light text-ink leading-[0.95]",
                                    style: {
                                        fontSize: "clamp(2rem, 3.5vw, 3.2rem)"
                                    },
                                    children: [
                                        "Export operations",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "built for scale."
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
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
                                        duration: 0.68,
                                        ease: EASE,
                                        delay: 0.16
                                    },
                                    className: "font-sans font-light text-ink-light leading-relaxed flex items-center",
                                    style: {
                                        fontSize: "clamp(1rem, 1.1vw, 1.05rem)"
                                    },
                                    children: "From confirmed order to delivered container. Every step in Biopapro's export workflow is documented, tracked, and repeatable across 18+ markets."
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-0",
                            children: LOGISTICS_STEPS.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -12
                                    },
                                    animate: inView ? {
                                        opacity: 1,
                                        x: 0
                                    } : {},
                                    transition: {
                                        duration: 0.5,
                                        ease: EASE,
                                        delay: 0.12 + i * 0.07
                                    },
                                    className: "flex gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                                                    style: {
                                                        background: "#FBF8F2",
                                                        border: "2px solid #C89A5B"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-[10px]",
                                                        style: {
                                                            color: "#C89A5B"
                                                        },
                                                        children: step.step
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this),
                                                i < LOGISTICS_STEPS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-px flex-1 my-1",
                                                    style: {
                                                        background: "#DDD3C5",
                                                        minHeight: 24
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pb-6 flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-sans font-semibold text-ink mb-1.5",
                                                    style: {
                                                        fontSize: "15px"
                                                    },
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-sans text-[14px] text-ink-light leading-relaxed",
                                                    children: step.body
                                                }, void 0, false, {
                                                    fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, step.step, true, {
                                    fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 16
                            },
                            animate: inView ? {
                                opacity: 1,
                                x: 0
                            } : {},
                            transition: {
                                duration: 0.7,
                                ease: EASE,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 h-full",
                                style: {
                                    background: "#FBF8F2",
                                    border: "1px solid #DDD3C5"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted mb-5",
                                        children: "Export Capability Reference"
                                    }, void 0, false, {
                                        fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-0 divide-y",
                                        style: {
                                            borderTop: "1px solid #EDE5D8",
                                            borderBottom: "1px solid #EDE5D8"
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPORT_CAPABILITIES"].map((cap)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row sm:gap-6 py-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-sans text-[12px] font-semibold text-ink-muted flex-shrink-0 sm:w-36 mb-1 sm:mb-0",
                                                        children: cap.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-sans text-[14px] text-ink leading-snug",
                                                        children: cap.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, cap.label, true, {
                                                fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/manufacturing/ExportOperations.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/manufacturing/ExportOperations.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/manufacturing/ExportOperations.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(ExportOperations, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ExportOperations;
var _c;
__turbopack_context__.k.register(_c, "ExportOperations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/manufacturing/ManufacturingMetrics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManufacturingMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/manufacturing-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
function AnimatedNumber(param) {
    let { target, suffix, triggered } = param;
    _s();
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedNumber.useEffect": ()=>{
            if (!triggered) return;
            const duration = 1600;
            const start = performance.now();
            const step = {
                "AnimatedNumber.useEffect.step": (now)=>{
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setDisplay(Math.round(eased * target));
                    if (progress < 1) requestAnimationFrame(step);
                }
            }["AnimatedNumber.useEffect.step"];
            requestAnimationFrame(step);
        }
    }["AnimatedNumber.useEffect"], [
        triggered,
        target
    ]);
    const formatted = display >= 1000 ? display.toLocaleString() : display.toString();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: [
            formatted,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(AnimatedNumber, "iGrsp1ofKEOxzl9YXikV40pdhhg=");
_c = AnimatedNumber;
function ManufacturingMetrics() {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    const numericValue = (raw)=>parseInt(raw.replace(/[^0-9]/g, ""), 10) || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#1D1610"
        },
        className: "grain",
        "aria-labelledby": "metrics-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-20",
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
                            className: "mb-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                index: "07",
                                label: "Manufacturing Metrics"
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-px",
                            style: {
                                background: "#3D2E22",
                                border: "1px solid #3D2E22"
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MFG_METRICS"].map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: inView ? {
                                        opacity: 1
                                    } : {},
                                    transition: {
                                        duration: 0.5,
                                        ease: EASE,
                                        delay: 0.1 + i * 0.08
                                    },
                                    className: "flex flex-col px-7 py-8",
                                    style: {
                                        background: "#1D1610"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            id: "metrics-heading-".concat(i),
                                            className: "font-mono font-bold leading-none mb-3",
                                            style: {
                                                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                                                color: "#C89A5B"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                                                target: numericValue(m.value),
                                                suffix: m.suffix,
                                                triggered: inView
                                            }, void 0, false, {
                                                fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans font-semibold mb-1",
                                            style: {
                                                fontSize: "15px",
                                                color: "#F6F1E8"
                                            },
                                            children: m.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans text-[13px]",
                                            style: {
                                                color: "rgba(230,210,185,0.45)"
                                            },
                                            children: m.sub
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, m.label, true, {
                                    fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
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
                                ease: EASE,
                                delay: 0.3
                            },
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-[12px] font-semibold uppercase tracking-[0.14em]",
                                    style: {
                                        color: "rgba(200,154,91,0.65)"
                                    },
                                    children: "08 · Why Global Buyers Trust Biopapro"
                                }, void 0, false, {
                                    fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "metrics-heading",
                                    className: "font-display font-light leading-[0.95] mt-3",
                                    style: {
                                        fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                                        color: "#F6F1E8"
                                    },
                                    children: [
                                        "Reliable supply.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: " Every time."
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$manufacturing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUYER_TRUST_POINTS"].map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    animate: inView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.55,
                                        ease: EASE,
                                        delay: 0.35 + i * 0.07
                                    },
                                    className: "p-5",
                                    style: {
                                        border: "1px solid #3D2E22",
                                        background: "rgba(255,255,255,0.02)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                                    style: {
                                                        background: "#C89A5B"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-sans font-semibold text-[15px]",
                                                    style: {
                                                        color: "#F6F1E8"
                                                    },
                                                    children: point.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans text-[14px] leading-relaxed",
                                            style: {
                                                color: "rgba(230,210,185,0.65)"
                                            },
                                            children: point.body
                                        }, void 0, false, {
                                            fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, point.title, true, {
                                    fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/manufacturing/ManufacturingMetrics.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s1(ManufacturingMetrics, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = ManufacturingMetrics;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedNumber");
__turbopack_context__.k.register(_c1, "ManufacturingMetrics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/manufacturing/ManufacturingCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManufacturingCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function ManufacturingCTA() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#2D5228"
        },
        "aria-labelledby": "mfg-cta-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                className: "font-sans text-[12px] font-semibold uppercase tracking-[0.18em] mb-5",
                                style: {
                                    color: "rgba(200,230,190,0.55)"
                                },
                                children: "09 · Start the Conversation"
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                id: "mfg-cta-heading",
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
                                    delay: 0.08
                                },
                                className: "font-display font-light leading-[0.92] mb-8",
                                style: {
                                    fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                                    color: "#F6F1E8"
                                },
                                children: "Ready to source at scale?"
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                lineNumber: 31,
                                columnNumber: 13
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
                                    duration: 0.68,
                                    ease: EASE,
                                    delay: 0.16
                                },
                                className: "font-sans font-light leading-relaxed max-w-[500px] mb-10",
                                style: {
                                    fontSize: "clamp(1rem, 1.2vw, 1.05rem)",
                                    color: "rgba(200,230,190,0.75)"
                                },
                                children: "Share your volume requirements and target market. We will respond with production availability, lead times, packaging options, and a preliminary quotation."
                            }, void 0, false, {
                                fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
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
                                    duration: 0.6,
                                    ease: EASE,
                                    delay: 0.22
                                },
                                className: "flex flex-wrap items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "group inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] transition-all duration-300",
                                        style: {
                                            background: "#F6F1E8",
                                            color: "#2D5228"
                                        },
                                        onMouseEnter: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.background = "#FBF8F2";
                                            el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
                                        },
                                        onMouseLeave: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.background = "#F6F1E8";
                                            el.style.boxShadow = "none";
                                        },
                                        children: [
                                            "Request Export Quote",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 13,
                                                strokeWidth: 2.5,
                                                className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                            }, void 0, false, {
                                                fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/certifications",
                                        className: "font-sans text-[13px] transition-colors duration-200",
                                        style: {
                                            color: "rgba(200,230,190,0.65)"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.color = "rgba(200,230,190,1)",
                                        onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(200,230,190,0.65)",
                                        children: "View certifications →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "lg:col-span-5 flex flex-col gap-4",
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: inView ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: 0.7,
                            ease: EASE,
                            delay: 0.2
                        },
                        children: [
                            {
                                label: "India — Manufacturing & Export",
                                contact: "Yash Chandan / Nikunj Bhansali",
                                email: "yash@biopapro.com",
                                phone: "+91 70211 03763",
                                note: "Mumbai HQ · Mon–Sat IST"
                            }
                        ].map((office, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 12
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.55,
                                    ease: EASE,
                                    delay: 0.3 + i * 0.1
                                },
                                className: "p-5",
                                style: {
                                    background: "rgba(255,255,255,0.07)",
                                    border: "1px solid rgba(200,230,190,0.15)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-[11px] font-semibold uppercase tracking-[0.14em] mb-1",
                                        style: {
                                            color: "rgba(200,230,190,0.45)"
                                        },
                                        children: office.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans font-semibold text-[14px] mb-3",
                                        style: {
                                            color: "#F6F1E8"
                                        },
                                        children: office.contact
                                    }, void 0, false, {
                                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:".concat(office.email),
                                                className: "flex items-center gap-2 hover:opacity-80 transition-opacity",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 12,
                                                        style: {
                                                            color: "rgba(200,230,190,0.5)",
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-sans text-[13px]",
                                                        style: {
                                                            color: "rgba(200,230,190,0.70)"
                                                        },
                                                        children: office.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:".concat(office.phone.replace(/\s/g, "")),
                                                className: "flex items-center gap-2 hover:opacity-80 transition-opacity",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 12,
                                                        style: {
                                                            color: "rgba(200,230,190,0.5)",
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-sans text-[13px]",
                                                        style: {
                                                            color: "rgba(200,230,190,0.70)"
                                                        },
                                                        children: office.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-[12px] mt-3",
                                        style: {
                                            color: "rgba(200,230,190,0.35)"
                                        },
                                        children: office.note
                                    }, void 0, false, {
                                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, office.label, true, {
                                fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/manufacturing/ManufacturingCTA.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(ManufacturingCTA, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ManufacturingCTA;
var _c;
__turbopack_context__.k.register(_c, "ManufacturingCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/manufacturing/ManufacturingClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManufacturingClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$ManufacturingHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/manufacturing/ManufacturingHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$CapabilityOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/manufacturing/CapabilityOverview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$ProductionJourney$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/manufacturing/ProductionJourney.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$QualityAssurance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/manufacturing/QualityAssurance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$WorkforceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/manufacturing/WorkforceSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$ExportOperations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/manufacturing/ExportOperations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$ManufacturingMetrics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/manufacturing/ManufacturingMetrics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$ManufacturingCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/manufacturing/ManufacturingCTA.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function ManufacturingClient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$ManufacturingHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/manufacturing/ManufacturingClient.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$CapabilityOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/manufacturing/ManufacturingClient.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$ProductionJourney$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/manufacturing/ManufacturingClient.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$QualityAssurance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/manufacturing/ManufacturingClient.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$WorkforceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/manufacturing/ManufacturingClient.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$ExportOperations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/manufacturing/ManufacturingClient.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$ManufacturingMetrics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/manufacturing/ManufacturingClient.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$manufacturing$2f$ManufacturingCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/manufacturing/ManufacturingClient.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/manufacturing/ManufacturingClient.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ManufacturingClient;
var _c;
__turbopack_context__.k.register(_c, "ManufacturingClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_c4d63a31._.js.map