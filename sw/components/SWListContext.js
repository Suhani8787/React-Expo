import React, { createContext, useState } from 'react';

export const SWListContext = createContext();

export const SWListProvider = ({ children }) => {
  const [sw, setSW] = useState([]);

  return (
    <SWListContext.Provider value={{ sw, setSW }}>
      {children}
    </SWListContext.Provider>
  );
};
