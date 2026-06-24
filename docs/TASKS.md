# Biopapro Website — Tasks

---

## Completed Tasks

- [x] Project setup (Next.js 15, Tailwind CSS v4, Framer Motion, Lenis, GSAP)
- [x] Design system (globals.css with full @theme color tokens, typography, texture classes)
- [x] Root layout with fonts, metadata, providers
- [x] Navbar (sticky, scroll-progress bar, mobile menu)
- [x] Footer (dark, full navigation grid, cert strip)
- [x] Homepage — OpeningSection (hero with video)
- [x] Homepage — StripEntry (narrative threshold)
- [x] Homepage — DocumentaryStrip (Forest→Global journey)
- [x] Homepage — WhyWoodWon (plastic vs birchwood)
- [x] Homepage — ImpactCounter (animated stats)
- [x] Homepage — ManufacturingCredibility (6-step production)
- [x] Homepage — WomenWorkforce (people section)
- [x] Homepage — ProductEcosystem (product preview grid)
- [x] Homepage — GlobalPresence (world map)
- [x] Homepage — Certifications (dark cert strip)
- [x] Homepage — AIAdvisorTeaser (Gemini CTA)
- [x] Homepage — ContactTeaser (export form)
- [x] AI Advisor page (UI complete, Gemini stub)
- [x] biopapro.com product audit (30+ products, CDN URLs, specs extracted)
- [x] Products page — all 8 sections, fully polished
- [x] Products page — scroll storytelling foundation (Phase 1 GSAP stub)
- [x] Global Presence page — all 9 sections, warm design realignment
- [x] Project memory docs (PROJECT_BRAIN.md, CHANGELOG.md, TASKS.md)

---

## Current Task

🔜 Certifications Page (`/certifications`)

---

## Upcoming Roadmap

### Pages (in build order)
1. ✅ Global Presence (`/global-presence`)
2. 🔜 **Certifications** (`/certifications`) — Full certificate vault, FSC/ISO/FDA/BPI/BSCI/EU detail panels, downloadable docs
3. 🔜 **Manufacturing** (`/manufacturing`) — Production process deep-dive, facility specs, QC, workforce
4. 🔜 **Sustainability** (`/sustainability`) — FSC chain of custody, forest impact, plastic offset story
5. 🔜 **Contact** (`/contact`) — Export inquiry form, company contacts, office addresses, response SLA

### Final Phase
6. **SEO** — metadata per page, OG images, structured data (JSON-LD)
7. **Sitemap** (`/sitemap.xml`) — dynamic Next.js sitemap
8. **Robots** (`/robots.txt`)
9. **Performance** — image optimization, bundle analysis, Core Web Vitals
10. **Mobile QA** — all breakpoints, touch interactions, viewport testing
11. **Vercel Deployment** — production deploy, env vars, domain config

---

## Future Enhancements (Post-Launch)

> These are documented for future sessions. Do NOT implement during the current build sprint.
> Complete all pages and SEO work first.

### 🔮 Products Page — Scroll Storytelling
**Priority:** LOW — post-launch enhancement
**Component:** `components/products/ProductScrollBackground.tsx` (Phase 1 foundation already created)
**Status:** Phase 1 stub exists. Phase 2 is the full implementation.

**Concept:**
Large birchwood product visuals move through the page background as users scroll through product categories. Each product category section (Forks, Spoons, Knives, etc.) triggers its corresponding product image as a large, low-opacity, parallax background element.

**Phase 1 — Basic Foundation (stub created):**
- `components/products/ProductScrollBackground.tsx` exists as a GSAP ScrollTrigger stub
- Uses existing Biopapro CDN product images
- Basic parallax movement on scroll
- Low opacity (`0.04–0.07`), large scale, positioned `fixed` behind content
- Triggered by scroll position entering each product family section anchor
- Performance-safe: images lazy-loaded, animation throttled

**Phase 2 — Full Implementation (future):**
- High-resolution isolated product renders on pure white/transparent backgrounds
- Apple-style product storytelling — product "flies in" as user enters section
- Smooth cross-fade transitions between product images
- Advanced GSAP timeline with scrub
- Possible 3D CSS transform for depth effect
- Mobile: disabled or simplified (performance)

**Implementation notes for Phase 2:**
- The section anchors (`#forks`, `#spoons`, `#knives`, `#sporks`, `#stirrers`) already exist in `ProductFamilies.tsx`
- The catalog section has `id="catalog"` 
- GSAP and ScrollTrigger are already installed in the project
- Product images available at `lib/products-data.ts` — use CDN URLs with `?width=1200` for larger renders
- The `products/ProductsClient.tsx` is the right place to mount the background layer

**Trigger map (scroll position → product image):**
```
#forks    → Fork 160mm:   W7_1_713c7c76...jpg
#spoons   → Spoon 160mm:  W3_1_ac837677...jpg
#knives   → Knife 165mm:  W1_1_beb99461...jpg
#sporks   → Spork 140mm:  W9_1.png
#stirrers → Stirrer 140mm: W20_f40b8f4a...png
#skewers  → Skewer 15cm:  W26_1_b883d15b...jpg
#catalog  → Set photo:    G52_1.jpg
```

---

## Notes for Next Session

- All pages follow the same section pattern as homepage
- Dark sections use `#1D1610` bg + `.grain` texture + `inverted` SectionLabel prop
- Light sections use `#F6F1E8` bg + `.paper` texture
- Parchment sections use `#EFE6D7` (no texture class needed)
- Always use `motion/react` (NOT `framer-motion` — it's Framer Motion v12)
- Always use `unoptimized` prop on Next.js `<Image>` for biopapro.com CDN URLs
- Cross-page links must be proper outlined buttons (`px-5 py-2.5 text-[10px] font-bold uppercase`) — never 9px mono ghost text
- Card hover pattern: use JS `onMouseEnter/Leave` for `box-shadow` + `transform` (Tailwind v4 doesn't handle arbitrary hover values well)
- Image containers: always set `background: "#EDE6D8"` inline for transparent-PNG fallback
- Global Presence page design: warm cream (`#F6F1E8`), amber accents — NOT dark green tech
