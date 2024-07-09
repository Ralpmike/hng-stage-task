
import { create } from 'zustand'

export const useStore = create((set) => ({
  cartProducts: [],
  setAddToCart: (product) => set((curr) => ({ cartProducts: [...curr.cartProducts, product] })),

}))


export const useStsteStore = create((set) => ({
  change: false,
  setChange: () => set((curr) => ({ change: !curr.change })),
}))