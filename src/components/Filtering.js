import React, { useState } from 'react';
import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Filtering() {
  const [text, setText] = useState('');
  const [metric, setMetric] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [warning, setWarning] = useState(false);
  const [warntext, setWarntext] = useState('');
    const [results, setResults] = useState([]); // backend response

  const showList=async () => {
      if (metric === '') {
      setWarning(true);
      setWarntext('select metric');
      setTimeout(() => setWarning(false), 3000);
      return;
    } else if (isNaN(parseInt(from)) || isNaN(parseInt(to))) {
      setWarning(true);
      setWarntext('Range should be integer');
      setTimeout(() => setWarning(false), 3000);
      return;
    } else if (parseInt(from) > parseInt(to)) {
      setWarning(true);
      setWarntext('give proper range');
      setTimeout(() => setWarning(false), 3000);
      return;
    }
    try {
      // Use fetch instead of axios
      const response = await fetch("https://review-module-backend-2.onrender.com/filterData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          metric,
          from: parseInt(from),
          to: parseInt(to),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResults(data);

      setWarning(true);
      setWarntext('Data fetched successfully');
      setTimeout(() => setWarning(false), 3000);
    } catch (error) {
      console.error("Error fetching data:", error);
      setWarning(true);
      setWarntext('Error fetching data');
      setTimeout(() => setWarning(false), 3000);
    }
  };

  const handleSubmit = async () => {
    // Validation
    if (metric === '') {
      setWarning(true);
      setWarntext('select metric');
      setTimeout(() => setWarning(false), 3000);
      return;
    } else if (isNaN(parseInt(from)) || isNaN(parseInt(to))) {
      setWarning(true);
      setWarntext('Range should be integer');
      setTimeout(() => setWarning(false), 3000);
      return;
    } else if (parseInt(from) > parseInt(to)) {
      setWarning(true);
      setWarntext('give proper range');
      setTimeout(() => setWarning(false), 3000);
      return;
    } else if (text === '') {
      setWarning(true);
      setWarntext('add text');
      setTimeout(() => setWarning(false), 3000);
      return;
    }

    try {
      // Prepare data for backend
      const payload = {
        metric,
        sender: localStorage.getItem('user'),
        sender_code: localStorage.getItem('empcode'),
        sender_territory: localStorage.getItem('empterr'),
        from: parseInt(from),
        to: parseInt(to),
        received_date: new Date().toISOString().split('T')[0], // today
        goal_date: new Date().toISOString().split('T')[0],     // today
        message: text
      };

      const res = await fetch('https://review-module-backend-2.onrender.com/addEscalation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to send data');

      setWarning(true);
      setWarntext('Message delivered');
      setTimeout(() => setWarning(false), 3000);

      // Reset form
      setText('');
      setMetric('');
      setFrom('');
      setTo('');
    } catch (err) {
      console.error('Error sending message:', err);
      setWarning(true);
      setWarntext('Error delivering message');
      setTimeout(() => setWarning(false), 3000);
    }
  };

  return (
    <div>
    <div className="textarea-container">
      <h3 style={{ textAlign: 'center' }}>Disclosure</h3>
      <div>
        <label htmlFor="metric">Metric: </label>
        <select
          id="metric"
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
          style={{ borderRadius: '5px', marginLeft: '30px' }}
        >
          <option value="">Select a metric</option>
          <option value="Sales">Performance</option>
          <option value="Revenue">TeamBuild</option>
          <option value="Efficiency">Hygine</option>
          <option value="Coverage">Coverage</option>
        </select>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
        <p>From:</p>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={{
            width: '50px',
            borderRadius: '5px',
            marginLeft: '20px',
            height: '25px'
          }}
        />
        <p style={{ marginLeft: '30px' }}>To:</p>
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{
            width: '50px',
            borderRadius: '5px',
            marginLeft: '20px',
            height: '25px'
          }}
        />
      <button
  style={{
    marginLeft: "15px",
    background: "none",
    border: "none",
    color: 'black',   // optional (text/icon color)
    fontSize: "16px",   // adjust size if needed
    cursor: "pointer",
    padding: 0
  }} onClick={showList}> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>

      <textarea
        placeholder="send message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="custom-textarea"
        style={{ marginTop: '10px' }}
      />

      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>

      <div className="warning-container">
        <p
          className="warning-message"
          style={{
            visibility: warning ? 'visible' : 'hidden',
            color: warntext === 'Message delivered' ? 'blue' : 'red'
          }}
        >
          {warntext || 'placeholder'}
        </p>
      </div>
      
    </div>
   {results.length > 0 && (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    }}
  >
    <div
      style={{
        width: "70%",
        maxWidth: "800px",
        maxHeight: "400px",
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "white",
      }}
    >
      <h4 style={{ textAlign: "center", marginBottom: "10px" }}>
        Filtered Results
      </h4>
      <table
        border="1"
        cellPadding="8"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead style={{ backgroundColor: "#f2f2f2", position: "sticky", top: 0 }}>
          <tr>
            <th>Territory</th>
            <th>Emp Code</th>
            <th>Employee Name</th>
            <th>{metric}</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, idx) => (
            <tr key={idx}>
              <td>{row.Territory_Name}</td>
              <td>{row.Emp_Code}</td>
              <td>{row.Employee_Name}</td>
              <td>{row[metric]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}

      </div>
  );
}
