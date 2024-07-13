import React from "react";
import { NavLink } from "react-router-dom";
import { useStore } from "../store";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLock } from "react-icons/ci";

export default function CheckoutPage() {
  const cartProducts = useStore((state) => state.cartProducts);

  return (
    <div className="px-6 md:px-12 xl:px-[100px] mt-10 flex flex-col gap-4 font-krub-font">
      <div className="flex py-3">
        <NavLink to="/" className="font-medium">
          Home
        </NavLink>
        <span className="mx-2 inline-block">/</span>
        <NavLink
          to="/checkout"
          className={({ isActive }) =>
            isActive ? "text-[#00522A] font-medium" : ""
          }
        >
          Checkout
        </NavLink>
      </div>
      <div className="grid gap-4 grid-cols-1 xl:grid-cols-3 font-krub-font">
        <div className="py-4 px-2 md:px-6 border-[1px] border-[#DDC596] col-span-2 gap-3 rounded-[10px]">
          <h3 className="font-medium text-[24px] flex items-center gap-2">
            Order Summary{" "}
            <span className=" text-white  w-7  aspect-[1/1] rounded-[50%] flex justify-center items-center bg-[#00522A] text-[12px]">
              {cartProducts.length}
            </span>
          </h3>
          <ul className="flex flex-col gap-4 ">
            {cartProducts.map((product) => (
              <CheclOutProduct key={product.id} product={product} />
            ))}
          </ul>
        </div>
        <div className="border-[1px] order-2 xl:order-none row-span-2 border-[#DDC596] flex flex-col gap-3 p-4 rounded-[10px]">
          <h3 className="font-medium text-[24px]">Payment Information</h3>
          <form className="grid gap-4 grid-cols-1">
            <div className="flex flex-col gap-4 text-[16px] font-krub-font font-medium border-y-[1px] py-4">
              <h3 className="font-[600]">Pay With</h3>

              <label htmlFor="credit">
                <input
                  type="radio"
                  name="payment-method"
                  id="credit"
                  value="credit-card"
                  className=" mr-1"
                />{" "}
                Debit or Credit Card
              </label>
              <label htmlFor="delivery">
                <input
                  type="radio"
                  name="payment-method"
                  id="delivery"
                  value="credit-card"
                  className=" mr-1"
                />{" "}
                Pay on Delivery
              </label>
            </div>

            <div className="flex flex-col gap-4 text-[16px] font-krub-font font-medium border-y-[1px] py-4">
              <h3 className="font-[600]">Enter Card Information</h3>
              <div>
                <label htmlFor="firstName" className="label-input">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="in-design  "
                />
              </div>
              <div>
                <label htmlFor="firstName" className="label-input">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="in-design  "
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="relative">
                  <label htmlFor="firstName" className="label-input">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className=" outline-none w-100px  w-full border-[1px] border-[#DDC596] px-[16px] py-[10px] rounded-[6px]  "
                  />
                  <MdOutlineDateRange
                    size={20}
                    className="absolute end-2 top-9 "
                  />
                </div>
                <div className="relative">
                  <label htmlFor="firstName" className="label-input">
                    CVV
                  </label>
                  <CiLock
                    size={20}
                    className="absolute right-2 bottom-[14px]"
                  />
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className=" outline-none w-100px w-full border-[1px] border-[#DDC596] px-[16px] py-[10px] rounded-[6px]  "
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-b-[1px]  py-4">
              <div className="flex justify-between items-center">
                <p className="font-normal text-[14px]">Sub Total</p>
                <p className="font-medium text-[14px] text-[#2F3935]">
                  $2115.00
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <p className="font-normal text-[14px]">Task(10%)</p>
                <p className="font-medium text-[14px] text-[#2F3935]">$54.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-normal text-[14px]">Shipping</p>
                <p className="font-medium text-[14px] text-[#2F3935]">$$0.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-normal text-[14px]">Total</p>
              <p className="font-medium text-[14px] text-[#2F3935]">$2169.00</p>
            </div>
            <button className="button-secondary text-white w-full">
              Place Order
            </button>
          </form>
        </div>
        <div className="p-4 flex flex-col gap-8  border-[1px] border-[#DDC596] col-span-2  rounded-[10px]">
          <h3 className="font-medium text-[24px] pt-4 pb-3">
            Delivery Information
          </h3>
          <form className="grid gap-3 grid-cols-1 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="label-input">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="in-design  "
              />
            </div>
            <div>
              <label htmlFor="firstName" className="label-input">
                Last Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="in-design  "
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="firstName" className="label-input">
                Address
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className=" border-[1px] border-[#DDC596] px-[16px] py-[10px] rounded-[6px] w-full col-span-full"
              />
            </div>
            <div className="">
              <label htmlFor="firstName" className="label-input">
                City/town
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="in-design  "
              />
            </div>
            <div className="">
              <label htmlFor="firstName" className="label-input">
                Zip Code
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="in-design  "
              />
            </div>
            <div className="">
              <label htmlFor="firstName" className="label-input">
                Mobile Number
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="in-design"
              />
            </div>
            <div className="">
              <label htmlFor="firstName" className="label-input">
                Email Address
              </label>
              <input
                type="email"
                name="firstName"
                id="firstName"
                className="in-design  "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function CheclOutProduct({ product }) {
  return (
    <li className="flex gap-2 md:gap-4 w-full border-b-[1px] py-5 border-[#DDC596] ">
      <img
        src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
        alt={product?.id}
        className="max-w-[120px] max-h-[120px]"
      />
      <div className="flex justify-between w-full font-medium test-[20px]">
        <div className="flex flex-col gap-4">
          <h3 className="w-[100px] sm:w-full font-medium">{product?.name}</h3>
          <p className="max-w-[300px] text-[14px]">{product?.description}</p>
        </div>
        <p>${product.price}</p>
      </div>
    </li>
  );
}
