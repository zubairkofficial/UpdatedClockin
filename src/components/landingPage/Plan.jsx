import React, { useContext, useState } from 'react';
import PlanCard from './PlanCard';
import { ThemeContext } from '../../layouts/ThemeContext';
import AnimatedText from '../../layouts/AnimatedText';

const Plan = ({ className , currentContent}) => {
  const [isSubscription, setIsSubscription] = useState(true);
  const { isLightMode } = useContext(ThemeContext);
  const selectedPlanType = isSubscription ? 'subscription' : 'one_time_payment';
  return (
    <div className={`${className}`}>
      <div className={`bg-lightpink`}>
        <h2 className='text-center text-[#FF8B42] text-2xl pt-12 font-semibold'>{currentContent["plan-1"] || "Pick the perfect Plan"}</h2>
        <div className='flex justify-center'>
        <p className='text-center text-gray-400 pt-6 p-5 lg:w-1/2 w-full'>{currentContent["plan-2"] || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex rem accusantium adipisci nemo et nihil, tenetur explicabo at, veritatis incidunt quos utvelit nam? Voluptas id natus dolor ad accusamus."}</p>
        </div>
      </div>
      {/* switch buttons */}
      <div className='flex justify-center pb-8 bg-lightpink'>
        <div className='flex items-center p-5'>
          <button
            className={`transition-all duration-300 ease-in-out text-xs lg:text-base
              ${isSubscription ? 'px-10 py-5 font-bold rounded-full' : 'px-8 py-3 bg-secondsubsbgcolor text-secondsubstextcolor font-bold rounded-full'}
            `}
            onClick={() => setIsSubscription(true)}
            style={{
              backgroundColor: isSubscription ? 'var(--subsbgcolor-color)' : '',
              color: isSubscription ? 'var(--substextcolor)' : '',
              zIndex: '9'
            }}
          >
            Subscription
          </button>
          <button
            className={`transition-all duration-300 ease-in-out text-xs lg:text-base
              ${isSubscription ? 'px-8 py-3 font-bold rounded-full bg-secondsubsbgcolor text-secondsubstextcolor' : 'px-10 py-5 font-bold rounded-full'}
            `}
            style={{
              marginLeft: '-5%',
              zIndex: isSubscription ? '' : '9',
              backgroundColor: isSubscription ? 'var(--secondsubsbgcolor-color)' : 'var(--subsbgcolor-color)',
              color: isSubscription ? 'var(--secondsubstextcolor-color)' : 'var(--substextcolor)'
            }}
            onClick={() => setIsSubscription(false)}
          >
            One time payment
          </button>
        </div>
      </div>
      <AnimatedText>
      <PlanCard isSubscription={isSubscription} />
      </AnimatedText>
    </div>
  );
}

export default Plan;
