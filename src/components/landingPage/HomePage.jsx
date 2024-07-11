import React, { useContext, useEffect, useState } from "react";
import Header from "../../layouts/Header";
import ToggleColorMode from "./ToggleColorMode";
import Hero from "./Hero";
import { ThemeContext } from "../../layouts/ThemeContext";
import AnimatedText from "../../layouts/AnimatedText";
import { Helmet } from 'react-helmet';
// import { SEOContext } from '../../context/SEOContext';
import { SEOContext } from "../../Config/SEOContext";
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
//   const fetchImages = async () => {
//     const sections = [
//         { section: "hero", id: "1" },
//         { section: "hero", id: "2" },
//         { section: "second", id: "1" },
//         { section: "third", id: "1" },
//         { section: "third", id: "2" },
//         { section: "third", id: "3" },
//     ];
//     const mode = isLightMode ? "dark" : "light";
//     try {
//         const response = await axios.post(`${Helpers.apiUrl}get-image`, {
//             sections: sections.map(s => `${s.section}-${s.id}`),
//             mode
//         });
//         const newImages = {};
//         response.data.images.forEach(image => {
//             newImages[image.section] = image.image_url;
//         });
//         // console.log("imageres", response.data.images);
//         setCurrentImages(newImages);
//     } catch (error) {
//         console.error("Error in fetching images", error);
//     }
// };
const fetchImages = async () => {
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
    const response = await axios.post(`${Helpers.apiUrl}get-image`, {
      sections: sections.map((s) => `${s.section}-${s.id}`),
      mode,
    });

    const newImages = {};
    response.data.images.forEach((image) => {
      newImages[image.section] = image.image_url;
    });

    await Promise.all(
      Object.values(newImages).map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; // Resolve even if the image fails to load
          })
      )
    );

    setCurrentImages(newImages);
  } catch (error) {
    console.error("Error in fetching images", error);
  }
};
  const fetchContent = async () => {
    try {
      const response = await axios.get(`${Helpers.apiUrl}content/show`);
      const fetchedContent = {};
      const sections = [
        "hero-1", "hero-2", "hero-3", "hero-4", "feature-1",
        "second-1", "second-2", "second-3", "third-1", "third-2",
        "fourth-1", "fourth-2", "fifth-1", "fifth-2", "sixth-1",
        "sixth-2", "plan-1", "plan-2", "achievement-1", "achievement-2"
      ];
      sections.forEach(section => {
        const content = response.data.data.find(item => item.section === section);
        if (content) {
          fetchedContent[section] = content.content;
        }
      });
      setCurrentContent(fetchedContent);
    } catch (error) {
      console.log("Error in fetching data", error);
    }
  };

  const getFeatures = async () => {
    try {
      const response = await axios.get(`${Helpers.apiUrl}getfeature`);
      // console.log('feature', response);
      setFeatures(response.data.data);
      setLoading(false)
    } catch (error) {
      console.log("error in fetching data", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Clear current images to avoid showing outdated images
      setCurrentImages({
        "hero-1": "",
        "hero-2": "",
        "second-1": "",
        "third-1": "",
        "third-2": "",
        "third-3": "",
      });
      await Promise.all([fetchContent(), fetchImages(), getFeatures()]);
      setLoading(false);
    };
    fetchData();
    document.title = "Home | ClockIn";
  }, [isLightMode]);
  
  const { seoData, fetchSEOData } = useContext(SEOContext);

  useEffect(() => {
    fetchSEOData('Home');
  }, []);
  useEffect(() => {
    if (seoData && seoData.schema_markup) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = seoData.schema_markup;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [seoData]);
  return (
    <>
    {seoData && (
        <Helmet>
          {/* <title>{seoData.title}</title> */}
          <meta name="description" content={seoData.description} />
          <meta name="keywords" content={seoData.keywords} />
          <link rel="canonical" href={seoData.canonical} />
          {/* <meta property="og:title" content="Insert Your Title Here" /> */}
          {Array.isArray(seoData.og) && seoData.og.map((ogTag, index) => (
            <meta key={index} property={`og:${ogTag.property}`} content={ogTag.content} />
          ))}
        </Helmet>
      )}
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
                          currentImages[`hero-${id}`]
                            ? `${Helpers.basePath}${currentImages[`hero-${id}`]}`
                            : isLightMode
                              ? "assets/clock-illustration.png"
                              : "assets/whiteclock.png"
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
                    <a href="/download" className="bg-[#ff7a50] text-white dark:text-black font-bold py-3 px-6 rounded-2xl transition duration-300">
                      {currentContent[`hero-2`] || "Try it free"}
                    </a>
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
