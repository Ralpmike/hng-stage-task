import CartButton from "./reuseables/CartButton";
import AboutUsImg from "../assets/images/aboutus.png";

export default function AboutUs() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 py-24 px-4 md:px-10 gap-12 items-center justify-center">
      <div className="flex flex-col gap-3 justify-start items-start order-last lg:order-first ">
        <h2 className="font-32 font-my-custom-font-head leading-[2.25rem] max-w-[320px]">
          Let us tell you more about Nature&#39;s Bounty
        </h2>
        <p className="font-krub-font text-[18px] text-left leading-[1.625rem]">
          Nature's Bounty was founded on a shared passion for sustainability and
          a commitment to environmental impact. Our journey began with the goal
          of offering eco-friendly products that promote healthy living and
          sustainable practices, stemming from a small idea that grew into a
          mission-driven endeavor.
          <span className="block mt-4">
            Our purpose at Nature's Bounty is clear: to empower individuals and
            communities to adopt healthier, more sustainable lifestyles while
            safeguarding the planet for future generations. Every decision we
            make, from sourcing organic produce to promoting fair trade
            practices, is guided by our unwavering commitment to sustainability,
            transparency, and social responsibility.
          </span>
        </p>
        <CartButton>
          <span className="text-white font-krub-font">Read Our Stories</span>
        </CartButton>
      </div>
      <div className="order-first">
        <img src={AboutUsImg} alt="About Us" className="w-full object-cover" />
      </div>
    </div>
  );
}
