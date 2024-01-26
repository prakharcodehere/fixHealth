import React from 'react'
import DoctorImg from "../../Assets/doctor-with-form.png";
import sytles from "./Hero.module.css"
import bannerImg from "../../Assets/ladyDoctor.jpg"


const Hero = () => {
  return (
    <div className={sytles.heroWrapper} id='hero'>

<img src={bannerImg} alt="banner" className={sytles.bannerImg} loading="eager" />
     
   <div className={sytles.textWrapper}>
    <h3 className={sytles.heroHeading}>Your journey to better health <br/>
        <span className={sytles.startDecor}>STARTS </span>here.</h3>
   </div>

 



    </div>

    
  )
}

export default Hero
