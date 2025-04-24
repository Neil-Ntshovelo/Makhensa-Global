import React from 'react'
import logo from '../assets/logo.jpg'

const Logo = () => {
  return (
    <div className='logo h-16 w-20'>
        <img src={logo} alt='logo' className='rounded-2xl ' />
    </div>
  )
}

export default Logo