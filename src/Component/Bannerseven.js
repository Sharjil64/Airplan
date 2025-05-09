import React from 'react'
import './Bannerseven.css'
import abc from './image/icon/abc.png'
import java from './image/icon/java.png'
import cloud from './image/icon/cloud.png'
import express from './image/icon/express.png'
import figma from './image/icon/figma.png'
import git from './image/icon/git.png'
import home from './image/icon/home.png'
import mongo from './image/icon/mongo.png'
import montor from './image/icon/montor.png'
import next from './image/icon/next.png'
import node from './image/icon/node.png'
import postgre from './image/icon/postgre.png'
import react from './image/icon/cloud.png'
import saas from './image/icon/saas.png'
import story from './image/icon/story.png'
import type from './image/icon/type.png'

export default function Bannerseven() {
  return (
    <div className="container-seven">
      <div className="title">
        <h1>
          The <span>Expertise,</span>
        </h1>
        <h1>Tools, And Technologies</h1>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <img src={java} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="grid-item">
          <img src={abc} alt="TypeScript" />
          <p>TypeScript</p>
        </div>
        <div className="grid-item">
          <img src={cloud} alt="React" />
          <p>React</p>
        </div>
        <div className="grid-item">
          <img src={express} alt="Next.js" />
          <p>Next.js</p>
        </div>
        <div className="grid-item">
          <img src={figma} alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="grid-item">
          <img src={git} alt="Express.js" />
          <p>Express.js</p>
        </div>
        <div className="grid-item">
          <img src={home} alt="Nest.js" />
          <p>Nest.js</p>
        </div>
        <div className="grid-item">
          <img src={mongo} alt="Socket.io" />
          <p>Socket.io</p>
        </div>
        <div className="grid-item">
          <img src={montor} alt="PostgreSQL" />
          <p>PostgreSQL</p>
        </div>
        <div className="grid-item">
          <img src={next} alt="MongoDB" />
          <p>MongoDB</p>
        </div>
        <div className="grid-item">
          <img src={node} alt="Sass/Scss" />
          <p>Sass/Scss</p>
        </div>
        <div className="grid-item">
          <img src={postgre} alt="Tailwind CSS" />
          <p>Tailwind CSS</p>
        </div>
        <div className="grid-item">
          <img src={react} alt="Figma" />
          <p>Figma</p>
        </div>
        <div className="grid-item">
          <img src={saas} alt="Cypress" />
          <p>Cypress</p>
        </div>
        <div className="grid-item">
          <img src={story} alt="Storybook" />
          <p>Storybook</p>
        </div>
        <div className="grid-item">
          <img src={type} alt="Git" />
          <p>Git</p>
        </div>
      </div>
    </div>
  );
}
