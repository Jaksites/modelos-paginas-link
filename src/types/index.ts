// src/types/index.ts

export interface ProductVariation {
  name: string; // Ex: "Pequena (4 fatias)" ou "Azul"
  price?: number; // Preço desta variação (se omitido, usa o preço base do produto)
  oldPrice?: number; // Preço antigo desta variação
  image?: string; // Foto desta variação (se omitido, usa a foto base do produto)
  description?: string; // Descrição específica (opcional)
}

export interface Product {
  id: number | string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  description?: string;
  variations?: ProductVariation[]; // 👈 Nova lista de variações ricas
  sizes?: string[]; // Mantido para compatibilidade simples
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  unitPrice: number; // 👈 Preço real da variação escolhida
  selectedImage?: string; // 👈 Foto real da variação escolhida
  quantity: number;
}

export interface BannerSlide {
  image: string;
  badge?: string;
  title?: string;
  description?: string;
}

export interface SiteTheme {
  primary: string; // Cor de destaque (botões, badges)
  primaryHover: string; // Hover dos botões
  accent: string; // Fundos sutis / chips ativos
  accentText: string; // Textos de destaque
  dark: string; // Cor de textos fortes e botões escuros
  surface: string; // Cor de fundo geral da página
}

export interface BusinessContact {
  address?: string;
  businessHours?: string;
  email?: string;
  cnpj?: string;
}

export interface SocialLinks {
  instagram?: string;
  whatsapp?: string;
  facebook?: string;
  tiktok?: string;
}

// Opções de pagamento para não exibir "Boleto" em pizzarias, por exemplo
export type PaymentMethod =
  | "pix"
  | "credit_card"
  | "debit_card"
  | "money"
  | "boleto";

export interface TrustBadge {
  title: string;
  description: string;
  icon?: "shield" | "truck" | "clock" | "sparkles";
}

export interface SiteConfig {
  name: string;
  tagline: string;
  logoUrl?: string;
  whatsappNumber: string;
  shippingNotice?: string;
  theme: SiteTheme;
  banner: {
    badge?: string;
    title?: string;
    description?: string;
    images: string[];
    autoplayInterval?: number;
  };
  paymentMethods: PaymentMethod[];
  trustBadges?: TrustBadge[];
  contact?: BusinessContact;
  socials?: SocialLinks;
}
