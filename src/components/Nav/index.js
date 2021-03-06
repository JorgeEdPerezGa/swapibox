import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const Nav = ({ count }) => {
  return (
    <header className = 'nav-header'>
      <NavLink className = 'nav nav-home' to = '/'>SWAPIBOX</NavLink>
      <div className = 'nav-menu'>
        <NavLink className = 'nav' to = '/people'>PEOPLE</NavLink>
        <NavLink className = 'nav' to = '/planets'>PLANETS</NavLink>
        <NavLink className = 'nav' to = '/vehicles'>VEHICLES</NavLink>
        <p className = 'count'>{ count }</p>
        <NavLink className = 'nav favorite-nav' to = '/favorites'>FAVORITES</NavLink>
      </div>
    </header>
  );
};

Nav.propTypes = {
  count: PropTypes.number
};

export default Nav;
