import React from 'react'
import Header from '../../layouts/Header'

function Coming() {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('assets/bg1.png')` }}
      >
        <div className="container mx-auto px-4 pt-8 lg:pt-16">
          <div className="flex justify-between items-center">
            <a href="/"><img src='assets/logo.png' alt="Logo" className="pl-14 h-12 mb-6 lg:mb-0" /></a>
          </div>
          {/* <img src='assets/coming.png' className='ml-[10rem]'/> */}
          <div className="flex flex-col items-center justify-center h-screen ">
            <div className="block items-center justify-center w-[40rem] h-[40rem] bg-[#1A1E1E] rounded-full shadow-lg" 
            style={{ boxShadow: '0 -25px 15px -3px rgba(255, 122, 80, 0.5), 0 -4px 6px -2px rgba(255, 122, 80, 0.05)' }}>
              <h1 className="text-[4rem] font-bold text-center pt-[12rem] uppercase text-white">Coming Soon</h1>
              <div className="w-full max-w-md mt-8 ml-[5rem]">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-black">
                    <div
                      style={{ width: '70%' }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#FF7A50]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Coming