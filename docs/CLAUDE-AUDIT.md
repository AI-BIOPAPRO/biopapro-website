# Biopapro V2 — Independent Audit (Claude)

**Date:** 31 August 2026
**Repo:** `AI-BIOPAPRO/biopapro-website` @ `master`
**Method:** full clone, `npm install`, `tsc --noEmit`, `next build`, `next dev` on all routes, plus cross-check against the live site (biopapro.com) and `docs/PROJECT_BRAIN.md`.

This complements the Vercel V2 audit. It adds findings from actually building and running the project (the Vercel audit was read-only) and from verifying claims against the live site.

---

## Fixed on branch `content-and-forms-fixes`

| Ref | What was done |
|---|---|
| **P0-A** | **Build now passes.** `react`/`react-dom` → `^19.2`, added `styled-components`, `build` uses Turbopack. `/studio` removed from the Next app (Sanity Studio bundle broke both webpack and Turbopack builds) — run it separately with `npm run studio` / deploy with `npm run studio:deploy`. `sanity` + `@sanity/vision` moved to devDependencies. All 12 routes build; `next build` green; `tsc --noEmit` clean. |
| **P0-C** | Deleted the dead Vite runtime: `server.ts`, `vite.config.ts`, `index.html`, `metadata.json`, `src/` (14 files), `ss-*.png`, `components/home/Hero.tsx`, `lib/data.ts`. Removed unused deps `@google/genai`, `three`, `@react-three/*`, `prop-types` (−86 packages). New `README.md`. |
| **P0-D** | Contact forms deliver: `app/api/contact/route.ts` (validation, 20 KB cap, honeypot, generic errors, Resend REST API — no new dep). Both forms wired with `mailto:` fallback. Homepage teaser given a required email field. Verified: empty body → 422, valid body without key → 503 `email_not_configured`. |
| **P0-B** *(partial)* | Removed placeholder cert numbers `FSC-C0XXXXX` / `Certificate No. XXXXX`. Rewrote homepage `ManufacturingCredibility` (was: forestry, log debarking, veneer slicing — contradicts the documented model) to match `lib/manufacturing-data.ts` (inspection → finishing → QC → packaging → export). **Still needs owner sign-off:** the 6 certifications not on the live site, the `verifiedBy` bodies, the `since` years, and the homepage "Siberian forest" narrative in `StripEntry`/`DocumentaryStrip`. |
| **P1-1/2** | `metadataBase` set via new `lib/site.ts`; all per-page canonical + OG URLs now relative. |
| **P1-3** | Added `app/error.tsx`, `app/global-error.tsx`, `app/not-found.tsx`, `app/loading.tsx`. |
| **P1-4** | Sanity client: no more non-null assertions, `sanityConfigured` guard, published-only queries (`!(_id in path("drafts.**"))`, `publishedAt <= now()`), `_updatedAt` fetched, graceful empty returns when unconfigured. |
| **P1-5/6** | Sitemap async + `/blog` + all posts (verified: 4 posts, real dates); empty `verification` tag removed. |
| **P1-7** | Added required `alt` field to the Sanity image schema; blog pages use `coverImage.alt` with title fallback; blog dates are validated (`NaN` → "") and `author` typed optional. |
| **P1-8** | `lib/site.ts` derives one origin (`NEXT_PUBLIC_SITE_URL` → Vercel vars → `biopapro.com`). `robots.ts` blocks indexing on non-production hosts and disallows `/studio` + `/api/`. |
| **P1-9** | Removed `picsum.photos`; scoped `biopapro.com` image host to `/cdn/**`. |
| **P1-10** | Founding year → 2019 (5 files); "Headquarters — China" → "Mumbai, India"; email standardised to `export@biopapro.com` (12 refs); dead `/ai-advisor` footer link removed. |
| **P2-2** | `prefers-reduced-motion`: Lenis smooth-scroll disabled, texture animations + transitions collapsed via a `globals.css` media block. |
| **P2-4** | `tsconfig.tsbuildinfo` untracked + gitignored. |
| **P2-6/7** | Dead code + unused heavy deps removed (see P0-C). |

### Still open (need you / a later pass)
- **P0-B claims registry** — the certification list, certifying bodies, dates, and origin/traceability language still need verification against real documents. This is the last launch blocker.
- **P1-4** webhook revalidation for the blog (currently a 60s timer).
- **P2-1** route-level Server Components (every route is still a client component).
- **P2-5** route smoke tests. **P2-8** migrate product images off the Shopify CDN. **P2-11** navbar-over-hero contrast (the other branch fixes this).
- ESLint isn't configured though `lint` calls `next lint`.

---

## P0 — Blocks any launch

### P0-A · Production build is broken
`npm run build` fails. `npm install` also fails without `--legacy-peer-deps`.

