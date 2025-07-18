import React from 'react'
import { useNavigate } from "react-router-dom";
import Performance from './Performance';
import { useState,useContext } from 'react';
import { DisableContext } from './DisableProvider';

export default function Navbar() {
   const  role  = localStorage.getItem('role')
  const { disable, setDisable } = useContext(DisableContext);
    const navigate = useNavigate();
    const perform = () => {navigate('/performance')}
     const Home = () => {navigate('/Home')};const Review = () => {navigate('/Review')}
          const misc = () => {navigate('/Miscellaneous')}
          const commitment = () => {navigate('/Commitment')}
                    const selection = () => {
                      setDisable(false);
                      navigate('/Selection');

                    }

  return (
    <div>
        <nav className="navbar">
     
      
      
      
       <h2 >Review</h2> 
        <select class="scb" id="options" >
            <option> Home</option>
            <option >About Me</option>
            <option>Skills</option>
            <option>Contact </option>
        </select>
      <ul className="navbar-menu">

 <li className="hide">
          <button  className="text-button" onClick={Review}>Report</button>
        </li>
       
          <li className="hide">
          <button  className="text-button" onClick={Home}  >Performance</button>
        </li>

        <li className="hide">
          <a>
            <button id="aboutmel" className="text-button" onClick={perform} >
              Team Build
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
            <button id="contact" className="text-button"  onClick={selection}>
             Select
            </button>
          </a>
        </li>
       

      </ul>
    </nav>
    </div>
  )
}
