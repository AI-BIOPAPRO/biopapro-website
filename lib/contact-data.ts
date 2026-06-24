// Biopapro Contact Page Data — sourced from live biopapro.com

export const OFFICES = [
  {
    id: "india",
    region: "India — Manufacturing & Export HQ",
    type: "origin" as const,
    address: "G1 Khetwadi, 12th Lane, Girgaon, Mumbai 400004, Maharashtra, India",
    contacts: [
      { name: "Yash Chandan",     role: "Export Operations" },
      { name: "Nikunj Bhansali",  role: "Export Operations" },
    ],
    email: "yash@biopapro.com",
    phone: "+91 70211 03763",
    hours: "Mon – Sat, 09:00 – 18:00 IST",
    timezone: "UTC +5:30",
    note: "Primary contact for all export inquiries, production questions, and documentation.",
  },
] as const;

export const PROCUREMENT_JOURNEY = [
  {
    step: "01",
    title: "Submit Inquiry",
    body: "Complete the export inquiry form with your company details, product interest, volumes, and delivery region.",
    timeline: "Day 1",
    tag: "You",
  },
  {
    step: "02",
    title: "Requirement Review",
    body: "Biopapro's export team reviews your inquiry, matches product specifications, and prepares a tailored response.",
    timeline: "24–48 hours",
    tag: "Biopapro",
  },
  {
    step: "03",
    title: "Sample Dispatch",
    body: "Sample pack dispatched from Mumbai. Includes product samples, packaging options, and full certification documents.",
    timeline: "5–10 business days",
    tag: "Optional",
  },
  {
    step: "04",
    title: "Formal Quotation",
    body: "Itemised quotation issued covering unit price, packaging, freight estimate, lead time, and payment terms.",
    timeline: "3–5 business days",
    tag: "Biopapro",
  },
  {
    step: "05",
    title: "Order & Production",
    body: "Purchase order confirmed. Production allocated on rolling schedule. Packaging and documentation prepared in parallel.",
    timeline: "21–28 days",
    tag: "Manufacturing",
  },
  {
    step: "06",
    title: "Export Shipment",
    body: "Container loaded at JNPT Mumbai with full documentation. Bill of lading and tracking reference issued on departure.",
    timeline: "10–35 days transit",
    tag: "Delivery",
  },
] as const;

export const AFTER_SUBMIT = [
  { item: "Product Catalogue",              detail: "Full birchwood tableware range with specifications"      },
  { item: "Technical Datasheets",           detail: "Dimensions, tolerances, material specification"         },
  { item: "Packaging Specifications",       detail: "OPP bag counts, carton sizes, container fill data"      },
  { item: "MOQ & Pricing Guidance",         detail: "Volume pricing tiers from 5,000 to 1M+ units"           },
  { item: "Certification Package",          detail: "FSC, ISO 9001, BRCGS, FDA, EU, BPI, BSCI documents"    },
  { item: "Sample Request Option",          detail: "Physical sample pack dispatched from Mumbai"            },
  { item: "Export Documentation Overview",  detail: "COO, phytosanitary, FSC cert — all included"           },
  { item: "Lead Time Schedule",             detail: "Current production availability and shipment dates"     },
] as const;

export const CONTACT_INDUSTRIES = [
  {
    id: "airlines",
    name: "Airlines",
    icon: "✈",
    body: "Individually sleeved FSC-certified cutlery for tray setup and catering. Aviation food-safety compliant. High-volume rolling schedules.",
    highlight: "Individual sleeves · Aviation compliant · Rolling supply",
  },
  {
    id: "foodservice",
    name: "Food Service",
    icon: "🍽",
    body: "Bulk OPP-packed cutlery for QSR chains, corporate canteens, stadium operators. Container-level volumes with consistent lead times.",
    highlight: "Bulk OPP · 100M+ units/month · Container supply",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: "🏨",
    body: "Room service kits, in-room dining, minibar amenities for 5-star properties. Custom packaging and private label available.",
    highlight: "Custom packaging · 5-star grade · Private label",
  },
  {
    id: "catering",
    name: "Catering & Events",
    icon: "🎪",
    body: "Event-scale volumes for concerts, festivals, conferences, banquets. Sporks and sets for rapid service line deployment.",
    highlight: "Event volumes · Rapid deployment · Mixed sets",
  },
  {
    id: "retail",
    name: "Retail Chains",
    icon: "🛍",
    body: "Kraft-sleeve retail-ready cutlery sets for supermarket shelf. Custom branding, EAN barcoding, and retail compliance.",
    highlight: "Retail-ready · Custom branding · Supermarket grade",
  },
  {
    id: "importers",
    name: "Importers",
    icon: "🚢",
    body: "FCL and LCL container volumes for regional importers managing downstream food-service or retail accounts.",
    highlight: "FCL · LCL · Full documentation",
  },
  {
    id: "distributors",
    name: "Distributors",
    icon: "📦",
    body: "Long-term supply partnerships for FMCG distributors supplying multiple end accounts. Consistent pricing, consistent quality.",
    highlight: "Partnership pricing · Volume tiers · Consistent supply",
  },
  {
    id: "oem",
    name: "OEM / Private Label",
    icon: "🏷",
    body: "Custom branding, private-label packaging, and OEM production at container MOQs. Branded kraft sleeves, custom cartons, custom labelling.",
    highlight: "Private label · Custom packaging · Branded sleeves",
  },
] as const;

