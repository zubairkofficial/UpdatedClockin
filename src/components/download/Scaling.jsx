import React, { useContext, useEffect, useState } from 'react'
import JustHeader from './JustHeader'
// import laptopmockup from 'assets/laptopmockup.png'
import WindowDownload from './WindowDownload'
import Plan from '../landingPage/Plan'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import { ThemeContext } from '../../layouts/ThemeContext';
import AnimatedText from '../../layouts/AnimatedText'
import axios from 'axios'
import Helpers from '../../Config/Helpers'
import Loader from '../../layouts/Loader'

const Scaling = () => {
    const { isLightMode } = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const [currentImages, setCurrentImages] = useState({ 'download-1': '', 'download-2': '' });
    const [currentContent, setCurrentContent] = useState({
        "plan-1": "",
        "plan-2": "",
    });
    const fetchImages = async () => {
        const sections = [
            { section: "download", id: "1" },
            { section: "download", id: "2" },
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
            console.log("imageres", response.data.images);
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
           "plan-1", "plan-2", "download-1", "download-2"
          ];
          sections.forEach(section => {
            const content = response.data.data.find(item => item.section === section);
            if (content) {
              fetchedContent[section] = content.content;
            }
          });
        //   console.log("coi", fetchedContent);
          setCurrentContent(fetchedContent);
        } catch (error) {
          console.log("Error in fetching data", error);
        }
      };
      useEffect(() => {
        const fetchData = async () => {
          await Promise.all([fetchContent(), fetchImages()]);
          setLoading(false);
        };
        fetchData();
        document.title = "Download | ClockIn";
      }, [isLightMode]);
    // useEffect(() => {
    //     fetchContent();
    //     fetchImages();
    //     document.title = "Donwload | ClockIn"
    // }, [isLightMode]);
    return (
        <>
        {loading ? (
            <Loader/>
        ): (
           <div>
            <div className='bg-footerBg bg-cover bg-center bg-no-repeat h-auto w-full ' style={{ backgroundImage: `url(${isLightMode ? 'assets/bg1.png' : 'assets/bg2.png'})` }}>
                <Header />
                <AnimatedText>
                    <div className='text-text text-center pt-[5rem]'>
                        <h3 className='font-semibold lg:text-3xl text-2xl'>{currentContent ['download-1'] || "Scaling Your Team"}</h3>
                        <h2 className='font-bold lg:text-7xl text-5xl pt-2'>{currentContent ['download-2'] || "With Clockin"}</h2>
                    </div>
                </AnimatedText>

                <div className='hidden lg:flex justify-center items-center container mx-auto'>
                    <div className='w-1/2'>
                        <img className='max-w-none hidden lg:block' src={
                            currentImages[`download-1`]
                                ? `${Helpers.basePath}${currentImages[`download-1`]}`
                                : "/assets/laptopmockup.png"
                        }
                            alt='laptopMockup' />
                        <img className='max-w-none block lg:hidden' src={
                            currentImages[`download-2`]
                                ? `${Helpers.basePath}${currentImages[`download-2`]}`
                                : "/assets/downloadsection.png"
                        }
                            alt='laptopMockup' />

                    </div>
                    <div className='hidden lg:block w-1/2 pl-[110px] '>
                        <AnimatedText>
                            <WindowDownload />
                        </AnimatedText>
                    </div>
                </div>
                <div className='ml-[-10%] flex justify-center lg:hidden '>
                    <img className='max-w-none block lg:hidden ' src={isLightMode ? `${Helpers.basePath}${currentImages[`download-2`]}` : 'assets/lightdownload.png'} alt='laptopMockup' />
                </div>
            </div>
            <div className='block lg:hidden bg-background text-text text-center py-10 px-10'>
                <h1>Download Software For</h1>
                <div className='flex justify-around'>
                    <div className='block align-items-center text-center py-5'>
                        <img src={isLightMode ? 'assets/windowslogo.png ' : 'assets/lightwindows.png '} className=' my-1 align-items-center pl-[25%]' />
                        <p className='text-xs text-gray-500'>Windows</p>
                    </div>
                    <div className='block align-items-center text-center py-5'>
                        <img src={isLightMode ? 'assets/applelogo.png ' : 'assets/lightapple.png '} className=' my-1 align-items-center pl-[25%]' />
                        <p className='text-xs text-gray-500'>Mac</p>
                    </div>
                    <div className='block align-items-center text-center py-5'>
                        <img src={isLightMode ? 'assets/linuxlogo.png ' : 'assets/lightlinux.png '} className=' my-1 align-items-center pl-[25%]' />
                        <p className='text-xs text-gray-500'>Linux</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <Plan className='hidden lg:block' currentContent={currentContent} />
                <Footer />
            </div> 
            </div>
        )}
        </>
    )
}

export default Scaling;
