import React, { useContext, useState } from 'react'
import PlanCard from './PlanCard';
import { ThemeContext } from '../../layouts/ThemeContext';

const Plan = () => {
    const [isSubscription, setIsSubscription] = useState(true);
    const { isLightMode } = useContext(ThemeContext);
    return (
        <div className=''>
            <div className='bg-pinkbackground'>
                <h2 className='text-center text-[#FF8B42] text-2xl pt-12 font-semibold'>Pick the perfect Plan</h2>
                <p className='text-center text-gray-400 pt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex rem accusantium
                    adipisci<br />nemo et nihil, tenetur explicabo at, veritatis incidunt quos ut<br />velit nam? Voluptas id natus dolor ad accusamus.</p>
            </div>
            {/* switch buttons */}
            <div className='flex justify-center pt-12 pb-8 bg-pinkbackground'>
                <div className='relative flex items-center'>
                    <button
                        className={`absolute transition-all duration-300 ease-in-out
                        ${isSubscription ? 'px-10 py-5 bg-subsbgcolor text-substextcolor z-20 rounded-full font-bold' : 'px-8 py-3 bg-[#464B4B] text-[#acadad] z-10 rounded-full font-bold'}
                        `}
                        onClick={() => setIsSubscription(true)}
                        style={{ marginLeft: isSubscription ? '0' : '9rem' }}
                    >
                        Subscription
                    </button>
                    <button
                        className={` transition-all duration-300 ease-in-out
                        ${isSubscription ? 'px-8 py-3 bg-secondsubsbgcolor text-secondsubstextcolor font-bold z-10 rounded-full' : 'px-10 py-5 bg-[#FF8B42] text-white z-20 rounded-full font-bold'}
                        `}
                        style={{ marginLeft: isSubscription ? '10rem' : '-4rem' }}
                        onClick={() => setIsSubscription(false)}
                    >
                        One time payment
                    </button>
                </div>
            </div>
            <PlanCard isSubscription={isSubscription} />
        </div>
    )
}

export default Plan;
