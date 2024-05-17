import React, { useContext } from "react";
import Header from "../../layouts/Header";
import ToggleColorMode from "./ToggleColorMode";
import Hero from "./Hero";
import { ThemeContext } from '../../layouts/ThemeContext';
const HomePage = ({  background ,heading, subheading}) => {
    const { isLightMode } = useContext(ThemeContext);
    return (
        <div>
        <div
          className="bg-cover bg-no-repeat bg-center h-screen"
          style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}
        >
          <Header logo="assets/logo.png" />
          <div className="container mx-auto px-4 relative pt-20 pl-10">
            <p className="lg:pl-16 sm:pl-0 lg:text-lg sm:text-l text-text dark:text-gray-700 mb-2">Here's the app for you</p>
            <h1 className="lg:pl-16 sm:pl-10 text-[2.5rem] lg:text-[4rem] font-bold text-text leading-tight">
              Track Time, <br /> Maximize <br /> Productivity
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className=" lg:flex sm:block gap-7 justify-center lg:justify-start lg:absolute lg:left-24 lg:bottom-24">
            <button className="bg-primary hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300">Try it free</button>
            <button className="bg-transparent border border-primary text-text dark:text-black hover:bg-white hover:text-primary font-bold py-2 px-6 rounded-2xl transition duration-300">
              <i className="fa-solid fa-play mr-2 text-text hover:text-primary"></i> Show me the demo
            </button>
          </div>
          <img
            src={isLightMode ? 'assets/clock-illustration.png' : 'assets/whiteclock.png'}
            alt="Clock Illustration"
            className="lg:mr-[6rem] mb-1 absolute right-0 bottom-0 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg lg:mt-[3rem] sm:mt-0 sm:ml-5"
          />
        </div>
        <Hero />
      </div>
    );
};

export default HomePage;
