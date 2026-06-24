"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";

export default defineConfig({
  name: "biopapro",
  title: "Biopapro CMS",
  projectId: "9h45iw4q",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Blog Posts")
              .child(
                S.documentList()
                  .title("Blog Posts")
                  .filter('_type == "post"')
                  .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
