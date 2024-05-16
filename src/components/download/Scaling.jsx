import React from 'react'
import JustHeader from './JustHeader'
// import laptopmockup from 'assets/laptopmockup.png'
import WindowDownload from './WindowDownload'
import Plan from '../landingPage/Plan'
import Footer from '../../layouts/Footer'

const Scaling = () => {
    return (
        <>
            <div className='bg-footerBg bg-cover '>
                <div>
                    <JustHeader />
                </div>
                <div className='text-white text-center pt-[5rem]'>
                    <h3 className='font-semibold text-3xl'>Scaling Your Team</h3>
                    <h2 className='font-bold text-7xl pt-2'>With Clockin</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-1/2	'>
                        <img className='max-w-none' src="assets/laptopmockup.png" alt='laptopMockup' />

                    </div>
                    <div className=' w-1/2 pl-[110px]'>
                        <WindowDownload />
                    </div>
                </div>
            </div>
            <div className=''>
                <Plan />
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Scaling;
