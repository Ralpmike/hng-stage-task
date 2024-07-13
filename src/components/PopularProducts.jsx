// import { useState } from "react";
import { popularProducts } from "../products";
import CartButton from "./reuseables/CartButton";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useStore } from "../store";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

// import axios from "axios";

export default function PopularProducts({ timbuData = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const timbuProducts = useStore((state) => state.timbuProducts);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  console.log("Timbu Products:", timbuProducts);

  console.log("Timbu Data:", timbuData);

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
        {timbuData.slice(firstPostIndex, lastPostIndex).map((product) => (
          <PopularProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-9">
        <Pagination
          totalPosts={timbuData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

function PopularProductCard({ product }) {
  console.log("Product:", product);

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

  console.log("photoUrl: ", product.photos[0].url.split("/")[1]);

  return (
    <div className="grid gap-3 hover:border-2 hover:border-[#B15818] p-2 rounded-[10px] cursor-pointer transition-all ease-in">
      <Link to={`/productsdetails/${product.id}`}>
        <img
          src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
          alt={product.name}
          className="w-full object-cover"
        />
      </Link>
      <div className="flex items-center justify-between gap-2">
        <p className="product-caption">{product.name}</p>
        <p className="price-style">${}</p>
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

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-6 items-center justify-center">
      {pages.map((page, index) => {
        return (
          <>
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={
                page == currentPage
                  ? "bg-[#DDC596] border-[1px] border-[#B15818] px-4 py-[10px] rounded-md"
                  : ""
              }
            >
              {page}
            </button>
          </>
        );
      })}
    </div>
  );
};
