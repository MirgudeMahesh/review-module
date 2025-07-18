

import { useNavigate } from "react-router-dom";

// import { useRole } from './RoleContext';
import React, { useState } from 'react';

export default function Loginpage() {
  const [selectedRole, setSelectedRole] = useState('');
  // const { setRole } = useRole();


  const handleChange = (e) => {
    setSelectedRole(e.target.value);
  };
const Navigate = useNavigate();
 
    const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('role', selectedRole);
    Navigate('/Review') 
  
  };

  return (
    <div style={{top:'50%',left:'50%',position:'absolute',transform:'translate(-50%,-50%)'}}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="role-select">Select Role:</label>
        <select id="role-select" value={selectedRole} onChange={handleChange}>
          <option value="">--Choose a role--</option>
          <option value="bl">BL</option>
          <option value="bh">BH</option>
          <option value="bm">BM</option>
          <option value="be">BE</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Submit</button>
        
      </form>

    
    </div>
  );
}
