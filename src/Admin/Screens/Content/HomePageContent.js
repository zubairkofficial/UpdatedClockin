import axios from "axios";
import React, { useEffect, useState } from "react";
import Helpers from "../../../Config/Helpers";
import Sidebar from "../../Components/Sidebar";
import EditModal from "./EditModal";
import SecondSectionContent from "./SecondSectionContent";
import ThirdSectionContent from "./ThirdSectionContent";
import FourthSectionContent from "./FourthSectionContent";
import FifthSectionContent from "./FifthSectionContent";
import SixthPageContent from "./SixthPageContent";
import PlanSectionContent from "./PlanSectionContent";
function HomePageContent() {
    const [currentContent, setCurrentContent] = useState({
        "hero-1": "",
        "hero-2": "",
        "hero-3": "",
        "second-1": "",
        "second-2": "",
        "second-3": "",
        "third-1": "",
        "third-2": "",
        "fourth-1": "",
        "fourth-2": "",
        "fifth-1": "",
        "fifth-2": "",
        "sixth-1": "",
        "sixth-2": "",
        "plan-1": "",
        "plan-2": "",
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
            "second-1",
            "second-2",
            "second-3",
            "third-1",
            "third-2",
            "fourth-1",
            "fourth-2",
            "fifth-1",
            "fifth-2",
            "sixth-1",
            "sixth-2",
            "plan-1",
            "plan-2",
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
        'hero-3': 'Show me the demo',
        'second-1': 'Why we are the best & customers choose us',
        'second-2': 'Efficiency personalized. Clients choose us for seamless time tracking and unparalleled results.',
        'second-3': 'Learn more',
        'third-1': 'Reclaim Countless hours with efficient time tracking.',
        'third-2': 'Clockins intuitive UI and user-centric time tracking enabled companies to slash timesheet admin by 80%.',
        'fourth-1': 'Efficiently oversee your list of employees.',
        'fourth-2': 'Simplify employee management: track attendance, tasks, and schdeules seamlessly.',
        'fifth-1': 'Efficiently Task Handling',
        'fifth-2': 'Experience seamless task management that enhances productivity. Our platform empowers you to effortlessly create, assign, and track tasks, ensuring efficient collaboration and goal achievement.',
        'sixth-1': 'Try Clockin today!',
        'sixth-2': 'Uncover Your Productivity Potential with Discover Time Tracking Software.',
        'plan-1': 'Pick the perfect Plan',
        'plan-2': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex rem accusantium adipiscinemo et nihil, tenetur explicabo at, veritatis incidunt quos utvelit nam? Voluptas id natus dolor ad accusamus.',
    };

    return (
        <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
            <Sidebar />
            <h1 className="font-bold ml-10 my-5">Hero Section</h1>
            <div className="block m-10">
                <div className="block gap-5">
                    {/* <h1>Heading Content :</h1> */}
                    {["1"].map((id) => (
                        <div
                            key={id}
                            className="p-5 bg-gray-300 rounded-xl shadow-sm relative flex flex-1 mt-5"
                        >
                            <h1 className="w-100 font-bold text-black mt-2">
                                {currentContent[`hero-${id}`] || defaultContent[`hero-${id}`]}
                            </h1>
                            <button
                                className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300"
                                onClick={() => openModal(`hero-${id}`)}
                            >
                                Edit
                            </button>
                        </div>
                    ))}

                    {["2"].map((id) => (
                        <div
                            key={id}
                            className="p-5 bg-gray-300 rounded-xl shadow-sm relative flex flex-1 mt-5"
                        >
                            {/* <p>Button Content :</p> */}
                            <p className="w-100  text-black mt-2">
                                {currentContent[`hero-${id}`] || defaultContent[`hero-${id}`]}
                            </p>
                            <button
                                className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300"
                                onClick={() => openModal(`hero-${id}`)}
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                    {/* <h1>Button Content :</h1> */}
                    {["3"].map((id) => (
                        <div
                            key={id}
                            className="p-5 bg-gray-300 rounded-xl shadow-sm relative flex flex-1 mt-5"
                        >
                            <p className="w-100  text-black mt-2">
                                {currentContent[`hero-${id}`] || defaultContent[`hero-${id}`]}
                            </p>
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
            <h1 className="font-bold ml-10 my-5">Second Section</h1>
            <SecondSectionContent currentContent={currentContent} defaultContent={[
                defaultContent['second-1'],
                defaultContent['second-2'],
                defaultContent['second-3']
            ]} openModal={openModal} />
            <h1 className="font-bold ml-10 my-5">Third Section</h1>
            <ThirdSectionContent currentContent={currentContent} defaultContent={[
                defaultContent['third-1'],
                defaultContent['third-2'],
            ]} openModal={openModal} />
            <h1 className="font-bold ml-10 my-5">Fourth Section</h1>
            <FourthSectionContent currentContent={currentContent} defaultContent={[
                defaultContent['fourth-1'],
                defaultContent['fourth-2'],
            ]} openModal={openModal} />
            <h1 className="font-bold ml-10 my-5">Fifth Section</h1>
            <FifthSectionContent currentContent={currentContent} defaultContent={[
                defaultContent['fifth-1'],
                defaultContent['fifth-2'],
            ]} openModal={openModal} />
            <h1 className="font-bold ml-10 my-5">Sixth Section</h1>
            <SixthPageContent currentContent={currentContent} defaultContent={[
                defaultContent['sixth-1'],
                defaultContent['sixth-2'],
            ]} openModal={openModal} />
            <h1 className="font-bold ml-10 my-5">Plan Section</h1>
            <PlanSectionContent currentContent={currentContent} defaultContent={[
                defaultContent['plan-1'],
                defaultContent['plan-2'],
            ]} openModal={openModal} />
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
