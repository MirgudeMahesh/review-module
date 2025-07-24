// RoleContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem('role') || '');
  const [name, setName] = useState(localStorage.getItem('name') || '');

  useEffect(() => {
    if (role) localStorage.setItem('role', role);
    else localStorage.removeItem('role');
  }, [role]);

  useEffect(() => {
    if (name) localStorage.setItem('name', name);
    else localStorage.removeItem('name');
  }, [name]);

  return (
    <RoleContext.Provider value={{ role, setRole, name, setName }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
