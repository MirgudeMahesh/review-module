import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRole } from './RoleContext';

export default function Navbar({ handleOpenModal }) {
    const { role,name,setRole, setName } = useRole();
  const navigate = useNavigate();
  const perform = () => { navigate('/TeamBuild');setName(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const Home = () => { navigate('/Performance'); setName(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const Review = () => { navigate('/'); setName('') ; window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const misc = () => { navigate('/Hygine'); setName('') ; window.scrollTo({ top: 0, behavior: 'smooth' });}
  const commitment = () => { navigate('/Compliance'); setName(''); }
 
  const handleSelect = (value) => {
    switch (value) {
      case 'report':
        Review()
        setName('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'performance':
        Home();
        setName('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'team':
        perform()
        setName('');

        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'hygine':
        misc()
        setName('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'compliance':
        commitment()
        setName('');
        break;
    case 'Escalating':
      handleOpenModal();
      setName('');
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
  ?
</button>

      </div>
      
    </div>
  );
}
