import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa"
import { PiBasketBold } from "react-icons/pi"
import { AiOutlineHeart } from "react-icons/ai"
import ban1 from "../images/banner/ban-1.jpg";
import NewArrivalSlider from "../components/NewArrivalSlider"
import { setDataInLocal, setWishListDataInLocal } from "../redux/localReducer/action";
import { CountContext } from "../Context/CountContextProvider";
import { toggleAddToCart, toggleWishList } from "../redux/Men/action";

export const SingleProduct = () => {
  const { setCartCount, setWishListCount } = useContext(CountContext)
  const { id } = useParams();
  const location = useLocation();
  const [Product, setProduct] = useState({});
  const productMen = useSelector((store) => store.menReducer.products);
  const productWomen = useSelector((store) => store.womenReducer.products);
  const [size,setSize] = useState("");
  const dispatch = useDispatch()

  const handleChangeSize = (letter) => {
    setSize(letter)
  }

  const handleAddcart = (product) => {
    setCartCount(prev=>prev+1)
    dispatch(toggleAddToCart(product.id, !product.addToCart))
    product.addToCart = true
    dispatch(setDataInLocal("cartData", product));
  }

  const handleAddInWishList = (product) => {
    setWishListCount(prev=>prev+1)
    dispatch(toggleWishList(product.id, !product.wishList))
    product.wishList = true
    dispatch(setWishListDataInLocal("wishListData", product))
  }

  useEffect(() => {
    if (location.pathname == `/singleProductMen/${id}`) {
      const product = productMen.find((el) => el.id === +id);
      setProduct(product);
    } else if (location.pathname == `/singleProductWomen/${id}`) {
      const product = productWomen.find((el) => el.id === +id);
      setProduct(product);
    }
  }, [Product]);

  return (
    <div>
      <div className="w-full object-contain relative">
        <img className="w-full" src={ban1} alt="Banner Image" />
        <div className="absolute text-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <h1 className=" text-white text-3xl font-bold ">Shop with # {Product?.brand?.toUpperCase()}</h1>
          <p className=" text-white text-sm font-normal">Save more with & up to Off!</p>
        </div>
      </div>
      <div className="w-[98%] m-auto mt-10">
        <div className="flex justify-evenly">
          <div className="grid grid-cols-2 grid-flow-row gap-2 w-[50%]">
            <div className="overflow-hidden rounded">
              <img className="hover:scale-110 transition duration-700 rounded" src={Product.image} alt={Product.name} />
            </div>
            <div className="overflow-hidden rounded">
              <img className="hover:scale-110 transition duration-700 rounded" src={Product.image} alt={Product.name} />
            </div>
            <div className="overflow-hidden rounded">
              <img className="hover:scale-110 transition duration-700 rounded" src={Product.image} alt={Product.name} />
            </div>
            <div className="overflow-hidden rounded">
              <img className="hover:scale-110 transition duration-700 rounded" src={Product.image} alt={Product.name} />
            </div>
          </div>
          <div className="details-show">
            <div className="border-b border-zinc-400 pb-2">
              <h2 className="text-2xl font-semibold">{Product.name}</h2>
              <p className="text-xl text-zinc-500">{Product.brand} {Product.category} Men White & Teal Blue Slim Fit</p>
              <div className="flex items-center justify-center gap-1 border w-[170px] my-3">
                <span className="flex items-center gap-1">
                  4.3 <span className="text-green-600 -mt-1"> <FaStar /></span>
                </span>
                <span className="text-slate-500" >| 23.2K Ratings</span>
              </div>
            </div>
            <p className="text-2xl font-semibold mt-3">₹{Product.price} <span className="font-light text-zinc-400">MPR</span><span className="line-through font-light text-zinc-400"> ₹5000</span></p>
            <p className="text-xs font-bold text-green-600 my-1">inclusive of all taxes</p>
            <div className="my-5">
              <p className="text-lg font-medium text-zinc-600">Select Size</p>
              <div className="flex items-center gap-5 my-2">
                <button onClick={()=>handleChangeSize("S")} className={`border border-black rounded-full py-3 px-5 font-medium hover:bg-black ${size==="S" && "bg-black text-white"} hover:text-white transition duration-300`}>S</button>
                <button onClick={()=>handleChangeSize("M")} className={`border border-black rounded-full py-3 px-4 font-medium hover:bg-black ${size==="M" && "bg-black text-white"} hover:text-white transition duration-300`}>M</button>
                <button onClick={()=>handleChangeSize("L")} className={`border border-black rounded-full py-3 px-5 font-medium hover:bg-black ${size==="L" && "bg-black text-white"} hover:text-white transition duration-300`}>L</button>
                <button onClick={()=>handleChangeSize("XL")} className={`border border-black rounded-full py-3 px-4 font-medium hover:bg-black ${size==="XL" && "bg-black text-white"} hover:text-white transition duration-300`}>XL</button>
              </div>
            </div>
            <div className="add-cart">
              <div className="flex items-center gap-2 ">
                <button onClick={()=>handleAddcart(Product)} className="flex items-center justify-center gap-2 bg-black hover:bg-black/80 text-white w-[200px] transition duration-500 py-2 rounded-sm">
                  <span className="text-xl"><PiBasketBold /></span> ADD TO CART
                </button>
                <button onClick={()=>handleAddInWishList(Product)} className="flex items-center justify-center gap-2 border border-black hover:bg-black hover:text-white transition duration-500 w-[200px] py-2 rounded-sm">
                  <span className="text-xl"><AiOutlineHeart /></span>WISHLIST
                </button>
              </div>
              <p className="my-5 text-xl text-yellow-400">HANDPICKED STYLES | ASSURED QUALITY</p>
            </div>
            <div className="mb-5 border-y py-2">
              <p className="text-base font-semibold">₹{Product.price} <span className="line-through font-light text-zinc-400 ml-1"> ₹5000</span>
                <span className="text-orange-400 font-medium"> (40% OFF)</span>
              </p>
              <p className="text-red-500 font-semibold text-base">
                <span className="text-black font-normal">Seller:</span> {Product.brand}
              </p>
            </div>
            <div>
              <ul>
                <li className="my-2"><span className="font-semibold">Fit:</span> Regular Fit</li>
                <li className="my-2"><span className="font-semibold">Package Contents:</span> 1 {Product.category}</li>
                <li className="my-2"><span className="font-semibold">Care Instructions:</span> Machine wash</li>
                <li className="my-2"><span className="font-semibold">Material:</span> Cotton</li>
                <li className="my-2"><span className="font-semibold">Product Code:</span> 463775643003</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <h1 className='-mb-20 ml-10 text-[1.4rem] sm:text-4xl font-bold '>NEW ARRIVALS</h1>
        <NewArrivalSlider />
      </div>
    </div>
  );
};
