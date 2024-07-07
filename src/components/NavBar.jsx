import { NavLink } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="border-[#DDC596] px-4 md:px-8 md:gap-5 h-[80px] border-b-[.0625rem]  lg:gap-10 w-full mx-auto flex justify-evenly items-center ">
      {/* <div className="flex px-3 lg:gap-8 md:px-12 md:p-0  xl:gap-10 items-center h-[5rem] md:mx-auto border-2"> */}
      <button onClick={toggleMenu} className=" 1md:hidden mr-auto ">
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
      </button>

      <h1 className="font-my-custom-font-head mx-auto text-center 1md:mx-0 text-[1.25rem] md:text-[1.5rem] lg:text-[1.6rem] xl:[2rem]">
        Nature&#39;s Bounty
      </h1>

      <div className="hidden 1md:block">
        <ul className="flex gap-[1.5rem] font-medium font-krub-font items-center">
          <li>
            <NavLink
              className="text-[14px] bg-[#a7d0a6] py-2 px-3 rounded-lg"
              activeClassName="font-bold"
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
          <li>
            <NavLink to="#" className="text-[14px] ">
              About us
            </NavLink>
          </li>
          <li className="flex gap-4 items-center relative">
            <input
              type="search"
              placeholder="Search"
              className="text-[#572A00] bg-[#F0E0D0] border-[.0625rem] py-[.25rem] 
                xl:w-[300px] lg:w-[250px]  pl-8 rounded-lg"
            />
            <CiSearch size={24} className="absolute right-2 inset-x-1" />
          </li>
        </ul>
      </div>
      <div className="flex gap-3 md:gap-[24px]  text-[.625rem]">
        <NavLink to="#" className="flex flex-col justify-center items-center ">
          <CiUser size={18} />
          <span>Account</span>
        </NavLink>
        <div className="hidden 1md:block">
          <NavLink
            to="#"
            className="flex  flex-col justify-center items-center"
          >
            <CiHeart size={18} />
            <span>Wishlist</span>
          </NavLink>
        </div>
        <NavLink to="#" className="flex flex-col justify-center items-center">
          <CiShoppingCart size={18} />
          <span>Cart</span>
        </NavLink>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col-reverse gap-[1.5rem] font-medium font-krub-font items-center absolute top-[80px]  left-0 bg-[#d7d7d1] w-full justify-center py-3">
            <li>
              <NavLink to="#">Home</NavLink>
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
    </nav>
  );
}
