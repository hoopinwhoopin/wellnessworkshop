import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HeroSection from './Components/HeroSection';
import AboutUsTestimonial from './Components/AboutUsTestimonial';
import Marquee from './Components/Marquee';
import Navbar from './Components/Navbar';
import AboutUs2 from './Components/AboutUs2';
import BronzeCourse from './Components/BronzeCourse';
import Gallery from './Components/Gallery';
import WhyUs from './Components/WhyUs';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import JoinComment from './Components/JoinComment';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar/>
  <HeroSection/>
  
  <AboutUsTestimonial/>
  <Marquee/>
  
  <BronzeCourse/>
  <WhyUs  />
  <Marquee/>
  <AboutUs2/>
  <Gallery/>
  <Testimonials/>
  <JoinComment/>
  <Footer/>
  </React.StrictMode>,
)
