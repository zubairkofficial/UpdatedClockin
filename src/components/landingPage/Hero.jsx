import React from 'react'
import Stats from './Stats';
import DashboardComp from './DashboardComp';
import Plan from './Plan';
import Achievements from './Achievements';
import FeatureCard1 from './FeatureCard1';
import FeatureCard2 from './FeatureCard2';
import FeatureCard3 from './FeatureCard3';
import FeatureCard4 from './FeatureCard4';
import FeatureCard5 from './FeatureCard5';
import FeatureCard6 from './FeatureCard6';

const Hero = () => {
    return (
        <section className='bg-[#2C3131] '>
            <div>
                <h2 className='text-white font-bold text-center py-8 sm:py-10 md:py-12 lg:py-16 text-4xl'>
                    Our Application Features
                </h2>
            </div>
            <div className='flex '>
                <FeatureCard1 />
                <FeatureCard2 />
                <FeatureCard3 />
            </div>
            <div className='flex py-12'>
                <FeatureCard4 />
                <FeatureCard5 />
                <FeatureCard6 />
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center px-8 md:px-16 lg:px-[160px] py-8'>
                <div className='text-center lg:text-left'>
                    <h2 className='text-white font-bold text-4xl mb-4 lg:mb-8'>Why we are the <span className='text-[#FF7A50]'>best</span> & <br /> customers choose us</h2>
                    <p className='text-gray-400 mb-4 md:mb-8'>
                        Efficiency personalized. Clients choose us for seamless <br />time
                        tracking and unparalleled results.
                    </p>
                    <button className='mt-4 md:mt-8 lg:mt-12 bg-[#FF7A50] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300'>
                        Learn More
                    </button>
                </div>
                <img src="assets/f7.png" alt='whyus' className='mt-8 lg:mt-0 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg' />
            </div>

            <Stats />
            <DashboardComp />
            <Plan />
            <Achievements />
        </section>

    )
}

export default Hero;
