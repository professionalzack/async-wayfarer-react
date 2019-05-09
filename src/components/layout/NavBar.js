import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ currentUser }) => {
  return (
    <nav>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to={`/profile/${currentUser}`}>Profile</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;
