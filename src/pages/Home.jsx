import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { HiArrowNarrowRight } from "react-icons/hi";
import jacket1 from "../images/jacket-1.png"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import ReviewSlider from '../components/ReviewSlider';
export const Home = () => {
    return (
        <>
            <div className='flex gap-4 items-center justify-between mt-20 px-10'>
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
            </div>

            <div>
                <h1>POPULAR PRODUCTS</h1>
                <ReviewSlider/>
            </div>
        </>
    )
}
