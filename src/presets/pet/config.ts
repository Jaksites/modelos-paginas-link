export const petShopConfig = {
  name: "PATAS & COMPANHIA",
  tagline: "Nutrição Premium, Farmácia e Acessórios Pet",
  whatsappNumber: "5511944443333",
  shippingNotice:
    "Entrega expressa no seu bairro em até 2 horas para pedidos até 17h",
  theme: {
    primary: "#0284c7", // Azul pet amigável e confiável (Sky 600)
    primaryHover: "#0369a1",
    accent: "#e0f2fe",
    accentText: "#075985",
    dark: "#0f172a",
    surface: "#f8fafc",
  },
  paymentMethods: ["pix", "credit_card", "debit_card", "money"],
  trustBadges: [
    {
      title: "Entrega no Bairro",
      description: "Não carregue peso: levamos até a sua porta",
      icon: "truck",
    },
    {
      title: "Procedência Garantida",
      description: "Produtos originais direto dos laboratórios",
      icon: "shield-check",
    },
  ],
  banner: {
    badge: "Tudo para seu Pet 🐾",
    title: "As melhores marcas de ração, petiscos e medicamentos.",
    description:
      "Monte seu pedido pelo catálogo e tire dúvidas direto com nossa equipe no WhatsApp.",
    images: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1200",
    ],
    autoplayInterval: 4500,
  },
  contact: {
    address: "Av. Moaci, 610 - Moema, São Paulo - SP",
    businessHours: "Segunda a Sábado: 08h às 20h | Domingo: 09h às 15h",
    email: "contato@patasecompanhia.com.br",
    cnpj: "56.789.012/0001-34",
  },
  socials: {
    instagram: "https://instagram.com/patasecompanhiapet",
    facebook: "https://facebook.com/patasecompanhiapet",
  },
  businessHours: {
    enabled: true,
    closedMessage:
      "Pet shop fechado no momento. Atendimento de Segunda a Sábado das 08h às 20h.",
    schedule: {
      segunda: { open: "08:00", close: "20:00" },
      terca: { open: "08:00", close: "20:00" },
      quarta: { open: "08:00", close: "20:00" },
      quinta: { open: "08:00", close: "20:00" },
      sexta: { open: "08:00", close: "20:00" },
      sabado: { open: "08:00", close: "19:00" },
      domingo: { open: "09:00", close: "15:00" },
    },
  },
};
