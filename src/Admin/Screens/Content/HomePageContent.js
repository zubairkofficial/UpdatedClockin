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
                {currentContent[`hero-${id}`] ||
                  "Track Time, Maximize Productivity"}
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
                {currentContent[`hero-${id}`] || "Try it free"}
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
                {currentContent[`hero-${id}`] || "Show me the demo"}
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
      <SecondSectionContent
        currentContent={currentContent}
        openModal={openModal}
      />
      <h1 className="font-bold ml-10 my-5">Third Section</h1>
      <ThirdSectionContent
        currentContent={currentContent}
        openModal={openModal}
      />
      <h1 className="font-bold ml-10 my-5">Fourth Section</h1>
      <FourthSectionContent
        currentContent={currentContent}
        openModal={openModal}
      />
      <h1 className="font-bold ml-10 my-5">Fifth Section</h1>
      <FifthSectionContent
        currentContent={currentContent}
        openModal={openModal}
      />
      <h1 className="font-bold ml-10 my-5">Sixth Section</h1>
      <SixthPageContent currentContent={currentContent} openModal={openModal} />
      <h1 className="font-bold ml-10 my-5">Plan Section</h1>
      <PlanSectionContent
        currentContent={currentContent}
        openModal={openModal}
      />
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
