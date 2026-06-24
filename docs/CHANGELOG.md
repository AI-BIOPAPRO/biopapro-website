# Biopapro Website — Changelog

---

## 2026-06-02 — Products Scroll Storytelling — Phase 1 Foundation

**Task:** Document and create a Phase 1 stub for a post-launch scroll storytelling enhancement on the Products page. Not yet activated.

**Files Created:**
- `components/products/ProductScrollBackground.tsx` — GSAP ScrollTrigger stub. Monitors section anchors (`#forks`, `#spoons`, `#knives`, `#sporks`, `#stirrers`, `#skewers`, `#sets`). On entry, fades in the corresponding CDN product image at `opacity: 0.05`, fixed behind page content at 55vw width. On exit, fades out. Uses existing CDN images from `lib/products-data.ts`.

**Files Updated:**
- `docs/TASKS.md` — Added "Future Enhancements" section with full Phase 1 + Phase 2 spec, trigger map, and activation instructions
- `docs/PROJECT_BRAIN.md` — Added "Future Enhancements" section with full spec and trigger map table

**To activate Phase 1:** Import `ProductScrollBackground` in `app/products/ProductsClient.tsx` and mount as first child of `<main>`. The component is self-contained and requires no other changes.

**Phase 2 spec documented in TASKS.md:** High-res product renders, Apple-style scrub-tied scroll, 3D transforms, cross-fade transitions. Requires new high-res isolated product photography as new assets.

**Priority:** LOW — complete all remaining pages and final phase first.

---

## 2026-06-02 — Global Presence Page — Design Realignment

**Task:** Page was too dark (70% black) and felt like a logistics SaaS dashboard. Realigned to match homepage/products warm birchwood cream identity (70% warm cream, 20% amber, 10% green).

**Root cause:** Original build used 4 dark sections out of 9. Neon green `#7AAE6B` was the dominant accent. Globe/map used green continent fills and green route lines — felt like a tech dashboard.

**Section background changes:**
- `GlobalHero`: `#1D1610` dark → `#F6F1E8` warm cream
- `OriginToWorld`: `#1D1610` dark → `#EFE6D7` parchment
- `BuyerTrust`: `#1D1610` dark → `#F6F1E8` warm cream
- (Kept dark only for `ExportInfrastructure` and `ProcurementMetrics` — 2 dark sections total)

**Color changes across globe/map SVGs:**
- Continent fills: green → warm sand amber `rgba(200,154,91,0.18)`
- Continent strokes: green → amber `rgba(200,154,91,0.42)`
- Export route lines: bright green → amber `rgba(200,154,91,0.55)`
- India origin marker: green glow → amber glow, `#C89A5B` core
- Destination dots: bright green → amber `rgba(200,154,91,0.75)`
- Graticule lines: green → warm amber `rgba(200,154,91,0.1)`
- Globe background: dark `#1D1610` → warm cream `url(#globe-warm-bg)` gradient

**`OriginToWorld` — complete redesign:**
- Was: dark dashboard with counter + region filter + flat SVG map
- Now: editorial 3-column layout on parchment `#EFE6D7`
  - Left: "Manufacturing Origin" card — Mumbai, 4 key metrics, FSC badge
  - Center: warm amber SVG world map with amber routes + amber filter buttons
  - Right: "Export Destinations" card — 6 regions with country lists

**`BuyerTrust` — redesigned for light:**
- Cards: warm surface `#FBF8F2` on cream, amber tag badges, subtle hover elevation
- Editorial quote now on light with subtle italic typography
- Check icons remain green (trust signal color) — appropriate use of green

**`RegionalFootprint` — growth badges:**
- Changed from green badges to amber badges for visual consistency

**Files changed:**
- `components/global-presence/GlobalHero.tsx` — complete rewrite
- `components/global-presence/OriginToWorld.tsx` — complete redesign
- `components/global-presence/BuyerTrust.tsx` — rewrite (dark → light)
- `components/global-presence/RegionalFootprint.tsx` — growth badge color fix

---

## 2026-06-02 — Global Presence Page (Full Build)

**Task:** Build complete `/global-presence` page as a premium export manufacturing experience

**Pre-build audit:** Fetched biopapro.com homepage + about + contact pages. Extracted 17 confirmed export countries, Mumbai HQ address, Berlin/Neunkirchen EU offices, Pablo Cuadra (EU contact), founders Yash Chandan + Nikunj Bhansali, 380+ employees (70%+ women), established 2019.

**Bug fixed:** `components/home/GlobalPresence.tsx` — shipping routes and origin star were positioned at China's SVG coordinates (148,36). Corrected to India/Mumbai coordinates (126,47). Label changed from "ORIGIN" to "MUMBAI".

