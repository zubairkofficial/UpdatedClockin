import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { ThemeContext } from './../../layouts/ThemeContext.js';
import Header from '../Components/Header'
import Helpers from '../../Config/Helpers';
import axios from 'axios';
function HomeScreen() {
    const [mode, setMode] = useState('dark')
    const [image, setImage] = useState(null)
    const [section, setSection] = useState('hero')
    const [currentImage , setCurrentImage] = useState('')
    const { isLightMode, setIsLightMode } = useContext(ThemeContext);

    const handleImageChange = async (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            await handleUpdate(selectedImage);
        }
    };
    const handleUpdate = async (image) =>{
        const formData = new FormData();
        formData.append('image_path', image);
        formData.append('mode', isLightMode ? 'light' : 'dark');
        formData.append('section', section);
        try {
            const response = await axios.post(`${Helpers.apiUrl}upload-image` , formData , {
                headers :{ 
                    'Content-Type' : 'multipart/form-data'
                }
            })
            console.log(response)
            Helpers.toast("success","Updated Successfully")
        } catch (error) {
            console.log("error","Error in uploading file")
        }
    }

    const fetchImage = async () =>{
        try {
            const response = await axios.get(`${Helpers.apiUrl}get-image/${section}/${isLightMode ? 'light' : 'dark'}`)
            setCurrentImage(response.data.image_url)
            console.log(response)
        } catch (error) {
            console.log('error in fetching data')
        }
    }
    useEffect (()=>{
        fetchImage()
    },[isLightMode,section])
    return (
        <>
            <Header />
            <div id="kt_app_wrapper" class="app-wrapper  flex-column flex-row-fluid ">
                <Sidebar />
                <h1 className='font-bold ml-10 my-5'>Hero Section</h1>
                <div className="lg:block ml-[35%] lg:mr-[13%] md:mr-[20%]">
                    <div className="relative p-4">
                        <button
                            className={`absolute top-0 left-0 w-[5.5rem]  rounded-lg text-[#000000] py-3 font-[0.5rem] text-xs lg:text-base
                          ${isLightMode ? 'bg-secondary z-10 ' : 'bg-[#FF7A50] font-bold z-10 lg:w-[8rem] w-[6rem] '}`}
                            onClick={() => setIsLightMode(true)}
                        >
                            Light {!isLightMode ? 'Mode' : ''}
                        </button>
                        <button
                            className={`absolute top-0 left-6  rounded-xl text-text ml-12 py-3 text-xs lg:text-base
                          ${isLightMode ? 'bg-background font-bold z-20 lg:w-[8rem] w-[6rem] mr[5%]' : 'bg-[#EAEAEA] z-20 w-[5.5rem] lg:ml-[5.5rem] ml-[3.5rem]'}`}
                            onClick={() => setIsLightMode(false)}
                        >
                            Dark {isLightMode ? 'Mode' : ''}
                        </button>
                    </div>
                </div>
                <div className="flex justify-start m-10">
                    <div className="flex flex-wrap gap-5">
                        <div className="p-5 bg-pinkbackground rounded-xl shadow-sm relative flex-1">
                            <label
                                htmlFor="image-upload-1"
                                className="absolute top-0 left-0 p-1 bg-white bg-opacity-75 rounded-full cursor-pointer"
                                style={{ transform: "translate(-50%, -50%)" }}
                            >
                                <i className="fa fa-pencil" style={{ color: "black" }}></i>
                            </label>
                            <input
                                id="image-upload-1"
                                type="file"
                                className="hidden"
                                name='image_path'
                                onChange={handleImageChange}
                            />
                            <input type='hidden' value={section} />
                            {/* <img src={isLightMode ? "/assets/logo.png" : "/assets/blacklogo.png"} className="w-80" /> */}
                            <img src={`${Helpers.basePath}${currentImage}`} className="w-80" />
                            <button onClick={handleUpdate}>Update</button>
                        </div>
                        <div className="p-5 bg-pinkbackground rounded-xl shadow-sm relative flex-1">
                            <label
                                htmlFor="image-upload-2"
                                className="absolute top-0 left-0 p-1 bg-white bg-opacity-75 rounded-full cursor-pointer"
                                style={{ transform: "translate(-50%, -50%)" }}
                            >
                                <i className="fa fa-pencil" style={{ color: "black" }}></i>
                            </label>
                            <input
                                id="image-upload-2"
                                type="file"
                                className="hidden"
                            // onChange={handleImageChange}
                            />
                            <img src={isLightMode ? "/assets/whiteclock.png" : "/assets/clock-illustration.png"} className="w-80" />
                        </div>
                        {/* Add more columns as needed */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeScreen