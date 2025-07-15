import React, { createContext, useState, useContext } from 'react';

// Create context
const RoleContext = createContext();

// Export a custom hook for easy access
export const useRole = () => useContext(RoleContext);

// Provider component
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('');

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
