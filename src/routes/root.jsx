import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Footer from "../components/Footer";
import "../utils/axiosConfig";

export default function Root() {
  const [showCart, setShowCart] = useState(false);

  function handleToggleCart() {
    setShowCart(!showCart);
  }

  return (
    <div className="flex w-full  flex-col mx-auto gap-10 bg-defaultbg-color min-h-screen  max-w-[1440px]">
      <div className="relative">
        <NavBar onHandleToggleCart={handleToggleCart} showCart={showCart} />
        {showCart && (
          <div className="absolute w-full min-h-[100vh] -inset-1 bg-[#9D9D9DB2]  z-20"></div>
        )}
        <div className={`relative ${showCart ? "z-10" : ""}`}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
