import React from 'react';
import logo from '../assets/logo.jpg'; 

const Logo = () => {
  return (
    <div className='logo h-24 w-28'>
      <img src={logo} alt='logo' className='rounded-2xl h-22 w-32' />
    </div>
  );
};

export default Logo;