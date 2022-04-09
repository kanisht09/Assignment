import React from 'react';
import Navbar from './Navbar';
import './Hero.css';
import dr from '../assets/dr.png';

const Hero = () => {
  return (
    <section className='hero-section'>
      <Navbar />
      <div className='hero-section-left'>
        <p className='hero-text'>
          Building a<span className='hero-text-em'> community of Doctors</span>{' '}
          for the future
        </p>
        <div className='hero-btn-box'>
          <a className='btn btn--full' href='#!'>
            Join the community
          </a>
          <a className='btn btn--outline' href='#!'>
            Explore
          </a>
        </div>
      </div>
      <div className='hero-section-right'>
        <img src={dr} className='dr-img' alt='Doctor' />
      </div>
    </section>
  );
};

export default Hero;
