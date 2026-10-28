// src/scripts/seed.ts
import fs from "fs";
import path from "path";

// 👈 Caminho corrigido para quem está em src/scripts/
import { siteConfig, products } from "../config/active";

// Função para gerar o slug do arquivo sem acentos ou caracteres especiais
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9]+/g, "-") // troca espaços/pontos por traço
    .replace(/(^-|-$)+/g, ""); // remove traços nas pontas
}

const contentDir = path.resolve(process.cwd(), "src/content");
const productsDir = path.join(contentDir, "products");
const settingsDir = path.join(contentDir, "settings");

// Garante que as pastas do Keystatic existam
fs.mkdirSync(productsDir, { recursive: true });
fs.mkdirSync(settingsDir, { recursive: true });

// Limpa produtos anteriores para não misturar nichos (ex: pizzas com joias)
const oldFiles = fs.readdirSync(productsDir);
for (const file of oldFiles) {
  if (file.endsWith(".json")) {
    fs.unlinkSync(path.join(productsDir, file));
  }
}

console.log("🍕 Gerando dados do Keystatic a partir do preset ativo...");

// 1. Gera as Configurações da Loja (src/content/settings/store.json)
const storeData = {
  name: siteConfig.name || "",
  tagline: siteConfig.tagline || "",
  whatsappNumber: siteConfig.whatsappNumber || "",
  shippingNotice: siteConfig.shippingNotice || "",
  isStoreOpen24h: !siteConfig.businessHours?.enabled,
  closedMessage: siteConfig.businessHours?.closedMessage || "",
  instagramUrl:
    siteConfig.socials?.instagram || (siteConfig as any).instagramUrl || "",
  facebookUrl: siteConfig.socials?.facebook || "",
};

fs.writeFileSync(
  path.join(settingsDir, "store.json"),
  JSON.stringify(storeData, null, 2),
  "utf-8",
);
console.log(
  "✅ Configurações da loja salvas em src/content/settings/store.json",
);

// 2. Gera cada Produto (*.json em src/content/products/)
for (const p of products) {
  const slug = slugify(p.name);

  // Mapeia tamanhos e variações
  const variations =
    p.variations && p.variations.length > 0
      ? p.variations.map((v: any) => ({
          name: v.name,
          price: v.price ?? p.price,
        }))
      : (p.sizes || []).map((s: string) => ({ name: s, price: p.price }));

  const productData = {
    name: p.name,
    category: p.category,
    price: p.price,
    oldPrice: p.oldPrice ?? null,
    badge: p.badge ?? null,
    image: p.image || null,
    variations,
  };

  fs.writeFileSync(
    path.join(productsDir, `${slug}.json`),
    JSON.stringify(productData, null, 2),
    "utf-8",
  );
  console.log(`📦 Pizza cadastrada: ${slug}.json`);
}

console.log(
  "\n🎉 Sucesso! Todos os dados da pizzaria foram importados para o Keystatic.",
);
