/**
 * Biopapro Product Catalog
 * Source: Live audit of biopapro.com — all data is real
 * CDN base: https://biopapro.com/cdn/shop/
 */

export type ProductCategory =
  | "Forks"
  | "Spoons"
  | "Knives"
  | "Sporks"
  | "Stirrers"
  | "Scoops"
  | "Skewers"
  | "Sets"
  | "Paper Straws";

export const ALL_CATEGORIES: ProductCategory[] = [
  "Forks",
  "Spoons",
  "Knives",
  "Sporks",
  "Stirrers",
  "Scoops",
  "Skewers",
  "Sets",
  "Paper Straws",
];

export interface BioProduct {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  length: string;
  material: string;
  finish: string;
  certifications: string[];
  pcsPerBag: number;
  bagsPerCarton: number;
  pcsPerCarton: number;
  moq: string;
  shortDescription: string;
  applications: string[];
  primaryImage: string;
  galleryImages: string[];
  isIndividuallyPacked?: boolean;
  highlight?: boolean;
}

export interface ProductFamily {
  id: string;
  category: ProductCategory;
  headline: string;
  description: string;
  applications: string[];
  moqRange: string;
  skuCount: number;
  heroImage: string;
  sectionId: string;
}

const CDN = "https://biopapro.com/cdn/shop";

