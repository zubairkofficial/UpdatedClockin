import React, { useContext } from "react";
import Header from "../../layouts/Header";
import ToggleColorMode from "./ToggleColorMode";
import Hero from "./Hero";
import { ThemeContext } from '../../layouts/ThemeContext';
const HomePage = ({  background ,heading, subheading}) => {
    const { isLightMode } = useContext(ThemeContext);
    return (
        // <div>
        //     <Header
        //         logo="assets/logo.png"
        //         background="assets/bg1.png"
        //         heading={<span>Track Time, <br/> Maximize <br/> Productivity</span>}
        //         subheading="Here's the app for you"
        //     />
        //     <div className="container mx-auto px-4 relative">
        //         <div className="pl-8 flex gap-7 justify-center lg:justify-start lg:absolute lg:left-24 lg:bottom-24">
        //             <button className="bg-[#FF7A50] hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-2xl transition duration-300">Try it free</button>
        //             <button className="bg-transparent border border-orange-500 text-white hover:bg-white hover:text-orange-600 font-bold py-2 px-6 rounded-2xl transition duration-300"><i class="fa-solid fa-play mr-2"></i> Show me the demo</button>
        //         </div>
        //         <img src="assets/clock-illustration.png" alt="Clock Illustration" className=" mr-[6rem] mb-1 absolute right-0 bottom-0  max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mt-[3rem]" />
        //     </div>
        //     <Hero/>
        // </div>
        <div>
        <div
          className="bg-cover bg-no-repeat bg-center h-screen"
          style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}
        >
          <Header logo="assets/logo.png" />
          <div className="container mx-auto px-4 relative pt-20 pl-10">
            <p className="pl-16 text-lg lg:text-xl text-text dark:text-gray-700 mb-2">Here's the app for you</p>
            <h1 className="pl-16 text-[4rem] font-bold text-text leading-tight">
              Track Time, <br /> Maximize <br /> Productivity
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className=" flex gap-7 justify-center lg:justify-start lg:absolute lg:left-24 lg:bottom-24">
            <button className="bg-primary hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300">Try it free</button>
            <button className="bg-transparent border border-primary text-text dark:text-black hover:bg-white hover:text-primary font-bold py-2 px-6 rounded-2xl transition duration-300">
              <i className="fa-solid fa-play mr-2 text-text hover:text-primary"></i> Show me the demo
            </button>
          </div>
          <img
            src={isLightMode ? 'assets/clock-illustration.png' : 'assets/whiteclock.png'}
            alt="Clock Illustration"
            className="mr-[6rem] mb-1 absolute right-0 bottom-0 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mt-[3rem]"
          />
        </div>
        <Hero />
      </div>
    );
};

export default HomePage;
