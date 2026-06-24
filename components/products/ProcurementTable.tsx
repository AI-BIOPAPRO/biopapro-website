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

  return (
    <section
      style={{ background: "#FBF8F2" }}
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
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
            >
              Full SKU Reference
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
                  className="font-sans text-[12px] uppercase tracking-[0.08em] px-3 py-2 transition-all duration-200"
                  style={{
                    background: filterCat === cat ? "#4A7A3D" : "transparent",
                    color: filterCat === cat ? "#ffffff" : "#6B5D50",
                    border: `1px solid ${filterCat === cat ? "#4A7A3D" : "#DDD3C5"}`,
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
          className="overflow-x-auto border"
          style={{ borderColor: "#DDD3C5" }}
        >
          <table className="w-full min-w-[800px]">
            <thead>
              <tr style={{ background: "#F6F1E8", borderBottom: "2px solid #DDD3C5" }}>
                {COLUMNS.map((col) => (
                  <th
                    key={col.label}
                    onClick={() => handleSort(col.key)}
                    className={`text-left py-4 px-4 ${col.key ? "cursor-pointer hover:text-ink transition-colors" : ""}`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                        {col.label}
                      </span>
                      {col.key && (
                        <ArrowUpDown
                          size={9}
                          className={sortKey === col.key ? "text-wood" : "text-border"}
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
                    borderBottom: "1px solid #EDE5D8",
                    background: i % 2 === 0 ? "#FFFFFF" : "#FDFAF6",
                  }}
                >
                  {/* Product name */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-[12px] font-medium text-ink">
                        {row.name}
                      </span>
                      {row.isIndividuallyPacked && (
                        <span
                          className="font-mono text-[6px] uppercase tracking-[0.12em] px-1.5 py-0.5"
                          style={{ background: "rgba(200,154,91,0.12)", border: "1px solid rgba(200,154,91,0.3)", color: "#8C6239" }}
                        >
                          Sleeved
                        </span>
                      )}
                    </div>
                  </td>
                  {/* Category */}
                  <td className="py-3.5 px-4">
                    <span
                      className="font-mono text-[7.5px] uppercase tracking-[0.16em] px-2.5 py-1"
                      style={{ background: "rgba(74,122,61,0.08)", border: "1px solid rgba(74,122,61,0.18)", color: "#4A7A3D" }}
                    >
                      {row.category}
                    </span>
                  </td>
                  {/* Length */}
                  <td className="py-3.5 px-4 font-mono text-[10px] text-ink">{row.length}</td>
                  {/* Material */}
                  <td className="py-3.5 px-4 font-sans text-[11px] text-ink-light">{row.material}</td>
                  {/* Pcs/carton */}
                  <td className="py-3.5 px-4 font-mono text-[10px] font-bold" style={{ color: "#C89A5B" }}>
                    {row.pcsPerCarton.toLocaleString()}
                  </td>
                  {/* MOQ */}
                  <td className="py-3.5 px-4 font-mono text-[10px] text-ink">{row.moq}</td>
                  {/* Certifications */}
                  <td className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1">
                      {row.certifications.slice(0, 3).map((cert) => (
                        <span
                          key={cert}
                          className="font-mono text-[6.5px] uppercase tracking-[0.1em] px-1.5 py-0.5"
                          style={{ background: "#F6F1E8", border: "1px solid #DDD3C5", color: "#6B5D50" }}
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
          <p className="font-mono text-[7.5px] uppercase tracking-[0.16em] text-ink-muted">
            Showing {sorted.length} of {TABLE_ROWS.length} SKUs · Click column headers to sort
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.18em] transition-colors duration-200"
            style={{ color: "#4A7A3D" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#2D5228")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#4A7A3D")}
          >
            Request full spec sheet PDF
            <ArrowUpRight size={10} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
