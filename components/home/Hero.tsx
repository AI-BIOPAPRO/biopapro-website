"use client";

import { Fragment } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Leaf } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

/* ─────────────────────────────────────────────────────────────────────────────
   CONSTANTS
   ───────────────────────────────────────────────────────────────────────────── */

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Three-stage supply chain breadcrumb.
 * Communicates: source → process → reach in one horizontal line.
 */
const JOURNEY = [
  { index: "01", label: "Siberian Birch",  sub: "FSC Certified Forests" },
  { index: "02", label: "Precision Mfr.",  sub: "18 Production Lines"   },
  { index: "03", label: "Global Export",   sub: "18+ Countries"         },
] as const;

/**
 * Headline — 3 short lines.
 * Priority: Product type → Material → Scale marker (green accent)
 *
 * "Birchwood" gets the green accent: it names the material AND the
 * sustainability story in a single word, without saying "eco" or "green".
 */
const HEADLINE = [
  { text: "Precision-Crafted", accent: false },
  { text: "Birchwood",         accent: true  }, // Green — material = sustainability
  { text: "Tableware.",        accent: false },
] as const;

/**
 * Product strip — 6 categories.
 * ─────────────────────────────────────────────────────────────────────────
 * PHOTOGRAPHY SPEC (replace placeholder with real images):
 * · Surface: clean white or very light sage linen
 * · Lighting: soft natural window light from left, 5500K
 * · Composition: single product, centred, slight 3/4 angle
 * · Colour space: sRGB · Format: WebP · Size: 600×800px · Max: 120KB
 * · Name: /public/images/products/{id}.webp
 * ─────────────────────────────────────────────────────────────────────────
 */
const PRODUCTS = [
  { id: "fork",     name: "Birchwood Fork",   category: "CUTLERY", moq: "100K MOQ", spec: "140–180mm" },
  { id: "spoon",    name: "Birchwood Spoon",  category: "CUTLERY", moq: "100K MOQ", spec: "110–160mm" },
  { id: "knife",    name: "Birchwood Knife",  category: "CUTLERY", moq: "100K MOQ", spec: "165–185mm" },
  { id: "stirrer",  name: "Coffee Stirrer",   category: "CAFÉ",    moq: "500K MOQ", spec: "110–190mm" },
  { id: "icestick", name: "Ice Cream Stick",  category: "DAIRY",   moq: "1M MOQ",   spec: "75–114mm"  },
  { id: "skewer",   name: "Polished Skewer",  category: "GRILL",   moq: "250K MOQ", spec: "150–300mm" },
] as const;

const STATS = [
  { value: "100M+",   label: "Units Produced",   sub: "Annually"       },
  { value: "18+",     label: "Countries Served",  sub: "Active markets" },
  { value: "6,500kg", label: "Plastic Replaced",  sub: "Every day"      },
  { value: "FSC®",    label: "100% Certified",    sub: "Since 2018"     },
] as const;

