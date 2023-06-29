import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return <nav>
    <ul className="Nav_Bar">
      <li><Link to="/">Home</Link></li>
    </ul>
  </nav>;
};

export default NavBar;
