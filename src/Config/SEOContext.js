// src/context/SEOContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Helpers from './Helpers';

export const SEOContext = createContext();

export const SEOProvider = ({ children }) => {
  const [seoData, setSeoData] = useState([]);

  const fetchSEOData = async (pageName) => {
    try {
      const response = await axios.get(`${Helpers.apiUrl}seo/show?name=${pageName}`);
      // Parse the og property if it's a JSON string
      const seoData = response.data.data;
      if (typeof seoData.og === 'string') {
        seoData.og = JSON.parse(seoData.og);
      }
      setSeoData(seoData);
      // console.log('myresponse', seoData);
    } catch (error) {
      console.error('Error fetching SEO data:', error);
    }
  };
  

  return (
    <SEOContext.Provider value={{ seoData, fetchSEOData }}>
      {children}
    </SEOContext.Provider>
  );
};
