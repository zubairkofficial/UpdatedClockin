import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { ThemeContext } from './../../layouts/ThemeContext.js';
import Header1 from './../../layouts/Header.jsx'
import Header2 from '../Components/Header.jsx'
import { useImages } from '../../layouts/ImageContext.js';
import Helpers from '../../Config/Helpers';
import axios from 'axios';
import SecondSection from './Sections/SecondSection.js';
const HomeScreen = () => {
    const { isLightMode, setIsLightMode } = useContext(ThemeContext);
    const [currentImages, setCurrentImages] = useState({ 'hero-1': '', 'hero-2': '', 'second-1': '', 'second-2': '' });

    const handleImageChange = async (e, section, id) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            await handleUpdate(selectedImage, section, id);
        }
    };

    const handleUpdate = async (image, section, id) => {
        const formData = new FormData();
        formData.append('image_path', image);
        formData.append('mode', section.startsWith('second') ? 'dark' : (isLightMode ? 'light' : 'dark'));
        formData.append('section', `${section}-${id}`);
        try {
            const response = await axios.post(`${Helpers.apiUrl}upload-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            Helpers.toast("success", "Updated Successfully");
            fetchImage(section, id);
        } catch (error) {
            console.log("error", "Error in uploading file");
        }
    };

    const fetchImage = async (section, id) => {
        try {
            const mode = section.startsWith('second') ? 'dark' : (isLightMode ? 'light' : 'dark');
            const response = await axios.get(`${Helpers.apiUrl}get-image/${section}-${id}/${mode}`);
            const imageUrl = response.data.image_url;
            setCurrentImages(prev => ({ ...prev, [`${section}-${id}`]: imageUrl }));
            console.log(response);
        } catch (error) {
            console.log('error in fetching data');
        }
    };

    useEffect(() => {
        fetchImage('hero', '1');
        fetchImage('hero', '2');
        fetchImage('second', '1');
        fetchImage('second', '2');
    }, [isLightMode]);

    return (
        <>
            {/* <Header2 logo="assets/logo.png" logourl={currentImages['hero-1']} /> */}
            <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
                <Sidebar />
                <h1 className="font-bold ml-10 my-5">Hero Section</h1>
                <div className="lg:block ml-[35%] lg:mr-[13%] md:mr-[20%]">
                    <div className="relative p-4">
                        <button
                            className={`absolute top-0 left-0 w-[5.5rem] rounded-lg text-[#000000] py-3 font-[0.5rem] text-xs lg:text-base
                                ${isLightMode ? 'bg-secondary z-10 ' : 'bg-[#FF7A50] font-bold z-10 lg:w-[8rem] w-[6rem]'}`}
                            onClick={() => setIsLightMode(true)}
                        >
                            Light {!isLightMode ? 'Mode' : ''}
                        </button>
                        <button
                            className={`absolute top-0 left-6 rounded-xl text-text ml-12 py-3 text-xs lg:text-base
                                ${isLightMode ? 'bg-background font-bold z-20 lg:w-[8rem] w-[6rem] mr[5%]' : 'bg-[#EAEAEA] z-20 w-[5.5rem] lg:ml-[5.5rem] ml-[3.5rem]'}`}
                            onClick={() => setIsLightMode(false)}
                        >
                            Dark {isLightMode ? 'Mode' : ''}
                        </button>
                    </div>
                </div>
                <div className="flex justify-start m-10">
                    <div className="flex flex-wrap gap-5">
                        {['1', '2'].map(id => (
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
                                <img src={currentImages[`hero-${id}`] ? `${Helpers.basePath}${currentImages[`hero-${id}`]}` : '/assets/f7.png'} className="w-80" />
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className="font-bold ml-10 my-5">Second Section</h1>
                <SecondSection handleImageChange={handleImageChange} currentImages={currentImages} />
            </div>
        </>
    );
}

export default HomeScreen;