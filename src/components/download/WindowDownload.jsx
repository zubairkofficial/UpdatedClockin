import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Helpers from '../../Config/Helpers';

const WindowDownload = () => {
    const [selectedVersion, setSelectedVersion] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false)
    const [download, setdownload] = useState([]);
    useEffect(() => {
        fetchdownload();
    }, []);

    const fetchdownload = async () => {
        try {
            const response = await axios.get(`${Helpers.apiUrl}download/show`);
            setdownload(response.data.data);
        } catch (error) {
            console.error('Error fetching download', error);
        }
    };
    const handleDownload = async (filePath) => {
        try {
            const response = await axios.get(`${Helpers.apiUrl}download/download-file?path=${filePath}`, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filePath.split('/').pop());
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };


    const handleChange = (e, download) => {
        const selectedVersion = JSON.parse(download.version).find(
            (item) => item.name === e.target.value
        );
        if (selectedVersion) {
            setSelectedFile(selectedVersion.file);
        }
    };

    return (
        <>
            {download.map((download, downloadIndex) => (
                <div className="w-96 p-4 mb-4" key={downloadIndex}>
                    <h2 className="text-[#FF7A50] text-2xl font-bold">{download.heading}</h2>
                    <p className="text-sm mb-2 mt-3 text-text">{download.subheading}</p>
                    <div className="relative pt-2">
                        <div className="relative inline-flex items-center bg-[#FF7A50] rounded-2xl pr-5">
                            <select
                                className="appearance-none bg-transparent border-none py-3 px-3 pr-8 leading-tight text-white focus:outline-none"
                                onChange={(e) => handleDownload(`/public/${e.target.value}`)}
                            >
                                <option value="" className="text-black">
                                    Select Version & Download
                                </option>
                                {JSON.parse(download.version).map((item, index) => (
                                    <option key={index} value={item.file} className="text-black">
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                                <span className="bg-[lightgray] h-5 w-px"></span>
                                <i className="fa-solid fa-chevron-down pl-3 pr-2 text-white"></i>
                            </span>
                        </div>
                        {selectedFile && (
                            <button
                                onClick={() => handleDownload(selectedFile)}
                                className="mt-2 bg-[#FF7A50] text-white py-2 px-4 rounded-2xl"
                            >
                                Download
                            </button>
                        )}
                    </div>
                </div>
            ))}
            {/* <div className="   w-96 p-4 mb-4">
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
            </div> */}
        </>
    );
};

export default WindowDownload;