**Files Created:**
- `lib/global-presence-data.ts` — all data: 17 export markets with SVG coords, 6 regions, company facts, offices, industries, 9 journey steps, 8 trust signals, 6 procurement stats
- `app/global-presence/page.tsx` — page metadata + entry point
- `app/global-presence/GlobalPresenceClient.tsx` — page section assembly
- `components/global-presence/GlobalHero.tsx` — Dark hero: animated SVG globe with India origin, pathLength export routes, pulsing destination dots, stats row, office indicators
- `components/global-presence/OriginToWorld.tsx` — Dark section: large SVG world map, all 17 routes animated from India origin, region filter tabs, animated country counter
- `components/global-presence/RegionalFootprint.tsx` — Light: 6 region cards with market lists and growth stats, Germany office callout with direct contact
- `components/global-presence/IndustriesServed.tsx` — Parchment: 6 industry cards (airlines, hospitality, food service, catering, distribution, retail) with products + MOQ
- `components/global-presence/ExportInfrastructure.tsx` — Dark: 6 capability cards answering "Can they handle scale?" — production, containers, QC, docs, Mumbai port, lead times
- `components/global-presence/ContainerJourney.tsx` — Surface white: 9-step supply chain timeline (FSC Forest → Buyer)
- `components/global-presence/BuyerTrust.tsx` — Dark: 8 trust signal cards (certifications, scale, EU office, ethics) + editorial quote
- `components/global-presence/ProcurementMetrics.tsx` — Light: animated counter grid (100M units, 18+ markets, 300T/month, 6500kg/day, 380 employees, 6 certs)
- `components/global-presence/ExportPartnershipCTA.tsx` — Deep green: dual CTA with both office contact cards (Mumbai + Berlin)

**Files Modified:**
- `components/home/GlobalPresence.tsx` — Fixed India origin bug (routes, origin star, label)

**Section background rhythm:**
Dark → Dark → Light → Parchment → Dark → White → Dark → Light → Deep green

**Summary:** 9-section premium export experience built around real Biopapro data. Communicates "Manufactured in India, delivered worldwide" with animated globe, interactive world map, supply chain timeline, and dual-office CTA. TypeScript clean, page HTTP 200 verified.

---

## 2026-06-02 — Homepage Cross-Page Link Visibility Fix

**Task:** All homepage section links to other pages were `text-[9px] font-mono` at partial opacity — invisible to scanning eyes. Upgraded every one to a proper outlined button.

**Problem:** Visitors had no visible cues that other pages (Products, Manufacturing, Global Presence, Certifications) existed from within homepage sections.

**Files Changed:**
- `components/home/ProductEcosystem.tsx` — "View Full Product Catalog" → `/products`: upgraded from 9px mono ghost text to outlined amber button (`px-5 py-2.5`, `border: #C89A5B`, fills on hover)
- `components/home/GlobalPresence.tsx` — "View Global Presence" → `/global-presence`: outlined green button on dark bg; added `ArrowUpRight` import
- `components/home/WomenWorkforce.tsx` — "See Full Manufacturing Operation" → `/manufacturing`: outlined light-green button on dark bg; added `ArrowUpRight` import
- `components/home/WhyWoodWon.tsx` — "View All Certifications" → `/certifications`: outlined brand-green button on light bg; added `ArrowUpRight` import
- `components/home/Certifications.tsx` — "View All Certifications" → `/certifications`: outlined brand-green button replacing 9px mono text; added `ArrowUpRight` import

**Rule established:** All cross-page links must be outlined buttons minimum `px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em]`. Never use raw mono text links for page navigation.

---

## 2026-06-02 — Homepage Ice Cream Stick Blank Card Fix

**Task:** Ice Cream Stick card in the homepage `ProductEcosystem` section was rendering as a blank cream rectangle.

**Root cause:** `cdnImage: null` — no image was assigned. The placeholder div rendered but was visually indistinguishable from an empty card.

**Files Changed:**
- `components/home/ProductEcosystem.tsx` — assigned `cdnImage: "https://biopapro.com/cdn/shop/products/W43.png?v=1662714289&width=800"` (birchwood scoop — closest available Biopapro product photography for the dairy category)

---

## 2026-06-02 — Full-Bleed Image Treatment (Products Page + Hero Mosaic)

**Task:** Product card images had visible padding (`object-contain p-4/p-5`) making them look like thumbnails floating in white boxes. User feedback: "image looks placed inside a container instead of being part of the card."

