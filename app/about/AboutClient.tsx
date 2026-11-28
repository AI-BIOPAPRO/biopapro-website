"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Leaf, Users, Globe, Factory } from "lucide-react";
import { COMPANY_FACTS } from "@/lib/company-facts";

const E = [0.16, 1, 0.3, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65, ease: E }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const STATS = [
  { value: "2019", label: "Year Founded", icon: Factory },
  { value: `${COMPANY_FACTS.employees}+`, label: "Employees", icon: Users },
  { value: `${COMPANY_FACTS.womenPercent}%+`, label: "Women Workforce", icon: Users },
  { value: `${COMPANY_FACTS.exportMarkets}+`, label: "Export Markets", icon: Globe },
];

const PILLARS = [
  {
    num: "01",
    title: "Who We Are",
    body: "We are a young and multicultural team motivated to make a significant environmental change for a cleaner, ecologically-sound world. Backed by 380+ employees — over 70% of them women — we provide high production capacities and excellent final product quality.",
  },
  {
    num: "02",
    title: "What We Make",
    body: "Our focus lies in manufacturing and packaging two products — paper straws and wooden cutlery. Due to our highly customisable offerings, we provide complete personalisation of product, packaging, quantity, and specification to every client.",
  },
  {
    num: "03",
    title: "Our Focus",
    body: "We work towards fostering long-term relationships with customers and partners through 100% transparency and the best possible experience. We aim to change the perception of single-use cutlery and build a strong market for biodegradable products globally.",
  },
];

const COUNTRIES = [
  "Canada", "USA", "Mexico",
  "Ireland", "United Kingdom", "Spain",
  "Poland", "Greece", "Romania",
  "Qatar", "Dubai", "Bahrain",
  "India", "Australia", "Netherlands",
  "Germany", "Mauritius", "Maldives",
];

const OFFICES = [
  {
    region: "India — Head Office",
    address: "Dulwich Mansion, 3rd Floor\n224, Gamadia Colony, Tardeo\nMumbai, Maharashtra – 400007",
  },
  {
    region: "Europe (North)",
    address: "Scharnhorststrasse 24\n10115 Berlin, Germany",
  },
  {
    region: "Europe (South)",
    address: "Süduferstrasse 14\n66538 Neunkirchen, Germany",
  },
];

