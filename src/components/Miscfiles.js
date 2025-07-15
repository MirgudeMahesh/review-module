import React from 'react'
import Navbar from './Navbar';
import { useRole } from './RoleContext';

export default function Miscfiles() {
  const { role } = useRole(); // ✅ Get the role value

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '125px',
          gap: '30px',
          height: '80vh',
          width: '100%',
          alignItems: 'flex-start',
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
                <td>{role}</td> {/* ✅ Show role here */}
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
      </div>
    </div>
  )
}
