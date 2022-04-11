import React from 'react';
import './Footer.css';
import harvard from '../assets/harvard.png';
import oxford from '../assets/oxford.png';
import stanford from '../assets/stanford.png';
import cornell from '../assets/cornell.png';
import iitdelhi from '../assets/iitdelhi.png';

const Footer = () => {
  return (
    <footer>
      <h2 className='heading-secondary footer-heading'>
        Our community comprises graduates from
      </h2>

      <div className='university-box'>
        <figure className='d-flex  br-sm'>
          <img src={harvard} className='img-univ' alt='Harvard University' />
        </figure>
        <figure className='d-flex br-sm'>
          <img src={oxford} className='img-univ' alt='University Of Oxford ' />
        </figure>
        <figure className='d-flex img-container br-sm'>
          <img src={stanford} className='img-univ' alt='Stanford University' />
        </figure>
        <figure className='d-flex img-container br-sm'>
          <img src={cornell} className='img-univ' alt='Cornell University' />
        </figure>
        <figure className='d-flex img-container br-sm'>
          <img
            src={iitdelhi}
            className='img-univ iit-delhi-img'
            alt='IIT Delhi'
          />
          <p className='img-text'>
            <strong>IIT Delhi</strong>
          </p>
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
