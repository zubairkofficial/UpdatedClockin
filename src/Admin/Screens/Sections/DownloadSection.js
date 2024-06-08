import React from 'react'
import Helpers from '../../../Config/Helpers'

function DownloadSection({ handleImageChange, currentImages }) {
  return (
    <div className="flex justify-start m-10">
            <div className="flex flex-wrap gap-5">
                {['1'].map(id => (
                    <div key={id} className="p-5 bg-pinkbackground rounded-xl shadow-sm relative flex-1">
                        <label
                            htmlFor={`image-upload-download-${id}`}
                            className="absolute top-0 left-0 p-1 bg-white bg-opacity-75 rounded-full cursor-pointer"
                            style={{ transform: "translate(-50%, -50%)" }}
                        >
                            <i className="fa fa-pencil" style={{ color: "black" }}></i>
                        </label>
                        <input
                            id={`image-upload-download-${id}`}
                            type="file"
                            className="hidden"
                            onChange={(e) => handleImageChange(e, 'download', id)}
                        />
                        <img src={currentImages[`download-${id}`] ? `${Helpers.basePath}${currentImages[`download-${id}`]}` : '/assets/laptopmockup.png'} className="w-80" />
                    </div>
                ))}
            </div>
        </div>
  )
}

export default DownloadSection