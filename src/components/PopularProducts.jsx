import { popularProducts } from "../products";
import CartButton from "./reuseables/CartButton";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function PopularProducts() {
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
      <>
        <p className=" flex items-center justify-end py-4 text-[#00522A] font-krub-font cursor-pointer">
          See all products <IoIosArrowRoundForward color="" size={24} />
        </p>
        <div className="grid grid-cols-1 grid-rows-subgrid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {popularProducts.map((product) => (
            <PopularProductCard
              key={product.id}
              product={product.product}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </>
    </div>
  );
}

function PopularProductCard({ product, price, image }) {
  return (
    <div className="grid gap-3 hover:border-2 hover:border-[#B15818] p-2 rounded-[10px] cursor-pointer transition-all ease-in   ">
      {/* <div className="grid grid"> */}

      <img src={image} alt={product} className="w-full object-cover" />
      <div className="flex items-center justify-between gap-2">
        <p className="product-caption ">{product}</p>
        <p className="price-style">${price}</p>
      </div>
      <div className="flex justify-between">
        <CartButton>
          <span className=" flex items-center gap-1 text-white font-krub-font">
            Add to Cart
            <CiShoppingCart size={24} />
          </span>
        </CartButton>
        <button className="bg-[#DDC596] p-4 rounded-xl">
          <CiHeart color="#fff" size={28} fontWeight={"700"} />
        </button>
      </div>
    </div>
  );
}
