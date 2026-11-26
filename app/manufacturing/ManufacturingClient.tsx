"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Leaf, Shield, Users, Globe, Factory } from "lucide-react";

const E = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: "100M+", label: "Units / Month",  sub: "Stamping capacity",  Icon: Factory },
  { value: "380+",  label: "Employees",       sub: "Direct workforce",   Icon: Users   },
  { value: "70%",   label: "Women-led",       sub: "Factory floor",      Icon: Users   },
  { value: "2019",  label: "Established",     sub: "Mumbai, India",      Icon: Leaf    },
];

const STEPS = [
  { n: "01", title: "Certified Timber",    body: "FSC®-certified birchwood sourced from responsible forests. Every log traced to its origin." },
  { n: "02", title: "Log Slitting",        body: "High-precision band saws cut logs into uniform billets. Tolerances held to ±0.3 mm." },
  { n: "03", title: "Stamping & Shaping",  body: "100M+ units per month stamped on automated presses. Each die set for exact cutlery geometry." },
  { n: "04", title: "Precision Finishing", body: "Multi-stage sanding lines deliver natural-smooth and birch-grain finishes. 100% splinter-free." },
  { n: "05", title: "Quality Checkpoint",  body: "Optical sorting + AQL 2.5 inspection. Defect rate below 0.08%. Every batch documented." },
  { n: "06", title: "Export Packaging",    body: "FSSAI, FDA, and EU-compliant packaging. FCL / LCL container dispatch from JNPT, Mumbai." },
];

const CERTS = [
  { code: "FSC® 100%",        name: "Forest Stewardship Council",   desc: "Responsible birchwood sourcing" },
  { code: "ISO 9001:2015",    name: "Quality Management System",     desc: "Consistent production quality"  },
  { code: "ISO 14001:2015",   name: "Environmental Management",      desc: "Minimal ecological footprint"   },
  { code: "ISO 45001:2018",   name: "Occupational Health & Safety",  desc: "Safe, certified workplace"      },
  { code: "BRCGS Grade AA",   name: "Global Food Safety Standard",   desc: "Export-ready food contact"      },
];

const EXPORT_SPECS = [
  { label: "Port",       value: "JNPT, Nhava Sheva, Mumbai"       },
  { label: "Container",  value: "FCL 20′ / 40′ · LCL available"  },
  { label: "Lead Time",  value: "21–28 days ex-works"             },
  { label: "Documents",  value: "Phytosanitary · COO · COA · MSDS"},
  { label: "Payment",    value: "LC / TT / DP"                    },
  { label: "MOQ",        value: "10,000 pcs per SKU"              },
];

const CREAM   = "#F5F0E6";
const CREAM2  = "#EDE5D4";
const GREEN   = "#1A4731";
const ORANGE  = "#E97316";
const INK     = "#1A1208";
const MUTED   = "#7A6B54";

