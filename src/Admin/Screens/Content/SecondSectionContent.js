import React from 'react'

function SecondSectionContent({currentContent , defaultContent,openModal}) {
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
                               {currentContent[`second-${id}`] || "Why we are the best & customers choose us" }
                            </h1>
                            <button
                                className="bg-[#FF7A50] hover:bg-hover  dark:text-black font-bold py-2 px-6 rounded-2xl  duration-300"
                                onClick={() => openModal(`second-${id}`)}
                                style={{color:"white"}} 
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                    {["2" ].map((id) => (
                        <div
                            key={id}
                            className="p-5 bg-gray-300 rounded-xl shadow-sm relative flex flex-1 mt-5"
                        >
                            <p className="w-100  text-black mt-2">
                               {currentContent[`second-${id}`] || "Efficiency personalized. Clients choose us for seamless time tracking and unparalleled results." }
                            </p>
                            <button
                                className="bg-[#FF7A50] hover:bg-hover  dark:text-black font-bold py-2 px-6 rounded-2xl  duration-300"
                                onClick={() => openModal(`second-${id}`)}
                                style={{color:"white"}} 
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                    {["3"].map((id) => (
                        <div
                            key={id}
                            className="p-5 bg-gray-300 rounded-xl shadow-sm relative flex flex-1 mt-5"
                        >
                            <p className="w-100  text-black mt-2">
                               {currentContent[`second-${id}`] || "Learn more" }
                            </p>
                            <button
                                className="bg-[#FF7A50] hover:bg-hover  dark:text-black font-bold py-2 px-6 rounded-2xl  duration-300"
                                onClick={() => openModal(`second-${id}`)}
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

export default SecondSectionContent