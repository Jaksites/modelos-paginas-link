import type { Product } from "../../types";

export const floriculturaProducts: Product[] = [
  {
    id: 201,
    name: "Buquê Clássico de Rosas Vermelhas",
    category: "Buquês & Flores",
    price: 139.0,
    oldPrice: 159.0,
    badge: "Mais Vendido",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=600",
    description:
      "Rosas vermelhas importadas de botão grande, acompanhadas de gipsofilas (mosquitinhos), folhagens de eucalipto fresco e laço de cetim.",
    variations: [
      { name: "6 Rosas (Tamanho P)", price: 139.0, oldPrice: 159.0 },
      { name: "12 Rosas (Tamanho M)", price: 219.0 },
      { name: "24 Rosas Luxo (Tamanho G)", price: 369.0 },
    ],
  },
  {
    id: 202,
    name: "Buquê Silvestre Flores do Campo",
    category: "Buquês & Flores",
    price: 119.0,
    badge: "Artesanal",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600",
    description:
      "Composição colorida e descontraída com margaridas, lírios, astromélias e folhas secas aromáticas em papel kraft rústico.",
    variations: [
      { name: "Tamanho Médio", price: 119.0 },
      { name: "Tamanho Grande", price: 169.0 },
    ],
  },
  {
    id: 203,
    name: "Orquídea Phalaenopsis Nobre Branca",
    category: "Plantas Vivas & Vasos",
    price: 145.0,
    image:
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&q=80&w=600",
    description:
      "Vaso de orquídea com duas hastes floridas exuberantes, montada em substrato especial para longa durabilidade dentro de ambientes internos.",
    variations: [
      { name: "Cachepô de Cerâmica Branca", price: 145.0 },
      { name: "Cachepô Rústico de Madeira", price: 165.0 },
    ],
  },
  {
    id: 204,
    name: "Ficus Lyrata Bambino no Vaso",
    category: "Plantas Vivas & Vasos",
    price: 98.0,
    badge: "Tendência",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=600",
    description:
      "A queridinha da decoração de interiores. Folhas largas em tom verde escuro lustroso. Ideal para salas bem iluminadas.",
    variations: [
      { name: "Muda Média (50cm)", price: 98.0 },
      { name: "Planta Adulta (90cm)", price: 189.0 },
    ],
  },
  {
    id: 205,
    name: "Terrário Fechado de Suculentas & Musgo",
    category: "Plantas Vivas & Vasos",
    price: 85.0,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=600",
    description:
      "Microecossistema em redoma de vidro com camadas de cascalho mineral, terra adubada, musgos e mini suculentas de baixa manutenção.",
    variations: [
      { name: "Redoma 15cm", price: 85.0 },
      { name: "Redoma 22cm", price: 129.0 },
    ],
  },
  {
    id: 206,
    name: "Cesta de Café da Manhã com Flores",
    category: "Cestas & Presentes",
    price: 239.0,
    badge: "Para Presentear",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600",
    description:
      "Cesta de vime com pães artesanais, croissants, geleia premium, drip coffee especial, caneca de cerâmica e mini buquê de flores frescas.",
    variations: [
      { name: "Cesta Individual", price: 239.0 },
      { name: "Cesta para Casal", price: 349.0 },
    ],
  },
  {
    id: 207,
    name: "Box Flower Cartonada Deluxe",
    category: "Cestas & Presentes",
    price: 189.0,
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80&w=600",
    description:
      "Elegante caixa cilíndrica com acabamento em papel perolado, recheada com espuma floral e mix de rosas, cravos e eucaliptos.",
    variations: [
      { name: "Box Média (15 hastes)", price: 189.0 },
      { name: "Box Grande (25 hastes)", price: 279.0 },
    ],
  },
  {
    id: 208,
    name: "Cartão Especial com Envelope Lacre de Cera",
    category: "Cestas & Presentes",
    price: 18.0,
    image:
      "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?q=80&w=1074&auto=format&fit=crop&q=80&w=600",
    description:
      "Cartão em papel algodão com caligrafia personalizada da sua mensagem e selado à mão com cera quente e sinete botânico.",
    variations: [{ name: "Unidade com Mensagem Escrita", price: 18.0 }],
  },
];
