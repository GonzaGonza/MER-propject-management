// components/navbar/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import Higher from '../hoc/Higher.js';

const Navbar = (props) => {
  return (
    <nav className="nav-style" style={{ backgroundColor: props.color}}>
      <ul>
        <li>
          <Link to="/projects" id="navbar-links">Projects</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Higher(Navbar);
