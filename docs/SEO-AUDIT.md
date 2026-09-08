# Biopapro V2 — SEO Audit & Ranking Plan

**Date:** 31 August 2026
**Goal:** the new site ranks on page 1 (and in AI Overviews) for the terms that bring B2B buyers — not buried where the current site sits.

---

## 1. Where Biopapro stands in search today

**Brand presence is fragmented across 4+ properties:**

| Property | What it is | Problem |
|---|---|---|
| `biopapro.com` | Shopify store (this migration replaces it) | Thin content, e-commerce framing for a B2B business |
| `biopaprocutleries.com` | Separate IndiaMART-style storefront ("Biopapro Cutleries Private Limited") | **Competes with the main domain for the brand name** |
| Crunchbase, Zureli, ExportersIndia | Third-party listings | Outrank the owned site for some brand queries |

**The competition for "wooden cutlery manufacturer India":**
- IndiaMART directory pages (`dir.indiamart.com/impcat/wooden-cutlery`) dominate the top
- **Unitech Wooden Cutlery** (`thewoodencutlery.com`) — dedicated SEO site, established 2007, one keyword-targeted page per product type
- **Razvi Exports**, **King Corp India** — dedicated `/wooden-cutlery/` landing pages
- These competitors have domain age + purpose-built keyword pages. Biopapro competes on scale but not on SEO structure.

**Takeaway:** ranking is winnable — the competitors are small and their sites are basic — but it needs product-level pages, content depth, Core Web Vitals, and links. It will not happen from a homepage + 7 marketing pages alone.

---

## 2. The migration — the single biggest risk

The current site has **dozens of indexed URLs** that will 404 on the new site:

```
/products/wooden-spoon-160mm   /products/woodenfork140mm   … (~30 product URLs, lastmod = today, actively crawled)
/collections/cutlery-set       /collections/…
/pages/about-us  /pages/contact  /pages/packaging  /pages/news
/blogs/news/…
```

The new site has none of these paths. **Every 404 is lost ranking and lost link equity.**

### Migration playbook (do in this order)

