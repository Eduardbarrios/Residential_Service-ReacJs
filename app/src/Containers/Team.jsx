import React from 'react';
import TeamItem from '../components/TeamItem';
import { AppContext } from '../Context/AppContext';
import '../styles/Containers/Team.css'

const Team = () => {
 const {teamInformation} = React.useContext(AppContext);
 // const teamImg=[Team1, Team2, Team3]
 return (
  <section className='team-section'>
   <h2 className='team-title'>Equipo administrativo</h2>
   <p className='description'>Conoce a todo el equipo administrativo de Flamengo y mantente enterado de todo lo que ocurre en el conjunto.</p>
   <a href="/" className='ver-todo'>Ver todo</a>
   <div className='cards-section'>
    {teamInformation.map(Information => (<TeamItem Information ={Information} key ={Information.name}/>))}
   </div>
   </section>
 );
};

export default Team;