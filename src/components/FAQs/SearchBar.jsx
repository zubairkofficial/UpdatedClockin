import React, { useState } from 'react';
import JustHeader from '../download/JustHeader'
import FaqsCards from './FaqsCards';

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

  return (
    <>
      <div className='bg-footerBg bg-cover bg-center bg-no-repeat h-auto w-full'>
        <JustHeader />
        <div className='py-5 mt-10'>
          <h2 className='text-white font-semibold text-3xl pt-8 text-center'>How Can We Help You?</h2>
        </div>
        {/* seacrh input field */}
        <div className='flex items-center justify-center pb-8'>
        <div className=" px-4 flex justify-center items-center w-[45%] rounded-full" style={{ height: '5rem' }}>
          <div className="flex items-center bg-[#464B4B] rounded-full overflow-hidden flex-grow">
            <input
              type="text"
              className="p-3 pl-8 text-gray-300 focus:outline-none w-[100%] bg-[#464B4B]"
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
        </div>
        </div>
      </div>
      <div>
        <FaqsCards />
      </div>
    </>
  );
};

export default SearchBar;