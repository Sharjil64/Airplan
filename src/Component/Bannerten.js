import React from "react";
import "./Bannerten.css";
import mobile2 from './image/font/mobile (2).png'
import enginr from './image/font/enginr.png'
import color from './image/font/color.png';

function Bannerten() {
  return (
    <div className="bannerten">
      <h2>
        Explore Insights In <span>Our Blog</span>
      </h2>
      <p>Find lots of insights and information on our blog. Explore, learn, and get inspired today.</p>
      <div className="blog-container">
        <div className="blog-card">
          <img src={mobile2} alt="Blog 1" />
          <p className="blog-date">19 Jan 2023</p>
          <h3>Understanding Smart Home Systems & Maintenance</h3>
          <p className="blog-description">
            Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post...
          </p>
        </div>
        <div className="blog-card">
          <img src={enginr} alt="Blog 2" />
          <p className="blog-date">19 Jan 2023</p>
          <h3>The Ultimate Guide to Home Repairs and Renovations</h3>
          <p className="blog-description">
            Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post...
          </p>
        </div>
        <div className="blog-card">
          <img src={color} alt="Blog 3" />
          <p className="blog-date">19 Jan 2023</p>
          <h3>Painting Techniques for a Kitchen Refresh</h3>
          <p className="blog-description">
            Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bannerten;
