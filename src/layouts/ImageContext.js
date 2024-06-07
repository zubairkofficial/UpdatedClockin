import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export const useImages = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState({});

    const updateImage = (section, url) => {
        setImages(prevImages => ({ ...prevImages, [section]: url }));
    };

    return (
        <ImageContext.Provider value={{ images, updateImage }}>
            {children}
        </ImageContext.Provider>
    );
};
