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
  const [loading, setLoading] = useState(true);
  const [feature, setFeatures] = useState([])
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
    "hero-4": "",
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
  const fetchImages = async () => {
    // setLoading(true);
    const sections = [
      { section: "hero", id: "1" },
      { section: "hero", id: "2" },
      { section: "second", id: "1" },
      { section: "third", id: "1" },
      { section: "third", id: "2" },
      { section: "third", id: "3" },
    ];
    const mode = isLightMode ? "dark" : "light";
    try {
      const imagePromises = sections.map(({ section, id }) =>
        axios.get(`${Helpers.apiUrl}get-image/${section}-${id}/${mode}`)
      );
      const responses = await Promise.all(imagePromises);
      const newImages = {};
      responses.forEach((response, index) => {
        const { section, id } = sections[index];
        newImages[`${section}-${id}`] = response.data.image_url;
      });
      console.log("imageres", responses);
      setCurrentImages(newImages);
    } catch (error) {
      console.log("Error in fetching images", error);
    } finally {
      // setLoading(false);
    }
  };
  const fetchContent = async () => {
    const sections = [
      { section: "hero", id: "1" },
      { section: "hero", id: "2" },
      { section: "hero", id: "3" },
      { section: "hero", id: "4" },
      { section: "feature", id: "1" },
      { section: "second", id: "1" },
      { section: "second", id: "2" },
      { section: "second", id: "3" },
      { section: "third", id: "1" },
      { section: "third", id: "2" },
      { section: "fourth", id: "1" },
      { section: "fourth", id: "2" },
      { section: "fifth", id: "1" },
      { section: "fifth", id: "2" },
      { section: "sixth", id: "1" },
      { section: "sixth", id: "2" },
      { section: "plan", id: "1" },
      { section: "plan", id: "2" },
      { section: "achievement", id: "1" },
      { section: "achievement", id: "2" },
    ];

    const MAX_CONCURRENT_REQUESTS = 5; // Limit the number of concurrent requests

    const fetchChunk = async (chunk) => {
      const chunkPromises = chunk.map(({ section, id }) =>
        axios.get(`${Helpers.apiUrl}content/show/${section}-${id}`)
      );
      const chunkResponses = await Promise.all(chunkPromises);
      return chunkResponses;
    };

    try {
      let fetchedContent = {};
      for (let i = 0; i < sections.length; i += MAX_CONCURRENT_REQUESTS) {
        const chunk = sections.slice(i, i + MAX_CONCURRENT_REQUESTS);
        const chunkResponses = await fetchChunk(chunk);
        chunkResponses.forEach((response, index) => {
          const { section, id } = chunk[index];
          if (response.data.data) {
            fetchedContent[`${section}-${id}`] = response.data.data.content;
          }
        });
      }
      setCurrentContent(fetchedContent);
      console.log("Fetched content:", fetchedContent);
    } catch (error) {
      console.log("Error in fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  // const fetchContent = async () => {
  //   // setLoading(true);
  //   const sections = [
  //     { section: "hero", id: "1" },
  //     { section: "hero", id: "2" },
  //     { section: "hero", id: "3" },
  //     { section: "hero", id: "4" },
  //     { section: "feature", id: "1" },
  //     { section: "second", id: "1" },
  //     { section: "second", id: "2" },
  //     { section: "second", id: "3" },
  //     { section: "third", id: "1" },
  //     { section: "third", id: "2" },
  //     { section: "fourth", id: "1" },
  //     { section: "fourth", id: "2" },
  //     { section: "fifth", id: "1" },
  //     { section: "fifth", id: "2" },
  //     { section: "sixth", id: "1" },
  //     { section: "sixth", id: "2" },
  //     { section: "plan", id: "1" },
  //     { section: "plan", id: "2" },
  //     { section: "achievement", id: "1" },
  //     { section: "achievement", id: "2" },
  //   ];
  //   try {
  //     const contentPromises = sections.map(({ section, id }) =>
  //       axios.get(`${Helpers.apiUrl}content/show/${section}-${id}`)
  //     );
  //     const responses = await Promise.all(contentPromises);
  //     const fetchedContent = {};
  //     responses.forEach((response, index) => {
  //       const { section, id } = sections[index];
  //       if (response.data.data) {
  //         fetchedContent[`${section}-${id}`] = response.data.data.content;
  //       }
  //     });
  //     setCurrentContent(fetchedContent);
  //     console.log("text", responses);
  //   } catch (error) {
  //     console.log("Error in fetching data", error);
  //   } finally {
  //     // setLoading(false);
  //   }
  // };
  const getFeatures = async () => {
    // setLoading(true)
    try {
      const response = await axios.get(`${Helpers.apiUrl}getfeature`);
      console.log('feature', response);
      setFeatures(response.data.data);
      setLoading(false)
    } catch (error) {
      console.log("error in fetching data", error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchContent(), fetchImages(), getFeatures()]);
      setLoading(false);
    };
    fetchData();
    document.title = "Home | ClockIn";
  }, [isLightMode]);
  // useEffect(() => {
  //   fetchImages();
  //   fetchContent();
  //   document.title = "Home | ClockIn";
  // }, []);
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
                    {currentContent[`hero-4`] || "Here's the app for you"}
                  </p>
                  <h1 className="text-[2.5rem] lg:text-[4rem] font-bold text-text leading-tight mb-12 lg:mb-0">
                    {currentContent[`hero-1`] ||
                      "Track Time, Maximize Productivity"}
                  </h1>
                </AnimatedText>
                <AnimatedText>
                  <div className="mt-4 flex-col lg:flex-row gap-4 lg:block hidden">
                    <button className="bg-primary hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300">
                      {currentContent[`hero-2`] || "Try it free"}
                    </button>
                    <button className="group bg-transparent border border-primary text-text dark:text-black hover:bg-white hover:text-primary font-bold py-2 px-6 rounded-2xl transition duration-300 ml-3">
                      <i className="fa-solid fa-play mr-2 text-text group-hover:text-primary transition duration-300"></i>
                      {currentContent[`hero-3`] || "Show me the demo"}
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
            feature={feature}
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
