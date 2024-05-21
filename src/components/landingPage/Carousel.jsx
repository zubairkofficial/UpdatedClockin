// import React, { useRef, useState } from 'react';

// const Carousel = ({ items }) => {
//   const itemsPerSlide = 3;
//   const totalSlides = Math.ceil(items.length / itemsPerSlide);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const carouselRef = useRef(null);

//   const goToSlide = (index) => {
//     if (carouselRef.current) {
//       const newScrollPosition = index * carouselRef.current.scrollWidth / totalSlides;
//       carouselRef.current.scroll({
//         left: newScrollPosition,
//         behavior: 'smooth'
//       });
//     }
//     setCurrentSlide(index);
//   };

//   const renderDots = () => {
//     return Array.from({ length: totalSlides }).map((_, index) => (
//       <span
//         key={index}
//         className={` mx-1 rounded-full cursor-pointer transition duration-150 ease-in-out ${
//           index === currentSlide ? 'h-4 w-4 bg-orange-500' : ' h-3 w-3 bg-gray-500'
//         }`}
//         onClick={() => goToSlide(index)}
//       ></span>
//     ));
//   };

//   const startIndex = currentSlide * itemsPerSlide;
//   const visibleItems = items.slice(startIndex, startIndex + itemsPerSlide);

//   return (
//     <div>
//       <div className='bg-[#222626] pb-12 pt-3 scroll-smooth' ref={carouselRef} >
//         <div className='bg-[#222626] pb-12 mt-16 flex gap-x-12 items-center justify-center   scroll-smooth' ref={carouselRef} >
//         {visibleItems.map(item => (
//           <div className=" max-w-sm rounded-lg  shadow-lg bg-[#2C3131] p-2" key={item.id} ref={carouselRef} >
//             <img className="pl-8 pt-2" src="assets/cyberify 10 1.png" alt="cyberify" />
//             <div className="px-6 py-4">
//               <p className="text-gray-400 text-base">
//                 “Game-changer! This time tracker software transformed how we work,
//                 enhancing accuracy and project management. A must-have for businesses.”
//               </p>
//               <div className='pt-5 flex items-start justify-start'>
//                 <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
//                 <span className='text-white pl-4 py-2 font-bold'>Saad Naeem</span>
//               </div>
//             </div>
//           </div>
//         ))}
//         </div>
//         <div className="dot-controls">
//         {renderDots()}
//       </div>
//       </div>
//       {/* <div className="carousel-container">
//         {visibleItems.map(item => (
//           <div key={item.id} className="carousel-card">
//             <img src={item.image} alt={item.title} />
//             <div>{item.title}</div>
//             <p>{item.description}</p>
//           </div>
//         ))}
//       </div>
//       <div className="dot-controls">
//         {renderDots()}
//       </div> */}
//     </div>
//   );
// };

// export default Carousel;
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
      <div className="mt-16 flex gap-x-12 items-center justify-center m-5 lg:ml-6 sm:mx-5  ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          // slidesPerView={3}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
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
              <div className=" lg:max-w-sm sm:w-full rounded-lg shadow-lg bg-background p-2">
                <img
                  className="pl-8 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="px-6 py-4">
                  <p className="text-gray-400 text-base">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 py-2 font-bold">
                      Saad Naeem
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" lg:max-w-sm sm:w-full rounded-lg  shadow-lg bg-background p-2">
                <img
                  className="pl-8 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="px-6 py-4">
                  <p className="text-gray-400 text-base">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 py-2 font-bold">
                      Saad Naeem
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" lg:max-w-sm sm:w-full rounded-lg  shadow-lg bg-background p-2">
                <img
                  className="pl-8 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="px-6 py-4">
                  <p className="text-gray-400 text-base">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 py-2 font-bold">
                      Saad Naeem
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" lg:max-w-sm sm:w-full rounded-lg  shadow-lg bg-background p-2">
                <img
                  className="pl-8 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="px-6 py-4">
                  <p className="text-gray-400 text-base">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 py-2 font-bold">
                      Saad Naeem
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" lg:max-w-sm sm:w-full rounded-lg  shadow-lg bg-background p-2">
                <img
                  className="pl-8 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="px-6 py-4">
                  <p className="text-gray-400 text-base">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 py-2 font-bold">
                      Saad Naeem
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" lg:max-w-sm sm:w-full rounded-lg  shadow-lg bg-background p-2">
                <img
                  className="pl-8 pt-2"
                  src="assets/cyberify 10 1.png"
                  alt="cyberify"
                />
                <div className="px-6 py-4">
                  <p className="text-gray-400 text-base">
                    “Game-changer! This time tracker software transformed how we
                    work, enhancing accuracy and project management. A must-have for
                    businesses.”
                  </p>
                  <div className="pt-5 flex items-start justify-start">
                    <img
                      class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="text-white pl-4 py-2 font-bold">
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
