"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Leaf } from "lucide-react";
import { COMPANY_FACTS, getCumulativeUnitsProduced, formatUnitsShort } from "@/lib/company-facts";
import { useSplash } from "@/context/SplashContext";

const E = [0.16, 1, 0.3, 1] as const;

const HERO_CARDS = [
  {
    src:  "https://biopapro.com/cdn/shop/collections/C3_3.png",
    alt:  "Wooden fork and knife set in a chocolate tart — premium cutlery in action",
    tag:  "Best Seller",
    name: "Wooden Cutlery",
    sub:  "Fork · Knife · Spoon",
    href: "/products",
  },
  {
    src:  "https://biopapro.com/cdn/shop/collections/C2_2.png",
    alt:  "Three birchwood forks — export-grade finish",
    tag:  "Export Grade",
    name: "Wooden Fork 160mm",
    sub:  "MOQ 500 pcs",
    href: "/products?product=woodenfork160mm#catalog",
  },
  {
    src:  "https://biopapro.com/cdn/shop/collections/C4_4.png",
    alt:  "Wooden fork with fresh kiwi — eco-friendly cutlery",
    tag:  "FSC® Certified",
    name: "Eco Spork 160mm",
    sub:  "160mm · Birchwood",
    href: "/products?product=woodenspork160mm#catalog",
  },
] as const;

const STATS = [
  { value: "100M+", label: "Units / Month"  },
  { value: "18+",   label: "Export Markets" },
  { value: "72%",   label: "Women-led"      },
];

