import React from 'react'
import { useNavigate } from "react-router-dom";

import { useRole } from './RoleContext';
export default function Navbar() {


   const { role,setRole, setName } = useRole();
  
  const navigate = useNavigate();
  const Raise = () => { navigate('/disclosure'); setName(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const Review = () => { navigate('/'); setName('') ; window.scrollTo({ top: 0, behavior: 'smooth' }); }
 
   const Info = () => { navigate('/info'); setName('') ; window.scrollTo({ top: 0, behavior: 'smooth' }); }

  const selection = () => {
window.scrollTo({ top: 0, behavior: 'smooth' }); 
   setName('')
    navigate('/Selection');

  }
  const handleSelect = (value) => {
    switch (value) {
      case 'report':
        Review();
        break;
      case 'performance':
        Raise();
        break;
    case 'MyChats':
      Info();
      break;
      case 'chose':
        selection();
        break;
      default:
        break;
    }
  };


  return (
    <div>
      <nav className="navbar">




        <h2 >Review</h2>
      
        <select className="scb" id="options" onChange={(e) => handleSelect(e.target.value)}>
          <option value="">Select</option>
          <option value="report">Profile</option>
          <option value="performance">Raise</option>
     <option value="MyChats">Info</option>
          {/* {role !== 'be' && <option value="hygine">Hygine</option>} */}
          
          <option value="chose">chose</option>
        </select>

        <ul className="navbar-menu">

          <li className="hide">
            <button className="text-button" onClick={Review}>Profile</button>
          </li>

      {(role==='bl' || role==='admin ')  && (  <li className="hide">
            <button className="text-button" onClick={Raise}  >Raise</button>
          </li>)}

        
       
      
         
          {/* {role !== 'be' && role !== 'bm' && (
            <li className="hide">
              <a>
                <button id="resume" className="text-button" onClick={commitment} >
                  Compliance
                </button>
              </a>
            </li>
          )} */}


          <li className="hide">
            <a>
              <button id="contact" className="text-button" onClick={selection}>
                Select
              </button>
            </a>
          </li>
          <li className="hide">
            <a>
              <button id="contact" className="text-button" onClick={Info}>
                Info
              </button>
            </a>
          </li>


        </ul>
      </nav>
    </div>
  )
}
