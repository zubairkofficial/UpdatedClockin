import React from 'react'

function FeatureSectionContent({currentContent ,openModal}) {
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
                               {currentContent[`feature-${id}`] || "Our Application Features" }
                            </h1>
                            <button
                                className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-2xl transition duration-300"
                                onClick={() => openModal(`feature-${id}`)}
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

export default FeatureSectionContent