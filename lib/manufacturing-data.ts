/**
 * Biopapro Manufacturing Data
 *
 * ACCURACY NOTE: Biopapro does NOT harvest forests or process raw timber.
 * The manufacturing model is:
 *   - FSC-certified semi-finished birchwood sourced from approved suppliers (Russia / China)
 *   - Biopapro performs: incoming inspection → finishing → QC → packaging → export
 * All content below reflects this actual operation.
 */

export const MFG_HERO_STATS = [
  { value: "100M+",  label: "Units / Month"    },
  { value: "18+",    label: "Export Markets"   },
  { value: "380+",   label: "Employees"        },
  { value: "2019",   label: "Established"      },
] as const;

export const CAPABILITY_METRICS = [
  { label: "Facility",           value: "Mumbai, Maharashtra, India"           },
  { label: "Operating Since",    value: "2019"                                 },
  { label: "Workforce",          value: "380+ employees"                       },
  { label: "Women in Workforce", value: "70%+"                                 },
  { label: "Monthly Output",     value: "100M+ units"                         },
  { label: "Material Processed", value: "300+ tons / month"                   },
  { label: "Export Port",        value: "JNPT Mumbai — India's largest"        },
  { label: "Active Markets",     value: "18+ countries across 6 continents"   },
  { label: "Lead Time",          value: "21–28 days typical ocean transit"     },
  { label: "Certifications",     value: "ISO 9001 · ISO 14001 · ISO 45001 · BRCGS · FSC®" },
] as const;

// 6-step production journey — accurate to Biopapro's actual operation
export const PRODUCTION_STEPS = [
  {
    step: "01",
    title: "Certified Birchwood Supply",
    body: "FSC-certified semi-finished birchwood is sourced from approved suppliers in Russia and China. Every incoming batch arrives with full FSC chain-of-custody documentation. Supplier qualification is maintained under ISO 9001 procurement controls.",
    tag: "Supplier Management",
    accent: "#C89A5B",
  },
  {
    step: "02",
    title: "Incoming Material Inspection",
    body: "Every batch is inspected on arrival at the Mumbai facility. Checks cover dimensional specification, surface quality grading, and moisture content. Sub-specification material is rejected at intake — before it enters the production line.",
    tag: "Quality Gate 1",
    accent: "#C89A5B",
  },
  {
    step: "03",
    title: "Precision Finishing & Manufacturing",
    body: "High-speed stamping and finishing lines process semi-finished birchwood into final product form. Dimensional tolerances are maintained across production runs. Output: 100M+ units per month from a single facility in Mumbai.",
    tag: "Manufacturing",
    accent: "#C89A5B",
  },
  {
    step: "04",
    title: "Quality Control & Food Safety",
    body: "Automated optical sorting identifies and rejects dimensional defects and surface flaws. Manual AQL 2.5 inspection follows, conducted by trained QC operators. All food-contact units pass through a UV sterilisation tunnel — compliant with FDA CFR 21 and EU 10/2011.",
    tag: "Quality Gate 2",
    accent: "#4A7A3D",
  },
  {
    step: "05",
    title: "Packaging & Export Preparation",
    body: "Units are packed into OPP polybags (100 or 500 pcs) and standardised export cartons sized for container optimisation. Full export documentation is prepared in parallel: FSC certificate, phytosanitary certificate, certificate of origin, commercial invoice, packing list.",
    tag: "Export Prep",
    accent: "#4A7A3D",
  },
  {
    step: "06",
    title: "Global Distribution",
    body: "Palletised cartons are loaded into 20ft or 40ft FCL containers at JNPT — Jawaharlal Nehru Port Trust, Mumbai, India's largest container port. LCL consolidation available for smaller volumes. 18+ active export markets across 6 continents.",
    tag: "Distribution",
    accent: "#4A7A3D",
  },
] as const;

export const FACTORY_CAPABILITIES = [
  {
    id: "inspection",
    title: "Incoming Inspection",
    body: "Every batch of semi-finished birchwood is inspected before production begins. Dimensional checks, surface grading, and moisture measurement at intake ensure only specification-grade material enters the line.",
    metric: "100% batch inspection",
  },
  {
    id: "finishing",
    title: "Precision Finishing",
    body: "High-speed stamping and finishing lines convert semi-finished birchwood to final product dimensions. Production tolerances are controlled and verified per ISO 9001 in-process inspection procedures.",
    metric: "300+ tons / month",
  },
  {
    id: "uv",
    title: "UV Sterilisation",
    body: "All food-contact units pass through a UV sterilisation tunnel before packaging. Food-safety compliance is maintained to FDA CFR Title 21 and EU Regulation 10/2011 standards.",
    metric: "FDA + EU compliant",
  },
  {
    id: "qc",
    title: "Optical Sorting",
    body: "Automated optical sorting systems inspect every unit for dimensional variation and surface defects. Rejected units are isolated before manual AQL 2.5 verification by trained inspectors.",
    metric: "AQL 2.5 standard",
  },
  {
    id: "packaging",
    title: "Export Packaging",
    body: "OPP bag packing (100 or 500 pcs), then export carton assembly sized for container fill optimisation. Kraft-sleeve and private-label retail-ready packaging also available at MOQ.",
    metric: "FCL-optimised cartons",
  },
  {
    id: "documentation",
    title: "Export Documentation",
    body: "Full documentation package prepared for every shipment: FSC® chain-of-custody, phytosanitary certificate, certificate of origin, commercial invoice, packing list, and ISO / compliance certificates on request.",
    metric: "15+ documents per shipment",
  },
] as const;

