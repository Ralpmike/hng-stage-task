import React from "react";
import { NavLink } from "react-router-dom";
import { useStore } from "../store";

export default function CheckoutPage() {
  const cartProducts = useStore((state) => state.cartProducts);
  return (
    <div className="px-[106px] flex flex-col gap-4">
      <div className="flex">
        <NavLink to="/">Home</NavLink>/
        <NavLink
          to="/checkout"
          className={({ isActive }) => (isActive ? "green" : undefined)}
        >
          Checkout
        </NavLink>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-4 px-4 border-[1px] border-[#DDC596]">
          <h3>
            Order Summary{" "}
            <span className=" text-white  w-6 px-2 py-[2px] aspect-[1/1] rounded-[50%] inline-block bg-[#00522A] text-[12px]">
              {cartProducts.length}
            </span>
          </h3>
          <ul className="flex flex-col gap-4 border-[1px] ">
            {cartProducts.map((product) => (
              <CheclOutProduct key={product.id} product={product} />
            ))}
          </ul>
        </div>
        <div>
          <h3>Payment</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
    </div>
  );
}

function CheclOutProduct({ product }) {
  return (
    <li className="flex gap-4 w-full border-b py-5 border-[#DDC596] ">
      <img
        src={product.image}
        alt={product.product}
        className="max-w-[120px] max-h-[120px]"
      />
      <div className="flex justify- w-full">
        <h3>{product.product}</h3>
        <p>${product.price}</p>
      </div>
    </li>
  );
}
