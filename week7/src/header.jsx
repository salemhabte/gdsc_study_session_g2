
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
      <NavLink to="/ring" className='nav'>
        Ring
      </NavLink>
      <NavLink to="/braslet" className='nav'>
        Braslet
      </NavLink>
      <NavLink to="/earring" className='nav'>
       Earring
      </NavLink>
      <NavLink to="/cart" className='nav'>
       My Cart
      </NavLink>
    </nav>
  );
};

export default Navigation;
