"use client";

/**
 * Partner CTA — Bold mango left panel + dark forest right form
 */

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { COMPANY_FACTS } from "@/lib/company-facts";
import { Aurora, ScrollFloat } from "@/components/reactbits";

const E = [0.16, 1, 0.3, 1] as const;

const PRODUCTS_LIST = [
  "Birchwood Cutlery (Fork / Spoon / Knife)",
  "Spork",
  "Coffee Stirrer",
  "Ice Cream Stick",
  "Skewer / BBQ Stick",
  "Wrapped Cutlery Set",
  "Custom / OEM",
];

const BENEFITS = [
  "FSC® certified, food-grade birchwood",
  "10M+ units/month production capacity",
  `Exporting to ${COMPANY_FACTS.exportMarkets}+ countries`,
  "ISO 9001 · ISO 14001 · BRCGS certified",
];

export default function ContactTeaser() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  const [form, setForm] = useState({
    company: "", country: "", product: "", volume: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      aria-label="Contact Biopapro for export partnership"
    >
      <div className="flex flex-col lg:flex-row min-h-[640px]">

        {/* ── LEFT: Mango CTA panel ── */}
        <div
          className="relative flex-1 overflow-hidden"
          style={{ background: "#E97316" }}
        >
          <Aurora col1="#C4580A" col2="#E97316" col3="#E97316" opacity={0.3} />

          {/* Watermark */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-end justify-start overflow-hidden pointer-events-none select-none pb-0"
          >
            <span
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(5rem, 15vw, 15rem)",
                lineHeight:    0.85,
                color:         "rgba(255,255,255,0.055)",
                letterSpacing: "-0.04em",
              }}
            >
              PARTNER
            </span>
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-between">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: E }}
              className="flex items-center gap-2 mb-10"
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.5)" }}>11</span>
              <span className="w-5 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.5)" }}>Export Partnership</span>
            </motion.div>

            {/* Headline */}
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.65, ease: E }}
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(2.8rem, 5vw, 5.5rem)",
                  lineHeight:    0.92,
                  letterSpacing: "-0.03em",
                  color:         "#FFFFFF",
                  marginBottom:  "2rem",
                }}
              >
                PARTNER
                <br />
                WITH
                <br />
                BIOPAPRO.
              </motion.h2>

              {/* Benefits */}
              <div className="space-y-3">
                {BENEFITS.map((b, i) => (
                  <ScrollFloat key={b} delay={0.2 + i * 0.08}>
                    <div className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: "rgba(255,255,255,0.18)" }}
                      >
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FFFFFF", display: "block" }} />
                      </span>
                      <span className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                        {b}
                      </span>
                    </div>
                  </ScrollFloat>
                ))}
              </div>
            </div>

            {/* CTA link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.65)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
              >
                Full Contact Page
                <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

          </div>
        </div>

        {/* ── RIGHT: Cream form panel ── */}
        <div
          className="relative lg:w-[52%] flex flex-col justify-center overflow-hidden"
          style={{ background: "#EDE5D4" }}
        >
          <div className="relative z-10 p-8 md:p-12 lg:p-14 xl:p-16">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.65, ease: E }}
              className="mb-8"
            >
              <h3
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(1.6rem, 3vw, 2.6rem)",
                  lineHeight:    1,
                  letterSpacing: "-0.02em",
                  color:         "#1A1208",
                  marginBottom:  "0.5rem",
                }}
              >
                START A CONVERSATION
              </h3>
              <p className="font-sans text-sm" style={{ color: "#7A6B54" }}>
                We respond to all trade inquiries within 24 hours.
              </p>
            </motion.div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: E }}
                className="text-center py-16"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(26,71,49,0.12)" }}
                >
                  <span style={{ fontSize: "1.6rem", color: "#1A4731" }}>✓</span>
                </div>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize:   "1.1rem",
                    color:      "#1A4731",
                  }}
                >
                  Inquiry received!
                </p>
                <p className="font-sans text-sm mt-2" style={{ color: "#7A6B54" }}>
                  Our export team will reach out within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Company + Country row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] block mb-1.5" style={{ color: "#7A6B54" }}>
                      Company
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      required
                      className="w-full font-sans text-sm px-4 py-3 outline-none transition-colors duration-200"
                      style={{
                        background:   "#F5F0E6",
                        border:       "1px solid rgba(26,71,49,0.15)",
                        borderRadius: "4px",
                        color:        "#1A1208",
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#E97316"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(26,71,49,0.15)"; }}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] block mb-1.5" style={{ color: "#7A6B54" }}>
                      Country
                    </label>
                    <input
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Shipping destination"
                      required
                      className="w-full font-sans text-sm px-4 py-3 outline-none transition-colors duration-200"
                      style={{
                        background:   "#F5F0E6",
                        border:       "1px solid rgba(26,71,49,0.15)",
                        borderRadius: "4px",
                        color:        "#1A1208",
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#E97316"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(26,71,49,0.15)"; }}
                    />
                  </div>
                </div>

                {/* Product */}
                <div>
                  <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] block mb-1.5" style={{ color: "#7A6B54" }}>
                    Product Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    required
                    className="w-full font-sans text-sm px-4 py-3 outline-none transition-colors duration-200"
                    style={{
                      background:   "#F5F0E6",
                      border:       "1px solid rgba(26,71,49,0.15)",
                      borderRadius: "4px",
                      color:        form.product ? "#1A1208" : "#7A6B54",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#E97316"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(26,71,49,0.15)"; }}
                  >
                    <option value="" disabled style={{ background: "#F5F0E6" }}>Select a product category</option>
                    {PRODUCTS_LIST.map((p) => (
                      <option key={p} value={p} style={{ background: "#F5F0E6" }}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Volume */}
                <div>
                  <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] block mb-1.5" style={{ color: "#7A6B54" }}>
                    Monthly Volume (units)
                  </label>
                  <input
                    name="volume"
                    value={form.volume}
                    onChange={handleChange}
                    placeholder="e.g. 500,000 / month"
                    className="w-full font-sans text-sm px-4 py-3 outline-none transition-colors duration-200"
                    style={{
                      background:   "#F5F0E6",
                      border:       "1px solid rgba(26,71,49,0.15)",
                      borderRadius: "4px",
                      color:        "#1A1208",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#E97316"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(26,71,49,0.15)"; }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full font-mono text-[12px] font-bold uppercase tracking-[0.22em] py-4 transition-all duration-300 flex items-center justify-center gap-3 group"
                  style={{
                    background:   "#E97316",
                    color:        "#FFFFFF",
                    borderRadius: "4px",
                    marginTop:    "0.5rem",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C4580A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#E97316"; }}
                >
                  Send Inquiry
                  <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-center mt-3" style={{ color: "#7A6B54" }}>
                  Response within 24 hours · No spam
                </p>
              </motion.form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
