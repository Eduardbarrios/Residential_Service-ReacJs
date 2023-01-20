import React from 'react';
import Carousel from '../Containers/Carousel';
import Contact from '../Containers/Contact';
import Footer from '../Containers/Footer';
import Header from '../Containers/Header';
import Services from '../Containers/Services';
import Team from '../Containers/Team';
import { AppProvider } from '../Context/AppContext';
import '../styles/App.css';

function App() {
  return (
    <AppProvider>
      <React.Fragment>
        <Header/>
        <Carousel/>
        <Services/>
        <Team/>
        <Contact/>
        <Footer/>
    </React.Fragment>
    </AppProvider>
  );
}

export default App;
