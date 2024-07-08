import SectionOne from "./components/SectionOne";
import ScrollingCardComponent from "./components/ScrollingCardComponent";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductCollections from "./components/ProductCollections";
import PopularProducts from "./components/PopularProducts";
// import AboutUs from "./components/AboutUs";
// import OurNewsLetterSub from "./components/OurNewsLetterSub";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className=" min-h-100vh w-full font-my-custom-font-head ">
      <SectionOne />
      <ScrollingCardComponent />
      <FeaturedProducts />
      <ProductCollections />
      <PopularProducts />
    </div>
  );
}

function NavBar() {
  return (
    <div>
      <h1>Nature&#39;s Bounty</h1>
    </div>
  );
}
