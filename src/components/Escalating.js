import React, { useState } from 'react';

export default function Escalating() {
  const [text, setText] = useState('');
   const [metric, setMetric] = useState('');
  const[warning,setWarning]=useState(false)
const[warntext,setWarntext]=useState('')

  const handleSubmit = () => {
  
  
     if(text===''){ setWarning(true);
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
  }
  };

  return (
    <div className="textarea-container">
         <h3 style={{textAlign:'center'}}>Escalating</h3>
      <div>
        <label htmlFor="metric">Issue: </label>
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  {warning && (
    <p style={{ color: warntext === 'Message delivered' ? 'blue' : 'red' }}>
      {warntext}
    </p>
  )}
</div>

    </div>
  );
}
