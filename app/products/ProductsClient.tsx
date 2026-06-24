"use client";

import { useState }           from "react";
import ProductsHero           from "@/components/products/ProductsHero";
import ProductFamilies        from "@/components/products/ProductFamilies";
import ProductCatalogGrid     from "@/components/products/ProductCatalogGrid";
import PackagingExport        from "@/components/products/PackagingExport";
import ProcurementTable       from "@/components/products/ProcurementTable";
import ProcurementResources   from "@/components/products/ProcurementResources";
import ProductCertifications  from "@/components/products/ProductCertifications";
import ExportQuoteCTA         from "@/components/products/ExportQuoteCTA";

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  function handleCategorySelect(category: string) {
    setActiveCategory(category);
    // Smooth scroll to catalog section
    const el = document.getElementById("catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <main>
      {/* S1 — Hero: headline, stats, cert badges, category quick-jump */}
      {/* SpoonPOC is now mounted inside ProductsHero's own stacking context */}
      <ProductsHero />

      {/* S2 — Product Families: 8 editorial category cards */}
      <ProductFamilies onCategorySelect={handleCategorySelect} />

      {/* S3 — Catalog Grid: filterable 4-col grid + product detail drawer */}
      <ProductCatalogGrid
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* S4 — Packaging & Export: bulk/sleeved/OEM specs + container loading table (dark) */}
      <PackagingExport />

      {/* S5 — Procurement Table: full SKU reference, sortable, filterable */}
      <ProcurementTable />

      {/* S6 — Procurement Resources: catalog PDF, datasheets, certs, compliance */}
      <ProcurementResources />

      {/* S7 — Certifications: FSC, ISO, FDA, BPI, BSCI, EU (dark) */}
      <ProductCertifications />

      {/* S8 — Export Quote CTA: final persistent dark CTA */}
      <ExportQuoteCTA />
    </main>
  );
}
