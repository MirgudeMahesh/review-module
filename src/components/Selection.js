

import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useRole } from './RoleContext';
import DrillDownHierarchy from './DrillDownHierarchy';

function Selection() {
  const [expandedRows, setExpandedRows] = useState({});
  const navigate = useNavigate();
  const { setRole, setName } = useRole();


    const logout = () => {
    setRole('');
    setName('');
    navigate('/', { replace: true });
  };
  return (
    <div>
      <DrillDownHierarchy />

      

     <div style={{justifyContent:'center',alignItems:'center',display:'flex',padding:'10px'}}> <button  onClick={logout}>Logout</button></div>
    </div>
  );
}

export default Selection;
