import React from 'react'
import './Footer.css'
import icon from '../../assets/white.svg'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div style={{marginTop:'20px', display:'flex', flexDirection:'row'}}>
        <div  style={{height:'300px', width:'529px',backgroundColor:'#D2153D',}} >
            <div style={{marginLeft:'30px', paddingTop:'30px'}}>
               <img src={icon} alt="" />
               <div style={{marginTop:'40px'}}>
                <p style={{color:'white', fontSize:'13px', }}>CALL US TODAY <h3 style={{fontSize:'30px', color:'white', margin:'0'}}>+1 333 638 568</h3></p>
               
               </div>
               <div>
               <div style={{display:'flex', columnGap:'10px'}}>
                <span style={{display:'flex', alignItems:'center' ,justifyContent:'center',height:'25px' ,width:'25px',marginTop:'20px' ,backgroundColor:'white' ,borderRadius:'30px'}}><FaTwitter color='#00215B' /></span>
                <span style={{display:'flex', alignItems:'center' ,justifyContent:'center',height:'25px' ,width:'25px',marginTop:'20px' ,backgroundColor:'white' ,borderRadius:'30px'}}><FaFacebookF color='#00215B' /></span>
                <span style={{display:'flex', alignItems:'center' ,justifyContent:'center',height:'25px' ,width:'25px',marginTop:'20px' ,backgroundColor:'white' ,borderRadius:'30px'}}><FaLinkedinIn color='#00215B' /></span>
                <span style={{display:'flex', alignItems:'center' ,justifyContent:'center',height:'25px' ,width:'25px',marginTop:'20px' ,backgroundColor:'white' ,borderRadius:'30px'}}><FaYoutube color='#00215B' /></span>
               </div>
               </div>
               <div style={{color:'white', marginTop:'20px'}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </div>
            </div>
        </div>
        <div style={{backgroundColor:'#00215B', height:'300px', width:'800px'}}>
          <div>
            <div style={{display:'flex', flexDirection:'row',columnGap:'40px', justifyContent:'space-evenly', }}>
              <div>
                <h2 style={{color:'white'}}>Quick Links</h2>
                <p style={{color:'white'}}>About Us</p>
                <p style={{color:'white'}}>Our Serives</p>
                <p style={{color:'white'}}>Events & Ministries</p>
                <p style={{color:'white'}}>Contacts</p>
              </div>
              <div>
              <h2 style={{color:'white', fontfamily:"Lato"}}>More</h2>
                <p style={{color:'white'}}>Careers</p>
                <p style={{color:'white'}}>Our Process</p>
                <p style={{color:'white'}}>FAQs</p>
                <p style={{color:'white',fontfamily:"Lato",}}>Our Blog</p>
              </div>
              <div style={{width:'250px'}}>
                <h2 style={{color:'white'}}>Our News</h2>
                <a style={{color:'white', fontSize:'20px'}} href="http://" target="_blank" rel="noopener noreferrer">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
                <p style={{color:'white', marginTop:'0', fontSize:'13px'}}>20 Nov 2020  by IOWA</p>
                <h3 style={{color:'white', marginBottom:'0'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                <p style={{color:'white',marginTop:'0', fontSize:'13px'}}>20 Nov 2020  by IOWA</p>

              </div>
            </div>
            <div >
              <p style={{marginLeft:'230px', color:'white'}}>Copyright © IOWA All rights reserved Copyrights 2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
