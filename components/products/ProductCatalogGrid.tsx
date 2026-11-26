"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, useInView, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, ChevronRight, Package, Award } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { useScrollLock } from "@/lib/use-scroll-lock";
import {
  PRODUCTS,
  ALL_CATEGORIES,
  CATEGORY_COLORS,
  getProductBySlug,
  type BioProduct,
  type ProductCategory,
} from "@/lib/products-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";
const IMG_BG = "#E0D4C4";

const CATEGORY_COUNTS: Record<string, number> = { All: PRODUCTS.length };
ALL_CATEGORIES.forEach((cat) => {
  CATEGORY_COUNTS[cat] = PRODUCTS.filter((p) => p.category === cat).length;
});

// ── Product Detail Drawer ─────────────────────────────────────────────────────

function ProductDrawer({ product, onClose }: { product: BioProduct; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);
  const scrollableRef = useRef<HTMLElement>(null);
  useScrollLock(true, scrollableRef);

  useEffect(() => {
    setActiveImage(0);
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [product, onClose]);

  const specs = [
    { label: "Length",        value: product.length },
    { label: "Material",      value: product.material },
    { label: "Finish",        value: product.finish },
    { label: "Pcs / Bag",    value: `${product.pcsPerBag.toLocaleString()} pcs` },
    { label: "Bags / Carton", value: `${product.bagsPerCarton} bags` },
    { label: "Pcs / Carton",  value: `${product.pcsPerCarton.toLocaleString()} pcs` },
    { label: "Min. Order",    value: product.moq },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 z-40"
        style={{ background: "rgba(26,18,8,0.5)" }}
        onClick={onClose}
        aria-hidden
      />

      <motion.aside
        ref={scrollableRef}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: EASE }}
        className="fixed right-0 top-0 h-full z-50 overflow-y-auto"
        style={{ width: "min(540px, 100vw)", background: CREAM, borderLeft: `1px solid rgba(26,71,49,0.15)` }}
        aria-label="Product detail"
        role="dialog"
        aria-modal
      >
        {/* Sticky header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b"
          style={{ background: CREAM, borderColor: "rgba(26,71,49,0.12)" }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.22em] px-2.5 py-1 rounded"
              style={{ background: CATEGORY_COLORS[product.category], color: "#FFFFFF" }}
            >
              {product.category}
            </span>
            {product.isIndividuallyPacked && (
              <span
                className="font-mono text-[11px] uppercase tracking-[0.18em] px-2 py-1 rounded"
                style={{ background: "rgba(233,115,22,0.12)", border: "1px solid rgba(233,115,22,0.3)", color: ORANGE }}
              >
                Individually Packed
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center transition-colors"
            style={{ color: MUTED }}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-6">
          <h2
            style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    900,
              fontSize:      "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.03em",
              color:         INK,
              lineHeight:    0.95,
              marginBottom:  "20px",
            }}
          >
            {product.name.toUpperCase()}
          </h2>

          {/* Hero image */}
          <div
            className="relative mb-3 overflow-hidden"
            style={{ height: "280px", background: IMG_BG, borderRadius: "12px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.galleryImages[activeImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          {product.galleryImages.length > 1 && (
            <div className="flex gap-2 mb-6">
              {product.galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className="relative overflow-hidden flex-shrink-0 transition-all duration-200"
                  style={{
                    width: 60, height: 60,
                    background: IMG_BG,
                    borderRadius: "8px",
                    border: `1.5px solid ${i === activeImage ? ORANGE : "rgba(26,71,49,0.15)"}`,
                  }}
                  aria-label={`Image ${i + 1}`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="60px" />
                </button>
              ))}
            </div>
          )}

          <p
            className="text-[13px] leading-relaxed mb-6"
            style={{ color: MUTED, fontFamily: "'Outfit', sans-serif" }}
          >
            {product.shortDescription}
          </p>

          {/* Applications */}
          <div className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] mb-2.5" style={{ color: MUTED }}>
              Applications
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded"
                  style={{ background: "rgba(26,71,49,0.07)", border: "1px solid rgba(26,71,49,0.18)", color: GREEN }}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Package size={11} style={{ color: MUTED }} />
              <p className="font-mono text-[11px] uppercase tracking-[0.26em]" style={{ color: MUTED }}>
                Technical Specifications
              </p>
            </div>
            <div
              className="overflow-hidden"
              style={{ border: "1px solid rgba(26,71,49,0.12)", borderRadius: "10px" }}
            >
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between px-4 py-2.5"
                  style={{
                    background: i % 2 === 0 ? "rgba(26,71,49,0.03)" : "transparent",
                    borderBottom: i < specs.length - 1 ? "1px solid rgba(26,71,49,0.08)" : "none",
                  }}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: MUTED }}>
                    {spec.label}
                  </span>
                  <span className="font-mono text-[11px] font-medium" style={{ color: INK }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Award size={11} style={{ color: MUTED }} />
              <p className="font-mono text-[11px] uppercase tracking-[0.26em]" style={{ color: MUTED }}>
                Certifications
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.certifications.map((cert) => (
                <span
                  key={cert}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 rounded"
                  style={{ background: CREAM2, border: "1px solid rgba(26,71,49,0.14)", color: MUTED }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* CTA block — green, not dark */}
          <div
            className="p-5 rounded-xl"
            style={{ background: GREEN }}
          >
            <p
              className="text-[13px] mb-1"
              style={{ color: "rgba(245,240,230,0.85)", fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to source {product.name}?
            </p>
            <p
              className="font-mono text-[11px] uppercase tracking-[0.18em] mb-4"
              style={{ color: "rgba(245,240,230,0.45)" }}
            >
              MOQ {product.moq} · {product.pcsPerCarton.toLocaleString()} pcs per export carton
            </p>
            <Link
              href={`/contact?category=${encodeURIComponent(product.category)}&sku=${encodeURIComponent(product.name)}#inquiry-form`}
              className="group inline-flex items-center gap-2 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 rounded-lg"
              style={{ background: ORANGE }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#C4580A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = ORANGE)}
            >
              Request Quote
              <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </motion.aside>
    </>
  );
}

// ── Product Card ──────────────────────────────────────────────────────────────

function ProductCard({
  product,
  index,
  onOpen,
}: {
  product: BioProduct;
  index: number;
  onOpen: (product: BioProduct) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const accent = CATEGORY_COLORS[product.category];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 4) * 0.055 }}
      className="group relative flex flex-col overflow-hidden"
      style={{
        background:   CREAM,
        border:       "1px solid rgba(26,71,49,0.12)",
        borderRadius: "16px",
        transition:   "border-color 0.28s, box-shadow 0.32s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = accent;
        el.style.boxShadow = `0 10px 36px rgba(26,71,49,0.1), 0 2px 8px rgba(26,71,49,0.06)`;
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(26,71,49,0.12)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ height: "200px", background: IMG_BG, borderRadius: "15px 15px 0 0" }}
      >
        <Image
          src={product.primaryImage}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Category chip */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-md"
            style={{ background: accent, color: "#fff" }}
          >
            {product.category}
          </span>
        </div>

        {/* Sleeved badge */}
        {product.isIndividuallyPacked && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-md"
              style={{ background: "rgba(233,115,22,0.88)", color: "#fff" }}
            >
              Sleeved
            </span>
          </div>
        )}

        {/* Hover overlay — cert tags */}
        <div
          className="absolute inset-0 flex flex-col justify-end px-3 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, rgba(26,71,49,0.82) 0%, transparent 60%)" }}
        >
          <div className="flex flex-wrap gap-1">
            {product.certifications.slice(0, 3).map((cert) => (
              <span
                key={cert}
                className="font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-1 rounded"
                style={{ background: "rgba(245,240,230,0.14)", border: "1px solid rgba(245,240,230,0.3)", color: "rgba(245,240,230,0.9)" }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 px-4 pt-4 pb-4">
        <h3
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    700,
            fontSize:      "0.95rem",
            color:         INK,
            letterSpacing: "-0.02em",
            marginBottom:  "4px",
            lineHeight:    1.2,
          }}
        >
          {product.name}
        </h3>
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] mb-4" style={{ color: MUTED }}>
          {product.length} · {product.material}
        </p>

        {/* Footer row */}
        <div
          className="flex items-center justify-between pt-3 mt-auto border-t"
          style={{ borderColor: "rgba(26,71,49,0.1)" }}
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "rgba(122,107,84,0.6)" }}>
              Min. Order
            </span>
            <p className="font-mono text-[10px] font-bold mt-0.5" style={{ color: INK }}>{product.moq}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <Link
              href={`/contact?category=${encodeURIComponent(product.category)}&sku=${encodeURIComponent(product.name)}#inquiry-form`}
              className="inline-flex items-center justify-center w-[30px] h-[30px] transition-all duration-200 rounded-lg"
              style={{ border: "1px solid rgba(26,71,49,0.14)", color: MUTED }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = GREEN;
                el.style.color = GREEN;
                el.style.background = "rgba(26,71,49,0.07)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(26,71,49,0.14)";
                el.style.color = MUTED;
                el.style.background = "transparent";
              }}
              aria-label={`Request a quote for ${product.name}`}
              title="Request a quote"
            >
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </Link>
            <button
              onClick={() => onOpen(product)}
              className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] px-3 py-2 transition-all duration-200 rounded-lg"
              style={{ border: "1px solid rgba(26,71,49,0.14)", color: MUTED }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = ORANGE;
                el.style.color = ORANGE;
                el.style.background = "rgba(233,115,22,0.07)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(26,71,49,0.14)";
                el.style.color = MUTED;
                el.style.background = "transparent";
              }}
              aria-label={`View details for ${product.name}`}
            >
              View Specs
              <ChevronRight size={9} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Catalog Grid ─────────────────────────────────────────────────────────

