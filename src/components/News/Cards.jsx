import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css/pagination';
import AnimatedText from '../../layouts/AnimatedText';

function Cards() {
  return (
    <>
        <div className='bg-lightpink py-12'>
            <AnimatedText>
                <Swiper
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
                    <SwiperSlide className="flex myslide">
                        <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg card">
                            <div className="w-full h-[42%] rounded-full mt-1 flex-shrink-0 ">
                                <img className='px-4 py-4 rounded-3xl' src="/assets/article1.jpg" alt="activity-tracker" />
                            </div>
                            <div className="px-6 py-4 flex-grow">
                                <div className="font-bold text-l mb-4 text-text mt-4">Article Team lead will be here</div>
                                <p className="text-gray-300 mb-3 text-sm">
                                    Time tracker software can be used by
                                    both individuals and teams. It's beneficial
                                    for freelancers,
                                </p>
                                <button className='bg-primary hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300 '>Read more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex myslide">
                        <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg card">
                            <div className="w-full h-[42%] rounded-full mt-1 flex-shrink-0 ">
                                <img className='px-4 py-4 rounded-3xl' src="/assets/article2.jpg" alt="activity-tracker" />
                            </div>
                            <div className="px-6 py-4 flex-grow">
                                <div className="font-bold text-l mb-4 text-text mt-4">Article Team lead will be here</div>
                                <p className="text-gray-300 mb-3 text-sm">
                                    Time tracker software can be used by
                                    both individuals and teams. It's beneficial
                                    for freelancers,
                                </p>
                                <button className='bg-primary hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300 '>Read more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex myslide">
                        <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg card">
                            <div className="w-full h-[42%] rounded-full mt-1 flex-shrink-0 ">
                                <img className='px-4 py-4 rounded-3xl' src="/assets/article3.jpg" alt="activity-tracker" />
                            </div>
                            <div className="px-6 py-4 flex-grow">
                                <div className="font-bold text-l mb-4 text-text mt-4">Article Team lead will be here</div>
                                <p className="text-gray-300 mb-3 text-sm">
                                    Time tracker software can be used by
                                    both individuals and teams. It's beneficial
                                    for freelancers,
                                </p>
                                <button className='bg-primary hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300 '>Read more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex myslide">
                        <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg card">
                            <div className="w-full h-[42%] rounded-full mt-1 flex-shrink-0 ">
                                <img className='px-4 py-4 rounded-3xl' src="/assets/article1.jpg" alt="activity-tracker" />
                            </div>
                            <div className="px-6 py-4 flex-grow">
                                <div className="font-bold text-l mb-4 text-text mt-4">Article Team lead will be here</div>
                                <p className="text-gray-300 mb-3 text-sm">
                                    Time tracker software can be used by
                                    both individuals and teams. It's beneficial
                                    for freelancers,
                                </p>
                                <button className='bg-primary hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300 '>Read more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </AnimatedText>

        </div>
    </>
  )
}

export default Cards