function wordStart(li: number) {
  return HEADLINE.slice(0, li).reduce((a, l) => a + l.text.split(" ").length, 0);
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section className="relative bg-bg overflow-hidden paper">

      {/* ════════════════════════════════════════════════════════════════════
          MAIN SPLIT: text left · photography right
          ════════════════════════════════════════════════════════════════ */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* ── LEFT: Text content ─────────────────────────────────────────── */}
        <div className="flex flex-col flex-[1.38] px-6 md:px-12 lg:px-20 pt-36 md:pt-44 pb-10 lg:pb-0">

          {/* Label row */}
          <div className="flex items-center justify-between mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55, ease: EASE }}
            >
              <SectionLabel index="EST. 2018" label="BIRCHWOOD MANUFACTURER" />
            </motion.div>

            {/* Certification marks — desktop only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="hidden md:flex items-center gap-5"
            >
              {["FSC®", "ISO 9001", "FDA CFR 21", "BPI"].map((cert) => (
                <span key={cert} className="font-mono text-[9px] text-ink-muted tracking-[0.2em] uppercase">
                  {cert}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Journey breadcrumb: Forest → Factory → World */}
          <div className="mb-11 md:mb-14">
            <div className="flex items-start">
              {JOURNEY.map((step, i) => (
                <Fragment key={step.index}>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.12, duration: 0.5, ease: EASE }}
                    className="flex flex-col gap-1.5 flex-shrink-0"
                  >
                    <div className="flex items-center gap-2 h-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0" />
                      <span className="font-mono text-[7.5px] text-green/60 tracking-[0.3em] uppercase">
                        {step.index}
                      </span>
                    </div>
                    <span className="font-mono text-[9.5px] text-ink-light uppercase tracking-[0.12em] leading-snug whitespace-nowrap">
                      {step.label}
                    </span>
                    <span className="font-mono text-[8.5px] text-ink-muted uppercase tracking-[0.1em] whitespace-nowrap">
                      {step.sub}
                    </span>
                  </motion.div>

                  {i < JOURNEY.length - 1 && (
                    <div className="flex items-start pt-[4px] mx-5 md:mx-8 flex-1 max-w-[100px] min-w-[16px]">
                      <motion.div
                        className="w-full h-px bg-border"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        style={{ originX: 0 }}
                        transition={{ delay: 0.37 + i * 0.12, duration: 0.4, ease: EASE }}
                      />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          {/* Headline
              Line 1: dark ink    — "Precision-Crafted"
              Line 2: primary green — "Birchwood" (material + sustainability)
              Line 3: dark ink    — "Tableware."
          */}
          <div className="mb-7 md:mb-8">
            <h1
              className="font-display font-light leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3rem, 6.5vw, 5.8rem)" }}
            >
              {HEADLINE.map((line, li) => {
                const words = line.text.split(" ");
                const start = wordStart(li);
                return (
                  <span key={li} className="block">
                    {words.map((word, wi) => (
                      <motion.span
                        key={`${li}-${wi}`}
                        initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
                        transition={{
                          delay: 0.45 + (start + wi) * 0.09,
                          duration: 0.82,
                          ease: EASE,
                        }}
                        className={`inline-block mr-[0.18em] ${
                          line.accent ? "text-green" : "text-ink"
                        }`}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                );
              })}
            </h1>
          </div>

          {/* Subtitle
              Order: product → manufacturing scale → sustainability.
              "replacing plastic" is third, not first.
          */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.78, ease: EASE }}
            className="font-sans font-light text-ink-light text-base md:text-[1.05rem] max-w-[460px] leading-relaxed mb-9"
          >
            FSC-certified birchwood cutlery, precision-manufactured
            and exported to 18+&nbsp;countries. Replacing
            6,500&thinsp;kg of plastic every single day.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.22, duration: 0.72, ease: EASE }}
            className="flex flex-col sm:flex-row items-start gap-3"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-green text-white text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-green-deep transition-colors duration-300"
            >
              View All Products
              <ArrowRight
                size={13}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-border text-ink-light text-[11px] font-medium uppercase tracking-[0.14em] hover:border-green hover:text-green-deep transition-all duration-300"
            >
              Request Export Quote
              <ArrowUpRight
                size={13}
                strokeWidth={2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* Spacer */}
          <div className="flex-1 min-h-8" />

          {/* Desktop stats bar — sits at the bottom of the left column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="hidden lg:grid grid-cols-4 border-t border-border"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.45 + i * 0.07, duration: 0.55, ease: EASE }}
                className="pt-5 pr-5 border-r border-border last:border-r-0 pb-8"
              >
                <div
                  className="font-display font-light text-green-deep"
                  style={{ fontSize: "clamp(1.35rem, 2.1vw, 1.8rem)", lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div className="font-mono text-[8.5px] text-ink-light uppercase tracking-[0.15em] mt-1.5">
                  {stat.label}
                </div>
                <div className="font-mono text-[8px] text-ink-muted uppercase tracking-[0.1em]">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>{/* /Left */}

        {/* ── RIGHT: Product photography panel ───────────────────────────
            This is the first visual the eye lands on.
            Fresh sage-green — communicates nature, not wood furniture.

            ════════════════════════════════════════════════════════════
            REPLACE INSTRUCTIONS:
            When product photography is ready:

            1. Replace the gradient div with Next.js <Image>:
               <Image
                 src="/images/hero-product-collection.webp"
                 alt="FSC-certified birchwood cutlery on natural surface"
                 fill priority
                 className="object-cover object-center"
               />

            2. Recommended shot:
               · Multiple wooden products on a clean white or sage linen surface
               · Soft natural window light, 5500K
               · Slight aerial angle, calm composition
               · Do NOT use dark dramatic lighting — keep it bright and clean

            3. File: /public/images/hero-product-collection.webp
               Size: 1200×1600px · Format: WebP · Max: 350KB
            ════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1.0 }}
          className="relative flex-1 min-h-[55vw] lg:min-h-0 overflow-hidden"
        >
          {/* Sage-green gradient background — fresh, natural, modern */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, #D4E8C5 0%, #B8D49A 30%, #92BC6E 58%, #72A04E 80%, #5B8C51 100%)",
            }}
          />

          {/* Very subtle texture overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: [
                `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E`,
                `%3Cfilter id='t'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' seed='8'/%3E%3C/filter%3E`,
                `%3Crect width='100%25' height='100%25' filter='url(%23t)'/%3E%3C/svg%3E")`,
              ].join(""),
              opacity: 0.06,
              mixBlendMode: "multiply",
            }}
            aria-hidden="true"
          />

          {/* Vignette — soft edge darkening */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 55% 45%, rgba(180,215,150,0.12) 0%, rgba(30,50,25,0.3) 85%)",
            }}
            aria-hidden="true"
          />

          {/* Photo placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div
              className="w-full max-w-[320px] flex flex-col items-center gap-4 py-10 px-6 text-center"
              style={{
                border: "1px dashed rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(2px)",
              }}
            >
              <Leaf size={22} style={{ color: "rgba(255,255,255,0.5)" }} />
              <span
                className="font-display font-light text-2xl leading-tight"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Birchwood Cutlery
                <br />Collection
              </span>
              <span
                className="font-mono text-[7px] tracking-[0.22em] uppercase leading-relaxed"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                Fork · Spoon · Knife · Stirrer
                <br />Replace with product photography
                <br />/images/hero-product-collection.webp
              </span>
            </div>
          </div>

          {/* Left edge: smooth blend into bg on large screens */}
          <div
            className="absolute inset-y-0 left-0 w-12 hidden lg:block pointer-events-none"
            style={{
              background: "linear-gradient(to right, #F8FAF5 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Floating certification badges — top right */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y:  0 }}
            transition={{ delay: 0.85, duration: 0.6, ease: EASE }}
            className="absolute top-6 right-6 flex flex-col gap-2 items-end"
          >
            {["FSC® 100%", "ISO 9001", "FDA CFR 21"].map((cert) => (
              <span
                key={cert}
                className="font-mono text-[8px] tracking-[0.18em] uppercase px-3 py-1.5"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.80)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.22)",
                }}
              >
                {cert}
              </span>
            ))}
          </motion.div>

          {/* Bottom: scale signal */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
            className="absolute bottom-6 left-6 right-6"
          >
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
              <span
                className="font-mono text-[8.5px] tracking-[0.2em] uppercase"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Exporting to 18+ countries · 100M+ units annually
              </span>
            </div>
          </motion.div>

        </motion.div>{/* /Right */}

      </div>{/* /Split */}

      {/* ════════════════════════════════════════════════════════════════════
          PRODUCT CATEGORY STRIP
          White cards on surface-alt background.
          Communicates: "here are the 6 product categories we make."
          ════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y:  0 }}
        transition={{ delay: 1.45, duration: 0.8, ease: EASE }}
        className="bg-surface-alt border-t border-border"
      >
        {/* Strip header */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-5 pb-4 flex items-center justify-between">
          <span className="font-mono text-[8.5px] text-ink-muted tracking-[0.28em] uppercase">
            Product Range — 6 Categories
          </span>
          <Link
            href="/products"
            className="font-mono text-[8.5px] text-green tracking-[0.18em] uppercase hover:text-green-deep transition-colors duration-200"
          >
            Full Catalog →
          </Link>
        </div>

        <div className="overflow-x-auto scrollbar-none">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-6">
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${PRODUCTS.length}, minmax(148px, 1fr))`,
                minWidth: "min-content",
              }}
            >
              {PRODUCTS.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y:  0 }}
                  transition={{ delay: 1.5 + i * 0.055, duration: 0.52, ease: EASE }}
                  className="group relative flex flex-col bg-surface border border-border hover:border-green/40 hover:shadow-sm transition-all duration-300 overflow-hidden cursor-pointer"
                  style={{ minHeight: "196px" }}
                >
                  {/* Green top-edge reveal */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-green origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  {/* Category + B2B */}
                  <div className="px-3.5 pt-3.5 pb-2 flex items-center justify-between">
                    <span className="font-mono text-[7.5px] text-green tracking-[0.28em] uppercase">
                      {product.category}
                    </span>
                    <span className="font-mono text-[7px] text-ink-muted tracking-wider uppercase">
                      B2B
                    </span>
                  </div>

                  {/* Photo placeholder
                      ───────────────────────────────────────────────
                      Replace with Next.js <Image> when photos ready.
                      See photography spec at top of this file.
                      ─────────────────────────────────────────────── */}
                  <div
                    className="flex-1 mx-3 flex flex-col items-center justify-center gap-1.5 transition-colors duration-300"
                    style={{
                      background: "linear-gradient(160deg, #F2F7EE 0%, #E8F0E2 100%)",
                      border: "1px dashed rgba(91,140,81,0.15)",
                      minHeight: "105px",
                    }}
                  >
                    <span className="font-mono text-[7px] text-green/35 tracking-[0.22em] uppercase text-center leading-loose">
                      Photo
                      <br />Placeholder
                    </span>
                  </div>

                  {/* Product info */}
                  <div className="px-3.5 py-3.5">
                    <p className="font-sans text-[11.5px] font-semibold text-ink mb-0.5 group-hover:text-green-deep transition-colors duration-300 leading-snug">
                      {product.name}
                    </p>
                    <p className="font-mono text-[7.5px] text-ink-muted tracking-[0.1em] uppercase">
                      {product.moq}
                    </p>
                    <p className="font-mono text-[7px] text-ink-muted/70 tracking-[0.08em] mt-0.5">
                      {product.spec}
                    </p>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.65, duration: 0.7 }}
        className="lg:hidden bg-bg border-t border-border"
      >
        <div className="grid grid-cols-2">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="py-6 px-6 border-r border-b border-border last:border-r-0 [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0"
            >
              <div
                className="font-display font-light text-green-deep"
                style={{ fontSize: "clamp(1.4rem, 6vw, 1.8rem)", lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div className="font-mono text-[9px] text-ink-light uppercase tracking-[0.15em] mt-1.5">
                {stat.label}
              </div>
              <div className="font-mono text-[8.5px] text-ink-muted uppercase tracking-[0.1em]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
