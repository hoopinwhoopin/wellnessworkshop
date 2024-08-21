import React from 'react'
import CourseHero from './Components/CourseHero'
import Marquee from './Components/Marquee'
import Testimonials from './Components/Testimonials'
import JoinComment from './Components/JoinComment'
import PriceCategory from './Components/PriceCategory'

export default function Courses() {
  return (
    <div className='overscroll-none'>
        <CourseHero/>
        <PriceCategory/>
        <Marquee page='courses'/>
        <Testimonials  page='courses'/>
        <JoinComment page='courses'/>
    </div>
  )
}
