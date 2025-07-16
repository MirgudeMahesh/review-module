import React from 'react'
import '../styles.css';
import { useNavigate } from "react-router-dom";
export default function MainNavbar() {
    const navigate = useNavigate();
    const selection =()=>{
        navigate('/Selection')
    }
  return (
    <div>
         <nav className="navbar">
      {/* <img style={{width:"80px",height:"80px",marginLeft:"60px"}} src='logo192.png' /> */}
      {/* <h1 style={{ color: 'white',textAlign:'center',width:'300px',fontSize:'25px'}}>{name7}</h1> */}
      
      
       
       <h2 >Review</h2>
       
      <ul className="ull">
       
   
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
