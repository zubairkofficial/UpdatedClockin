import React from 'react'
import Stats from './Stats';
import DashboardComp from './DashboardComp';
import Plan from './Plan';
import Achievements from './Achievements';
import FeatureCard1 from './FeatureCard1';
import FeatureCard2 from './FeatureCard2';
import FeatureCard3 from './FeatureCard3';
import FeatureCard4 from './FeatureCard4';
import FeatureCard5 from './FeatureCard5';
import FeatureCard6 from './FeatureCard6';
import Footer from '../../layouts/Footer';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const Hero = () => {
    return (
        <section className='bg-pinkbackground mt-8'>
            <div className='container mx-auto'>
                <h2 className='text-text font-bold text-center py-8 sm:py-10 md:py-12 lg:py-16 text-xl lg:text-4xl'>
                    Our Application Features
                </h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                spaceBetween={30}
                navigation
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} mx-1 rounded-full cursor-pointer transition duration-150 ease-in-out h-3 w-3 mt-10 ${index === 0 ? 'bg-[#FF7A50]' : 'bg-gray-500'}"></span>`;
                    },
                }}
                scrollbar={{ draggable: true }}
                className="mySwiper"
                style={{ position: 'relative' }}
            >
                <SwiperSlide>
                    <FeatureCard1 />
                </SwiperSlide>
                <SwiperSlide>
                    <FeatureCard2 />
                </SwiperSlide>
                <SwiperSlide>
                    <FeatureCard3 />
                </SwiperSlide>
                </Swiper>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                spaceBetween={30}
                navigation
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} mx-1 rounded-full cursor-pointer transition duration-150 ease-in-out h-3 w-3 mt-10 ${index === 0 ? 'bg-[#FF7A50]' : 'bg-gray-500'}"></span>`;
                    },
                }}
                scrollbar={{ draggable: true }}
                className="mySwiper"
                style={{ position: 'relative' }}
            >
                <SwiperSlide>
                    <FeatureCard4 />
                </SwiperSlide>
                <SwiperSlide>
                    <FeatureCard5 />
                </SwiperSlide>
                <SwiperSlide>
                    <FeatureCard6 />
                </SwiperSlide>
            </Swiper>
            </div>


            <div className='flex flex-col lg:flex-row justify-between items-center px-8 md:px-16 lg:px-[160px] py-8 container mx-auto'>
                <div className='text-center lg:text-left lg:order-1 order-2'>
                    <h2 className='text-text font-bold lg:text-4xl text-2xl mb-4 lg:mb-8'>Why we are the <span className='text-[#FF7A50]'>best</span> & <br /> customers choose us</h2>
                    <p className='text-text mb-4 md:mb-8'>
                        Efficiency personalized. Clients choose us for seamless <br />time
                        tracking and unparalleled results.
                    </p>
                    <button className='mt-4 md:mt-8 lg:mt-12 bg-[#FF7A50] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300'>
                        Learn More
                    </button>
                </div>
                <img src="assets/f7.png" alt='whyus' className='mt-8 lg:mt-0 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg lg:order-2 order-1' />
            </div>

            <Stats />
            <DashboardComp />
            <Plan />
            <Achievements />
            <Footer />
        </section>

    )
}

export default Hero;
