// src/utils/keystatic.ts
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import {
  siteConfig as defaultSiteConfig,
  products as defaultProducts,
} from "../config/active";
import type { Product, SiteConfig } from "../types";

// Declaração segura para o ambiente de compilação
declare const process: { cwd: () => string };

// Cria o leitor do Keystatic
export const reader = createReader(process.cwd(), keystaticConfig);

export async function getCatalogData(): Promise<{
  config: SiteConfig;
  products: Product[];
}> {
  // Converte a configuração base para SiteConfig de forma segura
  const baseConfig = defaultSiteConfig as unknown as SiteConfig;

  try {
    // 1. Lê os produtos cadastrados no painel
    const keystaticProducts = await reader.collections.products.all();

    // 2. Lê as configurações da loja cadastradas no painel
    const keystaticSettings = await reader.singletons.storeSettings.read();

    // 3. Mapeia e garante os tipos estritos para Product[]
    const products: Product[] =
      keystaticProducts.length > 0
        ? keystaticProducts.map((item, index) => {
            const entry = item.entry;
            const imagePath = entry.image || defaultProducts[0]?.image || "";

            // Mapeia variações garantindo valores válidos
            const variations = (entry.variations || []).map((v) => ({
              name: v.name || "Padrão",
              price: v.price ?? entry.price,
              image: imagePath,
            }));

            const sizes =
              variations.length > 0
                ? variations.map((v) => v.name)
                : ["Padrão"];

            return {
              id: index + 1,
              name: entry.name || "Produto sem nome",
              category: entry.category || "Geral",
              price: Number(entry.price) || 0,
              oldPrice: entry.oldPrice ? Number(entry.oldPrice) : undefined,
              badge: entry.badge || undefined,
              image: imagePath,
              sizes,
              variations,
            };
          })
        : defaultProducts;

    // 4. Monta o SiteConfig mesclando o painel com a configuração base
    const config: SiteConfig = {
      ...baseConfig,
      name: keystaticSettings?.name || baseConfig.name,
      tagline: keystaticSettings?.tagline || baseConfig.tagline,
      whatsappNumber:
        keystaticSettings?.whatsappNumber || baseConfig.whatsappNumber,
      shippingNotice:
        keystaticSettings?.shippingNotice || baseConfig.shippingNotice,

      // Alinha com o padrão socials
      socials: {
        ...baseConfig.socials,
        instagram:
          keystaticSettings?.instagramUrl || baseConfig.socials?.instagram,
        facebook:
          keystaticSettings?.facebookUrl || baseConfig.socials?.facebook,
      },

      // Alinha com o padrão de horários de funcionamento
      businessHours: baseConfig.businessHours
        ? {
            ...baseConfig.businessHours,
            enabled:
              keystaticSettings?.isStoreOpen24h !== undefined
                ? !keystaticSettings.isStoreOpen24h
                : baseConfig.businessHours.enabled,
            closedMessage:
              keystaticSettings?.closedMessage ||
              baseConfig.businessHours.closedMessage,
          }
        : undefined,
    };

    return { config, products };
  } catch (error) {
    console.warn(
      "Erro ao carregar dados do Keystatic, usando fallback:",
      error,
    );
    return { config: baseConfig, products: defaultProducts };
  }
}
