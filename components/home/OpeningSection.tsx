"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Leaf, ShieldCheck, Globe } from "lucide-react";
import { COMPANY_FACTS, getCumulativeUnitsProduced, formatUnitsShort } from "@/lib/company-facts";
import { PRODUCTS } from "@/lib/products-data";

const E = [0.16, 1, 0.3, 1] as const;

const FEATURED_IDS = ["fork-160", "spoon-160", "knife-165"] as const;
const FEATURED = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!).filter(Boolean);

const TRUST_BADGES = [
  { Icon: Leaf,        label: "FSC® Certified",   sub: "100% Sustainable Wood"    },
  { Icon: ShieldCheck, label: "ISO 9001:2015",     sub: "Quality Management"       },
  { Icon: ShieldCheck, label: "BRCGS Certified",   sub: "Food Safety Standard"     },
  { Icon: Globe,       label: "18+ Countries",     sub: "Global Export Network"    },
];

export default function OpeningSection() {
  const cumulativeUnits = getCumulativeUnitsProduced();

  const STATS = [
    { value: formatUnitsShort(cumulativeUnits), label: "Units Produced",  sup: false },
    { value: `${COMPANY_FACTS.exportMarkets}+`,  label: "Countries Served", sup: false },
    { value: `${COMPANY_FACTS.womenPercent}%`,   label: "Women-led",       sup: false },
  ];

  return (
    <section
      className="w-full"
      style={{ background: "#F5F0E6", paddingTop: "72px" }}
      aria-labelledby="hero-heading"
    >
      {/* ── MAIN HERO ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 xl:gap-16 items-center py-14 lg:py-20">

          {/* LEFT — headline + CTAs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: E }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ background: "#1A4731", color: "#F5F0E6" }}
            >
              <Leaf size={11} />
              FSC-Certified Manufacturer · Est. {COMPANY_FACTS.founded} · Mumbai, India
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.72, ease: E }}
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2.8rem, 6vw, 6.5rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.03em",
                color:         "#1A1208",
                marginBottom:  "1.4rem",
              }}
            >
              INDIA&apos;S<br />
              <span style={{ color: "#1A4731" }}>ECO</span><br />
              CUTLERY.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.65, ease: E }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize:   "clamp(0.95rem, 1.2vw, 1.1rem)",
                lineHeight: 1.75,
                color:      "#5A4D3A",
                maxWidth:   "520px",
                marginBottom: "2rem",
              }}
            >
              FSC-certified birchwood cutlery manufactured at scale in Mumbai —
              supplying airlines, hotels, QSR chains and B2B distributors across
              {COMPANY_FACTS.exportMarkets}+ export markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.6, ease: E }}
              className="flex items-center gap-3 flex-wrap"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] transition-all duration-200"
                style={{ background: "#E97316", color: "#FFFFFF", borderRadius: "8px" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C4580A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#E97316"; }}
              >
                Shop Products
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-all duration-200"
                style={{ border: "2px solid #1A4731", color: "#1A4731", borderRadius: "8px", background: "transparent" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#1A4731";
                  el.style.color = "#F5F0E6";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.color = "#1A4731";
                }}
              >
                Get a Quote
                <ArrowUpRight size={14} strokeWidth={2} />
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex items-center gap-8 mt-10 pt-8 flex-wrap"
              style={{ borderTop: "1px solid rgba(26,71,49,0.15)" }}
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.5, ease: E }}
                >
                  <div
                    suppressHydrationWarning={i === 0}
                    className="font-black leading-none mb-1"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize:   "clamp(1.6rem, 2.4vw, 2.4rem)",
                      color:      "#1A4731",
                      fontVariantNumeric: "lining-nums tabular-nums",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: "#7A6B54" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — product cards on warm wood surface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.75, ease: E }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div
              className="relative overflow-hidden"
              style={{
                background:    "#EDE5D4",
                borderRadius:  "24px",
                padding:       "32px",
                border:        "1px solid rgba(26,71,49,0.1)",
              }}
            >
              {/* Decorative leaf watermark */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "-20px", right: "-20px",
                  width: "180px", height: "180px",
                  background: "radial-gradient(circle, rgba(26,71,49,0.07) 0%, transparent 70%)",
                  borderRadius: "50%",
                }}
                aria-hidden="true"
              />

              <div className="text-[11px] font-bold uppercase tracking-[0.22em] mb-5" style={{ color: "#7A6B54" }}>
                Featured Products
              </div>

              <div className="flex flex-col gap-3">
                {FEATURED.map((product, i) => (
                  <Link key={product.id} href={`/products/${product.slug}`} className="block">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.55, ease: E }}
                      className="flex items-center gap-4 p-4 group cursor-pointer transition-all duration-200"
                      style={{
                        background:   "#FDFAF4",
                        border:       "1px solid rgba(26,71,49,0.1)",
                        borderRadius: "14px",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "#E97316";
                        el.style.boxShadow = "0 4px 20px rgba(233,115,22,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "rgba(26,71,49,0.1)";
                        el.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="relative flex-shrink-0 overflow-hidden"
                        style={{ width: 72, height: 72, background: "#F5F0E6", borderRadius: "10px" }}
                      >
                        <Image
                          src={product.primaryImage}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="72px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className="text-[14px] font-semibold truncate mb-0.5"
                          style={{ fontFamily: "'Outfit', sans-serif", color: "#1A1208" }}
                        >
                          {product.name}
                        </div>
                        <div
                          className="text-[11px] uppercase tracking-[0.1em] truncate mb-1"
                          style={{ color: "#7A6B54" }}
                        >
                          {product.length} · {product.finish}
                        </div>
                        <div
                          className="text-[11px] font-bold uppercase tracking-[0.12em]"
                          style={{ color: "#1A4731" }}
                        >
                          MOQ {product.moq}
                        </div>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ color: "#E97316" }}
                      />
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* CTA inside card */}
              <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(26,71,49,0.1)" }}>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] transition-opacity hover:opacity-70"
                  style={{ color: "#1A4731" }}
                >
                  View All Products
                  <ArrowUpRight size={12} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            {/* Floating cert badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, ease: E }}
              className="absolute -bottom-5 -left-5 px-4 py-3 shadow-lg"
              style={{
                background:   "#1A4731",
                borderRadius: "12px",
                border:       "2px solid #F5F0E6",
              }}
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] mb-0.5" style={{ color: "rgba(245,240,230,0.6)" }}>Certified</div>
              <div className="flex gap-2 flex-wrap">
                {["FSC®", "ISO", "BRCGS"].map((c) => (
                  <span key={c} className="text-[11px] font-black" style={{ color: "#F5F0E6" }}>{c}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── TRUST BADGES STRIP ── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(26,71,49,0.12)", background: "#EDE5D4" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x" style={{ borderColor: "rgba(26,71,49,0.1)" }}>
            {TRUST_BADGES.map(({ Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: E }}
                className="flex items-center gap-3 px-6 py-5"
                style={{ borderColor: "rgba(26,71,49,0.1)" }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full"
                  style={{ background: "rgba(26,71,49,0.1)" }}
                >
                  <Icon size={15} style={{ color: "#1A4731" }} />
                </div>
                <div>
                  <div className="text-[12px] font-bold" style={{ color: "#1A1208" }}>{label}</div>
                  <div className="text-[10px] uppercase tracking-[0.1em]" style={{ color: "#7A6B54" }}>{sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
