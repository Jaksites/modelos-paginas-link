import type { Product } from "../../types";

export const adegaProducts: Product[] = [
  {
    id: 401,
    name: "Vinho Tinto Cabernet Sauvignon Gran Reserva",
    category: "Vinhos Tintos",
    price: 129.0,
    oldPrice: 149.0,
    badge: "Destaque do Sommelier",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600",
    description:
      "Encorpado e elegante, maturado 12 meses em barricas de carvalho francês. Notas marcantes de cassis, ameixas maduras e baunilha.",
    variations: [
      { name: "Garrafa 750ml", price: 129.0, oldPrice: 149.0 },
      { name: "Caixa com 6 Garrafas (15% OFF)", price: 657.9 },
    ],
  },
  {
    id: 402,
    name: "Vinho Tinto Malbec Vale do Uco",
    category: "Vinhos Tintos",
    price: 98.0,
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600",
    description:
      "Intenso e aveludado, com taninos doces e aromas expressivos de amoras, violetas e toques sutis de cacau e especiarias.",
    variations: [
      { name: "Garrafa 750ml", price: 98.0 },
      { name: "Kit Presente (Garrafa + Taça Cristal)", price: 159.0 },
    ],
  },
  {
    id: 403,
    name: "Vinho Branco Sauvignon Blanc Vinhedos de Altitude",
    category: "Vinhos Brancos & Rosés",
    price: 88.0,
    badge: "Refrescante",
    image:
      "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&q=80&w=600",
    description:
      "Fresco, vibrante e mineral. Excelente acidez com notas herbáceas, maracujá fresco e lima da Pérsia. Servido gelado.",
    variations: [
      { name: "Garrafa 750ml", price: 88.0 },
      { name: "Caixa com 3 Garrafas", price: 239.0 },
    ],
  },
  {
    id: 404,
    name: "Vinho Rosé Côtes de Provence Francês",
    category: "Vinhos Brancos & Rosés",
    price: 165.0,
    image:
      "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=600",
    description:
      "Cor salmão pálida típica da Provence. Delicado e aromático, expressando pêssego branco, morangos e flores de laranjeira.",
    variations: [
      { name: "Garrafa 750ml", price: 165.0 },
      { name: "Garrafa Magnum 1,5 Litro", price: 319.0 },
    ],
  },
  {
    id: 405,
    name: "Espumante Brut Método Tradicional 24 Meses",
    category: "Espumantes",
    price: 110.0,
    badge: "Premiado",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=687&auto=format&fit=crop&q=80&w=600",
    description:
      "Perlage fino e persistente. Fermentado em garrafa (Champenoise), com aromas de brioche tostado, maçã verde e amêndoas.",
    variations: [
      { name: "Garrafa 750ml (Gelada)", price: 110.0 },
      { name: "Kit Celebração (Garrafa + Balde Térmico)", price: 179.0 },
    ],
  },
  {
    id: 406,
    name: "Queijo Parmesão da Canastra Curado (12 Meses)",
    category: "Harmonização",
    price: 48.0,
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=600",
    description:
      "Massa firme com cristais de tirosina crocantes e sabor umami intenso. Harmonização perfeita para vinhos tintos encorpados.",
    variations: [
      { name: "Cunha Fracionada 250g", price: 48.0 },
      { name: "Peça Inteira 500g", price: 89.0 },
    ],
  },
  {
    id: 407,
    name: "Queijo Jamón Serrano",
    category: "Harmonização",
    price: 42.0,
    image:
      "https://images.unsplash.com/photo-1668104129962-66e931ec9a61?q=80&w=687&auto=format&fit=crop&q=80&w=600",
    description:
      "Fatias ultrafinas curadas lentamente em montanha por 14 meses. Textura macia que desmancha na boca com equilíbrio de sal.",
    variations: [
      { name: "Bandeja Selada a Vácuo 100g", price: 42.0 },
      { name: "Bandeja Dupla 200g", price: 78.0 },
    ],
  },
  {
    id: 408,
    name: "Azeite Extravirgem Italiano Não Filtrado",
    category: "Harmonização",
    price: 68.0,
    badge: "Acidez 0,2%",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600",
    description:
      "Primeira prensagem a frio de azeitonas toscanas. Amargor e picância equilibrados, ideal para finalizar queijos e pães artesanais.",
    variations: [{ name: "Garrafa Vidro Escuro 500ml", price: 68.0 }],
  },
];
