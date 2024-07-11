import React from 'react'

function PlanSectionContent({ currentContent, defaultContent, openModal }) {
  return (
    <div>
            <div className="block m-10">
                <div className="block gap-5">
                    {["1"].map((id) => (
                        <div
                            key={id}
                            className="p-5 bg-gray-300 rounded-xl shadow-sm relative flex flex-1 mt-5"
                        >
                            <h1 className="w-100 font-bold text-black mt-2">
                                {currentContent[`plan-${id}`] || "Pick the perfect Plan"}
                            </h1>
                            <button
                                className="bg-[#FF7A50]   dark:text-black font-bold py-2 px-6 rounded-2xl  duration-300"
                                onClick={() => openModal(`plan-${id}`)}
                                style={{color:"white"}} 
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
                            <p className="w-100  text-black mt-2">
                                {currentContent[`plan-${id}`] || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex rem accusantium adipiscinemo et nihil, tenetur explicabo at, veritatis incidunt quos utvelit nam? Voluptas id natus dolor ad accusamus."}
                            </p>
                            <button
                                className="bg-[#FF7A50]   dark:text-black font-bold py-2 px-6 rounded-2xl  duration-300"
                                onClick={() => openModal(`plan-${id}`)}
                                style={{color:"white"}} 
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default PlanSectionContent