export default function ManufacturingClient() {
  const heroRef    = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main style={{ background: CREAM }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ background: CREAM2, paddingTop: "72px" }}
      >
        {/* Decorative circle */}
        <div className="absolute pointer-events-none" style={{
          top: "-10%", right: "-5%",
          width: "50vw", height: "50vw", maxWidth: "600px", maxHeight: "600px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(26,71,49,0.08) 0%, transparent 70%)`,
        }} aria-hidden="true" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">

          {/* Page label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: E }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
            style={{ background: GREEN, color: CREAM }}
          >
            <Factory size={11} />
            Manufacturing · Mumbai, India
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.72, ease: E }}
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(2.8rem, 6vw, 6.5rem)",
                  lineHeight:    0.92,
                  letterSpacing: "-0.03em",
                  color:         INK,
                  marginBottom:  "1.5rem",
                }}
              >
                BUILT IN<br />
                <span style={{ color: GREEN }}>MUMBAI.</span><br />
                SHIPPED WORLDWIDE.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.28, duration: 0.65, ease: E }}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize:   "clamp(0.95rem, 1.2vw, 1.1rem)",
                  lineHeight: 1.75,
                  color:      MUTED,
                  maxWidth:   "480px",
                  marginBottom: "2rem",
                }}
              >
                Single-facility, vertically integrated production. FSC®-certified birchwood
                stamped, finished, and exported to 18+ countries — every batch documented,
                every shipment on schedule.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.42, duration: 0.6, ease: E }}
                className="flex items-center gap-3 flex-wrap"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] transition-all duration-200"
                  style={{ background: ORANGE, color: "#fff", borderRadius: "8px" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C4580A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ORANGE; }}
                >
                  Request Factory Tour
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </Link>
                <Link
                  href="/certifications"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-all duration-200"
                  style={{ border: `2px solid ${GREEN}`, color: GREEN, borderRadius: "8px", background: "transparent" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = GREEN;
                    el.style.color = CREAM;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "transparent";
                    el.style.color = GREEN;
                  }}
                >
                  View Certifications
                  <ArrowUpRight size={14} strokeWidth={2} />
                </Link>
              </motion.div>
            </div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease: E }}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.55, ease: E }}
                  className="p-6 rounded-2xl"
                  style={{ background: CREAM, border: `1px solid rgba(26,71,49,0.12)` }}
                >
                  <div
                    className="font-black leading-none mb-2"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize:   "clamp(1.8rem, 3vw, 2.6rem)",
                      color:      GREEN,
                      fontVariantNumeric: "lining-nums tabular-nums",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[13px] font-bold mb-0.5" style={{ color: INK }}>{s.label}</div>
                  <div className="text-[11px] uppercase tracking-[0.12em]" style={{ color: MUTED }}>{s.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTION PROCESS ───────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36">

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: E }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
          style={{ background: "rgba(26,71,49,0.1)", color: GREEN }}
        >
          <Leaf size={10} /> Process · Timber to Table
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.65, ease: E }}
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    900,
            fontSize:      "clamp(2.5rem, 5vw, 5rem)",
            lineHeight:    0.92,
            letterSpacing: "-0.03em",
            color:         INK,
            marginBottom:  "3.5rem",
          }}
        >
          FROM FOREST<br /><span style={{ color: GREEN }}>TO YOUR FORK.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: E }}
              className="p-7 rounded-2xl cursor-pointer transition-all duration-300"
              style={{
                background:  activeStep === i ? GREEN    : CREAM2,
                border:      `1px solid ${activeStep === i ? GREEN : "rgba(26,71,49,0.12)"}`,
                boxShadow:   activeStep === i ? "0 8px 32px rgba(26,71,49,0.15)" : "none",
              }}
              onClick={() => setActiveStep(i)}
            >
              <div
                className="text-[12px] font-black uppercase tracking-[0.22em] mb-4 inline-flex items-center justify-center w-9 h-9 rounded-full"
                style={{
                  background: activeStep === i ? "rgba(255,255,255,0.15)" : "rgba(26,71,49,0.1)",
                  color:      activeStep === i ? CREAM : GREEN,
                }}
              >
                {step.n}
              </div>
              <h3
                className="font-bold text-[16px] mb-3"
                style={{ fontFamily: "'Outfit', sans-serif", color: activeStep === i ? CREAM : INK }}
              >
                {step.title}
              </h3>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: activeStep === i ? "rgba(245,240,230,0.75)" : MUTED }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────────── */}
      <section style={{ background: CREAM2, borderTop: `1px solid rgba(26,71,49,0.1)`, borderBottom: `1px solid rgba(26,71,49,0.1)` }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: E }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
            style={{ background: "rgba(26,71,49,0.1)", color: GREEN }}
          >
            <Shield size={10} /> Certified · Quality &amp; Standards
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:gap-20 gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.65, ease: E }}
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.03em",
                color:         INK,
                flexShrink:    0,
                maxWidth:      "320px",
              }}
            >
              BUILT TO<br /><span style={{ color: GREEN }}>EXPORT.</span>
            </motion.h2>

            <div className="flex-1 flex flex-col gap-3">
              {CERTS.map((c, i) => (
                <motion.div
                  key={c.code}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: E }}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ background: CREAM, border: `1px solid rgba(26,71,49,0.1)` }}
                >
                  <CheckCircle2 size={18} strokeWidth={2} style={{ color: GREEN, flexShrink: 0, marginTop: 2 }} />
                  <div className="flex-1">
                    <div className="text-[11px] font-black uppercase tracking-[0.16em] mb-0.5" style={{ color: ORANGE }}>{c.code}</div>
                    <div className="text-[14px] font-semibold mb-0.5" style={{ fontFamily: "'Outfit', sans-serif", color: INK }}>{c.name}</div>
                    <div className="text-[13px]" style={{ color: MUTED }}>{c.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPORT OPERATIONS ────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36">

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: E }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
          style={{ background: "rgba(26,71,49,0.1)", color: GREEN }}
        >
          <Globe size={10} /> Export · Global Logistics
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:gap-20 gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: E }}
            style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    900,
              fontSize:      "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight:    0.92,
              letterSpacing: "-0.03em",
              color:         INK,
              flexShrink:    0,
              maxWidth:      "320px",
            }}
          >
            18+ COUNTRIES,<br /><span style={{ color: GREEN }}>ONE DOOR.</span>
          </motion.h2>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EXPORT_SPECS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: E }}
                className="px-6 py-5 rounded-xl"
                style={{ background: CREAM2, border: `1px solid rgba(26,71,49,0.1)`, borderLeft: `3px solid ${GREEN}` }}
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] mb-1.5" style={{ color: ORANGE }}>{item.label}</div>
                <div className="text-[14px] font-semibold" style={{ fontFamily: "'Outfit', sans-serif", color: INK }}>{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFORCE ────────────────────────────────────── */}
      <section style={{ background: GREEN, borderTop: `1px solid rgba(255,255,255,0.1)` }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 gap-10">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: E }}
              className="flex-shrink-0"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.28em] mb-4 opacity-60" style={{ color: CREAM }}>Our People</div>
              <div
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(5rem, 14vw, 11rem)",
                  lineHeight:    0.85,
                  letterSpacing: "-0.04em",
                  color:         CREAM,
                }}
              >
                70%
              </div>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize:   "clamp(1.2rem, 2.5vw, 2rem)",
                  color:      ORANGE,
                  marginTop:  "0.5rem",
                }}
              >
                WOMEN-LED
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] mt-2 opacity-50" style={{ color: CREAM }}>
                Factory workforce · Mumbai
              </div>
            </motion.div>

            <div className="flex-1 grid grid-cols-1 gap-4">
              {[
                { title: "Precision",    body: "Every piece inspected to export-grade standards before it leaves the floor." },
                { title: "Consistency",  body: "Same quality on every batch, every shift, every day — documented and traceable." },
                { title: "Pride",        body: "Women-owned livelihoods built on sustainable work and ISO-certified safety." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: E }}
                  className="p-6 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderLeft: `3px solid ${ORANGE}` }}
                >
                  <div className="font-bold text-[14px] mb-2" style={{ color: ORANGE }}>{item.title}</div>
                  <div className="text-[14px] leading-relaxed" style={{ color: "rgba(245,240,230,0.7)" }}>{item.body}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ background: CREAM2, borderTop: `1px solid rgba(26,71,49,0.12)` }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: E }}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] mb-6" style={{ color: MUTED }}>Ready to source?</div>
            <h2
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2.5rem, 6vw, 6rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.03em",
                color:         INK,
                marginBottom:  "1.5rem",
              }}
            >
              LET&apos;S BUILD<br /><span style={{ color: GREEN }}>YOUR SUPPLY.</span>
            </h2>
            <p className="text-[15px] mb-10 mx-auto leading-relaxed" style={{ color: MUTED, maxWidth: "420px" }}>
              FCL / LCL exports. 21–28 day lead time. Full documentation. Request a quote and we&apos;ll respond within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.18em] px-8 py-4 transition-all duration-200"
              style={{ background: ORANGE, color: "#fff", borderRadius: "8px", boxShadow: "0 8px 24px rgba(233,115,22,0.25)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C4580A"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ORANGE; }}
            >
              Request Export Quote
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
