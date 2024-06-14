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
                               {currentContent[`second-${id}`] || defaultContent[0] }
                            </h1>
                            <button
                                className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300"
                                onClick={() => openModal(`second-${id}`)}
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
                               {currentContent[`second-${id}`] || defaultContent[1] }
                            </p>
                            <button
                                className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300"
                                onClick={() => openModal(`second-${id}`)}
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
                               {currentContent[`second-${id}`] || defaultContent[2] }
                            </p>
                            <button
                                className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300"
                                onClick={() => openModal(`second-${id}`)}
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