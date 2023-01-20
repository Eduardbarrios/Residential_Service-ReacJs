import React from 'react';
import Footer_img from '../assets/Footer.svg'
import '../styles/Containers/Footer.css'
const Footer = () => {
 return (
  <section className='footer'>
   <img src={Footer_img} alt="Footer img" />
  </section>
 );
};

export default Footer;