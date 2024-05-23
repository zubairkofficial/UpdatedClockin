import React, { useContext } from 'react'
import JustHeader from '../download/JustHeader'
import AskQuestionForm from './AskQuestionForm'
import Header from '../../layouts/Header'

import { ThemeContext } from '../../layouts/ThemeContext';
import Footer from '../../layouts/Footer';
const ContactUS = () => {
  
  const { isLightMode } = useContext(ThemeContext);
  return (
    <div>
      <div className=' bg-cover bg-center bg-no-repeat h-auto w-full'  style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}>
        <Header />
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center  sm:py-8 md:py-20">
          <h2 className='text-text font-bold text-4xl pb-20 text-center pt-[5rem] lg:pt-[0rem]'>
            Contact Us
          </h2>
        </div>
      </div>

        <div>
          <AskQuestionForm />
          <Footer/>
        </div> 
    </div>
  )
}

export default ContactUS