export const FAQS = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "LCL (Less than Container Load) shipments start from 5,000 pcs. FCL (Full Container Load) is preferred and starts from approximately 20,000 pcs for a 20ft container. Volume pricing tiers apply from 100,000 pcs upward.",
  },
  {
    q: "Can I request product samples before placing an order?",
    a: "Yes. Sample packs are dispatched from Mumbai within 5–10 business days of request confirmation. Samples include product, packaging variants, and the full certification document set. Sample dispatch fees may apply for non-qualified buyers.",
  },
  {
    q: "Do you offer OEM or private-label branding?",
    a: "Yes. Biopapro offers custom kraft-sleeve branding, private-label carton printing, and OEM packaging at container MOQs. Custom design is available with a minimum lead time of 4–6 weeks for tooling and proof approval.",
  },
  {
    q: "What certifications do you provide with each shipment?",
    a: "FSC® Chain of Custody Certificate and ISO 9001:2015 are included with every shipment. FDA CFR 21, EU 10/2011, BPI Compostable, and BSCI audit reports are available on request. Full documentation is provided within 2–3 business days of order confirmation.",
  },
  {
    q: "What are your typical lead times?",
    a: "Production lead time is 21–28 days from purchase order confirmation. Ocean freight transit times: Europe 21–26 days, Middle East 10–14 days, USA/Canada 28–35 days, Australia 18–22 days. Total order-to-delivery is typically 35–60 days depending on destination.",
  },
  {
    q: "Which countries do you export to?",
    a: "Biopapro currently exports to 18+ countries across 6 continents including USA, Canada, UK, Germany, Netherlands, Spain, Poland, Greece, Romania, Ireland, UAE, Qatar, Bahrain, Australia, Maldives, and Mauritius. New markets are added quarterly.",
  },
  {
    q: "Can you support large-volume tenders and long-term contracts?",
    a: "Yes. Biopapro regularly supports airline tenders, hospitality group contracts, and distributor annual agreements. Long-term supply agreements include volume pricing, reserved production capacity, and fixed documentation workflows.",
  },
  {
    q: "What export documents are provided with every shipment?",
    a: "Every shipment includes: Phytosanitary Certificate, Certificate of Origin, FSC® Chain of Custody Certificate, Commercial Invoice, Packing List, and Bill of Lading. ISO, FDA, EU, and BPI certificates provided on request. Full package ready within 2–3 days of loading.",
  },
] as const;

export const PRODUCT_OPTIONS = [
  "Birchwood Forks",
  "Birchwood Spoons",
  "Birchwood Knives",
  "Birchwood Sporks",
  "Coffee Stirrers",
  "Bamboo Skewers",
  "Cutlery Sets",
  "Custom / OEM",
] as const;

export const VOLUME_OPTIONS = [
  "Under 500,000 units",
  "500K – 1M units",
  "1M – 5M units",
  "5M – 20M units",
  "20M+ units",
  "Not yet decided",
] as const;

export const REGION_OPTIONS = [
  "Europe — EU",
  "Europe — UK",
  "North America — USA",
  "North America — Canada",
  "Middle East — UAE / Qatar / Bahrain",
  "Asia-Pacific — Australia",
  "Asia-Pacific — Other",
  "Africa",
  "Multiple Regions",
  "Other",
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "Within 6–12 months",
  "Exploring / No fixed date",
] as const;
