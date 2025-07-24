import React from 'react'

import Navbar from './Navbar';

import ActualCommit from './ActualCommit';
import Textarea from './Textarea';
 import { useRole } from './RoleContext';
import Subnavbar from './Subnavbar';
export default function FinalReport() {

   const { role,setRole,name, setName } = useRole();
   
//   const role = localStorage.getItem('role')
// const name = localStorage.getItem('name')

  const handleSubmit = (text) => {
    console.log("ABC Submitted:", text);

  };

  return (
    <div>
      {/* <Navbar />
      {name && <Subnavbar/>} */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        marginTop: '225px',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        {/* {role === 'be' && (
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
              <h3 style={{ textAlign: 'center' }}>Efficiency Index </h3>

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

          </div>

        )} */}
        {role === 'be' && (
  <div className="table-container">
    <h3 style={{ textAlign: 'center' }}>Efficiency Index</h3>

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

        <tr className="shade">
          <td>Efficiency Index</td>
          <td>24</td>
          <td>#REF!</td>
          <td>68</td>
        </tr>
      </tbody>
    </table>

 { name && < Textarea onsubmit={handleSubmit}/>}  </div>
)}

        {/* {role === 'bm' && (
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
              <h3 style={{ textAlign: 'center' }}>Efficiency Index</h3>

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
                { name ? (< Textarea onsubmit={handleSubmit}/>):( <ActualCommit/>)}

            </div>
      

          </div>

        )} */}
        {role === 'bm' && (
  <div className="table-container">
    <h3 style={{ textAlign: 'center' }}>Efficiency Index</h3>

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

        <tr className="shade">
          <td>Efficiency Index</td>
          <td>24</td>
          <td>#REF!</td>
          <td>68</td>
        </tr>
      </tbody>
    </table>

 { name && < Textarea onsubmit={handleSubmit}/>}  </div>
)}

        {role === 'bl' && (
            
          <div className="table-container">
            <h3 style={{ textAlign: 'center' }}>Efficiency Index</h3>

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
            {/* <ActualCommit/> */}
          
   { name && < Textarea onsubmit={handleSubmit}/>}

          </div>

        )}


      </div>
    
    {/* {role && name === '' && <ActualCommit />} */}
    </div>
  )
}
