import React, { useState } from "react";
import { motion } from "framer-motion";
import { PiBasketBold } from "react-icons/pi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
export const ProductCard = ({ brand, category, image, gender, id, price }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div style={{ width: "94%", margin: "auto" }}>
      <div className="group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden">
        <motion.span className="group absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] -right-10 cursor-pointer hover:text-orange-600 group-hover:right-2 transition-all duration-300">
          <AiOutlineHeart />
        </motion.span>
        <div className="w-[90%] m-auto overflow-hidden">
          <img width={"100%"} className="text-center rounded" src={image} alt={brand} />
        </div>
        <div className="flex items-center justify-between px-2 mt-2">
          <div>
            <p className="font-semibold">{brand} {category}</p>
            <p className="font-medium">&#x20B9;{price}</p>
          </div>
          <div className="p-2 cursor-pointer rounded-full hover:bg-black hover:text-white transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]">
            <PiBasketBold />
          </div>
        </div>
      </div>
    </div>
  );
};
