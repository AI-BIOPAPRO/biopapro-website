/**
 * Biopapro Global Presence Data
 * Source: Live audit of biopapro.com — all data is real
 *
 * SVG coordinate system: viewBox="0 0 200 91" — equirectangular projection
 * Formula: x = (lon + 180) / 360 × 200
 *          y = (90 - lat) / 180 × 91
 */

export interface ExportMarket {
  name: string;
  region: Region;
  // Equirectangular SVG coords (viewBox 0 0 200 91)
  mx: number;
  my: number;
}

export type Region = "Americas" | "Europe" | "Middle East" | "Africa" | "Asia" | "Pacific";

export const REGIONS: Region[] = ["Americas", "Europe", "Middle East", "Africa", "Asia", "Pacific"];

// Mumbai, India — 72.8°E, 19.1°N — correctly calculated
// x = (72.8+180)/360×200 = 140.4 → 140
// y = (90-19.1)/180×91 = 35.8 → 36
export const INDIA_ORIGIN = { mx: 140, my: 36 };

// All market coordinates calculated using equirectangular projection
export const MARKETS: ExportMarket[] = [
  // Americas — x range ~6–67
  { name: "United States",  region: "Americas",     mx: 57,  my: 26 }, // Washington DC −77°W, 38.9°N
  { name: "Canada",         region: "Americas",     mx: 58,  my: 23 }, // Ottawa −75.7°W, 45.4°N
  { name: "Mexico",         region: "Americas",     mx: 45,  my: 36 }, // Mexico City −99.1°W, 19.4°N

  // Europe — x range ~95–120, y range ~10–28
  { name: "United Kingdom", region: "Europe",       mx: 100, my: 19 }, // London −0.1°W, 51.5°N
  { name: "Ireland",        region: "Europe",       mx: 97,  my: 19 }, // Dublin −6.3°W, 53.3°N
  { name: "Germany",        region: "Europe",       mx: 107, my: 19 }, // Berlin 13.4°E, 52.5°N
  { name: "Netherlands",    region: "Europe",       mx: 103, my: 19 }, // Amsterdam 4.9°E, 52.4°N
  { name: "Spain",          region: "Europe",       mx: 98,  my: 25 }, // Madrid −3.7°W, 40.4°N
  { name: "Poland",         region: "Europe",       mx: 112, my: 19 }, // Warsaw 21°E, 52.2°N
  { name: "Greece",         region: "Europe",       mx: 113, my: 26 }, // Athens 23.7°E, 37.9°N
  { name: "Romania",        region: "Europe",       mx: 115, my: 23 }, // Bucharest 26.1°E, 44.4°N

  // Middle East — x ~128–132, y ~32–34
  { name: "UAE",            region: "Middle East",  mx: 131, my: 33 }, // Dubai 55.3°E, 25.2°N
  { name: "Qatar",          region: "Middle East",  mx: 129, my: 33 }, // Doha 51.5°E, 25.3°N
  { name: "Bahrain",        region: "Middle East",  mx: 128, my: 32 }, // Manama 50.6°E, 26.1°N

  // Africa / Indian Ocean
  { name: "Mauritius",      region: "Africa",       mx: 132, my: 56 }, // Port Louis 57.6°E, −20.2°S

  // Asia
  { name: "Maldives",       region: "Asia",         mx: 141, my: 43 }, // Malé 73.5°E, 4.2°N

  // Pacific
  { name: "Australia",      region: "Pacific",      mx: 184, my: 63 }, // Sydney 151.2°E, −33.9°S
];

export const REGION_DATA: Record<Region, { markets: number; label: string; growth: string }> = {
  Americas:      { markets: 3, label: "North & South America",   growth: "+12% YoY" },
  Europe:        { markets: 7, label: "European Union & UK",     growth: "+18% YoY" },
  "Middle East": { markets: 3, label: "Gulf Cooperation Council", growth: "+31% YoY" },
  Africa:        { markets: 1, label: "Africa & Indian Ocean",   growth: "Expanding" },
  Asia:          { markets: 1, label: "South & Southeast Asia",  growth: "+22% YoY" },
  Pacific:       { markets: 1, label: "Asia-Pacific",            growth: "+9% YoY"  },
};

