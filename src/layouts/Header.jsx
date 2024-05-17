// Header.js
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Header = ({ logo, background, heading, subheading }) => {
  const { isLightMode, setIsLightMode } = useContext(ThemeContext);

  return (
    // <header
    //   className="bg-cover bg-no-repeat bg-center h-screen"
    //   style={{ backgroundImage: `url(${background})` }}
    // >
    <div className="container mx-auto px-4 pt-8 lg:pt-16">
      <div className="flex justify-between items-center">
        <a href="/"><img src={isLightMode ? 'assets/logo.png' : 'assets/blacklogo.png'} alt="Logo" className="pl-14 h-12 mb-6 lg:mb-0" /></a>
        <nav>
          <ul className="flex space-x-4 lg:space-x-16 pr-20">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-text hover:text-primary'}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/download"
                className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-text hover:text-primary'}
              >
                Download
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FAQs"
                className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-text hover:text-primary'}
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-text hover:text-primary'}
              >
                Support
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="mr-[13%]">
          <div className="relative p-4">
            <button
              className={`absolute top-0 left-0 w-[5.5rem] h-10 rounded-lg text-[#f2f5f5] 
                           ${isLightMode ? 'bg-secondary z-10' : 'bg-[#FF7A50] font-bold z-10 w-[8rem] ml-[-11%]'}`}
              onClick={() => setIsLightMode(true)}
            >
              Light {!isLightMode ? 'Mode' : ''}
            </button>
            <button
              className={`absolute top-0 left-6 h-10 rounded-xl text-text ml-12
                           ${isLightMode ? 'bg-background font-bold z-20 w-[8rem] mr[5%]' : 'bg-[#EAEAEA] z-20 w-[5.5rem] ml-[5.5rem]'}`}
              onClick={() => setIsLightMode(false)}
            >
              Dark {isLightMode ? 'Mode' : ''}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
