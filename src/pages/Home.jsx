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
import NewArrivalSlider from '../components/NewArrivalSlider';

export const Home = () => {
    return (
        <>
            {/* Hero Section Start */}
            <section className='flex gap-4 max-[671px]:gap-10 max-[671px]:flex-col-reverse items-center justify-between flex-wrap mt-20 px-10'>
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
                    <p className='text-zinc-700 max-[950px]:text-sm max-[671px]:text-lg'>Fashion is a form of self- <br /> expression and autonomy <br /> at a particular period.</p>
                    <Link className='group flex items-center font-medium my-4 max-[950px]:my-2 max-[950px]:text-sm max-[671px]:text-lg'><p>READ MORE</p> <FiArrowUpRight className='w-[1.4rem] h-[1.4rem] group-hover:translate-x-[0.1rem] group-hover:-translate-y-[0.1rem] transition-all' /></Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className='text-8xl max-[671px]:text-6xl font-semibold text-center max-[1150px]:text-6xl max-[950px]:text-4xl max-[486px]:text-[2.4rem] max-[375px]:text-[2rem]'>CLOTHES ARE <br /> THE <Link className='group'><HiArrowNarrowRight className='group-hover:pl-5 transition-all inline border-4 max-[950px]:border-2 border-black w-[9rem] max-[1150px]:w-[7rem] max-[950px]:w-[4rem] max-[375px]:w-[3rem] rounded-full' /></Link> SPIRIT <br /> OF FASHION</h1>
                </motion.div>

                <motion.div className='flex flex-col items-center border border-black p-[1rem] px-[1.5rem] max-[950px]:px-[1rem] rounded-full'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <img className='w-[115px] max-[950px]:w-[70px] max-[671px]:w-[115px]' src={jacket1} alt="jacet" />
                    <p className='font-medium max-[950px]:text-sm'>Varity jacket</p>
                    <p className='font-semibold max-[950px]:text-sm'>&#x20B9; 2199</p>
                </motion.div>
            </section>

            <section className='mt-20'>
                <div className='flex items-center justify-between px-5 lg:px-10 mb-5'>
                    <div className='flex items-center gap-1 lg:gap-3'>
                        <h4 className='bg-black text-white py-[0.1rem] px-3 rounded-full'>01</h4>
                        <h4 className='border-2 border-black px-2 rounded-full font-medium'>MAN COLLECTION</h4>
                    </div>
                    <h4 className='font-bold'>#2023</h4>
                </div>

                <div className='flex justify-between items-center pl-28 max-[500px]:pl-0 max-[950px]:gap-20 max-[769px]:gap-5 max-[769px]:pl-14 max-[500px]:flex-col'>
                    <div className='w-[300px]'>
                        <img width={"100%"} src={heroLeftImg} alt="model images" />
                    </div>
                    <div>
                        <div className='relative flex flex-col items-center justify-center border-2 border-black rounded-full w-[13rem] h-[17rem] max-[950px]:w-[10rem] max-[950px]:h-[13rem] max-[769px]:w-[9rem] max-[600px]:w-[6rem] max-[600px]:h-[10rem] max-[500px]:w-[13rem] max-[500px]:h-[17rem]'>
                            <div className='absolute -top-3 -right-3 hover:-top-4 hover:-right-4 transition-all cursor-pointer bg-black text-white text-[0.8rem] py-5 p-4 rounded-full max-[600px]:text-[0.5rem] max-[600px]:py-4'>Explore <br />More</div>
                            <h1 className='text-5xl font-semibold mt-17 max-[950px]:text-4xl max-[950px]:mt-14 max-[600px]:text-2xl max-[600px]:mt-8 max-[500px]:text-6xl'>25<span className='text-base max-[500px]:text-xl'>%</span><span className='text-3xl max-[600px]:text-xl max-[500px]:text-4xl'>off</span></h1>
                            <p className='font-semibold my-2 mb-10 max-[950px]:mb-5 max-[950px]:text-sm max-[769px]:text-[0.7rem] max-[600px]:text-[0.5rem] max-[600px]:my-0 max-[500px]:text-lg max-[500px]:'>out all new-arrivals</p>
                            <span><PiStarFourFill /></span>
                        </div>
                    </div>
                    <div className='w-[400px] max-[425px]:w-full'>
                        <img className='w-full max-[413px]:w-[90%]' src={heroRightImg} alt="model images" />
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
            <section className='flex items-center justify-around px-10 gap-9 mt-20 max-[637px]:flex-col'>
                <div>
                    <div>
                        <h1 className='text-7xl font-bold max-[820px]:text-5xl max-[637px]:text-6xl'>WE THINK</h1>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-7xl font-bold max-[820px]:text-5xl max-[637px]:text-6xl'> YOU'LL</h1>
                            <h3 className='text-xl font-bold max-[820px]:text-lg max-[637px]:text-xl'>LIKE THESE</h3>
                        </div>
                    </div>
                    <p className='mt-7 mb-16 leading-8 text-zinc-600 max-[820px]:text-[0.9rem] max-[820px]:mb-7 max-[637px]:text-base max-[637px]:leading-8 max-[425px]:text-sm max-[425px]:font-medium max-[425px]:leading-7'>Fashion is a form of self-expression and autonomy at a <br />
                        particular period and place and in a specific context, of <br />
                        clothing, footwear, lifestyle, accessories. The latest<br />
                        fashion news, beauty coverage, celebrity style.
                    </p>
                    <div className='flex gap-5 items-center max-[425px]:flex-col max-[425px]:items-start max-[425px]:ml-16'>
                        <div className='flex items-center gap-3'>
                            <div className='border border-zinc-400 p-4 rounded-full'><PiStarFourFill className='h-2 w-2' /></div>
                            <div>
                                <h3 className='font-semibold max-[820px]:text-[0.8rem] max-[637px]:text-base'>Care instructions</h3>
                                <p className='text-sm max-[820px]:text-[0.7rem] max-[637px]:text-sm'>Machine wash at 30ºC</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='border border-zinc-400 p-4 rounded-full'><PiStarFourFill className='h-2 w-2' /></div>
                            <div>
                                <h3 className='font-semibold max-[820px]:text-[0.8rem] max-[637px]:text-base'>Fabric material</h3>
                                <p className='text-sm max-[820px]:text-[0.7rem] max-[637px]:text-sm'>84% cotton, 16% polyester</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] max-[637px]:w-[80%] max-[425px]:w-full'>
                    <img width={"100%"} src={materialSectionImg} alt="clother images" />
                </div>
            </section>
            {/* About Material End */}

            {/* inspiration section Start */}
            <section className='mt-20 mx-2'>
                <div className='flex flex-col sm:flex-row sm:justify-between mx-2 lg:mx-20 xl:mx-48 items-center justify-center'>
                    <h2 className='text-4xl font-bold sm:text-3xl'>
                        Outfit inspiration <br />
                        Snag their style
                    </h2>
                    <div className='flex my-4 demo'>
                        <div className='bg-orange-600 w-6 h-6 rounded-full'></div>
                        <div className='bg-orange-300 w-6 h-6 -ml-1 rounded-full'></div>
                        <div className='bg-white border border-black w-6 h-6 -ml-1 rounded-full'></div>
                    </div>
                    <p className='text-zinc-600 leading-7 sm:text-sm md:text-base'>
                        Open communication and participation <br />
                        are pivotal elements of our company <br />
                        culture. How a bold idea spawned a <br />
                        leading European online platform.
                    </p>
                </div>
                <div className='text-center my-28 mb-30 relative'>
                    <h1 className='text-8xl font-bold max-[710px]:text-6xl max-[440px]:text-4xl'>STAY AHAD OF <br /> THE WORLD</h1>
                    <img className='w-[320px] max-[710px]:w-[200px] max-[710px]:left-[38%] max-[710px]:-top-10 max-[945px]:left-[30%] absolute -top-20 left-[38%]
                    max-[440px]:left-[32%] max-[440px]:-top-5 max-[440px]:w-[120px]' src={inspectionImg} alt="" />
                </div>
            </section>
            {/* inspiration section End */}

            {/* Product Slider Start */}
            <div className='mt-20'>
                <h1 className='-mb-20 ml-10 text-3xl font-bold'>NEW ARRIVALS</h1>
                <NewArrivalSlider />
            </div>
            {/* Product Slider End */}

        </>
    )
}
