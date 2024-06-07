import React, { useContext, useEffect, useState } from "react";
import Header from "../../layouts/Header";
import ToggleColorMode from "./ToggleColorMode";
import Hero from "./Hero";
import { ThemeContext } from '../../layouts/ThemeContext';
import AnimatedText from "../../layouts/AnimatedText";
import axios from "axios";
import Helpers from "../../Config/Helpers";
const HomePage = ({ background, heading, subheading }) => {
  const { isLightMode } = useContext(ThemeContext);
  const [currentImages, setCurrentImages] = useState({ 'hero-1': '', 'hero-2': '','section-1': '' });
  const fetchImage = async (id) => {
    try {
        const response = await axios.get(`${Helpers.apiUrl}get-image/hero-${id}/${isLightMode ? 'dark' : 'light'}`);
        const imageUrl = response.data.image_url;
        setCurrentImages(prev => ({ ...prev, [`hero-${id}`]: imageUrl }));
        console.log(response);
    } catch (error) {
        console.log('error in fetching data');
    }
};

useEffect(() => {
    fetchImage('1');
    fetchImage('2');
}, [isLightMode]);
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen w-full relative"
        style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}
      >
        <Header logo="assets/logo.png" logourl={currentImages['hero-1']} />
        <div className="container mx-auto px-4 pt-7 relative">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-1/2 w-full lg:order-2 order-1 mt-8 lg:mt-0 flex justify-center">
              <AnimatedText>
              {['2'].map(id => (
                <div  key={id}>
                <img 
                  src={`${Helpers.basePath}${currentImages[`hero-${id}`]}` || ( isLightMode ? 'assets/clock-illustration.png' : 'assets/whiteclock.png')}
                  alt="Clock Illustration"
                  className="lg:static max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg ml-[6%] lg:ml-[0]"
                />
                </div>
              ))}
              </AnimatedText>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-16 sm:pl-0 lg:pt-9 lg:order-1 order-2 text-center lg:text-left">
              <AnimatedText>
                <p className="lg:text-lg sm:text-l text-text dark:text-gray-700 mb-2">Here's the app for you</p>
                <h1 className="text-[2.5rem] lg:text-[4rem] font-bold text-text leading-tight mb-12 lg:mb-0">
                  Track Time, <br /> Maximize <br /> Productivity
                </h1>
              </AnimatedText>
              <AnimatedText>
                <div className="mt-4 flex-col lg:flex-row gap-4 lg:block hidden">
                  <button className="bg-primary hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300">Try it free</button>
                  <button className="bg-transparent border border-primary text-text dark:text-black hover:bg-white hover:text-primary font-bold py-2 px-6 rounded-2xl transition duration-300 ml-3">
                    <i className="fa-solid fa-play mr-2 text-text hover:text-primary"></i> Show me the demo
                  </button>
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
        <Hero  currentImages={currentImages}/>
      </div>
    </>


  );
};

export default HomePage;
