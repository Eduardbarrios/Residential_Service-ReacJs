import React from 'react';
import SofButton from '../components/SoftButton'
import BoldButton from '../components/BoldButton'
import '../styles/Containers/Header.css'
import Logo from '../assets/navbar-brand.svg'
import MenuBar from '../assets/icon/Menubar.svg'

const Header = () => {
 return (
  <header className='header'>
   <img className='logo-img' src={Logo} alt='Main Logo Flamengo'/>
   <section className='pages-buttons'>
    <a href="/" className="pages-swicht">Inicio</a>
    <a href="/" className="pages-swicht">Servicios</a>
    <a href="/" className="pages-swicht">Equipo</a>
    <a href="/" className="pages-swicht">Arriendos</a>
    <a href="/" className="pages-swicht">Contactos</a>
   </section>
   <section className='navbar-right'>
    <SofButton text={'Iniciar sesión'}/>
    <BoldButton text={'Registrarme'}/>
   </section>
   <img className='menu-mobile' src={MenuBar} alt="MenuMobile"/>
  </header>
 );
};

export default Header;