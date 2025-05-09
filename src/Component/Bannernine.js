import React from 'react';
import './Bannernine.css';
import button1 from './image/font/button1.png';
import button2 from './image/font/button2.png';
import man6 from "../Component/image/font/man6.jpg"
import playstore from './image/font/playstore.png';
import googleplay from './image/font/googleplay.png';

export default function Bannernine() {
  return (
    <div className='mainnine'>
    <div className="bannernine-container">
      <button className="nav-button-left">
        <img src={button1} alt="Previous" />
      </button>


      <div className="contentnine">
        <div className="image-wrapper">
          <img src={man6} alt="Testimonial" />
         
        </div>

        <div className="detailsnine">
      <h1 className='head1'>Testimonials That</h1>
             <h1 className='head2'> Speak To Our Results</h1>
        <p className='par'>Project  Name: Ezee Solution</p>
          <p>Provide: Website & Application</p>
          <div className="action-buttons">
            <button className="visit-button">Visit The Website →</button>
            <div className="store-buttons">
              <img className="btn1" src={playstore} alt="Google Play" />
              <img src={googleplay} alt="App Store" />
            </div>
          </div>
        </div>
</div>


      <button className="nav-button-right">
        <img src={button2} alt="Next" />
      </button>
    </div>
    </div>
  );
}
