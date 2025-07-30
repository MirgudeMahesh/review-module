import React, { useState } from 'react';
import '../styles.css';
export default function Textarea({ onsubmit }) {
  const [text, setText] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
 const[warning,setWarning]=useState(false)
const[warntext,setWarntext]=useState('')
  const handleSubmit = () => {
    if (onsubmit) {
      onsubmit({ text, selectedDate,warning,warntext ,setWarning,setWarntext});  // ✅ Pass both values
    }
    setText('');
    setSelectedDate('');
  };

  return (
    <div className="textarea-container">
      <select style={{ borderRadius: '5px' }}>
        <option></option>
        <option></option>
        <option></option>
      </select>
      <textarea
        placeholder="add commitment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="custom-textarea"
      />
      <div style={{display:'flex'}}>
      <label htmlFor="date">DeadLine: </label>
     <input
  type="month"
  id="date"
  value={selectedDate}
  onChange={(e) => setSelectedDate(e.target.value)}
  style={{ marginLeft: '15px',width:'110px' }}
/>
</div>
      

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