- **Install:** `next-sanity@9.12.3` needs `@sanity/ui@^2`; `sanity@^6` pulls `@sanity/ui@^3`. Peer conflict.
- **Build:** `/studio` → `sanity.config.ts` → `sanity`/`@sanity/vision` v6 import `useEffectEvent` from `react`. `react` is pinned to exactly `19.0.0`, which does not export it. Webpack treats this as a hard error; `next build` fails.
- `npm run dev` works (Turbopack tolerates it as a warning). Production does not.

**Needed:** align the Sanity toolchain with React 19 — pin `sanity`/`next-sanity`/`@sanity/*` to a mutually compatible set, or move `react` to `^19.1`, or lazy-load `/studio` so it is excluded from the main build. This is a prerequisite for every other phase.

### P0-B · Fabricated / unverified claims — systemic, not just certifications
The site presents claims that are contradicted by Biopapro's own live site and by `docs/PROJECT_BRAIN.md`.

**Certifications.** The live site (biopapro.com, homepage + About Us) shows **only 3**: ISO 9001, ISO 14001, ISO 45001. The V2 site claims **9**: adds FSC® 100%, FDA CFR 21, BPI Compostable, BRCGS Food Safety, BSCI, EU 10/2011 — and displays a placeholder certificate number `FSC-C0XXXXX` (`components/home/Certifications.tsx`) as if real, with invented "certified since" years.

**Supply chain.** `PROJECT_BRAIN.md` states plainly: *"Biopapro does NOT harvest forests or process raw timber"* — it buys FSC semi-finished birchwood from suppliers in Russia/China. Yet the site says:
- *"traced to FSC-certified Siberian and Northern European birch forests. Our procurement team audits each supplier annually"* (`ManufacturingCredibility.tsx`)
- *"White birch logs are chosen from frozen Siberian zones when winter humidity levels are lowest. Outer rough bark is cleanly peeled…"* (`lib/data.ts`)
- "Siberian Birch" / "Siberian Origin" throughout the homepage (`Hero.tsx`, `StripEntry.tsx`, `DocumentaryStrip.tsx`)

The live About Us page mentions no forests, no Siberia, no origin country.

**Process.** "optically sorted", "UV-sterilised", "double tumbled for absolute splinter containment", "moisture thresholds certified under 8%", "hydrothermal steam setups" (mostly `src/`, some in `components/`) — none verifiable, several look AI-generated.

**Needed:** a claims registry — every certification, origin, capacity, and process statement mapped to an owner + source document + approval, per the Vercel audit's claims policy. Nothing ships until each is confirmed true. This is the single largest legal/reputational risk in the project.

### P0-C · Duplicate runtime (matches Vercel P0-01)
`server.ts`, `vite.config.ts`, `index.html`, `metadata.json`, `README.md` (still "Run and deploy your AI Studio app"), and `src/` (14 files — a whole parallel Vite SPA with its own Navbar, forms, and the worst of the fabricated claims). None of it can run — `package.json` has no `vite`/`express`/`@vitejs` deps and the scripts are all `next`. It is pure dead weight and a place for fixes to land on the wrong file.

