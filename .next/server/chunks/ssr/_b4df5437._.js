module.exports = [
"[project]/components/global-presence/SpinningGlobe.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpinningGlobe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$orthographic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__geoOrthographic$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/projection/orthographic.js [app-ssr] (ecmascript) <export default as geoOrthographic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$path$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__geoPath$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/path/index.js [app-ssr] (ecmascript) <export default as geoPath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$graticule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__geoGraticule$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/graticule.js [app-ssr] (ecmascript) <export default as geoGraticule>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$interpolate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__geoInterpolate$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/interpolate.js [app-ssr] (ecmascript) <export default as geoInterpolate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$topojson$2d$client$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/topojson-client/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__feature$3e$__ = __turbopack_context__.i("[project]/node_modules/topojson-client/src/feature.js [app-ssr] (ecmascript) <export default as feature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const SIZE = 440;
const R = SIZE / 2 - 6;
const CX = SIZE / 2;
const CY = SIZE / 2;
const SPEED = 0.10; // degrees per frame at ~30fps
const INDIA = [
    72.8,
    19.1
];
// Key export routes — great-circle arcs, dots animate along each
const ROUTES = [
    {
        name: "USA",
        to: [
            -77.0,
            38.9
        ],
        dur: 9000,
        offset: 0
    },
    {
        name: "Canada",
        to: [
            -75.7,
            45.4
        ],
        dur: 10500,
        offset: 1200
    },
    {
        name: "Mexico",
        to: [
            -99.1,
            19.4
        ],
        dur: 11000,
        offset: 3000
    },
    {
        name: "UK",
        to: [
            -0.1,
            51.5
        ],
        dur: 7500,
        offset: 800
    },
    {
        name: "Germany",
        to: [
            13.4,
            52.5
        ],
        dur: 7000,
        offset: 400
    },
    {
        name: "Netherlands",
        to: [
            4.9,
            52.4
        ],
        dur: 7200,
        offset: 600
    },
    {
        name: "UAE",
        to: [
            55.3,
            25.2
        ],
        dur: 4000,
        offset: 200
    },
    {
        name: "Qatar",
        to: [
            51.5,
            25.3
        ],
        dur: 4500,
        offset: 500
    },
    {
        name: "Mauritius",
        to: [
            57.6,
            -20.2
        ],
        dur: 5500,
        offset: 1800
    },
    {
        name: "Maldives",
        to: [
            73.5,
            4.2
        ],
        dur: 3500,
        offset: 100
    },
    {
        name: "Australia",
        to: [
            151.2,
            -33.9
        ],
        dur: 12000,
        offset: 2500
    }
];
// True if a lon/lat point faces the viewer given the current globe rotation
function isFront(lon, lat, rot) {
    const toRad = Math.PI / 180;
    const cLon = -rot[0] * toRad;
    const cLat = -rot[1] * toRad;
    const pLon = lon * toRad;
    const pLat = lat * toRad;
    return Math.sin(cLat) * Math.sin(pLat) + Math.cos(cLat) * Math.cos(pLat) * Math.cos(pLon - cLon) > 0;
}
function SpinningGlobe({ triggered }) {
    // Rotation ref — avoids stale closure, starts centred on India
    const rotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([
        -72.8,
        -19.1,
        0
    ]);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch topology — small public file, cached by browser after first load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/world-110m.json").then((r)=>r.json()).then((topo)=>{
            const countries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__feature$3e$__["feature"])(topo, topo.objects.countries);
            const indiaGeo = topo.objects.countries.geometries.find((g)=>Number(g.id) === 356);
            const india = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__feature$3e$__["feature"])(topo, indiaGeo);
            setData({
                countries,
                india
            });
            setLoaded(true);
        });
    }, []);
    // Animation loop — ~30fps
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!triggered) return;
        let last = 0;
        const loop = (t)=>{
            if (t - last > 33) {
                rotRef.current = [
                    rotRef.current[0] - SPEED,
                    rotRef.current[1],
                    0
                ];
                setTick((n)=>n + 1);
                last = t;
            }
            animRef.current = requestAnimationFrame(loop);
        };
        animRef.current = requestAnimationFrame(loop);
        return ()=>cancelAnimationFrame(animRef.current);
    }, [
        triggered
    ]);
    const rot = rotRef.current;
    const proj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$orthographic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__geoOrthographic$3e$__["geoOrthographic"])().scale(R).translate([
        CX,
        CY
    ]).rotate(rot).clipAngle(90);
    const pathFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$path$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__geoPath$3e$__["geoPath"])(proj);
    const graticuleLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$graticule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__geoGraticule$3e$__["geoGraticule"])().step([
        20,
        20
    ])();
    // Compute animated dot positions
    const now = Date.now();
    const dots = ROUTES.map((r)=>{
        const elapsed = (now + r.offset) % r.dur;
        const frac = elapsed / r.dur;
        const [lon, lat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$interpolate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__geoInterpolate$3e$__["geoInterpolate"])(INDIA, r.to)(frac);
        const front = isFront(lon, lat, rot);
        const pt = proj([
            lon,
            lat
        ]);
        return {
            ...r,
            pt,
            front
        };
    });
    // India dot position
    const indiaPt = proj(INDIA);
    const indiaFront = isFront(INDIA[0], INDIA[1], rot);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        style: {
            width: "100%",
            maxWidth: SIZE
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.92
                },
                animate: triggered ? {
                    opacity: 1,
                    scale: 1
                } : {},
                transition: {
                    duration: 0.7,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: `0 0 ${SIZE} ${SIZE}`,
                    style: {
                        width: "100%",
                        height: "auto",
                        display: "block"
                    },
                    "aria-label": "Spinning globe showing Biopapro export routes from India",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                    id: "globe-sphere-clip",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: CX,
                                        cy: CY,
                                        r: R
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                    id: "globe-ocean",
                                    cx: "36%",
                                    cy: "32%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#FAF5EC"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "70%",
                                            stopColor: "#F0E8D8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#E8DEC8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                    id: "globe-sheen",
                                    cx: "30%",
                                    cy: "25%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "rgba(255,255,255,0.18)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "rgba(255,255,255,0)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: CX,
                            cy: CY,
                            r: R,
                            fill: "url(#globe-ocean)"
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            clipPath: "url(#globe-sphere-clip)",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: pathFn(graticuleLine) ?? "",
                                    fill: "none",
                                    stroke: "rgba(200,154,91,0.1)",
                                    strokeWidth: 0.5
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: pathFn(data.countries) ?? "",
                                    fill: "rgba(200,154,91,0.18)",
                                    stroke: "rgba(200,154,91,0.45)",
                                    strokeWidth: 0.4
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: pathFn(data.india) ?? "",
                                    fill: "rgba(200,154,91,0.62)",
                                    stroke: "rgba(200,154,91,0.85)",
                                    strokeWidth: 0.7
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                triggered && ROUTES.map((r)=>{
                                    const routeGeo = {
                                        type: "Feature",
                                        properties: {},
                                        geometry: {
                                            type: "LineString",
                                            // 32 interpolated points gives a smooth great-circle arc
                                            coordinates: Array.from({
                                                length: 33
                                            }, (_, i)=>{
                                                const [lon, lat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$interpolate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__geoInterpolate$3e$__["geoInterpolate"])(INDIA, r.to)(i / 32);
                                                return [
                                                    lon,
                                                    lat
                                                ];
                                            })
                                        }
                                    };
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: pathFn(routeGeo) ?? "",
                                        fill: "none",
                                        stroke: "rgba(200,154,91,0.5)",
                                        strokeWidth: 0.75,
                                        strokeDasharray: "3 2.5",
                                        strokeLinecap: "round"
                                    }, r.name, false, {
                                        fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this);
                                }),
                                triggered && dots.map((dot)=>dot.front && dot.pt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: dot.pt[0],
                                        cy: dot.pt[1],
                                        r: 2.8,
                                        fill: "#C89A5B",
                                        opacity: 0.92
                                    }, dot.name, false, {
                                        fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this) : null),
                                indiaFront && indiaPt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: indiaPt[0],
                                            cy: indiaPt[1],
                                            r: 14,
                                            fill: "rgba(200,154,91,0.08)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: indiaPt[0],
                                            cy: indiaPt[1],
                                            r: 9,
                                            fill: "rgba(200,154,91,0.18)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: indiaPt[0],
                                            cy: indiaPt[1],
                                            r: 5.5,
                                            fill: "#C89A5B"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: indiaPt[0],
                                            cy: indiaPt[1],
                                            r: 2.8,
                                            fill: "#8C6239"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: CX,
                            cy: CY,
                            r: R,
                            fill: "url(#globe-sheen)"
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: CX,
                            cy: CY,
                            r: R,
                            fill: "none",
                            stroke: "rgba(200,154,91,0.3)",
                            strokeWidth: 1
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: triggered ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    delay: 0.55,
                    duration: 0.5
                },
                className: "absolute bottom-3 left-3 px-3 py-2.5",
                style: {
                    background: "#1D1610",
                    border: "1px solid #3D2E22"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-mono text-[7px] uppercase tracking-[0.22em]",
                        style: {
                            color: "rgba(200,154,91,0.7)"
                        },
                        children: "Manufacturing Origin"
                    }, void 0, false, {
                        fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-mono text-[9px] uppercase tracking-[0.14em] mt-0.5",
                        style: {
                            color: "#F6F1E8"
                        },
                        children: "Mumbai, India"
                    }, void 0, false, {
                        fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            !loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                style: {
                    background: "rgba(246,241,232,0.6)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full border-2 border-amber-300 border-t-amber-600 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                    lineNumber: 264,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/global-presence/SpinningGlobe.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
}),
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
"[project]/lib/global-presence-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Biopapro Global Presence Data
 * Source: Live audit of biopapro.com — all data is real
 *
 * SVG coordinate system: viewBox="0 0 200 91" — equirectangular projection
 * Formula: x = (lon + 180) / 360 × 200
 *          y = (90 - lat) / 180 × 91
 */ __turbopack_context__.s([
    "COMPANY_FACTS",
    ()=>COMPANY_FACTS,
    "INDIA_ORIGIN",
    ()=>INDIA_ORIGIN,
    "INDUSTRIES",
    ()=>INDUSTRIES,
    "JOURNEY_STEPS",
    ()=>JOURNEY_STEPS,
    "MARKETS",
    ()=>MARKETS,
    "OFFICES",
    ()=>OFFICES,
    "PROCUREMENT_STATS",
    ()=>PROCUREMENT_STATS,
    "REGIONS",
    ()=>REGIONS,
    "REGION_DATA",
    ()=>REGION_DATA,
    "SHIPPING_ROUTES",
    ()=>SHIPPING_ROUTES,
    "TRUST_SIGNALS",
    ()=>TRUST_SIGNALS
]);
const REGIONS = [
    "Americas",
    "Europe",
    "Middle East",
    "Africa",
    "Asia",
    "Pacific"
];
const INDIA_ORIGIN = {
    mx: 140,
    my: 36
};
const MARKETS = [
    // Americas — x range ~6–67
    {
        name: "United States",
        region: "Americas",
        mx: 57,
        my: 26
    },
    {
        name: "Canada",
        region: "Americas",
        mx: 58,
        my: 23
    },
    {
        name: "Mexico",
        region: "Americas",
        mx: 45,
        my: 36
    },
    // Europe — x range ~95–120, y range ~10–28
    {
        name: "United Kingdom",
        region: "Europe",
        mx: 100,
        my: 19
    },
    {
        name: "Ireland",
        region: "Europe",
        mx: 97,
        my: 19
    },
    {
        name: "Germany",
        region: "Europe",
        mx: 107,
        my: 19
    },
    {
        name: "Netherlands",
        region: "Europe",
        mx: 103,
        my: 19
    },
    {
        name: "Spain",
        region: "Europe",
        mx: 98,
        my: 25
    },
    {
        name: "Poland",
        region: "Europe",
        mx: 112,
        my: 19
    },
    {
        name: "Greece",
        region: "Europe",
        mx: 113,
        my: 26
    },
    {
        name: "Romania",
        region: "Europe",
        mx: 115,
        my: 23
    },
    // Middle East — x ~128–132, y ~32–34
    {
        name: "UAE",
        region: "Middle East",
        mx: 131,
        my: 33
    },
    {
        name: "Qatar",
        region: "Middle East",
        mx: 129,
        my: 33
    },
    {
        name: "Bahrain",
        region: "Middle East",
        mx: 128,
        my: 32
    },
    // Africa / Indian Ocean
    {
        name: "Mauritius",
        region: "Africa",
        mx: 132,
        my: 56
    },
    // Asia
    {
        name: "Maldives",
        region: "Asia",
        mx: 141,
        my: 43
    },
    // Pacific
    {
        name: "Australia",
        region: "Pacific",
        mx: 184,
        my: 63
    }
];
const REGION_DATA = {
    Americas: {
        markets: 3,
        label: "North & South America",
        growth: "+12% YoY"
    },
    Europe: {
        markets: 7,
        label: "European Union & UK",
        growth: "+18% YoY"
    },
    "Middle East": {
        markets: 3,
        label: "Gulf Cooperation Council",
        growth: "+31% YoY"
    },
    Africa: {
        markets: 1,
        label: "Africa & Indian Ocean",
        growth: "Expanding"
    },
    Asia: {
        markets: 1,
        label: "South & Southeast Asia",
        growth: "+22% YoY"
    },
    Pacific: {
        markets: 1,
        label: "Asia-Pacific",
        growth: "+9% YoY"
    }
};
const SHIPPING_ROUTES = [
    {
        id: "europe",
        to: {
            mx: 105,
            my: 20
        },
        dur: "7s",
        begin: "0s"
    },
    {
        id: "americas",
        to: {
            mx: 55,
            my: 26
        },
        dur: "9s",
        begin: "1.5s"
    },
    {
        id: "me",
        to: {
            mx: 129,
            my: 33
        },
        dur: "5s",
        begin: "0.8s"
    },
    {
        id: "africa",
        to: {
            mx: 132,
            my: 56
        },
        dur: "6s",
        begin: "2.2s"
    },
    {
        id: "pacific",
        to: {
            mx: 184,
            my: 63
        },
        dur: "8s",
        begin: "1s"
    },
    {
        id: "asia",
        to: {
            mx: 141,
            my: 43
        },
        dur: "4s",
        begin: "0.4s"
    }
];
const COMPANY_FACTS = {
    founded: 2019,
    location: "Mumbai, Maharashtra, India",
    employees: 380,
    womenPercent: 70,
    unitsPerMonth: 100_000_000,
    tonsPerMonth: 300,
    plasticSavedPerDay: 6500,
    exportMarkets: 18,
    certifications: 6
};
const OFFICES = [
    {
        region: "India — Manufacturing HQ",
        address: "G1 Khetwadi, 12th Lane, Girgaon, Mumbai 400004, Maharashtra",
        email: "yash@biopapro.com",
        phone: "+91 70211 03763",
        type: "origin"
    }
];
const INDUSTRIES = [
    {
        id: "airlines",
        name: "Airlines",
        icon: "✈",
        description: "FSC-certified wooden cutlery compliant with aviation food-safety requirements. Individually sleeved options for tray setup.",
        products: [
            "Birchwood Spork",
            "Individual Packed Fork",
            "Individual Packed Spoon",
            "Cutlery Sets"
        ],
        moq: "100,000 pcs",
        clients: "Major carriers across Europe, Middle East & Pacific"
    },
    {
        id: "hospitality",
        name: "Hotels & Hospitality",
        icon: "🏨",
        description: "Room service kits, in-room dining, minibar amenities, and catering for 5-star properties requiring sustainable tableware.",
        products: [
            "Cutlery Sets",
            "Coffee Stirrers",
            "Individual Packed Sets"
        ],
        moq: "50,000 pcs",
        clients: "International hotel groups across UAE, Europe & Asia"
    },
    {
        id: "foodservice",
        name: "Food Service Operators",
        icon: "🍽",
        description: "High-volume bulk supply for QSR chains, canteens, and corporate catering. Container-level ordering with consistent lead times.",
        products: [
            "Forks",
            "Spoons",
            "Knives",
            "Sporks",
            "Coffee Stirrers"
        ],
        moq: "100,000 pcs",
        clients: "QSR chains, corporate canteens, stadium operators"
    },
    {
        id: "catering",
        name: "Catering & Events",
        icon: "🎪",
        description: "Event-scale supply for concerts, festivals, conferences, and banquets. Bulk packaging designed for rapid service line setup.",
        products: [
            "Sporks",
            "Skewers",
            "Cutlery Sets",
            "Paper Straws"
        ],
        moq: "50,000 pcs",
        clients: "Event caterers, stadium operators, festival organizers"
    },
    {
        id: "distribution",
        name: "Distributors & Importers",
        icon: "📦",
        description: "FCL and LCL container volumes for regional distributors managing multiple downstream food-service accounts.",
        products: [
            "Full product range",
            "Custom packaging",
            "Private label OEM"
        ],
        moq: "20,000 pcs",
        clients: "Regional FMCG distributors across all 18+ export markets"
    },
    {
        id: "retail",
        name: "Retail & Packaging",
        icon: "🛍",
        description: "Branded kraft-paper sleeved cutlery for retail display. Custom packaging design and private-label branding available.",
        products: [
            "Individually Sleeved Sets",
            "Custom Packaging"
        ],
        moq: "50,000 sets",
        clients: "European supermarket chains, specialty retail, e-commerce"
    }
];
const JOURNEY_STEPS = [
    {
        step: "01",
        title: "FSC-Certified Forest",
        body: "Birchwood sourced exclusively from FSC-certified forests. Chain-of-custody documentation issued at point of harvest.",
        tag: "Sustainable Sourcing"
    },
    {
        step: "02",
        title: "Raw Material Intake",
        body: "Birchwood billets inspected, graded, and moisture-tested on arrival at the Mumbai manufacturing facility.",
        tag: "Quality Gate 1"
    },
    {
        step: "03",
        title: "Precision Stamping",
        body: "High-speed stamping lines cut each product to dimensional tolerance. 300+ tons of cutlery produced monthly.",
        tag: "Manufacturing"
    },
    {
        step: "04",
        title: "Optical Sorting & QC",
        body: "Automated optical sorting removes sub-specification units. Manual QC inspection per ISO 9001:2015 procedures.",
        tag: "Quality Gate 2"
    },
    {
        step: "05",
        title: "UV Sterilisation",
        body: "Every unit passes through UV sterilisation tunnel before packing. Food-contact safe per FDA CFR 21 and EU 10/2011.",
        tag: "Food Safety"
    },
    {
        step: "06",
        title: "Export Packaging",
        body: "Packed into OPP bags (100 or 500 units), then into standardised export cartons sized for container optimisation.",
        tag: "Packaging"
    },
    {
        step: "07",
        title: "Container Loading",
        body: "20ft or 40ft FCL containers loaded at Mumbai port. LCL consolidation available for smaller order quantities.",
        tag: "Logistics"
    },
    {
        step: "08",
        title: "Ocean Freight",
        body: "Container departs Mumbai port. Transit time 10–28 days depending on destination. Customs docs issued at loading.",
        tag: "Shipping"
    },
    {
        step: "09",
        title: "Delivered to Buyer",
        body: "Container arrives at destination port. Full documentation package: COO, phytosanitary cert, FSC cert, invoices.",
        tag: "Delivery"
    }
];
const TRUST_SIGNALS = [
    {
        label: "FSC® Certified",
        detail: "Chain of Custody verified for every batch",
        tag: "Forest Stewardship"
    },
    {
        label: "ISO 9001:2015",
        detail: "Quality management across all production",
        tag: "Quality System"
    },
    {
        label: "FDA CFR 21",
        detail: "Food-contact safe for US market imports",
        tag: "US Compliance"
    },
    {
        label: "EU 10/2011",
        detail: "European food-contact materials regulation",
        tag: "EU Compliance"
    },
    {
        label: "BPI Compostable",
        detail: "Independently verified industrial compostability",
        tag: "Sustainability"
    },
    {
        label: "BSCI Audited",
        detail: "Independent social compliance audit passed",
        tag: "Ethics"
    },
    {
        label: "380+ Workforce",
        detail: "Scalable production capacity on demand",
        tag: "Scale"
    }
];
const PROCUREMENT_STATS = [
    {
        value: "100M",
        suffix: "+",
        label: "Units / Month",
        sub: "Production capacity"
    },
    {
        value: "300",
        suffix: "T",
        label: "Tons / Month",
        sub: "Birchwood processed"
    },
    {
        value: "18",
        suffix: "+",
        label: "Export Markets",
        sub: "Active destinations"
    },
    {
        value: "6,500",
        suffix: "kg",
        label: "Plastic Saved Daily",
        sub: "Environmental impact"
    },
    {
        value: "380",
        suffix: "+",
        label: "Employees",
        sub: "70%+ women"
    },
    {
        value: "6",
        suffix: "",
        label: "Certifications",
        sub: "FSC · ISO · FDA · BPI · BSCI · EU"
    }
];
}),
"[project]/components/global-presence/GlobalHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$SpinningGlobe$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/global-presence/SpinningGlobe.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/global-presence-data.ts [app-ssr] (ecmascript)");
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
function GlobalHero() {
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
        "aria-labelledby": "global-hero-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[2px] w-full",
                style: {
                    background: "linear-gradient(90deg, transparent 0%, #C89A5B 30%, #8C6239 60%, transparent 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 pt-16 pb-12 lg:pt-20 lg:pb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 xl:col-span-5 flex flex-col justify-center",
                                children: [
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
                                            duration: 0.55,
                                            ease: EASE
                                        },
                                        className: "mb-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            index: "01",
                                            label: "Global Presence"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                        id: "global-hero-heading",
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
                                            fontSize: "clamp(2.8rem, 5vw, 4.8rem)"
                                        },
                                        children: [
                                            "Manufactured",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            "in India.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                className: "not-italic",
                                                style: {
                                                    color: "#C89A5B",
                                                    fontStyle: "italic",
                                                    fontFamily: "inherit"
                                                },
                                                children: "Delivered"
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            "worldwide."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                        lineNumber: 44,
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
                                        className: "font-sans font-light text-ink-light leading-relaxed max-w-[480px] mb-10",
                                        style: {
                                            fontSize: "clamp(0.875rem, 1.2vw, 1rem)"
                                        },
                                        children: [
                                            "From a single manufacturing ecosystem in Mumbai, Biopapro supplies",
                                            " ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPANY_FACTS"].exportMarkets,
                                            "+ international markets with FSC-certified birchwood tableware — on time, at scale, with complete export documentation."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                        lineNumber: 62,
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
                                        className: "flex flex-wrap gap-0 mb-10 border border-border",
                                        children: [
                                            {
                                                value: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPANY_FACTS"].exportMarkets}+`,
                                                label: "Export Markets"
                                            },
                                            {
                                                value: "100M+",
                                                label: "Units / Month"
                                            },
                                            {
                                                value: "380+",
                                                label: "Employees"
                                            }
                                        ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center px-6 py-4 flex-1",
                                                style: {
                                                    borderRight: i < 2 ? "1px solid #DDD3C5" : "none"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-[1.4rem] leading-none",
                                                        style: {
                                                            color: "#C89A5B"
                                                        },
                                                        children: s.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[7.5px] uppercase tracking-[0.18em] text-ink-muted mt-1 text-center",
                                                        children: s.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, s.label, true, {
                                                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                        lineNumber: 75,
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
                                        className: "flex flex-wrap gap-2 mb-10",
                                        children: [
                                            {
                                                location: "Mumbai, India",
                                                label: "Manufacturing HQ"
                                            }
                                        ].map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-3 py-1.5",
                                                style: {
                                                    border: "1px solid #DDD3C5",
                                                    background: "rgba(255,255,255,0.5)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                                        style: {
                                                            background: "#C89A5B"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[7.5px] uppercase tracking-[0.16em] text-ink-muted",
                                                        children: o.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, o.location, true, {
                                                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                        lineNumber: 102,
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
                                            delay: 0.34
                                        },
                                        className: "flex flex-wrap items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300",
                                                style: {
                                                    background: "#4A7A3D"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.background = "#2D5228",
                                                onMouseLeave: (e)=>e.currentTarget.style.background = "#4A7A3D",
                                                children: [
                                                    "Request Export Quote",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 11,
                                                        strokeWidth: 2.5,
                                                        className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#origin",
                                                className: "font-mono text-[9px] uppercase tracking-[0.2em] transition-colors duration-200 text-ink-muted hover:text-ink",
                                                children: "Explore supply network →"
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "lg:col-span-6 xl:col-span-7 flex items-center justify-center",
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
                                    delay: 0.12
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$SpinningGlobe$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    triggered: inView
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                        lineNumber: 31,
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
                            duration: 0.65,
                            ease: EASE,
                            delay: 0.55
                        },
                        className: "border-t pb-10 pt-6 flex flex-wrap items-center gap-x-6 gap-y-2",
                        style: {
                            borderColor: "#DDD3C5"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[7.5px] uppercase tracking-[0.28em] text-ink-muted",
                                children: "Active markets"
                            }, void 0, false, {
                                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKETS"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[7.5px] uppercase tracking-[0.1em] text-ink-muted opacity-60",
                                    children: m.name
                                }, m.name, false, {
                                    fileName: "[project]/components/global-presence/GlobalHero.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/global-presence/GlobalHero.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/global-presence/GlobalHero.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/global-presence/GlobalHero.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/global-presence/OriginToWorld.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OriginToWorld
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$equirectangular$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__geoEquirectangular$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/projection/equirectangular.js [app-ssr] (ecmascript) <export default as geoEquirectangular>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-simple-maps/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/global-presence-data.ts [app-ssr] (ecmascript)");
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
const INDIA_ID = "356";
const MAP_W = 800;
const MAP_H = 420;
const proj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$equirectangular$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__geoEquirectangular$3e$__["geoEquirectangular"])().scale(140).center([
    20,
    10
]).translate([
    MAP_W / 2,
    MAP_H / 2
]);
const INDIA_LONLAT = [
    72.8,
    19.1
];
const [INDIA_X, INDIA_Y] = proj(INDIA_LONLAT);
// [longitude, latitude] for each market
const MARKET_LONLAT = {
    "United States": [
        -77.0,
        38.9
    ],
    "Canada": [
        -75.7,
        45.4
    ],
    "Mexico": [
        -99.1,
        19.4
    ],
    "United Kingdom": [
        -0.1,
        51.5
    ],
    "Ireland": [
        -6.3,
        53.3
    ],
    "Germany": [
        13.4,
        52.5
    ],
    "Netherlands": [
        4.9,
        52.4
    ],
    "Spain": [
        -3.7,
        40.4
    ],
    "Poland": [
        21.0,
        52.2
    ],
    "Greece": [
        23.7,
        37.9
    ],
    "Romania": [
        26.1,
        44.4
    ],
    "UAE": [
        55.3,
        25.2
    ],
    "Qatar": [
        51.5,
        25.3
    ],
    "Bahrain": [
        50.6,
        26.1
    ],
    "Mauritius": [
        57.6,
        -20.2
    ],
    "Maldives": [
        73.5,
        4.2
    ],
    "Australia": [
        151.2,
        -33.9
    ]
};
function arcD(to) {
    const [x2, y2] = proj(to);
    const cx = (INDIA_X + x2) / 2;
    const cy = Math.min(INDIA_Y, y2) - Math.abs(x2 - INDIA_X) * 0.22;
    return `M ${INDIA_X},${INDIA_Y} Q ${cx},${Math.max(4, cy)} ${x2},${y2}`;
}
const ROUTE_PATHS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKETS"].map((m, i)=>{
    const coords = MARKET_LONLAT[m.name];
    if (!coords) return null;
    const [dx, dy] = proj(coords);
    return {
        name: m.name,
        region: m.region,
        d: arcD(coords),
        dx,
        dy,
        delay: 0.4 + i * 0.05
    };
}).filter(Boolean);
// Region label positions [lon, lat]
const REGION_LABELS = [
    {
        label: "AMERICAS",
        coords: [
            -90,
            15
        ]
    },
    {
        label: "EUROPE",
        coords: [
            15,
            58
        ]
    },
    {
        label: "MIDDLE EAST",
        coords: [
            50,
            32
        ]
    },
    {
        label: "AFRICA",
        coords: [
            20,
            5
        ]
    },
    {
        label: "ASIA",
        coords: [
            110,
            35
        ]
    },
    {
        label: "PACIFIC",
        coords: [
            160,
            -15
        ]
    }
];
const CHAIN_STEPS = [
    {
        label: "Factory",
        sub: "Mumbai, India"
    },
    {
        label: "Packaging",
        sub: "OPP bags, cartons"
    },
    {
        label: "Container Loading",
        sub: "20ft / 40ft FCL"
    },
    {
        label: "Port Export",
        sub: "JNPT, Mumbai"
    },
    {
        label: "Destination",
        sub: "18+ countries"
    }
];
function OriginToWorld() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    const [activeRegion, setActiveRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredMarket, setHoveredMarket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const visibleMarkets = activeRegion ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKETS"].filter((m)=>m.region === activeRegion) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKETS"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "origin",
        style: {
            background: "#EFE6D7"
        },
        "aria-labelledby": "origin-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
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
                                label: "From India to the World"
                            }, void 0, false, {
                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "origin-heading",
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
                                        fontSize: "clamp(2rem, 3.8vw, 3.4rem)"
                                    },
                                    children: [
                                        "Every shipment",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "starts here."
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                    lineNumber: 110,
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
                                    className: "font-sans font-light text-ink-light text-base leading-relaxed flex items-center",
                                    children: [
                                        "From Biopapro's manufacturing facility in Mumbai, export containers reach ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPANY_FACTS"].exportMarkets,
                                        "+ markets across 6 continents. FCL and LCL on rolling schedules. Every shipment leaves with full documentation."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "lg:col-span-3",
                            initial: {
                                opacity: 0,
                                x: -16
                            },
                            animate: inView ? {
                                opacity: 1,
                                x: 0
                            } : {},
                            transition: {
                                duration: 0.65,
                                ease: EASE,
                                delay: 0.22
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 flex flex-col",
                                style: {
                                    background: "#FBF8F2",
                                    border: "1px solid #DDD3C5"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-5 pb-4 border-b",
                                        style: {
                                            borderColor: "#EDE5D8"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans text-[11px] font-semibold text-ink-muted mb-2",
                                                children: "Manufacturing Origin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display font-light text-ink",
                                                style: {
                                                    fontSize: "1.15rem",
                                                    lineHeight: 1.2
                                                },
                                                children: [
                                                    "Mumbai,",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 26
                                                    }, this),
                                                    "India"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full",
                                                        style: {
                                                            background: "#C89A5B"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-sans text-[11px] text-ink-muted",
                                                        children: [
                                                            "Est. ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPANY_FACTS"].founded
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 mb-5",
                                        children: [
                                            {
                                                v: "100M+",
                                                l: "Units / Month"
                                            },
                                            {
                                                v: "300+T",
                                                l: "Monthly Capacity"
                                            },
                                            {
                                                v: "380+",
                                                l: "Employees"
                                            }
                                        ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-[1rem] leading-none",
                                                        style: {
                                                            color: "#C89A5B"
                                                        },
                                                        children: m.v
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-sans text-[12px] text-ink-muted",
                                                        children: m.l
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, m.l, true, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t pt-4",
                                        style: {
                                            borderColor: "#EDE5D8"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans text-[11px] font-semibold text-ink-muted mb-3",
                                                children: "Supply Chain"
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-0",
                                                children: CHAIN_STEPS.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2.5 py-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-2 h-2 rounded-full flex-shrink-0",
                                                                        style: {
                                                                            background: i === 0 ? "#C89A5B" : i === CHAIN_STEPS.length - 1 ? "#4A7A3D" : "#DDD3C5",
                                                                            border: "1.5px solid #DDD3C5"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-sans text-[12px] font-semibold text-ink leading-none",
                                                                                children: step.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                                lineNumber: 191,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-sans text-[11px] text-ink-muted mt-0.5",
                                                                                children: step.sub
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                        lineNumber: 190,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 23
                                                            }, this),
                                                            i < CHAIN_STEPS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-[3.5px] w-px h-3",
                                                                style: {
                                                                    background: "#DDD3C5"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, step.label, true, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-4 border-t",
                                        style: {
                                            borderColor: "#EDE5D8"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans text-[12px] font-semibold px-2.5 py-1.5",
                                            style: {
                                                border: "1px solid rgba(74,122,61,0.3)",
                                                color: "#4A7A3D",
                                                background: "rgba(74,122,61,0.06)"
                                            },
                                            children: "FSC® 100% Certified"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "lg:col-span-6",
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
                                delay: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveRegion(null),
                                            className: "font-sans text-[12px] uppercase tracking-[0.1em] px-3 py-2 transition-all duration-200",
                                            style: {
                                                background: !activeRegion ? "#C89A5B" : "transparent",
                                                color: !activeRegion ? "#1D1610" : "#6B5D50",
                                                border: `1px solid ${!activeRegion ? "#C89A5B" : "#DDD3C5"}`
                                            },
                                            children: [
                                                "All (",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKETS"].length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGIONS"].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveRegion(activeRegion === r ? null : r),
                                                className: "font-sans text-[12px] uppercase tracking-[0.1em] px-3 py-2 transition-all duration-200",
                                                style: {
                                                    background: activeRegion === r ? "#C89A5B" : "transparent",
                                                    color: activeRegion === r ? "#1D1610" : "#6B5D50",
                                                    border: `1px solid ${activeRegion === r ? "#C89A5B" : "#DDD3C5"}`
                                                },
                                                children: [
                                                    r,
                                                    " (",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGION_DATA"][r].markets,
                                                    ")"
                                                ]
                                            }, r, true, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative border overflow-hidden",
                                    style: {
                                        background: "#F5EFE4",
                                        borderColor: "#DDD3C5"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComposableMap"], {
                                            projection: "geoEquirectangular",
                                            projectionConfig: {
                                                scale: 140,
                                                center: [
                                                    20,
                                                    10
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Geographies"], {
                                                    geography: GEO_URL,
                                                    children: ({ geographies })=>geographies.map((geo)=>{
                                                            const isIndia = String(geo.id) === INDIA_ID;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$maps$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Geography"], {
                                                                geography: geo,
                                                                fill: isIndia ? "rgba(200,154,91,0.55)" : "rgba(200,154,91,0.16)",
                                                                stroke: "rgba(200,154,91,0.45)",
                                                                strokeWidth: isIndia ? 0.8 : 0.3,
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
                                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 25
                                                            }, this);
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 17
                                                }, this),
                                                inView && ROUTE_PATHS.map((r)=>{
                                                    const isActive = !activeRegion || r.region === activeRegion;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                                                        d: r.d,
                                                        fill: "none",
                                                        stroke: isActive ? "rgba(200,154,91,0.65)" : "rgba(200,154,91,0.12)",
                                                        strokeWidth: isActive ? 0.8 : 0.4,
                                                        strokeDasharray: "4 3",
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
                                                            duration: 1.8,
                                                            delay: r.delay,
                                                            ease: "easeOut"
                                                        }
                                                    }, `route-${r.name}`, false, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 21
                                                    }, this);
                                                }),
                                                REGION_LABELS.map((lbl)=>{
                                                    const [lx, ly] = proj(lbl.coords);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: lx,
                                                        y: ly,
                                                        textAnchor: "middle",
                                                        style: {
                                                            fontFamily: "JetBrains Mono, monospace",
                                                            fontSize: 7,
                                                            fill: "rgba(140,98,57,0.38)",
                                                            letterSpacing: "0.12em",
                                                            fontWeight: 600,
                                                            pointerEvents: "none",
                                                            userSelect: "none"
                                                        },
                                                        children: lbl.label
                                                    }, lbl.label, false, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 21
                                                    }, this);
                                                }),
                                                ROUTE_PATHS.map((r, i)=>{
                                                    const isActive = !activeRegion || r.region === activeRegion;
                                                    const isHovered = hoveredMarket === r.name;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
                                                        initial: {
                                                            opacity: 0,
                                                            scale: 0
                                                        },
                                                        animate: inView ? {
                                                            opacity: isActive ? 1 : 0.2,
                                                            scale: 1
                                                        } : {},
                                                        transition: {
                                                            delay: 0.6 + i * 0.04,
                                                            duration: 0.3,
                                                            ease: EASE
                                                        },
                                                        style: {
                                                            transformOrigin: `${r.dx}px ${r.dy}px`,
                                                            cursor: "pointer"
                                                        },
                                                        onMouseEnter: ()=>setHoveredMarket(r.name),
                                                        onMouseLeave: ()=>setHoveredMarket(null),
                                                        children: [
                                                            isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                                cx: r.dx,
                                                                cy: r.dy,
                                                                r: 6,
                                                                fill: "none",
                                                                stroke: "rgba(200,154,91,0.5)",
                                                                strokeWidth: 0.8,
                                                                animate: {
                                                                    r: [
                                                                        6,
                                                                        11
                                                                    ],
                                                                    opacity: [
                                                                        0.7,
                                                                        0
                                                                    ]
                                                                },
                                                                transition: {
                                                                    duration: 1.2,
                                                                    repeat: Infinity
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: r.dx,
                                                                cy: r.dy,
                                                                r: 3,
                                                                fill: isHovered ? "#C89A5B" : "rgba(250,245,236,0.9)",
                                                                stroke: "#C89A5B",
                                                                strokeWidth: 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 23
                                                            }, this),
                                                            isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: r.dx,
                                                                y: r.dy - 8,
                                                                textAnchor: "middle",
                                                                style: {
                                                                    fontFamily: "JetBrains Mono, monospace",
                                                                    fontSize: 7,
                                                                    fill: "#1D1610",
                                                                    fontWeight: 600
                                                                },
                                                                children: r.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, r.name, true, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 21
                                                    }, this);
                                                }),
                                                [
                                                    10,
                                                    16,
                                                    22
                                                ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                        cx: INDIA_X,
                                                        cy: INDIA_Y,
                                                        r: r,
                                                        fill: "none",
                                                        stroke: "rgba(200,154,91,0.3)",
                                                        strokeWidth: 0.5,
                                                        animate: inView ? {
                                                            r: [
                                                                r,
                                                                r + 8
                                                            ],
                                                            opacity: [
                                                                0.6,
                                                                0
                                                            ]
                                                        } : {},
                                                        transition: {
                                                            delay: 0.5 + i * 0.4,
                                                            duration: 2.5,
                                                            repeat: Infinity,
                                                            repeatDelay: 1.5
                                                        }
                                                    }, `pulse-${r}`, false, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: INDIA_X,
                                                    cy: INDIA_Y,
                                                    r: 5,
                                                    fill: "#C89A5B"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: INDIA_X,
                                                    cy: INDIA_Y,
                                                    r: 2.5,
                                                    fill: "#8C6239"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: INDIA_X + 7,
                                                    y: INDIA_Y - 10,
                                                    width: 52,
                                                    height: 14,
                                                    fill: "rgba(29,22,16,0.88)",
                                                    rx: 1
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: INDIA_X + 11,
                                                    y: INDIA_Y - 2,
                                                    style: {
                                                        fontFamily: "JetBrains Mono, monospace",
                                                        fontSize: 5.5,
                                                        fill: "#C89A5B",
                                                        fontWeight: 700
                                                    },
                                                    children: "BIOPAPRO"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: INDIA_X + 11,
                                                    y: INDIA_Y + 5,
                                                    style: {
                                                        fontFamily: "JetBrains Mono, monospace",
                                                        fontSize: 3.8,
                                                        fill: "rgba(246,241,232,0.75)"
                                                    },
                                                    children: "MFG HUB · MUMBAI"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-2 left-2 flex items-center gap-4 px-3 py-2",
                                            style: {
                                                background: "rgba(250,245,236,0.92)",
                                                border: "1px solid rgba(221,211,197,0.8)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full",
                                                            style: {
                                                                background: "#C89A5B"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[8px] uppercase tracking-[0.12em]",
                                                            style: {
                                                                color: "#6B5D50"
                                                            },
                                                            children: "Manufacturing Hub"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full border",
                                                            style: {
                                                                background: "rgba(250,245,236,0.9)",
                                                                borderColor: "#C89A5B"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[8px] uppercase tracking-[0.12em]",
                                                            style: {
                                                                color: "#6B5D50"
                                                            },
                                                            children: "Export Market"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "20",
                                                            height: "6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "3",
                                                                x2: "20",
                                                                y2: "3",
                                                                stroke: "rgba(200,154,91,0.65)",
                                                                strokeWidth: "1.5",
                                                                strokeDasharray: "4 2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[8px] uppercase tracking-[0.12em]",
                                                            style: {
                                                                color: "#6B5D50"
                                                            },
                                                            children: "Shipping Route"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                            lineNumber: 403,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "absolute bottom-2 right-2 font-mono text-[7px] uppercase tracking-[0.14em]",
                                            style: {
                                                color: "rgba(140,98,57,0.4)"
                                            },
                                            children: "Hover markets for details"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                            lineNumber: 429,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-1.5",
                                    children: visibleMarkets.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: inView ? {
                                                opacity: 1
                                            } : {},
                                            transition: {
                                                delay: 0.75 + i * 0.025
                                            },
                                            className: "font-sans text-[12px] px-2.5 py-1.5 cursor-default",
                                            style: {
                                                border: `1px solid ${hoveredMarket === m.name ? "#C89A5B" : "#DDD3C5"}`,
                                                color: hoveredMarket === m.name ? "#8C6239" : "#6B5D50",
                                                background: hoveredMarket === m.name ? "rgba(200,154,91,0.1)" : "rgba(255,255,255,0.5)",
                                                transition: "all 0.15s"
                                            },
                                            onMouseEnter: ()=>setHoveredMarket(m.name),
                                            onMouseLeave: ()=>setHoveredMarket(null),
                                            children: m.name
                                        }, m.name, false, {
                                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "lg:col-span-3",
                            initial: {
                                opacity: 0,
                                x: 16
                            },
                            animate: inView ? {
                                opacity: 1,
                                x: 0
                            } : {},
                            transition: {
                                duration: 0.65,
                                ease: EASE,
                                delay: 0.38
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 flex flex-col",
                                style: {
                                    background: "#FBF8F2",
                                    border: "1px solid #DDD3C5"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 pb-4 border-b",
                                        style: {
                                            borderColor: "#EDE5D8"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans text-[11px] font-semibold text-ink-muted mb-1.5",
                                                children: "Export Destinations"
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 467,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-[1.5rem] leading-none",
                                                        style: {
                                                            color: "#C89A5B"
                                                        },
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPANY_FACTS"].exportMarkets,
                                                            "+"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-sans text-[12px] text-ink-muted",
                                                        children: "Active markets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 468,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3.5 flex-1",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGIONS"].map((region)=>{
                                            const data = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGION_DATA"][region];
                                            const rMarkets = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKETS"].filter((m)=>m.region === region);
                                            const isActive = !activeRegion || activeRegion === region;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cursor-pointer",
                                                style: {
                                                    opacity: isActive ? 1 : 0.4,
                                                    transition: "opacity 0.2s"
                                                },
                                                onClick: ()=>setActiveRegion(activeRegion === region ? null : region),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-sans text-[11px] font-semibold text-ink",
                                                                children: region
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-sans text-[11px] px-1.5 py-0.5",
                                                                        style: {
                                                                            background: "rgba(74,122,61,0.08)",
                                                                            border: "1px solid rgba(74,122,61,0.18)",
                                                                            color: "#4A7A3D"
                                                                        },
                                                                        children: data.growth
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                        lineNumber: 491,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono font-bold text-[12px]",
                                                                        style: {
                                                                            color: "#C89A5B"
                                                                        },
                                                                        children: data.markets
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                        lineNumber: 497,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-sans text-[12px] text-ink-muted leading-relaxed",
                                                        children: rMarkets.map((m)=>m.name).join(" · ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, region, true, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 482,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-4 border-t",
                                        style: {
                                            borderColor: "#EDE5D8"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans text-[12px] text-ink-muted",
                                                children: "Actively expanding"
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 511,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans text-[11px] text-ink-muted mt-0.5",
                                                children: "New markets added quarterly"
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                                lineNumber: 465,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                            lineNumber: 459,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/global-presence/OriginToWorld.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/global-presence/OriginToWorld.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/global-presence/OriginToWorld.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/global-presence/RegionalFootprint.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegionalFootprint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/global-presence-data.ts [app-ssr] (ecmascript)");
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
function RegionalFootprint() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "footprint",
        style: {
            background: "#F6F1E8"
        },
        className: "paper",
        "aria-labelledby": "footprint-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-14",
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
                                label: "Global Footprint"
                            }, void 0, false, {
                                fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "footprint-heading",
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
                                        "Six regions.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "17 confirmed markets."
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                    lineNumber: 35,
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
                                    className: "font-sans font-light text-ink-light text-base leading-relaxed flex items-center",
                                    children: "Biopapro has established export relationships across the Americas, Europe, the Middle East, Africa, and the Pacific — with a regional the Middle East, and the Pacific."
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGIONS"].map((region, i)=>{
                        const data = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGION_DATA"][region];
                        const markets = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKETS"].filter((m)=>m.region === region);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                delay: 0.2 + i * 0.07
                            },
                            className: "flex flex-col border border-border bg-surface p-6",
                            style: {
                                transition: "box-shadow 0.3s"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-sans font-semibold text-ink text-[14px] leading-snug mb-0.5",
                                                    children: region
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-sans text-[11px] text-ink-muted",
                                                    children: data.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono font-bold text-[1.3rem] leading-none",
                                                    style: {
                                                        color: "#C89A5B"
                                                    },
                                                    children: data.markets
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-sans text-[11px] text-ink-muted mt-0.5",
                                                    children: "markets"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-sans text-[11px] px-2.5 py-1",
                                        style: {
                                            background: "rgba(200,154,91,0.1)",
                                            border: "1px solid rgba(200,154,91,0.28)",
                                            color: "#8C6239"
                                        },
                                        children: data.growth
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5 mt-auto",
                                    children: markets.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans text-[12px] px-2.5 py-1",
                                            style: {
                                                background: "#F6F1E8",
                                                border: "1px solid #DDD3C5",
                                                color: "#6B5D50"
                                            },
                                            children: m.name
                                        }, m.name, false, {
                                            fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                            lineNumber: 115,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, region, true, {
                            fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                            lineNumber: 67,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/global-presence/RegionalFootprint.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/global-presence/IndustriesServed.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndustriesServed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/global-presence-data.ts [app-ssr] (ecmascript)");
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
function IndustriesServed() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#EFE6D7"
        },
        "aria-labelledby": "industries-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-14",
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
                                label: "Industries We Supply"
                            }, void 0, false, {
                                fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "industries-heading",
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
                                        "Built for",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "global food service."
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                    lineNumber: 30,
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
                                    className: "font-sans font-light text-ink-light text-base leading-relaxed flex items-center",
                                    children: "Biopapro products are certified, container-ready, and already deployed across airlines, hotel chains, food-service operators, and distribution networks in 18+ countries."
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INDUSTRIES"].map((industry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                delay: 0.18 + i * 0.07
                            },
                            className: "group flex flex-col bg-surface border border-border p-6",
                            style: {
                                transition: "border-color 0.28s, box-shadow 0.32s, transform 0.28s"
                            },
                            onMouseEnter: (e)=>{
                                const el = e.currentTarget;
                                el.style.borderColor = "rgba(200,154,91,0.45)";
                                el.style.boxShadow = "0 8px 28px rgba(44,36,27,0.1)";
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
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 flex items-center justify-center text-[18px] flex-shrink-0",
                                            style: {
                                                background: "rgba(200,154,91,0.1)",
                                                border: "1px solid rgba(200,154,91,0.25)"
                                            },
                                            children: industry.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-sans font-semibold text-ink text-[13px] leading-tight",
                                                    children: industry.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-[7px] uppercase tracking-[0.16em]",
                                                    style: {
                                                        color: "#C89A5B"
                                                    },
                                                    children: [
                                                        "MOQ ",
                                                        industry.moq
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-[12.5px] font-light text-ink-light leading-relaxed flex-1 mb-4",
                                    children: industry.description
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-[7px] uppercase tracking-[0.2em] text-ink-muted mb-2",
                                            children: "Products"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1",
                                            children: industry.products.slice(0, 3).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[7px] uppercase tracking-[0.1em] px-2 py-1",
                                                    style: {
                                                        background: "rgba(74,122,61,0.07)",
                                                        border: "1px solid rgba(74,122,61,0.18)",
                                                        color: "#4A7A3D"
                                                    },
                                                    children: p
                                                }, p, false, {
                                                    fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-3 border-t",
                                    style: {
                                        borderColor: "#EDE5D8"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.1em] leading-relaxed",
                                        children: industry.clients
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, industry.id, true, {
                            fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/global-presence/IndustriesServed.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/global-presence/IndustriesServed.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/global-presence/IndustriesServed.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/global-presence/ExportInfrastructure.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExportInfrastructure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/factory.js [app-ssr] (ecmascript) <export default as Factory>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-check.js [app-ssr] (ecmascript) <export default as FileCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
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
const CAPABILITIES = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__["Factory"],
        title: "Production at Scale",
        stat: "100M units / month",
        body: "Dedicated stamping lines running continuous operations in Mumbai. 300+ tons of FSC birchwood processed monthly. Capacity reserved for long-term supply agreements."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
        title: "Container-Optimised Packing",
        stat: "20ft & 40ft FCL",
        body: "Every carton is sized and stacked for maximum container utilisation. 800–1,600 cartons per 40ft container depending on product. LCL consolidation available."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: "Quality Before Shipping",
        stat: "ISO 9001:2015",
        body: "Optical sorting, UV sterilisation, and manual QC inspection at every production run. No container leaves the facility without batch test records."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__["FileCheck"],
        title: "Export Documentation",
        stat: "All markets covered",
        body: "COO, phytosanitary certificates, FSC chain-of-custody documents, FDA compliance letters, EU food-contact declarations. Full pack issued per shipment."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
        title: "Mumbai Port Access",
        stat: "Direct FCL loading",
        body: "Direct container loading from manufacturing facility to Nhava Sheva (JNPT) and Mumbai ports. 10–28 day transit times to major destination ports worldwide."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "Lead Times",
        stat: "3–5 week standard",
        body: "Standard production-to-shipment lead time 3–5 weeks from confirmed PO. Express options available for existing customers. Rolling supply schedules accommodated."
    }
];
function ExportInfrastructure() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative grain",
        style: {
            background: "#1D1610"
        },
        "aria-labelledby": "infrastructure-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[1px] w-full",
                style: {
                    background: "linear-gradient(90deg, transparent 0%, #3D2E22 40%, #5C3D1E 60%, transparent 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-14",
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
                                    index: "05",
                                    label: "Export Infrastructure",
                                    inverted: true
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        id: "infrastructure-heading",
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
                                            fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                                            color: "#F6F1E8"
                                        },
                                        children: [
                                            "Can they handle",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#C89A5B"
                                                },
                                                children: "procurement at scale?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                        lineNumber: 78,
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
                                        className: "font-sans font-light text-base leading-relaxed flex items-center",
                                        style: {
                                            color: "rgba(246,241,232,0.68)"
                                        },
                                        children: "Yes. Biopapro operates dedicated production lines, certified quality systems, and an export-ready logistics infrastructure built for volume buyers who need consistency, not one-off orders."
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: CAPABILITIES.map((cap, i)=>{
                            const Icon = cap.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 18
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.62,
                                    ease: EASE,
                                    delay: 0.22 + i * 0.07
                                },
                                className: "flex flex-col p-6",
                                style: {
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid #3D2E22"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 flex items-center justify-center",
                                                style: {
                                                    background: "rgba(200,154,91,0.1)",
                                                    border: "1px solid rgba(200,154,91,0.28)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    size: 15,
                                                    style: {
                                                        color: "#C89A5B"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[7px] uppercase tracking-[0.18em] px-2.5 py-1",
                                                style: {
                                                    background: "rgba(200,154,91,0.08)",
                                                    border: "1px solid rgba(200,154,91,0.2)",
                                                    color: "#C89A5B"
                                                },
                                                children: cap.stat
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-sans font-semibold text-[13px] mb-3 leading-snug",
                                        style: {
                                            color: "#F6F1E8"
                                        },
                                        children: cap.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-[12px] font-light leading-relaxed",
                                        style: {
                                            color: "rgba(246,241,232,0.58)"
                                        },
                                        children: cap.body
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, cap.title, true, {
                                fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/global-presence/ExportInfrastructure.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/global-presence/ContainerJourney.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContainerJourney
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/global-presence-data.ts [app-ssr] (ecmascript)");
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
function ContainerJourney() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#FBF8F2"
        },
        "aria-labelledby": "journey-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-14",
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
                                index: "06",
                                label: "A Container's Journey"
                            }, void 0, false, {
                                fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                                        "Forest to your",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "loading dock."
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                    lineNumber: 30,
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
                                    className: "font-sans font-light text-ink-light text-base leading-relaxed flex items-center",
                                    children: "Every Biopapro shipment follows the same nine-step supply chain — from FSC-certified forest to final delivery. Full documentation issued at each quality gate."
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute left-[19px] top-6 bottom-6 w-px hidden md:block",
                            style: {
                                background: "linear-gradient(to bottom, #DDD3C5, #C89A5B, #DDD3C5)"
                            },
                            initial: {
                                scaleY: 0,
                                transformOrigin: "top"
                            },
                            animate: inView ? {
                                scaleY: 1
                            } : {},
                            transition: {
                                duration: 1.8,
                                ease: "easeOut",
                                delay: 0.3
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-0",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOURNEY_STEPS"].map((step, i)=>{
                                const isLast = i === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOURNEY_STEPS"].length - 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -16
                                    },
                                    animate: inView ? {
                                        opacity: 1,
                                        x: 0
                                    } : {},
                                    transition: {
                                        duration: 0.55,
                                        ease: EASE,
                                        delay: 0.3 + i * 0.08
                                    },
                                    className: "grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-5",
                                    style: {
                                        borderBottom: isLast ? "none" : "1px solid #EDE5D8"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-1 flex items-start gap-3 md:flex-col md:gap-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 flex items-center justify-center flex-shrink-0 relative z-10",
                                                style: {
                                                    background: i === 0 || i === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOURNEY_STEPS"].length - 1 ? "#C89A5B" : "#FBF8F2",
                                                    border: `1.5px solid ${i === 0 || i === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOURNEY_STEPS"].length - 1 ? "#C89A5B" : "#DDD3C5"}`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[9px] font-bold",
                                                    style: {
                                                        color: i === 0 || i === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOURNEY_STEPS"].length - 1 ? "#1D1610" : "#6B5D50"
                                                    },
                                                    children: step.step
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2 flex md:flex-col items-start md:items-start md:justify-center gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[7.5px] uppercase tracking-[0.18em] px-2.5 py-1 whitespace-nowrap",
                                                style: {
                                                    background: "rgba(200,154,91,0.1)",
                                                    border: "1px solid rgba(200,154,91,0.25)",
                                                    color: "#8C6239"
                                                },
                                                children: step.tag
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                                lineNumber: 99,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-3 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-sans font-semibold text-ink text-[13.5px] leading-snug",
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-6 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans text-[12.5px] font-light text-ink-light leading-relaxed",
                                                children: step.body
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                                lineNumber: 120,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, step.step, true, {
                                    fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/global-presence/ContainerJourney.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/global-presence/ContainerJourney.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/global-presence/ContainerJourney.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/global-presence/BuyerTrust.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuyerTrust
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/global-presence-data.ts [app-ssr] (ecmascript)");
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
function BuyerTrust() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return(// Warm light — trust signals feel more authentic on cream than dark
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "paper",
        style: {
            background: "#F6F1E8"
        },
        "aria-labelledby": "trust-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-14",
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
                                index: "07",
                                label: "Why Global Buyers Choose Biopapro"
                            }, void 0, false, {
                                fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "trust-heading",
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
                                        "Certified.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        "Consistent.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#C89A5B"
                                            },
                                            children: "Export-ready."
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                    lineNumber: 36,
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
                                    className: "font-sans font-light text-ink-light text-base leading-relaxed flex items-center",
                                    children: "Global buyers require more than a product — they require a supplier who delivers on time, with the documentation their compliance teams need. Six certifications. Two offices. One manufacturing standard."
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRUST_SIGNALS"].map((signal, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.6,
                                ease: EASE,
                                delay: 0.2 + i * 0.06
                            },
                            className: "flex flex-col p-5 bg-surface border border-border",
                            style: {
                                transition: "border-color 0.28s, box-shadow 0.3s"
                            },
                            onMouseEnter: (e)=>{
                                const el = e.currentTarget;
                                el.style.borderColor = "rgba(200,154,91,0.45)";
                                el.style.boxShadow = "0 6px 24px rgba(44,36,27,0.09)";
                            },
                            onMouseLeave: (e)=>{
                                const el = e.currentTarget;
                                el.style.borderColor = "#DDD3C5";
                                el.style.boxShadow = "none";
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-7 h-7 flex items-center justify-center",
                                            style: {
                                                background: "rgba(74,122,61,0.1)",
                                                border: "1px solid rgba(74,122,61,0.25)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 12,
                                                style: {
                                                    color: "#4A7A3D"
                                                },
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[7px] uppercase tracking-[0.16em] px-2 py-0.5",
                                            style: {
                                                background: "rgba(200,154,91,0.1)",
                                                border: "1px solid rgba(200,154,91,0.25)",
                                                color: "#8C6239"
                                            },
                                            children: signal.tag
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-mono text-[10.5px] font-bold uppercase tracking-[0.1em] text-ink mb-2",
                                    children: signal.label
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-[12px] font-light text-ink-light leading-relaxed",
                                    children: signal.detail
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, signal.label, true, {
                            fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                    lineNumber: 65,
                    columnNumber: 9
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
                        duration: 0.62,
                        ease: EASE,
                        delay: 0.7
                    },
                    className: "mt-12 pt-10 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",
                    style: {
                        borderColor: "#DDD3C5"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-display font-light italic text-ink-light",
                            style: {
                                fontSize: "clamp(1.05rem, 1.8vw, 1.4rem)",
                                maxWidth: 580
                            },
                            children: '"One manufacturing standard. Six certifications. Eighteen markets. Every buyer gets the same product, the same documentation, the same quality."'
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-[7.5px] uppercase tracking-[0.2em] text-ink-muted flex-shrink-0",
                            children: "Biopapro Export Team"
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/global-presence/BuyerTrust.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/global-presence/BuyerTrust.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/global-presence/BuyerTrust.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this));
}
}),
"[project]/components/global-presence/ProcurementMetrics.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcurementMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$SectionLabel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/SectionLabel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/global-presence-data.ts [app-ssr] (ecmascript)");
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
function parseStatValue(value) {
    return parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
}
function AnimatedStat({ stat, triggered, index }) {
    const target = parseStatValue(stat.value);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const hasComma = stat.value.includes(",");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!triggered) return;
        const delay = index * 100;
        const timer = setTimeout(()=>{
            const start = Date.now();
            const duration = 1800;
            const raf = requestAnimationFrame(function tick() {
                const elapsed = Date.now() - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.round(eased * target));
                if (progress < 1) requestAnimationFrame(tick);
            });
            return ()=>cancelAnimationFrame(raf);
        }, delay);
        return ()=>clearTimeout(timer);
    }, [
        triggered,
        target,
        index
    ]);
    const displayValue = hasComma ? count.toLocaleString() : count.toString();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: [
            displayValue,
            stat.suffix
        ]
    }, void 0, true, {
        fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function ProcurementMetrics() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-10% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: "#F6F1E8"
        },
        className: "paper",
        "aria-labelledby": "metrics-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-14",
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
                                index: "08",
                                label: "Procurement Metrics"
                            }, void 0, false, {
                                fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                            id: "metrics-heading",
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
                                "The numbers behind",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#C89A5B"
                                    },
                                    children: "the supply chain."
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-border",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCUREMENT_STATS"].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                delay: 0.2 + i * 0.08
                            },
                            className: "flex flex-col items-center justify-center text-center p-6 border-r border-b border-border last:border-r-0",
                            style: {
                                borderColor: "#DDD3C5"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono font-bold mb-2",
                                    style: {
                                        fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                                        color: "#C89A5B",
                                        lineHeight: 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedStat, {
                                        stat: stat,
                                        triggered: inView,
                                        index: i
                                    }, void 0, false, {
                                        fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-sans text-[12px] font-semibold text-ink mb-0.5",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-sans text-[11px] text-ink-muted leading-tight text-center",
                                    children: stat.sub
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0
                    },
                    animate: inView ? {
                        opacity: 1
                    } : {},
                    transition: {
                        duration: 0.6,
                        ease: EASE,
                        delay: 0.7
                    },
                    className: "font-sans text-[12px] text-ink-muted mt-5 text-center",
                    children: "Established 2019 · Mumbai, India · Exporting since founding"
                }, void 0, false, {
                    fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/global-presence/ProcurementMetrics.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/global-presence/ExportPartnershipCTA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExportPartnershipCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/global-presence-data.ts [app-ssr] (ecmascript)");
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
function ExportPartnershipCTA() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-8% 0px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden",
        style: {
            background: "#2D5228"
        },
        "aria-labelledby": "export-cta-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[2px] w-full",
                style: {
                    background: "linear-gradient(90deg, transparent 0%, #4A7A3D 35%, #7AAE6B 60%, transparent 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center",
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
                                        duration: 0.5,
                                        ease: EASE
                                    },
                                    className: "font-mono text-[8px] uppercase tracking-[0.36em] mb-8",
                                    style: {
                                        color: "rgba(168,198,134,0.65)"
                                    },
                                    children: "Ready to source?"
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    id: "export-cta-heading",
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
                                        fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
                                        color: "#F6F1E8"
                                    },
                                    children: [
                                        "Ready to supply",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            className: "not-italic",
                                            style: {
                                                color: "#A8C686",
                                                fontStyle: "italic",
                                                fontFamily: "inherit"
                                            },
                                            children: "your market."
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                    lineNumber: 41,
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
                                        duration: 0.65,
                                        ease: EASE,
                                        delay: 0.16
                                    },
                                    className: "font-sans font-light text-base leading-relaxed mb-10",
                                    style: {
                                        color: "rgba(200,230,185,0.65)",
                                        maxWidth: 460
                                    },
                                    children: "Tell us your market, required volume, and product categories. Our export team — based in Mumbai — responds within 24 hours with a tailored supply proposal."
                                }, void 0, false, {
                                    fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                    lineNumber: 56,
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
                                        delay: 0.24
                                    },
                                    className: "flex flex-wrap items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            className: "group inline-flex items-center gap-2.5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300",
                                            style: {
                                                background: "#F6F1E8",
                                                color: "#2D5228"
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.background = "#FFFFFF",
                                            onMouseLeave: (e)=>e.currentTarget.style.background = "#F6F1E8",
                                            children: [
                                                "Request Export Quotation",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 12,
                                                    strokeWidth: 2.5,
                                                    className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/products",
                                            className: "group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] transition-colors duration-200",
                                            style: {
                                                color: "rgba(168,198,134,0.75)"
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.color = "rgba(168,198,134,1)",
                                            onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(168,198,134,0.75)",
                                            children: "Browse full catalog →"
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "flex flex-col gap-4 justify-center",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$global$2d$presence$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OFFICES"].map((office, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        delay: 0.3 + i * 0.1
                                    },
                                    className: "p-6",
                                    style: {
                                        background: office.type === "origin" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
                                        border: `1px solid ${office.type === "origin" ? "rgba(168,198,134,0.35)" : "rgba(168,198,134,0.18)"}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 rounded-full flex-shrink-0",
                                                    style: {
                                                        background: office.type === "origin" ? "#7AAE6B" : "#A8C686"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-[8px] uppercase tracking-[0.22em]",
                                                    style: {
                                                        color: "rgba(168,198,134,0.8)"
                                                    },
                                                    children: office.region
                                                }, void 0, false, {
                                                    fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans text-[11.5px] font-light mb-3",
                                            style: {
                                                color: "rgba(246,241,232,0.65)"
                                            },
                                            children: office.address
                                        }, void 0, false, {
                                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-x-5 gap-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${office.email}`,
                                                    className: "inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] transition-colors duration-200",
                                                    style: {
                                                        color: "rgba(168,198,134,0.8)"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.color = "rgba(168,198,134,1)",
                                                    onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(168,198,134,0.8)",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 9
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 21
                                                        }, this),
                                                        office.email
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${office.phone.replace(/\s/g, "")}`,
                                                    className: "inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] transition-colors duration-200",
                                                    style: {
                                                        color: "rgba(246,241,232,0.45)"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.color = "rgba(246,241,232,0.75)",
                                                    onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(246,241,232,0.45)",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 9
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 21
                                                        }, this),
                                                        office.phone
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        "contact" in office && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-[7px] uppercase tracking-[0.14em] mt-2",
                                            style: {
                                                color: "rgba(168,198,134,0.45)"
                                            },
                                            children: [
                                                "Contact: ",
                                                office.contact
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, office.region, true, {
                                    fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/global-presence/ExportPartnershipCTA.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/global-presence/GlobalPresenceClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalPresenceClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$GlobalHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/global-presence/GlobalHero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$OriginToWorld$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/global-presence/OriginToWorld.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$RegionalFootprint$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/global-presence/RegionalFootprint.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$IndustriesServed$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/global-presence/IndustriesServed.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$ExportInfrastructure$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/global-presence/ExportInfrastructure.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$ContainerJourney$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/global-presence/ContainerJourney.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$BuyerTrust$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/global-presence/BuyerTrust.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$ProcurementMetrics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/global-presence/ProcurementMetrics.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$ExportPartnershipCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/global-presence/ExportPartnershipCTA.tsx [app-ssr] (ecmascript)");
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
;
function GlobalPresenceClient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$GlobalHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/global-presence/GlobalPresenceClient.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$OriginToWorld$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/global-presence/GlobalPresenceClient.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$RegionalFootprint$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/global-presence/GlobalPresenceClient.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$IndustriesServed$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/global-presence/GlobalPresenceClient.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$ExportInfrastructure$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/global-presence/GlobalPresenceClient.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$ContainerJourney$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/global-presence/GlobalPresenceClient.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$BuyerTrust$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/global-presence/GlobalPresenceClient.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$ProcurementMetrics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/global-presence/GlobalPresenceClient.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$global$2d$presence$2f$ExportPartnershipCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/global-presence/GlobalPresenceClient.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/global-presence/GlobalPresenceClient.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_b4df5437._.js.map