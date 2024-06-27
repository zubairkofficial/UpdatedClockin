import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AnimatedText from '../../layouts/AnimatedText';
import axios from 'axios';
import Helpers from '../../Config/Helpers';

function Cards({chunkedNews}) {
    
    const truncateText = (text, wordLimit) => {
        return text.split(' ').slice(0, wordLimit).join(' ') + '...';
    };
    return (
        <>
            <div className='bg-lightpink py-12'>
            <AnimatedText>
                {chunkedNews.map((newsChunk, chunkIndex) => (
                    <Swiper
                        key={chunkIndex}
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        navigation
                        scrollbar={{ draggable: true }}
                        className="mySwiper"
                        style={{ position: 'relative', margin: '2%', padding: '1%' }}
                    >
                        {newsChunk.map((news, index) => (
                            <SwiperSlide key={index} className="flex myslide">
                                <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg card ">
                                    <div className="w-full  rounded-t-3xl overflow-hidden flex-shrink-0">
                                        <img className='w-full h-full object-cover' src={`${Helpers.basePath}/storage/${news.image}`} alt={news.title} />
                                    </div>
                                    <div className="px-6 py-4 flex-grow pb-5">
                                        <div className="font-bold text-lg mb-4 text-text mt-2">{news.title}</div>
                                        <p className="text-text mb-3 text-sm">
                                        {truncateText(news.description, 10)}
                                        </p>
                                        <Link to={`/news/${news.slug}`} className='bg-primary text-text dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300 '>Read more</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ))}
            </AnimatedText>
        </div>
        </>
    )
}

export default Cards