# Biopapro Website — Project Brain

> **Purpose:** This document is the single source of truth for any AI session continuing this project. Read this first before touching any code.

---

## Project Overview

**Client:** Biopapro (biopapro.com)  
**Type:** Global B2B manufacturer website — not ecommerce, not SaaS  
**Goal:** A flagship 2026 website that communicates: *"We manufacture at scale and supply global buyers."*  
**Target Users:** Importers, distributors, airlines, food-service operators, hospitality groups, procurement managers  

---

## Domestic + Global Positioning (V1 pass — 2026-09-08)

**Why:** The site read as export-only across nearly every shared surface (Navbar
CTA, Footer tagline, homepage hero, Manufacturing hero, Contact flow). An external
review correctly flagged that Biopapro's domestic Indian B2B business — the other
half of the actual company — was invisible. The fix below is copy/IA only; **no
redesign, no new visual system, no new pages.**

**Positioning now communicated:** "Biopapro is an Indian manufacturer of
FSC-certified birchwood tableware, supplying India's food-service industry at
scale and serving global markets through established export capabilities."

### What changed

- **New homepage section** — `components/home/DomesticSupply.tsx`, inserted between
  `WomenWorkforce` and `ProductEcosystem` (index "04" — every section after it was
  renumbered +1, i.e. ProductEcosystem 04→05, GlobalPresence 05→06,
  Certifications 06→07, ContactTeaser 07→08). Reuses the exact card pattern from
  `components/global-presence/IndustriesServed.tsx` — same visual language, no new
  design system. 6 segment cards (Restaurants & Cafés, QSRs & Cloud Kitchens,
  Hotels & Hospitality, Caterers & Events, Corporate Cafeterias, Distributors &
  Wholesalers) with deliberately generic descriptions — no invented per-segment
  MOQs, client counts, or volume figures.
