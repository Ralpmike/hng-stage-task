import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex mt-8 px-12 text-center md:text-start mx-auto flex-col md:flex-row md:justify-between gap-4 md:gap-[40px] xl:gap-[196px]  w-full py-[2rem] lg:py-[5rem] text-white md:px-[60px] xl:px-[120px] bg-[url('./assets/images/footer.png')] bg-cover bg-no-repeat bg-blend-normal bg-[#004824] ">
      <div className="flex flex-col gap-4 mx-auto md:mx-0 max-w-[234px] ">
        <h3 className="text-[#172920] font-20 font-bold leading-[23px] font-my-custom-font-head ">
          Nature&#39;s Bounty
        </h3>
        <p className="text-[14px] font-krub-font">
          More sustainable lifestyles while safeguarding the planet for future
          generations.
        </p>
      </div>
      <div className="flex gap-[14px] md:gap-4 flex-col-reverse  md:flex-row  ">
        <ul className="flex flex-col gap-4 font-krub-font text-[14px] xl:mr-6">
          <label className="label-footer ">Link</label>
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <a href="#collections">Products</a>
          </li>
        </ul>

        <div className="flex gap-3 text-[#00522A] mx-auto md:mx-0 max-w-[13.5rem] mb-4 md:mb-0">
          <div className="socials">
            <FaLinkedinIn size={18} />
          </div>
          <div className="socials">
            <FaFacebook size={18} />
          </div>
          <div className="socials">
            <FaInstagram size={18} />
          </div>
          <div className="socials">
            <FaYoutube size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}
