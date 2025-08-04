import React, { useState, useEffect, useRef } from 'react';
import Subnavbar from '../Subnavbar';
import { useRole } from '../RoleContext';
import '../../styles.css';

export default function Chats() {
  const { role, setRole, name, setName } = useRole();
  const [text, setText] = useState('');

  const chatBoxRef = useRef(null); // 👈 Attach this to chat box

  const sendMessage = () => {
    setText('');
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
          <h2>Add Information</h2>

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
         <div className="message-input-container">
            <input
              type="text"
              placeholder="Type your message..."
              value={text}
              className="message-input"
              onChange={(e) => setText(e.target.value)}
            />
            <button className="send-button" onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
