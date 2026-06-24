"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, ChevronRight, Package, Award } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import {
  PRODUCTS,
  ALL_CATEGORIES,
  type BioProduct,
  type ProductCategory,
} from "@/lib/products-data";

const EASE = [0.16, 1, 0.3, 1] as const;
const IMG_BG = "#EDE6D8";

// Count SKUs per category for filter badges
const CATEGORY_COUNTS: Record<string, number> = { All: PRODUCTS.length };
ALL_CATEGORIES.forEach((cat) => {
  CATEGORY_COUNTS[cat] = PRODUCTS.filter((p) => p.category === cat).length;
});

// ── Product Detail Drawer ─────────────────────────────────────────────────────

function ProductDrawer({ product, onClose }: { product: BioProduct; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  const specs = [
    { label: "Length",       value: product.length },
    { label: "Material",     value: product.material },
    { label: "Finish",       value: product.finish },
    { label: "Pcs / Bag",   value: `${product.pcsPerBag.toLocaleString()} pcs` },
    { label: "Bags / Carton",value: `${product.bagsPerCarton} bags` },
    { label: "Pcs / Carton", value: `${product.pcsPerCarton.toLocaleString()} pcs` },
    { label: "Min. Order",   value: product.moq },
  ];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 z-40"
        style={{ background: "rgba(29,22,16,0.55)" }}
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: EASE }}
        className="fixed right-0 top-0 h-full z-50 overflow-y-auto"
        style={{ width: "min(540px, 100vw)", background: "#FBF8F2", borderLeft: "1px solid #DDD3C5" }}
        aria-label="Product detail"
        role="dialog"
        aria-modal
      >
        {/* Sticky header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b"
          style={{ background: "#FBF8F2", borderColor: "#DDD3C5" }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="font-mono text-[7.5px] uppercase tracking-[0.22em] px-2.5 py-1"
              style={{ background: "rgba(74,122,61,0.1)", border: "1px solid rgba(74,122,61,0.25)", color: "#4A7A3D" }}
            >
              {product.category}
            </span>
            {product.isIndividuallyPacked && (
              <span
                className="font-mono text-[7px] uppercase tracking-[0.18em] px-2 py-1"
                style={{ background: "rgba(200,154,91,0.12)", border: "1px solid rgba(200,154,91,0.35)", color: "#8C6239" }}
              >
                Individually Packed
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-6">
          {/* Product name */}
          <h2
            className="font-display font-light text-ink mb-5 leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            {product.name}
          </h2>

          {/* Hero image */}
          <div
            className="relative mb-3 overflow-hidden"
            style={{ height: "300px", background: IMG_BG }}
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

          {/* Thumbnail strip */}
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
                    border: `1.5px solid ${i === activeImage ? "#C89A5B" : "#DDD3C5"}`,
                  }}
                  aria-label={`Image ${i + 1}`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="60px" />
                </button>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="font-sans text-[13px] font-light text-ink-light leading-relaxed mb-6">
            {product.shortDescription}
          </p>

          {/* Applications */}
          <div className="mb-6">
            <p className="font-mono text-[7.5px] uppercase tracking-[0.26em] text-ink-muted mb-2.5">
              Applications
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="font-mono text-[7.5px] uppercase tracking-[0.12em] px-3 py-1.5"
                  style={{ background: "rgba(74,122,61,0.07)", border: "1px solid rgba(74,122,61,0.2)", color: "#4A7A3D" }}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Package size={11} className="text-ink-muted" />
              <p className="font-mono text-[7.5px] uppercase tracking-[0.26em] text-ink-muted">
                Technical Specifications
              </p>
            </div>
            <table className="w-full border" style={{ borderColor: "#EDE5D8" }}>
              <tbody>
                {specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    style={{ background: i % 2 === 0 ? "rgba(246,241,232,0.55)" : "#FBF8F2", borderBottom: "1px solid #EDE5D8" }}
                  >
                    <td
                      className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-ink-muted py-2.5 px-3"
                      style={{ width: "42%", borderRight: "1px solid #EDE5D8" }}
                    >
                      {spec.label}
                    </td>
                    <td className="font-mono text-[9px] text-ink py-2.5 px-3 font-medium">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Award size={11} className="text-ink-muted" />
              <p className="font-mono text-[7.5px] uppercase tracking-[0.26em] text-ink-muted">
                Certifications
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.certifications.map((cert) => (
                <span
                  key={cert}
                  className="font-mono text-[8px] uppercase tracking-[0.14em] px-3 py-1.5"
                  style={{ background: "#F6F1E8", border: "1px solid #DDD3C5", color: "#6B5D50" }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Dark CTA block */}
          <div
            className="p-5 border"
            style={{ background: "#1D1610", borderColor: "#3D2E22" }}
          >
            <p
              className="font-sans text-[13px] font-light mb-1"
              style={{ color: "rgba(246,241,232,0.85)" }}
            >
              Ready to source {product.name}?
            </p>
            <p
              className="font-mono text-[7.5px] uppercase tracking-[0.18em] mb-4"
              style={{ color: "rgba(200,154,91,0.65)" }}
            >
              MOQ {product.moq} · {product.pcsPerCarton.toLocaleString()} pcs per export carton
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200"
              style={{ background: "#4A7A3D" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#2D5228")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7A3D")}
            >
              Request Export Quote
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 4) * 0.055 }}
      className="group relative flex flex-col bg-surface overflow-hidden"
      style={{
        border: "1px solid #DDD3C5",
        transition: "border-color 0.28s, box-shadow 0.32s, transform 0.32s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(200,154,91,0.5)";
        el.style.boxShadow = "0 10px 36px rgba(44,36,27,0.13), 0 2px 8px rgba(44,36,27,0.06)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#DDD3C5";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Image — full bleed, warm bg fallback */}
      <div className="relative overflow-hidden" style={{ height: "220px", background: IMG_BG }}>
        <Image
          src={product.primaryImage}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Category badge */}
        <div className="absolute top-0 left-0 z-10">
          <span
            className="font-mono text-[7px] uppercase tracking-[0.2em] px-2.5 py-1.5 block"
            style={{ background: "rgba(29,22,16,0.7)", color: "#C89A5B", backdropFilter: "blur(4px)" }}
          >
            {product.category}
          </span>
        </div>

        {/* Individually packed badge */}
        {product.isIndividuallyPacked && (
          <div className="absolute top-0 right-0 z-10">
            <span
              className="font-mono text-[6.5px] uppercase tracking-[0.16em] px-2.5 py-1.5 block"
              style={{ background: "rgba(200,154,91,0.88)", color: "#1D1610" }}
            >
              Sleeved
            </span>
          </div>
        )}

        {/* Hover overlay — cert badges emerge from bottom */}
        <div
          className="absolute inset-0 flex flex-col justify-end px-3 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, rgba(29,22,16,0.82) 0%, rgba(29,22,16,0.15) 55%, transparent 100%)" }}
        >
          <div className="flex flex-wrap gap-1">
            {product.certifications.slice(0, 3).map((cert) => (
              <span
                key={cert}
                className="font-mono text-[6.5px] uppercase tracking-[0.12em] px-2 py-1"
                style={{ background: "rgba(200,154,91,0.18)", border: "1px solid rgba(200,154,91,0.45)", color: "#E5C99A" }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 px-4 pt-4 pb-4">
        <h3 className="font-sans text-[13px] font-semibold text-ink mb-1 leading-snug">
          {product.name}
        </h3>
        <p className="font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.12em] mb-4">
          {product.length} · {product.material}
        </p>

        {/* MOQ row */}
        <div
          className="flex items-center justify-between pt-3 mt-auto border-t"
          style={{ borderColor: "#EDE5D8" }}
        >
          <div>
            <span className="font-mono text-[7px] text-ink-muted uppercase tracking-[0.14em]">
              Min. Order
            </span>
            <p className="font-mono text-[9px] font-bold text-ink mt-0.5">{product.moq}</p>
          </div>
          <button
            onClick={() => onOpen(product)}
            className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.14em] px-3 py-2 transition-all duration-200"
            style={{ border: "1px solid #DDD3C5", color: "#6B5D50" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#C89A5B";
              el.style.color = "#8C6239";
              el.style.background = "rgba(200,154,91,0.07)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#DDD3C5";
              el.style.color = "#6B5D50";
              el.style.background = "transparent";
            }}
            aria-label={`View details for ${product.name}`}
          >
            View Specs
            <ChevronRight size={9} strokeWidth={2.5} />
          </button>
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

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => (p.category as string) === activeCategory);

  return (
    <>
      {/* White (card surface) bg — distinct from parchment families section above */}
      <section
        id="catalog"
        style={{ background: "#FBF8F2" }}
        aria-labelledby="catalog-heading"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">

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
                className="font-display font-light text-ink leading-[0.95]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Full Product Range
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.55, ease: EASE, delay: 0.18 }}
                className="font-mono text-[7.5px] uppercase tracking-[0.22em] text-ink-muted"
              >
                {filtered.length} SKU{filtered.length !== 1 ? "s" : ""} · FSC® certified birchwood
              </motion.p>
            </div>
          </div>

          {/* Category filter tabs with counts */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE, delay: 0.22 }}
            className="flex items-center gap-1.5 flex-wrap mb-8 pb-5 border-b"
            style={{ borderColor: "#DDD3C5" }}
          >
            {(["All", ...ALL_CATEGORIES] as string[]).map((cat) => {
              const isActive = activeCategory === cat;
              const count = CATEGORY_COUNTS[cat] ?? 0;
              return (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className="font-mono text-[8px] uppercase tracking-[0.16em] px-3.5 py-2 transition-all duration-200"
                  style={{
                    background: isActive ? "#4A7A3D" : "transparent",
                    color: isActive ? "#ffffff" : "#6B5D50",
                    border: `1px solid ${isActive ? "#4A7A3D" : "#DDD3C5"}`,
                  }}
                >
                  {cat}
                  <span
                    className="ml-1.5 font-mono text-[7px]"
                    style={{ opacity: isActive ? 0.7 : 0.5 }}
                  >
                    {count}
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

          {/* Custom / OEM bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay: 0.36 }}
            className="mt-14 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border"
            style={{ background: "#F6F1E8", borderColor: "#DDD3C5" }}
          >
            <div>
              <p className="font-sans font-semibold text-ink text-sm mb-1">
                Need custom sizing, laser engraving, or private label packaging?
              </p>
              <p className="font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.16em]">
                OEM · Custom dimensions · Kraft paper sleeve · Logo printing · All available
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 flex-shrink-0"
              style={{ background: "#1D1610" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7A3D")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#1D1610")}
            >
              Request Custom Quote
              <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product detail drawer */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDrawer product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
