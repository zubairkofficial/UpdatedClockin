import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useImages } from './ImageContext';

import { ThemeContext } from './ThemeContext';
import axios from 'axios';
import Helpers from '../Config/Helpers';

const Header = ({ logourl }) => {
  const { isLightMode, setIsLightMode } = useContext(ThemeContext);
  const [currentImages, setCurrentImages] = useState({ 'hero-1': '', 'hero-2': '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { images } = useImages();

  const fetchImage = async (id) => {
    try {
      const response = await axios.get(`${Helpers.apiUrl}get-image/hero-${id}/${isLightMode ? 'dark' : 'light'}`);
      const imageUrl = response.data.image_url;
      setCurrentImages(prev => ({ ...prev, [`hero-${id}`]: imageUrl }));
      // updateImage(`hero-${id}`, imageUrl); 
    } catch (error) {
      console.log('error in fetching data');
    }
  };

  useEffect(() => {
    fetchImage('1');
    fetchImage('2');
  }, [isLightMode]);


  return (
    <div className="container mx-auto px-4 pt-8 lg:pt-16">
      <div className="flex justify-between items-center">
        <div className='flex'>
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="#FF7A50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
          {['1'].map(id => (
            <a href="/">
              <img src={`${Helpers.basePath}${currentImages[`hero-${id}`]}` || (isLightMode ? 'assets/logo.png' : 'assets/blacklogo.png')} alt="Logo" className="h-5 lg:h-12 lg:mb-0 ml-4 lg:ml-0" />
            </a>
          ))}
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex space-x-4 lg:space-x-16 pr-8">
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
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) => isActive ? 'text-orange-500 hover:text-orange-500' : 'text-text hover:text-primary'}
              >
                News & Article
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="lg:block mr-[35%] lg:mr-[13%] md:mr-[20%]">
          <div className="relative p-4">
            <button
              className={`absolute top-0 left-0 w-[5.5rem]  rounded-lg text-[#f2f5f5] py-3 font-[0.5rem] text-xs lg:text-base
                          ${isLightMode ? 'bg-secondary z-10 ' : 'bg-[#FF7A50] font-bold z-10 lg:w-[8rem] w-[6rem] ml-[-21%]'}`}
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
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-14 right-5 text-text focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <nav className="mt-16">
              <a href="/"><img src={isLightMode ? 'assets/logo.png' : 'assets/blacklogo.png'} alt="Logo" className="h-5 lg:h-12 lg:mb-0 ml-4 lg:ml-0 pl-5" /></a>
              <ul className="flex flex-col space-y-5 px-10 pt-8">
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
