import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://example.com";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base: base === "/" ? undefined : base,
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7
    })
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  }
});
