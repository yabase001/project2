import React from 'react'
import '../../App.css'

const Heading = ({message}) => {
  return (
    <h1 style={{fontFamily:"Kanit", marginBottom:'0'}} >
      {message}
    </h1>
  )
}

export default Heading
