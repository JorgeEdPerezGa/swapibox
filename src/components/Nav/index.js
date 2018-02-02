import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Nav = () => {
  return (
    <header className = 'nav-header'>
      <NavLink className = 'nav nav-home' to = '/'>SWAPIBOX</NavLink>
      <div className = 'nav-menu'>
        <NavLink className = 'nav' to = '/people'>PEOPLE</NavLink>
        <NavLink className = 'nav' to = '/planets'>PLANETS</NavLink>
        <NavLink className = 'nav' to = '/vehicles'>VEHICLES</NavLink>
        <NavLink className = 'nav' to = '/favorites'>FAVORITES</NavLink>
      </div>
    </header>
  );
};

export default Nav;
