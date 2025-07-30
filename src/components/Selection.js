

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useRole } from './RoleContext';
import DrillDownHierarchy from './DrillDownHierarchy';

function Selection() {
  const [expandedRows, setExpandedRows] = useState({});
  const navigate = useNavigate();
  const { setRole, setName } = useRole();

  const profileView = (x) => {
    setName(x);
    navigate(`/profile/${x}/Review`);
  };

  const logout = () => {
    setRole('');
    setName('');
    navigate('/');
  };

  return (
    <div>
      <DrillDownHierarchy />

      {/* <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
        <ul style={{ border: '1px solid black', padding: '20px', width: "300px", alignItems: 'center' }}>
          <button onClick={() => profileView('robert')}><li>robert</li></button>
          <button onClick={() => profileView('andrew')}><li>Andrew</li></button>
          <button onClick={() => profileView('williams')}><li>Williams</li></button>
        </ul>
      </div> */}

     <div style={{justifyContent:'center',alignItems:'center',display:'flex',padding:'10px'}}> <button  onClick={logout}>Logout</button></div>
    </div>
  );
}

export default Selection;
