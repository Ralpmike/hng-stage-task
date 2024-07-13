import SectionOne from "./components/SectionOne";
import ScrollingCardComponent from "./components/ScrollingCardComponent";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductCollections from "./components/ProductCollections";
import PopularProducts from "./components/PopularProducts";
import axiosInstance from "./utils/axiosConfig";
import { useEffect, useState } from "react";
import { useStore } from "./store";

export default function App() {
  const [timbuData, setTimbuData] = useState([]);
  const [error, setError] = useState(null);
  // const setTimbuProducts = useStore((state) => state.setTimbuProducts);

  useEffect(() => {
    const fetchData = async () => {
      // const setTimbuProducts = useStore((state) => state.setTimbuProducts);
      try {
        const response = await axiosInstance.get("/products");

        const products = response.data.items; // Extract the data from the response
        setTimbuData(products);
        // setTimbuProducts(products);
      } catch (err) {
        console.error("Error:", err); // Log any errors
        setError(err);
      }
    };

    fetchData();
  }, []);
  console.log("Timbu Data:", timbuData);
  console.log("Error:", error);
  return (
    <div className="  min-h-100vh w-full font-my-custom-font-head ">
      <SectionOne />
      <ScrollingCardComponent />
      {/* <div className="md:px-[70px]"> */}
      <FeaturedProducts />
      <ProductCollections />
      <PopularProducts timbuData={timbuData} />
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
