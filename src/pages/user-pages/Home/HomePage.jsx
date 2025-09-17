import React from 'react'
import Banner from './Banner'
import IntroSection from './IntroSection'
import FeaturedCar from './FeaturedCar'
import AboutUs from './AboutUs'
import Post from './Post'

const HomePage = () => {
  return (
    <div>
      <Banner />
      <IntroSection/>
      <Post/>
      <FeaturedCar/>
      <AboutUs/>
    </div>
  )
}

export default HomePage
