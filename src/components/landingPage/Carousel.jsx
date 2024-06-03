import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
export default function Carousel() {
  return (
    <>
      <div className="mt-16 flex gap-x-12 items-center justify-center m-5 lg:ml-6 sm:mx-5 ">
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
          <div className=' ' >
            <SwiperSlide style={{ position: 'relative' }}>
              <div className=" lg:max-w-sm sm:w-full mx-5 rounded-lg shadow-lg bg-background lg:p-2 p-1">
                <img
                  className="lg:pl-8 pl-2 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="lg:px-6 px-2 lg:py-4 py-1">
                  <p className="text-gray-400 lg:text-base text-sm">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block lg:h-12 h-6 lg:w-12 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 lg:py-2 py-0 font-bold ">
                      Saad Naeem
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="mx-5 lg:max-w-sm sm:w-full rounded-lg shadow-lg bg-background lg:p-2 p-1">
                <img
                  className="lg:pl-8 pl-2 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="lg:px-6 px-2 lg:py-4 py-1">
                  <p className="text-gray-400 lg:text-base text-sm">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block lg:h-12 h-6 lg:w-12 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 lg:py-2 py-0 font-bold ">
                      Saad Naeem
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="mx-5 lg:max-w-sm sm:w-full rounded-lg shadow-lg bg-background lg:p-2 p-1">
                <img
                  className="lg:pl-8 pl-2 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="lg:px-6 px-2 lg:py-4 py-1">
                  <p className="text-gray-400 lg:text-base text-sm">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block lg:h-12 h-6 lg:w-12 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 lg:py-2 py-0 font-bold ">
                      Saad Naeem
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="mx-5 lg:max-w-sm sm:w-full rounded-lg shadow-lg bg-background lg:p-2 p-1">
                <img
                  className="lg:pl-8 pl-2 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="lg:px-6 px-2 lg:py-4 py-1">
                  <p className="text-gray-400 lg:text-base text-sm">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block lg:h-12 h-6 lg:w-12 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 lg:py-2 py-0 font-bold ">
                      Saad Naeem
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="mx-5 lg:max-w-sm sm:w-full rounded-lg shadow-lg bg-background lg:p-2 p-1">
                <img
                  className="lg:pl-8 pl-2 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="lg:px-6 px-2 lg:py-4 py-1">
                  <p className="text-gray-400 lg:text-base text-sm">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block lg:h-12 h-6 lg:w-12 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 lg:py-2 py-0 font-bold ">
                      Saad Naeem
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="mx-5 lg:max-w-sm sm:w-full rounded-lg shadow-lg bg-background lg:p-2 p-1">
                <img
                  className="lg:pl-8 pl-2 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="lg:px-6 px-2 lg:py-4 py-1">
                  <p className="text-gray-400 lg:text-base text-sm">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block lg:h-12 h-6 lg:w-12 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 lg:py-2 py-0 font-bold ">
                      Saad Naeem
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}
