
import React from "react";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { PiBasketBold } from "react-icons/pi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";


export const ProductCard = ({ name, wishList, addToCart, brand, category, image, gender, id, price, quantity, sizes, handleAddcart, handleAddInWishList, handleDeleteCartData, handleDeleteWishList }) => {
  const location = useLocation();

  return (
    <div style={{ width: "70%", margin: "auto", marginTop: "60px" }}>
      <div className="group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden">
        {wishList ?
          <span onClick={()=>handleDeleteWishList({ id, wishList, addToCart, image, gender, brand, category, price, quantity, sizes, name })} className={`absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] cursor-pointer hover:text-orange-600 right-2 transition-all duration-300`}>
            <AiFillHeart />
          </span>
          :
          <span onClick={() => handleAddInWishList({ id, wishList, addToCart, image, gender, brand, category, price, quantity, sizes, name })} className={`group absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] -right-10 cursor-pointer hover:text-orange-600 group-hover:right-2 transition-all duration-300`}>
            <AiOutlineHeart />
          </span>
        }
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
          {addToCart ?
            <div onClick={() => handleDeleteCartData({ id, wishList, addToCart, image, gender, brand, category, price, quantity, sizes, name })} className={`p-2 cursor-pointer rounded-full bg-black text-white hover:bg-white hover:text-black transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]`}>
              <PiBasketBold />
            </div>
            :
            <div onClick={() => handleAddcart({ id, wishList, addToCart, image, gender, brand, category, price, quantity, sizes, name })} className={`p-2 cursor-pointer rounded-full hover:bg-black hover:text-white transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]`}>
              <PiBasketBold />
            </div>
          }
        </div>
      </div>
    </div>
  );
}
