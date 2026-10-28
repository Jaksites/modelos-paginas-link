// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static", // 👈 Alterado de "hybrid" para "static"
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
});
