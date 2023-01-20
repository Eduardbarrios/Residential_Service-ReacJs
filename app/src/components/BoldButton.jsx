import React from 'react';
import '../styles/Components/BoldButton.css'

const BoldButton = ({text}) => {
 return (
  <a href='/' className='bold-button'>{text}</a>
 );
};

export default BoldButton;