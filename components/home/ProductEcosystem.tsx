"use client";

/**
 * S7 — Product Ecosystem
 *
 * Full product range in a premium editorial layout.
 * NOT an e-commerce grid. Products feel engineered, not listed.
 *
 * Layout:
 *   - Section header with category filters
 *   - Masonry-inspired staggered card grid
 *   - Each card: real CDN product image + name + sizes + MOQ + certifications
 *   - Hover: wood-amber top bar + slight elevation + spec reveal
 *   - CTA: full catalog link
 *
 * Images: sourced from biopapro.com CDN — no placeholders needed for
 *   the 6 hero products. Additional products show warm gradient placeholders.
 */

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

type Category = "All" | "Cutlery" | "Café" | "Dairy" | "Grill" | "Packaging";

const CATEGORIES: Category[] = ["All", "Cutlery", "Café", "Dairy", "Grill", "Packaging"];

interface Product {
  id: string;
  name: string;
  category: Category;
  sizes: string;
  moq: string;
  material: string;
  certifications: string[];
  cdnImage: string | null;   // null = use warm gradient placeholder
  highlight?: boolean;       // span 2 columns on desktop
}

const PRODUCTS: Product[] = [
  {
    id: "spork",
    name: "Birchwood Spork",
    category: "Cutlery",
    sizes: "140mm · 160mm",
    moq: "100,000 units",
    material: "FSC Birchwood",
    certifications: ["FSC®", "FDA", "EU"],
    cdnImage: "https://biopapro.com/cdn/shop/collections/C2_2.png?v=1663670170&width=800",
    highlight: true,
  },
  {
    id: "fork",
    name: "Birchwood Fork",
    category: "Cutlery",
    sizes: "140mm · 160mm · 180mm",
    moq: "100,000 units",
    material: "FSC Birchwood",
    certifications: ["FSC®", "FDA", "EU"],
    cdnImage: "https://biopapro.com/cdn/shop/collections/C4_4.png?v=1662374267&width=800",
  },
  {
    id: "spoon",
    name: "Birchwood Spoon",
    category: "Cutlery",
    sizes: "110mm · 130mm · 160mm",
    moq: "100,000 units",
    material: "FSC Birchwood",
    certifications: ["FSC®", "FDA", "EU"],
    cdnImage: "https://biopapro.com/cdn/shop/collections/C5.png?v=1662374075&width=800",
  },
  {
    id: "knife",
    name: "Birchwood Knife",
    category: "Cutlery",
    sizes: "165mm · 185mm",
    moq: "100,000 units",
    material: "FSC Birchwood",
    certifications: ["FSC®", "FDA", "EU"],
    cdnImage: "https://biopapro.com/cdn/shop/collections/C3_3.png?v=1662374387&width=800",
  },
  {
    id: "stirrer",
    name: "Coffee Stirrer",
    category: "Café",
    sizes: "110mm · 140mm · 160mm · 190mm",
    moq: "500,000 units",
    material: "FSC Birchwood",
    certifications: ["FSC®", "FDA"],
    cdnImage: "https://biopapro.com/cdn/shop/collections/Untitled_design_61.png?v=1662375316&width=800",
    highlight: true,
  },
  {
    id: "skewer",
    name: "Gun Skewer",
    category: "Grill",
    sizes: "150mm · 200mm · 250mm · 300mm",
    moq: "250,000 units",
    material: "FSC Birchwood",
    certifications: ["FSC®", "FDA", "EU"],
    cdnImage: "https://biopapro.com/cdn/shop/collections/Untitled_design_58.png?v=1663670146&width=800",
  },
  {
    id: "icecream",
    name: "Ice Cream Stick",
    category: "Dairy",
    sizes: "75mm · 93mm · 114mm",
    moq: "1,000,000 units",
    material: "FSC Birchwood",
    certifications: ["FSC®", "FDA", "EU"],
    cdnImage: "https://biopapro.com/cdn/shop/products/W43.png?v=1662714289&width=800",
  },
  {
    id: "packaged",
    name: "Individually Sleeved Set",
    category: "Packaging",
    sizes: "Custom packaging available",
    moq: "50,000 sets",
    material: "FSC Birchwood + Kraft Paper",
    certifications: ["FSC®", "BPI", "BSCI"],
    cdnImage: "https://biopapro.com/cdn/shop/collections/C6_4.png?v=1662375675&width=800",
  },
];

