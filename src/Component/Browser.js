import React from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Service from './Service'
import Technology from './Technology'
import Contact  from './Contact';
import Quote from './Quote'
import More from './More'


export default function Browser() {
  return (
    <div>
    
    <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get a quote" element={<Quote />} />
              <Route path="/more" element={<More />} />
            </Routes>
      
    
    </div>
  )
}
