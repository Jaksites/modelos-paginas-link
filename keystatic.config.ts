// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core";

const isProd = import.meta.env.PROD;

export default config({
  storage: import.meta.env.PROD
    ? {
        kind: "cloud", // 👈 Ativa login online na Cloudflare
      }
    : {
        kind: "local", // 👈 Continua rápido e sem login no seu computador
      },
  cloud: {
    project: "jakdd/template-catalogo",
  },
  // 🎨 CUSTOMIZAÇÃO VISUAL DO PAINEL PARA O CLIENTE
  ui: {
    brand: {
      name: "Painel da Loja", // 👈 Substitui "Keystatic" pelo nome da loja ou sistema
    },
    navigation: {
      // Cria grupos no menu lateral em português:
      "📦 Gestão de Produtos": ["products"],
      "⚙️ Configurações Gerais": ["storeSettings"],
    },
  },

  collections: {
    products: collection({
      label: "Produtos Cadastrados",
      slugField: "name",
      path: "src/content/products/*",
      format: { data: "json" },
      schema: {
        name: fields.text({
          label: "Nome do Produto",
          description: "Ex: Pizza Margherita, Vestido Midi, etc.",
          validation: { isRequired: true },
        }),
        category: fields.text({
          label: "Categoria",
          description: "Ex: Pizzas Salgadas, Bebidas, Roupas, Anéis",
          validation: { isRequired: true },
        }),
        price: fields.number({
          label: "Preço de Venda (R$)",
          description: "Use ponto para centavos (ex: 49.90)",
          validation: { isRequired: true },
        }),
        oldPrice: fields.number({
          label: "Preço Original / De R$ (Opcional)",
          description: "Aparecerá riscado como promoção se preenchido.",
        }),
        badge: fields.text({
          label: "Selo / Tag de Destaque (Opcional)",
          description: "Ex: Mais Vendido, Novidade, Promoção",
        }),

        image: fields.image({
          label: "Foto do Produto",
          description:
            "Envie uma foto quadrada ou no formato retrato com boa qualidade.",
          directory: "public/images/products",
          publicPath: "/images/products/",
        }),

        variations: fields.array(
          fields.object({
            name: fields.text({
              label: "Nome do Tamanho/Opção",
              description: "Ex: P, M, G ou 4 Fatias, 8 Fatias",
            }),
            price: fields.number({
              label: "Preço desta variação",
              description: "Deixe em branco se for o mesmo preço do produto.",
            }),
          }),
          {
            label: "Tamanhos ou Variações",
            itemLabel: (props) => props.fields.name.value || "Nova Variação",
          },
        ),
      },
    }),
  },

  singletons: {
    storeSettings: singleton({
      label: "Dados da Loja & Horários",
      path: "src/content/settings/store",
      format: { data: "json" },
      schema: {
        name: fields.text({
          label: "Nome Comercial da Loja",
          validation: { isRequired: true },
        }),
        tagline: fields.text({
          label: "Slogan / Descrição Curta",
          description: "Aparece abaixo do nome da loja no topo do site.",
        }),
        whatsappNumber: fields.text({
          label: "WhatsApp de Pedidos",
          description: "Apenas números com DDD (ex: 11999998888)",
          validation: { isRequired: true },
        }),
        shippingNotice: fields.text({
          label: "Aviso de Envio ou Entrega",
          description: "Ex: Entregas em até 45 min • Taxa fixa R$ 7,00",
        }),

        isStoreOpen24h: fields.checkbox({
          label: "Loja aberta 24 Horas direto?",
          description:
            "Desmarque caso deseje restringir pedidos apenas no horário comercial.",
          defaultValue: true,
        }),
        closedMessage: fields.text({
          label: "Mensagem quando estiver Fechado",
          description: "Ex: Abrimos de Terça a Domingo a partir das 18h.",
        }),

        instagramUrl: fields.text({
          label: "Link do Perfil do Instagram",
          description: "Ex: https://instagram.com/sualoja",
        }),
        facebookUrl: fields.text({
          label: "Link da Página do Facebook",
        }),
      },
    }),
  },
});
