import React from 'react'
import logooo from '../pictures/logooo.png'
import { useNavigate } from "react-router-dom";
import '../styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  return (
    <div style={{overflowY:'auto',border:'0',margin:'0',maxHeight:'100%'}}>
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
          <button  className="text-button" >Home</button>
        </li>
        <li className="hide">
          <a>
            <button id="aboutmel" className="text-button" >
              Add Notes
            </button>
          </a>
        </li>
        <li className="hide">
          <a>
            <button id="skills" className="text-button" >
              My Notes
            </button>
          </a>
        </li>

        <li className="hide">
          <a>
            <button id="resume" className="text-button" >
              About
            </button>
          </a>
        </li>
        <li className="hide">
          <a>
            <button id="contact" className="text-button" >
             Logout
            </button>
          </a>
        </li>
      </ul>
    </nav>
</div>
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    marginTop: '125px',
    alignItems: 'center',
    height: '80vh',
  }}
>
  <div className="table-container">
  <table className="custom-table">
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Objective(%)</th>
        <th>Month(%)</th>
        <th>YTD(%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice</td>
        <td>21</td>
        <td>alice@example.com</td>
        <td>88</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>22</td>
        <td>bob@example.com</td>
        <td>75</td>
      </tr>
      <tr>
        <td>Charlie</td>
        <td>23</td>
        <td>charlie@example.com</td>
        <td>92</td>
      </tr>
      <tr>
        <td>Diana</td>
        <td>20</td>
        <td>diana@example.com</td>
        <td>81</td>
      </tr>
      <tr>
        <td>Ethan</td>
        <td>24</td>
        <td>ethan@example.com</td>
        <td>68</td>
      </tr>
    </tbody>
  </table>
</div>

</div>


</div>
  )
}

export default Home;