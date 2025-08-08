import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from './RoleContext';

export default function Loginpage() {
  const [selectedTerritory, setSelectedTerritory] = useState('');
  const [warning, setWarning] = useState('');
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();
  const { setRole, setUser } = useRole();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      navigate('/', { replace: true });
      return;
    }

    fetch('http://localhost:8000/employees')
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error('Error fetching employees:', err));
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedTerritory) {
      setWarning('Select a territory');
      return;
    }

    const selectedEmp = employees.find(emp => emp.Territory === selectedTerritory);

    if (!selectedEmp || !selectedEmp.Role) {
      setWarning('Role not found for selected employee');
      return;
    }

    localStorage.setItem('empcode', selectedEmp.Emp_Code);
    localStorage.setItem('empterr', selectedEmp.Territory);

    let userRole = selectedEmp.Role.toLowerCase();
    if (userRole === 'te') {
      userRole = 'be';
    }

    setRole(userRole);
    setUser(selectedEmp.name);

    navigate('/', { replace: true });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        gap: '10px',
        margin: '50px auto',
      }}
    >
      <label htmlFor="employee-select">Select Employee (Territory):</label>
      <select
        id="employee-select"
        value={selectedTerritory}
        onChange={(e) => setSelectedTerritory(e.target.value)}
      >
        <option value="">--Choose an employee--</option>
        {employees.map((emp) => (
          <option key={emp.Emp_Code} value={emp.Territory}>
            {emp.name} ({emp.Territory})
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>

      {warning && <p style={{ color: 'red' }}>{warning}</p>}
    </form>
  );
}
