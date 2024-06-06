import React, { useContext, useState } from 'react';
import JustHeader from '../download/JustHeader'
import Header from '../../layouts/Header';
import { ThemeContext } from '../../layouts/ThemeContext';
import Footer from '../../layouts/Footer';
import AnimatedText from '../../layouts/AnimatedText';
import Cards from './Cards';

function News() {
  const { isLightMode } = useContext(ThemeContext);
  return (
    <>
      <div className='bg-cover bg-center bg-no-repeat h-auto w-full' style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}>
        <Header />
        <div className='py-5 mt-10'>
          {/* <AnimatedText>   */}
          <h2 className='text-text font-semibold text-3xl pt-8 text-center'>News & Article</h2>
          {/* </AnimatedText>  */}
        </div>
        {/* seacrh input field */}
        <div className='flex items-center justify-center pb-8'>
          <div className=" px-4 flex justify-center items-center w-[80%] lg:w-[45%] rounded-full" style={{ height: '5rem' }}>

          </div>
        </div>
      </div>
      <div>
        <Cards />
        <Footer />
      </div>
    </>
  )
}

export default News