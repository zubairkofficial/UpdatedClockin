import React, { createContext, useContext, useState } from 'react';

// Create the context
const RowColumnContext = createContext();

// Create a provider component
export const RowColumnProvider = ({ children }) => {
    const [rowColumnData, setRowColumnData] = useState({ rowIndex: null, columnIndex: null });

    return (
        <RowColumnContext.Provider value={{ rowColumnData, setRowColumnData }}>
            {children}
        </RowColumnContext.Provider>
    );
};

// Create a custom hook to use the context
export const useRowColumnContext = () => {
    return useContext(RowColumnContext);
};