export default function AboutClient() {
  return (
    <main>

      {/* ── HERO — dark green ── */}
      <section
        style={{ background: "#1A4731", minHeight: "72vh" }}
        className="relative overflow-hidden flex flex-col justify-end"
      >
        {/* Factory background image */}
        <Image
          src="https://biopapro.com/cdn/shop/files/F4.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          aria-hidden="true"
        />
        {/* Dark overlay so text stays readable */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(26,71,49,0.92) 0%, rgba(26,71,49,0.75) 50%, rgba(26,71,49,0.6) 100%)" }}
        />

        {/* Orange accent line top */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "#E97316" }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-40 pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: E }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span
                className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]"
                style={{ color: "#E97316" }}
              >
                00
              </span>
              <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.3)" }} />
              <span
                className="font-mono text-[11px] uppercase tracking-[0.28em]"
                style={{ color: "rgba(245,240,230,0.5)" }}
              >
                Our Story
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(3rem,8vw,8rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                color: "#F5F0E6",
              }}
            >
              Born to
              <br />
              <span style={{ color: "#E97316" }}>Replace Plastic.</span>
            </h1>

            <p
              className="mt-8 max-w-2xl"
              style={{
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                fontSize: "clamp(1rem,1.5vw,1.2rem)",
                lineHeight: 1.65,
                color: "rgba(245,240,230,0.65)",
              }}
            >
              Yash Chandan, Nikunj Bhansali, and Kushal Bhansali established Biopapro
              Private Limited in Mumbai in 2019 — driven by a shared belief that
              India deserves a better answer to single-use plastic than more plastic.
            </p>
          </motion.div>

          {/* Stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.65, ease: E }}
            className="flex flex-wrap gap-4 mt-14"
          >
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col px-6 py-4"
                style={{
                  background: "rgba(245,240,230,0.06)",
                  border: "1px solid rgba(245,240,230,0.12)",
                  borderRadius: "4px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.6rem,3vw,2.4rem)",
                    color: "#F5F0E6",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.2em] mt-1"
                  style={{ color: "rgba(245,240,230,0.45)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SCALE STRIP — orange on cream ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#F5F0E6" }}
      >
        <div
          className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20
                      grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { figure: "100M+", unit: "Pieces / Month", desc: "Wooden cutlery produced at our Mumbai facility every single month." },
            { figure: "10,000", unit: "kg Plastic / Day", desc: "The weight of single-use plastic our products displace daily." },
            { figure: "18+", unit: "Export Countries", desc: "Restaurants, hotels, and caterers across four continents trust Biopapro." },
          ].map(({ figure, unit, desc }, i) => (
            <FadeUp key={unit} delay={i * 0.1}>
              <div
                className="p-8 h-full"
                style={{
                  background: i === 1 ? "#1A4731" : "#F5F0E6",
                  border: `1px solid ${i === 1 ? "transparent" : "rgba(26,71,49,0.14)"}`,
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2.4rem,5vw,4rem)",
                    lineHeight: 1,
                    color: i === 1 ? "#E97316" : "#1A4731",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {figure}
                </div>
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.22em] mt-2 mb-4"
                  style={{ color: i === 1 ? "rgba(245,240,230,0.5)" : "#7A6B54" }}
                >
                  {unit}
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: i === 1 ? "rgba(245,240,230,0.65)" : "#3D2E22",
                  }}
                >
                  {desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── FOUNDERS PHOTO ── */}
      <section className="relative overflow-hidden" style={{ background: "#EDE5D4" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>01</span>
                <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.3)" }} />
                <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#1A1208" }}>The Founders</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.4rem,5vw,4.5rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                  color: "#1A1208",
                }}
              >
                THREE
                <br />
                <span style={{ color: "#E97316" }}>VISIONARIES.</span>
              </h2>
              <p className="mt-6" style={{ fontSize: "1rem", lineHeight: 1.7, color: "#3D2E22", maxWidth: "480px" }}>
                Yash Chandan, Nikunj Bhansali, and Kushal Bhansali — three friends who saw
                the same problem and refused to accept it. In 2019 they put everything into
                building an Indian answer to single-use plastic.
              </p>
              <div className="mt-8 space-y-2">
                {["Yash Chandan — Co-founder", "Nikunj Bhansali — Co-founder", "Kushal Bhansali — Director"].map((name) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full" style={{ background: "#E97316" }} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "#7A6B54" }}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: "6px", aspectRatio: "4/3" }}
              >
                <Image
                  src="https://biopapro.com/cdn/shop/files/WhatsApp_Image_2022-09-24_at_10.34.35.png"
                  alt="Biopapro founders — Yash Chandan, Nikunj Bhansali and Kushal Bhansali"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay badge */}
                <div
                  className="absolute bottom-5 left-5 px-4 py-3"
                  style={{ background: "#1A4731", borderRadius: "4px" }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "#E97316" }}>
                    Est. 2019 · Mumbai
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── WORKER IMAGE ── */}
      <section className="relative overflow-hidden" style={{ background: "#F5F0E6" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp delay={0.15} className="lg:order-2">
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: "6px", aspectRatio: "4/3" }}
              >
                <Image
                  src="/workers-sorting.webp"
                  alt="Biopapro workers sorting wooden cutlery at the Mumbai factory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute bottom-5 left-5 px-4 py-3"
                  style={{ background: "#1A4731", borderRadius: "4px" }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "#E97316" }}>
                    Mumbai, India
                  </span>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="lg:order-1">
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>02</span>
                <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.3)" }} />
                <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#1A1208" }}>The People</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.4rem,5vw,4.5rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                  color: "#1A1208",
                }}
              >
                380+
                <br />
                <span style={{ color: "#E97316" }}>Makers.</span>
              </h2>
              <p className="mt-6" style={{ fontSize: "1rem", lineHeight: 1.7, color: "#3D2E22", maxWidth: "480px" }}>
                More than 70% of our workforce are women — skilled artisans who shape,
                sand, and sort every piece of birchwood cutlery that leaves our factory.
                Their expertise is inseparable from every Biopapro product.
              </p>
              <div className="flex items-center gap-3 mt-8">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: "#7A6B54" }}
                >
                  Reconsider · Reduce · Refuse Single Use Plastic
                </span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>


      {/* ── THREE PILLARS ── */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <Image
          src="https://biopapro.com/cdn/shop/files/clair-VYJdGvp05V4-unsplash.jpg"
          alt="Birchwood cutlery rows"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay so text is readable */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(26,18,8,0.72)" }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <FadeUp className="mb-14">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>03</span>
              <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.4)" }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "rgba(245,240,230,0.6)" }}>Our Mission</span>
            </div>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.4rem,5vw,5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "#F5F0E6",
              }}
            >
              WHY
              <br />
              <span style={{ color: "#E97316" }}>WE EXIST.</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map(({ num, title, body }, i) => (
              <FadeUp key={num} delay={i * 0.1}>
                <div
                  className="p-8 h-full flex flex-col"
                  style={{
                    background: "rgba(245,240,230,0.07)",
                    border: "1px solid rgba(245,240,230,0.14)",
                    borderRadius: "6px",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span
                    className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] mb-6"
                    style={{ color: "#E97316" }}
                  >
                    {num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.3rem",
                      color: "#F5F0E6",
                      marginBottom: "16px",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(245,240,230,0.65)" }}>
                    {body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECO PACKAGING IMAGE BREAK ── */}
      <section className="relative overflow-hidden" style={{ background: "#1A1208", height: "clamp(220px,35vw,480px)" }}>
        <Image
          src="https://biopapro.com/cdn/shop/files/marcell-viragh-ZQas4Ehf-F4-unsplash_1.jpg"
          alt="Biopapro eco-certified packaging — plastic-free, compostable, recyclable, biodegradable"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to left, rgba(26,18,8,0.7) 0%, rgba(26,18,8,0.2) 50%, transparent 100%)" }}
        />
        <div className="relative z-10 h-full flex items-end justify-end px-6 md:px-12 lg:px-20 pb-10">
          <div className="text-right">
            <span className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: "rgba(245,240,230,0.5)" }}>
              Plastic-free · Compostable · Recyclable · Biodegradable
            </span>
          </div>
        </div>
      </section>

      {/* ── GLOBAL PRESENCE ── */}
      <section className="relative overflow-hidden" style={{ background: "#1A4731" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>04</span>
                <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.3)" }} />
                <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "rgba(245,240,230,0.5)" }}>Global Reach</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.4rem,5vw,4.5rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                  color: "#F5F0E6",
                }}
              >
                OUR
                <br />
                <span style={{ color: "#E97316" }}>PRESENCE.</span>
              </h2>
              <p className="mt-6" style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(245,240,230,0.65)", maxWidth: "440px" }}>
                From Mumbai to Berlin, from the Gulf to the Pacific — Biopapro
                supplies eco-certified wooden cutlery across {COMPANY_FACTS.exportMarkets}+ markets worldwide.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {COUNTRIES.map((country) => (
                  <span
                    key={country}
                    className="font-mono text-[10px] uppercase tracking-[0.16em] px-3 py-2"
                    style={{
                      background: "rgba(245,240,230,0.07)",
                      border: "1px solid rgba(245,240,230,0.14)",
                      borderRadius: "2px",
                      color: "#F5F0E6",
                    }}
                  >
                    {country}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="relative overflow-hidden" style={{ background: "#F5F0E6" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>05</span>
              <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.3)" }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#1A1208" }}>Where We Are</span>
            </div>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem,4vw,3.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "#1A1208",
              }}
            >
              OUR OFFICES.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {OFFICES.map(({ region, address }, i) => (
              <FadeUp key={region} delay={i * 0.1}>
                <div
                  className="p-8"
                  style={{
                    border: "1px solid rgba(26,71,49,0.14)",
                    borderRadius: "6px",
                  }}
                >
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.22em] mb-4"
                    style={{ color: "#E97316" }}
                  >
                    {region}
                  </div>
                  <address
                    style={{
                      fontStyle: "normal",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      color: "#3D2E22",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {address}
                  </address>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#EDE5D4" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 text-center">
          <FadeUp>
            <Leaf className="mx-auto mb-6 opacity-30" size={32} style={{ color: "#1A4731" }} />
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem,5vw,4rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "#1A1208",
              }}
              className="mb-6"
            >
              Ready to Switch
              <br />
              <span style={{ color: "#E97316" }}>From Plastic?</span>
            </h2>
            <p
              className="mx-auto mb-10"
              style={{ maxWidth: "480px", fontSize: "1rem", lineHeight: 1.65, color: "#3D2E22" }}
            >
              Talk to us about bulk supply, samples, certifications, or a custom
              packaging brief. We reply within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.22em] transition-all duration-300"
                style={{ background: "#1A4731", color: "#FFFFFF", borderRadius: "4px" }}
              >
                Get in Touch
                <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 px-8 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.22em] transition-all duration-300"
                style={{ background: "transparent", color: "#1A1208", border: "1px solid rgba(26,18,8,0.25)", borderRadius: "4px" }}
              >
                View Products
                <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
