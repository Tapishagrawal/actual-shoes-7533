import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { PiStarFourFill } from "react-icons/pi";
import jacket1 from "../images/jacket-1.png"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import Slider from '../components/Slider';
import heroLeftImg from "../images/heroLeftImg.png"
import heroRightImg from "../images/heroRightImg.png"
import materialSectionImg from "../images/materialSectionImg.png"
import inspectionImg from "../images/inspectionImg.png"

export const Home = () => {
    return (
        <>
            {/* Hero Section Start */}
            <section className='flex gap-4 items-center justify-between mt-20 px-10'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className='flex my-4'>
                        <div className='bg-orange-600 w-4 h-4 rounded-full'></div>
                        <div className='bg-orange-300 w-4 h-4 -ml-1 rounded-full'></div>
                        <div className='bg-white border border-black w-4 h-4 -ml-1 rounded-full'></div>
                    </div>
                    <p className='text-zinc-700'>Fashion is a form of self- <br /> expression and autonomy <br /> at a particular period.</p>
                    <Link className='group flex items-center font-medium my-4'><p>READ MORE</p> <FiArrowUpRight className='w-[1.4rem] h-[1.4rem] group-hover:translate-x-[0.1rem] group-hover:-translate-y-[0.1rem] transition-all' /></Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className='text-8xl font-semibold text-center'>CLOTHES ARE <br /> THE <Link className='group'><HiArrowNarrowRight className='group-hover:pl-5 transition-all inline border-4 border-black w-[9rem] rounded-full' /></Link> SPIRIT <br /> OF FASHION</h1>
                </motion.div>

                <motion.div className='border border-black p-[1rem] px-[1.5rem] text-center rounded-full'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <img width={"115px"} src={jacket1} alt="jacet" />
                    <p className='font-medium'>Varity jacket</p>
                    <p className='font-semibold'>&#x20B9; 2199</p>
                </motion.div>
            </section>

            <section className='mt-20'>
                <div className='flex items-center justify-between px-10 mb-5'>
                    <div className='flex items-center gap-3'>
                        <h4 className='bg-black text-white py-[0.1rem] px-3 rounded-full'>01</h4>
                        <h4 className='border-2 border-black px-2 rounded-full font-medium'>MAN COLLECTION</h4>
                    </div>
                    <h4 className='font-bold'>#2023</h4>
                </div>

                <div className='flex justify-between items-center px-28 '>
                    <div className='w-[300px]'>
                        <img width={"100%"} src={heroLeftImg} alt="model images" />
                    </div>
                    <div>
                        <div className='relative flex flex-col items-center justify-center border-2 border-black w-[13rem] h-[17rem] rounded-full'>
                            <div className='absolute -top-3 -right-3 hover:-top-4 hover:-right-4 transition-all cursor-pointer bg-black text-white text-[0.8rem] py-5 p-4 rounded-full'>Explore <br />More</div>
                            <h1 className='text-5xl font-semibold mt-17'>25<span className='text-base'>%</span><span className='text-3xl'>off</span></h1>
                            <p className='font-semibold my-2 mb-10'>out all new-arrivals</p>
                            <span><PiStarFourFill /></span>
                        </div>
                    </div>
                    <div className='w-[400px]'>
                        <img width={"100%"} src={heroRightImg} alt="model images" />
                    </div>
                </div>
            </section>
            {/* Hero Section End */}

            {/* Product Slider Start */}
            <div className='mt-20'>
                <h1 className='-mb-20 ml-10 text-3xl font-bold'>POPULAR PRODUCTS</h1>
                <Slider />
            </div>
            {/* Product Slider End */}

            {/* About Material Start */}
            <section className='flex items-center justify-around px-10 gap-9 mt-20'>
                <div>
                    <div>
                        <h1 className='text-7xl font-bold'>WE THINK</h1>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-7xl font-bold'> YOU'LL</h1>
                            <h3 className='text-xl font-bold'>LIKE THESE</h3>
                        </div>
                    </div>
                    <p className='mt-7 mb-16 leading-8 text-zinc-600'>Fashion is a form of self-expression and autonomy at a <br />
                        particular period and place and in a specific context, of <br />
                        clothing, footwear, lifestyle, accessories. The latest<br />
                        fashion news, beauty coverage, celebrity style.
                    </p>
                    <div className='flex gap-5 items-center'>
                        <div className='flex items-center gap-3'>
                            <div className='border border-zinc-400 p-4 rounded-full'><PiStarFourFill className='h-2 w-2' /></div>
                            <div>
                                <h3 className='font-semibold'>Care instructions</h3>
                                <p className='text-sm'>Machine wash at 30ºC</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='border border-zinc-400 p-4 rounded-full'><PiStarFourFill className='h-2 w-2' /></div>
                            <div>
                                <h3 className='font-semibold'>Fabric material</h3>
                                <p className='text-sm'>84% cotton, 16% polyester</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[40%]'>
                    <img width={"100%"} src={materialSectionImg} alt="clother images" />
                </div>
            </section>
            {/* About Material End */}

            {/* inspiration section Start */}
            <section className='mt-20'>
                <div className='flex items-center justify-around'>
                    <h2 className='text-4xl font-bold'>
                        Outfit inspiration <br />
                        Snag their style
                    </h2>
                    <div className='flex my-4 demo'>
                        <div className='bg-orange-600 w-6 h-6 rounded-full'></div>
                        <div className='bg-orange-300 w-6 h-6 -ml-1 rounded-full'></div>
                        <div className='bg-white border border-black w-6 h-6 -ml-1 rounded-full'></div>
                    </div>
                    <p className='text-zinc-600 leading-7'>
                        Open communication and participation <br />
                        are pivotal elements of our company <br />
                        culture. How a bold idea spawned a <br />
                        leading European online platform.
                    </p>
                </div>
                <div className='text-center my-20 mb-30 relative'>
                    <h1 className='text-8xl font-bold'>STAY AHAD OF <br /> THE WORLD</h1>
                    <img className='w-[320px] absolute -top-20 left-[33rem]' src={inspectionImg} alt="" />
                </div>
            </section>
            {/* inspiration section End */}

            {/* Product Slider Start */}
            <div className='mt-20'>
                <h1 className='-mb-20 ml-10 text-3xl font-bold'>POPULAR PRODUCTS</h1>
                <Slider />
            </div>
            {/* Product Slider End */}

        </>
    )
}
