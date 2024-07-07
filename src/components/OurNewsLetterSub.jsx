import CartButton from "./reuseables/CartButton";
import NewsLetterBg from "../assets/images/newsletterbg.png";

export default function OurNewsLetterSub() {
  return (
    <div className="px-5 md:px-12">
      <div className="py-[24px] rounded-lg px-[20px] my-12 grid grid-col-1 gap-4 place-items-center md:place-content-start xl:grid-cols-2 md:py-[40px] md:px-[80px] bg-[#799B7D] bg-[url('./assets/images/newsletterbg.png')] bg-cover bg-no-repeat bg-blend-normal md:rounded-[2rem] ">
        <div className="flex flex-col lg:items-center items-start justify-start gap-2 text-white">
          <h2 className="text-[20px] leading-[26px] max-w-[320px] md:text-[32px] md:leading-[41.6px]  font-medium font-my-custom-font-head md:max-w-[28.125rem]">
            Get Green Living Hacks & Exclusive Deals: Sign Up for Our
            Eco-Friendly Newsletter!
          </h2>
          <ul className="list-disc list-inside text-[16px] flex flex-col gap-4 font-krub-font leading-[1.3rem]">
            <li>Exclusive deals </li>
            <li>Product launches</li>
            <li>Eco-living tips</li>
          </ul>
        </div>
        <div className="flex border-2 border-red-600  justify-start items-start flex-col md:flex-row md:items-center gap-5 flex-wrap">
          <input
            type="text"
            placeholder="yourmail@gmail.com"
            className="bg-slate-50/15 text-[#E9FFE7] placeholder:text-[#E9FFE7] bg-slate outline-none font-krub-font py-[24px] px-[32px] md:py-[24px] md:px-[16px] border-[1px] border-[#A7D0A6] rounded-lg"
          />
          <button className=" text-[#E9FFE7] font-krub-font text-[16px] md:text-[1.125rem] button-primary ">
            Become an Eco Insider
          </button>
        </div>
      </div>
    </div>
  );
}
