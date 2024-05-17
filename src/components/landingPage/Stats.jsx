import React, { useContext } from 'react'
import { ThemeContext } from '../../layouts/ThemeContext';

const Stats = () => {
    const radius = 140;
    const circumference = 2 * Math.PI * radius;
    const progress = 70;

    const progressStyle = {
        strokeDasharray: `${circumference} ${circumference}`,
        strokeDashoffset: `${circumference - progress / 100 * circumference}`
    };
    const { isLightMode } = useContext(ThemeContext);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-lightpink py-16">
            <div className=''>
                <img src={isLightMode ? 'assets/card1.png' : 'assets/card1 1.png'} alt='card1' className='pl-[90px]' />
                <img src={isLightMode ? 'assets/progessCard.png' : 'assets/card2 1.png'} alt='progesscard' className='pl-[90px]' />
            </div>

            <div className='card bg-pinkbackground text-text p-4 rounded-[30px]'>
                <div className="mb-4 flex justify-center items-center">
                    <div className="relative">
                        <svg width="320" height="320">
                            <circle
                                cx="160" cy="160" r={radius}
                                fill="transparent"
                                stroke="rgba(108, 114, 124, 0.5)"
                                strokeWidth="10"
                            />
                            <circle
                                cx="160" cy="160" r={radius}
                                fill="transparent"
                                stroke="#FF7A50"
                                strokeWidth="10"
                                style={progressStyle}
                                className="transition-all duration-500 ease-out"
                            />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h1 className="text-7xl font-bold text-text">25</h1>
                            <h3 className="text-text text-3xl">Total Task</h3>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mb-2 text-align-center justify-center">
                    <span className="inline-block w-4 h-4 bg-[#FF7A50] rounded-full mr-2"></span>
                    <p>Tasks Complete 18</p>
                </div>
                <div className="flex items-center justify-center">
                    <span className="inline-block w-4 h-4 bg-[#5E6464] rounded-full mr-2"></span>
                    <p>Remaining Task 7</p>
                </div>
            </div>

            <div>
                <div className="md:pl-8 mt-16 mr-16 pr-14">
                    <h2 className="text-2xl text-text font-bold">Pinpoint <br/> Proof <span className='text-[#FF7A50]'>Reporting</span></h2>
                    <div className="mt-4">
                        <p className="text-[#FF7A50] font-semibold">1. Project Overview</p>
                        <p className="text-gray-300">Efficient time tracking solution for streamlined productivity and insights.</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-[#FF7A50] font-semibold">2. Business Activities</p>
                        <p className="text-gray-300">Time logging, analytics, reports, invoicing, project management, team collaboration.</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-[#FF7A50] font-semibold">3. Export PDF, CVS & Excel</p>
                        <p className="text-gray-300">PDF, CSV & Excel export for comprehensive time data sharing.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Stats
