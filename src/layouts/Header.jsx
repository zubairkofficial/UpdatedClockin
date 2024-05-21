import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { isLightMode, setIsLightMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 pt-8 lg:pt-16">

      <div className="flex justify-between items-center">
        <div className='flex'>
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
          <a href="/"><img src={isLightMode ? 'assets/logo.png' : 'assets/blacklogo.png'} alt="Logo" className="h-5 lg:h-12 lg:mb-0" /></a>
        </div>
        <nav className="hidden lg:flex">
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

        <div className="lg:block mr-[35%] lg:mr-[13%]">
          <div className="relative p-4">
            <button
              className={`absolute top-0 left-0 w-[5.5rem]  rounded-lg text-[#f2f5f5] py-3 font-[0.5rem] text-xs lg:text-base
                          ${isLightMode ? 'bg-secondary z-10 ' : 'bg-[#FF7A50] font-bold z-10 lg:w-[8rem] w-[6rem] ml-[-11%]'}`}
              onClick={() => setIsLightMode(true)}
            >
              Light {!isLightMode ? 'Mode' : ''}
            </button>
            <button
              className={`absolute top-0 left-6  rounded-xl text-text ml-12 py-3 text-xs lg:text-base
                          ${isLightMode ? 'bg-background font-bold z-20 lg:w-[8rem] w-[6rem] mr[5%]' : 'bg-[#EAEAEA] z-20 w-[5.5rem] lg:ml-[5.5rem] ml-[3.5rem]'}`}
              onClick={() => setIsLightMode(false)}
            >
              Dark {isLightMode ? 'Mode' : ''}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed left-0 top-0 w-80 h-full bg-background text-text shadow-lg z-50" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-text focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <nav className="mt-16">
              <ul className="flex flex-col space-y-4 px-6">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-text hover:text-primary'}
                    end
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/download"
                    className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-text hover:text-primary'}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Download
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/FAQs"
                    className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-text hover:text-primary'}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/support"
                    className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-text hover:text-primary'}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Support
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;