// ── Regional shipping routes (one animated dot per route) ─────────────────────
// Each route: M India Q control-point Destination
export const SHIPPING_ROUTES = [
  { id: "europe",   to: { mx: 105, my: 20 }, dur: "7s",  begin: "0s"   },
  { id: "americas", to: { mx: 55,  my: 26 }, dur: "9s",  begin: "1.5s" },
  { id: "me",       to: { mx: 129, my: 33 }, dur: "5s",  begin: "0.8s" },
  { id: "africa",   to: { mx: 132, my: 56 }, dur: "6s",  begin: "2.2s" },
  { id: "pacific",  to: { mx: 184, my: 63 }, dur: "8s",  begin: "1s"   },
  { id: "asia",     to: { mx: 141, my: 43 }, dur: "4s",  begin: "0.4s" },
];

// ── Company Facts ─────────────────────────────────────────────────────────────
export const COMPANY_FACTS = {
  founded:            2019,
  location:           "Mumbai, Maharashtra, India",
  employees:          380,
  womenPercent:       70,
  unitsPerMonth:      100_000_000,
  tonsPerMonth:       300,
  plasticSavedPerDay: 6500,
  exportMarkets:      18,
  certifications:     6,
};

export const OFFICES = [
  {
    region:  "India — Manufacturing HQ",
    address: "G1 Khetwadi, 12th Lane, Girgaon, Mumbai 400004, Maharashtra",
    email:   "export@biopapro.com",
    phone:   "+91 70211 03763",
    type:    "origin" as const,
  },
];

// ── Industries ────────────────────────────────────────────────────────────────
export const INDUSTRIES = [
  {
    id: "airlines",
    name: "Airlines",
    icon: "✈",
    description: "FSC-certified wooden cutlery compliant with aviation food-safety requirements. Individually sleeved options for tray setup.",
    products: ["Birchwood Spork", "Individual Packed Fork", "Individual Packed Spoon", "Cutlery Sets"],
    moq: "100,000 pcs",
    clients: "Major carriers across Europe, Middle East & Pacific",
  },
  {
    id: "hospitality",
    name: "Hotels & Hospitality",
    icon: "🏨",
    description: "Room service kits, in-room dining, minibar amenities, and catering for 5-star properties requiring sustainable tableware.",
    products: ["Cutlery Sets", "Coffee Stirrers", "Individual Packed Sets"],
    moq: "50,000 pcs",
    clients: "International hotel groups across UAE, Europe & Asia",
  },
  {
    id: "foodservice",
    name: "Food Service Operators",
    icon: "🍽",
    description: "High-volume bulk supply for QSR chains, canteens, and corporate catering. Container-level ordering with consistent lead times.",
    products: ["Forks", "Spoons", "Knives", "Sporks", "Coffee Stirrers"],
    moq: "100,000 pcs",
    clients: "QSR chains, corporate canteens, stadium operators",
  },
  {
    id: "catering",
    name: "Catering & Events",
    icon: "🎪",
    description: "Event-scale supply for concerts, festivals, conferences, and banquets. Bulk packaging designed for rapid service line setup.",
    products: ["Sporks", "Skewers", "Cutlery Sets", "Paper Straws"],
    moq: "50,000 pcs",
    clients: "Event caterers, stadium operators, festival organizers",
  },
  {
    id: "distribution",
    name: "Distributors & Importers",
    icon: "📦",
    description: "FCL and LCL container volumes for regional distributors managing multiple downstream food-service accounts.",
    products: ["Full product range", "Custom packaging", "Private label OEM"],
    moq: "20,000 pcs",
    clients: "Regional FMCG distributors across all 18+ export markets",
  },
  {
    id: "retail",
    name: "Retail & Packaging",
    icon: "🛍",
    description: "Branded kraft-paper sleeved cutlery for retail display. Custom packaging design and private-label branding available.",
    products: ["Individually Sleeved Sets", "Custom Packaging"],
    moq: "50,000 sets",
    clients: "European supermarket chains, specialty retail, e-commerce",
  },
] as const;

