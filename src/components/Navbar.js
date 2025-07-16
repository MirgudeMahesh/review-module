import React from 'react'
import { useNavigate } from "react-router-dom";
import Performance from './Performance';
import { useState,useContext } from 'react';
import { DisableContext } from './DisableProvider';

export default function Navbar() {
  
  const { disable, setDisable } = useContext(DisableContext);
    const navigate = useNavigate();
    const perform = () => {navigate('/performance')}
     const Home = () => {navigate('/Home')}
          const misc = () => {navigate('/Miscellaneous')}
          const commitment = () => {navigate('/Commitment')}
                    const selection = () => {
                      setDisable(false);
                      navigate('/Selection');

                    }

  return (
    <div>
        <nav className="navbar">
      {/* <img style={{width:"80px",height:"80px",marginLeft:"60px"}} src='logo192.png' /> */}
      {/* <h1 style={{ color: 'white',textAlign:'center',width:'300px',fontSize:'25px'}}>{name7}</h1> */}
      
      
       
       <h2 >Review</h2>
        <select class="scb" id="options" >
            <option> Home</option>
            <option >About Me</option>
            <option>Skills</option>
            <option>Contact </option>
        </select>
      <ul className="ull">
       
          <li className="hide">
          <button  className="text-button" onClick={Home}  >Home</button>
        </li>

        <li className="hide">
          <a>
            <button id="aboutmel" className="text-button" onClick={perform} >
              Performance
            </button>
          </a>
        </li>
        <li className="hide">
          <a>
            <button id="skills" className="text-button" onClick={misc}>
              Misc
            </button>
          </a>
        </li>

        <li className="hide">
          <a>
            <button id="resume" className="text-button" onClick={commitment} >
              Commitment
            </button>
          </a>
        </li>
      

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
