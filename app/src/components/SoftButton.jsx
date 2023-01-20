import React from 'react';
import '../styles/Components/SoftButton.css'

const SoftButton = ({text}) => {
 return (
  <a href='/' className='soft-button'>{text}</a>
 );
};

export default SoftButton;