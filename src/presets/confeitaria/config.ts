export const confeitariaConfig = {
  name: "DULCE & PETIT",
  tagline: "Confeitaria Artesanal e Doces Finos",
  whatsappNumber: "5511977776666",
  shippingNotice:
    "Bolos e doces frescos entregues no mesmo dia para pedidos até às 14h",
  theme: {
    primary: "#db2777", // Rosa framboesa refinado
    primaryHover: "#be185d",
    accent: "#fce7f3",
    accentText: "#831843",
    dark: "#26131d",
    surface: "#fffafc",
  },
  paymentMethods: ["pix", "credit_card", "debit_card", "money"],
  trustBadges: [
    {
      title: "100% Artesanal",
      description: "Chocolate belga e manteiga pura",
      icon: "heart",
    },
    {
      title: "Entrega Delicada",
      description: "Embalagens antivazamento e seguras",
      icon: "gift",
    },
  ],
  banner: {
    badge: "Feito no Dia 🍰",
    title: "Tortas, macarons e bolos com afeto e sabor inesquecível.",
    description:
      "Faça sua encomenda online ou retire seu doce favorito fresquinho em nossa loja.",
    images: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=1200",
    ],
    autoplayInterval: 4500,
  },
  contact: {
    address: "Rua Mourato Coelho, 450 - Pinheiros, São Paulo - SP",
    businessHours: "Terça a Domingo: 09h às 19h",
    email: "encomendas@dulcepetit.com.br",
    cnpj: "23.456.789/0001-01",
  },
  socials: {
    instagram: "https://instagram.com/dulcepetitconfeitaria",
    facebook: "https://facebook.com/dulcepetitconfeitaria",
  },
  businessHours: {
    enabled: true,
    closedMessage:
      "Cozinha fechada no momento. Atendimento de Terça a Domingo das 09h às 19h.",
    schedule: {
      segunda: { open: "00:00", close: "00:00", closed: true },
      terca: { open: "09:00", close: "19:00" },
      quarta: { open: "09:00", close: "19:00" },
      quinta: { open: "09:00", close: "19:00" },
      sexta: { open: "09:00", close: "19:30" },
      sabado: { open: "09:00", close: "19:30" },
      domingo: { open: "10:00", close: "18:00" },
    },
  },
};