1. **Keep the domain.** Stay on `biopapro.com`. Domain age and existing backlinks are the biggest assets — a new domain restarts from zero.
2. **Before switching DNS:** in Google Search Console, export the **Pages** report (all indexed URLs) and **Performance** report (which URLs get clicks/impressions and for what queries). Also save the current Shopify sitemaps.
3. **Map every URL to a 301.** `next.config.ts` now has wildcard fallbacks (`/products/:slug → /products`, `/pages/about-us → /manufacturing`, etc.). **These are placeholders.** For every product/collection URL that has real impressions in GSC, add an explicit redirect to the best-matching new page — ideally a real product page (see §4).
4. **Launch day:** submit the new `sitemap.xml` in GSC. Use the **Change of Address** tool only if the domain changes (it isn't, so skip).
5. **Weeks 1–8:** watch GSC Coverage (crawl errors), Performance (ranking movement), and Core Web Vitals. Expect a **temporary dip of 2–6 weeks** — this happens on every migration even when done right. Don't panic-change things during it.
6. Keep the old Shopify sitemaps 301-ing, not 404-ing, for a few months.

---

## 3. On-page SEO — status

### Fixed in the `content-and-forms-fixes` branch
| Issue | Was | Now |
|---|---|---|
| **Doubled titles** | `Wooden Cutlery Manufacturer Mumbai India — Biopapro \| Biopapro — Wooden Cutlery Manufacturer India` (110+ chars, "Biopapro" ×2) | short unique title + `\| Biopapro` template, ~55 chars |
| **No social image** | shared links showed no preview | dynamic `app/opengraph-image.tsx` (1200×630, branded) |
| **No redirects** | old URLs would 404 | `next.config.ts` `redirects()` (wildcards — needs GSC data to finish) |
| metadataBase / canonical | absent / hardcoded | `lib/site.ts`, one origin, relative canonicals |
| sitemap | 7 static routes, no blog | async, `/blog` + every post |
| robots | allowed preview indexing | production-only indexing, blocks `/studio` + `/api/` |
| structured data | Organization/LocalBusiness/Product JSON-LD present | kept (verify the claims in it — see CLAUDE-AUDIT P0-B) |

### Still open — ranked by impact

**A. Homepage `<h1>` has zero keyword value.** It reads *"The Global Standard for Birchwood Tableware."* The H1 is one of the strongest on-page signals and it says nothing Google can rank. Fix: make the H1 (or a prominent early H2) *"Wooden Cutlery Manufacturer in India — Bulk & Export Supply"* or similar, styled to fit the design. Same check on every page's H1.

**B. Headings and copy render with `opacity: 0` (scroll reveal).** Content is in the HTML, but the H1 and every H2 carry inline `opacity:0;transform:translateY(...)` until JS animates them in. Google renders JS so it *usually* still counts, but: it's fragile (JS fails → blank page), it delays LCP, and persistently-hidden text is discounted. Fix: render visible by default; treat the animation as progressive enhancement, or exclude H1/H2/first paragraph from the reveal.

**C. Core Web Vitals risk.** First-load JS is 233–300 kB per route, every route is a client component, and Lenis + GSAP + Framer Motion run on every page. LCP / INP / CLS are ranking factors. **Action:** run Lighthouse on the deployed site, then convert route shells + static sections to Server Components (CLAUDE-AUDIT P2-1) and gate the motion (reduced-motion is already wired; consider making smooth-scroll opt-in on mobile).

**D. No individual product pages.** The old site had ~30 product URLs that could rank for long-tail queries ("wooden spoon 160mm bulk", "140mm coffee stirrer wholesale"). The new `/products` is a single catalogue with a drawer. **This is the biggest missed opportunity.** `lib/products-data.ts` already holds 30+ SKUs with specs and images — generate real `/products/[slug]` pages from it: unique title/description, spec table, an image, `Product` + `BreadcrumbList` schema, MOQ, and a quote CTA. That is 30+ keyword-targeted indexable pages for near-zero content cost, and it lets the migration redirects point somewhere specific.

**E. No FAQ schema.** B2B buyers search questions: "wooden cutlery MOQ", "private label wooden cutlery India", "are wooden forks FDA approved". The contact page has FAQs but no `FAQPage` JSON-LD — that's what wins the expandable results and feeds AI Overviews. Add `FAQPage` schema to the contact/products FAQs, and write a few more Q&A blocks targeting buyer questions.

**F. Keyword strategy is too broad.** "wooden cutlery manufacturer India" is the hardest term (IndiaMART owns it). Also target lower-competition, higher-intent phrases with their own pages/sections:
- "wooden cutlery manufacturer for export"
- "private label / OEM wooden cutlery India"
- "bulk wooden cutlery supplier for airlines / hotels"
- "FSC certified wooden cutlery wholesale"
- "disposable wooden cutlery supplier for [country]"

**G. `biopaprocutleries.com` cannibalises the brand.** Decide: 301 it to `biopapro.com`, or keep it strictly as an IndiaMART microsite with a canonical pointing to the main domain. Two owned sites competing for "biopapro" splits authority.

**H. No `hreflang`.** The site targets India + US/UK/EU export buyers with one English page each. At minimum keep `og:locale` + `alternateLocale` (present) and set `Content-Language`. Only add full `hreflang` if you build country-specific pages.

---

## 4. Off-page — what actually moves B2B rankings

On-page gets you eligible to rank. These get you *to* page 1:

1. **Google Business Profile** — fully fill out the Mumbai manufacturing address, category "Manufacturer" / "Wholesaler", photos, products, posts. This drives the local pack for "wooden cutlery manufacturer Mumbai" and feeds the knowledge panel. NAP (name/address/phone) must match the site's structured data exactly.
2. **B2B directories** — IndiaMART, TradeIndia, ExportersIndia, Alibaba, Kompass, ThomasNet (for US buyers). Indian B2B buyers often start here, not Google. Claim and complete every listing; link back to `biopapro.com`.
3. **Backlinks** — the new site inherits whatever `biopapro.com` has. Build more: sustainability blogs, packaging-industry press, trade-show exhibitor pages, "plastic ban" news roundups, supplier lists for the airline/hospitality trade, university sustainability procurement pages. The existing blog posts (plastic ban, FSC explainer) are good link bait — pitch them.
4. **Content cadence** — the blog exists with 4 posts. Publish consistently (2×/month): buyer guides ("How to source wooden cutlery for a restaurant chain"), regulation updates, comparison pieces ("birchwood vs bamboo vs CPLA"). Each targets a query and earns links.
5. **Reviews / trust** — Google reviews on the Business Profile, plus case studies / named clients on the site (E-E-A-T signal).

---

## 5. Realistic expectations

- **A dip is normal.** Even a well-run migration loses rankings for 2–6 weeks while Google re-crawls and re-assigns equity.
- **Page 1 for "wooden cutlery manufacturer India"** is achievable in **3–6 months** *if* product pages ship, Core Web Vitals pass, the blog publishes regularly, and GBP + directories are done. Not from the marketing pages alone.
- **AI Overviews / "upper recommendation"** favour pages with clear Q&A structure, `FAQPage`/`Product` schema, and third-party corroboration (directories, reviews, press). Items E, 1, and 2 above are what get you there.
- **Long-tail first.** You'll rank for "FSC certified wooden spork exporter" months before "wooden cutlery manufacturer India". Build the specific pages and the head term follows.

---

## 6. Pre-launch SEO checklist

- [ ] Pull indexed-URL + query list from Google Search Console (old property)
- [ ] Replace the wildcard redirects in `next.config.ts` with explicit maps for every URL that has impressions
- [ ] Build `/products/[slug]` pages (§3-D) and point product redirects at them
- [ ] Fix homepage + inner H1s to carry keywords (§3-A)
- [ ] Make H1 / first paragraph visible without JS (§3-B)
- [ ] Add `FAQPage` schema (§3-E)
- [ ] Verify the JSON-LD claims are true (see `CLAUDE-AUDIT.md` P0-B)
- [ ] Add the real Google Search Console verification token (`app/layout.tsx`)
- [ ] Deploy, run Lighthouse, record baseline Core Web Vitals
- [ ] Submit `sitemap.xml` in GSC on launch day
- [ ] Decide `biopaprocutleries.com` — redirect or canonicalise (§3-G)
- [ ] Claim/complete Google Business Profile + IndiaMART + TradeIndia + ExportersIndia
- [ ] Set up GSC + Bing Webmaster Tools + analytics before launch, not after
- [ ] Monitor rankings + Coverage weekly for 8 weeks post-launch
