import React from 'react';
import logo from "./image/logo.png"
import './Navbar.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><img src={logo} /></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/technology">Technologies</NavLink></li>
        <li><NavLink to="/contact">Contact us</NavLink></li>
        <li><NavLink to="/get">Get a Quote</NavLink></li>
        <li><NavLink to="/more">More</NavLink></li>
        <li>
          <input type="Text" placeholder="Search" />
          <span className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
