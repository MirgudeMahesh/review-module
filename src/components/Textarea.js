import React, { useState } from 'react';
import '../styles.css';
export default function Textarea() {
  const [text, setText] = useState(''); const [target, setTarget] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
 const[warning,setWarning]=useState(false)
const[warntext,setWarntext]=useState('')
const [metric, setMetric] = useState('');
  // const handleSubmit = () => {
  //   if (onsubmit) {
  //     onsubmit({ text, selectedDate,warning,warntext ,setWarning,setWarntext,target,setTarget});  // ✅ Pass both values
  //   }
  //   setText('');
  //   setSelectedDate('');
  // };
 
 const handleSubmit = () => {
    if(metric === '') {
      setWarning(true);
      setWarntext('Please select a metric');
      setTimeout(() => setWarning(false), 3000); // hide after 3 seconds
      return;
    }
  else if(text===''){ setWarning(true);
         setWarntext('add text ')
      setTimeout(() => setWarning(false), 3000); // hide after 3 seconds
      
      return;
    }
      else if (new Date(selectedDate) <= new Date() || selectedDate === '') {
    setWarning(true);
    setWarntext('Date should be in the future');
    setTimeout(() => setWarning(false), 3000);
    return;
  }
     else if (isNaN(parseInt(target)) ) {
      setWarning(true);
      setWarntext('target should be integer')
      setTimeout(() => setWarning(false), 3000); // hide after 3 seconds
      
      return;
    }
  
    else{
      setWarning(true);
    setWarntext('Message delivered');
        setTimeout(() => setWarning(false), 3000);

      setTarget('');
      setSelectedDate('');
      setText('');
setMetric('');
return;
    }

 
};
  return (
 
    <div className="escalating-container">
      <h3>Commitment<br/>_____________________________________________</h3>

      <div className="form-group">
        <label htmlFor="metric" >Metric:</label>
        <select
          id="metric"
          value={metric}
          onChange={(e) => setMetric(e.target.value)} 
        >
          <option value="">Select a metric</option>
           <option value="Efficiency">Efficiency</option>
          <option value="Performance">Performance</option>
          <option value="TeamBuild">TeamBuild</option>
          <option value="Hygine">Hygine</option>
          <option value="Compliance">Compliance</option>
        </select>
      </div>

      <textarea
        placeholder="add commitment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="custom-textarea"
      />

     
<div style={{
  display: 'flex',
  alignItems: 'center',
 
  flexWrap: 'wrap',

}}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' ,marginTop:'-10px'}}>
    <label htmlFor="date" style={{ fontWeight: '500' }}>Deadline:</label>
    <input
      type="month"
      id="date"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      style={{
        padding: '6px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        width: '70%',
        fontSize: '14px',
      }}
    />
  </div>

  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' ,marginTop:'-10px'}}>
    <label htmlFor="target" style={{ fontWeight: '500' }}>Target:</label>
    <input
      id="target"
      placeholder="target..."
      value={target}
      onChange={(e) => setTarget(e.target.value)}
      style={{
        padding: '6px 10px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        width: '120px',
        fontSize: '14px',
      }}
    />
  </div>
</div>
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
