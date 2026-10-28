// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// Detecta se está gerando o build para produção
const isProd = process.env.NODE_ENV === "production" || import.meta.env.PROD;

export default defineConfig({
  output: "static", // 👈 Site 100% estático para a Cloudflare Pages
  integrations: [
    react(),
    // 👇 Carrega o painel do Keystatic no seu localhost, mas não trava o build na Cloudflare
    ...(isProd ? [] : [keystatic()]),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
