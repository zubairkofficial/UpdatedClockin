import React from 'react';
import { Link,  } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AnimatedText from '../../layouts/AnimatedText';
import Helpers from '../../Config/Helpers';

function Cards({chunkedNews}) {
    
    const truncateText = (text, wordLimit) => {
        return text.split(' ').slice(0, wordLimit).join(' ') + '...';
    };
    return (
        <>
            <div className='bg-lightpink py-12 container mx-auto rounded-3xl'>
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
                        style={{ position: 'relative', padding: '2%' }}
                    >
                        {newsChunk.map((news, index) => (
                            <SwiperSlide key={index} className="flex myslide1">
                                <div className="max-w-xs w-full rounded-lg overflow-hidden cardshadow bg-faqbg card flex-fill">
                                    <div className="w-full  rounded-t-lg overflow-hidden flex-shrink-2">
                                        <img className='w-full h-[30vh] object-cover' src={`${Helpers.basePath}/storage/${news.image}`} alt={news.title} />
                                    </div>
                                    <div className="px-5 py-4 flex-grow pb-5">
                                        <div className="font-bold text mb-4 text-text mt-2">{truncateText(news.title , 5)}</div>
                                        {/* <p className="text-text mb-3 text-sm" dangerouslySetInnerHTML={{ __html : news.description}}>
                                        </p> */}
                                        {/* {truncateText(news.description, 10)} */}
                                        <Link to={`/news/${news.slug}`} className='bg-primary text-white font-bold py-2 px-6 rounded-xl transition duration-300 mt-auto'>Read more</Link>
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