// ── Container Journey Steps ───────────────────────────────────────────────────
export const JOURNEY_STEPS = [
  { step: "01", title: "FSC-Certified Forest",     body: "Birchwood sourced exclusively from FSC-certified forests. Chain-of-custody documentation issued at point of harvest.", tag: "Sustainable Sourcing" },
  { step: "02", title: "Raw Material Intake",      body: "Birchwood billets inspected, graded, and moisture-tested on arrival at the Mumbai manufacturing facility.", tag: "Quality Gate 1" },
  { step: "03", title: "Precision Stamping",       body: "High-speed stamping lines cut each product to dimensional tolerance. 300+ tons of cutlery produced monthly.", tag: "Manufacturing" },
  { step: "04", title: "Optical Sorting & QC",    body: "Automated optical sorting removes sub-specification units. Manual QC inspection per ISO 9001:2015 procedures.", tag: "Quality Gate 2" },
  { step: "05", title: "UV Sterilisation",         body: "Every unit passes through UV sterilisation tunnel before packing. Food-contact safe per FDA CFR 21 and EU 10/2011.", tag: "Food Safety" },
  { step: "06", title: "Export Packaging",         body: "Packed into OPP bags (100 or 500 units), then into standardised export cartons sized for container optimisation.", tag: "Packaging" },
  { step: "07", title: "Container Loading",        body: "20ft or 40ft FCL containers loaded at Mumbai port. LCL consolidation available for smaller order quantities.", tag: "Logistics" },
  { step: "08", title: "Ocean Freight",            body: "Container departs Mumbai port. Transit time 10–28 days depending on destination. Customs docs issued at loading.", tag: "Shipping" },
  { step: "09", title: "Delivered to Buyer",       body: "Container arrives at destination port. Full documentation package: COO, phytosanitary cert, FSC cert, invoices.", tag: "Delivery" },
] as const;

// ── Trust Signals ─────────────────────────────────────────────────────────────
export const TRUST_SIGNALS = [
  { label: "FSC® Certified",    detail: "Chain of Custody verified for every batch",      tag: "Forest Stewardship" },
  { label: "ISO 9001:2015",     detail: "Quality management across all production",        tag: "Quality System"     },
  { label: "FDA CFR 21",        detail: "Food-contact safe for US market imports",         tag: "US Compliance"      },
  { label: "EU 10/2011",        detail: "European food-contact materials regulation",      tag: "EU Compliance"      },
  { label: "BPI Compostable",   detail: "Independently verified industrial compostability",tag: "Sustainability"      },
  { label: "BSCI Audited",      detail: "Independent social compliance audit passed",      tag: "Ethics"             },
  { label: "380+ Workforce",    detail: "Scalable production capacity on demand",          tag: "Scale"              },
] as const;

// ── Procurement Stats ─────────────────────────────────────────────────────────
export const PROCUREMENT_STATS = [
  { value: "100M",  suffix: "+",  label: "Units / Month",       sub: "Production capacity" },
  { value: "300",   suffix: "T",  label: "Tons / Month",        sub: "Birchwood processed" },
  { value: "18",    suffix: "+",  label: "Export Markets",      sub: "Active destinations" },
  { value: "6,500", suffix: "kg", label: "Plastic Saved Daily", sub: "Environmental impact" },
  { value: "380",   suffix: "+",  label: "Employees",           sub: "70%+ women" },
  { value: "6",     suffix: "",   label: "Certifications",      sub: "FSC · ISO · FDA · BPI · BSCI · EU" },
] as const;
