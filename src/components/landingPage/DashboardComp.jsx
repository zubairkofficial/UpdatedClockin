import React, { useEffect, useState } from "react";
import AnimatedText from "../../layouts/AnimatedText";
import Helpers from "../../Config/Helpers";
import axios from "axios";

const DashboardComp = ({
  thirdImage1,
  thirdImage2,
  thirdImage3,
  currentContent,
}) => {

  return (
    <>
      <div className="h-full bg-pinkbackground py-16 pt-7 pr-0 lg:pr-14 bg-orangelinewithicons bg-cover bgimage container mx-auto ">
        {/* dashboard 1 */}
        <AnimatedText>
          {/* {['1','2','3'].map(id => ( */}
          <div className="mt-0 2xl:mt-[10rem] ">
            <div className="flex flex-wrap justify-between items-center px-4 mt-[5rem]">
              <div className="w-full md:w-1/2">
                <img
                  src={
                    thirdImage1
                      ? `${Helpers.basePath}${thirdImage1}`
                      : "/assets/dashboard 1.png"
                  }

                  alt="dashboard one"
                  className="w-[70] h-auto lg:ml-[5rem] sm:ml-0 z-10"
                />
              </div>
              <div className="w-full md:w-1/2 lg:pl-20 sm:pl-0 lg:pb-32 pb-0 text-center lg:text-left ">
                <h2 className="text-text font-bold lg:text-3xl text-2xl pt-10 lg:pt-0">
                  {currentContent[`third-1`] || 'Reclaim Countless hours with efficient time tracking.'}
                </h2>
                <p className="text-gray-400 pt-6">
                  {currentContent[`third-2`] || "Clockin's intuitive UI and user-centric time tracking enabled companies to slash timesheet admin by 80%."}
                </p>
              </div>
            </div>
          </div>
          {/* ))} */}
        </AnimatedText>
        <AnimatedText>
          {/* dashboard 2 */}

          <div className="flex flex-wrap justify-between items-center px-4  lg:mt-[5rem] mt-[0.5rem] ">
            <div className="w-full md:w-1/2 lg:pl-[5rem] sm:pl-0 lg:order-1 order-2 text-center lg:text-left">
              <h2 className="text-text font-bold text-2xl lg:text-3xl pt-10 lg:pt-0">
                {currentContent[`fourth-1`] || 'Efficiently oversee your list of employees.'}
              </h2>
              <p className="text-gray-400 pt-6">
                {currentContent[`fourth-2`] || 'Simplify employee management: track attendance, tasks, and schdeules seamlessly.'}
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:pl-20 sm:pl-0 lg:pb-32 pb-0  lg:order-2 order-1">
              <img
                src={
                  thirdImage2
                    ? `${Helpers.basePath}${thirdImage2}`
                    : "/assets/dashboard 2.png"
                }
                alt="dashboard one"
                className="w-[70] h-auto lg:mr-[5rem] sm:mr-0"
              />
            </div>
          </div>
        </AnimatedText>
        <AnimatedText>
          <div className="flex flex-wrap justify-between items-center px-4 lg:mt-[5rem] mt-[0.5rem] lg:pt-[2rem] pt-[0.5rem] 2xl:mt-[12rem] ">
            <div className="w-full md:w-1/2">
              <img
                src={
                  thirdImage3
                    ? `${Helpers.basePath}${thirdImage3}`
                    : "/assets/dashboard 3.png"
                }
                alt="dashboard one"
                className="w-[70] h-auto lg:ml-[5rem] sm:ml-0"
              />
            </div>
            <div className="w-full md:w-1/2 lg:pl-20 sm:pl-0 lg:pb-32 pb-0 text-center lg:text-left">
              <h2 className="text-text font-bold  text-2xl lg:text-3xl pt-10 lg:pt-0">
                {currentContent[`fifth-1`] || 'Efficiently Task Handling'}
              </h2>
              <p className="text-gray-400 pt-6">
                {currentContent[`fifth-2`] || 'Experience seamless task management that enhances productivity. Our platform empowers you to effortlessly create, assign, and track tasks, ensuring efficient collaboration and goal achievement.'}
              </p>
            </div>
          </div>
        </AnimatedText>
        <AnimatedText>
          <div className="w-full h-auto ">

            <div
              className="relative bg-cover bg-center backimage lg:mt-40 mt-10 lg:ml-16 ml-4 mr-4 lg:py-28 py-14 lg:px-16 px-4 mx-2 lg:m-0"
              style={{ borderRadius: "35px" }}
            >
              <h1 className="text-white lg:text-5xl text-xl pb-8 font-bold">
                {currentContent["sixth-1"] || "Try Clockin today!"}
              </h1>
              <p className="text-white lg:text-3xl text-sm pb-16">
                {currentContent["sixth-2"] || "Uncover Your Productivity Potential with Discover Time Tracking Software."}
              </p>
              <ul className="flex flex-wrap font-bold text-white">
                <li className="mr-4 mb-2 flex items-center">
                  <i className="fa-solid fa-circle-check text-[#00BA00] mr-2 rounded-2xl bg-white"></i>
                  Accurately billing
                </li>
                <li className="mr-4 mb-2 flex items-center">
                  <i className="fa-solid fa-circle-check text-[#00BA00] mr-2 rounded-2xl bg-white"></i>
                  Project profitability
                </li>
                <li className="mr-4 mb-2 flex items-center">
                  <i className="fa-solid fa-circle-check text-[#00BA00] mr-2 rounded-2xl bg-white"></i>
                  Strict anti-surveillance policy
                </li>
                <li className="mr-4 mb-2 flex items-center">
                  <i className="fa-solid fa-circle-check text-[#00BA00] mr-2 rounded-2xl bg-white"></i>
                  Trusted by 5000+ businesses globally
                </li>
              </ul>
            </div>
          </div>
        </AnimatedText>
      </div>
    </>
  );
};

export default DashboardComp;
