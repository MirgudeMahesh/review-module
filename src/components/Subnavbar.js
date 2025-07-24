import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css'; // custom styles if used
import { useRole } from './RoleContext';
export default function SubNavbar() {
  const navigate = useNavigate();
  // const name = localStorage.getItem('name');
  // const role = localStorage.getItem('role');
  
 const { role,name,setRole, setName } = useRole();
  const handleSelect = (e) => {
    const value = e.target.value;

    switch (value) {
      case 'performance':
        navigate(`/profile/${name}/Performance`);
        break;
      case 'Review':
        navigate(`/profile/${name}/Review`);
        break;
      case 'Miscelaneous':
        navigate(`/profile/${name}/TeamBuild`);
        break;
      case 'hygine':
        navigate(`/profile/${name}/Hygine`);
        break;
      case 'compliance':
        navigate(`/profile/${name}/Compliance`);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <select className="scb1" id="options" onChange={handleSelect}>
        <option value="Review">Report</option>
        <option value="performance">Performance</option>
        <option value="Miscelaneous">TeamBuild</option>
        {role !== 'be' && <option value="hygine">Hygine</option>}
        {role !== 'be' && role !== 'bm' && <option value="compliance">Compliance</option>}
      </select>

      <div className="tabs">
        <li><Link to={`/profile/${name}/Review`}>Report</Link></li>
        <li><Link to={`/profile/${name}/Performance`}>Performance</Link></li>
        <li><Link to={`/profile/${name}/TeamBuild`}>TeamBuild</Link></li>

        {role !== 'be' && (
          <li><Link to={`/profile/${name}/Hygine`}>Hygine</Link></li>
        )}

        {role !== 'be' && role !== 'bm' && (
          <li><Link to={`/profile/${name}/Compliance`}>Compliance</Link></li>
        )}

        <li><Link>Todo</Link></li>
      </div>
    </div>
  );
}
