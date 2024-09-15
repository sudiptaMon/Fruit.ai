import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/chatpage.css";

const predefinedQA = {
  "What is Fruit.AI?": "Fruit.AI is an AI-driven chatbot that provides personalized fruit recommendations based on your health needs.",
  "How can Fruit.AI help me?": "We help you discover new fruits, understand their nutritional values, and find the perfect fruit for your diet.",
  "What fruits are good for vitamin C?": "Fruits like oranges, strawberries, and kiwi are rich in vitamin C.",
  "Can I ask for fruit recommendations?": "Yes, you can ask for fruit recommendations based on your dietary needs."
  // Add more question-answer pairs here as needed
};

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you?', type: 'bot', time: '10:30 AM' },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return; // Ignore empty messages
    
    const userMessage = { text: inputMessage, type: 'user', time: new Date().toLocaleTimeString() };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    // Check if the message matches any predefined question
    const botResponse = predefinedQA[inputMessage.trim()];

    if (botResponse) {
      setTimeout(() => {
        const botMessage = { text: botResponse, type: 'bot', time: new Date().toLocaleTimeString() };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }, 1000); 
    } else {
      setTimeout(() => {
        const botMessage = { text: "Sorry, I don't understand the question.", type: 'bot', time: new Date().toLocaleTimeString() };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }, 1000);
    }

    setInputMessage(''); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior (new line)
      handleSendMessage();
    }
  };

  const navigateHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <span className="arrow" onClick={navigateHome}><i className='fas fa-angle-left'></i></span> 
        <img src="avatar.png" alt="User Avatar" className="avatar" />
        <div className="user-info">
          <h3>John Doe</h3>
          <span className="status">Online</span>
        </div>
      </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
            <div className="timestamp">{msg.time}</div>
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message"
        />
        <button onClick={handleSendMessage}>
          send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
