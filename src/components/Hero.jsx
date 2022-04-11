import React, { useState } from 'react';
import Navbar from './Navbar';
import Form from './Form/Form';
import './Hero.css';
import dr from '../assets/dr.png';

const Hero = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <section className='hero-section'>
      <Navbar />
      <div className='hero-section-left'>
        <p className='hero-text'>
          Building a<span className='hero-text-em'> community of Doctors</span>{' '}
          for the future
        </p>
        <div className='hero-btn-box'>
          <button
            className='btn btn--full cmt-btn btn-prop'
            onClick={handleModal}
          >
            Join the community
          </button>
          <a className='btn btn--outline explr-btn' href='#!'>
            Explore
          </a>
        </div>
      </div>
      <div className='hero-section-right'>
        <img src={dr} className='dr-img' alt='Doctor' />
      </div>
      <Form open={open} handleModal={handleModal} />
    </section>
  );
};

export default Hero;
