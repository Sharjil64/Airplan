import React from 'react';
import inst from './image/font/inst.png'
import fb from './image/font/fb.png';
import twi from './image/font/twi.png';
import pin from './image/font/pin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComments,faPhone} from '@fortawesome/free-solid-svg-icons';

import './Topbar.css';

export default function Topbar() {
  return (
    <div className="topbar">
      <ul className="Social-icons">
        <li><img src={inst} /></li>
        <li><img src={fb}  /></li>
        <li><img src={twi} /></li>
        <li><img src={pin} /></li>
        <button>
       <FontAwesomeIcon icon={faComments} /> Live Chat
       </button>
       <button>
       <FontAwesomeIcon icon={faPhone} />Call Now
       </button>
      </ul>
 
    </div>
  );
}

