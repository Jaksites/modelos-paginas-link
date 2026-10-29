export const floriculturaConfig = {
  name: "TERRA & VIOLETA",
  tagline: "Arranjos Florais, Buquês e Botânica Afetiva",
  whatsappNumber: "559999999999",
  shippingNotice:
    "Entregas agendadas no mesmo dia com cartão de dedicatória cortesia",
  theme: {
    primary: "#15803d", // Verde botânico elegante
    primaryHover: "#166534",
    accent: "#dcfce7",
    accentText: "#14532d",
    dark: "#14231b",
    surface: "#fcfdfc",
  },
  paymentMethods: ["pix", "credit_card", "debit_card"],
  trustBadges: [
    {
      title: "Flores do Dia",
      description: "Hastes frescas selecionadas diariamente",
      icon: "sparkles",
    },
    {
      title: "Entrega Cautelosa",
      description: "Transporte em água com suporte especial",
      icon: "truck",
    },
  ],
  banner: {
    badge: "Feito com Amor 🌿",
    title: "Buquês autorais e plantas para transformar o dia de alguém.",
    description:
      "Escolha o modelo, adicione sua mensagem personalizada e entregamos direto ao destinatário.",
    images: [
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1200",
    ],
    autoplayInterval: 4500,
  },
  contact: {
    address: "Rua Harmonia, 320 - Vila Madalena, São Paulo - SP",
    businessHours: "Segunda a Sábado: 08h30 às 18h30 | Domingo: 09h às 13h",
    email: "pedidos@terraevioleta.com.br",
    cnpj: "45.678.901/0001-23",
  },
  socials: {
    instagram: "https://instagram.com/terraevioleta",
    facebook: "https://facebook.com/terraevioleta",
  },
  businessHours: {
    enabled: true,
    closedMessage:
      "Ateliê fechado no momento. Pedidos via WhatsApp serão respondidos a partir das 08h30.",
    schedule: {
      segunda: { open: "08:30", close: "18:30" },
      terca: { open: "08:30", close: "18:30" },
      quarta: { open: "08:30", close: "18:30" },
      quinta: { open: "08:30", close: "18:30" },
      sexta: { open: "08:30", close: "19:00" },
      sabado: { open: "08:30", close: "18:00" },
      domingo: { open: "09:00", close: "13:00" },
    },
  },
};
