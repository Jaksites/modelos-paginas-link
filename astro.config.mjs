// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// Detecta se é o comando de build da Cloudflare
const isBuild = process.env.NODE_ENV === "production";

export default defineConfig({
  output: "static", // 👈 Gera o site estático limpo
  integrations: [
    react(),
    // 👇 Carrega o Keystatic no seu computador, mas desativa no build da nuvem
    ...(isBuild ? [] : [keystatic()]),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
