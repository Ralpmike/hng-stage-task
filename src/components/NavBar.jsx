import { Link, NavLink, redirect, useNavigate } from "react-router-dom";

import { CiSearch, CiSquareMinus } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { GoTrash } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { CiSquarePlus } from "react-icons/ci";
import { useStore } from "../store";

export default function NavBar({ onHandleToggleCart, showCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/checkout");
    onHandleToggleCart();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const cartProducts = useStore((state) => state.cartProducts);

  const totalPrice = cartProducts.reduce(
    (acc, product) =>
      acc +
      (parseFloat(product.current_price[0]?.NGN) || 0) *
        (product.quantity || 0),
    0
  );

  return (
    <nav className=" mb-[20px] bg-defaultbg-color border-[#DDC596] px-4 md:px-8 md:gap-5 h-[80px] border-b-[.0625rem]    flex justify-evenly items-center sticky top-0 z-30 ">
      <button onClick={toggleMenu} className=" 1md:hidden mr-auto ">
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
      </button>

      <h1 className="font-my-custom-font-head mx-auto text-center 1md:mx-0 text-[1.3rem]  md:text-[2rem] ">
        <Link to={"/"}>Nature&#39;s Bounty</Link>
      </h1>

      <div className="hidden 1md:block">
        <ul className="flex gap-[1.5rem]  font-medium font-krub-font items-center">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-[14px] bg-[#a7d0a6] py-2 px-3 rounded-lg"
                  : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <label>
              <select
                name="Shop"
                id=""
                className="bg-defaultbg-color text-[14px] focus:outline-none"
              >
                <option value="">Shop</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </label>
          </li>
          <li className="flex gap-4 items-center relative">
            <input
              type="search"
              placeholder="Search"
              className="text-[#572A00] bg-[#F0E0D0] border-[.0625rem] py-[.25rem] 
                xl:w-[300px] lg:w-[250px] outline-none pl-8 pr-2 rounded-lg"
            />
            <CiSearch size={24} className="absolute right-2 inset-x-1" />
          </li>
        </ul>
      </div>
      <div className="flex gap-4 md:gap-[24px] items-center  text-[.625rem]">
        <NavLink to="#" className="flex flex-col justify-center items-center ">
          <CiUser size={24} />
        </NavLink>

        <NavLink
          to="#"
          className={`"flex flex-col justify-center items-center" ${
            showCart ? " transition-all ease-in-out duration-700" : ""
          }`}
          onClick={onHandleToggleCart}
        >
          <span className="relative">
            <CiShoppingCart size={24} />
            {cartProducts.length > 0 && (
              <span className="absolute inset-x-0 -top-4 left-4 text-white flex justify-center items-center w-5 aspect-[1/1] rounded-[50%]  bg-[#00522A] text-[10px]">
                {cartProducts.length}
              </span>
            )}
          </span>
        </NavLink>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <ul className="flex z-50 flex-col gap-[1.5rem] font-medium font-krub-font items-center absolute top-[80px] shadow-lg border-red-900  left-0 bg-[#d7d7d1] w-full justify-center py-3">
            <li>
              <NavLink
                to={"/"}
                className="text-[14px] bg-[#a7d0a6] py-2 px-3 rounded-lg"
              >
                Home
              </NavLink>
            </li>
            <li>
              <label>
                <select
                  name="Shop"
                  id=""
                  className="bg-defaultbg-color focus:outline-none"
                >
                  <option value="">Shop</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </label>
            </li>
            <li>
              <NavLink to="#">About us</NavLink>
            </li>
            <li className="flex gap-2 items-center relative">
              <input
                type="text"
                placeholder="Search"
                className="text-[#572A00] bg-[#F0E0D0] border-[.0625rem] py-[.25rem] w-[300px]  pl-8 rounded-lg"
              />
              <CiSearch size={24} className="absolute right-2 inset-x-1" />
            </li>
          </ul>
        </div>
      )}
      {/* </div> */}
      {showCart && (
        <div className="absolute top-[80px] w-[320px] sm:w-[370px] md:w-[590px]  h-fit inset-y-4 right-1 z-30  justify-center py-3 px-6 bg-[#F9F2E1] overflow-y-auto max-h-[calc(100vh-80px)]">
          <ul>
            <div className="flex justify-between">
              <h2 className="font-krub-font text-[28px] font-[600] flex items-center gap-2">
                My Cart
                <span className="text-white flex justify-center items-center w-6 aspect-[1/1] rounded-[50%]  bg-[#00522A] text-[14px]">
                  {cartProducts.length}
                </span>
              </h2>
              <button>
                <RxCross2 size={24} onClick={onHandleToggleCart} />
              </button>
            </div>
            {cartProducts.map((product) => (
              <Cart key={product.id} product={product} />
            ))}
          </ul>
          <div className="flex justify-between py-5 font-krub-font items-center border-y-2 border-y-[#DDC596]">
            <p className="text-[1rem] font-normal">Subtotal:</p>
            <h3 className="text-[20px] font-[600]">
              {cartProducts.length <= 0 ? "$0.00" : `$${totalPrice.toFixed(2)}`}
            </h3>
          </div>
          {/* <div className="w-full"> */}
          <button
            className="button-primary my-4 w-full text-[#E9FFE7]"
            onClick={handleRedirect}
          >
            Check Out
          </button>
          {/* </div> */}
        </div>
      )}
    </nav>
  );
}

function Cart({ product }) {
  const removeFromCart = useStore((state) => state.removeFromCart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);

  return (
    <div>
      {/* {cartProducts.map((product) => () => { */}
      <li className="flex flex-col md:flex-row py-6 gap-4 gap-y-12  w-full transition-all ease-in duration-[3000]">
        <img
          src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
          alt={product?.name}
          className="max-w-[210px] max-h-[190px]"
        />

        <div className="flex flex-col gap-2 justify-evenly">
          <div className="flex justify-between  font-krub-font font-medium">
            <h3 className="txet-[14px] md:text-lg max-w-[160px]">
              {product?.name}
            </h3>{" "}
            <span className="ml-auto font-semibold absolute right-6">
              {product?.current_price[0]
                ? (parseFloat(product.current_price[0]?.NGN) || 0) *
                  (product.quantity || 0).toFixed(2)
                : (parseFloat(product?.current_price) || 0) *
                  (product.quantity || 0).toFixed(2)}
              $
              {/* {(parseFloat(product.current_price[0]?.NGN) || 0) *
                (product.quantity || 0).toFixed(2)} */}
            </span>
          </div>
          {/* <div className=" "> */}
          <div className="gap-12 md:gap-[200px] relative flex justify-between ">
            <div className="flex gap-4 items-center">
              <div className="flex gap-[44px] justify-center bg-[#F9FAFB] font-medium items-center border-[1px] border-[#DDC596] px-2 rounded-lg w-[127px] h-[40px]">
                <button
                  className="w-6 h-6 text-[#1C2320] rounded-lg  border-[#DDC596] "
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
                <p>{product.quantity < 1 ? 1 : product.quantity}</p>
                <button
                  className="w-6 h-6  text-[#1C2320] border-[#DDC596] "
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="w-[100%] flex justify-end items-center "
              onClick={() => removeFromCart(product.id)}
            >
              <GoTrash />
            </button>
          </div>
          {/* </div> */}
        </div>
      </li>
      {/* })} */}
    </div>
  );
}
