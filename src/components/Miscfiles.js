import React from 'react'
import Navbar from './Navbar';
import { useRole } from './RoleContext';

export default function Miscfiles() {
  const { role } = useRole(); // ✅ Get the role value

  return (
    <div>
      <Navbar />
      {(role === 'bm' || role === 'be') ?
         (<div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '125px',

          gap: '30px',
          height: '80vh',
          width: '100%',
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <div className="table-container1">
          <h3 style={{ textAlign: 'center' }}>Hygine</h3>

          <table className="custom-table1">
            <thead>
              <tr>
                <th>Parameter___________</th>
                <th>Objective(%)</th>
                <th>Month(%)</th>
                <th>YTD(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{role}</td>
                <td>100%</td>
                <td>73%</td>
                <td>88</td>
              </tr>
              <tr>
                <td>RBO Cost</td>
                <td>22</td>
                <td>57%</td>
                <td>75</td>
              </tr>
              <tr>
                <td>Receivables</td>
                <td>23</td>
                <td>45%</td>
                <td>92</td>
              </tr>
              <tr>
                <td>Returns</td>
                <td>20</td>
                <td>67%</td>
                <td>81</td>
              </tr>
              <tr>
                <td>Closing Stock</td>
                <td>20</td>
                <td>89%</td>
                <td>81</td>
              </tr>
              <tr className='shade'>
                <td>Hygine Score</td>
                <td>24</td>
                <td>78%</td>
                <td>68</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="table-container1">
          <h3 style={{ textAlign: 'center' }}>Efficiency Index</h3>

          <table className="custom-table1">
            <thead>
              <tr>
                <th>Parameter_____________</th>
                <th>Objective(%)</th>
                <th>Month(%)</th>
                <th>YTD(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Business Performance</td>
                <td>100%</td>
                <td>67%</td>
                <td>88</td>
              </tr>
              <tr>
                <td>Effort and Effectiveness</td>
                <td>22</td>
                <td>72%</td>
                <td>75</td>
              </tr>
              <tr>
                <td>Hygine</td>
                <td>23</td>
                <td>85%</td>
                <td>92</td>
              </tr>
              <tr className='shade'>
                <td>EL Score</td>
                <td>24</td>
                <td>70%</td>
                <td>68</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>) : (<div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '125px',

          gap: '30px',
          height: '80vh',
          width: '100%',
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <div className="table-container1">
          <h3 style={{ textAlign: 'center' }}>Compliance & Reporting</h3>

          <table className="custom-table1" style={{ fontSize: '12px', }}>
            <thead>
              <tr>
                <th>weightage</th>
                <th>Parameter</th>
                <th>Description</th>
                <th>Objective(%)</th>
                <th>Month Actual</th>
                <th>YTD(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>88</td>
                <td>TP Adherence Score</td>
                <td>% adherence to TP</td>
                <td>73%</td>
                <td>88</td><td>88</td>
              </tr>
              <tr>
                <td>88</td>
                <td>Reporting Integrity Index</td>
                <td>Accuracy of SFA-reported data</td>
                <td>73%</td>
                <td>88</td><td>88</td>
              </tr>
              <tr>
                <td>88</td>
                <td>SFPI</td>
                <td>Team's Customer Coverage</td>
                <td>73%</td>
                <td>88</td><td>88</td>
              </tr>
              <tr>
                <td>88</td>
                <td>SFPI</td>
                <td>Team's Customer Compliance</td>
                <td>73%</td>
                <td>88</td><td>88</td>
              </tr>
              <tr>
                <td>88</td>
                <td>MSPR Compliance</td>
                <td>% accuracy of MSP (for HQ) vs Objective taken cumulatively by BL</td>
                <td>73%</td>
                <td>88</td><td>88</td>
              </tr>
              <tr>
                <td>88</td>
                <td>MSPR Compliance</td>
                <td>% of headquarters having MSR compliance with respect to Average Secondary Sales</td>
                <td>73%</td>
                <td>88</td><td>88</td>
              </tr>
              <tr>
                <td>88</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td><td>88</td>
              </tr>
              <tr className='shade'>

                <td></td>
                <td>Compliance & Reporting Score</td>
                <td>20</td>
                <td></td>
                <td></td><td>88</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-container1"  >
          <h3 style={{ textAlign: 'center' }}>Business Hygine & Demand Quality</h3>

          <table className="custom-table1" style={{ fontSize: '12px', }}>
            <thead>
              <tr>
                <th>weightage</th>
                <th>Parameter</th>
                <th>Description</th>
                <th>Objective(%)</th>
                <th>Month Actual</th>
                <th>YTD(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>88</td>
                <td>Return Ratio</td>
                <td>% of Returns as % of secondary sales (Objective 2%) </td>
                <td>73%</td>
                <td>88</td><td>88</td>
              </tr>
              <tr>
                <td>88</td>
                <td>Outstanding Days</td>
                <td>DSO (days Sales Outstanding) per zone 30</td>
                <td>73%</td>
                <td>88</td><td></td>
              </tr>
              <tr>
                <td>88</td>
                <td>Push-to-Pull Ratio</td>
                <td>% business driven by schemes vs organic sales 30%</td>
                <td>73%</td>
                <td>88</td><td>88</td>
              </tr>
              <tr>
                <td>88</td>
                <td>Closing Stock Index</td>
                <td>*Avg. closing stock in days (should be ≤30days)</td>
                <td>73%</td>
                <td>88</td><td></td>
              </tr>
              <tr>
                <td>88</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td><td></td>
              </tr>
              <tr>
                <td>88</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td><td></td>
              </tr>
              <tr>
                <td>88</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td><td></td>
              </tr><tr>
                <td>88</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td><td></td>
              </tr><tr>
                <td>88</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td><td></td>
              </tr>
              <tr className='shade'>

                <td></td>
                <td>Performance Score</td>
                <td></td>
                <td>20</td>
                <td></td><td>88</td>
              </tr>
            </tbody>
          </table>
        </div></div>)}
    </div>
  )
}
