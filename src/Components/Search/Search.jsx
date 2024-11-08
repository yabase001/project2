import React from 'react'
import './Search.css'
import church from '../../assets/church.jpg'
import Heading from '../common/Heading'


const Search = () => {
  return (
    <>
    <div >
       <img className='church' src={church} alt="" />
       <div >
       <Heading message="Find an IOWA Church & Event"/>
       <h6>Happeing Right now, Near you</h6>
       </div>
      <div className='search'>
       <div className='input'>
       <input type="text" placeholder='Enter church name' />
        <input type="text" placeholder='Enter the city pincode' />
        <button className='btn'>Searech From Listings</button>
       </div>
      </div>
    </div>
      
    </>
  )
}

export default Search
