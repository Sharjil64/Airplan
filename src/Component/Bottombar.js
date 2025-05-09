import React from "react";
import "./Bottombar.css";
import wh from './image/font/wh.png'
import fb from './image/font/fb.png'
import yu from  './image/font/yu.png'
import ln from './image/font/ln.png'
import ins from './image/font/ins.png'


export default function Bottombar() {
  return (
    <div className="bottombar">
      <div className="bottombar-logosection">
        <h2 className="logo">Deskwork<br/> Solution</h2>
      </div>
      <div className="bottombar-aboutsection">
        
        <h3 className="botthead">About the company</h3>
        <p>An ultimate platform for all <br/>
          your business ideas and<br/>
           growth. We believes in high <br/>
           quality work therefore we<br/>
            provide 24/7 support <br/>
            throughout to our global <br/>
            customers.</p>

      </div>
      <div class="footer-section links-section">
        <h3>Get Started</h3>
          <p><a href="#">Home</a></p>
          <p><a href="#">About us</a></p>
          <p><a href="#">Technologies</a></p>
          <p><a href="#">Portfolio</a></p>
          <p><a href="#">Industries</a></p>
          <p><a href="#">Contact us</a></p>
          <p><a href="#">Home</a></p>
          <p><a href="#">Get a Quote</a></p>
      </div>
      <div class="footer-section services-section">
        <h3>Services</h3>
        
          <p>Website Development</p>
          <p>Mobile Application</p>
          <p>Graphics Designing</p>
          <p>Video Animation</p>
          <p>Digital Marketing</p>
          <p>Content Writing</p>
          <p>Domain And Hosting</p>
          <p>Support</p>
       
      </div>
      <div class="footer-section contact-section">
        <h3>Contact</h3>
        <p ><a href="https://web.whatsapp.com/"><img className="w" src={wh}/>+1234529-3853</a></p>
        <p><a href="https://www.facebook.com/"><img src={fb}/>Facebook</a></p>
        <p><a href="https://x.com/?lang=en"><img src={yu}/>Youtube</a></p>
        <p><a href="https://pk.linkedin.com/"><img src={ln}/>LinkedIn</a></p>
        <p><a href="https://www.instagram.com/"><img src={ins}/>Instagram</a></p>
        
      </div>
    </div>
  );
}

