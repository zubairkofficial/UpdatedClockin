
import React, { useContext } from "react";
import { SocialIcon } from "react-social-icons";
import { Typography } from "@material-tailwind/react";

import { ThemeContext } from '../layouts/ThemeContext';
const Footer = () => {
  const { isLightMode } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="flex flex-wrap justify-around items-center py-12 px-8 bg-cover bg-center bg-no-repeat h-auto w-full" style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}>
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <a href="/">
            <img src={isLightMode ? 'assets/logo.png' : 'assets/blacklogo.png'}  alt="Logo" className="h-12 mb-6 " />
          </a>
        </div>
        <div className="flex flex-col gap-y-4 text-text">
          <a href="privacy"><h2 className="font-bold text-orange-500">Privacy</h2></a>
          <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
          <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
          <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
          <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
        </div>
        <div className="flex flex-col gap-y-4 text-text">
          <a href="terms&conditions"><h2 className="font-bold text-orange-500">Terms & Conditions</h2></a>
          <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
          <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
          <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
          <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
        </div>
        <div className="flex flex-col gap-y-4 text-text">
          <a href="contact"><h2 className="font-bold text-orange-500">Contact</h2></a>
          <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
          <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
          <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
          <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
        </div>
        <div className="flex flex-col  text-white">
          <a href="newsletter"><h2 className="font-bold text-orange-500 pb-6">Newsletter</h2></a>
          <form className="flex items-center w-full">
            <div className="relative w-full flex">
              <input
                className="rounded-l-full px-5 p-2 bg-inputcolor text-white text-sm"
                type="email"
                placeholder="Your email here"
              />
              <button
                className=" text-white bg-[#FF7A50] rounded-r-full px-5 py-2 text-sm"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          <div className="flex items-center gap-x-8 mt-8 text-[#FF8B42]">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#4747476b] mt-20" /> <br />
          <div className="flex justify-between pt-20">
            <p className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#242424]'} font-thin`} style={{fontSize:"0.8rem"}}>Designed by ClockIn. All
            Rights Reserved. </p>
            {/* <ul className="flex justify-between">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul> */}
          </div>
        {/* <div className="py-3">
          <Typography
            variant="small"
            className="text-left text-[#ADB1B1] md:mb-0 pt-2 pb-2 mb-2 pl-2"
          >
            &copy; {currentYear} <a href="https://cyberify.co/">Designed by ClockIn</a>. All
            Rights Reserved.
          </Typography>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