export const PRODUCTS: BioProduct[] = [
  // ── FORKS ──────────────────────────────────────────────────────────────────
  {
    id: "fork-140",
    name: "Wooden Fork 140mm",
    slug: "woodenfork140mm",
    category: "Forks",
    length: "140mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Compact 140mm birchwood fork for airline meals, fast-casual dining, and travel catering. Heat-resistant and food-safe.",
    applications: ["Airlines", "Fast casual", "Travel catering", "Cafeterias"],
    primaryImage: `${CDN}/products/W7_1_30fe1a1f-efc4-40cf-898a-7ae32de521a6.jpg?v=1665051997`,
    galleryImages: [
      `${CDN}/products/W7_1_30fe1a1f-efc4-40cf-898a-7ae32de521a6.jpg?v=1665051997`,
      `${CDN}/products/NewProject_9_c90d3596-22df-4f8a-a02b-1abbd3e0c10a.png?v=1665051997`,
      `${CDN}/products/G39_1_dd03fd77-6488-4628-837d-eacfae7bee68.jpg?v=1665051997`,
    ],
  },
  {
    id: "fork-160",
    name: "Wooden Fork 160mm",
    slug: "woodenfork160mm",
    category: "Forks",
    length: "160mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Standard 160mm birchwood fork for restaurants, hospitality, and food service. The most popular fork size for dine-in and takeaway.",
    applications: ["Restaurants", "Hotels", "Food service", "Catering"],
    primaryImage: `${CDN}/products/W7_1_713c7c76-f698-4bb9-9de4-1d75c61e9853.jpg`,
    galleryImages: [
      `${CDN}/products/W7_1_713c7c76-f698-4bb9-9de4-1d75c61e9853.jpg`,
      `${CDN}/products/NewProject_9_143a7464-1d51-4229-aeae-ca3d69539708.png`,
      `${CDN}/products/G39_1_f8528960-81ae-449d-bf2e-423ae76183d6.jpg`,
    ],
    highlight: true,
  },
  {
    id: "fork-160-packed",
    name: "Individual Packed Fork 160mm",
    slug: "individual-packed-160mm-fork",
    category: "Forks",
    length: "160mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Individually OPP-sleeved 160mm birchwood fork. Hygienic single-unit packaging for premium food service, airline trays, and hotel amenities.",
    applications: ["Airlines", "Hotels", "Premium catering", "Healthcare"],
    isIndividuallyPacked: true,
    primaryImage: `${CDN}/products/W7_1.jpg?v=1665051920`,
    galleryImages: [
      `${CDN}/products/W7_1.jpg?v=1665051920`,
      `${CDN}/products/NewProject_9.png?v=1665051920`,
      `${CDN}/products/G39_1.jpg?v=1665051920`,
    ],
  },

  // ── SPOONS ─────────────────────────────────────────────────────────────────
  {
    id: "spoon-110",
    name: "Wooden Spoon 110mm",
    slug: "wooden-spoon-110mm",
    category: "Spoons",
    length: "110mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Compact 110mm spoon ideal for desserts, ice cream, yogurt, and sampling. Popular with dairy brands and premium dessert concepts.",
    applications: ["Dairy", "Ice cream", "Desserts", "Sampling"],
    primaryImage: `${CDN}/products/W3_1_7b597730-c22b-4b48-aec6-867408a3080d.jpg`,
    galleryImages: [
      `${CDN}/products/W3_1_7b597730-c22b-4b48-aec6-867408a3080d.jpg`,
    ],
  },
  {
    id: "spoon-140",
    name: "Wooden Spoon 140mm",
    slug: "wooden-spoon-140mm",
    category: "Spoons",
    length: "140mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Medium 140mm birchwood spoon for soups, breakfast service, and café use. Balanced proportions for optimal user experience.",
    applications: ["Cafés", "Breakfast", "Soups", "Airlines"],
    primaryImage: `${CDN}/products/W3_1_3390b722-b808-4bc3-9398-e09eb12185a8.jpg`,
    galleryImages: [
      `${CDN}/products/W3_1_3390b722-b808-4bc3-9398-e09eb12185a8.jpg`,
    ],
  },
  {
    id: "spoon-160",
    name: "Wooden Spoon 160mm",
    slug: "wooden-spoon-160mm",
    category: "Spoons",
    length: "160mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Full-size 160mm birchwood spoon for restaurants, hospitality, and institutional catering. Heat-resistant for hot food and soup service.",
    applications: ["Restaurants", "Hotels", "Catering", "Institutions"],
    primaryImage: `${CDN}/products/W3_1_ac837677-7a66-4363-bb00-675eb726043d.jpg`,
    galleryImages: [
      `${CDN}/products/W3_1_ac837677-7a66-4363-bb00-675eb726043d.jpg`,
      `${CDN}/products/NewProject_8_11a0612f-43bb-4e7f-84ea-48ec0fbde693.png`,
      `${CDN}/products/G46_1_1b0f0709-fad5-40a6-a9ea-200af8d865d0.jpg`,
    ],
    highlight: true,
  },
  {
    id: "spoon-110-packed",
    name: "Individual Packed Spoon 110mm",
    slug: "individual-packed-110mm-spoon",
    category: "Spoons",
    length: "110mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Individually OPP-sleeved 110mm birchwood spoon. Hygienically sealed for premium food service, airline meal trays, and hotel room service.",
    applications: ["Airlines", "Hotels", "Healthcare", "Premium catering"],
    isIndividuallyPacked: true,
    primaryImage: `${CDN}/products/W3_1.jpg?v=1665051817`,
    galleryImages: [
      `${CDN}/products/W3_1.jpg?v=1665051817`,
      `${CDN}/products/NewProject_8.png?v=1665051817`,
      `${CDN}/products/G42_1_60482dac-c2a5-4be5-af8d-4eb538db9224.jpg?v=1665051817`,
    ],
  },

  // ── KNIVES ─────────────────────────────────────────────────────────────────
  {
    id: "knife-140",
    name: "Wooden Knife 140mm",
    slug: "wooden-knife-140mm",
    category: "Knives",
    length: "140mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Compact 140mm birchwood knife for airline meals, takeaway boxes, and travel catering where a smaller profile is preferred.",
    applications: ["Airlines", "Takeaway", "Travel catering", "Cafeterias"],
    primaryImage: `${CDN}/products/W1_1.jpg?v=1665052308`,
    galleryImages: [
      `${CDN}/products/W1_1.jpg?v=1665052308`,
      `${CDN}/products/NewProject_10.png?v=1665052308`,
      `${CDN}/products/G54_1.jpg?v=1665052308`,
    ],
  },
  {
    id: "knife-165",
    name: "Wooden Knife 165mm",
    slug: "woodenknife165mm",
    category: "Knives",
    length: "165mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Full-size 165mm birchwood knife for restaurants, hospitality, and catering. Rigid enough for firm foods while remaining 100% biodegradable.",
    applications: ["Restaurants", "Hotels", "Food service", "Catering"],
    primaryImage: `${CDN}/products/W1_1_beb99461-f1f0-41b4-bf81-20b902898748.jpg`,
    galleryImages: [
      `${CDN}/products/W1_1_beb99461-f1f0-41b4-bf81-20b902898748.jpg`,
      `${CDN}/products/NewProject_10_ad844645-1fd5-4387-84e8-da5b80d56a4b.png`,
      `${CDN}/products/G54_1_0af0e0cd-742b-43e0-b52d-a098954c6df1.jpg`,
    ],
    highlight: true,
  },

  // ── SPORKS ─────────────────────────────────────────────────────────────────
  {
    id: "spork-140",
    name: "Wooden Spork 140mm",
    slug: "wooden-spork140mm",
    category: "Sporks",
    length: "140mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Compact 140mm spork — spoon and fork combined — for airline meal trays and single-item packaging. Reduces SKUs for operators.",
    applications: ["Airlines", "Travel catering", "Fast casual", "Takeaway"],
    primaryImage: `${CDN}/products/W9_1.png?v=1662714451`,
    galleryImages: [`${CDN}/products/W9_1.png?v=1662714451`],
    highlight: true,
  },
  {
    id: "spork-160",
    name: "Wooden Spork 160mm",
    slug: "wooden-spork-160mm",
    category: "Sporks",
    length: "160mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Full-size 160mm spork for restaurants and food delivery concepts looking to reduce their cutlery SKU footprint without compromising usability.",
    applications: ["Restaurants", "Food delivery", "Catering", "Institutions"],
    primaryImage: `${CDN}/products/W9_1_2b4bd9de-74ff-476c-986f-c81e43cb8ec8.png`,
    galleryImages: [
      `${CDN}/products/W9_1_2b4bd9de-74ff-476c-986f-c81e43cb8ec8.png`,
    ],
  },

  // ── STIRRERS ───────────────────────────────────────────────────────────────
  {
    id: "stirrer-110",
    name: "Wooden Stirrer 110mm",
    slug: "wooden-stirrer-190mm",
    category: "Stirrers",
    length: "110mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Compact 110mm coffee stirrer for espresso bars, office coffee stations, and compact beverage service. High-volume carton of 50,000 units.",
    applications: ["Espresso bars", "Offices", "Compact cafés", "Events"],
    primaryImage: `${CDN}/products/W20.png?v=1662714572`,
    galleryImages: [`${CDN}/products/W20.png?v=1662714572`],
  },
  {
    id: "stirrer-140",
    name: "Wooden Stirrer 140mm",
    slug: "wooden-stirrer140mm",
    category: "Stirrers",
    length: "140mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Standard 140mm coffee stirrer — the most widely used size for specialty coffee, café chains, and quick-service restaurants globally.",
    applications: ["Coffee chains", "QSR", "Hotels", "Catering"],
    primaryImage: `${CDN}/products/W20_f40b8f4a-3ebe-4145-b013-43d53ebb9a1b.png`,
    galleryImages: [
      `${CDN}/products/W20_f40b8f4a-3ebe-4145-b013-43d53ebb9a1b.png`,
    ],
    highlight: true,
  },
  {
    id: "stirrer-160",
    name: "Wooden Stirrer 160mm",
    slug: "wooden-stirrer-110mm",
    category: "Stirrers",
    length: "160mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Long 160mm stirrer for tall cups, cold brew, and specialty beverages. Perfect for hospitality groups and premium coffee service.",
    applications: ["Specialty coffee", "Cold brew", "Hotels", "Premium cafés"],
    primaryImage: `${CDN}/products/W20_1e981daa-2dc8-4741-947b-bfe64cddb1ce.png`,
    galleryImages: [
      `${CDN}/products/W20_1e981daa-2dc8-4741-947b-bfe64cddb1ce.png`,
    ],
  },

  // ── SCOOPS ─────────────────────────────────────────────────────────────────
  {
    id: "scoop-95",
    name: "Wooden Scoop 95mm",
    slug: "wooden-scoop-95",
    category: "Scoops",
    length: "95mm",
    material: "FSC Birchwood",
    finish: "Natural smooth",
    certifications: ["FSC®", "FDA CFR 21", "EU 10/2011"],
    pcsPerBag: 100,
    bagsPerCarton: 100,
    pcsPerCarton: 10000,
    moq: "10,000 pcs",
    shortDescription:
      "Compact 95mm birchwood scoop for ice cream, gelato, and dry goods sampling. Robust bowl-shaped design for portion control.",
    applications: ["Ice cream", "Gelato", "Sampling", "Dry goods"],
    primaryImage: `${CDN}/products/W43.png?v=1662714289`,
    galleryImages: [`${CDN}/products/W43.png?v=1662714289`],
  },

  // ── SKEWERS ────────────────────────────────────────────────────────────────
  {
    id: "skewer-7cm",
    name: "Gun Skewer 7cm",
    slug: "gun-skewers-7cm",
    category: "Skewers",
    length: "70mm",
    material: "Birchwood",
    finish: "Natural",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 200,
    bagsPerCarton: 100,
    pcsPerCarton: 20000,
    moq: "20,000 pcs",
    shortDescription:
      "Compact 7cm gun skewer for canapés, appetizers, and mini-bite presentation. Signature gun-tip shape for professional food styling.",
    applications: ["Canapés", "Appetizers", "Events", "Banqueting"],
    primaryImage: `${CDN}/products/W26_1_105630ca-3689-4bea-8946-706190417455.jpg?v=1664946421`,
    galleryImages: [
      `${CDN}/products/W26_1_105630ca-3689-4bea-8946-706190417455.jpg?v=1664946421`,
    ],
  },
  {
    id: "skewer-10cm",
    name: "Gun Skewer 10cm",
    slug: "gun-skewers-10cm",
    category: "Skewers",
    length: "100mm",
    material: "Birchwood",
    finish: "Natural",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 200,
    bagsPerCarton: 100,
    pcsPerCarton: 20000,
    moq: "20,000 pcs",
    shortDescription:
      "Standard 10cm gun skewer for kebabs, brochettes, and grilled street food. Ideal for food courts, events, and QSR grill stations.",
    applications: ["Kebabs", "Street food", "Food courts", "Events"],
    primaryImage: `${CDN}/products/W26_1_ab0c6646-1d0d-4a90-8f4f-ca4e6d0d1639.jpg?v=1664946360`,
    galleryImages: [
      `${CDN}/products/W26_1_ab0c6646-1d0d-4a90-8f4f-ca4e6d0d1639.jpg?v=1664946360`,
      `${CDN}/products/G19_ad4bdb4d-80cb-4edd-920b-5f395d8d443e.jpg`,
    ],
    highlight: true,
  },
  {
    id: "skewer-15cm",
    name: "Gun Skewer 15cm",
    slug: "gun-skewers-15cm",
    category: "Skewers",
    length: "150mm",
    material: "Birchwood",
    finish: "Natural",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 200,
    bagsPerCarton: 100,
    pcsPerCarton: 20000,
    moq: "20,000 pcs",
    shortDescription:
      "Mid-size 15cm gun skewer for satay, yakitori, and grill platters. The most popular skewer size for hospitality and banqueting worldwide.",
    applications: ["Satay", "Yakitori", "Grill", "Hospitality"],
    primaryImage: `${CDN}/products/W26_1_b883d15b-dfbf-46ca-b101-9a413464dfd3.jpg`,
    galleryImages: [
      `${CDN}/products/W26_1_b883d15b-dfbf-46ca-b101-9a413464dfd3.jpg`,
    ],
  },
  {
    id: "skewer-21cm",
    name: "Gun Skewer 21cm",
    slug: "gun-skewers-21cm",
    category: "Skewers",
    length: "210mm",
    material: "Birchwood",
    finish: "Natural",
    certifications: ["FSC®", "FDA CFR 21"],
    pcsPerBag: 200,
    bagsPerCarton: 100,
    pcsPerCarton: 20000,
    moq: "20,000 pcs",
    shortDescription:
      "Long 21cm gun skewer for grilled meats, BBQ, and churrasco-style service. Robust enough for heavy proteins on professional grills.",
    applications: ["BBQ", "Churrasco", "Grill meats", "Street BBQ"],
    primaryImage: `${CDN}/products/W26_1.jpg?v=1664945885`,
    galleryImages: [`${CDN}/products/W26_1.jpg?v=1664945885`],
  },

  // ── SETS ───────────────────────────────────────────────────────────────────
  {
    id: "set-fork-knife-tissue",
    name: "Set of 3 — Fork, Knife & Tissue",
    slug: "set-of-3-items-fork-knife-and-tisue",
    category: "Sets",
    length: "160mm",
    material: "FSC Birchwood + Kraft Paper",
    finish: "OPP sleeve",
    certifications: ["FSC®", "FDA CFR 21", "BPI Compostable", "BSCI Audited"],
    pcsPerBag: 50,
    bagsPerCarton: 10,
    pcsPerCarton: 500,
    moq: "500 sets",
    shortDescription:
      "Complete 3-piece cutlery set — birchwood fork, knife, and tissue — in a single OPP sleeve. Ready for airline trays, food delivery bags, and hospitality amenity packs.",
    applications: ["Airlines", "Food delivery", "Hotels", "Premium takeaway"],
    primaryImage: `${CDN}/products/G52_1.jpg?v=1664961427`,
    galleryImages: [`${CDN}/products/G52_1.jpg?v=1664961427`],
    highlight: true,
  },

  // ── PAPER STRAWS ───────────────────────────────────────────────────────────
  {
    id: "straw-6mm",
    name: "Paper Straws 6mm",
    slug: "6mm-paper-straws",
    category: "Paper Straws",
    length: "197mm",
    material: "Food-grade kraft paper",
    finish: "Natural uncoated",
    certifications: ["FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Standard 6mm diameter paper straw for cold beverages, juices, and smoothies. Holds integrity for up to 3 hours in liquid — suitable for hospitality.",
    applications: ["Juice bars", "Cafés", "Hotels", "Restaurants"],
    primaryImage: `${CDN}/products/W40_1.jpg?v=1665051402`,
    galleryImages: [`${CDN}/products/W40_1.jpg?v=1665051402`],
  },
  {
    id: "straw-8mm",
    name: "Paper Straws 8mm",
    slug: "8-mm-paper-straws",
    category: "Paper Straws",
    length: "197mm",
    material: "Food-grade kraft paper",
    finish: "Natural uncoated",
    certifications: ["FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Wide 8mm paper straw for thick smoothies, milkshakes, and bubble tea. Reinforced multi-layer construction for high-viscosity beverages.",
    applications: ["Bubble tea", "Milkshakes", "Smoothies", "QSR"],
    primaryImage: `${CDN}/products/W38_1.jpg?v=1665051710`,
    galleryImages: [`${CDN}/products/W38_1.jpg?v=1665051710`],
    highlight: true,
  },
  {
    id: "straw-10mm",
    name: "Paper Straws 10mm",
    slug: "10mm-paper-straws",
    category: "Paper Straws",
    length: "197mm",
    material: "Food-grade kraft paper",
    finish: "Natural uncoated",
    certifications: ["FDA CFR 21", "EU 10/2011", "BPI Compostable"],
    pcsPerBag: 500,
    bagsPerCarton: 100,
    pcsPerCarton: 50000,
    moq: "50,000 pcs",
    shortDescription:
      "Extra-wide 10mm paper straw for large-format cold beverages, slushies, and fruit chunks. Preferred by premium beverage concepts.",
    applications: ["Slushies", "Premium beverages", "Fruit drinks", "Bars"],
    primaryImage: `${CDN}/products/W40_1.jpg?v=1665051402`,
    galleryImages: [`${CDN}/products/W40_1.jpg?v=1665051402`],
  },
];

// ── Product Families ────────────────────────────────────────────────────────

export const PRODUCT_FAMILIES: ProductFamily[] = [
  {
    id: "forks",
    category: "Forks",
    headline: "Birchwood Forks",
    description:
      "Precision-stamped from FSC-certified birchwood. Available in 140mm and 160mm profiles with bulk or individual OPP sleeving options. 10,000 units per export carton.",
    applications: ["Airlines", "Restaurants", "Hotels", "Catering"],
    moqRange: "10,000 pcs",
    skuCount: 3,
    heroImage: `${CDN}/collections/C4_4.png?v=1662374267`,
    sectionId: "forks",
  },
  {
    id: "spoons",
    category: "Spoons",
    headline: "Birchwood Spoons",
    description:
      "Four sizes: 110mm, 140mm, and 160mm bulk — plus individually sleeved 110mm for premium service. Heat-resistant for hot food and soup service.",
    applications: ["Dairy", "Cafés", "Hotels", "Food service"],
    moqRange: "10,000 pcs",
    skuCount: 4,
    heroImage: `${CDN}/collections/C5.png?v=1662374075`,
    sectionId: "spoons",
  },
  {
    id: "knives",
    category: "Knives",
    headline: "Birchwood Knives",
    description:
      "140mm compact and 165mm full-size profiles. Rigid enough for firm foods while remaining 100% biodegradable and compostable. 10,000 units per carton.",
    applications: ["Restaurants", "Airlines", "Catering", "Hotels"],
    moqRange: "10,000 pcs",
    skuCount: 2,
    heroImage: `${CDN}/collections/C3_3.png?v=1662374387`,
    sectionId: "knives",
  },
  {
    id: "sporks",
    category: "Sporks",
    headline: "Birchwood Sporks",
    description:
      "Spoon-fork hybrid in 140mm and 160mm. Reduces cutlery SKUs for operators while maintaining full dining functionality. A global airline favourite.",
    applications: ["Airlines", "Travel catering", "Fast casual", "Takeaway"],
    moqRange: "10,000 pcs",
    skuCount: 2,
    heroImage: `${CDN}/collections/C2_2.png?v=1663670170`,
    sectionId: "sporks",
  },
  {
    id: "stirrers",
    category: "Stirrers",
    headline: "Coffee Stirrers",
    description:
      "110mm, 140mm, and 160mm birchwood stirrers. 50,000 units per carton. The highest-volume SKU — ideal for coffee chains and large hospitality groups.",
    applications: ["Coffee chains", "Hotels", "Offices", "Catering"],
    moqRange: "50,000 pcs",
    skuCount: 3,
    heroImage: `${CDN}/collections/Untitled_design_61.png?v=1662375316`,
    sectionId: "stirrers",
  },
  {
    id: "skewers",
    category: "Skewers",
    headline: "Gun Skewers",
    description:
      "7cm, 10cm, 15cm, and 21cm birchwood skewers with signature gun-tip profile. 20,000 units per carton. For grill, street food, and banqueting worldwide.",
    applications: ["Grill", "BBQ", "Street food", "Banqueting"],
    moqRange: "20,000 pcs",
    skuCount: 4,
    heroImage: `${CDN}/collections/Untitled_design_58.png?v=1663670146`,
    sectionId: "skewers",
  },
  {
    id: "sets",
    category: "Sets",
    headline: "Cutlery Sets",
    description:
      "Pre-packed fork, knife, and tissue in OPP sleeves. 500 sets per carton. Ready for airline trays, food delivery bags, and hotel amenity packs.",
    applications: ["Airlines", "Food delivery", "Hotels", "Premium takeaway"],
    moqRange: "500 sets",
    skuCount: 1,
    heroImage: `${CDN}/collections/C6_4.png?v=1662375675`,
    sectionId: "sets",
  },
  {
    id: "straws",
    category: "Paper Straws",
    headline: "Paper Straws",
    description:
      "6mm, 8mm, and 10mm food-grade kraft paper straws. 50,000 units per carton. Holds integrity for 3+ hours. FDA, EU, and BPI Compostable certified.",
    applications: ["Juice bars", "Cafés", "QSR", "Bubble tea"],
    moqRange: "50,000 pcs",
    skuCount: 3,
    heroImage: `${CDN}/products/W40_1.jpg?v=1665051402`,
    sectionId: "straws",
  },
];

// ── Helper utilities ────────────────────────────────────────────────────────

export function getProductsByCategory(category: ProductCategory): BioProduct[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductById(id: string): BioProduct | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getFamilyByCategory(category: ProductCategory): ProductFamily | undefined {
  return PRODUCT_FAMILIES.find((f) => f.category === category);
}

export const CERTIFICATIONS_LIST = [
  {
    id: "fsc",
    name: "FSC® 100%",
    fullName: "Forest Stewardship Council",
    description: "Chain of custody certified. All birchwood sourced from responsibly managed forests.",
    scope: "All birchwood products",
  },
  {
    id: "iso",
    name: "ISO 9001:2015",
    fullName: "Quality Management System",
    description: "Certified quality management across all production processes and export operations.",
    scope: "Manufacturing operations",
  },
  {
    id: "fda",
    name: "FDA CFR 21",
    fullName: "US Food & Drug Administration",
    description: "Food-contact safe for the United States market. Compliant with FDA food contact regulations.",
    scope: "US market exports",
  },
  {
    id: "bpi",
    name: "BPI Compostable",
    fullName: "Biodegradable Products Institute",
    description: "Independently verified industrial compostability. Certified for North American composting standards.",
    scope: "Birchwood cutlery range",
  },
  {
    id: "bsci",
    name: "BSCI Audited",
    fullName: "Business Social Compliance Initiative",
    description: "Independently audited for ethical labor practices, workplace safety, and social compliance.",
    scope: "Manufacturing facility",
  },
  {
    id: "eu",
    name: "EU 10/2011",
    fullName: "EU Food Contact Materials",
    description: "Certified food-contact safe for the European market under EU Regulation 10/2011.",
    scope: "European market exports",
  },
];
