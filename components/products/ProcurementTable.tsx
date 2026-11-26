"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, ArrowUpDown } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { PRODUCTS } from "@/lib/products-data";

const EASE = [0.16, 1, 0.3, 1] as const;

type SortKey = "name" | "length" | "pcsPerCarton" | "moq";
type SortDir = "asc" | "desc";

// Build table rows from real product data
const TABLE_ROWS = PRODUCTS.map((p) => ({
  id: p.id,
  name: p.name,
  category: p.category,
  length: p.length,
  material: p.material,
  pcsPerCarton: p.pcsPerCarton,
  moq: p.moq,
  certifications: p.certifications,
  isIndividuallyPacked: p.isIndividuallyPacked,
}));

function sortRows(
  rows: typeof TABLE_ROWS,
  key: SortKey,
  dir: SortDir
): typeof TABLE_ROWS {
  return [...rows].sort((a, b) => {
    let av: string | number;
    let bv: string | number;

    if (key === "pcsPerCarton") {
      av = a.pcsPerCarton;
      bv = b.pcsPerCarton;
    } else if (key === "length") {
      av = parseInt(a.length) || 0;
      bv = parseInt(b.length) || 0;
    } else {
      av = (a as Record<string, unknown>)[key] as string;
      bv = (b as Record<string, unknown>)[key] as string;
    }

    if (av < bv) return dir === "asc" ? -1 : 1;
    if (av > bv) return dir === "asc" ? 1 : -1;
    return 0;
  });
}

const COLUMNS: { key: SortKey | null; label: string }[] = [
  { key: "name", label: "Product" },
  { key: null, label: "Category" },
  { key: "length", label: "Length" },
  { key: null, label: "Material" },
  { key: "pcsPerCarton", label: "Pcs / Carton" },
  { key: "moq", label: "MOQ" },
  { key: null, label: "Certifications" },
];

export default function ProcurementTable() {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [filterCat, setFilterCat] = useState<string>("All");

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  const categories = ["All", ...Array.from(new Set(TABLE_ROWS.map((r) => r.category)))];

  const filtered =
    filterCat === "All"
      ? TABLE_ROWS
      : TABLE_ROWS.filter((r) => r.category === filterCat);

  const sorted = sortRows(filtered, sortKey, sortDir);

  function handleSort(key: SortKey | null) {
    if (!key) return;
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const GREEN  = "#1A4731";
  const ORANGE = "#E97316";
  const INK    = "#1A1208";
  const MUTED  = "#7A6B54";
  const CREAM  = "#F5F0E6";
  const CREAM2 = "#EDE5D4";

  return (
    <section
      style={{ background: CREAM }}
      aria-labelledby="table-heading"
    >
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">

        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="05" label="Procurement Reference" />
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <motion.h2
              id="table-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2rem, 3.2vw, 3rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.03em",
                color:         INK,
              }}
            >
              FULL SKU<br />
              <span style={{ color: GREEN }}>REFERENCE.</span>
            </motion.h2>

            {/* Category filter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.14 }}
              className="flex flex-wrap gap-1.5"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCat(cat)}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 transition-all duration-200 rounded-lg"
                  style={{
                    background: filterCat === cat ? GREEN : "rgba(26,71,49,0.06)",
                    color:      filterCat === cat ? "#ffffff" : MUTED,
                    border:     `1px solid ${filterCat === cat ? GREEN : "rgba(26,71,49,0.1)"}`,
                  }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="overflow-x-auto"
          style={{ border: "1px solid rgba(26,71,49,0.14)", borderRadius: "14px" }}
        >
          <table className="w-full min-w-[800px]">
            <thead>
              <tr style={{ background: CREAM2, borderBottom: "1px solid rgba(26,71,49,0.12)" }}>
                {COLUMNS.map((col) => (
                  <th
                    key={col.label}
                    onClick={() => handleSort(col.key)}
                    className={`text-left py-4 px-4 ${col.key ? "cursor-pointer transition-colors" : ""}`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: MUTED }}>
                        {col.label}
                      </span>
                      {col.key && (
                        <ArrowUpDown
                          size={9}
                          style={{ color: sortKey === col.key ? GREEN : "rgba(122,107,84,0.4)" }}
                        />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((row, i) => (
                <tr
                  key={row.id}
                  style={{
                    borderBottom: "1px solid rgba(26,71,49,0.07)",
                    background: i % 2 === 0 ? "transparent" : "rgba(26,71,49,0.025)",
                  }}
                >
                  {/* Product name */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[12px] font-medium"
                        style={{ color: INK, fontFamily: "'Outfit', sans-serif" }}
                      >
                        {row.name}
                      </span>
                      {row.isIndividuallyPacked && (
                        <span
                          className="font-mono text-[10px] uppercase tracking-[0.14em] px-1.5 py-0.5 rounded"
                          style={{ background: "rgba(233,115,22,0.1)", border: "1px solid rgba(233,115,22,0.3)", color: ORANGE }}
                        >
                          Sleeved
                        </span>
                      )}
                    </div>
                  </td>
                  {/* Category */}
                  <td className="py-3.5 px-4">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 rounded"
                      style={{ background: "rgba(26,71,49,0.08)", border: "1px solid rgba(26,71,49,0.18)", color: GREEN }}
                    >
                      {row.category}
                    </span>
                  </td>
                  {/* Length */}
                  <td className="py-3.5 px-4 font-mono text-[11px]" style={{ color: INK }}>{row.length}</td>
                  {/* Material */}
                  <td className="py-3.5 px-4 font-mono text-[11px]" style={{ color: MUTED }}>{row.material}</td>
                  {/* Pcs/carton */}
                  <td className="py-3.5 px-4 font-mono text-[11px] font-bold" style={{ color: GREEN }}>
                    {row.pcsPerCarton.toLocaleString()}
                  </td>
                  {/* MOQ */}
                  <td className="py-3.5 px-4 font-mono text-[11px]" style={{ color: INK }}>{row.moq}</td>
                  {/* Certifications */}
                  <td className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1">
                      {row.certifications.slice(0, 3).map((cert) => (
                        <span
                          key={cert}
                          className="font-mono text-[10px] uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
                          style={{ background: CREAM2, border: "1px solid rgba(26,71,49,0.14)", color: MUTED }}
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Table footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, ease: EASE, delay: 0.36 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: MUTED }}>
            Showing {sorted.length} of {TABLE_ROWS.length} SKUs · Click column headers to sort
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200"
            style={{ color: GREEN }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = ORANGE)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = GREEN)}
          >
            Request full spec sheet PDF
            <ArrowUpRight size={10} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
