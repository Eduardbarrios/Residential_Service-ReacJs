import React from "react";
import Team1 from '../assets/Team/Team1.png'
import Team2 from '../assets/Team/Team2.png'
import Team3 from '../assets/Team/Team3.png'

const AppContext = React.createContext();

function AppProvider(props){
 const teamInformation = [
  {
   name: 'Carmen Rios',
   img: Team1,
   description: 'Lorem ipsum dolor sit amet consectetur. Mi nulla a pulvinar sapien tortor et fusce.'
  },
  {
   name: 'Luis Perez',
   img: Team3,
   description: 'Lorem ipsum dolor sit amet consectetur. Mi nulla a pulvinar sapien tortor et fusce.'
  },
  {
   name:'Carlos Rodriguez',
   img: Team2,
   description: 'Lorem ipsum dolor sit amet consectetur. Mi nulla a pulvinar sapien tortor et fusce.'
  },
  {
   name: 'Andrea Bernal',
   img: Team3,
   description: 'Lorem ipsum dolor sit amet consectetur. Mi nulla a pulvinar sapien tortor et fusce.'
  }
];
return (
 <AppContext.Provider value = {{
  teamInformation
 }}>
  {props.children}
 </AppContext.Provider>
)
}

export {AppContext, AppProvider}