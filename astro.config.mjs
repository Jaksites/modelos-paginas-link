// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

const isProd = import.meta.env.PROD;
// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: isProd ? cloudflare({ imageService: "passthrough" }) : undefined,
  integrations: [
    react(), // 👈 Essencial para a interface do Keystatic rodar
    keystatic(), // 👈 Ativa a rota /keystatic
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
