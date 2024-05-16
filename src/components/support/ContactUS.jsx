import React from 'react'
import JustHeader from '../download/JustHeader'
import AskQuestionForm from './AskQuestionForm'

const ContactUS = () => {
  return (
    <div>
      <div className='bg-footerBg bg-cover bg-center bg-no-repeat h-auto w-full'>
        <JustHeader />
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center  sm:py-8 md:py-20">
          <h2 className='text-white font-bold text-4xl pb-20 '>
            Contact Us
          </h2>
        </div>

        <div>
          <AskQuestionForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUS
