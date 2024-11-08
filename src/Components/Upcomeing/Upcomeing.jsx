import React from 'react'

const Upcomeing = ({img,title,date,con}) => {
  return (
    <div style={{height:'360px', width:'240px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',borderRadius:'10px 10px 4px 4px' ,overflow:'hidden'}}>
     <div style={{display:'flex', alignItems:'center', justifyContent:'center', objectFit:'cover' }}> 
      <img style={{height:'200px',objectFit:'fit' }} src={img} alt="" /></div>
     <div style={{paddingLeft:'10px', paddingRight:'10px' }}>
     <p>{title}</p>
     <p>{con}</p>
   <p style={{color:'#D2153D', textAlign:'end'}}>{date}</p>
     </div>
      
    </div>
  )
}

export default Upcomeing
