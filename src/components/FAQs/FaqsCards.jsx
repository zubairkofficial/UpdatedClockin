import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css/pagination';
import AnimatedText from '../../layouts/AnimatedText';
function FaqsCards() {
    return (
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
                    <SwiperSlide className="flex">
                        <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg card">
                            <div className="w-20 h-20 bg-imagebgcolor rounded-full ml-6 mt-6 flex-shrink-0">
                                <img className='px-4 py-4' src="assets/activity-tracker.png" alt="activity-tracker" />
                            </div>
                            <div className="px-6 py-4 flex-grow">
                                <div className="font-bold text-l mb-4 text-text mt-4">What is Time Tracker Software?</div>
                                <p className="text-gray-300 mb-3 text-sm">
                                    Time tracker software is a tool used to monitor and record the time spent on various tasks,
                                    projects, or activities. It helps individuals and organizations track their productivity,
                                    manage tasks efficiently, and bill clients.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex">
                        <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg card">
                            <div className="w-20 h-20 bg-imagebgcolor rounded-full ml-6 mt-6 flex-shrink-0">
                                <img className='px-4 py-4' src="assets/clockin activity.png" alt="clockin-activity" />
                            </div>
                            <div className="px-6 py-4 flex-grow">
                                <div className="font-bold text-l mb-4 text-text mt-4">Why should I use clockin?</div>
                                <p className="text-gray-300 mb-3 text-sm">
                                    Time tracker software boosts organization,
                                    productivity, and offers valuable insights
                                    into your time management. Align you personally with time management Ideal for
                                    hourly billing professionals & multitasking
                                    project.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex">
                        <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg card">
                            <div className="w-20 h-20 bg-imagebgcolor rounded-full ml-6 mt-6 flex-shrink-0">
                                <img className='px-4 py-4' src="assets/clockin work.png" alt="clockin-work" />
                            </div>
                            <div className="px-6 py-4 flex-grow">
                                <div className="font-bold text-l mb-4 text-text mt-4">How does clockin Work?</div>
                                <p className="text-gray-300 mb-3 text-sm">
                                    Time tracker software lets you create
                                    tasks, time them, and categorize activities.
                                    Arrange your meetings and tasks quickly by reducing the time.
                                    Advanced options include report
                                    generation, calendar integration, and
                                    reminders and billing.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex">
                        <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg card">
                            <div className="w-20 h-20 bg-imagebgcolor rounded-full ml-6 mt-6 flex-shrink-0">
                                <img className='px-4 py-4' src="assets/activity-tracker.png" alt="activity-tracker" />
                            </div>
                            <div className="px-6 py-4 flex-grow">
                                <div className="font-bold text-l mb-4 text-text mt-4">Is clockin Software suitable for individuals and teams?</div>
                                <p className="text-gray-300 mb-3 text-sm">
                                    Time tracker software can be used by
                                    both individuals and teams. It's beneficial
                                    for freelancers, consultants, remote workers, and project managers who want to monitor their time.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </AnimatedText>

            {/* second row */}
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
                    className="mySwiper "
                    style={{ position: 'relative', margin: '2%', padding: '1%' }}
                >
                    <div className='lg:flex items-stretch justify-center gap-x-9 p-8 sm:block  bg-black'>
                        <SwiperSlide className="flex">
                            <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg flex flex-col min-h-full">
                                <div className="w-20 h-20 bg-imagebgcolor rounded-full ml-6 mt-6 flex-shrink-0">
                                    <img className='px-4 py-4' src="assets/activity-tracker.png" />
                                </div>
                                <div className="px-6 py-4 flex-grow">
                                    <div className="font-bold text-l mb-4 text-text mt-4">What is Time Tracker Software?</div>
                                    <p className="text-gray-300 mb-3 text-sm">
                                        Time tracker software is a tool used to monitor and record the time spent on various tasks,
                                        projects, or activities. It helps individuals and organizations track their productivity,
                                        manage tasks efficiently, and bill clients.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="flex">
                            <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg flex flex-col min-h-full">
                                <div className="w-20 h-20 bg-imagebgcolor rounded-full ml-6 mt-6 flex-shrink-0">
                                    <img className='px-4 py-4' src="assets/clockin activity.png" />
                                </div>
                                <div className="px-6 py-4 flex-grow">
                                    <div className="font-bold text-l mb-4 text-text mt-4">Why should I use clockin?</div>
                                    <p className="text-gray-300 mb-3 text-sm">
                                        Time tracker software boosts organization,
                                        productivity, and offers valuable insights
                                        into your time management. Align you personally with time management Ideal for
                                        hourly billing professionals & multitasking
                                        project.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="flex">
                            <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg flex flex-col min-h-full">
                                <div className="w-20 h-20 bg-imagebgcolor rounded-full ml-6 mt-6 flex-shrink-0">
                                    <img className='px-4 py-4' src="assets/clockin work.png" />
                                </div>
                                <div className="px-6 py-4 flex-grow">
                                    <div className="font-bold text-l mb-4 text-text mt-4">How does clockin Work?</div>
                                    <p className="text-gray-300 mb-3 text-sm">
                                        Time tracker software lets you create
                                        tasks, time them, and categorize activities.
                                        Arrange your meetings and tasks quickly by reducing the time.
                                        Advanced options include report
                                        generation, calendar integration, and
                                        reminders.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="flex">
                            <div className="max-w-xs w-full rounded-3xl overflow-hidden shadow-xl bg-faqbg flex flex-col min-h-full">
                                <div className="w-20 h-20 bg-imagebgcolor rounded-full ml-6 mt-6 flex-shrink-0">
                                    <img className='px-4 py-4' src="assets/activity-tracker.png" />
                                </div>
                                <div className="px-6 py-4 flex-grow">
                                    <div className="font-bold text-l mb-4 text-text mt-4">Is clockin Software suitable for individuals and teams?</div>
                                    <p className="text-gray-300 mb-3 text-sm">
                                        Time tracker software can be used by
                                        both individuals and teams. It's beneficial
                                        for freelancers, consultants, remote workers, and project managers who want to monitor their time.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </AnimatedText>
        </div>
    );
}

export default FaqsCards;
