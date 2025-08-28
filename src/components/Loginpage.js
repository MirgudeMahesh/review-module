import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from './RoleContext';

export default function Loginpage() {
  const [warning, setWarning] = useState('');
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmp, setSelectedEmp] = useState(null);

  const navigate = useNavigate();
  const { setRole, setUser } = useRole();

  // Fetch employees once on mount
  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      navigate('/', { replace: true });
      return;
    }

    fetch('https://review-module-backend-2.onrender.com/employees')
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
       
        setFilteredEmployees(data); // default: show all
      })
      .catch((err) => console.error('Error fetching employees:', err));
  }, [navigate]);

  // Filter employees whenever searchTerm changes
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter(
        (emp) =>
          emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          emp.Territory.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEmployees(filtered);
    }
  }, [searchTerm, employees]);

  const handleLogin = () => {
    if (!selectedEmp) {
      setWarning('Please select an employee');
      return;
    }

    if (!selectedEmp.Role) {
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
    <div
      style={{
        width: '300px',
        margin: '50px auto',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <label>Search Employee:</label>
      <input
        type="text"
        placeholder="Type name or territory..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />

      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp) => (
            <div
              key={emp.Emp_Code}
              onClick={() => setSelectedEmp(emp)}
              style={{
                padding: '6px',
                borderBottom: '1px solid #eee',
                cursor: 'pointer',
                background:
                  selectedEmp?.Emp_Code === emp.Emp_Code
                    ? '#d0e8ff'
                    : 'transparent',
              }}
            >
              {emp.name} ({emp.Territory})
            </div>
          ))
        ) : (
          <div style={{ color: 'gray' }}>No employees found</div>
        )}
      </div>

      <button
        onClick={handleLogin}
        style={{
          marginTop: '10px',
          padding: '8px',
          width: '100%',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Login
      </button>

      {warning && <p style={{ color: 'red' }}>{warning}</p>}
    </div>
  );
}
