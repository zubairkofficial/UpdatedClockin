import React from 'react'
import Sidebar from '../../Components/Sidebar'
import { ThemeContext } from './../../../layouts/ThemeContext.js';
import Helpers from '../../../Config/Helpers';
import axios from 'axios';

const SecondSection = ({ handleImageChange, currentImages }) => {
    return (
        <div className="flex justify-start m-10">
            <div className="flex flex-wrap gap-5">
                {['1'].map(id => (
                    <div key={id} className="p-5 bg-pinkbackground rounded-xl shadow-sm relative flex-1">
                        <label
                            htmlFor={`image-upload-second-${id}`}
                            className="absolute top-0 left-0 p-1 bg-white bg-opacity-75 rounded-full cursor-pointer"
                            style={{ transform: "translate(-50%, -50%)" }}
                        >
                            <i className="fa fa-pencil" style={{ color: "black" }}></i>
                        </label>
                        <input
                            id={`image-upload-second-${id}`}
                            type="file"
                            className="hidden"
                            onChange={(e) => handleImageChange(e, 'second', id)}
                        />
                        <img src={currentImages[`second-${id}`] ? `${Helpers.basePath}${currentImages[`second-${id}`]}` : '/assets/f7.png'} className="w-80" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SecondSection;
