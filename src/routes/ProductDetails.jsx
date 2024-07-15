import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { popularProducts } from "../products";
import { useEffect, useState } from "react";
import ProductSize from "../components/reuseables/ProductSize";
import ProductColor from "../components/reuseables/ProductColor";
import { LuStore } from "react-icons/lu";
import axiosInstance from "../utils/axiosConfig";
import { useStore } from "../store";

export default function ProductDetails() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [error, setError] = useState(null);
  const setAddToCart = useStore((state) => state.setAddToCart);

  console.log("Product ID:", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/products/${id}`);

        const fetchResult = res.data;
        setSingleProduct(fetchResult);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  console.log(error);

  const [quantity, setQuantity] = useState(1);
  const colors = ["#A4C8D7", "#221C49", "#475367", "#FBE2B7"];
  const sizes = ["S", "M", "L", "XL"];

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [selectSize, setSelectSize] = useState(sizes[0]);

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectSize(size);
  };

  const handleAddToCart = () => {
    setAddToCart(singleProduct);
  };

  return (
    <div className="flex flex-col gap-4 lg:px-[121px] px-[17px] font-krub-font">
      <h1 className="font-krub-font font-medium  text-[.875rem] text-[#004824] ">
        {singleProduct?.name}
      </h1>
      <div className="grid gap-10 grid-cols-1  lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <img
            src={
              singleProduct?.photos?.[0]?.url
                ? `https://api.timbu.cloud/images/${singleProduct.photos[0].url}`
                : ""
            }
            alt={singleProduct?.id}
            className="max-w-full rounded-lg lg:w-[548px] max-h-[696px]"
          />
          <div className="flex flex-wrap justify-center md:justify-normal max-w-full gap-5 ">
            <img
              src={
                singleProduct?.photos?.[0]?.url
                  ? `https://api.timbu.cloud/images/${singleProduct.photos[0].url}`
                  : ""
              }
              alt={singleProduct?.id}
              className="productDetialsImg "
            />
            <img
              src={
                singleProduct?.photos?.[0]?.url
                  ? `https://api.timbu.cloud/images/${singleProduct.photos[0].url}`
                  : ""
              }
              alt={singleProduct?.id}
              className="productDetialsImg"
            />
            <img
              src={
                singleProduct?.photos?.[0]?.url
                  ? `https://api.timbu.cloud/images/${singleProduct.photos[0].url}`
                  : ""
              }
              alt={singleProduct?.id}
              className="productDetialsImg"
            />
            <img
              src={
                singleProduct?.photos?.[0]?.url
                  ? `https://api.timbu.cloud/images/${singleProduct.photos[0].url}`
                  : ""
              }
              alt={singleProduct?.id}
              className="productDetialsImg"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-[32px] leading-[46.4px]">
              {singleProduct?.name}
            </h2>
            <p>{singleProduct?.description}</p>
            <div className="flex gap-2 items-center">
              <span className="flex gap-1">
                <FaStar color="#00522A" />
                <FaStar color="#00522A" />
                <FaStar color="#00522A" />
                <FaStar color="#00522A" />
                <FaStar color="#00522A" />
              </span>
              <p>(121)</p>
            </div>
            <h2 className="font-[700] text-[24px] leading-[2.15rem]">
              {/* ${product.price} */}
              {/* {singleProduct?.} */}
            </h2>
            <hr className="border-t-[2px]  border-[#DDC596]" />
            <div className="flex flex-col gap-4 ">
              <p>Choose a Color</p>
              <div className="flex gap-4 items-center">
                {colors.map((color) => (
                  <ProductColor
                    color={color}
                    key={color}
                    selected={selectedColor === color}
                    onClick={() => handleColorChange(color)}
                  />
                ))}
              </div>
            </div>
            <hr className="border-t-[2px]  border-[#DDC596]" />
            <div className="flex flex-col gap-4 ">
              <div className="flex justify-between items-center font-[600]">
                <h3 className="tetx-[1rem]">Select Size</h3>
                <p className="tetx-[.875rem]">Size Guide</p>
              </div>
              <div className="flex gap-4 items-end">
                {sizes.map((size) => (
                  <ProductSize
                    key={size}
                    selected={selectSize === size}
                    size={size}
                    onClick={() => handleSizeChange(size)}
                  />
                ))}
              </div>
              <hr className="border-t-[2px]  border-[#DDC596]" />
              <div className="flex flex-col gap-4 ">
                <h3 className="tetx-[1rem] font-[600] leading-[1.45rem]">
                  Quantity
                </h3>
                <div className="flex gap-4 items-center">
                  <div className="flex gap-[44px] justify-center items-center border-[1px] border-[#DDC596] px-2 rounded-lg w-[204px] h-[64px]">
                    <button
                      className="w-6 h-6 text-[#1C2320]  border-[#DDC596] "
                      onClickCapture={decrementQuantity}
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button
                      className="w-6 h-6  text-[#1C2320] border-[#DDC596] "
                      onClickCapture={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                  <p className="w-[139px] font-[600]">
                    Only <span className="text-[#572A00]">12 Items</span> Left!
                    Don&apos;t miss it
                  </p>
                </div>
              </div>
              <div className="flex gap-4 order-last md:order-none">
                <button className="py-[8px] px-[16px] md:py-[16px] md:px-[32px] hover:bg-[#008042] bg-[#00522A] text-white rounded-lg">
                  Buy Now
                </button>
                <button
                  className="py-[8px] px-[16px] md:py-[16px] md:px-[32px] border-[2px] hover:bg-[#DDC596] hover:text-white text-[#1D0E00] border-[#DDC596] rounded-lg "
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex gap-4 items-center ">
                <LuStore size={24} />
                <div>
                  <h3>Free Shipping</h3>
                  <p>Enter your Postal Code for Delivery Availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