**Needed:** confirm nothing deploys it (it can't), then delete all of it. `src/` is already excluded in `tsconfig.json`, so removal is low-risk.

### P0-D · Contact forms delivered nowhere — **fixed on branch `content-and-forms-fixes`**
`ExportInquiryForm` used a `mailto:` that only works if the visitor has a mail client; `ContactTeaser` **faked** the send entirely (1.2s timer, no data left the browser). For a B2B lead-capture site this is the core function.
Fixed: new `app/api/contact/route.ts` (validation, size limit, honeypot, generic errors, Resend REST API — no new dependency), both forms wired to it with `mailto:` fallback, `ContactTeaser` given a required email field. Needs `RESEND_API_KEY` + verified sender, or swap the route for a Formspree endpoint.

---

## P1 — Needed for a credible launch

| # | Issue | Where | Status |
|---|---|---|---|
| P1-1 | **No `metadataBase`** — OG/Twitter image URLs resolve relative and break; Next logs a warning on every build | `app/layout.tsx` | open |
| P1-2 | **No social preview image** — every `openGraph`/`twitter` block omits `images`; shared links show no picture | all `app/*/page.tsx` | open |
| P1-3 | **No `error.tsx` / `loading.tsx` / `not-found.tsx`** anywhere — a Sanity outage or any thrown error shows the raw Next error page | `app/` | open |
| P1-4 | Sanity client uses non-null assertions, created at module load; no config validation; blog has no published-only filter, no draft handling, no webhook revalidation (only a 60s timer) | `lib/sanity/client.ts`, `app/blog/*` | partial — `.env.example` now documents the vars |
| P1-5 | Sitemap omitted `/blog` and all posts | `app/sitemap.ts` | **fixed on branch** (async, pulls posts, try/catch) |
| P1-6 | Empty `verification: { google: "" }` emits a broken meta tag | `app/layout.tsx` | **fixed on branch** |
| P1-7 | Sanity post schema has **no `alt` field** on images — a11y gap, and the blog falls back to using the title as alt | `sanity/schemas/post.ts` | open |
| P1-8 | **52 hardcoded `https://biopapro.com`** across metadata, canonicals, sitemap, structured data — preview/staging deploys will claim production URLs | repo-wide | open — needs one config module |
| P1-9 | `next.config.ts` still allows `picsum.photos` (placeholder image host) | `next.config.ts` | open |
| P1-10 | Founding year "2018" in 6 live places (official source: **2019**); "Headquarters — China" on homepage (it's Mumbai); `yash@` vs `export@` email split | multiple | **fixed on branch** |

---

## P2 — Quality; can follow launch

| # | Issue | Notes |
|---|---|---|
| P2-1 | **Every route is a client component** (`app/*/*Client.tsx`) — the whole site ships as client JS, no server rendering. Matches Vercel P2. Big mobile-performance cost. | Convert route shells + static sections to Server Components; keep only maps/3D/forms/motion as client islands. |
| P2-2 | **No `prefers-reduced-motion` handling** anywhere — Lenis smooth-scroll, GSAP ScrollTrigger, and continuously-animating grain/noise textures all run regardless of the OS setting. Accessibility + battery/perf. | Gate Lenis + ScrollTrigger + texture animation behind `useReducedMotion()` / the CSS media query. |
| P2-3 | Scroll-reveal sections are `opacity: 0` until `useInView` fires — fragile; sections stayed blank under automated scrolling and would on any JS/observer hiccup. | Consider `once` + a no-JS fallback so content is visible without the animation. |
| P2-4 | `tsconfig.tsbuildinfo` is committed — regenerated on every build, noisy diffs. | Add to `.gitignore`, `git rm --cached`. |
| P2-5 | `@playwright/test` is a dependency but there are **no tests**. | Add route smoke tests before the V2 refactor starts. |
| P2-6 | Unused heavy deps: `@google/genai` (imported nowhere), `three` + `@react-three/fiber`/`drei`/`postprocessing` (only `components/products/SpoonPOC.tsx`, which is **not mounted**), `components/products/PremiumProductShowcase.tsx` (not mounted). | Removing shrinks install + bundle materially. |
| P2-7 | Dead code: `components/home/Hero.tsx`, `lib/data.ts` (neither imported), `ss-hero.png` / `ss-map.png` / `ss-globe.png` at repo root. | Delete with the runtime consolidation. |
| P2-8 | **Product images 100% depend on the Shopify CDN** (`biopapro.com/cdn/shop/...`). If the domain is pointed at this site and Shopify is retired, every product image 404s. | Migrate images into `public/` or Sanity, or confirm the Shopify CDN stays live. |
| P2-9 | `react` pinned to exactly `19.0.0` (the version breaking `/studio`); `next` declared `^15.3.3`, `15.5.18` installed. | Widen/realign on the dependency pass. |
| P2-10 | `.git` is ~210 MB — an early commit included `.next/`. | Optional history rewrite; or leave and accept slow clones. |
| P2-11 | Navbar links are dark-on-dark over the hero image — unreadable until scrolled. | The unmerged branch `fix/homepage-nav-and-hero-cleanup` fixes this (but also deletes two homepage sections — review separately). |
| P2-12 | `@sanity/image-url` default import is deprecated (logs a warning). | Switch to the named `createImageUrlBuilder` export. |

---

## Confirmed working
- All 8 public routes return HTTP 200 in `dev` (`/`, `/products`, `/manufacturing`, `/sustainability`, `/global-presence`, `/certifications`, `/contact`, `/blog`); `/studio` renders in `dev` only.
- `tsc --noEmit` passes clean (including the `content-and-forms-fixes` branch).
- App Router metadata primitives, awaited route params, parameterised Sanity queries (Vercel's confirmed strengths hold).
- Product images load fine from the Shopify CDN through `next/image`.
- Design system, warm palette, and per-page section architecture are genuinely good.

---

## Recommended order

1. **P0-A** make it build (dependency alignment).
2. **P0-C** delete the dead Vite runtime + `src/`.
3. **P0-D** finish the contact backend (add `RESEND_API_KEY` or a Formspree endpoint) — branch is ready.
4. **P0-B** claims registry — verify or remove every certification, origin, and process claim. Blocking.
5. **P1-1 / P1-2 / P1-3** metadataBase + OG image + error/loading/not-found.
6. **P1-8** one origin-config module; kill the 52 hardcoded URLs.
7. Merge `content-and-forms-fixes` (year/email/China/sitemap/verification/forms).
8. Deploy to Vercel (Pro — Hobby is not licensed for commercial use).
9. **P2** — server components, reduced motion, tests, dep cleanup — after launch.

Do not start a visual redesign (Figma or otherwise) until P0 + P1 are done.
