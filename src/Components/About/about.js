import React from 'react'
import "./about.css"
import {Link} from 'react-scroll';
import imgabout from "./imgabout.png"

const about = () => {
  return (
    <section id="about">
        <div className='center'>
            <span className='aboutheading'>ABOUT<span className='aboutheadname1'> US</span></span><br/>
            <span className='aboutheadname'>MUMBAI METEORS</span>
          <div className='img'>
            <img src={imgabout} alt="" className='aboutbg'/>
          </div> 
        </div>
        <div className='aboutContent'>
           <span className="abouttext">The  <span className="aboutname">Mumbai Meteors</span>are a force to be reckoned with in the exciting world of Indian volleyball. Established in 2022, this young and dynamic team has quickly made a name for itself in the prestigious  <span className="aboutname">RuPay Prime Volleyball League (PVL).</span></span>
           <Link><button className="aboutbtn">READ MORE</button></Link>
           
        </div>
    </section>
  )
}

export default about