export default function OpeningSection() {
  const { done } = useSplash();
  const cumulativeUnits = getCumulativeUnitsProduced();
  const statsWithLive = [
    { value: formatUnitsShort(cumulativeUnits), label: "Units Produced",  live: true  },
    { value: `${COMPANY_FACTS.exportMarkets}+`, label: "Countries Served", live: false },
    { value: `${COMPANY_FACTS.womenPercent}%`,  label: "Women-led",        live: false },
  ];

  const MARQUEE_ITEMS = [
    "FSC® Certified",
    "100M+ Units / Month",
    "18+ Export Markets",
    "BRCGS Food Safety",
    "ISO 9001:2015",
    "Made in India",
    "Est. 2019",
    "Birchwood Cutlery",
    "72% Women-led",
  ];

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ background: "#F5F0E6", paddingTop: "80px" }}
      aria-labelledby="hero-heading"
    >
      {/* Marquee strip */}
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0) }
          to   { transform: translateX(-50%) }
        }
      `}</style>
      <div style={{
        background:  "#1A4731",
        overflow:    "hidden",
        whiteSpace:  "nowrap",
        borderBottom:"1px solid rgba(245,240,230,0.08)",
      }}>
        <div style={{
          display:   "inline-flex",
          animation: "marquee-scroll 28s linear infinite",
        }}>
          {[0, 1].map((copy) => (
            <div key={copy} style={{ display: "inline-flex", alignItems: "center" }}>
              {MARQUEE_ITEMS.map((item) => (
                <span key={item} style={{
                  display:       "inline-flex",
                  alignItems:    "center",
                  gap:           "12px",
                  padding:       "10px 28px",
                  fontFamily:    "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize:      "10px",
                  fontWeight:    700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase" as const,
                  color:         "#F5F0E6",
                }}>
                  <span style={{ color: "#E97316", fontSize: "14px" }}>·</span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Ghost BIOPAPRO watermark — visible immediately so it appears as the splash fades */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-start pointer-events-none select-none overflow-hidden"
        style={{ paddingLeft: "4vw", top: "42px" }}
      >
        <span style={{
          fontFamily:    "'Outfit', sans-serif",
          fontWeight:    900,
          fontSize:      "clamp(5rem, 18vw, 20rem)",
          lineHeight:    1,
          color:         "rgba(26,71,49,0.08)",
          letterSpacing: "-0.05em",
          whiteSpace:    "nowrap",
          textTransform: "lowercase" as const,
        }}>
          biopapro
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 xl:gap-20 items-center py-10 lg:py-14">

          {/* LEFT */}
          <div>
            {/* Eyebrow — waits for splash */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: E, delay: 0.0 }}
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ background: "#1A4731", color: "#F5F0E6" }}
            >
              <Leaf size={11} />
              FSC-Certified · Est. {COMPANY_FACTS.founded} · Mumbai, India
            </motion.div>

            {/* Brand masthead */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={done ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ delay: 0.08, duration: 0.55, ease: E }}
              className="font-mono text-[11px] uppercase tracking-[0.42em] mb-3"
              style={{ color: "#E97316" }}
            >
              Biopapro
            </motion.div>

            {/* Main headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 28 }}
              animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ delay: 0.14, duration: 0.72, ease: E }}
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(3rem, 7vw, 7.5rem)",
                lineHeight:    0.88,
                letterSpacing: "-0.035em",
                color:         "#1A1208",
                marginBottom:  "1.5rem",
              }}
            >
              INDIA&apos;S<br />
              <span style={{ color: "#1A4731" }}>ECO</span><br />
              CUTLERY.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ delay: 0.28, duration: 0.65, ease: E }}
              style={{
                fontFamily:   "'Outfit', sans-serif",
                fontSize:     "clamp(0.95rem, 1.2vw, 1.1rem)",
                lineHeight:   1.75,
                color:        "#5A4D3A",
                maxWidth:     "520px",
                marginBottom: "2rem",
              }}
            >
              FSC-certified birchwood cutlery manufactured at scale in Mumbai —
              supplying airlines, hotels, QSR chains and B2B distributors across{" "}
              {COMPANY_FACTS.exportMarkets}+ export markets.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
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
              animate={done ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.62, duration: 0.6 }}
              className="flex items-center gap-8 mt-10 pt-8 flex-wrap"
              style={{ borderTop: "1px solid rgba(26,71,49,0.15)" }}
            >
              {statsWithLive.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ delay: 0.68 + i * 0.08, duration: 0.5, ease: E }}
                >
                  <div
                    suppressHydrationWarning={stat.live}
                    className="font-black leading-none mb-1"
                    style={{
                      fontFamily:         "'Outfit', sans-serif",
                      fontSize:           "clamp(1.6rem, 2.4vw, 2.4rem)",
                      color:              "#1A4731",
                      fontVariantNumeric: "lining-nums tabular-nums",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#7A6B54" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — bento product cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={done ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ delay: 0.18, duration: 0.75, ease: E }}
            className="relative hidden lg:block"
          >
            {/* Bento grid: tall left + 2 stacked right */}
            <div className="grid grid-cols-[1.15fr_1fr] gap-3" style={{ height: "460px" }}>

              {/* Card 1 — tall left, lifestyle hero shot */}
              <Link
                href={HERO_CARDS[0].href}
                className="group relative overflow-hidden"
                style={{ borderRadius: "20px", background: "#F5C842" }}
              >
                <Image
                  src={HERO_CARDS[0].src}
                  alt={HERO_CARDS[0].alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  quality={95}
                  unoptimized
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(26,18,8,0.88) 0%, rgba(26,18,8,0.1) 45%, transparent 65%)" }}
                />
                <span
                  className="absolute top-4 left-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] px-2.5 py-1"
                  style={{ background: "rgba(233,115,22,0.95)", color: "#fff", borderRadius: "4px" }}
                >
                  {HERO_CARDS[0].tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p style={{
                    fontFamily:    "'Outfit', sans-serif",
                    fontWeight:    800,
                    fontSize:      "1.1rem",
                    letterSpacing: "-0.025em",
                    color:         "#F5F0E6",
                    lineHeight:    1.1,
                    marginBottom:  "4px",
                  }}>
                    {HERO_CARDS[0].name}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "rgba(245,240,230,0.55)" }}>
                    {HERO_CARDS[0].sub}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "#E97316" }}>
                  <ArrowUpRight size={13} color="#fff" strokeWidth={2.5} />
                </div>
              </Link>

              {/* Right column — 2 stacked cards */}
              <div className="flex flex-col gap-3" style={{ height: "460px" }}>
                {HERO_CARDS.slice(1).map((card) => (
                  <Link
                    key={card.name}
                    href={card.href}
                    className="group relative overflow-hidden"
                    style={{ borderRadius: "16px", background: "#F5C842", flex: "1 1 0", minHeight: 0 }}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 20vw"
                      quality={95}
                      unoptimized
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.05) 50%, transparent 70%)" }}
                    />
                    <span
                      className="absolute top-3 left-3 font-mono text-[9px] font-bold uppercase tracking-[0.16em] px-2 py-1"
                      style={{ background: "rgba(26,71,49,0.90)", color: "#F5F0E6", borderRadius: "3px" }}
                    >
                      {card.tag}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p style={{
                        fontFamily:    "'Outfit', sans-serif",
                        fontWeight:    700,
                        fontSize:      "0.9rem",
                        letterSpacing: "-0.02em",
                        color:         "#F5F0E6",
                        lineHeight:    1.1,
                        marginBottom:  "2px",
                      }}>
                        {card.name}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "rgba(245,240,230,0.5)" }}>
                        {card.sub}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "#E97316" }}>
                      <ArrowUpRight size={11} color="#fff" strokeWidth={2.5} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Stats strip below bento */}
            <div
              className="flex items-center justify-between mt-4 px-5 py-3.5"
              style={{ background: "#1A4731", borderRadius: "14px" }}
            >
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div style={{
                    fontFamily:    "'Outfit', sans-serif",
                    fontWeight:    900,
                    fontSize:      "1.2rem",
                    letterSpacing: "-0.03em",
                    color:         "#F5F0E6",
                    lineHeight:    1,
                  }}>
                    {s.value}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.16em] mt-0.5" style={{ color: "rgba(245,240,230,0.5)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating cert badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={done ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.82, duration: 0.5, ease: E }}
              className="absolute -top-4 -right-4 px-4 py-3 shadow-lg"
              style={{ background: "#E97316", borderRadius: "12px", border: "2px solid #F5F0E6" }}
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.18em] mb-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>Certified</div>
              <div className="flex gap-2">
                {["FSC®", "ISO", "BRCGS"].map((c) => (
                  <span key={c} className="text-[11px] font-black" style={{ color: "#fff" }}>{c}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t" style={{ borderColor: "rgba(26,71,49,0.12)", background: "#EDE5D4" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x" style={{ borderColor: "rgba(26,71,49,0.1)" }}>
            {[
              { label: "FSC® Certified",  sub: "100% Sustainable Wood" },
              { label: "ISO 9001:2015",   sub: "Quality Management"    },
              { label: "BRCGS Certified", sub: "Food Safety Standard"  },
              { label: "18+ Countries",   sub: "Global Export Network" },
            ].map(({ label, sub }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-5" style={{ borderColor: "rgba(26,71,49,0.1)" }}>
                <div>
                  <div className="text-[12px] font-bold" style={{ color: "#1A1208" }}>{label}</div>
                  <div className="text-[10px] uppercase tracking-[0.1em]" style={{ color: "#7A6B54" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
