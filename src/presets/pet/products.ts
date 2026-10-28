import type { Product } from "../../types";

export const petShopProducts: Product[] = [
  {
    id: 301,
    name: "Ração Super Premium Cães Adultos Frango & Arroz",
    category: "Cães",
    price: 89.9,
    badge: "Campeã de Vendas",
    image:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=600",
    description:
      "Fórmula com ingredientes selecionados, rica em proteínas nobres, ômega 3 e 6 para pelos brilhantes e suporte articular.",
    variations: [
      { name: "Pacote 2,5 kg", price: 89.9 },
      { name: "Pacote 10,1 kg", price: 239.9, oldPrice: 269.0 },
      { name: "Pacote Econômico 15 kg", price: 319.9 },
    ],
  },
  {
    id: 302,
    name: "Petisco Natural Bifinho de Carne 100% Puro",
    category: "Cães",
    price: 14.5,
    image:
      "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&q=80&w=600",
    description:
      "Snack desidratado sem corantes artificiais ou conservantes químicos. Perfeito para treinamento e reforço positivo.",
    variations: [
      { name: "Pacote 65g", price: 14.5 },
      { name: "Pote Econômico 500g", price: 49.9 },
    ],
  },
  {
    id: 303,
    name: "Ração Premium Especial Gatos Castrados Salmão",
    category: "Gatos",
    price: 74.9,
    image:
      "https://images.unsplash.com/photo-1764249453850-faace6e57444?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "Equilíbrio mineral ideal para o trato urinário dos felinos, controle calórico para manter o peso saudável e fibras naturais.",
    variations: [
      { name: "Pacote 1,5 kg", price: 74.9 },
      { name: "Pacote 7,5 kg", price: 219.0 },
    ],
  },
  {
    id: 304,
    name: "Areia Sanitária Higiênica Biodegradável",
    category: "Gatos",
    price: 36.0,
    badge: "Sem Poeira",
    image:
      "https://images.unsplash.com/photo-1571873735645-1ae72b963024?q=80&w=1170&auto=format&fit=crop&q=80&w=600",
    description:
      "Forma torrões firmes e instantâneos à base de milho e mandioca. Pode ser descartada com segurança no vaso sanitário.",
    variations: [
      { name: "Fardo 4 kg", price: 36.0 },
      { name: "Fardo Econômico 12 kg (3x4kg)", price: 98.0, oldPrice: 108.0 },
    ],
  },
  {
    id: 305,
    name: "Arranhador Torre com Casinha de Pelúcia",
    category: "Gatos",
    price: 169.9,
    image:
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80&w=600",
    description:
      "Poste revestido com corda de sisal natural resistente, base acolchoada e refúgio confortável para o descanso do seu felino.",
    variations: [
      { name: "Torre Média (65cm altura)", price: 169.9 },
      { name: "Torre Master (110cm altura)", price: 289.0 },
    ],
  },
  {
    id: 306,
    name: "Antipulgas e Carrapatos Comprimido Mastigável",
    category: "Farmácia & Higiene",
    price: 115.0,
    badge: "Proteção 30 Dias",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600",
    description:
      "Comprimido mastigável sabor carne com rápida ação contra pulgas, carrapatos e ácaros da sarna. Alta palatabilidade.",
    variations: [
      { name: "Cães de 2 a 4,5 kg", price: 115.0 },
      { name: "Cães de 4,6 a 10 kg", price: 132.0 },
      { name: "Cães de 10,1 a 20 kg", price: 154.0 },
    ],
  },
  {
    id: 307,
    name: "Shampoo Hipoalergênico & Hidratante de Aveia",
    category: "Farmácia & Higiene",
    price: 38.9,
    image:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600",
    description:
      "Fórmula suave com extrato natural de aveia e camomila. Alivia coceiras, limpa profundamente e protege peles sensíveis.",
    variations: [
      { name: "Frasco 500 ml", price: 38.9 },
      { name: "Galão Econômico 2 Litros", price: 94.0 },
    ],
  },
  {
    id: 308,
    name: "Tapete Higiênico Ultra Absorvente com Carvão",
    category: "Farmácia & Higiene",
    price: 69.9,
    badge: "Anti-Odor",
    image:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=600",
    description:
      "Camada de carvão ativado que neutraliza completamente o cheiro da urina. Gel de absorção rápida e abas com fita adesiva.",
    variations: [
      { name: "Pacote com 30 unidades", price: 69.9 },
      { name: "Pacote com 50 unidades", price: 99.9, oldPrice: 115.0 },
    ],
  },
];
