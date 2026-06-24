"use client";

/**
 * S11 — Contact / Export Partnership CTA
 *
 * Final section. Light warm background — ends the page on an open,
 * welcoming note. Not a standard "contact us" footer-adjacent block.
 * Positioned as "Start Your Export Partnership."
 *
 * Two columns:
 *   Left  — Emotional close: what a partnership with Biopapro means
 *   Right — Inline quick-contact form with Formspree/server action hook
 *
 * Form fields: Company · Country · Product interest · Volume · Message
 */

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const PRODUCTS_LIST = [
  "Birchwood Cutlery (Fork / Spoon / Knife)",
  "Spork",
  "Coffee Stirrer",
  "Ice Cream Stick",
  "Skewer / BBQ Stick",
  "Custom / OEM",
  "Full Range",
];

const VOLUMES = [
  "Under 500K units/year",
  "500K – 2M units/year",
  "2M – 10M units/year",
  "10M – 50M units/year",
  "50M+ units/year",
];

export default function ContactTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    /* ─────────────────────────────────────────────────────────────
       WIRE UP: Replace with your preferred form handler.
       Options:
       A) Formspree: action="https://formspree.io/f/{id}" method="POST"
       B) Next.js Server Action: import { sendEnquiry } from "@/app/actions"
       C) Email API: Resend / Sendgrid via /api/contact route

       For now: simulate a 1.2s send then mark submitted.
    ────────────────────────────────────────────────────────────── */
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  }

  return (
    <section
      ref={ref}
      className="bg-birch paper"
      aria-labelledby="contact-heading"
    >
      {/* Warm divider */}
      <div className="h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #DDD3C5 30%, #DDD3C5 70%, transparent)" }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Left: Partnership pitch ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-7"
            >
              <SectionLabel index="11" label="Export Partnership" />
            </motion.div>

            <motion.h2
              id="contact-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="font-display font-light text-ink leading-[0.95] mb-8"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
            >
              Start your
              <br />
              export
              <br />
              <span className="text-wood">partnership.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="font-sans font-light text-ink-light text-base leading-relaxed max-w-[420px]">
                Whether you are a distributor, an airline catering group, a
                large-scale food service operator, or a sustainability
                procurement team — we work with buyers at every scale.
              </p>

              {/* What you get */}
              <div className="space-y-4">
                {[
                  { step: "01", text: "Response within 24 hours" },
                  { step: "02", text: "Sample kit dispatched within 5 business days" },
                  { step: "03", text: "Tailored quote with container economics" },
                  { step: "04", text: "Compliance documentation for your market" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <span className="font-mono text-[8px] text-wood/50 tracking-[0.3em] flex-shrink-0">
                      {item.step}
                    </span>
                    <div className="w-4 h-px bg-border flex-shrink-0" />
                    <span className="font-sans text-[13px] text-ink-light">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div
                className="p-5 space-y-3 border border-border"
                style={{ background: "#EFE6D7" }}
              >
                <div className="flex items-center gap-3">
                  <Mail size={12} className="text-wood flex-shrink-0" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light">
                    export@biopapro.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={12} className="text-wood flex-shrink-0" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light">
                    Available via WhatsApp · WeChat
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={12} className="text-wood flex-shrink-0" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-light">
                    Headquarters — China · Export globally
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: EASE, delay: 0.25 }}
          >
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full gap-5 py-16">
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ background: "#F0E4CE", border: "1px solid #DDD3C5" }}
                >
                  <span className="text-wood text-xl">✓</span>
                </div>
                <h3 className="font-display font-light text-3xl text-ink leading-tight">
                  Enquiry received.
                </h3>
                <p className="font-sans text-ink-light text-sm leading-relaxed max-w-sm">
                  Our export team will review your enquiry and respond within
                  24 hours. Check your inbox — and your spam folder, just in case.
                </p>
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-wood hover:text-wood-dark transition-colors duration-200 mt-2"
                >
                  Browse the full catalog while you wait
                  <ArrowRight size={10} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block font-mono text-[8px] uppercase tracking-[0.2em] text-ink-muted mb-1.5">
                      Company *
                    </label>
                    <input
                      name="company"
                      required
                      placeholder="Acme Food Group"
                      className="w-full px-4 py-3 bg-card border border-border text-ink text-sm font-sans placeholder:text-ink-muted/50 focus:outline-none focus:border-wood transition-colors duration-200"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block font-mono text-[8px] uppercase tracking-[0.2em] text-ink-muted mb-1.5">
                      Country *
                    </label>
                    <input
                      name="country"
                      required
                      placeholder="Australia"
                      className="w-full px-4 py-3 bg-card border border-border text-ink text-sm font-sans placeholder:text-ink-muted/50 focus:outline-none focus:border-wood transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[8px] uppercase tracking-[0.2em] text-ink-muted mb-1.5">
                    Product Interest *
                  </label>
                  <select
                    name="product"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 bg-card border border-border text-ink text-sm font-sans focus:outline-none focus:border-wood transition-colors duration-200 appearance-none"
                  >
                    <option value="" disabled>Select product category</option>
                    {PRODUCTS_LIST.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[8px] uppercase tracking-[0.2em] text-ink-muted mb-1.5">
                    Annual Volume *
                  </label>
                  <select
                    name="volume"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 bg-card border border-border text-ink text-sm font-sans focus:outline-none focus:border-wood transition-colors duration-200 appearance-none"
                  >
                    <option value="" disabled>Select volume range</option>
                    {VOLUMES.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[8px] uppercase tracking-[0.2em] text-ink-muted mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements, timeline, or any specific certifications needed…"
                    className="w-full px-4 py-3 bg-card border border-border text-ink text-sm font-sans placeholder:text-ink-muted/50 focus:outline-none focus:border-wood transition-colors duration-200 resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-ink text-birch text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-wood-dark transition-colors duration-300 disabled:opacity-60"
                >
                  {sending ? (
                    <span className="inline-block w-3.5 h-3.5 border border-birch/40 border-t-birch rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Export Enquiry
                      <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                <p className="font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.14em] text-center">
                  No spam · No automated sales sequences · Export team responds directly
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
