

import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

export default function Loginpage() {
  const [selectedRole, setSelectedRole] = useState('');
  const [warning, setWarning] = useState('');
  const navigate = useNavigate(); // lowercase n

  const handleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // always prevent default first

    if (selectedRole === '') {
      console.log('No role selected');
      setWarning("select a role")
      return; // stop further execution
    }

    localStorage.setItem('role', selectedRole);
    navigate('/Review');
    console.log('Role selected:', selectedRole);
  };

  return (
    <div style={{ top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%,-50%)' }}>
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
        <p style={{color:'red'}}>{warning}</p>
      </form>
    </div>
  );
}
