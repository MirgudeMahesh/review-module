import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRole } from './RoleContext';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar({ handleOpenModal }) {
    const { role,name,setRole, setName } = useRole();
  const navigate = useNavigate();
  const perform = () => { navigate('/TeamBuild'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const Home = () => { navigate('/Performance');  window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const Review = () => { navigate('/');  window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const misc = () => { navigate('/Hygine');  window.scrollTo({ top: 0, behavior: 'smooth' });}
  const commitment = () => { navigate('/Compliance');  }
 
  const handleSelect = (value) => {
    switch (value) {
      case 'report':
        Review()
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'performance':
        Home();
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'team':
        perform()
        

        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'hygine':
        misc()
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'compliance':
        commitment()
        
        break;
    case 'Escalating':
      handleOpenModal();
      
      break;

      
     
      default:
        break;
    }
  };

  return (
    <div >
      <div className="select-wrapper">
      <select className="scb1" id="options" onChange={(e) => handleSelect(e.target.value)}>
        <option value="">Select</option>
        <option value="report">Report</option>
        <option value="performance">Performance</option>
        <option value="team">TeamBuild</option>
        {role !== 'be' && <option value="hygine">Hygine</option>}
        {role !== 'be' && role !== 'bm' && <option value="compliance">Compliance</option>}
        <option value="Escalating">Escalating</option>
      </select>
</div>
      <div className="tabs77">
        <li><Link to={`/`}>Report</Link></li>
        <li><Link to={`/Performance`}>Performance</Link></li>
        <li><Link to={`/TeamBuild`}>TeamBuild</Link></li>

        {role !== 'be' && (
          <li><Link to={`/Hygine`}>Hygine</Link></li>
        )}

        {role !== 'be' && role !== 'bm' && (
          <li><Link to={`/Compliance`}>Compliance</Link></li>
        )}
  
      <button
  onClick={handleOpenModal}
  style={{
    border: 'none',
    background: 'transparent',
    color: 'white',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '18px',
  }}
>
 <FontAwesomeIcon icon={faTriangleExclamation} />
</button>

      </div>
      
    </div>
  );
}
