"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, ChevronDown, Leaf } from "lucide-react";
import { ALL_CATEGORIES, CATEGORY_COLORS, PRODUCT_FAMILIES, type ProductCategory } from "@/lib/products-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

const STATS = [
  { value: "73+",  label: "Product SKUs"   },
  { value: "100M", label: "Units / Month"  },
  { value: "18+",  label: "Export Markets" },
  { value: "10K+", label: "Min. Order"     },
];

const HERO_IMAGE = {
  src: "https://biopapro.com/cdn/shop/collections/C4_4.png?v=1662374267",
  alt: "FSC-certified birchwood fork",
};

const BENTO_MINI = [
  { index: "01", name: "FORKS",        skus: "10", range: "140–180mm" },
  { index: "09", name: "PAPER STRAWS", skus: "5",  range: "197–250mm" },
  { index: "03", name: "KNIVES",       skus: "6",  range: "140–165mm" },
  { index: "08", name: "SETS",         skus: "4",  range: "Various"   },
];

function getCategoryAnchor(cat: ProductCategory): string {
  const family = PRODUCT_FAMILIES.find((f) => f.category === cat);
  return family ? `#${family.sectionId}` : "#catalog";
}

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  Forks: "Forks", Spoons: "Spoons", Knives: "Knives", Sporks: "Sporks",
  Stirrers: "Stirrers", Scoops: "Scoops", Skewers: "Skewers",
  Sets: "Sets", "Paper Straws": "Straws", "Ice Cream": "Ice Cream", Sticks: "Sticks",
};

