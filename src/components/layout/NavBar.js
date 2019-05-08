import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;
