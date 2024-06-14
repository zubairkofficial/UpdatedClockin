import React, { useContext, useEffect, useState } from "react";
import Header from "../../layouts/Header";
import ToggleColorMode from "./ToggleColorMode";
import Hero from "./Hero";
import { ThemeContext } from "../../layouts/ThemeContext";
import AnimatedText from "../../layouts/AnimatedText";
import axios from "axios";
import Helpers from "../../Config/Helpers";
import Loader from "../../layouts/Loader";
const HomePage = ({ background, heading, subheading }) => {
  const [loading, setLoading] = useState(false);
  const { isLightMode } = useContext(ThemeContext);
  const [currentImages, setCurrentImages] = useState({
    "hero-1": "",
    "hero-2": "",
    "second-1": "",
    "third-1": "",
    "third-2": "",
    "third-3": "",
  });
  const [currentContent, setCurrentContent] = useState({
    "hero-1": "",
    "hero-2": "",
    "hero-3": "",
    "second-1": "",
    "second-2": "",
    "second-3": "",
    "third-1": "",
    "third-2": "",
    "fourth-1": "",
    "fourth-2": "",
    "fifth-1": "",
    "fifth-2": "",
  });
  const fetchImage = async (section, id) => {
    setLoading(true)
    try {
      const mode =
        section === "hero" ? (isLightMode ? "dark" : "light") : "dark";
      const response = await axios.get(
        `${Helpers.apiUrl}get-image/${section}-${id}/${mode}`
      );
      console.log("ref", response);
      const imageUrl = response.data.image_url;
      setCurrentImages((prev) => ({ ...prev, [`${section}-${id}`]: imageUrl }));
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log("error in fetching data", error);
    }
  };
  const fetchContent = async () => {
    const sections = [
      "hero-1",
      "hero-2",
      "hero-3",
      "second-1",
      "second-2",
      "second-3",
      "third-1",
      "third-2",
      "fourth-1",
      "fourth-2",
      "fifth-1",
      "fifth-2",
      "sixth-1",
      "sixth-2",
      "plan-1",
      "plan-2",
    ];
    try {
      setLoading(true)
      const fetchedContent = {};
      await Promise.all(
        sections.map(async (section) => {
          const response = await axios.get(
            `${Helpers.apiUrl}content/show/${section}`
          );
          if (response.data.data) {
            fetchedContent[section] = response.data.data.content;
          }
        })
      );
      setCurrentContent(fetchedContent);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log("Error in fetching data", error);
    }
  };

  useEffect(() => {
    fetchImage("hero", "1");
    fetchImage("hero", "2");
    fetchImage("second", "1");
    fetchImage("third", "1");
    fetchImage("third", "2");
    fetchImage("third", "3");
    fetchContent();
  }, [isLightMode]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="bg-cover bg-center bg-no-repeat h-screen w-full relative"
          style={{
            backgroundImage: `url(${isLightMode ? "assets/bg1.png" : "assets/bg2.png"
              })`,
          }}
        >
          <Header logo="assets/logo.png" logourl={currentImages["hero-1"]} />
          <div className="container mx-auto px-4 pt-7 relative">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="lg:w-1/2 w-full lg:order-2 order-1 mt-8 lg:mt-0 flex justify-center">
                <AnimatedText>
                  {["2"].map((id) => (
                    <div key={id}>
                      <img
                        src={
                          `${Helpers.basePath}${currentImages[`hero-${id}`]}`
                            ? isLightMode
                              ? "assets/clock-illustration.png"
                              : "assets/whiteclock.png"
                            : ""
                        }
                        alt="Clock Illustration"
                        className="lg:static max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg ml-[6%] lg:ml-[0]"
                      />
                    </div>
                  ))}
                </AnimatedText>
              </div>
              <div className="lg:w-1/2 w-full lg:pl-16 sm:pl-0 lg:pt-9 lg:order-1 order-2 text-center lg:text-left">
                <AnimatedText>
                  <p className="lg:text-lg sm:text-l text-text dark:text-gray-700 mb-2">
                    Here's the app for you
                  </p>
                  <h1 className="text-[2.5rem] lg:text-[4rem] font-bold text-text leading-tight mb-12 lg:mb-0">
                    {currentContent[`hero-1`] ||
                      "Track Time, Maximize Productivity"}
                  </h1>
                </AnimatedText>
                <AnimatedText>
                  <div className="mt-4 flex-col lg:flex-row gap-4 lg:block hidden">
                    <button className="bg-primary hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300">
                      {currentContent[`hero-2`] || 'Try it free'}
                    </button>
                    <button className="bg-transparent border border-primary text-text dark:text-black hover:bg-white hover:text-primary font-bold py-2 px-6 rounded-2xl transition duration-300 ml-3">
                      <i className="fa-solid fa-play mr-2 text-text hover:text-primary"></i>{" "}
                      {currentContent[`hero-3`] || 'Show me the demo'}
                    </button>
                  </div>
                </AnimatedText>
              </div>
            </div>
          </div>
          <Hero
            secondImage={currentImages["second-1"]}
            thirdImage1={currentImages["third-1"]}
            thirdImage2={currentImages["third-2"]}
            thirdImage3={currentImages["third-3"]}
            currentContent={currentContent}
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