export default function ProductsHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-[72px]"
      style={{ background: CREAM }}
      aria-labelledby="products-hero-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16 pt-5 pb-3">

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-3">

          {/* ── LEFT: Big tall green card — spans both right rows on lg ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.78, ease: EASE }}
            className="relative overflow-hidden lg:row-span-2 flex flex-col justify-end"
            style={{
              background: GREEN,
              borderRadius: "20px",
              minHeight: "480px",
              padding: "28px",
            }}
          >
            {/* Product image — faded into green */}
            <div className="absolute inset-0">
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                className="object-cover"
                style={{ opacity: 0.22, mixBlendMode: "luminosity" }}
                priority
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>
            {/* Gradient — green fades up from bottom */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(26,71,49,1) 0%, rgba(26,71,49,0.82) 45%, rgba(26,71,49,0.5) 100%)" }}
            />

            {/* Content */}
            <div className="relative z-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] mb-4" style={{ color: "rgba(245,240,230,0.4)" }}>
                01 — Featured product
              </p>

              {/* Giant product name */}
              <div
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(3rem, 5vw, 5.5rem)",
                  lineHeight:    0.86,
                  letterSpacing: "-0.045em",
                  color:         "#F5F0E6",
                  marginBottom:  "6px",
                }}
              >
                BIRCH
              </div>
              <div
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(3rem, 5vw, 5.5rem)",
                  lineHeight:    0.86,
                  letterSpacing: "-0.045em",
                  color:         ORANGE,
                  marginBottom:  "24px",
                }}
              >
                FORK.
              </div>

              {/* Spec tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {[
                  { label: "Export Ready", highlight: true },
                  { label: "FSC® 100%",   highlight: false },
                  { label: "MOQ 10,000",  highlight: false },
                ].map(({ label, highlight }) => (
                  <span
                    key={label}
                    className="font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5"
                    style={{
                      background: highlight ? ORANGE : "rgba(245,240,230,0.1)",
                      color:      highlight ? "#fff"  : "rgba(245,240,230,0.7)",
                      borderRadius: "6px",
                      border: highlight ? "none" : "1px solid rgba(245,240,230,0.14)",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Cert row */}
              <div className="flex gap-5 flex-wrap">
                {["ISO 9001:2015", "ISO 14001", "BRCGS"].map((c) => (
                  <p key={c} className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: "rgba(245,240,230,0.3)" }}>
                    {c}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT TOP: Headline card ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.72, ease: EASE, delay: 0.1 }}
            className="flex flex-col justify-between"
            style={{
              background:   CREAM2,
              borderRadius: "20px",
              padding:      "clamp(24px, 3.5vw, 48px)",
            }}
          >
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ background: "rgba(26,71,49,0.1)", color: GREEN }}
              >
                <Leaf size={10} aria-hidden="true" />
                9 Categories · 73+ SKUs
              </div>

              <h1
                id="products-hero-heading"
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(2.8rem, 5.5vw, 6rem)",
                  lineHeight:    0.87,
                  letterSpacing: "-0.045em",
                  color:         INK,
                  marginBottom:  "22px",
                }}
              >
                MADE FOR<br />
                THE WORLD&apos;S<br />
                <span style={{ color: GREEN }}>TABLES.</span>
              </h1>

              <p
                style={{
                  color:      MUTED,
                  fontFamily: "'Outfit', sans-serif",
                  fontSize:   "clamp(0.875rem, 1.1vw, 1rem)",
                  lineHeight: 1.75,
                  maxWidth:   "460px",
                }}
              >
                FSC-certified birchwood cutlery manufactured at 100M+ units
                per month in Mumbai — supplying restaurants, hotels, airlines
                and B2B distributors across 18+ countries.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300"
                style={{ background: ORANGE, borderRadius: "10px" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#C4580A")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = ORANGE)}
              >
                Request Quote
                <ArrowUpRight size={13} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] transition-all duration-200"
                style={{ border: `2px solid ${GREEN}`, color: GREEN, borderRadius: "10px", padding: "14px 28px" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = GREEN; el.style.color = CREAM;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent"; el.style.color = GREEN;
                }}
              >
                Browse Catalog
                <ChevronDown size={13} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT BOTTOM: 4 bento mini-category cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.68, ease: EASE, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3"
          >
            {BENTO_MINI.map((cat) => (
              <div
                key={cat.name}
                className="relative overflow-hidden flex flex-col justify-between group cursor-pointer"
                style={{
                  background:   CREAM,
                  border:       "1px solid rgba(26,71,49,0.12)",
                  borderRadius: "16px",
                  padding:      "18px 16px 16px",
                  minHeight:    "120px",
                  transition:   "border-color 0.25s, box-shadow 0.28s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(26,71,49,0.35)";
                  el.style.boxShadow = "0 8px 24px rgba(26,71,49,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(26,71,49,0.12)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Ghost number */}
                <div
                  aria-hidden="true"
                  style={{
                    position:    "absolute",
                    top:         "6px",
                    right:       "10px",
                    fontFamily:  "'Outfit', sans-serif",
                    fontWeight:  900,
                    fontSize:    "4.5rem",
                    lineHeight:  1,
                    color:       "rgba(26,71,49,0.055)",
                    pointerEvents: "none",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {cat.skus}
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] mb-1" style={{ color: "rgba(122,107,84,0.45)" }}>
                    {cat.index}
                  </p>
                  <h3
                    style={{
                      fontFamily:    "'Outfit', sans-serif",
                      fontWeight:    900,
                      fontSize:      "clamp(1.1rem, 1.8vw, 1.5rem)",
                      letterSpacing: "-0.03em",
                      color:         INK,
                      lineHeight:    0.95,
                    }}
                  >
                    {cat.name}
                  </h3>
                </div>

                <p className="font-mono text-[9px] uppercase tracking-[0.14em]" style={{ color: MUTED }}>
                  {cat.skus} SKUs · {cat.range}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── STATS STRIP — rounded green card ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 mt-3 mb-3"
          style={{ background: GREEN, borderRadius: "16px" }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center px-6 py-6 ${i < 3 ? "border-r border-white/10" : ""} ${i < 2 ? "border-b border-white/10 md:border-b-0" : ""}`}
            >
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize:   "clamp(1.8rem, 2.8vw, 2.6rem)",
                  color:      "#F5F0E6",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] mt-1.5" style={{ color: "rgba(245,240,230,0.42)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── CATEGORY QUICK-JUMP — rounded cream2 card ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.38 }}
          style={{ background: CREAM2, borderRadius: "16px", padding: "18px 22px", marginBottom: "12px" }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: MUTED }}>
            Jump to category
          </p>
          <div className="flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((cat) => {
              const accent = CATEGORY_COLORS[cat];
              return (
                <a
                  key={cat}
                  href={getCategoryAnchor(cat)}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] px-3.5 py-1.5 transition-all duration-200"
                  style={{ border: "1px solid rgba(26,71,49,0.14)", color: MUTED, background: "transparent", borderRadius: "6px" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = accent;
                    el.style.color = accent;
                    el.style.background = `${accent}14`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(26,71,49,0.14)";
                    el.style.color = MUTED;
                    el.style.background = "transparent";
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                  {CATEGORY_LABELS[cat]}
                </a>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
