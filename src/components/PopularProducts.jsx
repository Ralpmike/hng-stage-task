// import { useState } from "react";
import { popularProducts } from "../products";
import CartButton from "./reuseables/CartButton";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useStore } from "../store";
import { FaHeart } from "react-icons/fa";

export default function PopularProducts() {
  return (
    <div className="px-5 md:px-8" id="popular">
      <div className="py-12">
        <h2 className="sub-h2-style text-center">
          Popular best selling products
        </h2>
        <p className="p-caption-style text-center mt-3">
          Browse through some of the most purchased eco-friendly products
        </p>
      </div>

      <div className="grid grid-cols-1 grid-rows-subgrid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {popularProducts.map((product) => (
          <PopularProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button className="text-[#00522A] mx-auto mt-7 font-krub-font font-medium bg-transparent py-[24px] px-[32px] border-[1px] border-[#A7D0A6] rounded-lg ">
          See More Products
        </button>
      </div>
    </div>
  );
}

function PopularProductCard({ product }) {
  const cartProducts = useStore((state) => state.cartProducts);
  const setAddToCart = useStore((state) => state.setAddToCart);
  const removeFromCart = useStore((state) => state.removeFromCart);

  const isInCart = cartProducts.some(
    (cartProduct) => cartProduct.id === product.id
  );

  const handleAddToCart = () => {
    setAddToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="grid gap-3 hover:border-2 hover:border-[#B15818] p-2 rounded-[10px] cursor-pointer transition-all ease-in">
      <img
        src={product.image}
        alt={product.product}
        className="w-full object-cover"
      />
      <div className="flex items-center justify-between gap-2">
        <p className="product-caption">{product.product}</p>
        <p className="price-style">${product.price}</p>
      </div>
      <div>
        {isInCart ? (
          <CartButton onClick={handleRemoveFromCart} butnType="remove">
            <span className="flex items-center justify-center gap-1 text-white font-krub-font">
              Remove from Cart
            </span>
          </CartButton>
        ) : (
          <CartButton onClick={handleAddToCart} butnType="add">
            <span className="flex items-center justify-center gap-1 text-white font-krub-font">
              Add to Cart
              <CiShoppingCart size={24} />
            </span>
          </CartButton>
        )}
      </div>
    </div>
  );
}
