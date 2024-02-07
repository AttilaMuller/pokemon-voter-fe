import React from 'react';
import logo from '../../images/logo.png';
import './NavBar.scss';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="logo" />
      <div className="navbar-options">
        <div className='navbar-options-item'>
          <Link to="/">Voting</Link>
        </div>
        <div className='navbar-options-item'>
          <Link to="/top-ten">Top 10</Link>
        </div>
      </div>
    </div>
  )
}