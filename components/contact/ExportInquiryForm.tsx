"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import {
  PRODUCT_OPTIONS, VOLUME_OPTIONS, REGION_OPTIONS, TIMELINE_OPTIONS,
} from "@/lib/contact-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const PROCUREMENT_OPTIONS = [
  { id: "fsc",         label: "FSC Certification Required"  },
  { id: "oem",         label: "OEM / Private Label"         },
  { id: "airline",     label: "Airline Supply"              },
  { id: "hospitality", label: "Hospitality Supply"          },
  { id: "distributor", label: "Distributor Partnership"     },
  { id: "sample",      label: "Sample Request"              },
] as const;

const COUNTRIES = [
  "United States", "United Kingdom", "Germany", "Netherlands", "France", "Spain",
  "Italy", "Poland", "Greece", "Romania", "Ireland", "Sweden", "Norway", "Denmark",
  "UAE", "Qatar", "Bahrain", "Saudi Arabia", "Kuwait", "Australia", "New Zealand",
  "Canada", "Mexico", "Brazil", "South Africa", "Mauritius", "India", "Singapore",
  "Japan", "South Korea", "China", "Malaysia", "Thailand", "Indonesia", "Other",
];

type FormState = {
  fullName: string; company: string; country: string; email: string;
  phone: string; products: string[]; volume: string; region: string;
  timeline: string; message: string; procurement: string[]; website: string;
};

const EMPTY: FormState = {
  fullName: "", company: "", country: "", email: "", phone: "",
  products: [], volume: "", region: "", timeline: "", message: "", procurement: [], website: "",
};

const CONTACT_EMAIL = "export@biopapro.com";

function buildMailto(form: FormState) {
  const subject = encodeURIComponent(`Export Inquiry — ${form.company} (${form.country})`);
  const body = encodeURIComponent(
    `Name: ${form.fullName}\nCompany: ${form.company}\nCountry: ${form.country}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nProducts: ${form.products.join(", ")}\nAnnual Volume: ${form.volume}\nDelivery Region: ${form.region}\nTimeline: ${form.timeline}\n\nProcurement Options: ${form.procurement.join(", ")}\n\nMessage:\n${form.message}`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block font-sans text-[13px] font-semibold text-ink mb-2">
      {children}
      {required && <span className="ml-1" style={{ color: "#C89A5B" }}>*</span>}
    </label>
  );
}

function Input({ value, onChange, placeholder, type = "text", required }: {
  value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full font-sans text-base text-ink px-4 py-3 outline-none transition-all duration-200"
      style={{
        background: "#FFFFFF",
        border: "1px solid #DDD3C5",
      }}
      onFocus={(e) => (e.currentTarget.style.borderColor = "#C89A5B")}
      onBlur={(e) => (e.currentTarget.style.borderColor = "#DDD3C5")}
    />
  );
}

