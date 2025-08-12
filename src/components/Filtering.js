import React, { useState } from 'react';

export default function Filtering() {
  const [text, setText] = useState('');
  const [metric, setMetric] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [warning, setWarning] = useState(false);
  const [warntext, setWarntext] = useState('');

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

      const res = await fetch('http://localhost:8000/addEscalation', {
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
          <option value="Compliance">Compliance</option>
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
  );
}
