import React from 'react'
import './Popular.css'
import Pin from '../common/Pin'

const Popular = ({img,title,location}) => {
  return (
    <div style={{boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
      <img className='popimg' src={img} alt="" />
     <div style={{paddingLeft:'20px', paddingRight:'20px'}}>
       <p>{title}</p>
      <div style={{display:"flex", alignItems:"center"}}>
        <Pin/>
      <p>{location}</p>
     </div>
      </div>
      
    </div>
    
  )
}

export default Popular
