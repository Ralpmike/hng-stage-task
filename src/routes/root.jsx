import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Root() {
  const [showCart, setShowCart] = useState(false);

  function handleToggleCart() {
    setShowCart(!showCart);
  }

  return (
    <div className="flex flex-col mx-auto gap-10 bg-defaultbg-color min-h-screen  max-w-[1440px]">
      <div className="relative">
        <NavBar onHandleToggleCart={handleToggleCart} showCart={showCart} />
        {showCart && (
          <div className="absolute -inset-1 bg-black bg-opacity-50 z-20"></div>
        )}
        <div className={`relative ${showCart ? "z-10" : ""}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
