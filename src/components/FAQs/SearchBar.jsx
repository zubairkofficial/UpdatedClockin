import React, { useContext, useState } from 'react';
import JustHeader from '../download/JustHeader'
import FaqsCards from './FaqsCards';
import Header from '../../layouts/Header';
import { ThemeContext } from '../../layouts/ThemeContext';
import Footer from '../../layouts/Footer';
import AnimatedText from '../../layouts/AnimatedText';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const { isLightMode } = useContext(ThemeContext);
  return (
    <>
      <div className='bg-cover bg-center bg-no-repeat h-auto w-full' style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}>
        <Header />
        <div className='py-5 mt-10'>
          {/* <AnimatedText>   */}
          <h2 className='text-text font-semibold text-3xl pt-8 text-center'>How Can We Help You?</h2>
          {/* </AnimatedText>  */}
        </div>
        {/* seacrh input field */}
        <div className='flex items-center justify-center pb-8'>
          <div className=" px-4 flex justify-center items-center w-[80%] lg:w-[45%] rounded-full" style={{ height: '5rem' }}>

            {/* <AnimatedText> */}
            <div className="flex items-center bg-inputcolor rounded-full overflow-hidden flex-grow">
              <input
                type="text"
                className="p-3 pl-8 text-gray-300 focus:outline-none w-[100%] bg-inputcolor"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button
                className="bg-[#FF7A50] hover:bg-orange-700 text-white p-4 rounded-full transition-colors duration-200"
                onClick={handleSearch}
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
            {/* </AnimatedText> */}
          </div>
        </div>
      </div>
      <div>
        <FaqsCards />
        <Footer />
      </div>
    </>
  );
};

export default SearchBar;