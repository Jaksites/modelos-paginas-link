// src/data/pizzariaProducts.ts (ou dentro do seu presets.ts)
import type { Product } from "../../types";

export const pizzariaProducts: Product[] = [
  {
    id: 101,
    name: "Pizza Margherita Especial",
    category: "Pizzas Salgadas",
    price: 64.9, // Preço base (Individual)
    oldPrice: 72.0,
    badge: "Mais Pedida",
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80&w=600",
    description:
      "Molho de tomate pelado italiano San Marzano, mozzarella di bufala artesanal, tomates-cereja confitados e folhas frescas de manjericão colhidas na hora.",
    variations: [
      { name: "Individual (4 fatias)", price: 64.9, oldPrice: 72.0 },
      { name: "Média (6 fatias)", price: 79.9 },
      { name: "Grande (8 fatias)", price: 94.9 },
    ],
  },
  {
    id: 102,
    name: "Pizza Pepperoni & Honey",
    category: "Pizzas Salgadas",
    price: 72.0,
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=600",
    description:
      "Generosa camada de pepperoni curado crocante, queijo mozzarella derretido e finalização especial com fio de mel picante artesanal sobre a borda tostada.",
    variations: [
      { name: "Média (6 fatias)", price: 72.0 },
      { name: "Grande (8 fatias)", price: 89.9 },
    ],
  },
  {
    id: 103,
    name: "Pizza de Chocolate com Morango",
    category: "Pizzas Doces",
    price: 68.0,
    badge: "Doce Favorita",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
    description:
      "Base de chocolate ao leite nobre derretido no forno, coberta com lâminas de morangos frescos selecionados e raspas de chocolate meio amargo 50%.",
    variations: [
      { name: "Individual (4 fatias)", price: 68.0 },
      { name: "Média (6 fatias)", price: 82.0 },
    ],
  },
  {
    id: 104,
    name: "Pizza de Banana com Doce de Leite",
    category: "Pizzas Doces",
    price: 62.0,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
    description:
      "Camadas generosas de doce de leite cremoso artesanal de Minas, fatias de banana caramelizadas no forno a lenha e salpicadas com canela da Índia.",
    variations: [
      { name: "Individual (4 fatias)", price: 62.0 },
      { name: "Média (6 fatias)", price: 76.0 },
    ],
  },
  {
    id: 105,
    name: "Pizza Romeu e Julieta",
    category: "Pizzas Doces",
    price: 59.9,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
    description:
      "A clássica e sofisticada combinação brasileira de goiabada cascão cremosa derretida com uma generosa camada de queijo minas padrão especial.",
    variations: [
      { name: "Individual (4 fatias)", price: 59.9 },
      { name: "Média (6 fatias)", price: 74.9 },
    ],
  },
  {
    id: 106,
    name: "Refrigerante Cola 2L",
    category: "Bebidas",
    price: 14.0,
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600",
    description:
      "Garrafa de refrigerante tamanho família de 2 Litros, entregue bem gelada para acompanhar seu pedido.",
    variations: [{ name: "2 Litros", price: 14.0 }],
  },
  {
    id: 107,
    name: "Suco Natural de Laranja",
    category: "Bebidas",
    price: 12.5,
    badge: "Refrescante",
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=600",
    description:
      "Suco natural de laranja pera espremido na hora, sem adição de açúcar ou conservantes. Rico em vitamina C.",
    variations: [
      { name: "Garrafa 500ml", price: 12.5 },
      { name: "Jarra 1 Litro", price: 21.0 },
    ],
  },
  {
    id: 108,
    name: "Cerveja Artesanal IPA 500ml",
    category: "Bebidas",
    price: 22.0,
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=600",
    description:
      "India Pale Ale de fabricação própria, com notas cítricas florais, amargor marcante e aroma marcante de lúpulos frescos.",
    variations: [{ name: "Garrafa 500ml", price: 22.0 }],
  },
];
