import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Nav = () => {
  return (
    <header className = 'nav-header'>
      <NavLink className = 'nav nav-home' to = '/'>SWAPIBOX</NavLink>
      <div className = 'nav-menu'>
        <p>PEOPLE</p>
        <p>PLANETS</p>
        <p>VEHICLES</p>
      </div>
    </header>
  );
};

export default Nav;