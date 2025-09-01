import React from 'react'
import { useNavigate } from "react-router-dom";

import { useRole } from './RoleContext';
export default function Navbar() {


  const { role, setRole, setName, setUserRole, setUser } = useRole();

  const navigate = useNavigate();
  const Raise = () => { navigate('/disclosure');  window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const Review = () => { navigate('/');  window.scrollTo({ top: 0, behavior: 'smooth' }); }

  const Info = () => { navigate('/info');  window.scrollTo({ top: 0, behavior: 'smooth' }); }

  const selection = () => {
   

    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/Selection');

  }
  const notselection = () => {
    
    setRole('');
    setName('');
    setUser('');
    
    localStorage.removeItem('empterr');
    localStorage.removeItem('empcode');
    localStorage.removeItem('territory');

    navigate('/', { replace: true });

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
      case 'notchose':
        notselection();
        break;
      default:
        break;
    }
  };


  return (
    <div>
      
      <nav className="navbar">




        <h2 >Primary Sales</h2>

     

        <ul className="navbar-menu">

          {/* <li className="hide">
            <button className="text-button" onClick={Review}>Profile</button>
          </li>

          {(role === 'sbuh' || role === 'admin ') && (<li className="hide">
            <button className="text-button" onClick={Raise}  >Raise</button>
          </li>)} */}





          {/* {role !== 'be' && role !== 'bm' && (
            <li className="hide">
              <a>
                <button id="resume" className="text-button" onClick={commitment} >
                  Compliance
                </button>
              </a>
            </li>
          )} */}


        

          {/* <li className="hide">
            <a>
              <button id="contact" className="text-button" onClick={Info}>
                Info
              </button>
            </a>
          </li> */}
            <li className="hide">
            <a>
              {role === 'be' ? (<button id="contact" className="text-button" onClick={notselection}>
                logout
              </button>) :( <></>)}
              
            </a>
          </li>
          {/* <li className="hide">
            <a>
              <button id="contact" className="text-button" onClick={Raise}  >Raise
              </button>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
