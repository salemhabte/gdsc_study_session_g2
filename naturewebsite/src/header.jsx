
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './nav.css';
const Navigation = () => {
  const navigate = useNavigate();

  

  return (
    <nav className='na'>
        <NavLink exact to="/" className='nav'>
        Home
      </NavLink>
      
      <NavLink to="/gallary" className='nav'>
      Gallary
      </NavLink>
    </nav>
  );
};

export default Navigation;
