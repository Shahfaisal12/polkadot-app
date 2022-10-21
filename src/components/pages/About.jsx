import React from 'react'
import AboutCard from '../elements/about/AboutCard'
import Founded from '../elements/about/Founded'
import Hero from '../elements/about/Hero'
import Mission from '../elements/about/Mission'
import WhoBuild from '../elements/about/WhoBuild'
import Blog from '../elements/about/Blog'
import GetInvolve from '../elements/about/GetInvolve'
import Brands from '../elements/about/Brands'
import GetInTouch from '../elements/about/GetInTouch'


const About = () => {
  return (
   <>
    <Hero />
    <Mission />
    <WhoBuild />
    <Founded />
    <AboutCard />
    <Brands />
    <GetInTouch />
    <Blog />
    <GetInvolve />
   </>
  )
}

export default About