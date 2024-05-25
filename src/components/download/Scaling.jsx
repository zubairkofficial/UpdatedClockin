import React, { useContext } from 'react'
import JustHeader from './JustHeader'
// import laptopmockup from 'assets/laptopmockup.png'
import WindowDownload from './WindowDownload'
import Plan from '../landingPage/Plan'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import { ThemeContext } from '../../layouts/ThemeContext';
import AnimatedText from '../../layouts/AnimatedText'

const Scaling = () => {
    const { isLightMode } = useContext(ThemeContext);
    return (
        <>
            <div className='bg-footerBg bg-cover bg-center bg-no-repeat h-auto w-full ' style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}>
                <Header />
                <AnimatedText>
                    <div className='text-text text-center pt-[5rem]'>
                        <h3 className='font-semibold lg:text-3xl text-2xl'>Scaling Your Team</h3>
                        <h2 className='font-bold lg:text-7xl text-5xl pt-2'>With Clockin</h2>
                    </div>
                </AnimatedText>

                <div className='hidden lg:flex justify-center items-center container mx-auto'>
                    <div className='w-1/2'>
                        <img className='max-w-none hidden lg:block' src="assets/laptopmockup.png" alt='laptopMockup' />
                        <img className='max-w-none block lg:hidden' src="assets/downloadsection.png" alt='laptopMockup' />

                    </div>
                    <div className='hidden lg:block w-1/2 pl-[110px] '>
                        <AnimatedText>
                            <WindowDownload />
                        </AnimatedText>
                    </div>
                </div>
                <div className='ml-[-10%] flex justify-center lg:hidden '>
                    <img className='max-w-none block lg:hidden ' src={isLightMode ? 'assets/downloadsection.png' : 'assets/lightdownload.png'} alt='laptopMockup' />
                </div>
            </div>
            <div className='block lg:hidden bg-background text-text text-center py-10 px-10'>
                <h1>Download Software For</h1>
                <div className='flex justify-around'>
                    <div className='block align-items-center text-center py-5'>
                        <img src={isLightMode ? 'assets/windowslogo.png ' : 'assets/lightwindows.png '} className=' my-1 align-items-center pl-[25%]' />
                        <p className='text-xs text-gray-500'>Windows</p>
                    </div>
                    <div className='block align-items-center text-center py-5'>
                        <img src={isLightMode ? 'assets/applelogo.png ' : 'assets/lightapple.png '} className=' my-1 align-items-center pl-[25%]' />
                        <p className='text-xs text-gray-500'>Mac</p>
                    </div>
                    <div className='block align-items-center text-center py-5'>
                        <img src={isLightMode ? 'assets/linuxlogo.png ' : 'assets/lightlinux.png '} className=' my-1 align-items-center pl-[25%]' />
                        <p className='text-xs text-gray-500'>Linux</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <Plan className='hidden lg:block' />
                <Footer />
            </div>
        </>
    )
}

export default Scaling;
