import React from 'react';
import './Bannerthree.css'; 
import rida from './image/font/rida.png';
import shoes from './image/font/shoes.png';
import tracking from './image/font/tracking.png';
import wallet from './image/font/wallet.png';
import entertainment from './image/font/entertainment.png';
import logistica from './image/font/logistica.png'

export default function Bannerthree() {
  const projects = [
    {
      image: rida,
      date: 'May - July 2020',
      
      description: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
    },
    {
      image: shoes,
      date: 'May - July 2021',
      
      description: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
    },
    {
      image: tracking,
      date: 'May - July 2021',
      
      description: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
    },
    {
      image: logistica,
      date: 'May - July 2022',
     
      description: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
    },
    {
      image: entertainment,
      date: 'May - July 2023',
      
      description: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
    },
    {
      image: wallet,
      date: 'May - July 2023',
    
      description: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
    },
  ];

  return (
    <div className="bannerthree">
      <h1 className="banner-title">Project Portfolio</h1>
      <p className="banner-subtitle">
        If you want to discuss your upcoming project with our customer support<br />
        team, call us now. Let's connect and resolve all your queries promptly.
      </p>

      <div className="category-filters">
        {['All', 'Websites', 'Applications', 'Logo Design', 'Branding', 'Video Animation'].map(
          (category, index) => (
            <button key={index} className="filter-button">{category}</button>
          )
        )}
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h5 className="date">{project.date}</h5>
            <h1 className="title">{project.title}</h1>
            <p className="description">{project.description}</p>
          </div>
        ))}
      </div>
      <button className="view-all-button">View All Projects</button>
    </div>
  );
}
