// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // 👇 Use 'static' com o adapter da Cloudflare, ou mude para 'hybrid' se sua versão do Astro for v4
  output: "static",
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
});
