import React, { useState, useEffect, useRef } from 'react';
import Subnavbar from './Subnavbar';
import { useRole } from './RoleContext';
import '../styles.css';

export default function MyChats() {
  const { role, setRole, name, setName } = useRole();
  const [text, setText] = useState('');

  const chatBoxRef = useRef(null); // 👈 Attach this to chat box

 const sendInformation = async () => {
  const payload = {
    sender: localStorage.getItem('user'),
    sender_code: localStorage.getItem('empcode'),
    sender_territory: localStorage.getItem('empterr'),
    receiver: localStorage.getItem('user'),
    receiver_code: 'abc', // placeholder, update as needed
    receiver_territory: localStorage.getItem('empterr'),
    received_date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
    message: text // Assuming you have a state variable 'text' for message content
  };

  try {
    await fetch('http://localhost:8000/putInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    // Show success feedback
    
    setText(''); // Clear message text

   
  } catch (error) {
    console.error('Error sending data:', error);

  }
};

  useEffect(() => {
    // Only scroll the chat box, not the entire page
    const box = chatBoxRef.current;
    if (box) {
      box.scrollTop = box.scrollHeight;
    }
  }, []);

  return (
    <div>
      <div className='table-box'>
        <div className='table-container6'>
          <h2>Information</h2>

          {/* 👇 Scrollable chat box with ref */}
          <div className="chat-box" ref={chatBoxRef}>
            <div className="chat-message received">
              <div className="chat-info">
                <span className="chat-name">Alice</span>
                <span className="chat-time">2025-07-30 10:15 AM</span>
              </div>
              <div className="chat-text">Hi there! How are you?</div>
            </div>

            <div className="chat-message sent">
              <div className="chat-info">
                <span className="chat-name">You</span>
                <span className="chat-time">2025-07-30 10:16 AM</span>
              </div>
              <div className="chat-text">Doing great! What about you?</div>
            </div>

            <div className="chat-message received">
              <div className="chat-info">
                <span className="chat-name">Alice</span>
                <span className="chat-time">2025-07-30 10:18 AM</span>
              </div>
              <div className="chat-text">I’m good too, just working on the project.</div>
            </div>

            <div className="chat-message received">
              <div className="chat-info">
                <span className="chat-name">Alice</span>
                <span className="chat-time">2025-07-30 10:19 AM</span>
              </div>
              <div className="chat-text">Just a reminder for tomorrow's meeting.</div>
            </div>
          </div>

          {/* Input area */}
        {name &&  <div className="message-input-container">
            <input
              type="text"
              placeholder="Type your message..."
              value={text}
              className="message-input"
              onChange={(e) => setText(e.target.value)}
            />
            <button className="send-button" onClick={sendInformation}>Send</button>
          </div>}
        </div>
      </div>
    </div>
  );
}
