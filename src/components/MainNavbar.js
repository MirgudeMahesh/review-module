import React from 'react'
import '../styles.css';
import { useNavigate } from "react-router-dom";

export default function MainNavbar() {
    const navigate = useNavigate();
    const selection =()=>{
        navigate('/Selection')
    }
     const showProfile =()=>{
        navigate('/MyProfile')
    }
  return (
    <div>
         <nav className="navbar">
      
      
      
       
       <h2 >Review</h2>
       
      <ul className="navbar-menu">
        <li className="hide">
          <a>
            <button id="contact" className="text-button"  onClick={showProfile}>
             Profile
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
