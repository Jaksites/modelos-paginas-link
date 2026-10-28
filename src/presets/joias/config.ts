export const joiasConfig = {
  name: "ÁUREA & CO.",
  tagline: "Alta Joalheria em Ouro 18k e Pedras Naturais",
  whatsappNumber: "5511988887777",
  shippingNotice: "Frete expresso com seguro total em compras acima de R$ 499",
  theme: {
    primary: "#b45309", // Âmbar / Ouro envelhecido sofisticado
    primaryHover: "#92400e",
    accent: "#fef3c7",
    accentText: "#78350f",
    dark: "#0f172a",
    surface: "#fafaf9",
  },
  paymentMethods: ["pix", "credit_card", "bank_slip"], // Compras de alto valor aceitam boleto
  trustBadges: [
    {
      title: "Garantia Vitalícia",
      description: "Certificado de pureza do ouro 18k",
      icon: "shield-check",
    },
    {
      title: "Envio com Seguro",
      description: "Cobertura total até a entrega",
      icon: "truck",
    },
  ],
  banner: {
    badge: "Coleção Exclusiva ✨",
    title: "Design atemporal esculpido em ouro 18k e gemas raras.",
    description:
      "Peças autorais criadas para eternizar seus momentos mais inesquecíveis.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200",
    ],
    autoplayInterval: 5000,
  },
  contact: {
    address: "Rua Oscar Freire, 820 - Jardins, São Paulo - SP",
    businessHours: "Segunda a Sábado: 10h às 19h",
    email: "atendimento@aureajoias.com.br",
    cnpj: "12.345.678/0001-90",
  },
  socials: {
    instagram: "https://instagram.com/aureajoias",
    facebook: "https://facebook.com/aureajoias",
  },
  businessHours: {
    enabled: true,
    closedMessage:
      "Ateliê fechado no momento. Atendimento de Segunda a Sábado das 10h às 19h.",
    schedule: {
      segunda: { open: "10:00", close: "19:00" },
      terca: { open: "10:00", close: "19:00" },
      quarta: { open: "10:00", close: "19:00" },
      quinta: { open: "10:00", close: "19:00" },
      sexta: { open: "10:00", close: "19:00" },
      sabado: { open: "10:00", close: "17:00" },
      domingo: { open: "00:00", close: "00:00", closed: true },
    },
  },
};
