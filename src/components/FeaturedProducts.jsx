import { featuredProducts } from "../products";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function FeaturedProducts() {
  return (
    <div className="my-14 px-4 md:px-12">
      <div>
        <h2 className="sub-h2-style text-center">Featured Products</h2>
        <p className="p-caption-style text-center mt-3">
          Browse through our featured eco-friendly products of the day.
        </p>
      </div>

      <div className="w-full flex flex-col">
        <p className=" flex justify-center items-center lg:justify-end py-4 text-[#00522A] font-krub-font cursor-pointer">
          See all products <IoIosArrowRoundForward color="" size={24} />
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 ">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product.product}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, price, image }) {
  return (
    <div className="max-w-[310px] mx-auto hover:border-2 hover:border-[#B15818] p-2  rounded-[10px] cursor-pointer transition-all ease-in">
      <img src={image} alt={product} className="w-full object-cover mb-4" />
      <div className="flex justify-between gap-1 pr-2">
        <h3 className="product-caption ">{product}</h3>
        <p className="price-style">${price}</p>
      </div>
    </div>
  );
}
