export const modaConfig = {
  name: "ATELIER URBANO",
  tagline: "Moda Contemporânea e Minimalista",
  whatsappNumber: "5511966665555",
  shippingNotice:
    "Frete grátis para todo o Brasil acima de R$ 299 e 1ª troca sem custo",
  theme: {
    primary: "#18181b", // Preto/Grafite minimalista (Zinc 900)
    primaryHover: "#27272a",
    accent: "#f4f4f5",
    accentText: "#09090b",
    dark: "#09090b",
    surface: "#ffffff",
  },
  paymentMethods: ["pix", "credit_card", "bank_slip"],
  trustBadges: [
    {
      title: "Primeira Troca Grátis",
      description: "Até 30 dias após o recebimento",
      icon: "refresh-cw",
    },
    {
      title: "Tecidos Sustentáveis",
      description: "100% algodão orgânico e linho puro",
      icon: "sparkles",
    },
  ],
  banner: {
    badge: "Coleção Essenciais 🧥",
    title: "Cortes precisos e atemporais para o seu dia a dia.",
    description:
      "Descubra peças versáteis que equilibram conforto, sofisticação e alta durabilidade.",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200",
    ],
    autoplayInterval: 5000,
  },
  contact: {
    address: "Al. Lorena, 1200 - Cerqueira César, São Paulo - SP",
    businessHours: "Segunda a Sábado: 10h às 20h | Domingo: 13h às 19h",
    email: "suporte@atelierurbano.com.br",
    cnpj: "34.567.890/0001-12",
  },
  socials: {
    instagram: "https://instagram.com/atelierurbano",
    facebook: "https://facebook.com/atelierurbano",
  },
  businessHours: {
    enabled: true,
    closedMessage:
      "Loja física fechada. Compras pelo site são processadas normalmente 24 horas.",
    schedule: {
      segunda: { open: "10:00", close: "20:00" },
      terca: { open: "10:00", close: "20:00" },
      quarta: { open: "10:00", close: "20:00" },
      quinta: { open: "10:00", close: "20:00" },
      sexta: { open: "10:00", close: "20:00" },
      sabado: { open: "10:00", close: "20:00" },
      domingo: { open: "13:00", close: "19:00" },
    },
  },
};
