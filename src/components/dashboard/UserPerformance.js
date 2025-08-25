import React from 'react'
//----------------------------Team Build-----------------------------

import Textarea from '../Textarea';
import ActualCommit from '../ActualCommit';
 import { useRole } from '../RoleContext';
 import Subnavbar from '../Subnavbar';
 import '../../styles.css';
import Chats from './Chats';
export default function UserPerformance() {
 
  
         const { role,userRole,name, setName } = useRole();


  const handleSubmit = (text) => {
    console.log("ABC Submitted:", 'performance');

  };
  return (
    <div>
      {/* <Navbar />
   {name && <Subnavbar/>} */}
      <div
      className='table-box'
      >

        {userRole === 'BM' && (
         


            <div className="table-container">
                {name && <Subnavbar/>}
              <h1 style={{ textAlign: 'center' }}>Efforts and Effectivenss</h1>
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
                    <td>Self priority customer Cov</td>
                    <td>21</td>
                    <td>alice</td>
                    <td>88</td>
                  </tr>
                  <tr>
                    <td>Team's Coverage</td>
                    <td>22</td>
                    <td>bob</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <td>Team's compliance</td>
                    <td>23</td>
                    <td>charlie</td>
                    <td>92</td>
                  </tr>
                  <tr>
                    <td>Mkting Impl(No inv > 30 Days)</td>
                    <td>20</td>
                    <td>diana</td>
                    <td>81</td>
                  </tr>
                  <tr>
                    <td>Coaching days(No of BE X 5)</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                  <tr>
                    <td>Coaching days(No of BE X 5)</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                  <tr>
                    <td>MSP Compliance(Vs OBJ)</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                  <tr>
                    <td>TP Adherence Self & Team</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                  <tr>
                    <td>Coaching Score</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                  <tr>
                    <td>% Tty MSR Compliant(Vs Sec)</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                  <tr>
                    <td>No of Calls Self</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                  <tr>
                    <td>Self Learning Score</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                  <tr>
                    <td>Team Learning Score</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                  <tr className='shade'>
                    <td>Effort Score</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                </tbody>
              </table>
               

            </div>

      

        )}
        {userRole === 'BL' && (
        

            <div className="table-container">
               {name && <Subnavbar/>}
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
             </div>

        

        )}

        {userRole === 'BE' && (
        


            <div className="table-container">
                {name && <Subnavbar/>}
              <h1 style={{ textAlign: 'center' }}>Efforts and Effectivenss</h1>
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
                    <td>#Calls</td>
                    <td>21</td>
                    <td>88</td>
                    <td>88</td>
                  </tr>
                  <tr>
                    <td>%Coverage</td>
                    <td>21</td>
                    <td>alice</td>
                    <td>88</td>
                  </tr>
                  <tr>
                    <td>%Compliance</td>
                    <td>22</td>
                    <td>bob</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <td>#RCPA</td>
                    <td>23</td>
                    <td>charlie</td>
                    <td>92</td>
                  </tr>
                  <tr>
                    <td>Coaching Score</td>
                    <td>20</td>
                    <td>diana</td>
                    <td>81</td>
                  </tr>
                  <tr>
                    <td>Learning Score</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                  <tr>
                    <td>%Activity Imple</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                  <tr>
                    <td>%Share('@RCPA)</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>


                  <tr className='shade'>
                    <td>Effort Score</td>
                    <td>24</td>
                    <td>ethan</td>
                    <td>68</td>
                  </tr>
                </tbody>
              </table>
           
            

          </div>

        )}
      </div>
       
    </div>
  )
}
