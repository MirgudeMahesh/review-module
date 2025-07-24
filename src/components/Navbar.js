import React from 'react'
import { useNavigate } from "react-router-dom";


import { useRole } from './RoleContext';
export default function Navbar() {
  // const role = localStorage.getItem('role');

   const { role,setRole, setName } = useRole();
  
  const navigate = useNavigate();
  const perform = () => { navigate('/TeamBuild') }
  const Home = () => { navigate('/Performance'); setName('') }
  const Review = () => { navigate('/Review'); setName('')  }
  const misc = () => { navigate('/Hygine'); setName('') }
  const commitment = () => { navigate('/Compliance'); setName('') }
  const selection = () => {

   setName('')
    navigate('/Selection');

  }
  const handleSelect = (value) => {
    switch (value) {
      case 'report':
        Review();
        break;
      case 'performance':
        Home();
        break;
      case 'team':
        perform();
        break;
      case 'hygine':
        misc();
        break;
      case 'compliance':
        commitment();
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
          <option value="report">Report</option>
          <option value="performance">Performance</option>
          <option value="team">TeamBuild</option>
          {role !== 'be' && <option value="hygine">Hygine</option>}
          {role !== 'be' && role !== 'bm' && <option value="compliance">Compliance</option>}
          <option value="chose">chose</option>
        </select>

        <ul className="navbar-menu">

          <li className="hide">
            <button className="text-button" onClick={Review}>Report</button>
          </li>

          <li className="hide">
            <button className="text-button" onClick={Home}  >Performance</button>
          </li>

          <li className="hide">
            <a>
              <button id="aboutmel" className="text-button" onClick={perform} >
                TeamBuild
              </button>
            </a>
          </li>
          {/* <li className="hide">
          <a>
            <button id="skills" className="text-button" onClick={misc}>
              Hygine
            </button>
          </a>
        </li> */}
          {role !== 'be' && (
            <li className="hide">
              <a>
                <button id="skills" className="text-button" onClick={misc}>
                  Hygine
                </button>
              </a>
            </li>
          )}

          {/* <li className="hide">
          <a>
            <button id="resume" className="text-button" onClick={commitment} >
              Compliance
            </button>
          </a>
        </li> */}
          {role !== 'be' && role !== 'bm' && (
            <li className="hide">
              <a>
                <button id="resume" className="text-button" onClick={commitment} >
                  Compliance
                </button>
              </a>
            </li>
          )}


          <li className="hide">
            <a>
              <button id="contact" className="text-button" onClick={selection}>
                Select
              </button>
            </a>
          </li>


        </ul>
      </nav>
    </div>
  )
}
