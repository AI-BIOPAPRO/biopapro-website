"use client";

/**
 * The Range — staggered product grid with real photos
 * Category-filtered showcase of actual SKUs
 */

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { getProductById } from "@/lib/products-data";
import { ScrollFloat } from "@/components/reactbits";

const E = [0.16, 1, 0.3, 1] as const;

type Category = "All" | "Cutlery" | "Café" | "Dairy" | "Grill";

const PRODUCTS_BY_CAT = {
  Cutlery: ["fork-160", "spoon-160", "knife-165", "spork-140", "fork-170", "fork-165-premium"],
  Café:    ["stirrer-140", "stirrer-190", "stirrer-110", "straw-8mm", "straw-6mm-wrapped"],
  Dairy:   ["scoop-95", "spoon-110", "fruit-fork-90", "chips-fork-85"],
  Grill:   ["skewer-10cm", "skewer-15cm", "skewer-21cm", "skewer-7cm", "skewer-9cm"],
} as const;

const ALL_IDS = [
  "fork-160", "spoon-160", "knife-165", "spork-140",
  "stirrer-140", "stirrer-190", "straw-8mm", "straw-6mm-wrapped",
  "scoop-95", "skewer-10cm", "skewer-15cm", "fruit-fork-90",
  "fork-170", "fork-165-premium", "skewer-21cm", "chips-fork-85",
];

const CATS: Category[] = ["All", "Cutlery", "Café", "Dairy", "Grill"];

function ProductCard({
  id,
  delay,
  tall,
}: {
  id:    string;
  delay: number;
  tall?: boolean;
}) {
  const product = getProductById(id);
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-60px 0px" });

  if (!product) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.65, ease: E }}
      className="group relative overflow-hidden"
      style={{
        borderRadius: "6px",
        aspectRatio:  tall ? "3/4" : "1/1",
        background:   "linear-gradient(155deg, #F2EBDD 0%, #E7DCC7 100%)",
      }}
    >
      <Link
        href={`/products?product=${encodeURIComponent(product.slug)}#catalog`}
        aria-label={`View ${product.name}`}
      >
        <Image
          src={product.primaryImage}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Category pill */}
        <span
          className="absolute top-3 left-3 font-mono text-[9px] font-bold uppercase tracking-[0.16em] px-2 py-1"
          style={{
            background:     "rgba(26,18,8,0.68)",
            color:          "#E97316",
            backdropFilter: "blur(4px)",
            borderRadius:   "2px",
          }}
        >
          {product.category}
        </span>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex flex-col items-start justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, rgba(26,18,8,0.92) 0%, transparent 60%)" }}
        >
          <p
            className="font-sans font-bold text-sm leading-tight text-white mb-1"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {product.name}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            {product.length} · {product.material}
          </p>
          <span
            className="inline-flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em]"
            style={{ color: "#E97316" }}
          >
            View Specs <ArrowUpRight size={9} strokeWidth={2.5} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProductEcosystem() {
  const [active, setActive] = useState<Category>("All");
  const ref     = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-80px 0px" });

  const handleCatChange = (cat: Category) => {
    setActive(cat);
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const ids =
    active === "All"
      ? ALL_IDS
      : [...PRODUCTS_BY_CAT[active]].map(String);

  const displayed = ids.slice(0, 12);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#F5F0E6" }}
      aria-label="Biopapro product range"
    >
      {/* Big watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    900,
            fontSize:      "clamp(6rem, 20vw, 18rem)",
            lineHeight:    1,
            color:         "rgba(233,115,22,0.04)",
            letterSpacing: "-0.04em",
            whiteSpace:    "nowrap",
          }}
        >
          THE RANGE
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-20 md:pb-28">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: E }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>04</span>
              <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.3)" }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#1A1208" }}>Product Range</span>
            </div>
            <h2
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2.8rem, 6vw, 6rem)",
                lineHeight:    0.9,
                letterSpacing: "-0.03em",
                color:         "#1A1208",
              }}
            >
              THE
              <br />
              <span style={{ color: "#E97316" }}>RANGE.</span>
            </h2>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: E }}
            className="flex flex-wrap gap-2"
          >
            {CATS.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCatChange(cat)}
                className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-2 transition-all duration-250"
                style={{
                  background:   active === cat ? "#E97316" : "transparent",
                  color:        active === cat ? "#FFFFFF" : "#1A1208",
                  border:       `1px solid ${active === cat ? "#E97316" : "rgba(26,18,8,0.2)"}`,
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) => {
                  if (active !== cat) (e.currentTarget as HTMLElement).style.borderColor = "#E97316";
                }}
                onMouseLeave={(e) => {
                  if (active !== cat) (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,18,8,0.2)";
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Staggered product grid */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {displayed.map((id, i) => (
            <ProductCard
              key={`${active}-${id}`}
              id={id}
              delay={i * 0.05}
              tall={i === 0 || i === 5 || i === 10}
            />
          ))}
        </div>

        {/* CTA */}
        <ScrollFloat delay={0.3} className="flex justify-center mt-14">
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 px-8 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.22em] transition-all duration-300"
            style={{ background: "#1A4731", color: "#FFFFFF", borderRadius: "4px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1A4731"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#1A4731"; }}
          >
            View Full Catalog — 30+ SKUs
            <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </ScrollFloat>

      </div>
    </section>
  );
}
