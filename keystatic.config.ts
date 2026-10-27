// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core";

// Detecta se está rodando em produção de forma 100% compatível com o Astro/Vite
const isProd = import.meta.env.PROD;

export default config({
  // 🔒 Define o storage com as propriedades exigidas pelo TypeScript
  storage: isProd
    ? {
        kind: "github",
        repo: {
          owner: "seu-usuario-github", // 👈 Substitua pelo seu usuário ou organização no GitHub
          name: "nome-do-repositorio", // 👈 Substitua pelo nome do repositório
        },
      }
    : {
        kind: "local",
      },

  collections: {
    // 🛍️ GERENCIADOR DE PRODUTOS
    products: collection({
      label: "Produtos do Catálogo",
      slugField: "name",
      path: "src/content/products/*",
      format: { data: "json" },
      schema: {
        name: fields.text({
          label: "Nome do Produto",
          validation: { isRequired: true },
        }),
        category: fields.text({
          label: "Categoria (Ex: Pizzas, Casacos, Anéis)",
          validation: { isRequired: true },
        }),
        price: fields.number({
          label: "Preço (R$)",
          validation: { isRequired: true },
        }),
        oldPrice: fields.number({ label: "Preço Antigo / Riscado (Opcional)" }),
        badge: fields.text({
          label: "Etiqueta (Ex: Mais Vendido, Novo, Destaque)",
        }),

        // Upload de Imagem pelo painel
        image: fields.image({
          label: "Foto do Produto",
          directory: "public/images/products",
          publicPath: "/images/products/",
        }),

        // Opções / Variações (Tamanhos, Sabores, etc.)
        variations: fields.array(
          fields.object({
            name: fields.text({
              label: "Nome da Opção (Ex: Média, P, 1kg, Ouro 18k)",
            }),
            price: fields.number({
              label: "Preço desta variação (se mudar o valor)",
            }),
          }),
          {
            label: "Variações / Tamanhos do Produto",
            itemLabel: (props) => props.fields.name.value || "Nova Opção",
          },
        ),
      },
    }),
  },

  singletons: {
    // ⚙️ CONFIGURAÇÕES DA LOJA (Horários, Contato, Redes)
    storeSettings: singleton({
      label: "Configurações da Loja",
      path: "src/content/settings/store",
      format: { data: "json" },
      schema: {
        name: fields.text({
          label: "Nome da Loja",
          validation: { isRequired: true },
        }),
        tagline: fields.text({ label: "Slogan / Descrição Curta" }),
        whatsappNumber: fields.text({
          label: "WhatsApp com DDD (Ex: 11999998888)",
          validation: { isRequired: true },
        }),
        shippingNotice: fields.text({ label: "Aviso de Envio / Entrega" }),

        // Horário de Funcionamento
        isStoreOpen24h: fields.checkbox({
          label: "Loja aberta 24 Horas direto?",
          defaultValue: true,
        }),
        closedMessage: fields.text({
          label: "Mensagem exibida quando estiver fechado",
        }),

        // Redes Sociais
        instagramUrl: fields.text({ label: "Link do Instagram" }),
        facebookUrl: fields.text({ label: "Link do Facebook" }),
      },
    }),
  },
});
