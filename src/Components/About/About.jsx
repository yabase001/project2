import React from 'react'
import './About.css'
import fo from '../..//assets/fo.jpg'
import fi from '../..//assets/fi.jpg'


const About = () => {
  return (
    <>
      <div className='about'  style={{display:"flex"}}>
        <div className='about-fr'>
            <h3 style={{color:"#D2153D"}}>ABOUT US</h3>
            <h5 style={{fontSize:"30px"}}>Since 1987 we have been dedicated to serving the US church.</h5>
            <p>I have given them the glory that you gave me, that they may be one as we are one, I in them and you in me, so that they may be brought to complete unity. Then the world will know that you sent me and have loved them even as you have loved me." 
            John 17:22-23</p>
            <button className='learn'>Learn more</button>
        </div>
        <div>
           <img className='fo' style={{height:"400px", width:"250px", objectFit:"cover", borderRadius:"10px", position:"relative", top:"20px"}} src={fo} alt="" />
           
           <img className='fi' style={{height:"400px",  borderRadius:"10px", position:"relative", top:"90px",left:"50px" }} src={fi} alt="" />
        </div>
      </div>
    </>
  )
}

export default About
