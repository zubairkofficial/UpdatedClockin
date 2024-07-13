import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AnimatedText from '../../layouts/AnimatedText';
import { useScroll } from 'framer-motion';
import axios from 'axios';
import Helpers from '../../Config/Helpers';
function FaqsCards({ searchQuery }) {
    const [faqs, setFaq] = useState([])
    const getFaq = async () => {
        const response = await axios.get(`${Helpers.apiUrl}faqs/show`);
        setFaq(response.data.data);
    }
    useEffect(() => {
        getFaq();
    }, [])
    const filteredFaqs = faqs.filter(faq =>
        faq.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    const chunkedfaqs = Helpers.chunkArray(filteredFaqs, 4);
    return (
        <div className='bg-pinkbackground'>
            <div className='py-12 container mx-auto rounded-3xl'>
                <AnimatedText>
                    {chunkedfaqs.map((faqChunk, chunkIndex) => (
                        <Swiper
                            key={chunkIndex}
                            modules={[Navigation, Pagination, Scrollbar]}
                            spaceBetween={18}
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
                            {faqChunk.map((faq, index) => (
                                <SwiperSlide className="flex myslide1" key={index}>
                                    <div className="max-w-xs w-full rounded-2xl overflow-hidden shadow-md bg-background card">
                                        <div className="w-20 h-20 bg-imagebgcolor rounded-full ml-6 mt-6 flex-shrink-0">
                                            <img className='px-4 py-4' src={`${Helpers.basePath}/storage/${faq.image}`} alt="activity-tracker" />
                                        </div>
                                        <div className="px-6 py-4 flex-grow">
                                            <div className="font-bold text-l mb-4 text-text mt-4">{faq.title}</div>
                                            <p className="text-gray-500 mb-3 text-sm">
                                                {faq.description}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ))}
                </AnimatedText>
            </div>
        </div>
    );
}

export default FaqsCards;
