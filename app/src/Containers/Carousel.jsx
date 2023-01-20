import React from 'react';
import Banner from '../assets/banner.png';
import '../styles/Containers/Carousel.css'

const Carousel = () => {
 return (
  <section className='carousel-content'>
   <img src={Banner} alt="Imagen carousel" />
  </section>
 );
};

export default Carousel;