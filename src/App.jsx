import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Popular from './Components/Popular/Popular'
import fi from './assets/fr.jpg'
import './App.css'
import Heading from './Components/common/Heading'
import sec from './assets/sec.jpg'
import thr from './assets/thr.jpg'
import hand1 from './assets/hand1.png.jpg'
import black2 from './assets/black2.png'
import jesus3 from './assets/jesus3.png'
import h4 from './assets/h4.png'
import h5 from './assets/h5.png'
import h6 from './assets/h6.png'
import About from './Components/About/About'
import Upcomeing from './Components/Upcomeing/Upcomeing'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    
    <>
     <Navbar/>
     <Search/>
     <div className='popular-con' >
      <Heading message='Popular Listing'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className='popular-cart'>
    <Popular img={fi} title='St. Luke United Methodist Church' location='2 of 14 things to do in Dyersville'/>
     <Popular img={sec} title='St. Frnacis Basilica' location='2 of 14 things to do in Dyersville'/>
     <Popular img={thr} title='Community Alliance Church' location='2 of 14 things to do in Dyersville'/>
    </div>
     </div>
     <About/>
     <div style={{display:'flex', flexDirection:'column', alignItems:'center', rowGap:'70px'}}>
      <Heading message='Upcoming Event & Ministres'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     </div>
     <div  >
     <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr",rowGap:"10px", marginLeft:'250px',marginRight:'100px' }}>
     <Upcomeing img={hand1} title='St. Luke United Church' con='This unique weekend getaway is for 3rd-5th graders and gives them the opportunity to..' date='20 Nov 2020'/>
     <Upcomeing img={black2} title='St. Frnacis Basilica' con='This unique weekend getaway is for 3rd-5th graders and gives them the opportunity to..' date='20 Nov 2020'/>
     <Upcomeing img={jesus3} title='Community Alliance Church'con='This unique weekend getaway is for 3rd-5th graders and gives them the opportunity to..' date='20 Nov 2020'/>
     <Upcomeing img={h4} title='St. Luke United Church'con='This unique weekend getaway is for 3rd-5th graders and gives them the opportunity to..' date='20 Nov 2020'/>
     <Upcomeing img={h5} title='St. Frnacis Basilica'con='This unique weekend getaway is for 3rd-5th graders and gives them the opportunity to..' date='20 Nov 2020'/>
     <Upcomeing img={h6} title='Community Alliance Church'con='This unique weekend getaway is for 3rd-5th graders and gives them the opportunity to..' date='20 Nov 2020'/>
     </div>
     </div>
     <Footer/>
    </>
  )
}

export default App
