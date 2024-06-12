import axios from "axios";
import React, { useEffect, useState } from "react";
import Helpers from "../../../Config/Helpers";
import Sidebar from "../../Components/Sidebar";
import EditModal from "./EditModal";

function HomePageContent() {
    const [currentContent, setCurrentContent] = useState({
        "hero-1": "",
        "hero-2": "",
        "hero-3": "",
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
        const sections = [
            "hero-1",
            "hero-2",
            "hero-3",
        ];
        try {
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

    const defaultContent = {
        'hero-1': 'Track Time, Maximize Productivity',
        'hero-2': 'Try it free',
        'hero-3': 'Show me the demo'
    };
    
    return (
        <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
            <Sidebar />
            <h1 className="font-bold ml-10 my-5">Hero Section</h1>
            <div className="block m-10">
                <div className="block gap-5">
                    {["1", "2", "3"].map((id) => (
                        <div
                            key={id}
                            className="p-5 bg-gray-300 rounded-xl shadow-sm relative flex flex-1 mt-5"
                        >
                            <h1 className="w-100 font-bold text-black mt-2">
                               {currentContent[`hero-${id}`] || defaultContent[`hero-${id}`] }
                            </h1>
                            <button
                                className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300"
                                onClick={() => openModal(`hero-${id}`)}
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
    );
}

export default HomePageContent;
