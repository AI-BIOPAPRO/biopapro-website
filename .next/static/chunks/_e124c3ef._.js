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
"[project]/lib/products-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Biopapro Product Catalog
 * Source: Live audit of biopapro.com — all data is real
 * CDN base: https://biopapro.com/cdn/shop/
 */ __turbopack_context__.s([
    "ALL_CATEGORIES",
    ()=>ALL_CATEGORIES,
    "CERTIFICATIONS_LIST",
    ()=>CERTIFICATIONS_LIST,
    "PRODUCTS",
    ()=>PRODUCTS,
    "PRODUCT_FAMILIES",
    ()=>PRODUCT_FAMILIES,
    "getFamilyByCategory",
    ()=>getFamilyByCategory,
    "getProductById",
    ()=>getProductById,
    "getProductsByCategory",
    ()=>getProductsByCategory
]);
const ALL_CATEGORIES = [
    "Forks",
    "Spoons",
    "Knives",
    "Sporks",
    "Stirrers",
    "Scoops",
    "Skewers",
    "Sets",
    "Paper Straws"
];
const CDN = "https://biopapro.com/cdn/shop";
const PRODUCTS = [
    // ── FORKS ──────────────────────────────────────────────────────────────────
    {
        id: "fork-140",
        name: "Wooden Fork 140mm",
        slug: "woodenfork140mm",
        category: "Forks",
        length: "140mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Compact 140mm birchwood fork for airline meals, fast-casual dining, and travel catering. Heat-resistant and food-safe.",
        applications: [
            "Airlines",
            "Fast casual",
            "Travel catering",
            "Cafeterias"
        ],
        primaryImage: "".concat(CDN, "/products/W7_1_30fe1a1f-efc4-40cf-898a-7ae32de521a6.jpg?v=1665051997"),
        galleryImages: [
            "".concat(CDN, "/products/W7_1_30fe1a1f-efc4-40cf-898a-7ae32de521a6.jpg?v=1665051997"),
            "".concat(CDN, "/products/NewProject_9_c90d3596-22df-4f8a-a02b-1abbd3e0c10a.png?v=1665051997"),
            "".concat(CDN, "/products/G39_1_dd03fd77-6488-4628-837d-eacfae7bee68.jpg?v=1665051997")
        ]
    },
    {
        id: "fork-160",
        name: "Wooden Fork 160mm",
        slug: "woodenfork160mm",
        category: "Forks",
        length: "160mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Standard 160mm birchwood fork for restaurants, hospitality, and food service. The most popular fork size for dine-in and takeaway.",
        applications: [
            "Restaurants",
            "Hotels",
            "Food service",
            "Catering"
        ],
        primaryImage: "".concat(CDN, "/products/W7_1_713c7c76-f698-4bb9-9de4-1d75c61e9853.jpg"),
        galleryImages: [
            "".concat(CDN, "/products/W7_1_713c7c76-f698-4bb9-9de4-1d75c61e9853.jpg"),
            "".concat(CDN, "/products/NewProject_9_143a7464-1d51-4229-aeae-ca3d69539708.png"),
            "".concat(CDN, "/products/G39_1_f8528960-81ae-449d-bf2e-423ae76183d6.jpg")
        ],
        highlight: true
    },
    {
        id: "fork-160-packed",
        name: "Individual Packed Fork 160mm",
        slug: "individual-packed-160mm-fork",
        category: "Forks",
        length: "160mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Individually OPP-sleeved 160mm birchwood fork. Hygienic single-unit packaging for premium food service, airline trays, and hotel amenities.",
        applications: [
            "Airlines",
            "Hotels",
            "Premium catering",
            "Healthcare"
        ],
        isIndividuallyPacked: true,
        primaryImage: "".concat(CDN, "/products/W7_1.jpg?v=1665051920"),
        galleryImages: [
            "".concat(CDN, "/products/W7_1.jpg?v=1665051920"),
            "".concat(CDN, "/products/NewProject_9.png?v=1665051920"),
            "".concat(CDN, "/products/G39_1.jpg?v=1665051920")
        ]
    },
    // ── SPOONS ─────────────────────────────────────────────────────────────────
    {
        id: "spoon-110",
        name: "Wooden Spoon 110mm",
        slug: "wooden-spoon-110mm",
        category: "Spoons",
        length: "110mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Compact 110mm spoon ideal for desserts, ice cream, yogurt, and sampling. Popular with dairy brands and premium dessert concepts.",
        applications: [
            "Dairy",
            "Ice cream",
            "Desserts",
            "Sampling"
        ],
        primaryImage: "".concat(CDN, "/products/W3_1_7b597730-c22b-4b48-aec6-867408a3080d.jpg"),
        galleryImages: [
            "".concat(CDN, "/products/W3_1_7b597730-c22b-4b48-aec6-867408a3080d.jpg")
        ]
    },
    {
        id: "spoon-140",
        name: "Wooden Spoon 140mm",
        slug: "wooden-spoon-140mm",
        category: "Spoons",
        length: "140mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Medium 140mm birchwood spoon for soups, breakfast service, and café use. Balanced proportions for optimal user experience.",
        applications: [
            "Cafés",
            "Breakfast",
            "Soups",
            "Airlines"
        ],
        primaryImage: "".concat(CDN, "/products/W3_1_3390b722-b808-4bc3-9398-e09eb12185a8.jpg"),
        galleryImages: [
            "".concat(CDN, "/products/W3_1_3390b722-b808-4bc3-9398-e09eb12185a8.jpg")
        ]
    },
    {
        id: "spoon-160",
        name: "Wooden Spoon 160mm",
        slug: "wooden-spoon-160mm",
        category: "Spoons",
        length: "160mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Full-size 160mm birchwood spoon for restaurants, hospitality, and institutional catering. Heat-resistant for hot food and soup service.",
        applications: [
            "Restaurants",
            "Hotels",
            "Catering",
            "Institutions"
        ],
        primaryImage: "".concat(CDN, "/products/W3_1_ac837677-7a66-4363-bb00-675eb726043d.jpg"),
        galleryImages: [
            "".concat(CDN, "/products/W3_1_ac837677-7a66-4363-bb00-675eb726043d.jpg"),
            "".concat(CDN, "/products/NewProject_8_11a0612f-43bb-4e7f-84ea-48ec0fbde693.png"),
            "".concat(CDN, "/products/G46_1_1b0f0709-fad5-40a6-a9ea-200af8d865d0.jpg")
        ],
        highlight: true
    },
    {
        id: "spoon-110-packed",
        name: "Individual Packed Spoon 110mm",
        slug: "individual-packed-110mm-spoon",
        category: "Spoons",
        length: "110mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Individually OPP-sleeved 110mm birchwood spoon. Hygienically sealed for premium food service, airline meal trays, and hotel room service.",
        applications: [
            "Airlines",
            "Hotels",
            "Healthcare",
            "Premium catering"
        ],
        isIndividuallyPacked: true,
        primaryImage: "".concat(CDN, "/products/W3_1.jpg?v=1665051817"),
        galleryImages: [
            "".concat(CDN, "/products/W3_1.jpg?v=1665051817"),
            "".concat(CDN, "/products/NewProject_8.png?v=1665051817"),
            "".concat(CDN, "/products/G42_1_60482dac-c2a5-4be5-af8d-4eb538db9224.jpg?v=1665051817")
        ]
    },
    // ── KNIVES ─────────────────────────────────────────────────────────────────
    {
        id: "knife-140",
        name: "Wooden Knife 140mm",
        slug: "wooden-knife-140mm",
        category: "Knives",
        length: "140mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Compact 140mm birchwood knife for airline meals, takeaway boxes, and travel catering where a smaller profile is preferred.",
        applications: [
            "Airlines",
            "Takeaway",
            "Travel catering",
            "Cafeterias"
        ],
        primaryImage: "".concat(CDN, "/products/W1_1.jpg?v=1665052308"),
        galleryImages: [
            "".concat(CDN, "/products/W1_1.jpg?v=1665052308"),
            "".concat(CDN, "/products/NewProject_10.png?v=1665052308"),
            "".concat(CDN, "/products/G54_1.jpg?v=1665052308")
        ]
    },
    {
        id: "knife-165",
        name: "Wooden Knife 165mm",
        slug: "woodenknife165mm",
        category: "Knives",
        length: "165mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Full-size 165mm birchwood knife for restaurants, hospitality, and catering. Rigid enough for firm foods while remaining 100% biodegradable.",
        applications: [
            "Restaurants",
            "Hotels",
            "Food service",
            "Catering"
        ],
        primaryImage: "".concat(CDN, "/products/W1_1_beb99461-f1f0-41b4-bf81-20b902898748.jpg"),
        galleryImages: [
            "".concat(CDN, "/products/W1_1_beb99461-f1f0-41b4-bf81-20b902898748.jpg"),
            "".concat(CDN, "/products/NewProject_10_ad844645-1fd5-4387-84e8-da5b80d56a4b.png"),
            "".concat(CDN, "/products/G54_1_0af0e0cd-742b-43e0-b52d-a098954c6df1.jpg")
        ],
        highlight: true
    },
    // ── SPORKS ─────────────────────────────────────────────────────────────────
    {
        id: "spork-140",
        name: "Wooden Spork 140mm",
        slug: "wooden-spork140mm",
        category: "Sporks",
        length: "140mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Compact 140mm spork — spoon and fork combined — for airline meal trays and single-item packaging. Reduces SKUs for operators.",
        applications: [
            "Airlines",
            "Travel catering",
            "Fast casual",
            "Takeaway"
        ],
        primaryImage: "".concat(CDN, "/products/W9_1.png?v=1662714451"),
        galleryImages: [
            "".concat(CDN, "/products/W9_1.png?v=1662714451")
        ],
        highlight: true
    },
    {
        id: "spork-160",
        name: "Wooden Spork 160mm",
        slug: "wooden-spork-160mm",
        category: "Sporks",
        length: "160mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Full-size 160mm spork for restaurants and food delivery concepts looking to reduce their cutlery SKU footprint without compromising usability.",
        applications: [
            "Restaurants",
            "Food delivery",
            "Catering",
            "Institutions"
        ],
        primaryImage: "".concat(CDN, "/products/W9_1_2b4bd9de-74ff-476c-986f-c81e43cb8ec8.png"),
        galleryImages: [
            "".concat(CDN, "/products/W9_1_2b4bd9de-74ff-476c-986f-c81e43cb8ec8.png")
        ]
    },
    // ── STIRRERS ───────────────────────────────────────────────────────────────
    {
        id: "stirrer-110",
        name: "Wooden Stirrer 110mm",
        slug: "wooden-stirrer-190mm",
        category: "Stirrers",
        length: "110mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21"
        ],
        pcsPerBag: 500,
        bagsPerCarton: 100,
        pcsPerCarton: 50000,
        moq: "50,000 pcs",
        shortDescription: "Compact 110mm coffee stirrer for espresso bars, office coffee stations, and compact beverage service. High-volume carton of 50,000 units.",
        applications: [
            "Espresso bars",
            "Offices",
            "Compact cafés",
            "Events"
        ],
        primaryImage: "".concat(CDN, "/products/W20.png?v=1662714572"),
        galleryImages: [
            "".concat(CDN, "/products/W20.png?v=1662714572")
        ]
    },
    {
        id: "stirrer-140",
        name: "Wooden Stirrer 140mm",
        slug: "wooden-stirrer140mm",
        category: "Stirrers",
        length: "140mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21"
        ],
        pcsPerBag: 500,
        bagsPerCarton: 100,
        pcsPerCarton: 50000,
        moq: "50,000 pcs",
        shortDescription: "Standard 140mm coffee stirrer — the most widely used size for specialty coffee, café chains, and quick-service restaurants globally.",
        applications: [
            "Coffee chains",
            "QSR",
            "Hotels",
            "Catering"
        ],
        primaryImage: "".concat(CDN, "/products/W20_f40b8f4a-3ebe-4145-b013-43d53ebb9a1b.png"),
        galleryImages: [
            "".concat(CDN, "/products/W20_f40b8f4a-3ebe-4145-b013-43d53ebb9a1b.png")
        ],
        highlight: true
    },
    {
        id: "stirrer-160",
        name: "Wooden Stirrer 160mm",
        slug: "wooden-stirrer-110mm",
        category: "Stirrers",
        length: "160mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21"
        ],
        pcsPerBag: 500,
        bagsPerCarton: 100,
        pcsPerCarton: 50000,
        moq: "50,000 pcs",
        shortDescription: "Long 160mm stirrer for tall cups, cold brew, and specialty beverages. Perfect for hospitality groups and premium coffee service.",
        applications: [
            "Specialty coffee",
            "Cold brew",
            "Hotels",
            "Premium cafés"
        ],
        primaryImage: "".concat(CDN, "/products/W20_1e981daa-2dc8-4741-947b-bfe64cddb1ce.png"),
        galleryImages: [
            "".concat(CDN, "/products/W20_1e981daa-2dc8-4741-947b-bfe64cddb1ce.png")
        ]
    },
    // ── SCOOPS ─────────────────────────────────────────────────────────────────
    {
        id: "scoop-95",
        name: "Wooden Scoop 95mm",
        slug: "wooden-scoop-95",
        category: "Scoops",
        length: "95mm",
        material: "FSC Birchwood",
        finish: "Natural smooth",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "EU 10/2011"
        ],
        pcsPerBag: 100,
        bagsPerCarton: 100,
        pcsPerCarton: 10000,
        moq: "10,000 pcs",
        shortDescription: "Compact 95mm birchwood scoop for ice cream, gelato, and dry goods sampling. Robust bowl-shaped design for portion control.",
        applications: [
            "Ice cream",
            "Gelato",
            "Sampling",
            "Dry goods"
        ],
        primaryImage: "".concat(CDN, "/products/W43.png?v=1662714289"),
        galleryImages: [
            "".concat(CDN, "/products/W43.png?v=1662714289")
        ]
    },
    // ── SKEWERS ────────────────────────────────────────────────────────────────
    {
        id: "skewer-7cm",
        name: "Gun Skewer 7cm",
        slug: "gun-skewers-7cm",
        category: "Skewers",
        length: "70mm",
        material: "Birchwood",
        finish: "Natural",
        certifications: [
            "FSC®",
            "FDA CFR 21"
        ],
        pcsPerBag: 200,
        bagsPerCarton: 100,
        pcsPerCarton: 20000,
        moq: "20,000 pcs",
        shortDescription: "Compact 7cm gun skewer for canapés, appetizers, and mini-bite presentation. Signature gun-tip shape for professional food styling.",
        applications: [
            "Canapés",
            "Appetizers",
            "Events",
            "Banqueting"
        ],
        primaryImage: "".concat(CDN, "/products/W26_1_105630ca-3689-4bea-8946-706190417455.jpg?v=1664946421"),
        galleryImages: [
            "".concat(CDN, "/products/W26_1_105630ca-3689-4bea-8946-706190417455.jpg?v=1664946421")
        ]
    },
    {
        id: "skewer-10cm",
        name: "Gun Skewer 10cm",
        slug: "gun-skewers-10cm",
        category: "Skewers",
        length: "100mm",
        material: "Birchwood",
        finish: "Natural",
        certifications: [
            "FSC®",
            "FDA CFR 21"
        ],
        pcsPerBag: 200,
        bagsPerCarton: 100,
        pcsPerCarton: 20000,
        moq: "20,000 pcs",
        shortDescription: "Standard 10cm gun skewer for kebabs, brochettes, and grilled street food. Ideal for food courts, events, and QSR grill stations.",
        applications: [
            "Kebabs",
            "Street food",
            "Food courts",
            "Events"
        ],
        primaryImage: "".concat(CDN, "/products/W26_1_ab0c6646-1d0d-4a90-8f4f-ca4e6d0d1639.jpg?v=1664946360"),
        galleryImages: [
            "".concat(CDN, "/products/W26_1_ab0c6646-1d0d-4a90-8f4f-ca4e6d0d1639.jpg?v=1664946360"),
            "".concat(CDN, "/products/G19_ad4bdb4d-80cb-4edd-920b-5f395d8d443e.jpg")
        ],
        highlight: true
    },
    {
        id: "skewer-15cm",
        name: "Gun Skewer 15cm",
        slug: "gun-skewers-15cm",
        category: "Skewers",
        length: "150mm",
        material: "Birchwood",
        finish: "Natural",
        certifications: [
            "FSC®",
            "FDA CFR 21"
        ],
        pcsPerBag: 200,
        bagsPerCarton: 100,
        pcsPerCarton: 20000,
        moq: "20,000 pcs",
        shortDescription: "Mid-size 15cm gun skewer for satay, yakitori, and grill platters. The most popular skewer size for hospitality and banqueting worldwide.",
        applications: [
            "Satay",
            "Yakitori",
            "Grill",
            "Hospitality"
        ],
        primaryImage: "".concat(CDN, "/products/W26_1_b883d15b-dfbf-46ca-b101-9a413464dfd3.jpg"),
        galleryImages: [
            "".concat(CDN, "/products/W26_1_b883d15b-dfbf-46ca-b101-9a413464dfd3.jpg")
        ]
    },
    {
        id: "skewer-21cm",
        name: "Gun Skewer 21cm",
        slug: "gun-skewers-21cm",
        category: "Skewers",
        length: "210mm",
        material: "Birchwood",
        finish: "Natural",
        certifications: [
            "FSC®",
            "FDA CFR 21"
        ],
        pcsPerBag: 200,
        bagsPerCarton: 100,
        pcsPerCarton: 20000,
        moq: "20,000 pcs",
        shortDescription: "Long 21cm gun skewer for grilled meats, BBQ, and churrasco-style service. Robust enough for heavy proteins on professional grills.",
        applications: [
            "BBQ",
            "Churrasco",
            "Grill meats",
            "Street BBQ"
        ],
        primaryImage: "".concat(CDN, "/products/W26_1.jpg?v=1664945885"),
        galleryImages: [
            "".concat(CDN, "/products/W26_1.jpg?v=1664945885")
        ]
    },
    // ── SETS ───────────────────────────────────────────────────────────────────
    {
        id: "set-fork-knife-tissue",
        name: "Set of 3 — Fork, Knife & Tissue",
        slug: "set-of-3-items-fork-knife-and-tisue",
        category: "Sets",
        length: "160mm",
        material: "FSC Birchwood + Kraft Paper",
        finish: "OPP sleeve",
        certifications: [
            "FSC®",
            "FDA CFR 21",
            "BPI Compostable",
            "BSCI Audited"
        ],
        pcsPerBag: 50,
        bagsPerCarton: 10,
        pcsPerCarton: 500,
        moq: "500 sets",
        shortDescription: "Complete 3-piece cutlery set — birchwood fork, knife, and tissue — in a single OPP sleeve. Ready for airline trays, food delivery bags, and hospitality amenity packs.",
        applications: [
            "Airlines",
            "Food delivery",
            "Hotels",
            "Premium takeaway"
        ],
        primaryImage: "".concat(CDN, "/products/G52_1.jpg?v=1664961427"),
        galleryImages: [
            "".concat(CDN, "/products/G52_1.jpg?v=1664961427")
        ],
        highlight: true
    },
    // ── PAPER STRAWS ───────────────────────────────────────────────────────────
    {
        id: "straw-6mm",
        name: "Paper Straws 6mm",
        slug: "6mm-paper-straws",
        category: "Paper Straws",
        length: "197mm",
        material: "Food-grade kraft paper",
        finish: "Natural uncoated",
        certifications: [
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 500,
        bagsPerCarton: 100,
        pcsPerCarton: 50000,
        moq: "50,000 pcs",
        shortDescription: "Standard 6mm diameter paper straw for cold beverages, juices, and smoothies. Holds integrity for up to 3 hours in liquid — suitable for hospitality.",
        applications: [
            "Juice bars",
            "Cafés",
            "Hotels",
            "Restaurants"
        ],
        primaryImage: "".concat(CDN, "/products/W40_1.jpg?v=1665051402"),
        galleryImages: [
            "".concat(CDN, "/products/W40_1.jpg?v=1665051402")
        ]
    },
    {
        id: "straw-8mm",
        name: "Paper Straws 8mm",
        slug: "8-mm-paper-straws",
        category: "Paper Straws",
        length: "197mm",
        material: "Food-grade kraft paper",
        finish: "Natural uncoated",
        certifications: [
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 500,
        bagsPerCarton: 100,
        pcsPerCarton: 50000,
        moq: "50,000 pcs",
        shortDescription: "Wide 8mm paper straw for thick smoothies, milkshakes, and bubble tea. Reinforced multi-layer construction for high-viscosity beverages.",
        applications: [
            "Bubble tea",
            "Milkshakes",
            "Smoothies",
            "QSR"
        ],
        primaryImage: "".concat(CDN, "/products/W38_1.jpg?v=1665051710"),
        galleryImages: [
            "".concat(CDN, "/products/W38_1.jpg?v=1665051710")
        ],
        highlight: true
    },
    {
        id: "straw-10mm",
        name: "Paper Straws 10mm",
        slug: "10mm-paper-straws",
        category: "Paper Straws",
        length: "197mm",
        material: "Food-grade kraft paper",
        finish: "Natural uncoated",
        certifications: [
            "FDA CFR 21",
            "EU 10/2011",
            "BPI Compostable"
        ],
        pcsPerBag: 500,
        bagsPerCarton: 100,
        pcsPerCarton: 50000,
        moq: "50,000 pcs",
        shortDescription: "Extra-wide 10mm paper straw for large-format cold beverages, slushies, and fruit chunks. Preferred by premium beverage concepts.",
        applications: [
            "Slushies",
            "Premium beverages",
            "Fruit drinks",
            "Bars"
        ],
        primaryImage: "".concat(CDN, "/products/W40_1.jpg?v=1665051402"),
        galleryImages: [
            "".concat(CDN, "/products/W40_1.jpg?v=1665051402")
        ]
    }
];
const PRODUCT_FAMILIES = [
    {
        id: "forks",
        category: "Forks",
        headline: "Birchwood Forks",
        description: "Precision-stamped from FSC-certified birchwood. Available in 140mm and 160mm profiles with bulk or individual OPP sleeving options. 10,000 units per export carton.",
        applications: [
            "Airlines",
            "Restaurants",
            "Hotels",
            "Catering"
        ],
        moqRange: "10,000 pcs",
        skuCount: 3,
        heroImage: "".concat(CDN, "/collections/C4_4.png?v=1662374267"),
        sectionId: "forks"
    },
    {
        id: "spoons",
        category: "Spoons",
        headline: "Birchwood Spoons",
        description: "Four sizes: 110mm, 140mm, and 160mm bulk — plus individually sleeved 110mm for premium service. Heat-resistant for hot food and soup service.",
        applications: [
            "Dairy",
            "Cafés",
            "Hotels",
            "Food service"
        ],
        moqRange: "10,000 pcs",
        skuCount: 4,
        heroImage: "".concat(CDN, "/collections/C5.png?v=1662374075"),
        sectionId: "spoons"
    },
    {
        id: "knives",
        category: "Knives",
        headline: "Birchwood Knives",
        description: "140mm compact and 165mm full-size profiles. Rigid enough for firm foods while remaining 100% biodegradable and compostable. 10,000 units per carton.",
        applications: [
            "Restaurants",
            "Airlines",
            "Catering",
            "Hotels"
        ],
        moqRange: "10,000 pcs",
        skuCount: 2,
        heroImage: "".concat(CDN, "/collections/C3_3.png?v=1662374387"),
        sectionId: "knives"
    },
    {
        id: "sporks",
        category: "Sporks",
        headline: "Birchwood Sporks",
        description: "Spoon-fork hybrid in 140mm and 160mm. Reduces cutlery SKUs for operators while maintaining full dining functionality. A global airline favourite.",
        applications: [
            "Airlines",
            "Travel catering",
            "Fast casual",
            "Takeaway"
        ],
        moqRange: "10,000 pcs",
        skuCount: 2,
        heroImage: "".concat(CDN, "/collections/C2_2.png?v=1663670170"),
        sectionId: "sporks"
    },
    {
        id: "stirrers",
        category: "Stirrers",
        headline: "Coffee Stirrers",
        description: "110mm, 140mm, and 160mm birchwood stirrers. 50,000 units per carton. The highest-volume SKU — ideal for coffee chains and large hospitality groups.",
        applications: [
            "Coffee chains",
            "Hotels",
            "Offices",
            "Catering"
        ],
        moqRange: "50,000 pcs",
        skuCount: 3,
        heroImage: "".concat(CDN, "/collections/Untitled_design_61.png?v=1662375316"),
        sectionId: "stirrers"
    },
    {
        id: "skewers",
        category: "Skewers",
        headline: "Gun Skewers",
        description: "7cm, 10cm, 15cm, and 21cm birchwood skewers with signature gun-tip profile. 20,000 units per carton. For grill, street food, and banqueting worldwide.",
        applications: [
            "Grill",
            "BBQ",
            "Street food",
            "Banqueting"
        ],
        moqRange: "20,000 pcs",
        skuCount: 4,
        heroImage: "".concat(CDN, "/collections/Untitled_design_58.png?v=1663670146"),
        sectionId: "skewers"
    },
    {
        id: "sets",
        category: "Sets",
        headline: "Cutlery Sets",
        description: "Pre-packed fork, knife, and tissue in OPP sleeves. 500 sets per carton. Ready for airline trays, food delivery bags, and hotel amenity packs.",
        applications: [
            "Airlines",
            "Food delivery",
            "Hotels",
            "Premium takeaway"
        ],
        moqRange: "500 sets",
        skuCount: 1,
        heroImage: "".concat(CDN, "/collections/C6_4.png?v=1662375675"),
        sectionId: "sets"
    },
    {
        id: "straws",
        category: "Paper Straws",
        headline: "Paper Straws",
        description: "6mm, 8mm, and 10mm food-grade kraft paper straws. 50,000 units per carton. Holds integrity for 3+ hours. FDA, EU, and BPI Compostable certified.",
        applications: [
            "Juice bars",
            "Cafés",
            "QSR",
            "Bubble tea"
        ],
        moqRange: "50,000 pcs",
        skuCount: 3,
        heroImage: "".concat(CDN, "/products/W40_1.jpg?v=1665051402"),
        sectionId: "straws"
    }
];
function getProductsByCategory(category) {
    return PRODUCTS.filter((p)=>p.category === category);
}
function getProductById(id) {
    return PRODUCTS.find((p)=>p.id === id);
}
function getFamilyByCategory(category) {
    return PRODUCT_FAMILIES.find((f)=>f.category === category);
}
const CERTIFICATIONS_LIST = [
    {
        id: "fsc",
        name: "FSC® 100%",
        fullName: "Forest Stewardship Council",
        description: "Chain of custody certified. All birchwood sourced from responsibly managed forests.",
        scope: "All birchwood products"
    },
    {
        id: "iso",
        name: "ISO 9001:2015",
        fullName: "Quality Management System",
        description: "Certified quality management across all production processes and export operations.",
        scope: "Manufacturing operations"
    },
    {
        id: "fda",
        name: "FDA CFR 21",
        fullName: "US Food & Drug Administration",
        description: "Food-contact safe for the United States market. Compliant with FDA food contact regulations.",
        scope: "US market exports"
    },
    {
        id: "bpi",
        name: "BPI Compostable",
        fullName: "Biodegradable Products Institute",
        description: "Independently verified industrial compostability. Certified for North American composting standards.",
        scope: "Birchwood cutlery range"
    },
    {
        id: "bsci",
        name: "BSCI Audited",
        fullName: "Business Social Compliance Initiative",
        description: "Independently audited for ethical labor practices, workplace safety, and social compliance.",
        scope: "Manufacturing facility"
    },
    {
        id: "eu",
        name: "EU 10/2011",
        fullName: "EU Food Contact Materials",
        description: "Certified food-contact safe for the European market under EU Regulation 10/2011.",
        scope: "European market exports"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/products/ProductsHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products-data.ts [app-client] (ecmascript)");
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
const STATS = [
    {
        value: "30+",
        label: "Product SKUs",
        sub: "Across 9 categories"
    },
    {
        value: "10K+",
        label: "Min. Carton Qty",
        sub: "Per export shipment"
    },
    {
        value: "18+",
        label: "Countries Supplied",
        sub: "Active export markets"
    },
    {
        value: "100M",
        label: "Units / Month",
        sub: "Production capacity"
    }
];
// Six product images for the mosaic — use only real Biopapro CDN images
const MOSAIC = [
    {
        src: "https://biopapro.com/cdn/shop/collections/C4_4.png?v=1662374267",
        alt: "Birchwood Fork"
    },
    {
        src: "https://biopapro.com/cdn/shop/products/G42_1_60482dac-c2a5-4be5-af8d-4eb538db9224.jpg?v=1665051817",
        alt: "Wooden Spoon in use"
    },
    {
        src: "https://biopapro.com/cdn/shop/collections/C2_2.png?v=1663670170",
        alt: "Birchwood Spork"
    },
    {
        src: "https://biopapro.com/cdn/shop/products/G54_1.jpg?v=1665052308",
        alt: "Wooden Knife"
    },
    {
        src: "https://biopapro.com/cdn/shop/collections/Untitled_design_61.png?v=1662375316",
        alt: "Coffee Stirrers"
    },
    {
        src: "https://biopapro.com/cdn/shop/products/G52_1.jpg?v=1664961427",
        alt: "Cutlery Set"
    }
];
// Map each category to its anchor — must match sectionId in PRODUCT_FAMILIES
function getCategoryAnchor(cat) {
    const family = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_FAMILIES"].find((f)=>f.category === cat);
    return family ? "#".concat(family.sectionId) : "#catalog";
}
const CATEGORY_LABELS = {
    Forks: "Forks",
    Spoons: "Spoons",
    Knives: "Knives",
    Sporks: "Sporks",
    Stirrers: "Stirrers",
    Scoops: "Scoops",
    Skewers: "Skewers",
    Sets: "Sets",
    "Paper Straws": "Straws"
};
// Warm image bg — shows behind transparent PNGs
const IMG_BG = "#EDE6D8";
function ProductsHero() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative overflow-hidden pt-[72px] paper",
        style: {
            background: "#F6F1E8"
        },
        "aria-labelledby": "products-hero-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[2px] w-full",
                style: {
                    background: "linear-gradient(90deg, transparent 0%, #4A7A3D 30%, #2D5228 60%, transparent 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/products/ProductsHero.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-16 pb-12 lg:pt-20 lg:pb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 xl:col-span-5 flex flex-col justify-center",
                                children: [
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
                                            duration: 0.55,
                                            ease: EASE
                                        },
                                        className: "mb-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            index: "01",
                                            label: "Product Catalog"
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductsHero.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                        id: "products-hero-heading",
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
                                            fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)"
                                        },
                                        children: [
                                            "Engineering",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                className: "not-italic",
                                                style: {
                                                    color: "#C89A5B",
                                                    fontStyle: "italic",
                                                    fontFamily: "inherit"
                                                },
                                                children: "precision"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductsHero.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/products/ProductsHero.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            "into every unit."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                        className: "font-sans font-light text-ink-light leading-relaxed max-w-[480px] mb-10",
                                        style: {
                                            fontSize: "clamp(0.875rem, 1.2vw, 1rem)"
                                        },
                                        children: "FSC-certified birchwood tableware manufactured at 100M+ units per month. Nine product categories, 30+ SKUs — all export-ready, procurement-certified, manufactured in-house."
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
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
                                            duration: 0.6,
                                            ease: EASE,
                                            delay: 0.24
                                        },
                                        className: "flex flex-wrap gap-2 mb-10",
                                        children: [
                                            "FSC® 100%",
                                            "ISO 9001:2015",
                                            "FDA CFR 21",
                                            "BPI Compostable",
                                            "BSCI Audited"
                                        ].map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[8px] uppercase tracking-[0.2em] px-3 py-1.5",
                                                style: {
                                                    border: "1px solid #DDD3C5",
                                                    color: "#6B5D50",
                                                    background: "rgba(255,255,255,0.55)"
                                                },
                                                children: cert
                                            }, cert, false, {
                                                fileName: "[project]/components/products/ProductsHero.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                        lineNumber: 107,
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
                                            delay: 0.3
                                        },
                                        className: "flex flex-wrap items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300",
                                                style: {
                                                    background: "#4A7A3D"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.background = "#2D5228",
                                                onMouseLeave: (e)=>e.currentTarget.style.background = "#4A7A3D",
                                                children: [
                                                    "Request Export Quote",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 11,
                                                        strokeWidth: 2.5,
                                                        className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductsHero.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#catalog",
                                                className: "group inline-flex items-center gap-2 font-mono text-[9px] text-ink-muted uppercase tracking-[0.2em] hover:text-ink transition-colors duration-200",
                                                children: [
                                                    "Browse catalog",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 11,
                                                        className: "group-hover:translate-y-0.5 transition-transform duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductsHero.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductsHero.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 xl:col-span-7 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 24
                                        },
                                        animate: inView ? {
                                            opacity: 1,
                                            x: 0
                                        } : {},
                                        transition: {
                                            duration: 0.8,
                                            ease: EASE,
                                            delay: 0.12
                                        },
                                        className: "grid grid-cols-3 gap-2 h-[360px] lg:h-[460px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-[2] relative overflow-hidden",
                                                        style: {
                                                            background: IMG_BG
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: MOSAIC[0].src,
                                                            alt: MOSAIC[0].alt,
                                                            fill: true,
                                                            className: "object-cover hover:scale-[1.03] transition-transform duration-700",
                                                            sizes: "(max-width: 1024px) 33vw, 20vw",
                                                            priority: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/ProductsHero.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 relative overflow-hidden",
                                                        style: {
                                                            background: IMG_BG
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: MOSAIC[1].src,
                                                            alt: MOSAIC[1].alt,
                                                            fill: true,
                                                            className: "object-cover hover:scale-[1.03] transition-transform duration-700",
                                                            sizes: "(max-width: 1024px) 33vw, 20vw",
                                                            priority: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/ProductsHero.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductsHero.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2 mt-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 relative overflow-hidden",
                                                        style: {
                                                            background: IMG_BG
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: MOSAIC[2].src,
                                                            alt: MOSAIC[2].alt,
                                                            fill: true,
                                                            className: "object-cover hover:scale-[1.03] transition-transform duration-700",
                                                            sizes: "(max-width: 1024px) 33vw, 20vw"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/ProductsHero.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-[2] relative overflow-hidden",
                                                        style: {
                                                            background: IMG_BG
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: MOSAIC[3].src,
                                                            alt: MOSAIC[3].alt,
                                                            fill: true,
                                                            className: "object-cover hover:scale-[1.03] transition-transform duration-700",
                                                            sizes: "(max-width: 1024px) 33vw, 20vw"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/ProductsHero.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductsHero.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 relative overflow-hidden",
                                                        style: {
                                                            background: IMG_BG
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: MOSAIC[4].src,
                                                            alt: MOSAIC[4].alt,
                                                            fill: true,
                                                            className: "object-cover hover:scale-[1.03] transition-transform duration-700",
                                                            sizes: "(max-width: 1024px) 33vw, 20vw"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/ProductsHero.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 relative overflow-hidden",
                                                        style: {
                                                            background: IMG_BG
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: MOSAIC[5].src,
                                                            alt: MOSAIC[5].alt,
                                                            fill: true,
                                                            className: "object-cover hover:scale-[1.03] transition-transform duration-700",
                                                            sizes: "(max-width: 1024px) 33vw, 20vw"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/ProductsHero.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductsHero.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                        lineNumber: 153,
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
                                            duration: 0.55,
                                            ease: EASE,
                                            delay: 0.52
                                        },
                                        className: "absolute -bottom-3 left-0 px-4 py-3 hidden lg:block",
                                        style: {
                                            background: "#1D1610",
                                            border: "1px solid #3D2E22"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-[7px] uppercase tracking-[0.25em]",
                                                style: {
                                                    color: "rgba(200,154,91,0.75)"
                                                },
                                                children: "FSC® Chain of Custody"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductsHero.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-[8px] uppercase tracking-[0.15em] mt-0.5",
                                                style: {
                                                    color: "#F6F1E8"
                                                },
                                                children: "All birchwood certified"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductsHero.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductsHero.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/ProductsHero.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: inView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.65,
                            ease: EASE,
                            delay: 0.38
                        },
                        className: "border-t border-b py-8 mb-12",
                        style: {
                            borderColor: "#DDD3C5"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4",
                            children: STATS.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center text-center px-4 py-3",
                                    style: {
                                        borderRight: i % 2 === 0 || i === 1 ? "1px solid #DDD3C5" : "none",
                                        borderBottom: i < 2 ? "1px solid #DDD3C5" : "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-bold mb-1.5",
                                            style: {
                                                fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                                                color: "#C89A5B"
                                            },
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductsHero.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans text-[10px] font-semibold text-ink uppercase tracking-[0.1em] mb-0.5",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductsHero.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.14em]",
                                            children: stat.sub
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductsHero.tsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, stat.label, true, {
                                    fileName: "[project]/components/products/ProductsHero.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/products/ProductsHero.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductsHero.tsx",
                        lineNumber: 209,
                        columnNumber: 9
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
                            delay: 0.44
                        },
                        className: "pb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.3em] mb-4",
                                children: "Jump to category"
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductsHero.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_CATEGORIES"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: getCategoryAnchor(cat),
                                        className: "font-mono text-[8.5px] uppercase tracking-[0.16em] px-4 py-2 transition-all duration-200",
                                        style: {
                                            border: "1px solid #DDD3C5",
                                            color: "#6B5D50",
                                            background: "transparent"
                                        },
                                        onMouseEnter: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.borderColor = "#4A7A3D";
                                            el.style.color = "#4A7A3D";
                                            el.style.background = "rgba(74,122,61,0.06)";
                                        },
                                        onMouseLeave: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.borderColor = "#DDD3C5";
                                            el.style.color = "#6B5D50";
                                            el.style.background = "transparent";
                                        },
                                        children: CATEGORY_LABELS[cat]
                                    }, cat, false, {
                                        fileName: "[project]/components/products/ProductsHero.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductsHero.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/ProductsHero.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/products/ProductsHero.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/products/ProductsHero.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ProductsHero, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ProductsHero;
var _c;
__turbopack_context__.k.register(_c, "ProductsHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/products/ProductFamilies.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductFamilies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products-data.ts [app-client] (ecmascript)");
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
const IMG_BG = "#EDE6D8";
function FamilyCard(param) {
    let { family, index, onSelect } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-6% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        ref: ref,
        id: family.sectionId,
        initial: {
            opacity: 0,
            y: 22
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.65,
            ease: EASE,
            delay: index % 4 * 0.07
        },
        className: "group relative flex flex-col bg-surface overflow-hidden cursor-pointer",
        style: {
            border: "1px solid #DDD3C5",
            transition: "border-color 0.28s, box-shadow 0.32s, transform 0.32s"
        },
        onClick: ()=>onSelect(family.category),
        role: "button",
        tabIndex: 0,
        onKeyDown: (e)=>e.key === "Enter" && onSelect(family.category),
        "aria-label": "Browse ".concat(family.headline),
        onMouseEnter: (e)=>{
            const el = e.currentTarget;
            el.style.borderColor = "rgba(200,154,91,0.5)";
            el.style.boxShadow = "0 12px 40px rgba(44,36,27,0.13), 0 2px 8px rgba(44,36,27,0.06)";
            el.style.transform = "translateY(-2px)";
        },
        onMouseLeave: (e)=>{
            const el = e.currentTarget;
            el.style.borderColor = "#DDD3C5";
            el.style.boxShadow = "none";
            el.style.transform = "translateY(0)";
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                style: {
                    height: "200px",
                    background: IMG_BG
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: family.heroImage,
                        alt: family.headline,
                        fill: true,
                        className: "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
                        sizes: "(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductFamilies.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 transition-opacity duration-300 group-hover:opacity-70",
                        style: {
                            background: "linear-gradient(to top, rgba(29,22,16,0.62) 0%, rgba(29,22,16,0.1) 45%, transparent 75%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductFamilies.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 px-4 pb-3 flex items-end justify-between z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display font-light leading-tight",
                                style: {
                                    fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                                    color: "#F6F1E8"
                                },
                                children: family.headline
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductFamilies.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[7px] uppercase tracking-[0.2em] px-2 py-1 flex-shrink-0 ml-2",
                                style: {
                                    background: "rgba(200,154,91,0.18)",
                                    border: "1px solid rgba(200,154,91,0.4)",
                                    color: "#E5C99A"
                                },
                                children: [
                                    family.skuCount,
                                    " SKU",
                                    family.skuCount > 1 ? "s" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductFamilies.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/ProductFamilies.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/products/ProductFamilies.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-1 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-[11.5px] font-light text-ink-light leading-relaxed mb-3 flex-1",
                        children: family.description
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductFamilies.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1 mb-4",
                        children: family.applications.slice(0, 3).map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[6.5px] uppercase tracking-[0.14em] px-2 py-1",
                                style: {
                                    background: "rgba(74,122,61,0.07)",
                                    border: "1px solid rgba(74,122,61,0.18)",
                                    color: "#4A7A3D"
                                },
                                children: app
                            }, app, false, {
                                fileName: "[project]/components/products/ProductFamilies.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductFamilies.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pt-3 border-t",
                        style: {
                            borderColor: "#EDE5D8"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[7px] text-ink-muted uppercase tracking-[0.18em]",
                                        children: "Min. Order"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductFamilies.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[9px] font-bold text-ink mt-0.5",
                                        children: family.moqRange
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductFamilies.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductFamilies.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] transition-colors duration-200 group-hover:text-wood",
                                style: {
                                    color: "#6B5D50"
                                },
                                children: [
                                    "Browse",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        size: 10,
                                        strokeWidth: 2.5,
                                        className: "transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductFamilies.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductFamilies.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/ProductFamilies.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/products/ProductFamilies.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/products/ProductFamilies.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(FamilyCard, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = FamilyCard;
function ProductFamilies(param) {
    let { onCategorySelect } = param;
    _s1();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(headerRef, {
        once: true,
        margin: "-10% 0px"
    });
    return(// Parchment bg — visually distinct from hero above (#F6F1E8) and catalog below (#FBF8F2)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#EFE6D7"
        },
        "aria-labelledby": "families-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
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
                                index: "02",
                                label: "Product Families"
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductFamilies.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/products/ProductFamilies.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "families-heading",
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    animate: headerInView ? {
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
                                        "Nine categories.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/products/ProductFamilies.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        "One manufacturing",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "standard."
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductFamilies.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/ProductFamilies.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                        delay: 0.16
                                    },
                                    className: "font-sans font-light text-ink-light text-base leading-relaxed flex items-center",
                                    children: "Every Biopapro product begins from the same FSC-certified birchwood billets, precision-stamped on the same production line, UV-sterilised, and optically sorted before packing. The category changes. The standard does not."
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProductFamilies.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/ProductFamilies.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/products/ProductFamilies.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_FAMILIES"].map((family, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FamilyCard, {
                            family: family,
                            index: i,
                            onSelect: onCategorySelect
                        }, family.id, false, {
                            fileName: "[project]/components/products/ProductFamilies.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/products/ProductFamilies.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/products/ProductFamilies.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/products/ProductFamilies.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this));
}
_s1(ProductFamilies, "jnsYWPAX4TI/d3AqX0NZ1l1yeoo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = ProductFamilies;
var _c, _c1;
__turbopack_context__.k.register(_c, "FamilyCard");
__turbopack_context__.k.register(_c1, "ProductFamilies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/products/ProductCatalogGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCatalogGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
const IMG_BG = "#EDE6D8";
// Count SKUs per category for filter badges
const CATEGORY_COUNTS = {
    All: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].length
};
__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_CATEGORIES"].forEach((cat)=>{
    CATEGORY_COUNTS[cat] = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.category === cat).length;
});
// ── Product Detail Drawer ─────────────────────────────────────────────────────
function ProductDrawer(param) {
    let { product, onClose } = param;
    _s();
    const [activeImage, setActiveImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDrawer.useEffect": ()=>{
            setActiveImage(0);
            const handler = {
                "ProductDrawer.useEffect.handler": (e)=>e.key === "Escape" && onClose()
            }["ProductDrawer.useEffect.handler"];
            document.addEventListener("keydown", handler);
            document.body.style.overflow = "hidden";
            return ({
                "ProductDrawer.useEffect": ()=>{
                    document.removeEventListener("keydown", handler);
                    document.body.style.overflow = "";
                }
            })["ProductDrawer.useEffect"];
        }
    }["ProductDrawer.useEffect"], [
        product,
        onClose
    ]);
    const specs = [
        {
            label: "Length",
            value: product.length
        },
        {
            label: "Material",
            value: product.material
        },
        {
            label: "Finish",
            value: product.finish
        },
        {
            label: "Pcs / Bag",
            value: "".concat(product.pcsPerBag.toLocaleString(), " pcs")
        },
        {
            label: "Bags / Carton",
            value: "".concat(product.bagsPerCarton, " bags")
        },
        {
            label: "Pcs / Carton",
            value: "".concat(product.pcsPerCarton.toLocaleString(), " pcs")
        },
        {
            label: "Min. Order",
            value: product.moq
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    duration: 0.22
                },
                className: "fixed inset-0 z-40",
                style: {
                    background: "rgba(29,22,16,0.55)"
                },
                onClick: onClose,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                initial: {
                    x: "100%"
                },
                animate: {
                    x: 0
                },
                exit: {
                    x: "100%"
                },
                transition: {
                    duration: 0.4,
                    ease: EASE
                },
                className: "fixed right-0 top-0 h-full z-50 overflow-y-auto",
                style: {
                    width: "min(540px, 100vw)",
                    background: "#FBF8F2",
                    borderLeft: "1px solid #DDD3C5"
                },
                "aria-label": "Product detail",
                role: "dialog",
                "aria-modal": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b",
                        style: {
                            background: "#FBF8F2",
                            borderColor: "#DDD3C5"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[7.5px] uppercase tracking-[0.22em] px-2.5 py-1",
                                        style: {
                                            background: "rgba(74,122,61,0.1)",
                                            border: "1px solid rgba(74,122,61,0.25)",
                                            color: "#4A7A3D"
                                        },
                                        children: product.category
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    product.isIndividuallyPacked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[7px] uppercase tracking-[0.18em] px-2 py-1",
                                        style: {
                                            background: "rgba(200,154,91,0.12)",
                                            border: "1px solid rgba(200,154,91,0.35)",
                                            color: "#8C6239"
                                        },
                                        children: "Individually Packed"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-8 h-8 flex items-center justify-center text-ink-muted hover:text-ink transition-colors",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display font-light text-ink mb-5 leading-tight",
                                style: {
                                    fontSize: "clamp(1.5rem, 3vw, 2rem)"
                                },
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-3 overflow-hidden",
                                style: {
                                    height: "300px",
                                    background: IMG_BG
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
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
                                            duration: 0.18
                                        },
                                        className: "absolute inset-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: product.galleryImages[activeImage],
                                            alt: product.name,
                                            fill: true,
                                            className: "object-cover",
                                            sizes: "(max-width: 640px) 100vw, 50vw"
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    }, activeImage, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            product.galleryImages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mb-6",
                                children: product.galleryImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveImage(i),
                                        className: "relative overflow-hidden flex-shrink-0 transition-all duration-200",
                                        style: {
                                            width: 60,
                                            height: 60,
                                            background: IMG_BG,
                                            border: "1.5px solid ".concat(i === activeImage ? "#C89A5B" : "#DDD3C5")
                                        },
                                        "aria-label": "Image ".concat(i + 1),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: img,
                                            alt: "",
                                            fill: true,
                                            className: "object-cover",
                                            sizes: "60px"
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-[13px] font-light text-ink-light leading-relaxed mb-6",
                                children: product.shortDescription
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[7.5px] uppercase tracking-[0.26em] text-ink-muted mb-2.5",
                                        children: "Applications"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: product.applications.map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[7.5px] uppercase tracking-[0.12em] px-3 py-1.5",
                                                style: {
                                                    background: "rgba(74,122,61,0.07)",
                                                    border: "1px solid rgba(74,122,61,0.2)",
                                                    color: "#4A7A3D"
                                                },
                                                children: app
                                            }, app, false, {
                                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                size: 11,
                                                className: "text-ink-muted"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-[7.5px] uppercase tracking-[0.26em] text-ink-muted",
                                                children: "Technical Specifications"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full border",
                                        style: {
                                            borderColor: "#EDE5D8"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: specs.map((spec, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: i % 2 === 0 ? "rgba(246,241,232,0.55)" : "#FBF8F2",
                                                        borderBottom: "1px solid #EDE5D8"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-mono text-[8.5px] uppercase tracking-[0.14em] text-ink-muted py-2.5 px-3",
                                                            style: {
                                                                width: "42%",
                                                                borderRight: "1px solid #EDE5D8"
                                                            },
                                                            children: spec.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-mono text-[9px] text-ink py-2.5 px-3 font-medium",
                                                            children: spec.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, spec.label, true, {
                                                    fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                size: 11,
                                                className: "text-ink-muted"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-[7.5px] uppercase tracking-[0.26em] text-ink-muted",
                                                children: "Certifications"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: product.certifications.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[8px] uppercase tracking-[0.14em] px-3 py-1.5",
                                                style: {
                                                    background: "#F6F1E8",
                                                    border: "1px solid #DDD3C5",
                                                    color: "#6B5D50"
                                                },
                                                children: cert
                                            }, cert, false, {
                                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 border",
                                style: {
                                    background: "#1D1610",
                                    borderColor: "#3D2E22"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-[13px] font-light mb-1",
                                        style: {
                                            color: "rgba(246,241,232,0.85)"
                                        },
                                        children: [
                                            "Ready to source ",
                                            product.name,
                                            "?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[7.5px] uppercase tracking-[0.18em] mb-4",
                                        style: {
                                            color: "rgba(200,154,91,0.65)"
                                        },
                                        children: [
                                            "MOQ ",
                                            product.moq,
                                            " · ",
                                            product.pcsPerCarton.toLocaleString(),
                                            " pcs per export carton"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "group inline-flex items-center gap-2 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200",
                                        style: {
                                            background: "#4A7A3D"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.background = "#2D5228",
                                        onMouseLeave: (e)=>e.currentTarget.style.background = "#4A7A3D",
                                        children: [
                                            "Request Export Quote",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 11,
                                                strokeWidth: 2.5,
                                                className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ProductDrawer, "b1W1mnS2I3wGVRY4UoWI4lmX2HQ=");
_c = ProductDrawer;
// ── Product Card ──────────────────────────────────────────────────────────────
function ProductCard(param) {
    let { product, index, onOpen } = param;
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 18
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.6,
            ease: EASE,
            delay: index % 4 * 0.055
        },
        className: "group relative flex flex-col bg-surface overflow-hidden",
        style: {
            border: "1px solid #DDD3C5",
            transition: "border-color 0.28s, box-shadow 0.32s, transform 0.32s"
        },
        onMouseEnter: (e)=>{
            const el = e.currentTarget;
            el.style.borderColor = "rgba(200,154,91,0.5)";
            el.style.boxShadow = "0 10px 36px rgba(44,36,27,0.13), 0 2px 8px rgba(44,36,27,0.06)";
            el.style.transform = "translateY(-2px)";
        },
        onMouseLeave: (e)=>{
            const el = e.currentTarget;
            el.style.borderColor = "#DDD3C5";
            el.style.boxShadow = "none";
            el.style.transform = "translateY(0)";
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                style: {
                    height: "220px",
                    background: IMG_BG
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: product.primaryImage,
                        alt: product.name,
                        fill: true,
                        className: "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[7px] uppercase tracking-[0.2em] px-2.5 py-1.5 block",
                            style: {
                                background: "rgba(29,22,16,0.7)",
                                color: "#C89A5B",
                                backdropFilter: "blur(4px)"
                            },
                            children: product.category
                        }, void 0, false, {
                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    product.isIndividuallyPacked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[6.5px] uppercase tracking-[0.16em] px-2.5 py-1.5 block",
                            style: {
                                background: "rgba(200,154,91,0.88)",
                                color: "#1D1610"
                            },
                            children: "Sleeved"
                        }, void 0, false, {
                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                            lineNumber: 331,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col justify-end px-3 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        style: {
                            background: "linear-gradient(to top, rgba(29,22,16,0.82) 0%, rgba(29,22,16,0.15) 55%, transparent 100%)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1",
                            children: product.certifications.slice(0, 3).map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[6.5px] uppercase tracking-[0.12em] px-2 py-1",
                                    style: {
                                        background: "rgba(200,154,91,0.18)",
                                        border: "1px solid rgba(200,154,91,0.45)",
                                        color: "#E5C99A"
                                    },
                                    children: cert
                                }, cert, false, {
                                    fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-1 px-4 pt-4 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-sans text-[13px] font-semibold text-ink mb-1 leading-snug",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.12em] mb-4",
                        children: [
                            product.length,
                            " · ",
                            product.material
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pt-3 mt-auto border-t",
                        style: {
                            borderColor: "#EDE5D8"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[7px] text-ink-muted uppercase tracking-[0.14em]",
                                        children: "Min. Order"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[9px] font-bold text-ink mt-0.5",
                                        children: product.moq
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onOpen(product),
                                className: "inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.14em] px-3 py-2 transition-all duration-200",
                                style: {
                                    border: "1px solid #DDD3C5",
                                    color: "#6B5D50"
                                },
                                onMouseEnter: (e)=>{
                                    const el = e.currentTarget;
                                    el.style.borderColor = "#C89A5B";
                                    el.style.color = "#8C6239";
                                    el.style.background = "rgba(200,154,91,0.07)";
                                },
                                onMouseLeave: (e)=>{
                                    const el = e.currentTarget;
                                    el.style.borderColor = "#DDD3C5";
                                    el.style.color = "#6B5D50";
                                    el.style.background = "transparent";
                                },
                                "aria-label": "View details for ".concat(product.name),
                                children: [
                                    "View Specs",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 9,
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
_s1(ProductCard, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = ProductCard;
function ProductCatalogGrid(param) {
    let { activeCategory, onCategoryChange } = param;
    _s2();
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(headerRef, {
        once: true,
        margin: "-10% 0px"
    });
    const filtered = activeCategory === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.category === activeCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "catalog",
                style: {
                    background: "#FBF8F2"
                },
                "aria-labelledby": "catalog-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: headerRef,
                            className: "mb-12",
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
                                        index: "03",
                                        label: "Product Catalog"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                            id: "catalog-heading",
                                            initial: {
                                                opacity: 0,
                                                y: 16
                                            },
                                            animate: headerInView ? {
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
                                                fontSize: "clamp(1.8rem, 3vw, 2.8rem)"
                                            },
                                            children: "Full Product Range"
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: headerInView ? {
                                                opacity: 1
                                            } : {},
                                            transition: {
                                                duration: 0.55,
                                                ease: EASE,
                                                delay: 0.18
                                            },
                                            className: "font-mono text-[7.5px] uppercase tracking-[0.22em] text-ink-muted",
                                            children: [
                                                filtered.length,
                                                " SKU",
                                                filtered.length !== 1 ? "s" : "",
                                                " · FSC® certified birchwood"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                            lineNumber: 454,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                            lineNumber: 433,
                            columnNumber: 11
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
                                delay: 0.22
                            },
                            className: "flex items-center gap-1.5 flex-wrap mb-8 pb-5 border-b",
                            style: {
                                borderColor: "#DDD3C5"
                            },
                            children: [
                                "All",
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_CATEGORIES"]
                            ].map((cat)=>{
                                const isActive = activeCategory === cat;
                                var _CATEGORY_COUNTS_cat;
                                const count = (_CATEGORY_COUNTS_cat = CATEGORY_COUNTS[cat]) !== null && _CATEGORY_COUNTS_cat !== void 0 ? _CATEGORY_COUNTS_cat : 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onCategoryChange(cat),
                                    className: "font-mono text-[8px] uppercase tracking-[0.16em] px-3.5 py-2 transition-all duration-200",
                                    style: {
                                        background: isActive ? "#4A7A3D" : "transparent",
                                        color: isActive ? "#ffffff" : "#6B5D50",
                                        border: "1px solid ".concat(isActive ? "#4A7A3D" : "#DDD3C5")
                                    },
                                    children: [
                                        cat,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1.5 font-mono text-[7px]",
                                            style: {
                                                opacity: isActive ? 0.7 : 0.5
                                            },
                                            children: count
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                            lineNumber: 488,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, cat, true, {
                                    fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                    lineNumber: 477,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                            lineNumber: 466,
                            columnNumber: 11
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
                                    duration: 0.2
                                },
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                                children: filtered.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                        product: product,
                                        index: i,
                                        onOpen: setSelectedProduct
                                    }, product.id, false, {
                                        fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                        lineNumber: 510,
                                        columnNumber: 17
                                    }, this))
                            }, activeCategory, false, {
                                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                lineNumber: 501,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, this),
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
                                duration: 0.65,
                                ease: EASE,
                                delay: 0.36
                            },
                            className: "mt-14 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border",
                            style: {
                                background: "#F6F1E8",
                                borderColor: "#DDD3C5"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans font-semibold text-ink text-sm mb-1",
                                            children: "Need custom sizing, laser engraving, or private label packaging?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                            lineNumber: 529,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.16em]",
                                            children: "OEM · Custom dimensions · Kraft paper sleeve · Logo printing · All available"
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                            lineNumber: 532,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                    lineNumber: 528,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "group inline-flex items-center gap-2.5 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 flex-shrink-0",
                                    style: {
                                        background: "#1D1610"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.background = "#4A7A3D",
                                    onMouseLeave: (e)=>e.currentTarget.style.background = "#1D1610",
                                    children: [
                                        "Request Custom Quote",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 11,
                                            strokeWidth: 2.5,
                                            className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                            lineNumber: 544,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                                    lineNumber: 536,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                    lineNumber: 430,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductDrawer, {
                    product: selectedProduct,
                    onClose: ()=>setSelectedProduct(null)
                }, void 0, false, {
                    fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                    lineNumber: 553,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/products/ProductCatalogGrid.tsx",
                lineNumber: 551,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(ProductCatalogGrid, "0VR3FvwiBw0c0n6t7RxoPaL6rqI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = ProductCatalogGrid;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ProductDrawer");
__turbopack_context__.k.register(_c1, "ProductCard");
__turbopack_context__.k.register(_c2, "ProductCatalogGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/products/PackagingExport.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackagingExport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
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
const PACKAGING_TIERS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"],
        title: "Bulk OPP Packaging",
        subtitle: "Standard export",
        description: "Products packed in OPP (Oriented Polypropylene) bags — 100 or 500 pieces per bag depending on category. Hygienic, moisture-resistant, and production-line ready for food service.",
        specs: [
            {
                label: "Cutlery",
                value: "100 pcs / OPP bag"
            },
            {
                label: "Stirrers",
                value: "500 pcs / OPP bag"
            },
            {
                label: "Skewers",
                value: "200 pcs / OPP bag"
            },
            {
                label: "Sets",
                value: "50 sets / OPP bag"
            }
        ],
        badge: "Most Popular"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"],
        title: "Individual Sleeving",
        subtitle: "Premium service",
        description: "Each piece individually sleeved in OPP with optional kraft paper outer. Preferred by airlines, premium food service, and hotel room service. Custom logo printing available.",
        specs: [
            {
                label: "Spoon 110mm",
                value: "100 pcs / carton"
            },
            {
                label: "Fork 160mm",
                value: "100 pcs / carton"
            },
            {
                label: "MOQ (sleeved)",
                value: "10,000 pcs"
            },
            {
                label: "Lead time",
                value: "+7 days"
            }
        ],
        badge: "Airlines · Hotels"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"],
        title: "OEM / Custom Packaging",
        subtitle: "Private label",
        description: "Custom kraft paper sleeves with your logo, brand colours, and certifications printed. Full OEM service — from artwork to delivery. Minimum quantities apply for printing setup.",
        specs: [
            {
                label: "Print colours",
                value: "Up to 4 colours"
            },
            {
                label: "Lead time",
                value: "4–6 weeks"
            },
            {
                label: "MOQ (OEM)",
                value: "50,000 pcs"
            },
            {
                label: "Artwork",
                value: "Client supplied / assisted"
            }
        ],
        badge: "Distributors · Retailers"
    }
];
const CONTAINER_DATA = [
    {
        product: "Wooden Fork 160mm",
        cartonPcs: "10,000",
        cartons20ft: "~800",
        cartons40ft: "~1,600"
    },
    {
        product: "Wooden Spoon 160mm",
        cartonPcs: "10,000",
        cartons20ft: "~820",
        cartons40ft: "~1,650"
    },
    {
        product: "Wooden Knife 165mm",
        cartonPcs: "10,000",
        cartons20ft: "~780",
        cartons40ft: "~1,580"
    },
    {
        product: "Wooden Spork 140mm",
        cartonPcs: "10,000",
        cartons20ft: "~860",
        cartons40ft: "~1,720"
    },
    {
        product: "Coffee Stirrer 140mm",
        cartonPcs: "50,000",
        cartons20ft: "~600",
        cartons40ft: "~1,200"
    },
    {
        product: "Gun Skewer 15cm",
        cartonPcs: "20,000",
        cartons20ft: "~700",
        cartons40ft: "~1,400"
    }
];
function PackagingExport() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden grain",
        style: {
            background: "#1D1610"
        },
        "aria-labelledby": "packaging-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[1px] w-full",
                style: {
                    background: "linear-gradient(90deg, transparent 0%, #3D2E22 40%, #5C3D1E 60%, transparent 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/products/PackagingExport.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
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
                                    label: "Packaging & Export",
                                    inverted: true
                                }, void 0, false, {
                                    fileName: "[project]/components/products/PackagingExport.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/products/PackagingExport.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        id: "packaging-heading",
                                        initial: {
                                            opacity: 0,
                                            y: 18
                                        },
                                        animate: inView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            duration: 0.72,
                                            ease: EASE,
                                            delay: 0.08
                                        },
                                        className: "font-display font-light leading-[0.93]",
                                        style: {
                                            color: "#F6F1E8",
                                            fontSize: "clamp(2rem, 3.5vw, 3.2rem)"
                                        },
                                        children: [
                                            "Export-ready.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/products/PackagingExport.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#C89A5B"
                                                },
                                                children: "Every carton."
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/PackagingExport.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 95,
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
                                        className: "font-sans font-light text-base leading-relaxed flex items-center",
                                        style: {
                                            color: "rgba(230,210,185,0.7)"
                                        },
                                        children: "Packaging is not an afterthought. Every product ships in standardised cartons sized for container optimisation. Bulk, individually sleeved, and OEM options accommodate the full spectrum of food service procurement requirements."
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/PackagingExport.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/PackagingExport.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-16",
                        children: PACKAGING_TIERS.map((tier, i)=>{
                            const Icon = tier.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.65,
                                    ease: EASE,
                                    delay: 0.24 + i * 0.08
                                },
                                className: "flex flex-col p-6",
                                style: {
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid #3D2E22"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 flex items-center justify-center",
                                                style: {
                                                    background: "rgba(200,154,91,0.12)",
                                                    border: "1px solid rgba(200,154,91,0.3)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    size: 15,
                                                    style: {
                                                        color: "#C89A5B"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/PackagingExport.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/PackagingExport.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[7px] uppercase tracking-[0.2em] px-2.5 py-1",
                                                style: {
                                                    background: "rgba(200,154,91,0.12)",
                                                    border: "1px solid rgba(200,154,91,0.25)",
                                                    color: "#C89A5B"
                                                },
                                                children: tier.badge
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/PackagingExport.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-light mb-1",
                                        style: {
                                            fontSize: "1.2rem",
                                            color: "#F6F1E8"
                                        },
                                        children: tier.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[8px] uppercase tracking-[0.2em] mb-4",
                                        style: {
                                            color: "rgba(200,154,91,0.65)"
                                        },
                                        children: tier.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-[12.5px] font-light leading-relaxed mb-5 flex-1",
                                        style: {
                                            color: "rgba(230,210,185,0.65)"
                                        },
                                        children: tier.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t pt-4 space-y-2",
                                        style: {
                                            borderColor: "#3D2E22"
                                        },
                                        children: tier.specs.map((spec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[8px] uppercase tracking-[0.12em]",
                                                        style: {
                                                            color: "rgba(230,210,185,0.45)"
                                                        },
                                                        children: spec.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[9px] font-medium",
                                                        style: {
                                                            color: "rgba(230,210,185,0.8)"
                                                        },
                                                        children: spec.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, spec.label, true, {
                                                fileName: "[project]/components/products/PackagingExport.tsx",
                                                lineNumber: 175,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, tier.title, true, {
                                fileName: "[project]/components/products/PackagingExport.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/products/PackagingExport.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            delay: 0.48
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                                        size: 14,
                                        style: {
                                            color: "#C89A5B"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[9px] uppercase tracking-[0.28em]",
                                        style: {
                                            color: "rgba(200,154,91,0.7)"
                                        },
                                        children: "Container Loading Reference (Indicative)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/PackagingExport.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full min-w-[600px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    borderBottom: "1px solid #3D2E22"
                                                },
                                                children: [
                                                    "Product",
                                                    "Pcs / Carton",
                                                    "20ft Container",
                                                    "40ft Container"
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "font-mono text-[8px] uppercase tracking-[0.2em] text-left py-3 px-4",
                                                        style: {
                                                            color: "rgba(200,154,91,0.55)"
                                                        },
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/PackagingExport.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/PackagingExport.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: CONTAINER_DATA.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        borderBottom: "1px solid rgba(61,46,34,0.5)",
                                                        background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-sans text-[12px] font-light py-3.5 px-4",
                                                            style: {
                                                                color: "rgba(246,241,232,0.85)"
                                                            },
                                                            children: row.product
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/PackagingExport.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-mono text-[10px] py-3.5 px-4",
                                                            style: {
                                                                color: "#C89A5B"
                                                            },
                                                            children: row.cartonPcs
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/PackagingExport.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-mono text-[10px] py-3.5 px-4",
                                                            style: {
                                                                color: "rgba(246,241,232,0.65)"
                                                            },
                                                            children: [
                                                                row.cartons20ft,
                                                                " cartons"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/products/PackagingExport.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-mono text-[10px] py-3.5 px-4",
                                                            style: {
                                                                color: "rgba(246,241,232,0.65)"
                                                            },
                                                            children: [
                                                                row.cartons40ft,
                                                                " cartons"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/products/PackagingExport.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, row.product, true, {
                                                    fileName: "[project]/components/products/PackagingExport.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/PackagingExport.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/PackagingExport.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/products/PackagingExport.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[7.5px] uppercase tracking-[0.16em] mt-4",
                                style: {
                                    color: "rgba(230,210,185,0.3)"
                                },
                                children: "* Quantities are indicative. Exact loading depends on carton dimensions and stacking configuration. Contact for precise container quotations."
                            }, void 0, false, {
                                fileName: "[project]/components/products/PackagingExport.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/PackagingExport.tsx",
                        lineNumber: 197,
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
                            duration: 0.6,
                            ease: EASE,
                            delay: 0.58
                        },
                        className: "mt-14 pt-10 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",
                        style: {
                            borderColor: "#3D2E22"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans font-light",
                                        style: {
                                            fontSize: "1.05rem",
                                            color: "rgba(246,241,232,0.9)"
                                        },
                                        children: "Need a container-level quotation?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[8px] uppercase tracking-[0.18em] mt-1",
                                        style: {
                                            color: "rgba(200,154,91,0.55)"
                                        },
                                        children: "Lead time · Freight terms · Certificate documentation — all in one quote"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/PackagingExport.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "group inline-flex items-center gap-2.5 px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 flex-shrink-0",
                                style: {
                                    background: "#4A7A3D"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.background = "#2D5228",
                                onMouseLeave: (e)=>e.currentTarget.style.background = "#4A7A3D",
                                children: [
                                    "Request Container Quote",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        size: 11,
                                        strokeWidth: 2.5,
                                        className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/PackagingExport.tsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/PackagingExport.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/PackagingExport.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/products/PackagingExport.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/products/PackagingExport.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(PackagingExport, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = PackagingExport;
var _c;
__turbopack_context__.k.register(_c, "PackagingExport");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/products/ProcurementTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcurementTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products-data.ts [app-client] (ecmascript)");
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
// Build table rows from real product data
const TABLE_ROWS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].map(_c = (p)=>({
        id: p.id,
        name: p.name,
        category: p.category,
        length: p.length,
        material: p.material,
        pcsPerCarton: p.pcsPerCarton,
        moq: p.moq,
        certifications: p.certifications,
        isIndividuallyPacked: p.isIndividuallyPacked
    }));
_c1 = TABLE_ROWS;
function sortRows(rows, key, dir) {
    return [
        ...rows
    ].sort((a, b)=>{
        let av;
        let bv;
        if (key === "pcsPerCarton") {
            av = a.pcsPerCarton;
            bv = b.pcsPerCarton;
        } else if (key === "length") {
            av = parseInt(a.length) || 0;
            bv = parseInt(b.length) || 0;
        } else {
            av = a[key];
            bv = b[key];
        }
        if (av < bv) return dir === "asc" ? -1 : 1;
        if (av > bv) return dir === "asc" ? 1 : -1;
        return 0;
    });
}
const COLUMNS = [
    {
        key: "name",
        label: "Product"
    },
    {
        key: null,
        label: "Category"
    },
    {
        key: "length",
        label: "Length"
    },
    {
        key: null,
        label: "Material"
    },
    {
        key: "pcsPerCarton",
        label: "Pcs / Carton"
    },
    {
        key: "moq",
        label: "MOQ"
    },
    {
        key: null,
        label: "Certifications"
    }
];
function ProcurementTable() {
    _s();
    const [sortKey, setSortKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("name");
    const [sortDir, setSortDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("asc");
    const [filterCat, setFilterCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    const categories = [
        "All",
        ...Array.from(new Set(TABLE_ROWS.map((r)=>r.category)))
    ];
    const filtered = filterCat === "All" ? TABLE_ROWS : TABLE_ROWS.filter((r)=>r.category === filterCat);
    const sorted = sortRows(filtered, sortKey, sortDir);
    function handleSort(key) {
        if (!key) return;
        if (sortKey === key) {
            setSortDir((d)=>d === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortDir("asc");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#FBF8F2"
        },
        "aria-labelledby": "table-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
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
                                index: "05",
                                label: "Procurement Reference"
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProcurementTable.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/products/ProcurementTable.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "table-heading",
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
                                        fontSize: "clamp(1.8rem, 3vw, 2.6rem)"
                                    },
                                    children: "Full SKU Reference"
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProcurementTable.tsx",
                                    lineNumber: 110,
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
                                        delay: 0.14
                                    },
                                    className: "flex flex-wrap gap-1.5",
                                    children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFilterCat(cat),
                                            className: "font-sans text-[12px] uppercase tracking-[0.08em] px-3 py-2 transition-all duration-200",
                                            style: {
                                                background: filterCat === cat ? "#4A7A3D" : "transparent",
                                                color: filterCat === cat ? "#ffffff" : "#6B5D50",
                                                border: "1px solid ".concat(filterCat === cat ? "#4A7A3D" : "#DDD3C5")
                                            },
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/components/products/ProcurementTable.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProcurementTable.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/ProcurementTable.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/products/ProcurementTable.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        delay: 0.2
                    },
                    className: "overflow-x-auto border",
                    style: {
                        borderColor: "#DDD3C5"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full min-w-[800px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        background: "#F6F1E8",
                                        borderBottom: "2px solid #DDD3C5"
                                    },
                                    children: COLUMNS.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            onClick: ()=>handleSort(col.key),
                                            className: "text-left py-4 px-4 ".concat(col.key ? "cursor-pointer hover:text-ink transition-colors" : ""),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-sans text-[11px] uppercase tracking-[0.1em] text-ink-muted",
                                                        children: col.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProcurementTable.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 23
                                                    }, this),
                                                    col.key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                                        size: 9,
                                                        className: sortKey === col.key ? "text-wood" : "text-border"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProcurementTable.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProcurementTable.tsx",
                                                lineNumber: 163,
                                                columnNumber: 21
                                            }, this)
                                        }, col.label, false, {
                                            fileName: "[project]/components/products/ProcurementTable.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProcurementTable.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProcurementTable.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: sorted.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: "1px solid #EDE5D8",
                                            background: i % 2 === 0 ? "#FFFFFF" : "#FDFAF6"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-sans text-[12px] font-medium text-ink",
                                                            children: row.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/ProcurementTable.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 23
                                                        }, this),
                                                        row.isIndividuallyPacked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[6px] uppercase tracking-[0.12em] px-1.5 py-0.5",
                                                            style: {
                                                                background: "rgba(200,154,91,0.12)",
                                                                border: "1px solid rgba(200,154,91,0.3)",
                                                                color: "#8C6239"
                                                            },
                                                            children: "Sleeved"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/ProcurementTable.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/products/ProcurementTable.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProcurementTable.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[7.5px] uppercase tracking-[0.16em] px-2.5 py-1",
                                                    style: {
                                                        background: "rgba(74,122,61,0.08)",
                                                        border: "1px solid rgba(74,122,61,0.18)",
                                                        color: "#4A7A3D"
                                                    },
                                                    children: row.category
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/ProcurementTable.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProcurementTable.tsx",
                                                lineNumber: 204,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-4 font-mono text-[10px] text-ink",
                                                children: row.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProcurementTable.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-4 font-sans text-[11px] text-ink-light",
                                                children: row.material
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProcurementTable.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-4 font-mono text-[10px] font-bold",
                                                style: {
                                                    color: "#C89A5B"
                                                },
                                                children: row.pcsPerCarton.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProcurementTable.tsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-4 font-mono text-[10px] text-ink",
                                                children: row.moq
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProcurementTable.tsx",
                                                lineNumber: 221,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3.5 px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: row.certifications.slice(0, 3).map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[6.5px] uppercase tracking-[0.1em] px-1.5 py-0.5",
                                                            style: {
                                                                background: "#F6F1E8",
                                                                border: "1px solid #DDD3C5",
                                                                color: "#6B5D50"
                                                            },
                                                            children: cert
                                                        }, cert, false, {
                                                            fileName: "[project]/components/products/ProcurementTable.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/ProcurementTable.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProcurementTable.tsx",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, row.id, true, {
                                        fileName: "[project]/components/products/ProcurementTable.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProcurementTable.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/ProcurementTable.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/products/ProcurementTable.tsx",
                    lineNumber: 147,
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
                        duration: 0.55,
                        ease: EASE,
                        delay: 0.36
                    },
                    className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-[7.5px] uppercase tracking-[0.16em] text-ink-muted",
                            children: [
                                "Showing ",
                                sorted.length,
                                " of ",
                                TABLE_ROWS.length,
                                " SKUs · Click column headers to sort"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/ProcurementTable.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "group inline-flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.18em] transition-colors duration-200",
                            style: {
                                color: "#4A7A3D"
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.color = "#2D5228",
                            onMouseLeave: (e)=>e.currentTarget.style.color = "#4A7A3D",
                            children: [
                                "Request full spec sheet PDF",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    size: 10,
                                    strokeWidth: 2.5,
                                    className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProcurementTable.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/ProcurementTable.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/products/ProcurementTable.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/products/ProcurementTable.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/products/ProcurementTable.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(ProcurementTable, "Dr9Ix4dKeo8tV4xRV2nUjAqfwD8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = ProcurementTable;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TABLE_ROWS$PRODUCTS.map");
__turbopack_context__.k.register(_c1, "TABLE_ROWS");
__turbopack_context__.k.register(_c2, "ProcurementTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/products/ProcurementResources.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcurementResources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
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
const RESOURCES = [
    {
        number: "01",
        title: "Product Catalog",
        subtitle: "PDF · Updated 2025",
        description: "Full 30+ SKU catalog with dimensions, MOQ, packaging options, and container loading data. Formatted for procurement teams and import buyers.",
        cta: "Request Catalog"
    },
    {
        number: "02",
        title: "Technical Datasheets",
        subtitle: "PDF per SKU",
        description: "Individual dimensional drawings, weight specs, and material composition for each product. Required for customs declarations and food service compliance.",
        cta: "Request Datasheets"
    },
    {
        number: "03",
        title: "Packaging Specifications",
        subtitle: "Logistics ready",
        description: "Export carton dimensions, carton weights, pallet configuration, and container loading charts for every category. Sent as a single PDF bundle.",
        cta: "Request Pack Specs"
    },
    {
        number: "04",
        title: "FSC® Certificate",
        subtitle: "Chain of Custody",
        description: "Current FSC Chain of Custody certificate for all birchwood products. Required for retailers, airlines, and hospitality groups with sustainability mandates.",
        cta: "Request Certificate"
    },
    {
        number: "05",
        title: "ISO & Quality Certificates",
        subtitle: "ISO 9001:2015",
        description: "Quality management system certificate covering manufacturing, QC, and export operations. Includes BSCI social audit summary and workplace compliance report.",
        cta: "Request Certificate"
    },
    {
        number: "06",
        title: "Compliance Documents",
        subtitle: "FDA · EU · BPI",
        description: "FDA CFR 21, EU 10/2011 food-contact compliance, BPI compostability test reports. Full bundle for North American and European import documentation.",
        cta: "Request Documents"
    }
];
function ProcurementResources() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "paper",
        style: {
            background: "#F6F1E8"
        },
        "aria-labelledby": "resources-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
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
                                label: "Procurement Resources"
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProcurementResources.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/products/ProcurementResources.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "resources-heading",
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
                                        fontSize: "clamp(1.8rem, 3vw, 2.8rem)"
                                    },
                                    children: [
                                        "Everything your",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: [
                                                "procurement",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 15
                                                }, this),
                                                "team"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/products/ProcurementResources.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        " needs."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                    lineNumber: 80,
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
                                        delay: 0.16
                                    },
                                    className: "flex flex-col justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans font-light text-ink-light text-base leading-relaxed",
                                            children: "All documentation is available on request and sent within 24 hours. Certificates, datasheets, and compliance docs are kept current and can be issued with each shipment."
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProcurementResources.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 rounded-full",
                                                    style: {
                                                        background: "#4A7A3D"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[8.5px] uppercase tracking-[0.22em]",
                                                    style: {
                                                        color: "#4A7A3D"
                                                    },
                                                    children: "Documents issued within 24 hours"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/products/ProcurementResources.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/ProcurementResources.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/products/ProcurementResources.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t",
                    style: {
                        borderColor: "#DDD3C5"
                    },
                    children: RESOURCES.map((resource, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                delay: 0.18 + i * 0.06
                            },
                            className: "group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7 border-b transition-colors duration-200",
                            style: {
                                borderColor: "#DDD3C5"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-1 flex items-start pt-0.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[11px] font-bold",
                                        style: {
                                            color: "#C89A5B",
                                            opacity: 0.7
                                        },
                                        children: resource.number
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProcurementResources.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-sans font-semibold text-ink text-[13.5px] leading-snug mb-1",
                                            children: resource.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProcurementResources.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[7.5px] uppercase tracking-[0.2em]",
                                            style: {
                                                color: "#6B5D50"
                                            },
                                            children: resource.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ProcurementResources.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-[12.5px] font-light text-ink-light leading-relaxed",
                                        children: resource.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProcurementResources.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2 flex items-center justify-start md:justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "group/cta inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] transition-all duration-200 whitespace-nowrap",
                                        style: {
                                            color: "#4A7A3D"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.color = "#2D5228",
                                        onMouseLeave: (e)=>e.currentTarget.style.color = "#4A7A3D",
                                        children: [
                                            resource.cta,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 9,
                                                strokeWidth: 2.5,
                                                className: "group-hover/cta:translate-x-0.5 transition-transform duration-200"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProcurementResources.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProcurementResources.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, resource.number, true, {
                            fileName: "[project]/components/products/ProcurementResources.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/products/ProcurementResources.tsx",
                    lineNumber: 115,
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
                        duration: 0.62,
                        ease: EASE,
                        delay: 0.56
                    },
                    className: "mt-10 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border",
                    style: {
                        background: "#FBF8F2",
                        borderColor: "#DDD3C5"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans font-semibold text-ink text-sm mb-1",
                                    children: "Prefer a complete documentation bundle?"
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.16em]",
                                    children: "Catalog · Certificates · Spec sheets · Compliance docs — delivered in a single email"
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/ProcurementResources.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "group inline-flex items-center gap-2.5 px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 flex-shrink-0",
                            style: {
                                background: "#4A7A3D"
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.background = "#2D5228",
                            onMouseLeave: (e)=>e.currentTarget.style.background = "#4A7A3D",
                            children: [
                                "Request Full Documentation Pack",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    size: 11,
                                    strokeWidth: 2.5,
                                    className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProcurementResources.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/ProcurementResources.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/products/ProcurementResources.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/products/ProcurementResources.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/products/ProcurementResources.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(ProcurementResources, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ProcurementResources;
var _c;
__turbopack_context__.k.register(_c, "ProcurementResources");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/products/ProductCertifications.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCertifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products-data.ts [app-client] (ecmascript)");
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
function ProductCertifications() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden grain",
        style: {
            background: "#1D1610"
        },
        "aria-labelledby": "certs-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[1px] w-full",
                style: {
                    background: "linear-gradient(90deg, transparent 0%, #3D2E22 40%, #5C3D1E 60%, transparent 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/products/ProductCertifications.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
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
                                    index: "07",
                                    label: "Certifications",
                                    inverted: true
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ProductCertifications.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductCertifications.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                                        className: "font-display font-light leading-[0.93]",
                                        style: {
                                            fontSize: "clamp(2rem, 3.5vw, 3rem)",
                                            color: "#F6F1E8"
                                        },
                                        children: [
                                            "Six certifications.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/products/ProductCertifications.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#C89A5B"
                                                },
                                                children: "Every market covered."
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductCertifications.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductCertifications.tsx",
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
                                        className: "font-sans font-light text-base leading-relaxed flex items-center",
                                        style: {
                                            color: "rgba(230,210,185,0.65)"
                                        },
                                        children: "From FSC chain-of-custody to FDA food contact compliance, every Biopapro product ships with the documentation your import team needs to clear customs and satisfy regulatory requirements across North America, Europe, and Asia."
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCertifications.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductCertifications.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/ProductCertifications.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERTIFICATIONS_LIST"].map((cert, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.65,
                                    ease: EASE,
                                    delay: 0.24 + i * 0.07
                                },
                                className: "flex flex-col p-6",
                                style: {
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid #3D2E22"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 flex items-center justify-center flex-shrink-0",
                                                style: {
                                                    background: "rgba(200,154,91,0.12)",
                                                    border: "1px solid rgba(200,154,91,0.28)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    size: 14,
                                                    style: {
                                                        color: "#C89A5B"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/ProductCertifications.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductCertifications.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-[11px] font-bold uppercase tracking-[0.12em]",
                                                        style: {
                                                            color: "#C89A5B"
                                                        },
                                                        children: cert.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductCertifications.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-[7.5px] uppercase tracking-[0.16em]",
                                                        style: {
                                                            color: "rgba(230,210,185,0.4)"
                                                        },
                                                        children: cert.fullName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductCertifications.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductCertifications.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductCertifications.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-[12px] font-light leading-relaxed flex-1 mb-4",
                                        style: {
                                            color: "rgba(230,210,185,0.6)"
                                        },
                                        children: cert.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductCertifications.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-3 border-t",
                                        style: {
                                            borderColor: "#3D2E22"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-[7px] uppercase tracking-[0.18em]",
                                                style: {
                                                    color: "rgba(200,154,91,0.45)"
                                                },
                                                children: "Scope"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductCertifications.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-[8.5px] uppercase tracking-[0.12em] mt-1",
                                                style: {
                                                    color: "rgba(246,241,232,0.65)"
                                                },
                                                children: cert.scope
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ProductCertifications.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductCertifications.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, cert.id, true, {
                                fileName: "[project]/components/products/ProductCertifications.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductCertifications.tsx",
                        lineNumber: 69,
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
                            duration: 0.7,
                            ease: EASE,
                            delay: 0.68
                        },
                        className: "mt-14 pt-10 border-t flex flex-wrap items-center justify-between gap-6",
                        style: {
                            borderColor: "#3D2E22"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-x-8 gap-y-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERTIFICATIONS_LIST"].map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[8.5px] uppercase tracking-[0.2em]",
                                        style: {
                                            color: "rgba(200,154,91,0.5)"
                                        },
                                        children: cert.name
                                    }, cert.id, false, {
                                        fileName: "[project]/components/products/ProductCertifications.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductCertifications.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[7.5px] uppercase tracking-[0.16em]",
                                style: {
                                    color: "rgba(230,210,185,0.3)"
                                },
                                children: "All certificates available on request"
                            }, void 0, false, {
                                fileName: "[project]/components/products/ProductCertifications.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/products/ProductCertifications.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/products/ProductCertifications.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/products/ProductCertifications.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(ProductCertifications, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ProductCertifications;
var _c;
__turbopack_context__.k.register(_c, "ProductCertifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/products/ExportQuoteCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExportQuoteCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
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
const ASSURANCES = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        text: "Response within 24 hours"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        text: "Export to 18+ countries"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        text: "Lead time from 3–5 weeks"
    }
];
function ExportQuoteCTA() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return(// Deep forest green — breaks the dark-dark stretch after Certifications
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden",
        style: {
            background: "#2D5228"
        },
        "aria-labelledby": "cta-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[2px] w-full",
                style: {
                    background: "linear-gradient(90deg, transparent 0%, #4A7A3D 35%, #7AAE6B 60%, transparent 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[800px] mx-auto text-center",
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
                                duration: 0.5,
                                ease: EASE
                            },
                            className: "font-mono text-[8px] uppercase tracking-[0.36em] mb-8",
                            style: {
                                color: "rgba(200,230,185,0.65)"
                            },
                            children: "Ready to source?"
                        }, void 0, false, {
                            fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            id: "cta-heading",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.72,
                                ease: EASE,
                                delay: 0.08
                            },
                            className: "font-display font-light leading-[0.9] mb-8",
                            style: {
                                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                                color: "#F6F1E8"
                            },
                            children: [
                                "Start your supply",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: "not-italic",
                                    style: {
                                        color: "#A8C686",
                                        fontStyle: "italic",
                                        fontFamily: "inherit"
                                    },
                                    children: "partnership"
                                }, void 0, false, {
                                    fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                "with Biopapro."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                            lineNumber: 46,
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
                                duration: 0.65,
                                ease: EASE,
                                delay: 0.16
                            },
                            className: "font-sans font-light text-base leading-relaxed mb-12 mx-auto",
                            style: {
                                color: "rgba(200,230,185,0.65)",
                                maxWidth: "520px"
                            },
                            children: "Tell us what you need — product, quantity, packaging, and destination. Our export team responds with a tailored quotation within 24 hours."
                        }, void 0, false, {
                            fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                            lineNumber: 65,
                            columnNumber: 11
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
                                duration: 0.62,
                                ease: EASE,
                                delay: 0.24
                            },
                            className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "group inline-flex items-center gap-2.5 px-9 py-4 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300",
                                    style: {
                                        background: "#F6F1E8",
                                        color: "#2D5228"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = "#FFFFFF";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = "#F6F1E8";
                                    },
                                    children: [
                                        "Request Export Quotation",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 12,
                                            strokeWidth: 2.5,
                                            className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:export@biopapro.com",
                                    className: "group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] transition-colors duration-200",
                                    style: {
                                        color: "rgba(168,198,134,0.75)"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.color = "rgba(168,198,134,1)",
                                    onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(168,198,134,0.75)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 10
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        "export@biopapro.com"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                            lineNumber: 77,
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
                                duration: 0.58,
                                ease: EASE,
                                delay: 0.32
                            },
                            className: "flex flex-col sm:flex-row items-center justify-center gap-8",
                            children: ASSURANCES.map((item)=>{
                                const Icon = item.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-7 h-7 flex items-center justify-center flex-shrink-0",
                                            style: {
                                                background: "rgba(168,198,134,0.15)",
                                                border: "1px solid rgba(168,198,134,0.3)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 11,
                                                style: {
                                                    color: "#A8C686"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                                                lineNumber: 125,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[8px] uppercase tracking-[0.18em]",
                                            style: {
                                                color: "rgba(200,230,185,0.55)"
                                            },
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.text, true, {
                                    fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/products/ExportQuoteCTA.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/products/ExportQuoteCTA.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this));
}
_s(ExportQuoteCTA, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ExportQuoteCTA;
var _c;
__turbopack_context__.k.register(_c, "ExportQuoteCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/products/ProductsClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProductsHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/products/ProductsHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProductFamilies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/products/ProductFamilies.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProductCatalogGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/products/ProductCatalogGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$PackagingExport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/products/PackagingExport.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProcurementTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/products/ProcurementTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProcurementResources$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/products/ProcurementResources.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProductCertifications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/products/ProductCertifications.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ExportQuoteCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/products/ExportQuoteCTA.tsx [app-client] (ecmascript)");
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
;
;
function ProductsClient() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    function handleCategorySelect(category) {
        setActiveCategory(category);
        // Smooth scroll to catalog section
        const el = document.getElementById("catalog");
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProductsHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/products/ProductsClient.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProductFamilies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onCategorySelect: handleCategorySelect
            }, void 0, false, {
                fileName: "[project]/app/products/ProductsClient.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProductCatalogGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeCategory: activeCategory,
                onCategoryChange: setActiveCategory
            }, void 0, false, {
                fileName: "[project]/app/products/ProductsClient.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$PackagingExport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/products/ProductsClient.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProcurementTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/products/ProductsClient.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProcurementResources$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/products/ProductsClient.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProductCertifications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/products/ProductsClient.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ExportQuoteCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/products/ProductsClient.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/products/ProductsClient.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(ProductsClient, "dXg2LpGdJ7VQ6CNKcLAC25AcxBc=");
_c = ProductsClient;
var _c;
__turbopack_context__.k.register(_c, "ProductsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e124c3ef._.js.map