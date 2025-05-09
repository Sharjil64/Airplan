import './App.css';
import React from 'react';
import Bannerone from './Component/Bannerone';
import Bannertwo from './Component/Bannertwo';
import Herobanner from './Component/Herobanner';
import Navbar from './Component/Navbar';
import Topbar from './Component/Topbar';
import Bannerthree from './Component/Bannerthree';
import Bannerfour from './Component/Bannerfour';
import Bannerfive from './Component/Bannerfive';
import Bannersix from './Component/Bannersix';
import Bannerseven from './Component/Bannerseven';
import Bannereight from './Component/Bannereight';
import Bannernine from './Component/Bannernine';
import Bannerten from './Component/Bannerten';
import Bottombar from './Component/Bottombar';
import Browser from './Component/Browser';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
      <Topbar />
      <Navbar/>
    <Browser/>
      <Herobanner />
      <Bannerone />
      <Bannertwo />
      <Bannerthree />
      <Bannerfour />
      <Bannerfive />
      <Bannersix />
      <Bannerseven />
      <Bannereight />
      <Bannernine />
      <Bannerten />


      <Bottombar />
    
    </div>
  );
}

export default App;