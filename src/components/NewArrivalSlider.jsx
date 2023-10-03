import React, { useContext, useEffect, useState } from 'react';
import { PiBasketBold } from "react-icons/pi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Slider.css"


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { getSliderData } from '../redux/Slider/action';
import { Link, useNavigate } from 'react-router-dom';
import { setWishListDataInLocal, setDataInLocal, setDeletedDataInLocal, setDeletedWishListDataInLocal } from "../redux/localReducer/action"
import { toggleAddToCart, toggleWishList } from '../redux/Men/action';
import { CountContext } from '../Context/CountContextProvider';

export default function Slider() {
    const { setCartCount, setWishListCount } = useContext(CountContext)
    const localCartData = useSelector((store) => store.localReducer.addCartData);
    const localWishListData = useSelector((store) => store.localReducer.wishListData);
    const [swiperRef, setSwiperRef] = useState(null);
    const products = useSelector(store => store.sliderReducer.sliderProducts)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddcart = (product) => {
        setCartCount(prev => prev + 1)
        dispatch(toggleAddToCart(product.id, !product.addToCart))
        product.addToCart = true
        dispatch(setDataInLocal("cartData", product));
    }

    const handleDeleteCartData = (product) => {
        setCartCount(prev => prev - 1)
        dispatch(toggleAddToCart(product.id, !product.addToCart))
        let existingCartItems = localCartData.filter(data => data.id !== product.id);
        dispatch(setDeletedDataInLocal("cartData", existingCartItems))
    }

    const handleAddInWishList = (product) => {
        setWishListCount(prev => prev + 1)
        dispatch(toggleWishList(product.id, !product.wishList))
        product.wishList = true
        dispatch(setWishListDataInLocal("wishListData", product))
    }

    const handleDeleteWishList = (product) => {
        setWishListCount(prev => prev - 1)
        dispatch(toggleWishList(product.id, !product.wishList))
        let existingCartItems = localWishListData.filter(data => data.id !== product.id);
        dispatch(setDeletedWishListDataInLocal("wishListData", existingCartItems))
    }

    useEffect(() => {
        dispatch(getSliderData)
    }, [])
    return (
        <>
            <div style={{ width: "94%", margin: "auto" }}>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        products.length > 0 &&
                        products.slice(-15).reverse().map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className='group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden'>
                                    {product.wishList ?
                                        <span onClick={() => handleDeleteWishList(product)} className={`absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] cursor-pointer hover:text-orange-600 right-2 transition-all duration-300`}>
                                            <AiFillHeart />
                                        </span>
                                        :
                                        <span onClick={() => handleAddInWishList(product)} className={`group absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] -right-10 cursor-pointer hover:text-orange-600 group-hover:right-2 transition-all duration-300`}>
                                            <AiOutlineHeart />
                                        </span>
                                    }
                                    <div onClick={() => navigate(`/singleProductWomen/${product.id}`)} className='w-[90%] h-[250px] m-auto overflow-hidden cursor-pointer'>
                                        <img width={"100%"} className='text-center rounded' src={product.image} alt="name" />
                                    </div>
                                    <div className='flex items-center justify-between px-2 mt-2'>
                                        <div>
                                            <p className='font-semibold line-clamp-1'>{product.name}</p>
                                            <p className='font-medium'>&#x20B9;{product.price}</p>
                                        </div>
                                        {product.addToCart ?
                                            <div onClick={() => handleDeleteCartData(product)} className={`p-2 cursor-pointer rounded-full bg-black text-white hover:bg-white hover:text-black transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]`}>
                                                <PiBasketBold />
                                            </div>
                                            :
                                            <div onClick={() => handleAddcart(product)} className={`p-2 cursor-pointer rounded-full hover:bg-black hover:text-white transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]`}>
                                                <PiBasketBold />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
}
