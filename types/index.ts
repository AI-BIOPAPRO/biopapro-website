export interface Product {
  id: string;
  name: string;
  category: "cutlery" | "stirrers" | "sticks" | "skewers";
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

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  validFrom: string;
  description: string;
  iconName: string;
}

export interface ManufacturingStep {
  step: number;
  title: string;
  phase: string;
  description: string;
  icon: string;
}

export interface SustainabilityMetrics {
  treesPlantedDailyEquivalent: number;
  landfillCubicMetersAvoidedPerThousand: number;
  carbonSavedKgPerThousand: number;
  oceanMicroplasticsPreventedUnitsPerThousand: number;
  waterLitersPreservedPerThousand: number;
}

export interface NavLink {
  label: string;
  href: string;
}
