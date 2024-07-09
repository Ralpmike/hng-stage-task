import { NavLink, redirect, useNavigate } from "react-router-dom";

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
  const removeFromCart = useStore((state) => state.removeFromCart);

  return (
    <nav className=" bg-defaultbg-color border-[#DDC596] px-4 md:px-8 md:gap-5 h-[80px] border-b-[.0625rem]  lg:gap-8 w-full mx-auto flex justify-evenly items-center sticky top-0 z-30 ">
      {/* <div className="flex px-3 lg:gap-8 md:px-12 md:p-0  xl:gap-10 items-center h-[5rem] md:mx-auto border-2"> */}
      <button onClick={toggleMenu} className=" 1md:hidden mr-auto ">
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
      </button>

      <h1 className="font-my-custom-font-head mx-auto text-center 1md:mx-0 text-[1.25rem] md:text-[1.5rem] lg:text-[1.6rem] xl:[2rem]">
        Nature&#39;s Bounty
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
            showCart
              ? " bg-[#a7d0a6] py-2 px-3 rounded-lg transition-all ease-in-out duration-700"
              : ""
          }`}
          onClick={onHandleToggleCart}
        >
          <span className="relative">
            <CiShoppingCart size={24} />
            {cartProducts.length > 0 && (
              <span className="absolute inset-x-0 -top-4 left-4 text-white flex justify-center items-center w-5 aspect-[1/1] rounded-[50%]  bg-[#984343] text-[10px]">
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
                <span className="text-white flex justify-center items-center w-8 aspect-[1/1] rounded-[50%]  bg-[#00522A] text-[16px]">
                  {cartProducts.length}
                </span>
              </h2>
              <button>
                <RxCross2 size={24} onClick={onHandleToggleCart} />
              </button>
            </div>
            {cartProducts.map((product) => (
              <Cart
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
          <div className="flex justify-between py-5 font-krub-font items-center border-y-2 border-y-[#DDC596]">
            <p className="text-[1rem] font-normal">Subtotal:</p>
            <h3 className="text-[20px] font-[600]">$429.00</h3>
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

function Cart({ product, removeFromCart }) {
  return (
    <div>
      {/* {cartProducts.map((product) => () => { */}
      <li className="flex flex-col md:flex-row py-6 gap-4 gap-y-12  w-full transition-all ease-in duration-[3000]">
        <img
          src={product.image}
          alt="demo"
          className="max-w-[210px] max-h-[190px]"
        />

        <div className="flex flex-col gap-2 justify-evenly">
          <div className="flex justify-between  font-krub-font font-medium">
            <h3 className="txet-[14px] md:text-lg max-w-[160px]">
              {product.product}
            </h3>{" "}
            <span className="ml-auto font-semibold absolute right-6">
              ${product.price}
            </span>
          </div>
          {/* <div className=" "> */}
          <div className="gap-12 md:gap-[200px] relative flex justify-between ">
            <div>
              <FaPlus className="absolute inset-9 left-[50%] top-3 right-[54%]  md:left-[26%] md:top-3 " />
              <span className="bg-white inline-block w-[7.9375rem] p-2 pl-16 rounded-lg">
                1
              </span>
              <FaMinus className="absolute inset-9  top-3 md:left-5 md:top-3  md:inset-x-1" />
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
