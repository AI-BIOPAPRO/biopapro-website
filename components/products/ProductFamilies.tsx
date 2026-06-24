"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { PRODUCT_FAMILIES } from "@/lib/products-data";

const EASE = [0.16, 1, 0.3, 1] as const;
const IMG_BG = "#EDE6D8";

function FamilyCard({
  family,
  index,
  onSelect,
}: {
  family: (typeof PRODUCT_FAMILIES)[number];
  index: number;
  onSelect: (category: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6% 0px" });

  return (
    <motion.article
      ref={ref}
      id={family.sectionId}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay: (index % 4) * 0.07 }}
      className="group relative flex flex-col bg-surface overflow-hidden cursor-pointer"
      style={{ border: "1px solid #DDD3C5", transition: "border-color 0.28s, box-shadow 0.32s, transform 0.32s" }}
      onClick={() => onSelect(family.category)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(family.category)}
      aria-label={`Browse ${family.headline}`}
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
    >
      {/* Image — full bleed, warm bg fallback for transparent PNGs */}
      <div className="relative overflow-hidden" style={{ height: "200px", background: IMG_BG }}>
        <Image
          src={family.heroImage}
          alt={family.headline}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Gradient for legibility */}
        <div
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-70"
          style={{ background: "linear-gradient(to top, rgba(29,22,16,0.62) 0%, rgba(29,22,16,0.1) 45%, transparent 75%)" }}
        />

        {/* SKU count + category — over gradient */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 flex items-end justify-between z-10">
          <span
            className="font-display font-light leading-tight"
            style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", color: "#F6F1E8" }}
          >
            {family.headline}
          </span>
          <span
            className="font-mono text-[7px] uppercase tracking-[0.2em] px-2 py-1 flex-shrink-0 ml-2"
            style={{ background: "rgba(200,154,91,0.18)", border: "1px solid rgba(200,154,91,0.4)", color: "#E5C99A" }}
          >
            {family.skuCount} SKU{family.skuCount > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <p className="font-sans text-[11.5px] font-light text-ink-light leading-relaxed mb-3 flex-1">
          {family.description}
        </p>

        {/* Applications */}
        <div className="flex flex-wrap gap-1 mb-4">
          {family.applications.slice(0, 3).map((app) => (
            <span
              key={app}
              className="font-mono text-[6.5px] uppercase tracking-[0.14em] px-2 py-1"
              style={{ background: "rgba(74,122,61,0.07)", border: "1px solid rgba(74,122,61,0.18)", color: "#4A7A3D" }}
            >
              {app}
            </span>
          ))}
        </div>

        {/* MOQ + action */}
        <div
          className="flex items-center justify-between pt-3 border-t"
          style={{ borderColor: "#EDE5D8" }}
        >
          <div>
            <span className="font-mono text-[7px] text-ink-muted uppercase tracking-[0.18em]">Min. Order</span>
            <p className="font-mono text-[9px] font-bold text-ink mt-0.5">{family.moqRange}</p>
          </div>
          <div
            className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] transition-colors duration-200 group-hover:text-wood"
            style={{ color: "#6B5D50" }}
          >
            Browse
            <ArrowUpRight
              size={10}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

interface ProductFamiliesProps {
  onCategorySelect: (category: string) => void;
}

export default function ProductFamilies({ onCategorySelect }: ProductFamiliesProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    // Parchment bg — visually distinct from hero above (#F6F1E8) and catalog below (#FBF8F2)
    <section style={{ background: "#EFE6D7" }} aria-labelledby="families-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">

        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="02" label="Product Families" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="families-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Nine categories.
              <br />
              One manufacturing{" "}
              <span style={{ color: "#C89A5B" }}>standard.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light text-base leading-relaxed flex items-center"
            >
              Every Biopapro product begins from the same FSC-certified birchwood
              billets, precision-stamped on the same production line, UV-sterilised,
              and optically sorted before packing. The category changes. The standard
              does not.
            </motion.p>
          </div>
        </div>

        {/* Family grid — 2 rows of 4, 4-col only at XL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {PRODUCT_FAMILIES.map((family, i) => (
            <FamilyCard
              key={family.id}
              family={family}
              index={i}
              onSelect={onCategorySelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
