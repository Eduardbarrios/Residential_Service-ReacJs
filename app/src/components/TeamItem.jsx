import React from 'react';

const TeamItem = ({Information}) => {
 return (
  <React.Fragment>
    <span className='card-team'>
     <img className='team-img' src={Information.img} alt={Information.name} />
     <h3 className='member-name'>{Information.name}</h3>
     <p className='team-description'>{Information.description}</p>
    </span>
  </React.Fragment>
 );
};

export default TeamItem;