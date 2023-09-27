import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./ReviewSlider.css"


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Avatar, Box, Flex, Heading, Image, Text, Wrap, WrapItem } from '@chakra-ui/react';

const URL = `https://platecrafters-moke-api.onrender.com/customer_reviews`;
export default function ReviewSlider() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [reviewData, setReviewData] = useState([])



    return (
        <>
            <div style={{ width: "80%", margin: "auto" }}>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <Box h={"260px"} mb={"40px"} p={5} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} borderRadius={3}>
                            <img src="https://placehold.co/300x300/png" alt="" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h={"260px"} mb={"40px"} p={5} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} borderRadius={3}>
                            <img src="https://placehold.co/300x300/png" alt="" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h={"260px"} mb={"40px"} p={5} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} borderRadius={3}>
                            <img src="https://placehold.co/300x300/png" alt="" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h={"260px"} mb={"40px"} p={5} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} borderRadius={3}>
                            <img src="https://placehold.co/300x300/png" alt="" />
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
