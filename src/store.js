
import { create } from 'zustand';

export const useStore = create((set) => ({
  cartProducts: [],
  setAddToCart: (product) => set((state) => {
    const existingProduct = state.cartProducts.find(p => p.id === product.id);
    if (existingProduct) {
      return {
        cartProducts: state.cartProducts.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      };
    } else {
      return {
        cartProducts: [...state.cartProducts, { ...product, quantity: 1 }]
      };
    }
  }),
  removeFromCart: (productId) => set((state) => ({
    cartProducts: state.cartProducts.filter((product) => product.id !== productId)
  })),
  increaseQuantity: (productId) => set((state) => ({
    cartProducts: state.cartProducts.map((product) =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    )
  })),
  decreaseQuantity: (productId) => set((state) => ({
    cartProducts: state.cartProducts.map((product) =>
      product.id === productId && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
    )
  })),

}));







