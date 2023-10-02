
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { PiBasketBold } from "react-icons/pi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// chakra modal imports
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link, useLocation } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import axios from "axios";

export const ProductCard = ({ isLoading, name, brand, category, addToCart, image, gender, id, price, wishList, handleToggleWishList, handleToggleAddToCart }) => {
  const location = useLocation();

  return (
    <div style={{ width: "70%", margin: "auto", marginTop: "60px" }}>
      <div className="group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden">
        <motion.span onClick={() => handleToggleWishList(id, wishList)} className={`group absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] -right-10 cursor-pointer hover:text-orange-600 group-hover:right-2 ${wishList && "right-2" } transition-all duration-300`}>
          {isLoading ? <Spinner size='sm' color='red.500' />
            :
            (
              wishList ?
                <AiFillHeart />
                :
                <AiOutlineHeart />
            )}
        </motion.span>
        <div className="w-[90%] m-auto overflow-hidden">
          {location.pathname == "/men" ? (
            <Link to={`/singleProductMen/${id}`}>
              <img
                width={"100%"}
                className="text-center rounded"
                src={image}
                alt={brand}
              />
            </Link>
          ) : (
            <Link to={`/singleProductWomen/${id}`}>
              <img
                width={"100%"}
                className="text-center rounded"
                src={image}
                alt={brand}
              />
            </Link>
          )}
        </div>
        <div className="flex items-center justify-between px-2 mt-2">
          <div>
            <p className="font-semibold line-clamp-1">
              {name}
            </p>
            <p className="font-medium">&#x20B9;{price}</p>
          </div>

          <div onClick={()=>handleToggleAddToCart(id,addToCart)} className={`p-2 cursor-pointer rounded-full hover:bg-black hover:text-white ${addToCart ? "bg-black text-white" : "text-black"} transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]`}>

            <PiBasketBold />
          </div>
        </div>
      </div>
    </div>
  );
}
