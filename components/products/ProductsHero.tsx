"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { ALL_CATEGORIES, PRODUCT_FAMILIES, type ProductCategory } from "@/lib/products-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: "30+",  label: "Product SKUs",      sub: "Across 9 categories"   },
  { value: "10K+", label: "Min. Carton Qty",   sub: "Per export shipment"   },
  { value: "18+",  label: "Countries Supplied",sub: "Active export markets"  },
  { value: "100M", label: "Units / Month",     sub: "Production capacity"   },
];

// Six product images for the mosaic — use only real Biopapro CDN images
const MOSAIC = [
  { src: "https://biopapro.com/cdn/shop/collections/C4_4.png?v=1662374267",          alt: "Birchwood Fork"    },
  { src: "https://biopapro.com/cdn/shop/products/G42_1_60482dac-c2a5-4be5-af8d-4eb538db9224.jpg?v=1665051817", alt: "Wooden Spoon in use" },
  { src: "https://biopapro.com/cdn/shop/collections/C2_2.png?v=1663670170",          alt: "Birchwood Spork"   },
  { src: "https://biopapro.com/cdn/shop/products/G54_1.jpg?v=1665052308",             alt: "Wooden Knife"      },
  { src: "https://biopapro.com/cdn/shop/collections/Untitled_design_61.png?v=1662375316", alt: "Coffee Stirrers" },
  { src: "https://biopapro.com/cdn/shop/products/G52_1.jpg?v=1664961427",             alt: "Cutlery Set"       },
];

// Map each category to its anchor — must match sectionId in PRODUCT_FAMILIES
function getCategoryAnchor(cat: ProductCategory): string {
  const family = PRODUCT_FAMILIES.find((f) => f.category === cat);
  return family ? `#${family.sectionId}` : "#catalog";
}

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  Forks: "Forks", Spoons: "Spoons", Knives: "Knives", Sporks: "Sporks",
  Stirrers: "Stirrers", Scoops: "Scoops", Skewers: "Skewers",
  Sets: "Sets", "Paper Straws": "Straws",
};

// Warm image bg — shows behind transparent PNGs
const IMG_BG = "#EDE6D8";

