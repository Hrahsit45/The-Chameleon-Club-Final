import React, { useState } from 'react';
import Img1 from "./img1.png"
import Img3 from "./img3.png"
import Arr from "./arr.png"
import Img2 from "./img2.png"
import logo from "./loogoo.gif"
import "./chatbot.css"
// import Da from "./intents.json"

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const messageInput = event.target.elements.message;
    const message = messageInput.value;

    fetch('http://localhost:5000/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
      .then(response => response.json())
      .then(data => {
        const response = data.response;
        setMessages(prevMessages => [
          ...prevMessages,
          { sender: 'user', content: message },
          { sender: 'bot', content: response }
        ]);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    messageInput.value = '';
  };

  return (
    <div className="body1">
      <div className='cht-bot-hn-txt'>
      
      <div>
      <h1 className="a">Say Hi to Chatsy</h1><br />
      <h2 className="b">Your Ultimate TCC Companion</h2>
      </div><br />


      <div className="c_image-container">
        <img src={Img1} alt="your_image" cl />
      </div>
      </div>
      <img className="c_img" src={logo} alt="Imag1" />
      <img className="c_img2" src={Img2} alt="Imag2" />
      
      <div id="messages">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender}>{msg.content}</p>
        ))}
      </div>
      <div className="b">
        <form id="message-form" onSubmit={handleSubmit}>
          <input type="text" name="message" required className="inputText"/>
          <button type="submit">
            <img src={Arr} alt="Button_Image" className="button-image1" />
          </button>
        </form>
      </div>
      <img className="c_img3" src={Img3} alt="Imag3" />
    </div>
  );
};

export default ChatbotComponent;
