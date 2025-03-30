// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://enmed.pages.dev",
  integrations: [react(), sitemap(), partytown(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()],
  },
});
