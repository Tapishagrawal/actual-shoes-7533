import React, { useState } from 'react';
import { PiBasketBold } from "react-icons/pi";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import {motion} from "framer-motion"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Slider.css"


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    const [swiperRef, setSwiperRef] = useState(null);



    return (
        <>
            <div style={{ width: "94%", margin: "auto" }}>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={-200}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className='group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden'>
                            <motion.span className='group absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] -right-10 cursor-pointer hover:text-orange-600 group-hover:right-2 transition-all duration-300'>
                                <AiOutlineHeart />
                            </motion.span>
                            <div className='w-[90%] h-[250px] m-auto overflow-hidden'>
                                <img width={"100%"} className='text-center' src="https://images.cos.com/assets/001/91/b9/91b9b6d01ed55fae3d35e952e34c90c117601d8c.jpg" alt="fgdg" />
                            </div>
                            <div className='flex items-center justify-between px-2 mt-2'>
                                <div>
                                    <p className='font-semibold'>Varsity Jacket</p>
                                    <p className='font-medium'>&#x20B9;3699</p>
                                </div>
                                <div className='p-2 cursor-pointer rounded-full hover:bg-black hover:text-white transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]'>
                                    <PiBasketBold />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden'>
                            <motion.span className='group absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] -right-10 cursor-pointer hover:text-orange-600 group-hover:right-2 transition-all duration-300'>
                                <AiOutlineHeart />
                            </motion.span>
                            <div className='w-[90%] h-[250px] m-auto overflow-hidden'>
                                <img width={"100%"} className='text-center' src="https://t3.gstatic.com/images?q=tbn:ANd9GcTOSbn73ncFV0HynaNdy8970SltK_Vwvtff_IOPsdtWrgF2jB--" alt="fgdg" />
                            </div>
                            <div className='flex items-center justify-between px-2 mt-2'>
                                <div>
                                    <p className='font-semibold'>Varsity Jacket</p>
                                    <p className='font-medium'>&#x20B9;3699</p>
                                </div>
                                <div className='p-2 cursor-pointer rounded-full hover:bg-black hover:text-white transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]'>
                                    <PiBasketBold />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden'>
                            <motion.span className='group absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] -right-10 cursor-pointer hover:text-orange-600 group-hover:right-2 transition-all duration-300'>
                                <AiOutlineHeart />
                            </motion.span>
                            <div className='w-[90%] h-[250px] m-auto overflow-hidden'>
                                <img width={"100%"} className='text-center' src="https://www.sandiegocolon.com/wp-content/uploads/2021/05/mens-slub-striped-bomber-multi-stripe-club-monaco-sweaters_2.jpg" alt="fgdg" />
                            </div>
                            <div className='flex items-center justify-between px-2 mt-2'>
                                <div>
                                    <p className='font-semibold'>Varsity Jacket</p>
                                    <p className='font-medium'>&#x20B9;3699</p>
                                </div>
                                <div className='p-2 cursor-pointer rounded-full hover:bg-black hover:text-white transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]'>
                                    <PiBasketBold />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden'>
                            <motion.span className='group absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] -right-10 cursor-pointer hover:text-orange-600 group-hover:right-2 transition-all duration-300'>
                                <AiOutlineHeart />
                            </motion.span>
                            <div className='w-[90%] h-[250px] m-auto overflow-hidden'>
                                <img width={"100%"} className='text-center' src="https://i.guim.co.uk/img/media/ec9903e60a4503dc6a0b76bba369572b32072601/41_265_1577_1969/master/1577.jpg?width=1010&quality=45&auto=format&fit=max&dpr=2&s=543538ae1b62a51f1a76322cd179ba75" alt="fgdg" />
                            </div>
                            <div className='flex items-center justify-between px-2 mt-2'>
                                <div>
                                    <p className='font-semibold'>Varsity Jacket</p>
                                    <p className='font-medium'>&#x20B9;3699</p>
                                </div>
                                <div className='p-2 cursor-pointer rounded-full hover:bg-black hover:text-white transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]'>
                                    <PiBasketBold />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden'>
                            <motion.span className='group absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] -right-10 cursor-pointer hover:text-orange-600 group-hover:right-2 transition-all duration-300'>
                                <AiOutlineHeart />
                            </motion.span>
                            <div className='w-[90%] h-[250px] m-auto overflow-hidden'>
                                <img width={"100%"} className='text-center' src="https://www.sandiegocolon.com/wp-content/uploads/2021/05/mens-slub-striped-bomber-multi-stripe-club-monaco-sweaters_2.jpg" alt="fgdg" />
                            </div>
                            <div className='flex items-center justify-between px-2 mt-2'>
                                <div>
                                    <p className='font-semibold'>Varsity Jacket</p>
                                    <p className='font-medium'>&#x20B9;3699</p>
                                </div>
                                <div className='p-2 cursor-pointer rounded-full hover:bg-black hover:text-white transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]'>
                                    <PiBasketBold />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
}
