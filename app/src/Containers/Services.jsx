import React from 'react';
import Bus from '../assets/Elements/busElement.svg'
import Sheet from '../assets/Elements/sheetElement.svg'
import PQR from '../assets/Elements/PQRElement.svg'
import PC from '../assets/Elements/pcElement.svg'
import '../styles/Containers/Services.css'

const Services = () => {
 return (
  <div className='services'>
   <h2 className='title'>Conoce todo lo que puedes hacer</h2>
   <section className='cards-section'>
   <span className="services-cards">
    <img className='element-img' src={Bus} alt="Bus Element" />
    <h3 className='cards-title'>RESERVAS</h3>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto quos ea ipsum officiis assumenda inventore.
    </p>
   </span>
   <span className="services-cards">
    <img className='element-img' src={Sheet} alt="Sheet Element" />
    <h3 className='cards-title'>EVENTOS</h3>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto quos ea ipsum officiis assumenda inventore.
    </p>
   </span>
   <span className="services-cards">
    <img className='element-img' src={PQR} alt="Pqr Element" />
    <h3 className='cards-title'>REALIZAR PQR´S</h3>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto quos ea ipsum officiis assumenda inventore.
    </p>
   </span>
   <span className="services-cards">
    <img className='element-img' src={PC} alt="Ver arriendos" />
    <h3 className='cards-title'>VER ARRIENDOS</h3>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto quos ea ipsum officiis assumenda inventore.
    </p>
   </span> 
   </section>
  </div>
 );
};

export default Services;