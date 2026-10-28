// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

export default defineConfig({
  output: "static", // 👈 Catálogo estático puro
  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
});
