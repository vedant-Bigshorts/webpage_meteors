import React from 'react'
import "./intro.css"
import imgintro from "./imgintro.png"
import {Link} from 'react-scroll';

const intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
           <span className="hello">Hello,</span>
           <span className="introtext">This is  <span className="introname">Mumbai Meteors</span><br/>VoLleyball team in the <span className="introname">Pro Volleyblall League.</span></span>
           <p className="para">Mumbai meteors is a volleyball club from <span className='introname'>Mumbai</span> founded in 2022 owned by <span className="introname">Meteor Sports LLC.</span> </p>
            <Link><button className="btn1">READ MORE</button></Link>
           <img src={imgintro} alt="" className='bg1'/>
        </div>
    </section>
  )
}

export default intro