/* ── Product card ── */
function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.62, ease: EASE, delay: index * 0.07 }}
      className={`group relative flex flex-col bg-card border border-border hover:border-wood/40 hover:shadow-md transition-all duration-400 overflow-hidden cursor-pointer ${
        product.highlight ? "lg:col-span-2" : ""
      }`}
    >
      {/* Wood top-bar reveal */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-wood origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 z-10" />

      {/* Category + MOQ header */}
      <div className="px-4 pt-4 pb-3 flex items-center justify-between border-b border-border">
        <span className="font-mono text-[7.5px] text-wood tracking-[0.28em] uppercase">
          {product.category}
        </span>
        <span className="font-mono text-[7px] text-ink-muted tracking-wider uppercase">
          MOQ {product.moq.split(" ")[0]}
        </span>
      </div>

      {/* Image area */}
      <div
        className="relative flex-1 overflow-hidden"
        style={{ minHeight: product.highlight ? "280px" : "220px" }}
      >
        {product.cdnImage ? (
          <Image
            src={product.cdnImage}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          /* Warm gradient placeholder for products without CDN images */
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{
              background: "linear-gradient(155deg, #F0E4CE 0%, #E5D9C5 50%, #DDD0B8 100%)",
            }}
          >
            <span className="font-mono text-[7px] text-wood/40 tracking-[0.22em] uppercase text-center leading-loose">
              Product Photo
              <br />Coming Soon
            </span>
          </div>
        )}

        {/* Hover overlay with specs */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, rgba(44,36,27,0.82) 0%, transparent 55%)" }}
        >
          <div className="flex flex-wrap gap-1.5">
            {product.certifications.map((cert) => (
              <span
                key={cert}
                className="font-mono text-[7px] tracking-[0.16em] uppercase px-2 py-1"
                style={{
                  background: "rgba(200,154,91,0.2)",
                  border: "1px solid rgba(200,154,91,0.4)",
                  color: "#E5C99A",
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Product info footer */}
      <div className="px-4 py-4">
        <p className="font-sans text-[12px] font-semibold text-ink mb-1 group-hover:text-wood-dark transition-colors duration-300 leading-snug">
          {product.name}
        </p>
        <p className="font-mono text-[7.5px] text-ink-muted tracking-[0.1em] uppercase">
          {product.sizes}
        </p>
        <p className="font-mono text-[7px] text-ink-muted/60 tracking-[0.08em] mt-0.5">
          {product.material} · Min {product.moq}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main section ── */
export default function ProductEcosystem() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-bg paper" aria-labelledby="products-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-8">

        {/* ── Section header ── */}
        <div ref={headerRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="07" label="Product Range" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <motion.h2
              id="products-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
            >
              Every product,{" "}
              <span className="text-wood">engineered</span>
              <br />for global food service.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="font-sans font-light text-ink-light text-base leading-relaxed mb-5">
                Six product families. One manufacturing standard. FSC-certified
                birchwood, precision-stamped, optically sorted, UV-sterilised,
                and shipped in bulk to airlines, hospitality groups, and
                distributors in 18+ countries.
              </p>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2.5 self-start font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-all duration-200"
                style={{ border: "1px solid #C89A5B", color: "#C89A5B" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#C89A5B";
                  el.style.color = "#1D1610";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.color = "#C89A5B";
                }}
              >
                View Full Product Catalog
                <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── Category filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
          className="flex items-center gap-1 flex-wrap mb-8 border-b border-border pb-5"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-mono text-[9px] uppercase tracking-[0.18em] px-4 py-2 transition-all duration-200"
              style={{
                background: activeCategory === cat ? "#C89A5B" : "transparent",
                color: activeCategory === cat ? "#1D1610" : "#9E9083",
                border: `1px solid ${activeCategory === cat ? "#C89A5B" : "#DDD3C5"}`,
              }}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-mono text-[8px] text-ink-muted uppercase tracking-[0.15em]">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </span>
        </motion.div>

        {/* ── Product grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-auto"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* ── Bottom CTA bar ── */}
      <div className="border-t border-border mt-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-sans font-medium text-ink text-sm">
              Need custom sizing, branding, or packaging?
            </p>
            <p className="font-mono text-[8.5px] text-ink-muted uppercase tracking-[0.14em] mt-0.5">
              Laser engraving · Custom dimensions · Private label · OEM welcome
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-6 py-3 bg-ink text-birch text-[10px] font-bold uppercase tracking-[0.14em] hover:bg-wood-dark transition-colors duration-300 flex-shrink-0"
          >
            Request Custom Quote
            <ArrowRight size={11} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
