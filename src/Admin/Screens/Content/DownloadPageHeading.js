import React, { useEffect, useState } from 'react'
import Helpers from '../../../Config/Helpers';
import EditModal from "./EditModal";
import axios from 'axios';

function DownloadPageHeading() {
    const [currentContent, setCurrentContent] = useState({
        "download-1": "",
        "download-2": "",
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState("");
    const [editContent, setEditContent] = useState("");

    const handleInputChange = (e, section) => {
        const content = e.target.value;
        setEditContent(content);
    };

    const handleUpdate = async (content, section) => {
        try {
            await axios.post(`${Helpers.apiUrl}content/store`, { content, section });
            Helpers.toast("success", "Updated Successfully");
            fetchContent();
            setIsModalOpen(false);
        } catch (error) {
            console.log("Error in updating content", error);
        }
    };

    const fetchContent = async () => {
        try {
            const response = await axios.get(`${Helpers.apiUrl}content/show`);
            const fetchedContent = {};
            const sections = [
                "download-1", "download-2",
            ];
            sections.forEach(section => {
                const content = response.data.data.find(item => item.section === section);
                if (content) {
                    fetchedContent[section] = content.content;
                }
            });
            console.log("coi", fetchedContent);
            setCurrentContent(fetchedContent);
        } catch (error) {
            console.log("Error in fetching data", error);
        }
    };


    useEffect(() => {
        fetchContent();
    }, []);

    const openModal = (section) => {
        setCurrentSection(section);
        setEditContent(currentContent[section]);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <h1 className="font-bold ml-10 my-5" >Download Heading 1</h1>
            <div className="block m-10">
                <div className="block gap-5">
                    {["1"].map((id) => (
                        <div
                            key={id}
                            className="p-5 bg-gray-300 rounded-xl shadow-sm relative flex flex-1 mt-5"
                        >
                            <p className="w-100 font-bold text-black mt-2">
                                {currentContent[`download-${id}`] ||
                                    "Scaling Your Team"}
                            </p>
                            <button
                                className="bg-[#FF7A50]   dark:text-black font-bold py-2 px-6 rounded-2xl  duration-300"
                                onClick={() => openModal(`download-${id}`)}
                                style={{color:"white"}} 
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="font-bold ml-10 my-5" >Download Heading 2</h1>
            <div className="block m-10">
                <div className="block gap-5">
                    {["2"].map((id) => (
                        <div
                            key={id}
                            className="p-5 bg-gray-300 rounded-xl shadow-sm relative flex flex-1 mt-5"
                        >
                            <h1 className="w-100 font-bold text-black mt-2">
                                {currentContent[`download-${id}`] ||
                                    "With Clockin"}
                            </h1>
                            <button
                                className="bg-[#FF7A50]   dark:text-black font-bold py-2 px-6 rounded-2xl  duration-300"
                                onClick={() => openModal(`download-${id}`)}
                                style={{color:"white"}} 
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <EditModal
                isOpen={isModalOpen}
                onClose={closeModal}
                section={currentSection}
                content={editContent}
                handleChange={handleInputChange}
                handleSubmit={handleUpdate}
            />
        </div>
    )
}

export default DownloadPageHeading