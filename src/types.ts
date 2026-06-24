export interface Product {
  id: string;
  name: string;
  category: "cutlery" | "stirrers" | "sticks" | "skewers" | "custom";
  tagline: string;
  description: string;
  material: string;
  sizes: string[];
  thickness: string;
  moistureContent: string;
  certificationIds: string[];
  features: string[];
  b2bMOQ: string;
  packaging: string;
  densityClass: string;
  imageUrl: string;
}

export interface B2BQuoteRequest {
  companyName: string;
  email: string;
  contactPerson: string;
  volumeNeeded: string;
  productCategory: string;
  customizationDetails: string;
  embossLogo: boolean;
}

export interface SustainabilityStats {
  weeklyMeals: number;
  plasticCutleryTonsSaved: number;
  carbonOffsetKg: number;
  treesEquivalent: number;
  oceanPlasticAvertedKg: number;
}
