import { pizzariaConfig } from "./pizzaria/config";
import { pizzariaProducts } from "./pizzaria/products";

import { joiasConfig } from "./joias/config";
import { joiasProducts } from "./joias/products";

import { confeitariaConfig } from "./confeitaria/config";
import { confeitariaProducts } from "./confeitaria/products";

import { modaConfig } from "./moda/config";
import { modaProducts } from "./moda/products";

import { adegaConfig } from "./adega/config";
import { adegaProducts } from "./adega/products";

import { petShopConfig } from "./pet/config";
import { petShopProducts } from "./pet/products";

import { floriculturaConfig } from "./floricultura/config";
import { floriculturaProducts } from "./floricultura/products";

// Se tiver moda:
// import { modaConfig } from './moda/config';
// import { modaProducts } from './moda/products';

export const presets = {
  pizzaria: {
    slug: "pizzaria",
    name: "Pizzaria & Restaurante",
    config: pizzariaConfig,
    products: pizzariaProducts,
  },
  joias: {
    slug: "joias",
    name: "Semijoias & Acessórios",
    config: joiasConfig,
    products: joiasProducts,
  },
  confeitaria: {
    slug: "confeitaria",
    name: "Confeitaria & Doces",
    config: confeitariaConfig,
    products: confeitariaProducts,
  },
  Moda: {
    slug: "moda",
    name: "Moda & Vestuário",
    config: modaConfig,
    products: modaProducts,
  },
  Pet: {
    slug: "pet",
    name: "Pet Shop & Artigos Pet ",
    config: petShopConfig,
    products: petShopProducts,
  },
  Floricultura: {
    slug: "floricultura",
    name: "Floricultura & Decoração",
    config: floriculturaConfig,
    products: floriculturaProducts,
  },
  Adega: {
    slug: "adega",
    name: "Adega & Vinhos Especiais",
    config: adegaConfig,
    products: adegaProducts,
  },
};
