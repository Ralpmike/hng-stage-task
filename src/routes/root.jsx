import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Root() {
  return (
    <div className="flex flex-col mx-auto gap-10 bg-defaultbg-color min-h-screen  max-w-[1440px]">
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