export const QA_CHECKPOINTS = [
  { stage: "Pre-Production",  check: "Incoming material inspection — dimensional, surface, moisture"          },
  { stage: "Pre-Production",  check: "Supplier FSC chain-of-custody documentation verified"                   },
  { stage: "In-Process",      check: "Stamping dimension check — first-off and in-run sampling"              },
  { stage: "In-Process",      check: "Surface finish verification per specification"                         },
  { stage: "Post-Production", check: "Automated optical sorting — 100% of units screened"                    },
  { stage: "Post-Production", check: "Manual AQL 2.5 sampling inspection by QC team"                        },
  { stage: "Food Safety",     check: "UV sterilisation tunnel — all food-contact units"                      },
  { stage: "Food Safety",     check: "FDA CFR 21 and EU 10/2011 compliance verified per batch"               },
  { stage: "Packaging",       check: "Count verification — OPP bag and carton quantity audit"                },
  { stage: "Packaging",       check: "Carton labelling and export marking verified"                          },
  { stage: "Pre-Shipment",    check: "Documentation package review — FSC cert, phytosanitary, COO, invoices" },
  { stage: "Pre-Shipment",    check: "Batch release sign-off by QC manager before loading"                   },
] as const;

export const EXPORT_CAPABILITIES = [
  { label: "Container Types",      value: "20ft FCL · 40ft FCL · LCL consolidation"              },
  { label: "Loading Port",         value: "JNPT Mumbai — India's largest container port"          },
  { label: "Transit Times",        value: "Europe 21–26 days · Middle East 10–14 days · USA 28–35 days" },
  { label: "Documentation",        value: "FSC cert · Phytosanitary · COO · Invoice · B/L"        },
  { label: "MOQ (FCL)",            value: "From 20,000 pcs — full container preferred"            },
  { label: "MOQ (LCL)",            value: "From 5,000 pcs — consolidated shipping available"      },
  { label: "Packaging Options",    value: "OPP bulk · Kraft sleeve retail · Custom private label" },
  { label: "Shipment Frequency",   value: "Rolling monthly schedule · spot containers available"  },
] as const;

export const MFG_METRICS = [
  { value: "100M",   suffix: "+",  label: "Units per Month",      sub: "Single facility, Mumbai"             },
  { value: "300",    suffix: "T",  label: "Tons per Month",       sub: "Birchwood processed"                 },
  { value: "380",    suffix: "+",  label: "Employees",            sub: "70%+ women"                          },
  { value: "18",     suffix: "+",  label: "Export Markets",       sub: "6 continents"                        },
  { value: "9",      suffix: "",   label: "Certifications",       sub: "ISO · FSC · BRCGS · BPI · BSCI"     },
  { value: "12",     suffix: "+",  label: "QA Checkpoints",       sub: "Per production batch"                },
] as const;

export const BUYER_TRUST_POINTS = [
  {
    title: "Consistent Supply",
    body: "100M+ units per month from a single facility. Rolling container schedules mean buyers receive on-time delivery without production gaps.",
  },
  {
    title: "Verified Sourcing",
    body: "FSC®-certified semi-finished birchwood from approved suppliers. Chain-of-custody documentation issued with every batch — independently audited annually.",
  },
  {
    title: "Certified Quality System",
    body: "ISO 9001:2015 quality management across all production. BRCGS Food Safety certification. 12+ controlled checkpoints from intake to shipment.",
  },
  {
    title: "Export Experience",
    body: "Operating since 2019 with an established export operation at JNPT Mumbai. 18+ active markets. Full documentation for customs clearance included.",
  },
  {
    title: "Regulatory Compliance",
    body: "ISO 14001, ISO 45001, FDA CFR 21, EU 10/2011, BPI Compostable, BSCI — compliance maintained continuously, not just at audit time.",
  },
  {
    title: "Workforce Stability",
    body: "380+ employees, 70%+ women. Long-term workforce with deep process knowledge — the consistency that prevents quality variation at scale.",
  },
] as const;
