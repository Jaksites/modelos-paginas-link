// src/scripts/cartStore.ts
import type { CartItem, Product } from "../types";

const STORAGE_KEY = "aura_store_cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Erro ao carregar o carrinho:", error);
    return [];
  }
}

export function saveCart(cart: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent("cart:updated", { detail: { cart } }));
}

// Suporta receber o preço e a foto específicos da variação
export function addToCart(
  product: Product,
  selectedSize: string,
  price?: number,
  image?: string,
  quantity = 1,
) {
  const cart = getCart();
  const unitPrice = price ?? product.price;
  const selectedImage = image ?? product.image;
  // 🛡️ Garante que a quantidade seja tratada estritamente como número inteiro positivo
  const qtyToAdd = Math.max(1, Number(quantity) || 1);

  // 🛡️ Converte IDs para String para evitar falsos negativos entre '1' e 1
  const existingIndex = cart.findIndex(
    (item) =>
      String(item.product.id) === String(product.id) &&
      item.selectedSize === selectedSize,
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += qtyToAdd;
    // Atualiza preço/imagem caso tenham sofrido alguma alteração
    cart[existingIndex].unitPrice = unitPrice;
    if (selectedImage) cart[existingIndex].selectedImage = selectedImage;
  } else {
    cart.push({
      product,
      selectedSize,
      unitPrice,
      selectedImage,
      quantity: qtyToAdd,
    });
  }

  saveCart(cart);
  window.dispatchEvent(new CustomEvent("cart:open"));
}

export function updateQuantity(index: number, delta: number) {
  const cart = getCart();
  // 🛡️ Evita crash se o item não existir
  if (!cart[index]) return;

  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
}

export function getCartTotals() {
  const cart = getCart();
  const totalCount = cart.reduce(
    (acc, item) => acc + (Number(item.quantity) || 0),
    0,
  );

  const totalPrice = cart.reduce(
    (acc, item) =>
      acc +
      (item.unitPrice ?? item.product.price) * (Number(item.quantity) || 0),
    0,
  );

  return { totalCount, totalPrice };
}
