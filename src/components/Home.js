import React from 'react'
import logooo from '../pictures/logooo.png'
import { useNavigate } from "react-router-dom";
import '../styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
// import { useRole } from './RoleContext';
import ActualCommit from './ActualCommit';

const Home = () => {
    // const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
     const  role  = localStorage.getItem('role')

  return (
    <div style={{border:'0',margin:'0',maxHeight:'100%'}}>
<div>
 <Navbar/> 
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
  {(role === 'bm' || role === 'be') ? (
 
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
):(


  <div className="table-container">
          <h3 style={{ textAlign: 'center' }}>Team Building & Development</h3>

          <table className="custom-table">
            <thead>
              <tr>
                <th>weightage</th>
                <th>Parameter</th>
                <th>Description</th>
                <th>Objective</th>
                <th>Month Actual</th>
                <th>YTD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15%</td> {/* ✅ Show role here */}
                <td>Hiring Quality Index</td>
                <td>% of proposed candidates Approved by BHR vs Submitted to BHR by BL</td>
                <td>100%</td>
                <td>33%</td>
                <td>70%</td>
              </tr>
              <tr>
                 <td>0%</td> {/* ✅ Show role here */}
                <td>Induction Score</td>
                <td>*% of New Joinees Clearing induction in Pravesh</td>
                <td>100%</td>
                <td>33%</td>
                <td>70%</td>
              </tr>
              <tr>
                 <td>15%</td> {/* ✅ Show role here */}
                <td>Team Stability IndexI</td>
                <td>*Infant attrition rate (within 180 days)</td>
                <td>100%</td>
                <td>33%</td>
                <td>70%</td>
              </tr>
              <tr>
                 <td>0%</td> {/* ✅ Show role here */}
                <td>Team Stability IndexI</td>
                <td>*Avg. vacancy filling time (in days)</td>
                <td>100%</td>
                <td>33%</td>
                <td>70%</td>
              </tr>
              <tr>
                 <td>0%</td> {/* ✅ Show role here */}
                <td>Team Stability IndexI</td>
                <td>Overall retention rate (Annual rate in current FY)</td>
                <td>100%</td>
                <td>33%</td>
                <td>70%</td>
              </tr>
                <tr>
                 <td>0%</td> {/* ✅ Show role here */}
                <td>Team Development Index</td>
                <td>*% BM certification level change of L1, L2, L3 (10, 20,30 Points)</td>
                <td>100%</td>
                <td>33%</td>
                <td>70%</td>
              </tr>
               <tr>
                 <td>0%</td> {/* ✅ Show role here */}
                <td>Team Development Index</td>
                <td>*% BE certification level change of L1, L2, L3 (10, 20,30 Points)</td>
                <td>100%</td>
                <td>33%</td>
                <td>70%</td>
              </tr>
                 <tr>
                 <td>0%</td> {/* ✅ Show role here */}
                <td>Talent Pool Strength</td>
                <td>*No. of pre-assesed internal candidates for promotion</td>
                <td>100%</td>
                <td>33%</td>
                <td>70%</td>
              </tr>
                <tr>
                 <td>0%</td> {/* ✅ Show role here */}
                <td>Talent Pool Strength</td>
                <td>No of Candedates Data availabale for Vaccancies</td>
                <td>100%</td>
                <td>33%</td>
                <td>70%</td>
              </tr>
              <tr className='shade'>
                 <td></td>
                <td>Team Building Score</td>
                <td></td><td></td>
                <td></td>
                
               
                <td>68%</td>
              </tr>
            </tbody>
          </table>
       <ActualCommit/> </div> )}
     
</div>


</div>
  )
}

export default Home;