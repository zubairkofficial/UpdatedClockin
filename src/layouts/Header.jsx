import React, { useState } from "react";
import ToggleColorMode from '../components/landingPage/ToggleColorMode';
import { NavLink } from 'react-router-dom';

const Header = ({ logo, background, heading, subheading }) => {
  const [isLightMode, setIsLightMode] = useState(true);
  return (
    <header
      className="bg-cover bg-no-repeat bg-center h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto px-4 pt-8 lg:pt-16">
        <div className="flex justify-between items-center">
          <a href="/"><img src={logo} alt="Logo" className=" pl-14 h-12 mb-6 lg:mb-0" /></a>
          <nav>
            <ul className="flex space-x-4 lg:space-x-16 pr-20">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-orange-500'}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/download"
                  className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-orange-500'}
                >
                  Download
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/FAQs"
                  className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-orange-500'}
                >
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-white hover:text-orange-500'}
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </nav>
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

        {/* <div className="flex flex-col items-center lg:items-start lg:absolute lg:top-1/2 lg:left-24 lg:-translate-y-1/2"> */}
        <div className="container mx-auto px-4 relative pt-20 pl-10">
          <p className="pl-16 text-lg lg:text-xl text-[#ADB1B1] mb-2">{subheading}</p>
          <h1 className="pl-16 text-[4rem] font-bold text-white leading-tight">
            {heading}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;