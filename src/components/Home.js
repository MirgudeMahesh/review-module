import React from 'react'
import logooo from '../pictures/logooo.png'
import { useNavigate } from "react-router-dom";
import '../styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useRole } from './RoleContext';
import ActualCommit from './ActualCommit';

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
     const  role  = localStorage.getItem('role')

  return (

 <div><Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '125px',
          alignItems: 'center',
          height: '80vh',
        }}
      >
 
        {role === 'bm' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5px',
              alignItems: 'center',
              height: '80vh',
            }}
          >


  <div className="table-container">
    <h1 style={{textAlign:'center'}}>Bussiness Performance</h1>
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
        <td>Target Ach</td>
        <td>100%</td>
        <td>alice</td>
        <td>88</td>
      </tr>
      <tr>
        <td>Secondary Gr%</td>
        <td>22</td>
        <td>bob</td>
        <td>75</td>
      </tr>
      <tr>
        <td>Span of Performance</td>
        <td>23</td>
        <td>charlie</td>
        <td>92</td>
      </tr>
      <tr>
        <td>Dr.Conversion(Self Prio)</td>
        <td>20</td>
        <td>diana</td>
        <td>81</td>
      </tr>
      <tr>
        <td>%Gr in Rxer</td>
        <td>24</td>
        <td>ethan</td>
        <td>68</td>
      </tr>
      <tr>
        <td>% of Viable Terr</td>
        <td>24</td>
        <td>ethan</td>
        <td>68</td>
      </tr>
      <tr className='shade'>
        <td>Performance Score</td>
        <td>24</td>
        <td>ethan</td>
        <td>68</td>
      </tr>
    </tbody>
  </table>
<ActualCommit/></div>

          </div>

        )}
    
         {role === 'bl' && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '5px',
                      alignItems: 'center',
                      height: '80vh',
                    }}
                  >
        
        
        <div className="table-container">
            <h1 style={{textAlign:'center'}}>Bussiness Performance</h1>
          <table className="custom-table">
            <thead>
              <tr>
                <th>weightage</th>
                <th>Parameter</th>
                <th>Description</th> <th>Objective(%)</th>
                <th>Month Actual(%)</th>
                <th>YTD(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10%</td>
                <td>Target / Objective Realization</td>
                <td>Target achieved ≥100%</td>
                <td>88</td><td>88</td><td>88</td>
              </tr>
              <tr>
                <td>10%</td>
                <td>Target / Objective Realization</td>
                <td> % of Territories achieving ≥90% of Objective</td>
                <td>88</td><td>88</td><td>88</td>
              </tr>
                   <tr>
                <td>10%</td>
                <td>Corporate Customer Engagement & Conversion Score</td>
                <td> % of corporate doctors visited/month (Out of 100 Selected)</td>
                <td>88</td><td>88</td><td>88</td>
              </tr>
                <tr>
                <td>10%</td>
                <td>Corporate Customer Engagement & Conversion Score</td>
                <td> % of Corporate doctors moved to active prescriber category </td>
                <td>88</td><td>88</td><td>88</td>
              </tr>
              <tr>
                <td>68</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>68</td>
              </tr>
               <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
               <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
               <td></td>
               <tr className='shade'>
                <td></td>
                <td>Performance Score</td>
                <td>24</td>
                <td></td>
                <td></td>
                <td>68</td>
              </tr>
            </tbody>
          </table>
        <ActualCommit/></div>
        
                  </div>
        
                )}

    {role === 'be' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5px',
              alignItems: 'center',
              height: '80vh',
            }}
          >


  <div className="table-container">
    <h1 style={{textAlign:'center'}}>Bussiness Performance</h1>
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
        <td>Secondary Gr%</td>
        <td>#N/A</td>
        <td>#N/A</td>
        <td>#N/A</td>
      </tr>
      <tr>
        <td>MSR Acheivement%</td>
        <td>100</td>
        <td>#N/A</td>
        <td>#N/A</td>
      </tr>
      <tr>
        <td>%Gr in Rxer</td>
        <td>5</td>
        <td>#N/A</td>
        <td>#N/A</td>
      </tr>
       <tr>
        <td>Brand Perf. Index</td>
        <td>100</td>
        <td>#N/A</td>
        <td>#N/A</td>
      </tr>
      
      <tr className='shade'>
        <td>Performance Score</td>
        <td>24</td>
        <td>#N/A</td>
        <td>68</td>
      </tr>
    </tbody>
  </table>
<ActualCommit/></div>

          </div>

        )}


      
      </div>
    </div>
  )
}

export default Home;