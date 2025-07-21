import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css'; // custom styles if used

export default function SubNavbar() {
  const navigate = useNavigate();
  const name = localStorage.getItem('name');
  const role = localStorage.getItem('role');

  const handleSelect = (e) => {
    const value = e.target.value;

    switch (value) {
      case 'performance':
        navigate(`/profile/${name}/Home`);
        break;
      case 'Review':
        navigate(`/profile/${name}/Review`);
        break;
      case 'Miscelaneous':
        navigate(`/profile/${name}/performance`);
        break;
      case 'hygine':
        navigate(`/profile/${name}/Miscellaneous`);
        break;
      case 'compliance':
        navigate(`/profile/${name}/Commitment`);
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
        <li><Link to={`/profile/${name}/Home`}>Performance</Link></li>
        <li><Link to={`/profile/${name}/performance`}>TeamBuild</Link></li>

        {role !== 'be' && (
          <li><Link to={`/profile/${name}/Miscellaneous`}>Hygine</Link></li>
        )}

        {role !== 'be' && role !== 'bm' && (
          <li><Link to={`/profile/${name}/Commitment`}>Compliance</Link></li>
        )}

        <li><Link>Todo</Link></li>
      </div>
    </div>
  );
}
