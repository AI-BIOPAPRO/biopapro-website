// Biopapro Sustainability Data — all figures from live biopapro.com

export const IMPACT_METRICS = [
  { value: 6500,   suffix: "kg",  label: "Plastic Saved Daily",    sub: "Compared to equivalent plastic cutlery"   },
  { value: 100,    suffix: "M+",  label: "Units per Month",         sub: "Replacing single-use plastic globally"    },
  { value: 300,    suffix: "T",   label: "Birchwood per Month",     sub: "100% FSC-certified, renewable material"   },
  { value: 70,     suffix: "%+",  label: "Women in Workforce",      sub: "Structural inclusion since founding"      },
] as const;

export const BIRCHWOOD_FACTS = [
  {
    title: "Rapidly Renewable",
    body: "Birchwood grows significantly faster than hardwoods. FSC-certified forests are managed for continuous regeneration — harvest rates stay within growth rates, maintaining forest cover over time.",
  },
  {
    title: "Naturally Biodegradable",
    body: "Birchwood cutlery decomposes in industrial composting environments within weeks. No microplastic residue. No persistent environmental contamination. The product disappears as nature intended.",
  },
  {
    title: "BPI Compostable Certified",
    body: "Biopapro's compostability claims are third-party verified by the Biodegradable Products Institute (BPI) to ASTM D6400 standard. Not self-declared — independently tested.",
  },
  {
    title: "FSC® Chain of Custody",
    body: "Every gram of birchwood is sourced from FSC®-certified suppliers. Chain-of-custody documentation tracks material from certified forest to finished product — independently audited annually.",
  },
] as const;

export const LIFECYCLE_STAGES = [
  {
    step: "01",
    title: "FSC-Certified Forest",
    body: "Birchwood sourced from FSC-certified forests managed under strict sustainability protocols. Harvest rates verified to stay within natural regeneration rates.",
    tag: "Sustainable Sourcing",
  },
  {
    step: "02",
    title: "Responsible Manufacturing",
    body: "ISO 14001:2015 certified environmental management across all production. Energy use, waste streams, and material consumption monitored and continuously improved.",
    tag: "ISO 14001",
  },
  {
    step: "03",
    title: "Zero Plastic Packaging Option",
    body: "Products packed in OPP bags for bulk export. Kraft-sleeve retail packaging available for plastic-free presentation. Custom sustainable packaging at container MOQ.",
    tag: "Packaging",
  },
  {
    step: "04",
    title: "Single-Use — Then Compost",
    body: "After use, birchwood cutlery goes to industrial composting. BPI-certified to ASTM D6400. The product becomes organic matter — not landfill, not ocean waste, not microplastics.",
    tag: "End of Life",
  },
] as const;

export const SOCIAL_FACTS = [
  {
    stat: "70%+",
    label: "Women in Workforce",
    body: "More than 70% of Biopapro's 380+ employees are women. This has been consistent since the company was founded in 2019 — embedded in the operating model, not a target.",
  },
  {
    stat: "380+",
    label: "Total Employees",
    body: "A permanent, skilled workforce with deep process knowledge. Long-term employment provides income stability for families across Mumbai.",
  },
  {
    stat: "BSCI",
    label: "Social Compliance Audited",
    body: "Independent amfori BSCI audit verified labour rights, fair wages, workplace safety, and working conditions. Audit report available to qualified buyers on request.",
  },
  {
    stat: "2019",
    label: "Founded in Mumbai",
    body: "Built from the ground up in Girgaon, Mumbai. A manufacturing business rooted in the local community — the majority of the workforce lives within commuting distance of the facility.",
  },
] as const;

export const SUSTAINABILITY_CERTS = [
  { code: "FSC®",        name: "Forest Stewardship Council",  detail: "100% certified sourcing · Chain of custody verified",    color: "#007A34" },
  { code: "ISO 14001",   name: "Environmental Management",    detail: "ISO 14001:2015 · Annual surveillance audits",             color: "#004494" },
  { code: "BPI",         name: "Compostable Certified",       detail: "ASTM D6400 · Third-party verified compostability",        color: "#2E7D32" },
  { code: "ISO 45001",   name: "Occupational Health & Safety",detail: "ISO 45001:2018 · Worker safety certified",                color: "#004494" },
] as const;
