export const pizzariaConfig = {
  name: "FORNO & BASÍLICO",
  tagline: "Pizzaria Artesanal no Forno a Lenha",
  whatsappNumber: "5511999999999",
  shippingNotice: "Entregas expressas em até 45 minutos no seu bairro",
  theme: {
    primary: "#ea580c", // Laranja quente
    primaryHover: "#c2410c",
    accent: "#ffedd5",
    accentText: "#7c2d12",
    dark: "#1c1917",
    surface: "#fafaf9",
  },
  paymentMethods: ["pix", "credit_card", "debit_card", "money"], // Sem boleto!
  trustBadges: [
    {
      title: "Entrega Rápida",
      description: "Embalagem térmica exclusiva",
      icon: "clock",
    },
    {
      title: "Forno a Lenha",
      description: "Massa artesanal italiana",
      icon: "sparkles",
    },
  ],
  banner: {
    badge: "Forno a Lenha 🔥",
    title: "Massa fermentada 48h com ingredientes importados.",
    description:
      "Escolha seus sabores favoritos e faça seu pedido direto na cozinha.",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1200",
    ],
    autoplayInterval: 4500,
  },
  contact: {
    address: "Av. Paulista, 1500 - Bela Vista, São Paulo - SP",
    businessHours: "Terça a Domingo: 18h às 23h30",
    email: "contato@fornobasilico.com.br",
    cnpj: "00.123.456/0001-78",
  },
  socials: {
    instagram: "https://instagram.com/fornobasilico",
    facebook: "https://facebook.com/fornobasilico",
  },
  businessHours: {
    enabled: false,
  },
};
