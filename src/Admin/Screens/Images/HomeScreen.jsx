import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar.jsx'
import { ThemeContext } from '../../../layouts/ThemeContext.js';
import Helpers from '../../../Config/Helpers.js';
import axios from 'axios';
import SecondSection from '../Sections/SecondSection.js';
import ThirdSection from '../Sections/ThirdSection.js';
import FooterSection from '../Sections/FooterSection.js';
import Loader from '../../../layouts/Loader.js'
import DownloadSection from '../Sections/DownloadSection.js';
import DownloadScreen from './DownloadScreen.jsx';
const HomeScreen = () => {
    const { isLightMode, setIsLightMode } = useContext(ThemeContext);
    const [isLoading, setIsLoading] = useState(false)
    const [currentImages, setCurrentImages] = useState({ 'hero-1': '', 'hero-2': '', 'second-1': '', 'second-2': '', 'third-1': '', 'third-2': '', 'third-3': '', 'footer-1': '', 'download-1': '' });

    const handleImageChange = async (e, section, id) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            await handleUpdate(selectedImage, section, id);
        }
    };

    const handleUpdate = async (image, section, id) => {
        const formData = new FormData();
        formData.append('image_path', image);
        formData.append('mode', section.startsWith('second') ? 'dark' : (isLightMode ? 'dark' : 'light'));
        formData.append('section', `${section}-${id}`);
        try {
            const response = await axios.post(`${Helpers.apiUrl}upload-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            Helpers.toast("success", "Updated Successfully");
            fetchImages(section, id);
        } catch (error) {
            console.log("error", "Error in uploading file");
        }
    };

    const fetchImage = async (section, id) => {
        setIsLoading(true)
        try {
            const mode = section.startsWith('second') ? 'dark' : (isLightMode ? 'dark' : 'light');
            const response = await axios.get(`${Helpers.apiUrl}get-image/${section}-${id}/${mode}`);
            const imageUrl = response.data.image_url;
            setCurrentImages(prev => ({ ...prev, [`${section}-${id}`]: imageUrl }));
            setIsLoading(false)
            // console.log("iamg",response)
        } catch (error) {
            setIsLoading(false)
            console.log('error in fetching data');
        }
    };

    const fetchImages = async () => {
        const sections = [
            { section: "hero", id: "1" },
            { section: "hero", id: "2" },
            { section: "second", id: "1" },
            { section: "third", id: "1" },
            { section: "third", id: "2" },
            { section: "third", id: "3" },
            { section: "footer", id: "1" },
            { section: "footer", id: "2" },
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
            // console.log("imageres", response.data.images);
            setCurrentImages(newImages);
        } catch (error) {
            console.error("Error in fetching images", error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, [isLightMode]);

    return (
        <>
            <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
                <Sidebar />
                {isLoading ? (
                    <Loader />
                ) : (

                    <div style={{ marginTop: "-4%" }}>
                        <div className='d-flex align-items-center justify-between'>
                            <h1 className="font-bold ml-10 my-5">Hero Section</h1>
                            <div className="lg:block ml-[35%] lg:mr-[13%] md:mr-[20%]">
                                <div className="relative p-4">
                                    <button
                                        className={`absolute top-0 left-0 w-[5.5rem] rounded-lg text-[#000000] py-3 font-[0.5rem] text-xs lg:text-base
                                ${isLightMode ? 'bg-secondary z-10 ' : 'bg-[#FF7A50] font-bold z-10 lg:w-[8rem] w-[6rem]'}`}
                                        onClick={() => setIsLightMode(false)}
                                    >
                                        Light {!isLightMode ? 'Mode' : ''}
                                    </button>
                                    <button
                                        className={`absolute top-0 left-6 rounded-xl text-text ml-12 py-3 text-xs lg:text-base
                                ${isLightMode ? 'bg-background font-bold z-20 lg:w-[8rem] w-[6rem] mr[5%]' : 'bg-[#EAEAEA] z-20 w-[5.5rem] lg:ml-[5.5rem] ml-[3.5rem]'}`}
                                        onClick={() => setIsLightMode(true)}
                                    >
                                        Dark {isLightMode ? 'Mode' : ''}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start m-10">
                            <div className="flex flex-wrap gap-5">
                                {['1'].map(id => (
                                    <div key={id} className="p-5 bg-pinkbackground rounded-xl shadow-sm relative flex-1 flex items-center justify-center">
                                        <label
                                            htmlFor={`image-upload-hero-${id}`}
                                            className="absolute top-0 left-0 p-1 bg-white bg-opacity-75 rounded-full cursor-pointer"
                                            style={{ transform: "translate(-50%, -50%)" }}
                                        >
                                            <i className="fa fa-pencil" style={{ color: "black" }}></i>
                                        </label>
                                        <input
                                            id={`image-upload-hero-${id}`}
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => handleImageChange(e, 'hero', id)}
                                        />
                                        <img src={
                                            currentImages[`hero-${id}`]
                                                ? `${Helpers.basePath}${currentImages[`hero-${id}`]}`
                                                : isLightMode
                                                    ? "/assets/logo.png"
                                                    : "/assets/blacklogo.png"
                                        }

                                            className="w-80" />
                                    </div>
                                ))}
                                {['2'].map(id => (
                                    <div key={id} className="p-5 bg-pinkbackground rounded-xl shadow-sm relative flex-1">
                                        <label
                                            htmlFor={`image-upload-hero-${id}`}
                                            className="absolute top-0 left-0 p-1 bg-white bg-opacity-75 rounded-full cursor-pointer"
                                            style={{ transform: "translate(-50%, -50%)" }}
                                        >
                                            <i className="fa fa-pencil" style={{ color: "black" }}></i>
                                        </label>
                                        <input
                                            id={`image-upload-hero-${id}`}
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => handleImageChange(e, 'hero', id)}
                                        />
                                        <img src={
                                            currentImages[`hero-${id}`]
                                                ? `${Helpers.basePath}${currentImages[`hero-${id}`]}`
                                                : isLightMode
                                                    ? "/assets/clock-illustration.png"
                                                    : "/assets/whiteclock.png"
                                        } className="w-80" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <h1 className="font-bold ml-10 my-5">Second Section</h1>
                        <SecondSection handleImageChange={handleImageChange} currentImages={currentImages} />
                        <h1 className="font-bold ml-10 my-5">Third Section</h1>
                        <ThirdSection handleImageChange={handleImageChange} currentImages={currentImages} />
                        <h1 className="font-bold ml-10 my-5">Footer Section</h1>
                        <FooterSection handleImageChange={handleImageChange} currentImages={currentImages} />
                    </div>
                )}
            </div>
        </>
    );
}

export default HomeScreen;