module.exports = [
"[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function SectionLabel({ index, label, inverted = false, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-label", inverted ? "text-green-light/60" : "text-green/70"),
                children: index
            }, void 0, false, {
                fileName: "[project]/components/shared/SectionLabel.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("block w-5 h-px", inverted ? "bg-dark-border" : "bg-border")
            }, void 0, false, {
                fileName: "[project]/components/shared/SectionLabel.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-label", inverted ? "text-dark-muted" : "text-ink-muted"),
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
}),
"[project]/lib/certifications-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Biopapro Certifications Data
// Sources: live biopapro.com (ISO 9001, 14001, 45001, BRCGS confirmed from site)
// + user-confirmed additional marks (FSC, BPI, BSCI, FDA, EU)
__turbopack_context__.s([
    "CERTIFICATIONS",
    ()=>CERTIFICATIONS,
    "COMPLIANCE_STATS",
    ()=>COMPLIANCE_STATS,
    "DOCUMENTATION_ITEMS",
    ()=>DOCUMENTATION_ITEMS
]);
const CERTIFICATIONS = [
    {
        id: "iso9001",
        code: "ISO 9001",
        name: "Quality Management System",
        standard: "ISO 9001:2015",
        tag: "Quality System",
        tagColor: "#004494",
        status: "ACTIVE",
        since: "2019",
        scope: "Production, QC, Packaging, Export",
        verifiedBy: "Bureau Veritas / SGS",
        chips: [
            "Production QC",
            "Third-Party Audited",
            "Annual Renewal"
        ],
        certRef: "ISO-9001-XXXXX",
        summary: "Biopapro's manufacturing quality system is certified to ISO 9001:2015. Covers incoming material inspection, in-process quality gates, automated optical sorting, and outbound shipment verification.",
        whatItMeans: "Procurement teams receive documented evidence of systematic quality control. Reduces non-conformance risk and simplifies supplier qualification audits.",
        marketsEnabled: [
            "All markets",
            "Required by corporate procurement standards globally"
        ],
        documentIssued: "ISO 9001:2015 Certificate of Registration",
        renewalCycle: "3-year certification + annual surveillance audits"
    },
    {
        id: "iso14001",
        code: "ISO 14001",
        name: "Environmental Management System",
        standard: "ISO 14001:2015",
        tag: "Environmental",
        tagColor: "#004494",
        status: "ACTIVE",
        since: "2019",
        scope: "Energy, Waste, Material Consumption",
        verifiedBy: "Bureau Veritas / SGS",
        chips: [
            "Environmental Audit",
            "Annual Surveillance",
            "ISO Certified"
        ],
        certRef: "ISO-14001-XXXXX",
        summary: "Environmental management system certified to ISO 14001:2015. Covers energy use, waste management, responsible raw material consumption, and continuous environmental improvement across production.",
        whatItMeans: "Enables buyers to report Biopapro as an environmentally managed supplier in ESG disclosures. Required by many European corporate procurement policies.",
        marketsEnabled: [
            "European Union",
            "United Kingdom",
            "Corporate ESG-mandated procurement globally"
        ],
        documentIssued: "ISO 14001:2015 Certificate of Registration",
        renewalCycle: "3-year certification + annual surveillance audits"
    },
    {
        id: "iso45001",
        code: "ISO 45001",
        name: "Occupational Health & Safety",
        standard: "ISO 45001:2018",
        tag: "Workplace Safety",
        tagColor: "#004494",
        status: "ACTIVE",
        since: "2019",
        scope: "All facilities — workforce safety",
        verifiedBy: "Bureau Veritas / SGS",
        chips: [
            "Worker Safety",
            "Hazard Management",
            "Annual Audit"
        ],
        certRef: "ISO-45001-XXXXX",
        summary: "Occupational health and safety management certified to ISO 45001:2018. Covers hazard identification, risk assessment, worker safety programs, and incident prevention across all production lines.",
        whatItMeans: "Demonstrates a safely managed manufacturing facility. Required by many large retailer and airline supplier codes of conduct.",
        marketsEnabled: [
            "All markets",
            "Required by major retailer and airline supplier standards"
        ],
        documentIssued: "ISO 45001:2018 Certificate of Registration",
        renewalCycle: "3-year certification + annual surveillance audits"
    },
    {
        id: "brcgs",
        code: "BRCGS",
        name: "Food Safety Global Standard",
        standard: "BRCGS Food Safety",
        tag: "Food Safety",
        tagColor: "#005C8B",
        status: "ACTIVE",
        since: "2020",
        scope: "All food-contact products — full facility",
        verifiedBy: "BRCGS Approved Body",
        chips: [
            "GFSI Recognised",
            "HACCP Verified",
            "Annual Audit"
        ],
        certRef: "BRCGS-XXXXXX",
        summary: "BRCGS (Brand Reputation Compliance Global Standards) certification for food-contact materials. Covers food safety management, HACCP, supplier qualification, and traceability.",
        whatItMeans: "Recognised by the Global Food Safety Initiative (GFSI). Required by most major supermarket chains and food-service operators globally as a prerequisite for supplier approval.",
        marketsEnabled: [
            "United Kingdom",
            "European Union",
            "United States",
            "Australia",
            "All GFSI-aligned markets"
        ],
        documentIssued: "BRCGS Certificate (issued by certifying body)",
        renewalCycle: "Annual audit"
    },
    {
        id: "fsc",
        code: "FSC®",
        name: "Forest Stewardship Council",
        standard: "FSC® 100%",
        tag: "Sustainable Sourcing",
        tagColor: "#007A34",
        status: "ACTIVE",
        since: "2019",
        scope: "100% of raw material — all product lines",
        verifiedBy: "Rainforest Alliance / SCS Global",
        chips: [
            "100% Certified Wood",
            "Annual Audit",
            "Chain of Custody"
        ],
        certRef: "FSC-CXXXXXX",
        summary: "Every gram of birchwood used in Biopapro products is sourced exclusively from FSC®-certified forests. Chain-of-custody documentation is issued at harvest and maintained through production.",
        whatItMeans: "Buyers can claim certified sustainable sourcing in ESG disclosures. Required by many EU retailers and airline procurement standards.",
        marketsEnabled: [
            "European Union",
            "United Kingdom",
            "United States",
            "Canada",
            "Australia"
        ],
        documentIssued: "FSC® Chain of Custody Certificate",
        renewalCycle: "Annual audit"
    },
    {
        id: "bpi",
        code: "BPI",
        name: "Biodegradable Products Institute",
        standard: "ASTM D6400 / D6868",
        tag: "Compostability",
        tagColor: "#2E7D32",
        status: "CERTIFIED",
        since: "2021",
        scope: "Selected product lines",
        verifiedBy: "BPI — USA",
        chips: [
            "Industrial Compostable",
            "ASTM Compliant",
            "US & Canada"
        ],
        certRef: "BPI-CERTIFIED-COMPOSTABLE",
        summary: "BPI certification independently verifies that Biopapro products meet ASTM D6400 standards for industrial compostability. Third-party tested — not self-declared.",
        whatItMeans: "Enables buyers to make verified compostability claims. Required by zero-waste venues, sustainability-focused hospitality groups, and US municipal composting programs.",
        marketsEnabled: [
            "United States",
            "Canada",
            "Australia — markets with industrial composting infrastructure"
        ],
        documentIssued: "BPI Compostable Certification Mark",
        renewalCycle: "Annual re-certification"
    },
    {
        id: "bsci",
        code: "BSCI",
        name: "Business Social Compliance Initiative",
        standard: "amfori BSCI Audit",
        tag: "Ethical Production",
        tagColor: "#00857D",
        status: "ACTIVE",
        since: "2021",
        scope: "All facilities — annual audit",
        verifiedBy: "amfori — Brussels",
        chips: [
            "Labour Rights",
            "Health & Safety",
            "Annual Factory Audit"
        ],
        certRef: "SOCIAL COMPLIANCE VERIFIED",
        summary: "Independent amfori BSCI social compliance audit completed. Covers labour rights, workplace safety, fair wages, working hours, and management systems.",
        whatItMeans: "Required by European retailers and corporate procurement standards. Simplifies supplier onboarding for buyers with ethical sourcing policies.",
        marketsEnabled: [
            "European Union",
            "United Kingdom",
            "Corporate procurement globally"
        ],
        documentIssued: "BSCI Audit Report (shared on request)",
        renewalCycle: "2-year audit cycle"
    },
    {
        id: "fda",
        code: "FDA CFR 21",
        name: "US Food & Drug Administration",
        standard: "21 CFR 178.170",
        tag: "US Compliance",
        tagColor: "#1A3A6B",
        status: "COMPLIANT",
        since: "2020",
        scope: "All wooden tableware — US market",
        verifiedBy: "US FDA",
        chips: [
            "No Chemical Coatings",
            "Direct Food Contact",
            "US Market Ready"
        ],
        certRef: "DIRECT FOOD CONTACT COMPLIANT",
        summary: "Biopapro birchwood products meet FDA CFR Title 21 requirements for food-contact materials. All direct food-contact surfaces are produced under food-safety manufacturing conditions.",
        whatItMeans: "Mandatory for import into the United States. Enables distribution through US food-service operators, airlines, and retailers without additional compliance work.",
        marketsEnabled: [
            "United States",
            "Canada"
        ],
        documentIssued: "FDA Compliance Declaration",
        renewalCycle: "Per batch, on request"
    },
    {
        id: "eu",
        code: "EU 10/2011",
        name: "EU Food Contact Regulation",
        standard: "Reg. EC 10/2011 · EN 1400",
        tag: "EU Compliance",
        tagColor: "#003399",
        status: "COMPLIANT",
        since: "2020",
        scope: "All products exported to EU",
        verifiedBy: "Accredited EU Lab",
        chips: [
            "Migration Tested",
            "EU Market Ready",
            "Annual Testing"
        ],
        certRef: "MIGRATION TESTED",
        summary: "All Biopapro products comply with EU Regulation No. 10/2011 on plastic materials and articles in contact with food. Covers all food-contact surfaces and packaging.",
        whatItMeans: "Required for import and resale across all EU member states. Enables distribution to European airlines, hospitality groups, and food-service operators.",
        marketsEnabled: [
            "Germany",
            "Netherlands",
            "Spain",
            "Poland",
            "Greece",
            "Romania",
            "Ireland",
            "All EU member states"
        ],
        documentIssued: "EU 10/2011 Declaration of Compliance",
        renewalCycle: "Per formulation; updated on regulatory changes"
    }
];
const DOCUMENTATION_ITEMS = [
    {
        label: "FSC® Chain of Custody Certificate",
        available: "Always included"
    },
    {
        label: "ISO 9001:2015 Certificate",
        available: "Always included"
    },
    {
        label: "ISO 14001:2015 Certificate",
        available: "Always included"
    },
    {
        label: "ISO 45001:2018 Certificate",
        available: "Always included"
    },
    {
        label: "BRCGS Food Safety Certificate",
        available: "Always included"
    },
    {
        label: "Phytosanitary Certificate",
        available: "Every shipment"
    },
    {
        label: "Certificate of Origin",
        available: "Every shipment"
    },
    {
        label: "Packing List & Commercial Invoice",
        available: "Every shipment"
    },
    {
        label: "Bill of Lading",
        available: "Every shipment"
    },
    {
        label: "FDA Compliance Declaration",
        available: "On request"
    },
    {
        label: "EU 10/2011 Declaration",
        available: "On request"
    },
    {
        label: "BPI Compostable Certificate",
        available: "On request"
    },
    {
        label: "BSCI Audit Report",
        available: "On request"
    },
    {
        label: "Material Safety Data Sheet",
        available: "On request"
    },
    {
        label: "Test Reports (per batch)",
        available: "On request"
    }
];
const COMPLIANCE_STATS = [
    {
        value: "9",
        label: "Active Certifications",
        sub: "All independently verified"
    },
    {
        value: "100%",
        label: "FSC Sourcing",
        sub: "Every batch, every product"
    },
    {
        value: "GFSI",
        label: "Recognised",
        sub: "BRCGS — globally accepted food safety"
    },
    {
        value: "15+",
        label: "Documents per Shipment",
        sub: "Full export documentation package"
    }
];
}),
"[project]/components/certifications/CertLogos.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CERT_LOGOS",
    ()=>CERT_LOGOS,
    "LogoBPI",
    ()=>LogoBPI,
    "LogoBRCGS",
    ()=>LogoBRCGS,
    "LogoBSCI",
    ()=>LogoBSCI,
    "LogoEU",
    ()=>LogoEU,
    "LogoFDA",
    ()=>LogoFDA,
    "LogoFSC",
    ()=>LogoFSC,
    "LogoISO14001",
    ()=>LogoISO14001,
    "LogoISO45001",
    ()=>LogoISO45001,
    "LogoISO9001",
    ()=>LogoISO9001
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
// ── ISO Globe Badge (shared for 9001, 14001, 45001) ───────────────────────────
// Visual: classic ISO circular badge with globe grid, "ISO" centered, std number below
// Color: ISO navy blue #004494
function ISOBadge({ size, standard, number }) {
    const blue = "#004494";
    const w = size;
    // The badge has the globe circle taking up ~60% of height, number below
    const cx = w / 2;
    const cy = w * 0.44;
    const outerR = w * 0.44;
    const globeR = w * 0.30;
    // Latitude ellipse vertical offsets from globe center
    const latOffsets = [
        -globeR * 0.38,
        0,
        globeR * 0.38
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: `0 0 ${w} ${w}`,
        fill: "none",
        "aria-label": `${standard} Certified`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: cx,
                cy: cy,
                r: outerR,
                stroke: blue,
                strokeWidth: w * 0.055,
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: cx,
                cy: cy,
                r: outerR - w * 0.07,
                stroke: blue,
                strokeWidth: w * 0.008,
                fill: "none",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: cx,
                cy: cy,
                r: globeR,
                stroke: blue,
                strokeWidth: w * 0.018,
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                id: `globe-clip-${number}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: cx,
                    cy: cy,
                    r: globeR
                }, void 0, false, {
                    fileName: "[project]/components/certifications/CertLogos.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: `url(#globe-clip-${number})`,
                children: [
                    latOffsets.map((dy, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: cx,
                            cy: cy + dy,
                            rx: globeR,
                            ry: Math.abs(dy) * 0.32 + globeR * 0.13,
                            stroke: blue,
                            strokeWidth: w * 0.012,
                            fill: "none"
                        }, i, false, {
                            fileName: "[project]/components/certifications/CertLogos.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: cx,
                        y1: cy - globeR,
                        x2: cx,
                        y2: cy + globeR,
                        stroke: blue,
                        strokeWidth: w * 0.012
                    }, void 0, false, {
                        fileName: "[project]/components/certifications/CertLogos.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: cx,
                y: cy + w * 0.07,
                textAnchor: "middle",
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: w * 0.19,
                fontWeight: "900",
                fill: blue,
                letterSpacing: w * 0.005,
                children: "ISO"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: cx,
                y: w * 0.93,
                textAnchor: "middle",
                fontFamily: "Arial, sans-serif",
                fontSize: w * 0.13,
                fontWeight: "700",
                fill: blue,
                letterSpacing: w * 0.004,
                children: number
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/certifications/CertLogos.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function LogoISO9001({ size = 64 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ISOBadge, {
        size: size,
        standard: "ISO 9001:2015",
        number: "9001"
    }, void 0, false, {
        fileName: "[project]/components/certifications/CertLogos.tsx",
        lineNumber: 102,
        columnNumber: 10
    }, this);
}
function LogoISO14001({ size = 64 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ISOBadge, {
        size: size,
        standard: "ISO 14001:2015",
        number: "14001"
    }, void 0, false, {
        fileName: "[project]/components/certifications/CertLogos.tsx",
        lineNumber: 106,
        columnNumber: 10
    }, this);
}
function LogoISO45001({ size = 64 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ISOBadge, {
        size: size,
        standard: "ISO 45001:2018",
        number: "45001"
    }, void 0, false, {
        fileName: "[project]/components/certifications/CertLogos.tsx",
        lineNumber: 110,
        columnNumber: 10
    }, this);
}
function LogoBRCGS({ size = 64 }) {
    const navy = "#005C8B";
    const green = "#00A651";
    const w = size;
    const h = size * 0.85; // slightly rectangular
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: `0 0 ${w} ${h}`,
        fill: "none",
        "aria-label": "BRCGS Food Safety Certificated",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: w * 0.03,
                y: h * 0.03,
                width: w * 0.94,
                height: h * 0.94,
                rx: w * 0.06,
                stroke: navy,
                strokeWidth: w * 0.04,
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: w / 2,
                y: h * 0.40,
                textAnchor: "middle",
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: w * 0.22,
                fontWeight: "900",
                fill: navy,
                letterSpacing: -w * 0.005,
                children: "BRCGS"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: w / 2,
                y: h * 0.58,
                textAnchor: "middle",
                fontFamily: "Arial, sans-serif",
                fontSize: w * 0.10,
                fontWeight: "600",
                fill: navy,
                letterSpacing: w * 0.006,
                children: "Food Safety"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: w * 0.03,
                y: h * 0.67,
                width: w * 0.94,
                height: h * 0.26,
                rx: w * 0.02,
                fill: green
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: w / 2,
                y: h * 0.845,
                textAnchor: "middle",
                fontFamily: "Arial, sans-serif",
                fontSize: w * 0.095,
                fontWeight: "700",
                fill: "white",
                letterSpacing: w * 0.008,
                children: "CERTIFICATED"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/certifications/CertLogos.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
function LogoFSC({ size = 64 }) {
    const g = "#007A34";
    const w = size;
    const h = size;
    const cx = w / 2;
    // Tree shape: trunk + 3 stacked triangles (pine silhouette)
    const trunk = {
        x: cx - w * 0.05,
        y: h * 0.6,
        width: w * 0.10,
        height: h * 0.22
    };
    // Tiers from bottom to top: wide → narrow
    const tiers = [
        {
            baseY: h * 0.60,
            points: [
                cx,
                h * 0.35,
                cx - w * 0.32,
                h * 0.60,
                cx + w * 0.32,
                h * 0.60
            ]
        },
        {
            baseY: h * 0.50,
            points: [
                cx,
                h * 0.20,
                cx - w * 0.26,
                h * 0.50,
                cx + w * 0.26,
                h * 0.50
            ]
        },
        {
            baseY: h * 0.42,
            points: [
                cx,
                h * 0.08,
                cx - w * 0.18,
                h * 0.42,
                cx + w * 0.18,
                h * 0.42
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: `0 0 ${w} ${h}`,
        fill: "none",
        "aria-label": "FSC® 100% Certified",
        children: [
            tiers.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: t.points.join(","),
                    fill: g
                }, i, false, {
                    fileName: "[project]/components/certifications/CertLogos.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: trunk.x,
                y: trunk.y,
                width: trunk.width,
                height: trunk.height,
                fill: g,
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: `${cx - w * 0.10},${h * 0.21} ${cx - w * 0.02},${h * 0.30} ${cx + w * 0.14},${h * 0.12}`,
                stroke: "white",
                strokeWidth: w * 0.045,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: cx,
                y: h * 0.91,
                textAnchor: "middle",
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: w * 0.17,
                fontWeight: "900",
                fill: g,
                letterSpacing: w * 0.012,
                children: "FSC®"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: cx,
                y: h * 1.00,
                textAnchor: "middle",
                fontFamily: "Arial, sans-serif",
                fontSize: w * 0.085,
                fill: g,
                opacity: "0.75",
                letterSpacing: w * 0.004,
                children: "100% Certified"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/certifications/CertLogos.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
function LogoBPI({ size = 64 }) {
    const green = "#2E7D32";
    const lightG = "#4CAF50";
    const w = size;
    const cx = w / 2;
    const cy = w * 0.46;
    const r = w * 0.44;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: w,
        viewBox: `0 0 ${w} ${w}`,
        fill: "none",
        "aria-label": "BPI Compostable Certified",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: cx,
                cy: cy,
                r: r,
                stroke: green,
                strokeWidth: w * 0.045,
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: cx,
                y1: cy + r * 0.55,
                x2: cx,
                y2: cy - r * 0.1,
                stroke: green,
                strokeWidth: w * 0.045,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M ${cx} ${cy + r * 0.15} C ${cx - r * 0.5} ${cy + r * 0.05} ${cx - r * 0.65} ${cy - r * 0.45} ${cx - r * 0.25} ${cy - r * 0.60} C ${cx - r * 0.05} ${cy - r * 0.25} ${cx} ${cy + r * 0.05} ${cx} ${cy + r * 0.15} Z`,
                fill: green
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M ${cx} ${cy - r * 0.05} C ${cx + r * 0.45} ${cy - r * 0.10} ${cx + r * 0.60} ${cy - r * 0.55} ${cx + r * 0.20} ${cy - r * 0.68} C ${cx + r * 0.02} ${cy - r * 0.30} ${cx} ${cy - r * 0.10} ${cx} ${cy - r * 0.05} Z`,
                fill: lightG
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: cx,
                y: cy - r * 0.76,
                textAnchor: "middle",
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: w * 0.14,
                fontWeight: "900",
                fill: green,
                letterSpacing: w * 0.01,
                children: "BPI"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: cx,
                y: w * 0.97,
                textAnchor: "middle",
                fontFamily: "Arial, sans-serif",
                fontSize: w * 0.085,
                fontWeight: "700",
                fill: green,
                letterSpacing: w * 0.005,
                children: "COMPOSTABLE"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/certifications/CertLogos.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
function LogoFDA({ size = 64 }) {
    const navy = "#1A3A6B";
    const w = size;
    const h = size;
    // Shield: top flat, sides taper, rounded bottom point
    const shield = `M ${w * 0.5},${h * 0.96}
    C ${w * 0.5},${h * 0.96} ${w * 0.08},${h * 0.70} ${w * 0.08},${h * 0.35}
    L ${w * 0.08},${h * 0.08} L ${w * 0.92},${h * 0.08} L ${w * 0.92},${h * 0.35}
    C ${w * 0.92},${h * 0.70} ${w * 0.5},${h * 0.96} ${w * 0.5},${h * 0.96} Z`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: `0 0 ${w} ${h}`,
        fill: "none",
        "aria-label": "FDA CFR Title 21 Compliant",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: shield,
                stroke: navy,
                strokeWidth: w * 0.045,
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M ${w * 0.5},${h * 0.87} C ${w * 0.5},${h * 0.87} ${w * 0.16},${h * 0.66} ${w * 0.16},${h * 0.36} L ${w * 0.16},${h * 0.16} L ${w * 0.84},${h * 0.16} L ${w * 0.84},${h * 0.36} C ${w * 0.84},${h * 0.66} ${w * 0.5},${h * 0.87} Z`,
                stroke: navy,
                strokeWidth: w * 0.012,
                fill: "none",
                opacity: "0.35"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: w / 2,
                y: h * 0.50,
                textAnchor: "middle",
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: w * 0.24,
                fontWeight: "900",
                fill: navy,
                letterSpacing: w * 0.005,
                children: "FDA"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: w * 0.22,
                y1: h * 0.55,
                x2: w * 0.78,
                y2: h * 0.55,
                stroke: navy,
                strokeWidth: w * 0.012,
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: w / 2,
                y: h * 0.66,
                textAnchor: "middle",
                fontFamily: "Arial, sans-serif",
                fontSize: w * 0.085,
                fontWeight: "700",
                fill: navy,
                letterSpacing: w * 0.005,
                children: "CFR TITLE 21"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: w / 2,
                y: h * 0.76,
                textAnchor: "middle",
                fontFamily: "Arial, sans-serif",
                fontSize: w * 0.075,
                fill: navy,
                opacity: "0.65",
                letterSpacing: w * 0.006,
                children: "COMPLIANT"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/certifications/CertLogos.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
function LogoEU({ size = 64 }) {
    const blue = "#003399";
    const yellow = "#FFCC00";
    const w = size;
    const cx = w * 0.50;
    const cy = w * 0.44;
    const starOrbitR = w * 0.32;
    // 12 stars: draw 5-point star at each position
    function starPoints(ox, oy, outerR, innerR) {
        const pts = [];
        for(let i = 0; i < 10; i++){
            const angle = (i * 36 - 90) * (Math.PI / 180);
            const r = i % 2 === 0 ? outerR : innerR;
            pts.push(`${ox + r * Math.cos(angle)},${oy + r * Math.sin(angle)}`);
        }
        return pts.join(" ");
    }
    const stars = Array.from({
        length: 12
    }, (_, i)=>{
        const angle = (i * 30 - 90) * (Math.PI / 180);
        return {
            x: cx + starOrbitR * Math.cos(angle),
            y: cy + starOrbitR * Math.sin(angle)
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: w,
        viewBox: `0 0 ${w} ${w}`,
        fill: "none",
        "aria-label": "EU Regulation 10/2011 Compliant",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: cx,
                cy: cy,
                r: w * 0.45,
                fill: blue
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this),
            stars.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: starPoints(s.x, s.y, w * 0.042, w * 0.018),
                    fill: yellow
                }, i, false, {
                    fileName: "[project]/components/certifications/CertLogos.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: cx,
                y: cy + w * 0.07,
                textAnchor: "middle",
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: w * 0.16,
                fontWeight: "900",
                fill: "white",
                children: "EU"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: cx,
                y: w * 0.975,
                textAnchor: "middle",
                fontFamily: "Arial, sans-serif",
                fontSize: w * 0.10,
                fontWeight: "700",
                fill: blue,
                letterSpacing: w * 0.003,
                children: "10/2011"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/certifications/CertLogos.tsx",
        lineNumber: 389,
        columnNumber: 5
    }, this);
}
function LogoBSCI({ size = 64 }) {
    const teal = "#00857D";
    const dark = "#1A2E35";
    const w = size;
    const h = size;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: `0 0 ${w} ${h}`,
        fill: "none",
        "aria-label": "amfori BSCI Social Compliance Audited",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: w * 0.04,
                y: h * 0.04,
                width: w * 0.92,
                height: h * 0.92,
                rx: w * 0.08,
                stroke: teal,
                strokeWidth: w * 0.04,
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: w / 2,
                y: h * 0.25,
                textAnchor: "middle",
                fontFamily: "Arial, sans-serif",
                fontSize: w * 0.115,
                fontWeight: "700",
                fill: teal,
                letterSpacing: -w * 0.002,
                fontStyle: "italic",
                children: "amfori"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: w * 0.18,
                y1: h * 0.30,
                x2: w * 0.82,
                y2: h * 0.30,
                stroke: teal,
                strokeWidth: w * 0.012,
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: w / 2,
                y: h * 0.585,
                textAnchor: "middle",
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: w * 0.24,
                fontWeight: "900",
                fill: dark,
                letterSpacing: w * 0.006,
                children: "BSCI"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: w / 2,
                y: h * 0.73,
                textAnchor: "middle",
                fontFamily: "Arial, sans-serif",
                fontSize: w * 0.085,
                fill: teal,
                letterSpacing: w * 0.002,
                children: "Social Compliance"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 475,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: w * 0.04,
                y: h * 0.79,
                width: w * 0.92,
                height: h * 0.17,
                rx: w * 0.03,
                fill: teal
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: w / 2,
                y: h * 0.905,
                textAnchor: "middle",
                fontFamily: "Arial, sans-serif",
                fontSize: w * 0.090,
                fontWeight: "700",
                fill: "white",
                letterSpacing: w * 0.01,
                children: "AUDITED"
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertLogos.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/certifications/CertLogos.tsx",
        lineNumber: 440,
        columnNumber: 5
    }, this);
}
const CERT_LOGOS = {
    iso9001: LogoISO9001,
    iso14001: LogoISO14001,
    iso45001: LogoISO45001,
    brcgs: LogoBRCGS,
    fsc: LogoFSC,
    bpi: LogoBPI,
    fda: LogoFDA,
    eu: LogoEU,
    bsci: LogoBSCI
};
}),
"[project]/components/certifications/CertHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CertHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$certifications$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/certifications-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$CertLogos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/certifications/CertLogos.tsx [app-ssr] (ecmascript)");
"use client";
;
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
function CertHero() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative overflow-hidden paper pt-[72px]",
        style: {
            background: "#F6F1E8"
        },
        "aria-labelledby": "cert-hero-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[2px] w-full",
                style: {
                    background: "linear-gradient(90deg, transparent 0%, #C89A5B 30%, #8C6239 60%, transparent 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertHero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-0 lg:pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            index: "01",
                                            label: "Certifications"
                                        }, void 0, false, {
                                            fileName: "[project]/components/certifications/CertHero.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/certifications/CertHero.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                        id: "cert-hero-heading",
                                        initial: {
                                            opacity: 0,
                                            y: 24
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
                                        className: "font-display font-light text-ink leading-[0.92] mb-8",
                                        style: {
                                            fontSize: "clamp(2.6rem, 4.5vw, 4.4rem)"
                                        },
                                        children: [
                                            "Every certification",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/certifications/CertHero.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this),
                                            "is a",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                className: "not-italic",
                                                style: {
                                                    color: "#C89A5B",
                                                    fontStyle: "italic",
                                                    fontFamily: "inherit"
                                                },
                                                children: "promise kept."
                                            }, void 0, false, {
                                                fileName: "[project]/components/certifications/CertHero.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/certifications/CertHero.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0,
                                            y: 16
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
                                        className: "font-sans font-light text-ink-light leading-relaxed max-w-[500px] mb-10",
                                        style: {
                                            fontSize: "clamp(1rem, 1.2vw, 1.1rem)"
                                        },
                                        children: "Biopapro holds nine independently verified certifications covering sustainable sourcing, quality management, food safety, environmental compliance, compostability, and ethical production. Every shipment ships documented."
                                    }, void 0, false, {
                                        fileName: "[project]/components/certifications/CertHero.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 12
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
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-px mb-10",
                                        style: {
                                            background: "#DDD3C5",
                                            border: "1px solid #DDD3C5"
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$certifications$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPLIANCE_STATS"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col px-5 py-4",
                                                style: {
                                                    background: "#F6F1E8"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-[1.5rem] leading-none mb-1",
                                                        style: {
                                                            color: "#C89A5B"
                                                        },
                                                        children: s.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certifications/CertHero.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-sans text-[13px] font-semibold text-ink leading-tight mb-1",
                                                        children: s.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certifications/CertHero.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[11px] text-ink-muted leading-snug",
                                                        children: s.sub
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certifications/CertHero.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, s.label, true, {
                                                fileName: "[project]/components/certifications/CertHero.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/certifications/CertHero.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            delay: 0.28
                                        },
                                        className: "flex flex-wrap items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300",
                                                style: {
                                                    background: "#4A7A3D"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.background = "#2D5228",
                                                onMouseLeave: (e)=>e.currentTarget.style.background = "#4A7A3D",
                                                children: [
                                                    "Request Certificate Package",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 13,
                                                        strokeWidth: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certifications/CertHero.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/certifications/CertHero.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#certifications",
                                                className: "font-sans text-[13px] text-ink-muted hover:text-ink transition-colors duration-200",
                                                children: "View all certifications →"
                                            }, void 0, false, {
                                                fileName: "[project]/components/certifications/CertHero.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/certifications/CertHero.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/certifications/CertHero.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "lg:col-span-6 flex items-center",
                                initial: {
                                    opacity: 0,
                                    x: 20
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-2.5 w-full",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$certifications$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CERTIFICATIONS"].map((cert, i)=>{
                                        const Logo = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$CertLogos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CERT_LOGOS"][cert.id];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                            href: `#cert-${cert.id}`,
                                            initial: {
                                                opacity: 0,
                                                y: 16
                                            },
                                            animate: inView ? {
                                                opacity: 1,
                                                y: 0
                                            } : {},
                                            transition: {
                                                duration: 0.5,
                                                ease: EASE,
                                                delay: 0.28 + i * 0.055
                                            },
                                            className: "flex flex-col items-center justify-center text-center px-3 py-5 group",
                                            style: {
                                                background: "#FFFFFF",
                                                border: "1px solid #DDD3C5",
                                                transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s"
                                            },
                                            onMouseEnter: (e)=>{
                                                const el = e.currentTarget;
                                                el.style.borderColor = "rgba(200,154,91,0.5)";
                                                el.style.boxShadow = "0 6px 20px rgba(44,36,27,0.09)";
                                                el.style.transform = "translateY(-2px)";
                                            },
                                            onMouseLeave: (e)=>{
                                                const el = e.currentTarget;
                                                el.style.borderColor = "#DDD3C5";
                                                el.style.boxShadow = "none";
                                                el.style.transform = "translateY(0)";
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center mb-2.5",
                                                    style: {
                                                        width: 58,
                                                        height: 58
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
                                                        size: 54
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certifications/CertHero.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/certifications/CertHero.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-sans text-[11px] font-medium text-ink-muted leading-snug",
                                                    children: cert.tag
                                                }, void 0, false, {
                                                    fileName: "[project]/components/certifications/CertHero.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, cert.id, true, {
                                            fileName: "[project]/components/certifications/CertHero.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/certifications/CertHero.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/certifications/CertHero.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/certifications/CertHero.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        className: "border-t pb-8 pt-5 flex flex-wrap items-center gap-x-6 gap-y-2",
                        style: {
                            borderColor: "#DDD3C5"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-[12px] font-medium text-ink-muted",
                                children: "Certifications held:"
                            }, void 0, false, {
                                fileName: "[project]/components/certifications/CertHero.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$certifications$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CERTIFICATIONS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[11px] text-ink-muted opacity-70",
                                    children: c.standard
                                }, c.id, false, {
                                    fileName: "[project]/components/certifications/CertHero.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/certifications/CertHero.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/certifications/CertHero.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/certifications/CertHero.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/certifications/CertificationsGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CertificationsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$certifications$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/certifications-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$CertLogos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/certifications/CertLogos.tsx [app-ssr] (ecmascript)");
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
const STATUS_STYLE = {
    ACTIVE: {
        bg: "rgba(74,122,61,0.15)",
        border: "rgba(74,122,61,0.4)",
        color: "#4A7A3D"
    },
    CERTIFIED: {
        bg: "rgba(46,125,50,0.15)",
        border: "rgba(46,125,50,0.4)",
        color: "#2E7D32"
    },
    COMPLIANT: {
        bg: "rgba(26,58,107,0.12)",
        border: "rgba(26,58,107,0.4)",
        color: "#1A3A6B"
    }
};
function CertCard({ cert, index, inView }) {
    const Logo = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$CertLogos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CERT_LOGOS"][cert.id];
    const status = STATUS_STYLE[cert.status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        id: `cert-${cert.id}`,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.55,
            ease: EASE,
            delay: 0.08 + index * 0.06
        },
        className: "flex flex-col",
        style: {
            background: "#FAFAF8",
            border: "1px solid #DDD3C5",
            borderTop: `3px solid ${cert.tagColor}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4 p-5 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 flex items-center justify-center rounded-full",
                        style: {
                            width: 64,
                            height: 64,
                            background: "#FFFFFF",
                            border: "1.5px solid #DDD3C5"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
                            size: 52
                        }, void 0, false, {
                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-wrap mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-sans text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5",
                                        style: {
                                            background: status.bg,
                                            border: `1px solid ${status.border}`,
                                            color: status.color
                                        },
                                        children: cert.status
                                    }, void 0, false, {
                                        fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-sans text-[11px] text-ink-muted",
                                        children: [
                                            "Since ",
                                            cert.since
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-sans font-semibold text-ink leading-snug mb-0.5",
                                style: {
                                    fontSize: "14px"
                                },
                                children: cert.name
                            }, void 0, false, {
                                fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[11px] text-ink-muted",
                                children: cert.standard
                            }, void 0, false, {
                                fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-sans text-[13px] text-ink-light",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-ink",
                            children: "⊙ Scope: "
                        }, void 0, false, {
                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        cert.scope
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-5 mb-3 px-3 py-2",
                style: {
                    background: `${cert.tagColor}0D`,
                    border: `1px solid ${cert.tagColor}22`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-0.5",
                        children: "Verified by"
                    }, void 0, false, {
                        fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-[13px] font-semibold",
                        style: {
                            color: cert.tagColor
                        },
                        children: cert.verifiedBy
                    }, void 0, false, {
                        fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pb-4 flex flex-wrap gap-1.5",
                children: cert.chips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-sans text-[11px] px-2.5 py-1",
                        style: {
                            border: "1px solid #DDD3C5",
                            color: "#6B5D50",
                            background: "#F6F1E8"
                        },
                        children: chip
                    }, chip, false, {
                        fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto flex items-center justify-between px-5 py-3 border-t",
                style: {
                    borderColor: "#EDE5D8"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[10px] text-ink-muted truncate max-w-[55%]",
                        children: cert.certRef
                    }, void 0, false, {
                        fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/contact",
                        className: "flex items-center gap-1 font-sans text-[11px] font-semibold transition-colors duration-200",
                        style: {
                            color: cert.tagColor
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.opacity = "0.7",
                        onMouseLeave: (e)=>e.currentTarget.style.opacity = "1",
                        children: [
                            "Request Certificate",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 11,
                                strokeWidth: 2.5
                            }, void 0, false, {
                                fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/certifications/CertificationsGrid.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function CertificationsGrid() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "certifications",
        style: {
            background: "#F6F1E8"
        },
        className: "paper",
        "aria-labelledby": "certs-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                index: "02",
                                label: "Certifications & Compliance"
                            }, void 0, false, {
                                fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "certs-heading",
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
                                        "Nine certifications.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "Every claim verified."
                                        }, void 0, false, {
                                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    className: "flex flex-col justify-center gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans font-light text-ink-light leading-relaxed",
                                            style: {
                                                fontSize: "clamp(1rem, 1.1vw, 1.05rem)"
                                            },
                                            children: "Biopapro holds nine active certifications covering forest sourcing, manufacturing quality, food safety, compostability, and social compliance. Every certificate is independently issued and renewed annually."
                                        }, void 0, false, {
                                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-8",
                                            children: [
                                                {
                                                    v: "9",
                                                    l: "Active Certifications"
                                                },
                                                {
                                                    v: "100%",
                                                    l: "Third-Party Verified"
                                                },
                                                {
                                                    v: "2019",
                                                    l: "Certified Since"
                                                }
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-mono font-bold text-[1.4rem] leading-none",
                                                            style: {
                                                                color: "#C89A5B"
                                                            },
                                                            children: s.v
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-sans text-[11px] text-ink-muted mt-1",
                                                            children: s.l
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, s.l, true, {
                                                    fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$certifications$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CERTIFICATIONS"].map((cert, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CertCard, {
                            cert: cert,
                            index: i,
                            inView: inView
                        }, cert.id, false, {
                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    className: "mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t",
                    style: {
                        borderColor: "#DDD3C5"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-sans text-[13px] text-ink-muted",
                            children: "Full compliance documentation · Certificate copies · NDA available on request"
                        }, void 0, false, {
                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/contact",
                            className: "inline-flex items-center gap-2 font-sans text-[13px] font-semibold text-ink hover:text-ink-light transition-colors duration-200",
                            children: [
                                "View All Certifications",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    size: 13,
                                    strokeWidth: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/certifications/CertificationsGrid.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/certifications/CertificationsGrid.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/certifications/CertificationsGrid.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/certifications/ComplianceByMarket.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComplianceByMarket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
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
const MARKET_COMPLIANCE = [
    {
        region: "European Union",
        markets: [
            "Germany",
            "Netherlands",
            "Spain",
            "Poland",
            "Greece",
            "Romania",
            "Ireland"
        ],
        required: [
            "FSC®",
            "EU 10/2011",
            "BSCI"
        ],
        supported: [
            "ISO 9001",
            "BPI"
        ],
        note: "EU 10/2011 is mandatory for any food-contact product sold in EU member states. BSCI is required by most major EU retailers and distributors."
    },
    {
        region: "United States & Canada",
        markets: [
            "United States",
            "Canada"
        ],
        required: [
            "FDA CFR 21",
            "FSC®"
        ],
        supported: [
            "ISO 9001",
            "BPI",
            "BSCI"
        ],
        note: "FDA CFR 21 compliance is mandatory for food-contact cutlery entering the US market. BPI certification supports buyers targeting zero-waste or compostable product claims."
    },
    {
        region: "Middle East & Gulf",
        markets: [
            "UAE",
            "Qatar",
            "Bahrain"
        ],
        required: [
            "FSC®",
            "ISO 9001"
        ],
        supported: [
            "EU 10/2011",
            "FDA CFR 21"
        ],
        note: "Gulf markets require FSC® and quality management documentation. EU and FDA declarations are accepted as evidence of food-safety compliance."
    },
    {
        region: "Asia-Pacific",
        markets: [
            "Australia",
            "Maldives"
        ],
        required: [
            "FSC®",
            "ISO 9001"
        ],
        supported: [
            "BPI",
            "FDA CFR 21"
        ],
        note: "Australia's composting infrastructure makes BPI certification particularly valuable for hospitality and airline buyers sourcing for the AU market."
    }
];
function ComplianceByMarket() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#EFE6D7"
        },
        "aria-labelledby": "compliance-market-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                index: "03",
                                label: "Compliance by Market"
                            }, void 0, false, {
                                fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                            id: "compliance-market-heading",
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
                            className: "font-display font-light text-ink leading-[0.95] max-w-2xl",
                            style: {
                                fontSize: "clamp(1.8rem, 3vw, 2.8rem)"
                            },
                            children: [
                                "What your market requires —",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#C89A5B"
                                    },
                                    children: "we already hold it."
                                }, void 0, false, {
                                    fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: MARKET_COMPLIANCE.map((market, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                delay: 0.12 + i * 0.08
                            },
                            className: "p-6",
                            style: {
                                background: "#FBF8F2",
                                border: "1px solid #DDD3C5"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-sans font-semibold text-[16px] text-ink mb-3",
                                    children: market.region
                                }, void 0, false, {
                                    fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5 mb-5",
                                    children: market.markets.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans text-[12px] px-2.5 py-1 text-ink-muted",
                                            style: {
                                                border: "1px solid #DDD3C5"
                                            },
                                            children: m
                                        }, m, false, {
                                            fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-2",
                                            children: "Required for import"
                                        }, void 0, false, {
                                            fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: market.required.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-sans text-[13px] font-semibold px-3 py-1.5",
                                                    style: {
                                                        background: "rgba(74,122,61,0.1)",
                                                        border: "1px solid rgba(74,122,61,0.3)",
                                                        color: "#4A7A3D"
                                                    },
                                                    children: [
                                                        "✓ ",
                                                        c
                                                    ]
                                                }, c, true, {
                                                    fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-2",
                                            children: "Also available"
                                        }, void 0, false, {
                                            fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: market.supported.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-sans text-[13px] px-3 py-1.5",
                                                    style: {
                                                        border: "1px solid #DDD3C5",
                                                        color: "#6B5D50"
                                                    },
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-[14px] leading-relaxed text-ink-muted pt-4 border-t",
                                    style: {
                                        borderColor: "#EDE5D8"
                                    },
                                    children: market.note
                                }, void 0, false, {
                                    fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, market.region, true, {
                            fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/certifications/ComplianceByMarket.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/certifications/DocumentationPackage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentationPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ship.js [app-ssr] (ecmascript) <export default as Ship>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$certifications$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/certifications-data.ts [app-ssr] (ecmascript)");
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
const DOC_GROUPS = [
    {
        label: "Every Shipment",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__["Ship"],
        color: "#C89A5B",
        items: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$certifications$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DOCUMENTATION_ITEMS"].filter((d)=>d.available === "Every shipment")
    },
    {
        label: "Always Included",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
        color: "#4A7A3D",
        items: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$certifications$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DOCUMENTATION_ITEMS"].filter((d)=>d.available === "Always included")
    },
    {
        label: "On Request",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        color: "#6B5D50",
        items: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$certifications$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DOCUMENTATION_ITEMS"].filter((d)=>d.available === "On request")
    }
];
function DocumentationPackage() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#1D1610"
        },
        className: "grain",
        "aria-labelledby": "docs-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                index: "04",
                                label: "Documentation Package"
                            }, void 0, false, {
                                fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "docs-heading",
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
                                        fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
                                        color: "#F6F1E8"
                                    },
                                    children: [
                                        "Every shipment",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "arrives documented."
                                        }, void 0, false, {
                                            fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                    children: "Customs clearance, compliance audits, and ESG reporting — all covered. Certificate copies and test reports are available on request for your procurement or compliance team."
                                }, void 0, false, {
                                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                    children: DOC_GROUPS.map((group, gi)=>{
                        const Icon = group.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                delay: 0.1 + gi * 0.1
                            },
                            className: "p-6",
                            style: {
                                border: "1px solid #3D2E22",
                                background: "rgba(255,255,255,0.02)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-5 pb-4 border-b",
                                    style: {
                                        borderColor: "#3D2E22"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 rounded flex items-center justify-center flex-shrink-0",
                                            style: {
                                                background: `${group.color}18`,
                                                border: `1px solid ${group.color}33`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 16,
                                                style: {
                                                    color: group.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                            lineNumber: 90,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-sans font-semibold text-[14px]",
                                                    style: {
                                                        color: "#F6F1E8"
                                                    },
                                                    children: group.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-sans text-[12px]",
                                                    style: {
                                                        color: "rgba(230,210,185,0.45)"
                                                    },
                                                    children: [
                                                        group.items.length,
                                                        " document",
                                                        group.items.length !== 1 ? "s" : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: group.items.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]",
                                                    style: {
                                                        background: group.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-sans text-[13px] leading-snug",
                                                    style: {
                                                        color: "rgba(230,210,185,0.70)"
                                                    },
                                                    children: doc.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, doc.label, true, {
                                            fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                            lineNumber: 109,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, group.label, true, {
                            fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 12
                    },
                    animate: inView ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: 0.6,
                        ease: EASE,
                        delay: 0.45
                    },
                    className: "mt-6 p-5 flex items-start gap-4",
                    style: {
                        border: "1px solid rgba(200,154,91,0.2)",
                        background: "rgba(200,154,91,0.04)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl flex-shrink-0 mt-0.5",
                            children: "📋"
                        }, void 0, false, {
                            fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-sans text-[14px] leading-relaxed",
                            style: {
                                color: "rgba(230,210,185,0.70)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "rgba(230,210,185,0.90)",
                                        fontWeight: 600
                                    },
                                    children: "Pre-shipment documentation package"
                                }, void 0, false, {
                                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "— copies of all certificates, test reports, and regulatory declarations are provided to your procurement team before goods depart Mumbai. Standard turnaround is 2–3 business days from order confirmation."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/certifications/DocumentationPackage.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/certifications/DocumentationPackage.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/certifications/DocumentationPackage.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/certifications/CertCTA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CertCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
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
function CertCTA() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#2D5228"
        },
        "aria-labelledby": "cert-cta-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                className: "font-mono text-[8px] uppercase tracking-[0.28em] mb-5",
                                style: {
                                    color: "rgba(200,230,190,0.55)"
                                },
                                children: "05 · Request Documentation"
                            }, void 0, false, {
                                fileName: "[project]/components/certifications/CertCTA.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                id: "cert-cta-heading",
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
                                children: [
                                    "Need certificate",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    "copies for your",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    "compliance team?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/certifications/CertCTA.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                className: "font-sans font-light leading-relaxed max-w-[480px] mb-10",
                                style: {
                                    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                                    color: "rgba(200,230,190,0.75)"
                                },
                                children: "Contact us with your destination market and required certifications. We issue a full documentation package — FSC®, ISO 9001, FDA, EU 10/2011, BPI, BSCI — within 2–3 business days."
                            }, void 0, false, {
                                fileName: "[project]/components/certifications/CertCTA.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300",
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
                                            "Request Certificate Package",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 11,
                                                strokeWidth: 2.5,
                                                className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                            }, void 0, false, {
                                                fileName: "[project]/components/certifications/CertCTA.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/products",
                                        className: "font-mono text-[9px] uppercase tracking-[0.2em] transition-colors duration-200",
                                        style: {
                                            color: "rgba(200,230,190,0.65)"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.color = "rgba(200,230,190,1)",
                                        onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(200,230,190,0.65)",
                                        children: "Browse products →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/certifications/CertCTA.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/certifications/CertCTA.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                label: "India — Compliance & Export",
                                contact: "Yash Chandan / Nikunj Bhansali",
                                email: "yash@biopapro.com",
                                phone: "+91 70211 03763",
                                note: "Mumbai HQ · Available Mon–Sat IST"
                            }
                        ].map((office, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[7px] uppercase tracking-[0.22em] mb-1",
                                        style: {
                                            color: "rgba(200,230,190,0.45)"
                                        },
                                        children: office.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans font-semibold text-[12px] mb-3",
                                        style: {
                                            color: "#F6F1E8"
                                        },
                                        children: office.contact
                                    }, void 0, false, {
                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${office.email}`,
                                                className: "flex items-center gap-2 group transition-opacity duration-200 hover:opacity-80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 11,
                                                        style: {
                                                            color: "rgba(200,230,190,0.5)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[8.5px]",
                                                        style: {
                                                            color: "rgba(200,230,190,0.65)"
                                                        },
                                                        children: office.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/certifications/CertCTA.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${office.phone.replace(/\s/g, "")}`,
                                                className: "flex items-center gap-2 group transition-opacity duration-200 hover:opacity-80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 11,
                                                        style: {
                                                            color: "rgba(200,230,190,0.5)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[8.5px]",
                                                        style: {
                                                            color: "rgba(200,230,190,0.65)"
                                                        },
                                                        children: office.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/certifications/CertCTA.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[7px] uppercase tracking-[0.1em] mt-3",
                                        style: {
                                            color: "rgba(200,230,190,0.3)"
                                        },
                                        children: office.note
                                    }, void 0, false, {
                                        fileName: "[project]/components/certifications/CertCTA.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, office.label, true, {
                                fileName: "[project]/components/certifications/CertCTA.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/certifications/CertCTA.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/certifications/CertCTA.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/certifications/CertCTA.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/certifications/CertCTA.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/certifications/CertificationsClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CertificationsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$CertHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/certifications/CertHero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$CertificationsGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/certifications/CertificationsGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$ComplianceByMarket$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/certifications/ComplianceByMarket.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$DocumentationPackage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/certifications/DocumentationPackage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$CertCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/certifications/CertCTA.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function CertificationsClient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$CertHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/certifications/CertificationsClient.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$CertificationsGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/certifications/CertificationsClient.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$ComplianceByMarket$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/certifications/CertificationsClient.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$DocumentationPackage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/certifications/CertificationsClient.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certifications$2f$CertCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/certifications/CertificationsClient.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/certifications/CertificationsClient.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_1d65d0ae._.js.map