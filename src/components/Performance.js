import React from 'react'
import Navbar from './Navbar';

export default function Performance() {
  return (
    <div><Navbar/>
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
    <h1 style={{textAlign:'center'}}>Efforts and Effectivenss</h1>
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
        <td>Mkting Impl(No inv>30 Days)</td>
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

</div>
    </div>
  )
}
