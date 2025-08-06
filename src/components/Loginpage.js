import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from './RoleContext';

export default function Loginpage() {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();
  const { role, setRole,setUser } = useRole();
  const [employees, setEmployees] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      setWarning("Select a role");
      return;
    }
    else if(!selectedName) {
      setWarning("Select a name");
      return;
    }
    
    setRole(selectedRole);
    setUser(selectedName);
    console.log("Selected name:", selectedName);
    
  };


  useEffect(() => {
    if (role) {
      navigate('/', { replace: true });
    }
    fetch('http://localhost:8000/employees')
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error(err));
  }, [role, navigate]);

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
      <label>Select Name:</label>
      <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)}>
        <option value="">--Choose a name--</option>
       {employees.map((emp) => (
  <option key={emp.name} value={emp.name}>{emp.name}</option>
))}
      </select>
      <button type="submit">Submit</button>
      <p style={{ color: 'red' }}>{warning}</p>
    </form>
  );
}
