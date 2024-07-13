import SectionOne from "./components/SectionOne";
import ScrollingCardComponent from "./components/ScrollingCardComponent";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductCollections from "./components/ProductCollections";
import PopularProducts from "./components/PopularProducts";

export default function App() {
  return (
    <div className="  min-h-100vh w-full font-my-custom-font-head ">
      <SectionOne />
      <ScrollingCardComponent />
      {/* <div className="md:px-[70px]"> */}
      <FeaturedProducts />
      <ProductCollections />
      <PopularProducts />
      {/* </div> */}
    </div>
  );
}

// if (loading) {
//   return <div>Loading...</div>;
// }

// if (error) {
//   return <div>Error: {error.message}</div>;
// }
