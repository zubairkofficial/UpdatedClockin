import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../layouts/ThemeContext";
import axios from "axios";
import Helpers from "../../Config/Helpers";

const Stats = () => {
    const [radius, setRadius] = useState(80);

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth >= 1024) {
                setRadius(110);
            } else {
                setRadius(80);
            }
        };
        updateRadius();
        window.addEventListener("resize", updateRadius);
        return () => window.removeEventListener("resize", updateRadius);
    }, []);
    const circumference = 2 * Math.PI * radius;
    const progress = 70;

    const progressStyle = {
        strokeDasharray: `${circumference} ${circumference}`,
        strokeDashoffset: `${circumference - (progress / 100) * circumference}`,
    };
    const { isLightMode } = useContext(ThemeContext);
    const [stat, setStat] = useState([]);
    const getstat = async () => {
        const response = await axios.get(`${Helpers.apiUrl}stat/show`);
        setStat(response.data.data);
        // console.log("stat", response);
    };
    useEffect(() => {
        getstat();
    }, []);
    return (
        // <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-lightpink py-16 ">
        <>
            {stat.map((stat) => (
                <div
                    className="lg:flex block justify-around bg-lightpink py-16 container mx-auto rounded-xl w-full "
                    key={stat.id}
                >
                    <div className="flex justify-around">
                        <div className="block">
                            <img
                                src={isLightMode ? "assets/card1.png" : "assets/card1 1.png"}
                                alt="card1"
                                className="w-full lg:pl-[90px] sm:pl[0px] pt-[10%]"
                            />
                            <img
                                src={
                                    isLightMode ? "assets/progessCard.png" : "assets/card2 1.png"
                                }
                                alt="progesscard"
                                className="lg:pl-[90px] sm:pl-[0px]"
                            />
                        </div>
                        <div className="card bg-pinkbackground text-text p-4 rounded-[30px] lg:m-4 m-1 mr-4 lg:mr-0">
                            <div className="mb-4 flex justify-center items-center">
                                <div className="relative">
                                    {/* <svg width="320" height="320"> */}
                                    <svg className="lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] md:w-[280px] md:h-[280px]">
                                        <circle
                                            cx="50%"
                                            cy="50%"
                                            r={radius}
                                            fill="transparent"
                                            stroke="rgba(108, 114, 124, 0.5)"
                                            strokeWidth="10"
                                        />
                                        <circle
                                            cx="50%"
                                            cy="50%"
                                            r={radius}
                                            fill="transparent"
                                            stroke="#FF7A50"
                                            strokeWidth="10"
                                            style={progressStyle}
                                            className="transition-all duration-500 ease-out"
                                        />
                                    </svg>

                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                        <h2 className="text-3xl lg:text-7xl font-bold text-text">
                                            {stat.total_task}
                                        </h2>
                                        <h3 className="text-text lg:text-3xl text-xl">
                                            Total Task
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mb-2 text-align-center justify-center">
                                <span className="inline-block w-4 h-4 bg-[#FF7A50] rounded-full mr-2"></span>
                                <p>Tasks Complete {stat.task_completed}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="inline-block w-4 h-4 bg-[#5E6464] rounded-full mr-2"></span>
                                <p>Remaining Task {stat.remaining_task}</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:pl-5 sm:pr-15 lg:pl-16 md:pl-12 lg:pr-14 md:pr-10 mt-16 lg:mr-16 md:mr-12 sm:mr-5 p-[5%] w-[100%] lg:w-[40%]">
                        <h2 className="text-3xl text-text font-bold">{stat.heading}</h2>
                        {JSON.parse(stat.content).map((item, index) => (
                            <div className="mt-4" key={index}>
                                <p className="text-[#FF7A50] font-semibold">
                                    {index + 1}. {item.subheading}
                                </p>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                        {/* <div className="mt-4">
                            <p className="text-[#FF7A50] font-semibold">2. Business Activities</p>
                            <p className="text-gray-300">Time logging, analytics, reports, invoicing, project management, team collaboration.</p>
                        </div> 
                        <div className="mt-4">
                            <p className="text-[#FF7A50] font-semibold">3. Export PDF, CVS & Excel</p>
                            <p className="text-gray-300">PDF, CSV & Excel export for comprehensive time data sharing.</p>
                        </div> */}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Stats;
