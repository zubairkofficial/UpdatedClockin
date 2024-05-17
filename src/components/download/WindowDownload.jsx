import React, { useState } from 'react';

const WindowDownload = () => {
    const [selectedVersion, setSelectedVersion] = useState('');

    const versions = ['Version 1.0', 'Version 2.0', 'Version 3.0']; // Example versions
    const macversions = ['Mac Version 1.0', 'Mac Version 2.0', 'Mac Version 3.0']; // Example versions
    const linuxversions = ['Linex Version 1.0', 'Linux Version 2.0', 'Linux Version 3.0']; // Example versions

    return (
        <>
            <div className="   w-96 p-4 mb-4">
                <h2 className='text-[#FF7A50] text-2xl font-bold'>For Windows</h2>
                <p className="text-sm mb-2 mt-3 text-text">
                    On a website, locate the desired software, click the download button, choose a version compatible with your Windows system, and complete the download process.
                </p>
                <div className="relative pt-2">

                    <div className="relative inline-flex items-center bg-[#FF7A50] rounded-2xl  pr-5">
                        <select
                            className="appearance-none bg-transparent border-none py-3 px-3 pr-8 leading-tight  text-white focus:outline-none"
                            value={selectedVersion}
                            onChange={(e) => setSelectedVersion(e.target.value)}
                        >
                            <option value="" className='text-black'>Select Version & Download</option>
                            {versions.map((version, index) => (
                                <option key={index} value={version} className='text-black'>{version}</option>
                            ))}
                        </select>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                            <span className="bg-[lightgray] h-5 w-px "></span>
                            <i className="fa-solid fa-chevron-down pl-3 pr-2 text-white"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="   w-96 p-4 mb-4">
                <h2 className='text-[#FF7A50] text-2xl font-bold'>For Mac</h2>
                <p className="text-sm mb-2 mt-3 text-text">
                    On a website, locate the desired software, click the download button, choose a version compatible with your Windows system, and complete the download process.
                </p>
                <div className="relative pt-2">

                    <div className="relative inline-flex items-center bg-[#FF7A50] rounded-2xl text-white pr-5">
                        <select
                            className="appearance-none bg-transparent border-none py-3 px-3 pr-8 leading-tight focus:outline-none text-white"
                            value={selectedVersion}
                            // onChange={(e) => setSelectedVersion(e.target.value)}
                        >
                            <option value="" className='text-black'>Select Version & Download</option>
                            {versions.map((version, index) => (
                                <option key={index} value={version} className='text-black'>{version}</option>
                            ))}
                        </select>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                            <span className="bg-[lightgray] h-5 w-px "></span>
                            <i className="fa-solid fa-chevron-down pl-3 pr-2 text-white"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="   w-96 p-4 mb-4">
                <h2 className='text-[#FF7A50] text-2xl font-bold'>For Linux</h2>
                <p className="text-sm mb-2 mt-3 text-text">
                    On a website, locate the desired software, click the download button, choose a version compatible with your Windows system, and complete the download process.
                </p>
                <div className="relative pt-2">

                    <div className="relative inline-flex items-center bg-[#FF7A50] rounded-2xl text-white pr-5">
                        <select
                            className="appearance-none bg-transparent border-none py-3 px-3 pr-8 leading-tight focus:outline-none"
                            value={selectedVersion}
                            onChange={(e) => setSelectedVersion(e.target.value)}
                        >
                            <option value="" className='text-black'>Select Version & Download</option>
                            {versions.map((version, index) => (
                                <option key={index} value={version} className='text-black'>{version}</option>
                            ))}
                        </select>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                            <span className="bg-[lightgray] h-5 w-px "></span>
                            <i className="fa-solid fa-chevron-down pl-3 pr-2 text-white"></i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WindowDownload;
