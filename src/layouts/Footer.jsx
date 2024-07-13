
import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../layouts/ThemeContext';
import axios from 'axios';
import Helpers from '../Config/Helpers';

const Footer = () => {
  const { isLightMode } = useContext(ThemeContext);
  const [currentImages, setCurrentImages] = useState({ 'footer-1': '' });
  const [footer, setFooter] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const fetchFooter = async () => {
    try {
      const response = await axios.get(`${Helpers.apiUrl}footer/show`);
      setFooter(response.data.data);
      // console.log(response.data.data)
    } catch (error) {
      console.error('Error fetching footer', error);
    }
  };

  const fetchImage = async () => {
    const sections = [
      { section: "footer", id: "1" },
      { section: "footer", id: "2" },
    ];
    const mode = isLightMode ? "dark" : "light";
    try {
      const response = await axios.post(`${Helpers.apiUrl}get-image`, {
        sections: sections.map(s => `${s.section}-${s.id}`),
        mode
      });
      const newImages = {};
      response.data.images.forEach(image => {
        newImages[image.section] = image.image_url;
      });
      // console.log("imageres", response.data.images);
      setCurrentImages(newImages);
    } catch (error) {
      console.error("Error in fetching images", error);
    }
  };


  useEffect(() => {
    fetchImage();
    fetchFooter();
  }, [isLightMode]);

  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };
  return (
    <>
      <div className="py-12 px-8 bg-cover bg-center bg-no-repeat h-auto w-full bg-pinkbackground" style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}>
        <div className="lg:flex lg:justify-around lg:items-center">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            {['1'].map(id => (
              <a href="/">
                <img
                  src={
                    currentImages[`footer-${id}`]
                      ? `${Helpers.basePath}${currentImages[`footer-${id}`]}`
                      : isLightMode
                        ? 'assets/logo.png'
                        : 'assets/blacklogo.png'
                  }
                  alt="Logo"
                  className="h-12 mb-6"
                />

              </a>
            ))}
          </div>
          {/* Privacy Section */}
          {footer.map(footer => (
            <div className="lg:flex flex-col text-text hidden">
              <a href="#"><h2 className="font-bold text-[#FF7A50] hidden lg:block mb-3">{footer.menu}</h2></a>
              {JSON.parse(footer.submenu).map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  <a
                    href={`${item.link.startsWith('http://') || item.link.startsWith('https://') ? '' : '/'}${item.link}`}
                    className="text-[#ADB1B1] hidden lg:block"
                  >
                    {item.name}
                  </a>


                </div>
              ))}
            </div>
          ))}
          <div className="lg:flex flex-col text-white hidden">
            <a href="newsletter"><h2 className="font-bold text-[#FF7A50] pb-6 hidden lg:block">Newsletter</h2></a>
            <form className="flex items-center w-full">
              <div className="relative w-full flex">
                <input
                  className="rounded-l-full px-5 p-2 bg-inputcolor text-white text-sm hidden lg:block outline-none"
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

          <div className="mt-6">
            {footer.map((footerItem, idx) => (
              <div key={footerItem.id || idx}>
                <button
                  onClick={() => toggleDropdown(idx)}
                  className="w-full text-left py-3 font-bold text-[#FF7A50] flex justify-between"
                >
                  {footerItem.menu} <i className="fa-regular fa-chevron-down text-[#696969]"></i>
                </button>
                {openDropdown === idx && (
                  <div className="pl-4">
                    {(() => {
                      try {
                        const submenuItems = JSON.parse(footerItem.submenu);
                        return submenuItems.map((item, index) => (
                          <div className="pl-4" key={item.id || index}>
                            {/* <h3 className="text-[#ADB1B1]">{item.name}</h3> */}
                            {/* If you need links, use the following: */}
                            <a
                              href={`${item.link.startsWith('http://') || item.link.startsWith('https://') ? '' : '/'}${item.link}`}
                              // target='_blank'
                              rel='noopener noreferrer'
                              className="text-[#ADB1B1]"
                            >
                              {item.name}
                            </a>
                          </div>
                        ));
                      } catch (e) {
                        console.error("Invalid JSON in submenu:", footerItem.submenu);
                        return null;
                      }
                    })()}
                  </div>
                )}
              </div>
            ))}
            <div className="lg:hidden flex-col text-white flex ">
              <button
                onClick={() => toggleDropdown1()}
                className="w-full text-left py-3 font-bold text-[#FF7A50] flex justify-between"
              >
                Newsletter <i className="fa-regular fa-chevron-down text-[#696969]"></i>
              </button>
              {/* <a href="#newsletter" onClick={toggleDropdown1}>
                <h2 className="font-bold text-[#FF7A50] pb-6 lg:hidden">Newsletter</h2>
                <i className="fa-regular fa-chevron-down text-[#696969]"></i>
              </a> */}
              {isDropdownOpen && (
                <div className="lg:hidden">
                  <form className="flex items-center w-full">
                    <div className="relative w-full flex">
                      <input
                        className="rounded-l-full px-5 p-2 bg-inputcolor text-white text-sm outline-none"
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
        </div>
        <hr className="w-full border-t-1 border-[#4747476b] mt-20" />
        <br />
        <div className="pt-20 w-full">
          <p className={`${isLightMode ? 'text-[#646464]' : 'text-[#242424]'} font-thin text-center`} style={{ fontSize: "0.8rem" }}>
            Designed by ClockIn. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
