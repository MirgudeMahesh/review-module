import React, { useState } from 'react';

export default function Filtering() {
  const [text, setText] = useState('');
  const [metric, setMetric] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const[warning,setWarning]=useState(false)
const[warntext,setWarntext]=useState('')

  const handleSubmit = () => {
    // Check if from or to are not integers
    if (isNaN(parseInt(from)) || isNaN(parseInt(to))) {
      setWarning(true);
      setWarntext('Range should be integer')
      setTimeout(() => setWarning(false), 3000); // hide after 3 seconds
      
      return;
    }
    else if(from > to){
 setWarning(true);
      setWarntext('give proper range')
      setTimeout(() => setWarning(false), 3000); // hide after 3 seconds
      
      return;
    }
    else if(text===''){ setWarning(true);
         setWarntext('add text ')
      setTimeout(() => setWarning(false), 3000); // hide after 3 seconds
      
      return;
    }
    else if(metric===''){
        setWarning(true);
         setWarntext('select metric ')
      setTimeout(() => setWarning(false), 3000); // hide after 3 seconds
      
      return;
    }
 
else{ 
    setWarning(true);
    setWarntext('Message delivered')
    setTimeout(() => setWarning(false), 3000); 
    setText('');
    console.log(metric)

    setMetric('');
    setFrom('');
    setTo('');}
  };

  return (
   
    <div className="textarea-container">
         <h3 style={{textAlign:'center'}}>Disclosure</h3>
      <div>
        <label htmlFor="metric">Metric: </label>
        <select
          id="metric"
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
          style={{ borderRadius: '5px',marginLeft:'30px' }}
        >
          <option value="">Select a metric</option>
          <option value="Sales">Performance</option>
          <option value="Revenue">TeamBuild</option>
          <option value="Efficiency">Hygine</option>
          <option value="Efficiency">Compliance</option>
        </select>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
        <p>From:</p>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={{ width: '50px', borderRadius: "5px" ,marginLeft:'20px' ,height:'25px'}}
        />
        <p style={{ marginLeft: "30px" }}>To:</p>
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{ width: '50px', borderRadius: "5px",marginLeft:'20px' ,height:'25px' }}
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
      color: warntext === 'Message delivered' ? 'blue' : 'red',
    }}
  >
    {warntext || 'placeholder'}
  </p>
</div>

    </div>

  );

}
