import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import axios from 'axios';
import Helpers from '../../Config/Helpers';

const App = ({currentContent}) => {
  const [achievements, setAchievement] = useState([])
  const getAchievements = async () => {
    try {
      const response = await axios.get(`${Helpers.apiUrl}achievements/show`);
      setAchievement(response.data.data);
      // console.log('ache', response);
    } catch (error) {
      console.log("error in fetching data", error);
    }
  };
  useEffect(() => {
    getAchievements();
}, []);
  return (
    <div className='bg-achbackground'>
    <div className=" pb-12 pt-3  container mx-auto px-0">
      <div className=''>
        <h2 className='text-center text-orange-600 text-2xl pt-12 font-semibold '>{currentContent['achievement-1'] || "Our Achievements From Clients"}</h2>
        <div className='flex justify-center'>
          
        <p className='text-center text-gray-400 pt-6 text-lg p-5 lg:w-1/2 sm:w-full'>{currentContent['achievement-2'] || 'Optimized productivity, streamlined tasks and improved efficiency with our innovative time tracker software.'}</p>
        </div>
      </div>
      <Carousel achievements={achievements} />
    </div>
    </div>
  );
};

export default App;