interface ProductCatalogGridProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

export default function ProductCatalogGrid({ activeCategory, onCategoryChange }: ProductCatalogGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<BioProduct | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });
  const searchParams = useSearchParams();

  useEffect(() => {
    const slug = searchParams.get("product");
    if (!slug) return;
    const match = getProductBySlug(slug);
    if (match) setSelectedProduct(match);
  }, [searchParams]);

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => (p.category as string) === activeCategory);

  return (
    <>
      <section
        id="catalog"
        style={{ background: CREAM2 }}
        aria-labelledby="catalog-heading"
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16 pt-20 pb-20">

          {/* Header */}
          <div ref={headerRef} className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-7"
            >
              <SectionLabel index="03" label="Product Catalog" />
            </motion.div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <motion.h2
                id="catalog-heading"
                initial={{ opacity: 0, y: 16 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(2rem, 3.5vw, 3.2rem)",
                  lineHeight:    0.92,
                  letterSpacing: "-0.03em",
                  color:         INK,
                }}
              >
                FULL PRODUCT<br />
                <span style={{ color: GREEN }}>RANGE.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.55, ease: EASE, delay: 0.18 }}
                className="font-mono text-[11px] uppercase tracking-[0.22em]"
                style={{ color: MUTED }}
              >
                {filtered.length} SKU{filtered.length !== 1 ? "s" : ""} · FSC® certified birchwood
              </motion.p>
            </div>
          </div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE, delay: 0.22 }}
            className="flex items-center gap-2 flex-wrap mb-8 pb-6 border-b"
            style={{ borderColor: "rgba(26,71,49,0.12)" }}
          >
            {(["All", ...ALL_CATEGORIES] as string[]).map((cat) => {
              const isActive = activeCategory === cat;
              const accent = cat === "All" ? GREEN : CATEGORY_COLORS[cat as ProductCategory];
              return (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] px-3.5 py-2 rounded-lg transition-all duration-200"
                  style={{
                    background: isActive ? accent          : "rgba(26,71,49,0.06)",
                    color:      isActive ? "#ffffff"       : MUTED,
                    border:     `1px solid ${isActive ? accent : "rgba(26,71,49,0.1)"}`,
                  }}
                >
                  {!isActive && (
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                  )}
                  {cat}
                  <span className="font-mono text-[10px]" style={{ opacity: isActive ? 0.7 : 0.5 }}>
                    {CATEGORY_COUNTS[cat] ?? 0}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filtered.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  onOpen={setSelectedProduct}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* OEM CTA bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay: 0.36 }}
            className="mt-14 p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ background: GREEN }}
          >
            <div>
              <p
                style={{
                  fontFamily:   "'Outfit', sans-serif",
                  fontWeight:   700,
                  fontSize:     "1rem",
                  color:        "#F5F0E6",
                  marginBottom: "6px",
                }}
              >
                Need custom sizing, laser engraving, or private label packaging?
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: "rgba(245,240,230,0.5)" }}>
                OEM · Custom dimensions · Kraft paper sleeve · Logo printing · All available
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 flex-shrink-0 rounded-xl"
              style={{ background: ORANGE }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#C4580A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = ORANGE)}
            >
              Request Custom Quote
              <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <ProductDrawer product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
