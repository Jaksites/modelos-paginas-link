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
  slides?: BannerSlide[];
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
  icon?: string;
}

export interface DaySchedule {
  open: string; // Ex: "10:00" ou "00:00"
  close: string; // Ex: "19:00" ou "23:59"
  closed?: boolean; // Se for folga/fechado o dia todo
}

export interface BusinessHoursConfig {
  /** Se false ou omitido, o catálogo fica aberto 24h */
  enabled?: boolean;
  /** Mensagem customizada opcional para quando estiver fechado */
  closedMessage?: string;
  /** Escala semanal */
  schedule?: {
    domingo?: DaySchedule;
    segunda?: DaySchedule;
    terca?: DaySchedule;
    quarta?: DaySchedule;
    quinta?: DaySchedule;
    sexta?: DaySchedule;
    sabado?: DaySchedule;
  };
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
  paymentMethods?: string[];
  trustBadges?: TrustBadge[];
  contact?: BusinessContact;
  socials?: SocialLinks;
  businessHours?: BusinessHoursConfig;
}