**Files Changed:**
- `components/products/ProductCatalogGrid.tsx` — removed `p-5` padding, switched `object-contain` → `object-cover`, height increased from 180px → 220px, category badge moved inside image, cert tags appear on hover via gradient overlay, card hover elevation added
- `components/products/ProductFamilies.tsx` — same treatment: full-bleed `object-cover`, height 240px, SKU count badge repositioned inside image at bottom-left, hover `translateY(-2px)` elevation
- `components/products/ProductsHero.tsx` — all 6 mosaic cells: removed `object-contain p-3/p-4`, removed explicit `background`/`border` styles, switched to `object-cover`; warm `#EDE6D8` background added to each cell as transparent-PNG fallback; replaced 2 collection PNGs with lifestyle JPGs (`G42` spoon-in-use, `G54` knife lifestyle) for better `object-cover` results
- Drawer main image + thumbnails: same `object-cover` treatment

**Rule established:** All image containers must have `background: "#EDE6D8"` and use `object-cover`. No padding on product images.

---

## 2026-06-02 — Products Page Polish Pass

**Task:** Full production-quality polish of all Products page sections

**Files Changed:**
- `components/products/ProductsHero.tsx` — mosaic image bg fallback (`#EDE6D8`), correct anchor IDs, fixed 2-col mobile stats borders, lifestyle photos in mosaic
- `components/products/ProductFamilies.tsx` — parchment section bg (`#EFE6D7`) for visual rhythm, warm image bg, card hover lift (`translateY(-2px)`), title overlaid on image
- `components/products/ProductCatalogGrid.tsx` — warm image bg, category count badges in filter tabs, card-surface section bg (`#FBF8F2`), "View Specs" button copy
- `components/products/ExportQuoteCTA.tsx` — **changed from dark `#1D1610` to deep green `#2D5228`** to break consecutive dark section streak; inverted CTA button (light on green)
- `components/products/ProcurementResources.tsx` — complete redesign: horizontal list layout with numbered items replaces generic icon-card grid

**Summary:** Seven identified issues fixed — image backgrounds, section rhythm, consecutive dark sections, anchor links, mobile layout, card interactions, and resource section premium feel.

---

## 2026-06-02 — Products Page (Full Implementation)

**Task:** Build complete `/products` page as a B2B procurement catalog

**Files Created:**
- `docs/PROJECT_BRAIN.md`
- `docs/CHANGELOG.md`
- `docs/TASKS.md`
- `lib/products-data.ts` — Full product catalog from biopapro.com audit (30+ products, 9 categories)
- `app/products/page.tsx` — Products page entry point
- `components/products/ProductsHero.tsx` — Editorial hero with stats and category quick-jump
- `components/products/ProductCategoryNav.tsx` — Sticky category anchor navigation
- `components/products/ProductFamilies.tsx` — 8 product family editorial cards
- `components/products/ProductCatalogGrid.tsx` — Filterable grid with slide-out detail drawer
- `components/products/PackagingExport.tsx` — Dark section: bulk/OEM/container specs
- `components/products/ProcurementTable.tsx` — Full SKU comparison table
- `components/products/ProcurementResources.tsx` — Certificate and datasheet download center
- `components/products/ProductCertifications.tsx` — Dark certifications strip
- `components/products/ExportQuoteCTA.tsx` — Final dark export quote CTA section

**Source Data:** Audited biopapro.com live site — all products, CDN image URLs, packaging specs, dimensions extracted directly from product pages

**Summary:**  
Full Products page built as an industrial procurement platform, not ecommerce. 9 product categories, 30+ SKUs, real Biopapro CDN photography, slide-out product detail drawer, filterable catalog grid, packaging/container specs, comparison table, procurement resource center, certifications strip, and persistent export quote CTA.

---

## Prior Sessions (Homepage)

**Files Created:**
- `app/page.tsx` — Homepage assembly
- `app/layout.tsx` — Root layout with fonts, metadata, providers
- `app/api/consult/route.ts` — AI advisor API route (Gemini stub)
- `app/ai-advisor/` — AI Advisor page
- `components/home/Hero.tsx` (renamed to `OpeningSection.tsx`)
- `components/home/OpeningSection.tsx`
- `components/home/StripEntry.tsx`
- `components/home/DocumentaryStrip.tsx`
- `components/home/WhyWoodWon.tsx`
- `components/home/ImpactCounter.tsx`
- `components/home/ManufacturingCredibility.tsx`
- `components/home/WomenWorkforce.tsx`
- `components/home/ProductEcosystem.tsx`
- `components/home/GlobalPresence.tsx`
- `components/home/Certifications.tsx`
- `components/home/AIAdvisorTeaser.tsx`
- `components/home/ContactTeaser.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/shared/SectionLabel.tsx`
- `components/providers/SmoothScrollProvider.tsx`
- `styles/globals.css` — Full design system with Tailwind v4 @theme
- `lib/utils.ts` — cn() utility
- `lib/data.ts` — Homepage data

**Summary:** Complete homepage with 11 sections, sticky navbar, full footer, and AI advisor UI stub.
