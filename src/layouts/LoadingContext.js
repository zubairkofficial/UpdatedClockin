import React, { createContext, useState, useContext } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(0);

  const startLoading = () => setLoadingCount(prevCount => prevCount + 1);
  const stopLoading = () => setLoadingCount(prevCount => prevCount - 1);

  return (
    <LoadingContext.Provider value={{ startLoading, stopLoading, isLoading: loadingCount > 0 }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
