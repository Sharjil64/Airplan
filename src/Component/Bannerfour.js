import React from 'react';
import './Bannerfour.css';
import Ecommerce from './image/font/Ecommerce.png'
import Education from './image/font/Education.png'
import Banking from './image/font/Banking.png'
import health from './image/font/Health.png'
import Manufacturing from './image/font/Manufacturing.png'
import logistic from './image/font/logistic.png'

export default function Bannerfour() {
  return (
    <div className="industrial">
      <h1 className="indus-h1">INDUSTRIES WE WORK IN</h1>
      <p className="indus-p">We significantly influence the daily operations of various industries.</p>
      <div className="industries">
        <div className="industry">
        <img src={Ecommerce}/> <br/>
       <p className='name'>E-commerce & Retail</p>
           </div>
        <div className="industry">
          <img src={logistic}/>
          <p className='name'> Logistics & Warehousing</p>
        </div>
        <div className="industry">
        <img src={Banking}/>
        <p className='name'>Banking & Finance</p>
        
        </div>
        <div className="industry">
        <img src={health}/>
        <p className='name'>Healthcare & Technology</p>
        
        </div>
        <div className="industry">
        <img src={Manufacturing}/>
        <p className='name'>Manufacturing & Production</p>
        
        </div>
        <div className="industry">
        <img src={Education}/>
        <p className='name'><br/>Education & Learning</p>
       
        </div>
      </div>
    </div>
  );
}
