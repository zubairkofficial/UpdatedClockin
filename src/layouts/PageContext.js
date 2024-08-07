import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    rows: [
      {
        type: '', content: '', style: { padding: {}, margin: {} },
      }
    ],
  });
  console.log('console', formData)

  return (
    <PageContext.Provider value={{ formData, setFormData }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
