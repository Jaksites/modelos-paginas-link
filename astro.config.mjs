// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "static", // 👈 Mantém o site rápido e pré-renderizado
  adapter: cloudflare({
    imageService: "passthrough",
    routes: {
      strategy: "auto", // 👈 Deixa a Cloudflare mapear automaticamente o que é estático e o que é API
    },
  }),
  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
});
