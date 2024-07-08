// import { useState } from "react";
import { popularProducts } from "../products";
import CartButton from "./reuseables/CartButton";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useStore } from "../store";
import { FaHeart } from "react-icons/fa";

export default function PopularProducts() {
  // const [favorite, setFavorite] = useState(false);
  return (
    <div className="px-5 md:px-12">
      <div className="py-12">
        <h2 className="sub-h2-style text-center">
          Browse Through Our Collections
        </h2>
        <p className="p-caption-style text-center mt-3">
          We have different categories of Eco-friendly products to cater and
          suit every of your needs and wants.
        </p>
      </div>

      <div className="grid grid-cols-1 grid-rows-subgrid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {popularProducts.map((product) => (
          <PopularProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button className="text-[#00522A] mx-auto mt-10 font-krub-font font-medium bg-transparent py-[24px] px-[32px] border-[1px] border-[#A7D0A6] rounded-lg ">
          See More Products
        </button>
      </div>
    </div>
  );
}

function PopularProductCard({ product }) {
  const cartProducts = useStore((state) => state.cartProducts);
  console.log(cartProducts);

  const setAddToCart = useStore((state) => state.setAddToCart);

  return (
    <div className="grid gap-3 hover:border-2 hover:border-[#B15818] p-2 rounded-[10px] cursor-pointer transition-all ease-in   ">
      {/* <div className="grid grid"> */}

      <img
        src={product?.image}
        alt={product.product}
        className="w-full object-cover"
      />
      <div className="flex items-center justify-between gap-2">
        <p className="product-caption ">{product.product}</p>
        <p className="price-style">${product.price}</p>
      </div>
      <div className="">
        <CartButton onClick={() => setAddToCart(product)}>
          <span className=" flex items-center gap-1 text-white font-krub-font">
            Add to Cart
            <CiShoppingCart size={24} />
          </span>
        </CartButton>
      </div>
    </div>
  );
}
