import React from 'react'
import Clients from './image/font/Client.png';
import Shif from  './image/font/Shif.png';
import Awards from './image/font/Awards.png';
import Group42 from './image/font/Group 42.png';
import './Bannerone.css';

function Bannerone() {
  return (
    <div className="banner-one">
  <div className='banner-items'>
     <img src={Clients} />
     <h3>1000+</h3>
     <p>happy Clients</p>
     </div>
     <div className='banner-items'>
     <img src={Shif}  />
     <h3>900+</h3>
     <p>Delivered Projects</p>
     </div>
     
     <div className='banner-items'>
     <img src={Awards} />
     <h3>15+</h3>
     <p>Awards</p>
    </div>
    <div className='banner-items'>
     <img src={Group42} />
     <h3>200+</h3>
     <p>Five Star Rating</p>
     </div>

    </div>
  )
}

export default Bannerone