- **Homepage hero** (`OpeningSection.tsx`) — headline kept exactly ("The Global
  Standard for Birchwood Tableware."). Eyebrow label "Global Manufacturer" →
  "Indian Manufacturer". Subtitle now leads with India before export. One hero
  stat relabeled "Export Countries" → "Countries Served" (same number).
- **Manufacturing accuracy fix** — `ManufacturingCredibility.tsx` (homepage) and
  `ManufacturingHero.tsx` (`/manufacturing`) both said "raw log"/"global supply"
  in headlines, contradicting the already-correct STEPS data and the existing
  accuracy note in `lib/manufacturing-data.ts` (Biopapro imports FSC-certified
  *semi-finished* birchwood, doesn't harvest forests). Headlines corrected to
  "From certified birchwood to finished shipment." and "Built for supply at
  scale." Step 06 ("Global Distribution") reworded to cover domestic dispatch
  + export FCL/LCL, not export-only.
- **Sitewide "export team" → neutral "team"/"procurement team"** — this phrase
  appeared in ~9 places (Navbar-adjacent CTAs, `ContactHero`, `ExportInquiryForm`
  confirmation copy, `ContactFinalCTA`, `GlobalContactNetwork`, `ContactTeaser`,
  `ExportQuoteCTA`, `BuyerTrust`, `ExportPartnershipCTA`) implying a dedicated
  export-only team. **No separate domestic/export team is confirmed anywhere in
  this project's documentation** — there is one contact point
  (export@biopapro.com, +91 70211 03763, Mumbai). Left the Global Presence page's
  export-specific framing otherwise intact (that page's whole purpose is exports).
- **"Request Export Quote" → "Request Quote"** on all universal/shared CTAs
  (Navbar — appears on every page, Footer, homepage hero, Manufacturing,
  Products). Left as "Request Export Quote" only on `/global-presence`'s own
  hero, where it's contextually correct.
- **Dual CTA, no invented teams** — per instruction, since separate domestic/
  export teams aren't confirmed, used the literal fallback wording: "Source for
  India" / "Source for Your Market", both routing to the existing contact form
  (`#inquiry-form` anchor on `/contact`, or the homepage `ContactTeaser` form —
  no new routes).
- **Contact form gap fixed** — `REGION_OPTIONS` (`lib/contact-data.ts`) was
  100% export regions (Europe/US/Middle East/APAC/Africa) with **no domestic
  option at all**, on a *required* field. An Indian buyer had nothing correct to
  select. Added "India — Domestic" as the first option. Also added
  "Restaurant / QSR Supply" and "Caterer / Event Supply" to
  `PROCUREMENT_OPTIONS` in `ExportInquiryForm.tsx`.
- **Products page** (`ProductsHero.tsx`) — one line added clarifying bulk supply
  to Indian restaurants/hotels/distributors alongside export, no redesign, no
  fake prices/MOQs/stock added.
- **Global Presence page** (`GlobalHero.tsx`) — headline "Manufactured in India.
  Delivered worldwide." was already exactly right, kept unchanged. Subtitle
  extended to mention India's food-service industry before the export-market
  count, without diluting the page's export focus.
- **SEO** — added a handful of domestic-intent keywords to `/products` metadata
  (`wooden cutlery manufacturer India`, `wooden cutlery for QSRs`, `bulk wooden
  cutlery supplier`, etc.). Homepage keywords were already reasonably balanced,
  left as-is (no stuffing).

### Claims softened (task: remove unsupported quantitative claims)

`components/home/WhyWoodWon.tsx` had two claims not supported by the site's own
BPI/certification documentation:
- "90-day compost... in home **or** industrial composting" — the site's own
  sustainability page correctly discloses BPI/ASTM D6400 covers *industrial*
  composting only, not home. Softened to "Compostable in weeks" / "Biodegrades
  in industrial composting within weeks — BPI certified to ASTM D6400" —
  matching the verified language already used on `/sustainability`.
- "Stable to 100°C+" (a specific, uncited number) → "Holds up to heat" /
  "Withstands hot food and beverages without warping or softening" (qualitative,
  defensible — wood objectively doesn't melt/warp like thin plastic at hot-food
  temps; the exact number wasn't backed by any lab documentation in this repo).
- (Fixed earlier in this project's history, noted for continuity) The "78% of
  consumers... (Euromonitor 2024)" citation was already removed in a prior pass —
  it attributed a specific stat to a real, named research firm with no
  verification it was real.

**Left unchanged, general material science (not Biopapro-specific claims):**
"500+ year plastic persistence", "microplastics detected in human blood" — both
well-documented general facts, not claims requiring Biopapro's own lab data.

### Remaining items requiring business confirmation (not fixed — flagged only)

- Whether "Restaurant / QSR Supply" and "Caterer / Event Supply" MOQs differ from
  the existing bulk MOQ figures shown elsewhere (100,000+ units) — not stated,
  not invented.
- The certifications 6-vs-9 count discrepancy (pre-existing, see `docs/TASKS.md`)
  — untouched by this pass.
- Whether Biopapro wants an actual India-specific procurement page/section beyond
  the homepage `DomesticSupply` block (e.g. a dedicated `/domestic` or
  `/india` route) — explicitly out of scope per instruction ("do not add
  excessive sections").

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (no config file — uses `@theme` in globals.css) |
| Animation | Framer Motion v12 via `motion/react` (NOT `framer-motion`) |
| Smooth Scroll | Lenis v1.3 (via `SmoothScrollProvider`) |
| Advanced Animation | GSAP v3 + ScrollTrigger |
| Icons | lucide-react |
| Fonts | Cormorant Garamond, Inter, JetBrains Mono (via next/font/google) |
| Contact form backend | `app/api/contact` — Resend REST API, honeypot spam protection, mailto fallback |

**Import alias:** `@/` maps to project root

---

## Design System

### Philosophy
Apple-level polish × Patagonia sustainability × Muji simplicity  
**NOT:** dark luxury tech, brown furniture brand, eco charity

### Brand Split
- 40% Premium Manufacturing · 30% Natural Materials · 20% Sustainability · 10% Technology

### Color Tokens (defined in `styles/globals.css` `@theme` block)

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#F6F1E8` | Page background — birch bark warm |
| `--color-surface` | `#FBF8F2` | Cards, elevated panels |
| `--color-surface-alt` | `#EFE6D7` | Alt sections — parchment |
| `--color-ink` | `#2C241B` | Primary text |
| `--color-ink-light` | `#4A3D32` | Secondary text |
| `--color-ink-muted` | `#6B5D50` | Captions, labels |
| `--color-wood` | `#C89A5B` | Primary brand accent — warm amber |
| `--color-wood-dark` | `#8C6239` | Hover/active states |
| `--color-forest` | `#4F6B4A` | Sustainability accent |
| `--color-border` | `#DDD3C5` | Standard border |
| `--color-dark` | `#1D1610` | Dark section bg |
| `--color-dark-border` | `#3D2E22` | Border on dark |
| `--color-dark-muted` | `rgba(230,210,185,0.65)` | Muted text on dark |
| `--color-green` | `#4A7A3D` | Biopapro brand green (CTAs, active) |
| `--color-green-deep` | `#2D5228` | Green hover |
| `--color-green-pale` | `#C8DFC0` | Green fills/tints |

### Typography
- **Display:** `font-display` = Cormorant Garamond → hero headlines, section statements
- **Body/UI:** `font-sans` = Inter → everything functional
- **Data/Mono:** `font-mono` = JetBrains Mono → specs, numbers, certifications, labels

### Texture Classes
- `.paper` → paper noise texture on light sections (opacity 0.028, multiply blend)
- `.grain` → wood grain texture on dark sections (opacity 0.045, screen blend)

### Section Rule
- **70% light surfaces** (birch cream `#F6F1E8`, warm white `#FBF8F2`)
- **30% dark sections** (deep warm brown `#1D1610`) — ONLY for: manufacturing, global stats, certifications, packaging specs

### Animation
- `const EASE = [0.16, 1, 0.3, 1] as const;` — used across all motion components
- Framer Motion `useInView` with `once: true, margin: "-8% 0px"` for scroll reveals
- AnimatePresence for transitions between states

### Global Presence Page Architecture
**Route:** `/global-presence` — `app/global-presence/page.tsx` + `GlobalPresenceClient.tsx`
**Components:** `components/global-presence/`
**Data:** `lib/global-presence-data.ts`

| Section | Component | Background | Key Feature |
|---|---|---|---|
| Hero | `GlobalHero` | `#1D1610` dark | SVG animated globe, India origin, Framer Motion pathLength routes |
| From India to World | `OriginToWorld` | `#1D1610` dark | Full SVG world map, animated routes from India, region filter, country counter |
| Global Footprint | `RegionalFootprint` | `#F6F1E8` light | 6 region cards with markets, Germany office callout |
| Industries Served | `IndustriesServed` | `#EFE6D7` parchment | 6 industry cards with products, MOQ, client types |
| Export Infrastructure | `ExportInfrastructure` | `#1D1610` dark | 6 capability cards: scale, containers, QC, docs, logistics, lead times |
| Container Journey | `ContainerJourney` | `#FBF8F2` surface | 9-step supply chain timeline: forest → buyer |
| Why Buyers Choose | `BuyerTrust` | `#1D1610` dark | 8 trust signal cards + editorial quote |
| Procurement Metrics | `ProcurementMetrics` | `#F6F1E8` light | Animated counters: 100M units, 18+ markets, 380 employees, 6500kg/day |
| Export CTA | `ExportPartnershipCTA` | `#2D5228` green | Dual CTA + both office contacts (Mumbai + Berlin) |

**Real data used:**
- 17 confirmed export countries from biopapro.com about page
- Mumbai HQ address, Berlin/Neunkirchen EU offices
- Pablo Cuadra (EU contact), Yash Chandan + Nikunj Bhansali (India contacts)
- 380+ employees, 70%+ women, established 2019
- 100M units/month, 300T/month, 6500kg plastic saved daily

**Bug fixed:** Homepage `GlobalPresence.tsx` had origin point set to China coordinates (148,36). Corrected to India (126,47) with MUMBAI label.

---

### Manufacturing Page Architecture
**Route:** `/manufacturing` — `app/manufacturing/page.tsx` + `ManufacturingClient.tsx`
**Components:** `components/manufacturing/`
**Data:** `lib/manufacturing-data.ts`

**CRITICAL ACCURACY NOTE:** Biopapro does NOT harvest forests or process raw timber. Their model:
- FSC-certified semi-finished birchwood sourced from approved suppliers (Russia/China)
- Biopapro's value-add: incoming inspection → precision finishing → QC → packaging → export
- All page content reflects this actual operation — no fictional vertical integration

| Section | Component | Background | Key Content |
|---|---|---|---|
| Hero | `ManufacturingHero` | `#1D1610` dark + video | "Built for supply at scale." + 4 stats + CTAs |
| Capability Overview | `CapabilityOverview` | `#F6F1E8` light | 10-metric investor snapshot table |
| Production Journey | `ProductionJourney` | `#EFE6D7` parchment | 6-step: certified supply → inspection → finishing → QC → packaging → distribution |
| Quality Assurance | `QualityAssurance` | `#1D1610` dark | 6 operational capabilities + 12 QA checkpoints by stage |
| Workforce | `WorkforceSection` | `#FBF8F2` surface | Worker Image.png + 4 workforce points, 70%+ women callout |
| Export Operations | `ExportOperations` | `#EFE6D7` parchment | 6-step logistics flow + export capability reference table |
| Metrics + Trust | `ManufacturingMetrics` | `#1D1610` dark | Animated counters + 6 buyer trust points |
| CTA | `ManufacturingCTA` | `#2D5228` green | Request Export Quote + both office contacts |

**Future Enhancement:** Apple-style scroll-driven 3D product showcase — Spoon → Fork → Knife transformation sequence. Requires Three.js / React Three Fiber + high-quality 3D models. Post-launch only.

---

### Certifications Page Architecture
**Route:** `/certifications` — `app/certifications/page.tsx` + `CertificationsClient.tsx`
**Components:** `components/certifications/`
**Data:** `lib/certifications-data.ts`

| Section | Component | Background | Key Feature |
|---|---|---|---|
| Hero | `CertHero` | `#F6F1E8` light | Headline + 6 cert badge grid + stats strip |
| All Certifications | `CertificationsGrid` | `#1D1610` dark | Expandable accordion cards, one per cert |
| Compliance by Market | `ComplianceByMarket` | `#EFE6D7` parchment | EU / US / Middle East / Pacific requirement maps |
| Documentation Package | `DocumentationPackage` | `#1D1610` dark | 3-column doc groups: Always / Per Shipment / On Request |
| CTA | `CertCTA` | `#2D5228` green | Request certificate package + both office contacts |

**Certifications covered:** FSC® 100%, ISO 9001:2015, FDA CFR 21, EU 10/2011, BPI Compostable, BSCI
**All data sourced from:** live biopapro.com and confirmed certifications list
**Design decisions:** Expandable accordion for cert cards keeps page scannable while providing full detail on demand; grouped documentation by availability type (always/per shipment/on request) matches how procurement teams actually need to reference docs.

**Real certification logos implemented** (`components/certifications/CertLogos.tsx`) — faithful SVG recreations using actual certification body colors and visual identity. 9 certifications (expanded from 6 after confirming ISO 14001, ISO 45001, BRCGS from live site screenshot):
- FSC®: checkmark-tree mark (Biopapro is licensed as FSC® certificate holder)
- ISO 9001:2015: authority-style double-ring seal (ISO prohibits use of their logo by certified orgs — compliance badge used)
- FDA CFR 21: shield-form compliance badge (FDA seal cannot be used by manufacturers — compliance badge used)
- EU 10/2011: 12-star circle motif referencing EU regulatory identity
- BPI Compostable: seedling/sprout mark (Biopapro is licensed as BPI certificate holder)
- amfori BSCI: connected-people social compliance mark
Logos appear in: Hero badge grid, accordion card headers. Both `variant="light"` (on dark) and `variant="dark"` (on light) supported.

---

### Products Page Section Background Rhythm
Each Products section uses a distinct background to prevent sections blurring together:

| Section | Background | Why |
|---|---|---|
| Hero | `#F6F1E8` (page bg) | Entry point, paper texture |
| Product Families | `#EFE6D7` (parchment) | Warm shift distinguishes from hero |
| Catalog Grid | `#FBF8F2` (card surface / white) | Clean, neutral catalog feel |
| Packaging & Export | `#1D1610` (dark) | Manufacturing authority |
| Procurement Table | `#FBF8F2` (card surface) | Data legibility, light return |
| Procurement Resources | `#F6F1E8` (page bg) | Warm return before dark close |
| Certifications | `#1D1610` (dark) | Trust/compliance authority |
| Export Quote CTA | `#2D5228` (deep green) | **Breaks dark-dark streak** — brand green close |

### Image Container Rule
All `<Image>` containers must have `background: "#EDE6D8"` (warm cream) set inline.  
**Why:** Biopapro CDN images include PNG files with transparent/white backgrounds. Without this fallback the transparent areas expose the page background, making images look like they're "floating in a white box." The warm cream fallback makes even transparent images look intentional.

### Card Hover Pattern (Products page)
Use JS `onMouseEnter`/`onMouseLeave` (not Tailwind classes) for hover states that need `box-shadow` and `transform`. Tailwind v4 doesn't support arbitrary values in hover: variants reliably.

```tsx
onMouseEnter={(e) => {
  const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "rgba(200,154,91,0.5)";
  el.style.boxShadow = "0 12px 40px rgba(44,36,27,0.13), 0 2px 8px rgba(44,36,27,0.06)";
  el.style.transform = "translateY(-2px)";
}}
onMouseLeave={(e) => {
  const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "#DDD3C5";
  el.style.boxShadow = "none";
  el.style.transform = "translateY(0)";
}}
```

---

## Route Structure

> **Corrected 2026-09-08** — `/ai-advisor` and its Gemini backend never shipped and
> have been fully removed (see "Removed / Dead Code" below). Do not re-add references
> to it. Blog now runs on `lib/blog-data.ts` (static array), not Sanity — Sanity was
> fully removed from the project (see Key Decisions).

| Route | Status | File |
|---|---|---|
| `/` | ✅ Complete | `app/page.tsx` |
| `/products` | ✅ Complete | `app/products/page.tsx` |
| `/global-presence` | ✅ Complete | `app/global-presence/page.tsx` |
| `/certifications` | ✅ Complete | `app/certifications/page.tsx` |
| `/manufacturing` | ✅ Complete | `app/manufacturing/page.tsx` |
| `/sustainability` | ✅ Complete | `app/sustainability/page.tsx` |
| `/contact` | ✅ Complete | `app/contact/page.tsx` |
| `/blog` + `/blog/[slug]` | ✅ Complete | `app/blog/` — static posts in `lib/blog-data.ts` |
| `/api/contact` | ✅ Complete | Resend-based form backend, honeypot spam protection |

---

## Completed Pages

### Homepage (`/`)
**Sections (in order, verified against `app/page.tsx` 2026-09-08):**
1. `OpeningSection` — hero with video, product photography, value proposition (S1)
2. `WhyWoodWon` — plastic vs birchwood comparison (S4, index "01")
3. `ImpactCounter` — animated sustainability metrics; counting starts on mount
   (not scroll-gated — see "Sustainability Counters" fix below) (S5, index "02")
4. `ManufacturingCredibility` — 6-step production journey, dark section (S6, index "03")
5. `WomenWorkforce` — 70%+ women workforce story, full-bleed photo, unnumbered (S6b)
6. `DomesticSupply` — **new 2026-09-08**, India food-service industry segments (index "04")
7. `ProductEcosystem` — product range preview with category filters (S7, index "05")
8. `GlobalPresence` — world map, 18+ markets (S8, index "06")
9. `Certifications` — FSC, ISO, FDA, BPI, BSCI, EU, dark section (S9, index "07")
10. `ContactTeaser` — dual domestic + export enquiry form (S10, index "08")

**Not in the live flow** (dead code, not imported by `app/page.tsx` — do not assume
they render): `StripEntry`, `DocumentaryStrip`. `/ai-advisor` and its Gemini backend
were removed entirely (never had working credentials; dead weight).

### Footer
- `components/layout/Footer.tsx` — dark section, links to all pages, "Home" now an
  explicit nav item (not just the logo)

---

## Real Assets Available

### Videos
- `public/videos/hero-background.mp4` — manufacturing floor / product video

### Images
- `public/Worker Image.png` — women workforce photography
- `public/images/workforce/` — additional workforce images

### Biopapro CDN (external — use `unoptimized` on Next.js Image)
All at `https://biopapro.com/cdn/shop/...`

**Collection hero images (high quality, transparent bg):**
- Spork: `collections/C2_2.png?v=1663670170`
- Fork: `collections/C4_4.png?v=1662374267`
- Spoon: `collections/C5.png?v=1662374075`
- Knife: `collections/C3_3.png?v=1662374387`
- Coffee Stirrer: `collections/Untitled_design_61.png?v=1662375316`
- Skewer: `collections/Untitled_design_58.png?v=1663670146`
- Packaged Set: `collections/C6_4.png?v=1662375675`

**Product images (see `lib/products-data.ts` for complete list)**

---

## Key Decisions

1. **No Tailwind config file** — Tailwind v4 uses `@theme {}` block inside `globals.css` directly
2. **`motion/react` not `framer-motion`** — Framer Motion v12 changed the import path
3. **CDN images use `unoptimized` prop** — Next.js Image optimization disabled for external Shopify CDN
4. **No ecommerce patterns** — No cart, no prices, no Shopify integration
5. **Products page is B2B procurement catalog** — feels like an industrial export portal
6. **Footer dark bg** is `#1D1610` (dark warm brown), not pure black
7. **Footer background** references wood/parchment aesthetic: `#1D1610`
8. **AI Advisor** intentionally left as UI stub — credentials not available

---

## Shared Components

| Component | Location | Purpose |
|---|---|---|
| `SectionLabel` | `components/shared/SectionLabel.tsx` | Section index + label pill |
| `Navbar` | `components/layout/Navbar.tsx` | Fixed top nav with scroll progress |
| `Footer` | `components/layout/Footer.tsx` | Full-width dark footer |
| `SmoothScrollProvider` | `components/providers/SmoothScrollProvider.tsx` | Lenis wrapper |

---

## Current Project Status

- **Homepage:** Complete ✅ — includes Domestic B2B Supply section (added 2026-09-08)
- **Products Page:** Complete ✅
- **Global Presence Page:** V1 Complete ✅ (visualization frozen — see Future Enhancement Backlog)
- **Certifications Page:** Complete ✅
- **Manufacturing Page:** Complete ✅ — accuracy-corrected (no "raw log" claims)
- **Sustainability Page:** Complete ✅
- **Contact Page:** Complete ✅ — domestic + export dual pathway
- **Blog:** Complete ✅ — static data, no CMS
- **Footer:** Complete ✅
- **SEO/Sitemap/Robots:** Complete ✅
- **Mobile QA:** Complete ✅
- **Vercel Deployment:** **Live** ✅ — `biopapro-website.vercel.app` (production, tracks `master`).
  A separate Shopify store still runs the real `biopapro.com` domain; this Next.js
  site is the planned replacement pending domain cutover (see "Deployment" below).

---

## Build Order (Remaining)

1. ✅ Footer
2. ✅ Products (fully polished)
3. ✅ Global Presence (`/global-presence`) — V1 frozen
4. ✅ Certifications (`/certifications`)
5. ✅ Manufacturing (`/manufacturing`)
6. ✅ Sustainability (`/sustainability`)
7. ✅ Contact (`/contact`)
8. ✅ SEO / Sitemap / Robots
9. ✅ Mobile QA
10. 🔜 Vercel Deployment — **NEXT**
9. 🔜 Performance optimization
10. 🔜 Mobile QA
11. 🔜 Vercel deployment

---

## Future Enhancement Backlog

> Do NOT implement during the current sprint. Complete all pages and final phase work first.

### Global Presence — Visualization V2

**Priority:** LOW — V1 frozen and shipped.

- **Simpler world export map** — flat Mercator with real country SVG paths; India + export countries filled, all others grey silhouette
- **Improved country visualization** — actual country outlines (not continent blobs), hover reveals country name + region + shipment volume
- **Better shipping route storytelling** — animated dashed lines, port-to-port routing (Mumbai JNPT → destination port), transit time labels
- **Interactive export network** — click a region to see all destinations, shipment frequency, product mix per market
- **3D globe exploration (optional)** — WebGL or CSS 3D sphere showing real geography with texture; rotates to focus on active region
- **Logistics timeline visualization** — animated day-by-day container journey from factory floor to buyer's warehouse

---

## Future Enhancements (Post-Launch)

> Do NOT implement during the current sprint. Complete all pages and final phase work first.

### Products Page — Scroll Storytelling Background

**Priority:** LOW  
**Phase 1 stub:** `components/products/ProductScrollBackground.tsx` (exists)  
**Phase 2:** Full implementation post-launch

**Concept:** As users scroll through product category sections on `/products`, large birchwood product images appear at low opacity (`0.04–0.07`) as parallax background elements. The image changes as the user enters each category.

**Phase 1 (stub — created):**
- GSAP ScrollTrigger monitors scroll position relative to product family section anchors
- On entering `#forks` → fade in fork image, on leaving → fade out
- Fixed positioning behind page content, `z-index: 0`, content at `z-index: 1`
- Large scale (~60–80% viewport height), centered, low opacity
- Uses existing CDN images from `lib/products-data.ts`

**Phase 2 (future — full implementation):**
- High-resolution product renders on pure white/transparent bg (new assets needed)
- Apple-style: product "arrives" from bottom/side as user scrolls into section
- GSAP timeline with `scrub: true` — position tied directly to scroll
- Cross-fade between products (no flash)
- 3D CSS perspective transform for depth
- Disabled on mobile for performance

**Trigger map:**
| Section Anchor | Image |
|---|---|
| `#forks` | Fork 160mm `W7_1_713c7c76.jpg` |
| `#spoons` | Spoon 160mm `W3_1_ac837677.jpg` |
| `#knives` | Knife 165mm `W1_1_beb99461.jpg` |
| `#sporks` | Spork 140mm `W9_1.png` |
| `#stirrers` | Stirrer 140mm `W20_f40b8f4a.png` |
| `#skewers` | Skewer 15cm `W26_1_b883d15b.jpg` |
| `#catalog` | Cutlery Set `G52_1.jpg` |

**To activate Phase 1:** Import `ProductScrollBackground` in `app/products/ProductsClient.tsx` and add `<ProductScrollBackground />` as the first child of `<main>`. The stub is ready to wire up — just needs to be mounted.

---

### Contact Page Architecture
**Route:** `/contact` — `app/contact/page.tsx` + `ContactClient.tsx`
**Components:** `components/contact/`
**Data:** `lib/contact-data.ts`

| Section | Component | Background | Key Content |
|---|---|---|---|
| Hero | `ContactHero` | `#F6F1E8` light | "Let's discuss your next shipment." + 4 stats |
| Export Inquiry Form | `ExportInquiryForm` | `#FBF8F2` surface | Full procurement intake form — 11 fields + checkboxes |
| Procurement Journey | `ProcurementJourney` | `#1D1610` dark | 6-step inquiry→delivery with timelines |
| Global Contact Network | `GlobalContactNetwork` | `#EFE6D7` parchment | India HQ + Germany EU office cards |
| What You Receive | `AfterSubmit` | `#1D1610` dark | 8-item response package + response commitment |
| Industries We Supply | `ContactIndustries` | `#F6F1E8` light | 8 industry segment cards |
| Procurement FAQ | `ContactFAQ` | `#EFE6D7` parchment | 8 buyer FAQs — accordion |
| Final CTA | `ContactFinalCTA` | `#2D5228` green | "Your next shipment starts with a conversation." |

**Form implementation note:** Form uses `mailto:` fallback on submit (opens email client with pre-filled content). Production deployment should connect to a form backend — Formspree, Netlify Forms, or custom API endpoint at `yash@biopapro.com`.

---

## Mobile QA Report

**Status: Complete ✅ — all critical issues resolved**

### Issues Found & Fixed

| Severity | Issue | File | Fix Applied |
|---|---|---|---|
| **Critical** | iOS Safari auto-zoom on form focus (font-size < 16px) | `ExportInquiryForm.tsx` | All inputs/select/textarea → `text-base` (16px) |
| **High** | Filter buttons unreadably small (7.5px) and too small to tap | `OriginToWorld.tsx` | `text-[12px]` + `py-2` for proper touch targets |
| **High** | Country tags 7px — invisible on mobile | `OriginToWorld.tsx` | `text-[12px]` |
| **High** | Left panel labels all 7px | `OriginToWorld.tsx` | All labels → 11–12px |
| **High** | Region data labels 6.5–7px | `OriginToWorld.tsx` | `text-[11–12px]` |
| **High** | Growth badge 6.5px, market count 10px | `OriginToWorld.tsx` | Both bumped to 11–12px |
| **Medium** | All region labels 7–7.5px | `RegionalFootprint.tsx` | All → 11–12px `font-sans` |
| **Medium** | Germany office phone/email 7.5–8.5px | `RegionalFootprint.tsx` | 12–13px |
| **Medium** | Metric sub-labels 7px | `ProcurementMetrics.tsx` | 11–12px |
| **Medium** | Table header labels 8px | `ProcurementTable.tsx` | 11px |
| **Medium** | Category filter buttons 7.5px | `ProcurementTable.tsx` | 12px |

### Items Confirmed Passing
- All video elements: `w-full h-full object-cover` ✅
- All grids: `grid-cols-1` mobile fallback on all responsive grids ✅
- Navigation: mobile menu implemented, `hidden lg:flex` desktop, hamburger on mobile ✅
- SVG world map: `viewBox` + `className="w-full"` — scales correctly ✅
- Table horizontal scroll: `overflow-x-auto` + `min-w-[800px]` — correct pattern ✅
- Submit button: `py-4` — meets 44px touch target ✅
- All CTA buttons: minimum `py-3.5` ✅

### Known Acceptable Small Text (Decorative/Atmospheric)
- `StripEntry.tsx` narrative labels — hidden on mobile with `hidden md:block`
- `WhyWoodWon.tsx` comparison column labels — decorative, not interactive
- SVG internal labels in world map — scale with viewBox, not readable on any size

## PROJECT BACKLOG

> Post-launch enhancements. Do not implement until all pages are live and stable.

### 1. Apple-Style Scroll-Driven 3D Cutlery Showcase (Products page)
- Scroll-controlled Spoon → Fork → Knife 3D transformation sequence
- React Three Fiber / Three.js implementation
- High-quality 3D models required (not yet available)
- GSAP ScrollTrigger for scroll-position tie-in
- Disabled on mobile for performance

### 2. Global Presence Map Redesign (Global Presence page)
- Replace current abstract continent shapes with real country SVG paths
- India clearly identifiable, export countries highlighted by fill
- Better geographic clarity — Mercator projection with accurate outlines
- See Future Enhancement Backlog section for full spec

### 3. Premium Loading Experience
- Animated Biopapro logo loader on first page visit
- Manufacturing-inspired animation (stamping / cutting motion)
- Framer Motion AnimatePresence exit — fades out when page ready
- Cookie/session flag so it only shows on first visit per session

### 4. Form Backend Integration (Contact page)
- Connect `ExportInquiryForm` to real backend
- Options: Formspree (quickest), Netlify Forms, custom Next.js API route
- Add server-side email to yash@biopapro.com + auto-reply to buyer
- Add reCAPTCHA or honeypot spam protection
