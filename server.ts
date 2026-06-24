import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy GoogleGenAI initialization helper
let aiInstance: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiInstance) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiInstance = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiInstance;
}

// B2B Sustainability Consult and Product Recommendation API Route
app.post("/api/consult", async (req, res) => {
  try {
    const { businessName, volume, productInterest, mealType, customLogo } = req.body;

    if (!volume || !productInterest || !mealType) {
      return res.status(400).json({ error: "Missing required consulting configurations" });
    }

    const ai = getGeminiClient();
    const systemPrompt = `You are the lead Sustainable Materials Engineer, Brand Strategist, and B2B Custom Procurement Specialist at Biopapro (https://biopapro.com), the industry leader in premium biodegradable wooden cutlery, stirrers, and coffee accessories.
Your goal is to analyze the user's business profile and provide a highly detailed, professional, and bespoke procurement recommendation report.

Write your response in beautiful, expert, well-structured Markdown. Do not include excessive filler. Focus on:
1. PRODUCT RECOMMENDATIONS: Core product types (forks, spoons, direct stirrers, or custom embossed sticks), specific lengths (e.g., 140mm vs 178mm coffee stirrers, 160mm heavy-duty forks), and packaging options (bulk, individually paper-wrapped, or custom retail sets).
2. LOGISTical FORECAST: Estimated shipping containers required, weight profiles, shelf-life, and storage guidelines (keep in dry, temperate zone, moisture thresholds).
3. SUSTAINABILITY VALUE METRICS: Calculate precise comparative impact vs plastic. E.g., tons of single-use plastic avoided, ocean microplastics averted, landfill footprints offset, and CO2 emissions saved.
4. BRAND EMBOSSING & VALUE PROPOSITION: How they can leverage FSC-certified, smooth-polished birchwood in their branding (custom laser-branding, stamp ink safety, customer loyalty impact).
5. CERTIFICATE VAULT COMPLIANCE: Direct them on which certifications apply to their custom shipment (FSC 100%, ISO 9001, SGS Food Safety/FDA, BPI Compostable).

Maintain an ultra-premium, authoritative, B2B-appropriate, yet deeply inspirational sustainable tone (similar to Patagonia or Tesla). No promotional slop. Keep it concise, high-density, and structured.`;

    const userPrompt = `Generate a B2B Sustainability and Custom Product Specification Report for our enterprise:
- Business/Company Name: ${businessName || "Specialty Enterprise Partner"}
- Weekly Meal Count / Volume Scale: ${volume} meals or beverage units per week
- Target Culinary Style & Meal Types: ${mealType}
- Specific Product Lines of Interest: ${productInterest}
- Custom Branding / Logo Embossing: ${customLogo ? "YES - Custom branded/embossed cutlery needed" : "NO - Standard pristine neutral birchwood"}

Please deliver highly structural calculations, custom box container logistics, and high-impact sustainable value advice.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2,
      },
    });

    const reportText = response.text || "Unable to produce recommendations. Please check specifications.";
    res.json({ report: reportText });
  } catch (err: any) {
    console.error("Gemini Consult API error:", err);
    res.status(500).json({
      error: "We could not generate the automated sustainable report at this time. Please ensure GEMINI_API_KEY is configured in your secrets.",
      detail: err.message,
    });
  }
});

// Main Server Setup function with Vite middleware support
async function run() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Biopapro Server] Running on http://0.0.0.0:${PORT}`);
  });
}

run().catch((err) => {
  console.error("Failed to start Biopapro server:", err);
});
