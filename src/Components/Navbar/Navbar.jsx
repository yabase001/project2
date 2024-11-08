import React from 'react';
import './Navbar.css'
import icon from '../../assets/icon.svg';
const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='icon'>
             <img src={icon}alt="" />
        </div>
        <div className='link'>
            <a href="">About</a>
            <a href="">Events</a>
            <a href="">Ministries</a>
            <a href="">News</a>
            <button className='contact'>Contacts</button>
        </div>
    </div>
    </>
  )
}

export default Navbar