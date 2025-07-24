import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from './RoleContext';

export default function Loginpage() {
  const [selectedRole, setSelectedRole] = useState('');
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();
  const { setRole } = useRole();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedRole) {
      setWarning("Select a role");
      return;
    }

    setRole(selectedRole); // <- this updates localStorage too
    navigate('/Review');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Select Role:</label>
      <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
        <option value="">--Choose a role--</option>
        <option value="bl">BL</option>
        <option value="bh">BH</option>
        <option value="bm">BM</option>
        <option value="be">BE</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Submit</button>
      <p style={{ color: 'red' }}>{warning}</p>
    </form>
  );
}
