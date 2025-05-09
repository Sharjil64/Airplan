import React from 'react'
import button1 from './image/font/button1.png';
import button2 from './image/font/button2.png';
import com from './image/font/com.png';
import mobile from './image/font/mobile.png';
import graphic from './image/font/mobile.png'
import car from './image/font/car.png'
import './Bannertwo.css';

function Bannertwo() {
  return (
<div className="bannertwo">
  <div className="container-one">
                <h1>We Provide </h1>
                <h1>Awesome  </h1>
                <h1 className='head'>Technologies  </h1>
                <p>
                We re skilled in both design <br/>
                and development, allowing <br/>
                us to create complex and<br/>
                customized web solutions<br/>
                for you.
                </p>
                <button>
                  <img src={button1} />
                </button>
                <button>
                  <img src={button2} />
                </button>
          <div className="container-onebyone">
            
          </div>
          <div className='container-two'>
        <div className="card active">
          <div className="icon">
            <img src={com} alt="Website Icon" />
          </div>
          <h3>Website Development</h3>
        </div>
        <div className="card">
          <div className="icon">
            <img src={mobile} alt="Mobile Icon" />
          </div>
          <div className='h3'>
          <h3>Mobile</h3>
          <h3>Development</h3>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={graphic} alt="Graphic Icon" />
          </div>
          <h3>Graphic</h3>
          <h3>Designing</h3>
        </div>
  </div>
        <div className='container-three'>
          <img src={car}/>
        </div>


  </div>








</div>
    
  )
}

export default Bannertwo
