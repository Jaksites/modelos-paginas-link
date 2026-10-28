import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

export default defineConfig({
  output: "static", // Mantém o site estático e rápido
  integrations: [
    react(),
    keystatic(), // 👈 Deixe direto aqui para gerar as páginas do painel na Cloudflare!
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
