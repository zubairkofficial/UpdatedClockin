import React, { useState } from 'react'
import ToggleColorMode from '../landingPage/ToggleColorMode'
// import logo from 'D:/CyberifyProjects/toqeer/projects/ClockIn UI/src/assets/logo.png'
import { NavLink } from 'react-router-dom'

const JustHeader = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  return (
    <div className="container mx-auto px-4 pt-8 lg:pt-16">
      <div className="flex justify-between items-center">
        <a href='/'>
          <img src="assets/logo.png" alt="Logo" className="h-12 mb-6 lg:mb-0 pl-14" />
        </a>
        <ul className="flex space-x-4 lg:space-x-16 pr-20">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-orange-500'} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/download" className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-orange-500'}>
              Download
            </NavLink>
          </li>
          <li>
            <NavLink to="/FAQs" className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-orange-500'}>
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink to="/support" className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-orange-500'}>
              Support
            </NavLink>
          </li>
        </ul>
        <div className="mr-[13%]">
          <div className="relative p-4 ">
            <button
              className={`absolute top-0 left-0 w-[5.5rem] h-10 rounded-lg text-[#ADB1B1] 
                            ${isLightMode ? 'bg-[#464B4B] z-10' : 'bg-white font-bold z-10 w-[8rem] ml-[-11%]'}`}
              onClick={() => setIsLightMode(true)}
            >
              Light {!isLightMode ? 'Mode' : ''}
            </button>
            <button
              className={`absolute top-0 left-6  h-10 rounded-xl text-white ml-12
                            ${isLightMode ? 'bg-[#1A1C1C] font-bold z-20 w-[8rem] mr[5%] ' : 'bg-[#464B4B]  z-20 w-[5.5rem] ml-[5.5rem]'}`}
              onClick={() => setIsLightMode(false)}
            >
              Dark {isLightMode ? 'Mode' : ''}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JustHeader;