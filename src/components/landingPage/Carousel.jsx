import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from "axios";
import Helpers from "../../Config/Helpers";
// import 'swiper/css/scrollbar';
export default function Carousel({achievements}) {
  return (
    <>
      <div className="mt-16  m-5 lg:ml-6 sm:mx-5 ">
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
          {achievements.map(achievement  => (
            <SwiperSlide style={{ position: 'relative' }} key={achievement.id} className="flex myslide1">
              <div className=" lg:max-w-sm sm:w-full mx-5 rounded-lg shadow-md flex-fill bg-achcard lg:p-2 p-1">
                <img
                  className="lg:pl-8 pl-2 pt-2"
                  src={`${Helpers.basePath}/storage/${achievement.brand_logo}`}
                  alt="cyberify"
                />
                <div className="lg:px-6 px-2 lg:py-4 py-1">
                  <p className="text-gray-400 lg:text-base text-sm">
                    {achievement.review}
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block lg:h-12 h-6 lg:w-12 w-6 rounded-full ring-2 ring-pinkbackground"
                      src={`${Helpers.basePath}/storage/${achievement.user_image}`}
                      alt=""
                    />
                    <span className="text-text pl-4 lg:py-2 py-0 font-bold ">
                      {achievement.user_name}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
