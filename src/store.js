import { create } from 'zustand';

export const useStore = create((set) => ({
  cartProducts: [],
  setAddToCart: (product) => set((curr) => ({
    cartProducts: [...curr.cartProducts, product]
  })),
  removeFromCart: (productId) => set((curr) => ({
    cartProducts: curr.cartProducts.filter((product) => product.id !== productId)
  }))
}));
