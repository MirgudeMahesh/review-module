import React, { createContext, useContext, useState, useEffect } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [user, setUser] = useState(localStorage.getItem('user') || '');



  useEffect(() => {
    if (name) localStorage.setItem('name', name);
    else localStorage.removeItem('name');
  }, [name]);

    useEffect(() => {
    if (user) localStorage.setItem('user', user);
    else localStorage.removeItem('user');
  }, [user]);

  return (
    <RoleContext.Provider value={{  name, setName,user, setUser  }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
