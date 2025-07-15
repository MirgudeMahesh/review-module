import React, { createContext, useState } from 'react';

export const DisableContext = createContext();

export const DisableProvider = ({ children }) => {
  const [disable, setDisable] = useState(false);

  return (
    <DisableContext.Provider value={{ disable, setDisable }}>
      {children}
    </DisableContext.Provider>
  );
};
