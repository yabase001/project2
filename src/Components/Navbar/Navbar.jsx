import React from 'react';
import './Navbar.css'
import icon from '../../assets/icon.svg';
import { IoIosArrowDown } from "react-icons/io";
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
            <a href="" className='down'>Ministries <IoIosArrowDown className='dd' /></a>
            <a href="" className='down'>News<IoIosArrowDown  className='dd'/></a>
            <button className='contact'>Contacts</button>
        </div>
    </div>
    </>
  )
}

export default Navbar