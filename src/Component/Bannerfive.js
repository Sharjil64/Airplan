import React from 'react';
import './Bannerfive.css';
import MacBook from './image/font/MacBook.png'

export default function Bannerfive() {
  return (
    <div className ="fivr">
      <div className="content">
        <h2 className='title'>HOW WE MAKE IT BETTER</h2>
        <p className='para'>
            Observation of the goal market and designed advertising &<br/>
             marketing approach format in accordance with the requirement.<br/><br/>
            </p>
            <p className='para'>
            Divide the fundamental goal into small goals and comply<br/> with the calendar, thus for intention achievement.<br/><br/>
            </p>
            <p className='para'>
            Analysis of advertising and monitoring in the element for the<br/> ROI, create an income funnel consequently and observe until <br/>achievement.
            </p> 
      </div>
      <div className='pcc'>
       <img src={MacBook}/>
      </div>

      <div className="video-thumbnails">
        <div className="thumbnail">
          <video
            src="https://youtu.be/fHnfaaUPozE?si=sw2oYXHW5f7aAxIS" controls
            alt="Video 1"
          />
        </div>
        <div className="thumbnail">
        <video width="100%" height="auto" controls>
        <source src="https://youtu.be/fHnfaaUPozE?si=sw2oYXHW5f7aAxIS" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        <div className="thumbnail">
          <video
            src="https://www.pinterest.com/pin/590253094949091012/" controls
            alt="Video 3"/>
        </div>
        <div className="thumbnail">
          <video
            src="https://www.pinterest.com/pin/161425967889663896/"  controls
            alt="Video 4"
          />
        </div>
      </div>

    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </div>
  );
}
