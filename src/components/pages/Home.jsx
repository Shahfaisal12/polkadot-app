import React from 'react'
import Blog from '../elements/Home/Blog'
import Founded from '../elements/Home/Founded'
import GetInvolve from '../elements/Home/GetInvolve'
import Hero from '../elements/Home/Hero'
import Powering from '../elements/Home/Powering'
import Protocol from '../elements/Home/Protocol'
import TrueEconomic from '../elements/Home/TrueEconomic'

const Home = () => {
  return (
    <>
    <Hero />
    <TrueEconomic />
    <Powering />
    <Protocol />
    <Founded />
    <Blog />
    <GetInvolve />
    </>
  )
}

export default Home