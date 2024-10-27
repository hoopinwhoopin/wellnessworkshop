import React from 'react'
import HeroSection from './Components/HeroSection'
import AboutUsTestimonial from './Components/AboutUsTestimonial'
import Marquee from './Components/Marquee'
import BronzeCourse from './Components/BronzeCourse'
import WhyUs from './Components/WhyUs'
import Packages from './Components/Packages'
import AboutUs2 from './Components/AboutUs2'
import Gallery from './Components/Gallery'
import Testimonials from './Components/Testimonials'
import JoinComment from './Components/JoinComment'
import Newsletter from './Components/newsletter'
import Navigationbar from './Components/Navigationbar'

export default function App() {
  return (
    <div>
      <Newsletter/>
  <Navigationbar/>

        <HeroSection/>
  
  <AboutUsTestimonial/>
  <Marquee/>
  
  <BronzeCourse/>
  <WhyUs  />
  <Marquee/>
  <Packages/>
  <AboutUs2/>
  <Gallery/>
  <Testimonials/>
  <JoinComment/>
    </div>
  )
}
