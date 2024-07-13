import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../layouts/ThemeContext';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import Helpers from '../../Config/Helpers';

const PlanCard = ({ isSubscription }) => {
  const { isLightMode } = useContext(ThemeContext);
  const [plans, setPlans] = useState([])

  const fetchPlans = async () => {
    const response = await axios.get(`${Helpers.apiUrl}plans/show`)
    setPlans(response.data.data)
    // console.log('plans', response)
  }
  useEffect(() => {
    fetchPlans()
  }, [])
  const filteredPlan = plans.filter(plan => plan.plan_type === (isSubscription ? 'subscription' : 'one time payment'));
  return (
    <div className="lg:flex py-12 bg-planbackground w-full">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={30}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
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
          {filteredPlan.map(plan => (


            <SwiperSlide key={plan.id} className="flex myslide">
              <div className="relative bg-plancard rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none p-6 max-w-sm lg:w-full sm:w-full mx-8 my-5 text-white shadow-lg flex flex-col items-center ">
                <h3 className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'} font-semibold m-5`}>{plan.name}</h3>
                <p className="text-3xl font-bold mb-8 text-[#FF8B42]">${plan.price}</p>
                <hr className="border-[#81818146] w-full border-t-1 mb-6" />

                <div className={`flex flex-col justify-between items-center w-full border p-5 border-orange-400 rounded-lg ${isLightMode ? '' : 'bg-white'}`}>
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="text-[#FF8B42] font-semibold">Employee</span>
                    <span className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'}`}>{plan.employee}</span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[#FF8B42] font-semibold">Tasks</span>
                    <span className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'}`}>{plan.tasks}</span>
                  </div>
                </div>

                <div className="flex flex-col w-full mb-6 space-y-3 p-5">
                  {JSON.parse(plan.plan_feature).map((feature, index) => (
                    <div className="flex justify-between" key={index}>
                      <span className='text-text'>{feature.feature}</span>
                      {feature.included ? <span className="text-green-500">✔</span> : <span className="text-red-500">✖</span>}
                    </div>
                  ))}
                  {plan.offline_mode ? <div className='flex justify-center text-[#FF8B42] font-bold pt-5'>Offline</div> : ''}
                </div>

                <button className="bg-orange-500 text-white rounded-full px-6 py-2 font-semibold hover:bg-orange-600 transition-colors mb-6">
                  Choose Plan
                </button>

                {/* <p className="text-gray-400 text-xs text-center">Lorem Ipsum is simply dummy text</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PlanCard;