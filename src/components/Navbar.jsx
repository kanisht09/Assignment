import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-links-container'>
        <h2 className='nav-heading'>inspace</h2>
        <div className='nav-links'>
          <a className='link bold-lg' href='#!'>
            About
          </a>
          <a className='link bold-lg' href='#!'>
            Events
          </a>
          <a className='link bold-lg' href='#!'>
            Contact Us
          </a>
        </div>
      </div>
      <div className='login-btn-box'>
        <a className='link nav-cta' href='#!'>
          LOG IN
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
