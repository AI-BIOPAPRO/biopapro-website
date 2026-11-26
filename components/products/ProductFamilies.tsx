"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { PRODUCT_FAMILIES } from "@/lib/products-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";
const IMG_BG = "#E0D4C4";

interface ProductFamiliesProps {
  onCategorySelect: (category: string) => void;
}

export default function ProductFamilies({ onCategorySelect }: ProductFamiliesProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-6% 0px" });

  const [hero, wide, ...rest] = PRODUCT_FAMILIES;

  return (
    <section style={{ background: CREAM2 }} aria-labelledby="families-heading">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16 pt-20 pb-20">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="02" label="Product Families" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end">
            <motion.h2
              id="families-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2rem, 4vw, 3.8rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.03em",
                color:         INK,
              }}
            >
              NINE CATEGORIES.<br />
              ONE{" "}
              <span style={{ color: ORANGE }}>STANDARD.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
            >
              <p className="text-base leading-relaxed mb-6" style={{ color: MUTED, fontFamily: "'Outfit', sans-serif" }}>
                Every Biopapro product begins from the same FSC-certified birchwood
                billets, precision-stamped on the same production line, UV-sterilised,
                and optically sorted before packing. The category changes. The standard
                does not.
              </p>
              <div className="flex items-center gap-6">
                {[{ n: "30+", l: "SKUs" }, { n: "FSC®", l: "Certified" }, { n: "1 plant", l: "Mumbai" }].map((s) => (
                  <div key={s.l}>
                    <div className="font-black text-lg" style={{ fontFamily: "'Outfit', sans-serif", color: GREEN }}>{s.n}</div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: MUTED }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── BENTO GRID ── */}
        <div ref={gridRef}>

          {/* Row 1: hero (tall, 2 rows) + wide + normal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr] gap-3 mb-3">

            {/* HERO cell — tall, spans 2 rows, dark green */}
            {hero && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.72, ease: EASE }}
                id={hero.sectionId}
                className="relative overflow-hidden flex flex-col justify-end cursor-pointer group lg:row-span-2"
                style={{
                  background:   GREEN,
                  borderRadius: "20px",
                  minHeight:    "460px",
                  padding:      "24px",
                }}
                onClick={() => onCategorySelect(hero.category)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && onCategorySelect(hero.category)}
                aria-label={`Browse ${hero.headline}`}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={hero.heroImage}
                    alt={hero.headline}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ opacity: 0.25, mixBlendMode: "luminosity" }}
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                </div>
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(26,71,49,1) 0%, rgba(26,71,49,0.75) 40%, rgba(26,71,49,0.4) 100%)" }}
                />

                {/* Badge */}
                <div
                  className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5"
                  style={{ background: ORANGE, color: "#fff", borderRadius: "6px" }}
                >
                  Most Ordered
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] mb-3" style={{ color: "rgba(245,240,230,0.4)" }}>
                    01 — {hero.headline}
                  </p>
                  <div
                    style={{
                      fontFamily:    "'Outfit', sans-serif",
                      fontWeight:    900,
                      fontSize:      "clamp(2.4rem, 4vw, 4rem)",
                      lineHeight:    0.87,
                      letterSpacing: "-0.045em",
                      color:         "#F5F0E6",
                      marginBottom:  "16px",
                    }}
                  >
                    {hero.headline.toUpperCase()}.
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {hero.applications.slice(0, 4).map((app) => (
                      <span
                        key={app}
                        className="font-mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1"
                        style={{ background: "rgba(245,240,230,0.1)", border: "1px solid rgba(245,240,230,0.14)", color: "rgba(245,240,230,0.65)", borderRadius: "5px" }}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(245,240,230,0.35)" }}>Min. Order</p>
                      <p className="font-mono text-[11px] font-bold mt-0.5" style={{ color: "#F5F0E6" }}>{hero.moqRange}</p>
                    </div>
                    <div
                      className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]"
                      style={{ color: "rgba(245,240,230,0.5)" }}
                    >
                      Browse <ArrowUpRight size={10} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.article>
            )}

            {/* WIDE cell — image + text side by side on md+ */}
            {wide && (
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.68, ease: EASE, delay: 0.08 }}
                id={wide.sectionId}
                className="group relative overflow-hidden flex flex-col cursor-pointer"
                style={{
                  background:   CREAM,
                  border:       "1px solid rgba(26,71,49,0.12)",
                  borderRadius: "20px",
                  minHeight:    "220px",
                  transition:   "border-color 0.28s, box-shadow 0.3s",
                }}
                onClick={() => onCategorySelect(wide.category)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && onCategorySelect(wide.category)}
                aria-label={`Browse ${wide.headline}`}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(26,71,49,0.35)";
                  el.style.boxShadow = "0 10px 32px rgba(26,71,49,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(26,71,49,0.12)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "140px", background: IMG_BG }}>
                  <Image
                    src={wide.heroImage}
                    alt={wide.headline}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 50vw, 350px"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,71,49,0.5) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-3 left-4">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1"
                      style={{ background: "rgba(26,71,49,0.08)", border: "1px solid rgba(26,71,49,0.25)", color: "#F5F0E6", borderRadius: "4px" }}
                    >
                      {wide.skuCount} SKUs
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3
                    style={{
                      fontFamily:    "'Outfit', sans-serif",
                      fontWeight:    900,
                      fontSize:      "1.3rem",
                      letterSpacing: "-0.03em",
                      color:         INK,
                      marginBottom:  "6px",
                    }}
                  >
                    {wide.headline}
                  </h3>
                  <p className="text-[11.5px] leading-relaxed flex-1" style={{ color: MUTED, fontFamily: "'Outfit', sans-serif" }}>
                    {wide.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 mt-2 border-t" style={{ borderColor: "rgba(26,71,49,0.1)" }}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: MUTED }}>{wide.moqRange}</p>
                    <div className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: MUTED }}>
                      Browse <ArrowUpRight size={9} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Third card in row 1 */}
            {rest[0] && (
              <NormalCard family={rest[0]} index={2} onSelect={onCategorySelect} inView={gridInView} delay={0.14} />
            )}

            {/* Fourth card — goes in row 2, next to hero (which spans) */}
            {rest[1] && (
              <NormalCard family={rest[1]} index={3} onSelect={onCategorySelect} inView={gridInView} delay={0.06} />
            )}

            {/* Fifth card — row 2, last col */}
            {rest[2] && (
              <NormalCard family={rest[2]} index={4} onSelect={onCategorySelect} inView={gridInView} delay={0.12} />
            )}
          </div>

          {/* ── Remaining cards — 4 col uniform grid ── */}
          {rest.length > 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {rest.slice(3).map((family, i) => (
                <NormalCard
                  key={family.id}
                  family={family}
                  index={i + 5}
                  onSelect={onCategorySelect}
                  inView={gridInView}
                  delay={i * 0.06}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function NormalCard({
  family,
  index,
  onSelect,
  inView,
  delay = 0,
}: {
  family: (typeof PRODUCT_FAMILIES)[number];
  index: number;
  onSelect: (category: string) => void;
  inView: boolean;
  delay?: number;
}) {
  return (
    <motion.article
      id={family.sectionId}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay }}
      className="group relative overflow-hidden flex flex-col cursor-pointer"
      style={{
        background:   CREAM,
        border:       "1px solid rgba(26,71,49,0.12)",
        borderRadius: "16px",
        transition:   "border-color 0.28s, box-shadow 0.3s, transform 0.3s",
      }}
      onClick={() => onSelect(family.category)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(family.category)}
      aria-label={`Browse ${family.headline}`}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(26,71,49,0.35)";
        el.style.boxShadow = "0 8px 28px rgba(26,71,49,0.08)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(26,71,49,0.12)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "180px", background: IMG_BG }}>
        <Image
          src={family.heroImage}
          alt={family.headline}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,71,49,0.6) 0%, transparent 55%)" }} />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize:   "clamp(0.9rem, 1.3vw, 1.05rem)",
              color:      "#F5F0E6",
            }}
          >
            {family.headline}
          </span>
          <span
            className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 ml-2 flex-shrink-0"
            style={{ background: "rgba(26,71,49,0.08)", border: "1px solid rgba(245,240,230,0.25)", color: "#F5F0E6", borderRadius: "4px" }}
          >
            {family.skuCount} SKU{family.skuCount > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <p className="text-[11.5px] leading-relaxed mb-3 flex-1" style={{ color: MUTED, fontFamily: "'Outfit', sans-serif" }}>
          {family.description}
        </p>

        {/* Application tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {family.applications.slice(0, 3).map((app) => (
            <span
              key={app}
              className="font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-1"
              style={{ background: "rgba(26,71,49,0.07)", border: "1px solid rgba(26,71,49,0.13)", color: GREEN, borderRadius: "4px" }}
            >
              {app}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "rgba(26,71,49,0.1)" }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: MUTED }}>{family.moqRange}</p>
          <div className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: MUTED }}>
            Browse
            <ArrowUpRight size={9} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
