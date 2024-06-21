import React, { useContext, useEffect, useState } from 'react'
import DownloadSection from './Sections/DownloadSection'
import Sidebar from '../Components/Sidebar'
import axios from 'axios';
import Helpers from '../../Config/Helpers';
import Loader from './../../layouts/Loader.js'
import { ThemeContext } from '../../layouts/ThemeContext';

function DownloadScreen() {
    const [currentImages, setCurrentImages] = useState({ 'download-1' : '' , 'download-2' : ''});
    const { isLightMode, setIsLightMode } = useContext(ThemeContext);
    const [isLoading , setIsLoading] = useState(false)

    const handleImageChange = async (e, section, id) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            await handleUpdate(selectedImage, section, id);
        }
    };

    const handleUpdate = async (image, section, id) => {
        const formData = new FormData();
        formData.append('image_path', image);
        formData.append('mode', section.startsWith('download') ? 'dark' : (isLightMode ? 'dark' : 'light'));
        formData.append('section', `${section}-${id}`);
        try {
            const response = await axios.post(`${Helpers.apiUrl}upload-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            Helpers.toast("success", "Updated Successfully");
            fetchImage(section, id);
        } catch (error) {
            console.log("error", "Error in uploading file");
        }
    };

    const fetchImage = async (section, id) => {
        setIsLoading(true)
        try {
            const mode = section.startsWith('download') ? 'dark' : (isLightMode ? 'dark' : 'light');
            const response = await axios.get(`${Helpers.apiUrl}get-image/${section}-${id}/${mode}`);
            const imageUrl = response.data.image_url;
            setCurrentImages(prev => ({ ...prev, [`${section}-${id}`]: imageUrl }));
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log('error in fetching data');
        }
    };

    useEffect(() => {
        fetchImage('download' , '1');
        fetchImage('download' , '2');
    }, [isLightMode]);
    return (
        <div>
            <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
                <Sidebar />
                {isLoading ? (
                    <Loader/>
                ):(

                <div>
                <h1 className="font-bold ml-10 my-5">Download Section</h1>
                <div className="flex justify-start m-10">
                    <div className="flex flex-wrap gap-5">
                        {['1'].map(id => (
                            <div key={id} className="p-5 bg-pinkbackground rounded-xl shadow-sm relative flex-1">
                                <label
                                    htmlFor={`image-upload-download-${id}`}
                                    className="absolute top-0 left-0 p-1 bg-white bg-opacity-75 rounded-full cursor-pointer"
                                    style={{ transform: "translate(-50%, -50%)" }}
                                >
                                    <i className="fa fa-pencil" style={{ color: "black" }}></i>
                                </label>
                                <input
                                    id={`image-upload-download-${id}`}
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => handleImageChange(e, 'download', id)}
                                />
                                <img src={currentImages[`download-${'1'}`] ? `${Helpers.basePath}${currentImages[`download-${'1'}`]}` : '/assets/laptopmockup.png'} className="w-80" />
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className="font-bold ml-10 my-5">Mobile View</h1>
                <div className="flex justify-start m-10">
                    <div className="flex flex-wrap gap-5">
                        {['2'].map(id => (
                            <div key={id} className="p-5 bg-pinkbackground rounded-xl shadow-sm relative flex-1">
                                <label
                                    htmlFor={`image-upload-download-${id}`}
                                    className="absolute top-0 left-0 p-1 bg-white bg-opacity-75 rounded-full cursor-pointer"
                                    style={{ transform: "translate(-50%, -50%)" }}
                                >
                                    <i className="fa fa-pencil" style={{ color: "black" }}></i>
                                </label>
                                <input
                                    id={`image-upload-download-${id}`}
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => handleImageChange(e, 'download', id)}
                                />
                                <img src={currentImages[`download-${'2'}`] ? `${Helpers.basePath}${currentImages[`download-${'2'}`]}` : '/assets/laptopmockup.png'} className="w-80" />
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default DownloadScreen