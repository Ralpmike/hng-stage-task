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


export const useMyStore = create((set) => ({
  increase: 1,
  setIncrease: () => set((state) => ({ increase: state.increase + 1 })),
  setDecrease: () => set((state) => ({ increase: state.increase - 1 })),
}));


// export const useAddedToCart = create((set) => ({
//   isAddedToCart: false,
//   setIsAddedToCart: () => set((state) => ({ addedToCart: !state.isAddedToCart })),
// }));
