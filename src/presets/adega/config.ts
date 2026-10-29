export const adegaConfig = {
  name: "RESERVA & VINHA",
  tagline: "Vinhos Selecionados, Espumantes e Queijos Artesanais",
  whatsappNumber: "559999999999",
  shippingNotice:
    "Bebidas enviadas geladas com entrega expressa em até 60 minutos",
  theme: {
    primary: "#881337", // Vinho Bordô encorpado (Rose 900)
    primaryHover: "#4c0519",
    accent: "#ffe4e6",
    accentText: "#9f1239",
    dark: "#1e0b12",
    surface: "#fffafb",
  },
  paymentMethods: ["pix", "credit_card", "debit_card", "money"],
  trustBadges: [
    {
      title: "Chega Gelado",
      description: "Pronto para abrir e brindar imediatamente",
      icon: "sparkles",
    },
    {
      title: "Curadoria do Sommelier",
      description: "Rótulos premiados nacionais e importados",
      icon: "award",
    },
  ],
  banner: {
    badge: "Pronto para Beber 🍷",
    title: "Vinhos, espumantes e aperitivos para momentos memoráveis.",
    description:
      "Consulte harmonizações com nosso sommelier via WhatsApp e receba no conforto de casa.",
    images: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1200",
    ],
    autoplayInterval: 5000,
  },
  contact: {
    address: "Rua dos Pinheiros, 780 - Pinheiros, São Paulo - SP",
    businessHours: "Terça a Sábado: 14h às 23h30 | Domingo: 12h às 19h",
    email: "sommelier@reservaevinha.com.br",
    cnpj: "67.890.123/0001-45",
  },
  socials: {
    instagram: "https://instagram.com/reservaevinha",
    facebook: "https://facebook.com/reservaevinha",
  },
  businessHours: {
    enabled: true,
    closedMessage:
      "Adega fechada no momento. Atendimento de Terça a Sábado a partir das 14h.",
    schedule: {
      segunda: { open: "00:00", close: "00:00", closed: true },
      terca: { open: "14:00", close: "23:00" },
      quarta: { open: "14:00", close: "23:00" },
      quinta: { open: "14:00", close: "23:30" },
      sexta: { open: "13:00", close: "00:30" },
      sabado: { open: "12:00", close: "00:30" },
      domingo: { open: "12:00", close: "19:00" },
    },
  },
};
