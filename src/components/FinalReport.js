import React from 'react'
import { useRole } from './RoleContext';
import Navbar from './Navbar';
import ActualCommit from './ActualCommit';
export default function FinalReport() {
const role  = localStorage.getItem('role')
  return (
    <div>
      <Navbar />
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '125px',
              alignItems: 'center',
              height: '80vh',
            }}
          >


            {/* <div className="table-container-commit">
              <h3 style={{ textAlign: 'center' }}>REVIEW OUTCOME DETAILS-COMMITMENT FOR JULY</h3>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>BM Name</th>
                    <th>Secondary Plan</th>
                    <th>No. of Viable Territories</th>
                    <th>No. of RxERS</th>
                    <th>Coverage</th>
                    <th>Compliance</th>
                    <th>Marketing Implementation</th>
                    <th>priority DR Covg-Self</th><th>Priority DR Conversion</th><th>No of W Days VTBM</th><th>RBO Cost</th><th>Receivables</th><th>Returns</th><th>Closing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
                  </tr>
                  <tr>
                    <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>

                  </tr>
                  <tr>
                    <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>

                  </tr>
                  <tr>
                    <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>

                  </tr>
                  <tr>
                    <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>

                  </tr>
                  <tr>
                    <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>

                  </tr>

                </tbody>
              </table>
            </div> */}
              <div className="table-container">
          <h3 style={{ textAlign: 'center' }}>Efficiency Index</h3>

          <table className="custom-table">
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
          <ActualCommit />
        </div>


            </div>) : (
          // <div className="table-container">
          //   <h3 style={{ textAlign: 'center' }}>Final Report</h3>

          //   <table className="custom-table">
          //     <thead>
          //       <tr>
          //         <th>Team BUilding and Development</th>
          //         <th>Performance Metrics</th>
          //         <th>Compliance and Reporting</th>
          //         <th>Business Hygine</th>
          //         <th>Efficiency Index</th>
          //       </tr>
          //     </thead>
          //     <tbody>
          //       <tr>
          //         <td>#REF!</td>  <td>#REF!</td>  <td>#REF!</td>  <td>#REF!</td>  <td>#REF!</td>

          //       </tr>
          //       <tr>
          //         <td>9%</td>  <td>#REF!</td>  <td>#REF!</td>  <td>#REF!</td>  <td>#REF!</td>

          //       </tr>
          //       <tr>
          //         <td>10%</td>  <td>22%</td>  <td>#REF!</td>  <td>#REF!</td>  <td>#REF!</td>

          //       </tr>
          //       <tr>
          //         <td>8%</td>  <td>24%</td>  <td>#REF!</td>  <td>#REF!</td>  <td>#REF!</td>

          //       </tr>
          //     </tbody>
          //   </table>
          //   <ActualCommit /> </div>
               <div className="table-container">
                    <h3 style={{ textAlign: 'center' }}>Efficiency Index</h3>
          
                    <table className="custom-table">
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
                          <td>Team BUilding and Development</td>
                          <td>100%</td>
                          <td>#REF!</td>
                          <td>88</td>
                        </tr>
                        <tr>
                          <td>Bussiness Performance</td>
                          <td>22</td>
                          <td>57%</td>
                          <td>75</td>
                        </tr>
                        <tr>
                          <td>Compliance and Reporting</td>
                          <td>23</td>
                          <td>#REF!</td>
                          <td>92</td>
                        </tr>
                        <tr>
                          <td>Bussiness Hygine and Demand Quality</td>
                          <td>20</td>
                          <td>#REF!</td>
                          <td>81</td>
                        </tr>
                       
                        <tr className='shade'>
                          <td>Efficiency Index</td>
                          <td>24</td>
                          <td>#REF!</td>
                          <td>68</td>
                        </tr>
                      </tbody>
                    </table>
               <ActualCommit/>   </div>
          )}
      </div></div>
  )
}