function Select({ value, onChange, options, placeholder, required }: {
  value: string; onChange: (v: string) => void;
  options: readonly string[]; placeholder: string; required?: boolean;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full font-sans text-base px-4 py-3 outline-none transition-all duration-200 appearance-none"
      style={{
        background: "#FFFFFF",
        border: "1px solid #DDD3C5",
        color: value ? "#2C241B" : "#9A8A7A",
      }}
      onFocus={(e) => (e.currentTarget.style.borderColor = "#C89A5B")}
      onBlur={(e) => (e.currentTarget.style.borderColor = "#DDD3C5")}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function Checkbox({ id, label, checked, onChange }: {
  id: string; label: string; checked: boolean; onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        className="w-5 h-5 flex items-center justify-center flex-shrink-0 transition-all duration-200"
        style={{
          background: checked ? "#C89A5B" : "#FFFFFF",
          border: `1.5px solid ${checked ? "#C89A5B" : "#DDD3C5"}`,
        }}
      >
        {checked && (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
            <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className="font-sans text-[13px] text-ink-light group-hover:text-ink transition-colors duration-150">
        {label}
      </span>
    </label>
  );
}

export default function ExportInquiryForm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [deliveredByEmailClient, setDeliveredByEmailClient] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (field: keyof FormState) => (value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const toggleMulti = (field: "products" | "procurement", value: string) =>
    setForm((f) => ({
      ...f,
      [field]: f[field].includes(value)
        ? f[field].filter((v) => v !== value)
        : [...f[field], value],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          company: form.company,
          country: form.country,
          email: form.email,
          phone: form.phone,
          products: form.products.join(", "),
          volume: form.volume,
          region: form.region,
          timeline: form.timeline,
          procurement: form.procurement.join(", "),
          message: form.message,
          website: form.website, // honeypot
          source: "contact-page",
        }),
      });

      if (res.ok) {
        setDeliveredByEmailClient(false);
        setSubmitted(true);
        return;
      }

      const { error: code } = await res.json().catch(() => ({ error: "send_failed" }));

      if (code === "email_not_configured" || code === "send_failed") {
        // Backend not ready or provider down — fall back to the visitor's email client
        window.location.href = buildMailto(form);
        setDeliveredByEmailClient(true);
        setSubmitted(true);
        return;
      }

      setError("Please check the required fields and try again.");
    } catch {
      window.location.href = buildMailto(form);
      setDeliveredByEmailClient(true);
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="inquiry-form"
      style={{ background: "#FBF8F2" }}
      className="paper"
      aria-labelledby="form-heading"
    >
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="02" label="Export Inquiry Form" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="form-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Start your
              <br />
              <span style={{ color: "#C89A5B" }}>procurement enquiry.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)" }}
            >
              Complete the form below. The more detail you provide, the more
              tailored the response. All enquiries receive a full procurement
              package within 24–48 hours.
            </motion.p>
          </div>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="flex flex-col items-center justify-center py-20 px-6 text-center"
            style={{ border: "1px solid rgba(74,122,61,0.3)", background: "rgba(74,122,61,0.04)" }}
          >
            <CheckCircle size={40} style={{ color: "#4A7A3D", marginBottom: "1.5rem" }} />
            <h3 className="font-display font-light text-ink mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Inquiry submitted.
            </h3>
            <p className="font-sans text-[15px] text-ink-light leading-relaxed max-w-lg mb-6">
              {deliveredByEmailClient
                ? "Your email client has opened with a pre-filled message to Biopapro's export team. Send it and you'll receive a full procurement response within 24–48 hours."
                : "Your inquiry has reached Biopapro's export team. You'll receive a full procurement response within 24–48 hours."}
            </p>
            <p className="font-mono text-[12px] text-ink-muted">
              Direct email: {CONTACT_EMAIL} · +91 70211 03763
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          >
            {/* ── Left column — contact + procurement details ── */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* Contact info */}
              <div className="p-6 flex flex-col gap-5" style={{ border: "1px solid #DDD3C5" }}>
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted pb-3 border-b" style={{ borderColor: "#EDE5D8" }}>
                  Contact Information
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label required>Full Name</Label>
                    <Input value={form.fullName} onChange={set("fullName")} placeholder="Your full name" required />
                  </div>
                  <div>
                    <Label required>Company Name</Label>
                    <Input value={form.company} onChange={set("company")} placeholder="Your company" required />
                  </div>
                  <div>
                    <Label required>Country</Label>
                    <Select value={form.country} onChange={set("country")} options={COUNTRIES} placeholder="Select country" required />
                  </div>
                  <div>
                    <Label required>Email Address</Label>
                    <Input value={form.email} onChange={set("email")} placeholder="your@company.com" type="email" required />
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Phone Number</Label>
                    <Input value={form.phone} onChange={set("phone")} placeholder="+1 234 567 8900" type="tel" />
                  </div>
                </div>
              </div>

              {/* Procurement details */}
              <div className="p-6 flex flex-col gap-5" style={{ border: "1px solid #DDD3C5" }}>
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted pb-3 border-b" style={{ borderColor: "#EDE5D8" }}>
                  Procurement Details
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label required>Annual Volume Estimate</Label>
                    <Select value={form.volume} onChange={set("volume")} options={VOLUME_OPTIONS} placeholder="Select volume range" required />
                  </div>
                  <div>
                    <Label required>Delivery Region</Label>
                    <Select value={form.region} onChange={set("region")} options={REGION_OPTIONS} placeholder="Select region" required />
                  </div>
                  <div className="sm:col-span-2">
                    <Label required>Required Timeline</Label>
                    <Select value={form.timeline} onChange={set("timeline")} options={TIMELINE_OPTIONS} placeholder="Select timeline" required />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="p-6" style={{ border: "1px solid #DDD3C5" }}>
                <Label>Additional Requirements</Label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Describe your specific requirements — product variants, packaging preferences, certifications needed, tender deadlines, or any other relevant detail..."
                  rows={5}
                  className="w-full font-sans text-base text-ink px-4 py-3 outline-none resize-none transition-all duration-200"
                  style={{ background: "#FFFFFF", border: "1px solid #DDD3C5" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#C89A5B")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#DDD3C5")}
                />
              </div>
            </div>

            {/* ── Right column — products + options + submit ── */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Product interest */}
              <div className="p-6" style={{ border: "1px solid #DDD3C5" }}>
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted pb-3 border-b mb-5" style={{ borderColor: "#EDE5D8" }}>
                  Product Interest
                  <span className="ml-1 font-normal normal-case tracking-normal" style={{ color: "#C89A5B" }}>*</span>
                </p>
                <div className="flex flex-col gap-3">
                  {PRODUCT_OPTIONS.map((p) => (
                    <Checkbox
                      key={p} id={p} label={p}
                      checked={form.products.includes(p)}
                      onChange={() => toggleMulti("products", p)}
                    />
                  ))}
                </div>
              </div>

              {/* Procurement options */}
              <div className="p-6" style={{ border: "1px solid #DDD3C5" }}>
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted pb-3 border-b mb-5" style={{ borderColor: "#EDE5D8" }}>
                  Procurement Options
                </p>
                <div className="flex flex-col gap-3">
                  {PROCUREMENT_OPTIONS.map((o) => (
                    <Checkbox
                      key={o.id} id={o.id} label={o.label}
                      checked={form.procurement.includes(o.id)}
                      onChange={() => toggleMulti("procurement", o.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="p-6 flex flex-col gap-4" style={{ border: "1px solid #DDD3C5", background: "#F6F1E8" }}>
                <p className="font-sans text-[13px] text-ink-muted leading-relaxed">
                  Your inquiry will be sent directly to Biopapro's export team.
                  Response guaranteed within <strong className="text-ink font-semibold">24–48 business hours.</strong>
                </p>
                {/* Honeypot — visually hidden, off-screen; bots fill it, humans don't */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={form.website}
                  onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "#4A7A3D" }}
                  onMouseEnter={(e) => !sending && ((e.currentTarget as HTMLElement).style.background = "#2D5228")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7A3D")}
                >
                  {sending ? "Submitting…" : "Submit Export Inquiry"}
                  {!sending && <ArrowUpRight size={14} strokeWidth={2.5} />}
                </button>
                {error && (
                  <p className="font-sans text-[12px] text-center" style={{ color: "#B4442E" }} role="alert">
                    {error}
                  </p>
                )}
                <p className="font-sans text-[12px] text-ink-muted text-center">
                  Or email directly:{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ink hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
