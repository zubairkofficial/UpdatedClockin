
import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../layouts/ThemeContext';
import axios from 'axios';
import Helpers from '../Config/Helpers';

const Footer = () => {
  const { isLightMode } = useContext(ThemeContext);
  const [currentImages, setCurrentImages] = useState({ 'footer-1': '' });
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  const fetchImage = async (id) => {
    try {
      const response = await axios.get(`${Helpers.apiUrl}get-image/footer-${id}/${isLightMode ? 'dark' : 'light'}`);
      const imageUrl = response.data.image_url;
      setCurrentImages(prev => ({ ...prev, [`footer-${id}`]: imageUrl }));
      // updateImage(`hero-${id}`, imageUrl); 
    } catch (error) {
      console.log('error in fetching data');
    }
  };

  useEffect(() => {
    fetchImage('1');
  }, [isLightMode]);


  return (
    <>
      <div className="py-12 px-8 bg-cover bg-center bg-no-repeat h-auto w-full bg-pinkbackground" style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}>
        <div className="lg:flex lg:justify-around lg:items-center">
          <div className="flex flex-col items-center mb-6 md:mb-0">
          {['1'].map(id => (
            <a href="/">
              <img src={`${Helpers.basePath}${currentImages[`footer-${id}`]}` || (isLightMode ? 'assets/logo.png' : 'assets/blacklogo.png')} alt="Logo" className="h-12 mb-6 " />
            </a>
          ))}
          </div>
          {/* Privacy Section */}
          <div className="flex flex-col gap-y-4 text-text">
            <a href="privacy"><h2 className="font-bold text-[#FF7A50] hidden lg:block">Privacy</h2></a>
            <h3 className="text-[#ADB1B1] hidden lg:block">Torquatos nostros?</h3>
            <h3 className="text-[#ADB1B1] hidden lg:block">Certe, inquam</h3>
            <h3 className="text-[#ADB1B1] hidden lg:block">Torquatos nostros?</h3>
            <h3 className="text-[#ADB1B1] hidden lg:block">Certe, inquam</h3>
          </div>
          {/* Terms & Conditions Section */}
          <div className="flex flex-col gap-y-4 text-text">
            <a href="terms&conditions"><h2 className="font-bold text-[#FF7A50] hidden lg:block">Terms & Conditions</h2></a>
            <h3 className="text-[#ADB1B1] hidden lg:block">Torquatos nostros?</h3>
            <h3 className="text-[#ADB1B1] hidden lg:block">Certe, inquam</h3>
            <h3 className="text-[#ADB1B1] hidden lg:block">Torquatos nostros?</h3>
            <h3 className="text-[#ADB1B1] hidden lg:block">Certe, inquam</h3>
          </div>
          {/* Contact Section */}
          <div className="flex flex-col gap-y-4 text-text ">
            <a href="contact"><h2 className="font-bold text-[#FF7A50] hidden lg:block">Contact</h2></a>
            <h3 className="text-[#ADB1B1] hidden lg:block">Torquatos nostros?</h3>
            <h3 className="text-[#ADB1B1] hidden lg:block">Certe, inquam</h3>
            <h3 className="text-[#ADB1B1] hidden lg:block">Torquatos nostros?</h3>
            <h3 className="text-[#ADB1B1] hidden lg:block">Certe, inquam</h3>
          </div>
          {/* Newsletter Section */}
          <div className="flex flex-col text-white">
            <a href="newsletter"><h2 className="font-bold text-[#FF7A50] pb-6 hidden lg:block">Newsletter</h2></a>
            <form className="flex items-center w-full">
              <div className="relative w-full flex">
                <input
                  className="rounded-l-full px-5 p-2 bg-inputcolor text-white text-sm hidden lg:block"
                  type="email"
                  placeholder="Your email here"
                />
                <button
                  className="text-white bg-[#FF7A50] rounded-r-full px-5 py-2 text-sm hidden lg:block "
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
            <div className="flex items-center gap-x-8 mt-8 text-[#FF8B42]">
              <i className="fa-brands fa-instagram hidden lg:block"></i>
              <i className="fa-brands fa-twitter hidden lg:block"></i>
              <i className="fa-brands fa-facebook hidden lg:block"></i>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          {/* Mobile view dropdowns */}
          <div className="  mt-6">
            <button onClick={() => setShowPrivacy(!showPrivacy)} className="w-full text-left py-3 font-bold text-[#FF7A50] flex justify-between">
              Privacy <i class="fa-regular fa-chevron-down text-[#696969]"></i>
            </button>
            {showPrivacy && (
              <div className="pl-4">
                <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
                <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
                <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
                <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
              </div>
            )}
          </div>
          <div className="border-t border-[#5f5f5f2a] mt-6">
            <button onClick={() => setShowTerms(!showTerms)} className="w-full text-left py-3 font-bold text-[#FF7A50] flex justify-between">
              Terms & Conditions <i class="fa-regular fa-chevron-down text-[#696969]"></i>
            </button>
            {showTerms && (
              <div className="pl-4">
                <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
                <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
                <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
                <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
              </div>
            )}
          </div>
          <div className="border-t border-[#5f5f5f2a] mt-6">
            <button onClick={() => setShowContact(!showContact)} className="w-full text-left py-3 flex justify-between font-bold text-[#FF7A50]">
              Contact <i class="fa-regular fa-chevron-down text-[#696969]"></i>
            </button>
            {showContact && (
              <div className="pl-4">
                <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
                <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
                <h3 className="text-[#ADB1B1]">Torquatos nostros?</h3>
                <h3 className="text-[#ADB1B1]">Certe, inquam</h3>
              </div>
            )}
          </div>
          <div className="border-t border-[#5f5f5f2a] mt-6">
            <button onClick={() => setShowNewsletter(!showNewsletter)} className="w-full text-left py-3 font-bold text-[#FF7A50] flex justify-between">
              Newsletter <i class="fa-regular fa-chevron-down text-[#696969]"></i>
            </button>
            {showNewsletter && (
              <div className="pl-4">
                <form className="flex items-center w-full mb-4">
                  <div className="relative w-full flex">
                    <input
                      className="rounded-l-full px-5 p-2 bg-inputcolor text-white text-sm"
                      type="email"
                      placeholder="Your email here"
                    />
                    <button
                      className="text-white bg-[#FF7A50] rounded-r-full px-5 py-2 text-sm"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
                <div className="flex items-center gap-x-8 mt-8 text-[#FF8B42]">
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-facebook"></i>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#4747476b] mt-20" />
        <br />
        <div className="pt-20 w-full">
          <p className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#242424]'} font-thin text-center`} style={{ fontSize: "0.8rem" }}>
            Designed by ClockIn. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
