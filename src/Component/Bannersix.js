import React from 'react';
import shuff from './image/font/shuff.png'; // Replace with the rocket image path
import animi from './image/font/animi.png'; // Replace with the character image path
import './Bannersix.css'; // CSS file for styling

export default function Bannersix() {
  return (
    <div className="banner-container">
      <div className="left-section">
        <img src={shuff} alt="Creative Idea Rocket" className="rocket-image" />
      </div>

    
      <div className="middle-section">
        <h1 className="banner-heading">Let’s Build</h1>
        <h1 className="banner-heading">Something Great</h1>
        <h1 className="banner-heading">Together</h1>
        <button className="contact-button">Contact Us</button>
      </div>

      <div className="right-section">
        <img src={animi} alt="Character with Laptop" className="character-image" />
      </div>
    </div>
  );
}
