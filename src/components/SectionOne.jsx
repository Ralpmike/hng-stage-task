import { NavLink } from "react-router-dom";

export default function SectionOne() {
  return (
    <div className="flex flex-col my-0  text-center px-5 md:px-[64px] items-center justify-center md:text-center gap-5 md:my-[2rem]">
      <h5 className="text-[#572A00] my-2 text-[9px] sm:text-[.625rem] font-krub-font py-2 px-4 bg-[#FFE6CE]  rounded-2xl">
        🏆 2023 & 2024 AWARD WINNING ECO-FRIENDLY STORE
      </h5>
      <h2 className="text-[32px] max-w-[77.4375rem]  font-medium leading-[36.8px] md:px-5 text-center md:leading-[73px]  md:text-[64px] lg:leading-[73px]">
        Enjoy Sustainable and{" "}
        <span className="text-[#004824] ">Healthy Living</span> with Our
        Eco-Friendly Products
      </h2>
      <p className=" text-[14px] md:text-[16px] font-krub-font  max-w-[33.125rem]">
        At Nature's Bounty, we're committed to nurturing both people and the
        planet. Dive into our world of eco-friendly products sourced with care
        and consideration for the environment.
      </p>

      <a
        href="#popular"
        className="text-[#E9FFE7] text-[14px] mt-5 font-krub-font md:text-[18px] button-primary"
      >
        {" "}
        Discover Eco-Friendly Products
      </a>
    </div>
  );
}