export default function ProductsHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-[72px] paper"
      style={{ background: "#F6F1E8" }}
      aria-labelledby="products-hero-heading"
    >
      {/* Top green accent line */}
      <div
        className="h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #4A7A3D 30%, #2D5228 60%, transparent 100%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

        {/* ── Main hero grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-16 pb-12 lg:pt-20 lg:pb-16">

          {/* Left — Copy */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-8"
            >
              <SectionLabel index="01" label="Product Catalog" />
            </motion.div>

            <motion.h1
              id="products-hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.92] mb-8"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)" }}
            >
              Engineering{" "}
              <em className="not-italic" style={{ color: "#C89A5B", fontStyle: "italic", fontFamily: "inherit" }}>
                precision
              </em>
              <br />
              into every unit.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed max-w-[480px] mb-10"
              style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}
            >
              FSC-certified birchwood tableware manufactured at 100M+ units
              per month. Nine product categories, 30+ SKUs — all export-ready,
              procurement-certified, manufactured in-house.
            </motion.p>

            {/* Cert badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {["FSC® 100%", "ISO 9001:2015", "FDA CFR 21", "BPI Compostable", "BSCI Audited"].map((cert) => (
                <span
                  key={cert}
                  className="font-mono text-[8px] uppercase tracking-[0.2em] px-3 py-1.5"
                  style={{ border: "1px solid #DDD3C5", color: "#6B5D50", background: "rgba(255,255,255,0.55)" }}
                >
                  {cert}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300"
                style={{ background: "#4A7A3D" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#2D5228")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7A3D")}
              >
                Request Export Quote
                <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <a
                href="#catalog"
                className="group inline-flex items-center gap-2 font-mono text-[9px] text-ink-muted uppercase tracking-[0.2em] hover:text-ink transition-colors duration-200"
              >
                Browse catalog
                <ChevronDown size={11} className="group-hover:translate-y-0.5 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>

          {/* Right — Product image mosaic */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
              className="grid grid-cols-3 gap-2 h-[360px] lg:h-[460px]"
            >
              {/* Col 1 — tall + short */}
              <div className="flex flex-col gap-2">
                <div className="flex-[2] relative overflow-hidden" style={{ background: IMG_BG }}>
                  <Image src={MOSAIC[0].src} alt={MOSAIC[0].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="(max-width: 1024px) 33vw, 20vw" priority />
                </div>
                <div className="flex-1 relative overflow-hidden" style={{ background: IMG_BG }}>
                  <Image src={MOSAIC[1].src} alt={MOSAIC[1].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="(max-width: 1024px) 33vw, 20vw" priority />
                </div>
              </div>

              {/* Col 2 — offset: short + tall */}
              <div className="flex flex-col gap-2 mt-8">
                <div className="flex-1 relative overflow-hidden" style={{ background: IMG_BG }}>
                  <Image src={MOSAIC[2].src} alt={MOSAIC[2].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="(max-width: 1024px) 33vw, 20vw" />
                </div>
                <div className="flex-[2] relative overflow-hidden" style={{ background: IMG_BG }}>
                  <Image src={MOSAIC[3].src} alt={MOSAIC[3].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="(max-width: 1024px) 33vw, 20vw" />
                </div>
              </div>

              {/* Col 3 — two equal */}
              <div className="flex flex-col gap-2">
                <div className="flex-1 relative overflow-hidden" style={{ background: IMG_BG }}>
                  <Image src={MOSAIC[4].src} alt={MOSAIC[4].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="(max-width: 1024px) 33vw, 20vw" />
                </div>
                <div className="flex-1 relative overflow-hidden" style={{ background: IMG_BG }}>
                  <Image src={MOSAIC[5].src} alt={MOSAIC[5].alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" sizes="(max-width: 1024px) 33vw, 20vw" />
                </div>
              </div>
            </motion.div>

            {/* Floating FSC badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE, delay: 0.52 }}
              className="absolute -bottom-3 left-0 px-4 py-3 hidden lg:block"
              style={{ background: "#1D1610", border: "1px solid #3D2E22" }}
            >
              <p className="font-mono text-[7px] uppercase tracking-[0.25em]" style={{ color: "rgba(200,154,91,0.75)" }}>
                FSC® Chain of Custody
              </p>
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] mt-0.5" style={{ color: "#F6F1E8" }}>
                All birchwood certified
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE, delay: 0.38 }}
          className="border-t border-b py-8 mb-12"
          style={{ borderColor: "#DDD3C5" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center px-4 py-3"
                style={{
                  borderRight: i % 2 === 0 || i === 1 ? "1px solid #DDD3C5" : "none",
                  borderBottom: i < 2 ? "1px solid #DDD3C5" : "none",
                }}
              >
                <span
                  className="font-mono font-bold mb-1.5"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", color: "#C89A5B" }}
                >
                  {stat.value}
                </span>
                <span className="font-sans text-[10px] font-semibold text-ink uppercase tracking-[0.1em] mb-0.5">
                  {stat.label}
                </span>
                <span className="font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.14em]">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Category quick-jump ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.44 }}
          className="pb-12"
        >
          <p className="font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.3em] mb-4">
            Jump to category
          </p>
          <div className="flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((cat) => (
              <a
                key={cat}
                href={getCategoryAnchor(cat)}
                className="font-mono text-[8.5px] uppercase tracking-[0.16em] px-4 py-2 transition-all duration-200"
                style={{ border: "1px solid #DDD3C5", color: "#6B5D50", background: "transparent" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#4A7A3D";
                  el.style.color = "#4A7A3D";
                  el.style.background = "rgba(74,122,61,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#DDD3C5";
                  el.style.color = "#6B5D50";
                  el.style.background = "transparent";
                }}
              >
                {CATEGORY_LABELS[cat]}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
