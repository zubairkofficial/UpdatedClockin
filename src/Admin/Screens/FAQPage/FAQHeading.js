import React, { useEffect, useState } from 'react'
import EditModal from '../Content/EditModal';
import Helpers from '../../../Config/Helpers';
import axios from 'axios';

function FAQHeading() {
  const [currentContent, setCurrentContent] = useState({
    "faq-1": "",
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
            "faq-1",
        ];
        sections.forEach(section => {
            const content = response.data.data.find(item => item.section === section);
            if (content) {
                fetchedContent[section] = content.content;
            }
        });
        // console.log("coi", fetchedContent);
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
      <h1 className="font-bold ml-10 my-5" >FAQ Heading </h1>
            <div className="block m-10">
                <div className="block gap-5">
                    {["1"].map((id) => (
                        <div
                            key={id}
                            className="p-5 bg-gray-300 rounded-xl shadow-sm relative flex flex-1 mt-5"
                        >
                            <p className="w-100 font-bold text-black mt-2">
                                {currentContent[`faq-${id}`] ||
                                    "How Can We Help You?"}
                            </p>
                            <button
                                className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300"
                                onClick={() => openModal(`faq-${id}`)}
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

export default FAQHeading