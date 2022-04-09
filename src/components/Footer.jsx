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
          <img src={harvard} alt='Harvard University' />
        </figure>
        <figure className='d-flex br-sm'>
          <img src={oxford} alt='University Of Oxford ' />
        </figure>
        <figure className='d-flex img-container br-sm'>
          <img src={stanford} alt='Stanford University' />
        </figure>
        <figure className='d-flex img-container br-sm'>
          <img src={cornell} alt='Cornell University' />
        </figure>
        <figure className='d-flex img-container br-sm'>
          <img src={iitdelhi} alt='IIT Delhi' />
          <p>
            <strong>IIT Delhi</strong>
          </p>
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
