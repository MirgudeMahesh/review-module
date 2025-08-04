import React, { useState } from 'react';
import '../styles.css' // optional if using separate CSS

export default function Escalating() {
  const [text, setText] = useState('');
  const [metric, setMetric] = useState('');
  const [warning, setWarning] = useState(false);
  const [warntext, setWarntext] = useState('');

  const handleSubmit = () => {
    if (text === '') {
      setWarning(true);
      setWarntext('Please add a message');
      setTimeout(() => setWarning(false), 3000);
      return;
    } else if (metric === '') {
      setWarning(true);
      setWarntext('Please select a metric');
      setTimeout(() => setWarning(false), 3000);
      return;
    }

    setWarning(true);
    setWarntext('Message delivered');
    setTimeout(() => setWarning(false), 3000);
    setText('');
    setMetric('');
  };

  return (
    <div className="escalating-container">
      <h3>Escalating</h3>

      <div className="form-group">
        <label htmlFor="metric" >Issue:</label>
        <select
          id="metric"
          value={metric}
          onChange={(e) => setMetric(e.target.value)} 
        >
          <option value="">Select a metric</option>
          <option value="Sales">Performance</option>
          <option value="Revenue">TeamBuild</option>
          <option value="Hygine">Hygine</option>
          <option value="Compliance">Compliance</option>
        </select>
      </div>

      <textarea
        placeholder="Enter your message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="custom-textarea7"
      />

      <button onClick={handleSubmit} className="submit-button7">
        Submit
      </button>

 <div className="warning-container">
  <p
    className="warning-message"
    style={{
      visibility: warning ? 'visible' : 'hidden',
      color: warntext === 'Message delivered' ? 'blue' : 'red',
    }}
  >
    {warntext || 'placeholder'}
  </p>
</div>

    </div>
  );
}
