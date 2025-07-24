import React, { useState } from 'react';
import '../styles.css';

export default function Textarea({ onsubmit }) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (onsubmit) {
      onsubmit(text); // Call the parent function with the text
    }
    setText(''); // Optional: clear after submit
  };

  return (
    <div className="textarea-container">
      <select style={{borderRadius:'5px'}}>
        <option></option> <option></option> <option></option>
      </select>
      <textarea
        placeholder="add commitment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="custom-textarea"
      />
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
}
