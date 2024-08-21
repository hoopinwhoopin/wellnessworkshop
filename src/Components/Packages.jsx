import React, { useState,useEffect } from 'react'
import workout from '../assets/Workout.svg'
import PackageCard from './PackageCard'
import guideimg from '../assets/guide.svg'



export default function Packages() {
  let CardData = [
    {
      type: 'STRENGTH',
      guide: 'Kelvin',
      guideimg: guideimg,
      level: 'EXPERT',
      weeks: '12 WEEKS',
      image: workout,
      title: 'Online',
      desc: 'Lorem ipsum dolor sit amet consectetur. Erat praesent sollicitudin odio ullamcorper. A mattis dictumst id volutpat fringilla vulputate. Aenean ultrices neque risus nunc accumsan dolor sit aliquam dui. Donec diam arcu orci in lectus ligula urna nisl massa.'
    },
    {
      type: 'STRENGTH',
      guide: 'Kelvin',
      guideimg: guideimg,
      level: 'EXPERT',
      weeks: '12 WEEKS',
      image: workout,
      title: 'Offline',
      desc: 'Lorem ipsum dolor sit amet consectetur. Erat praesent sollicitudin odio ullamcorper. A mattis dictumst id volutpat fringilla vulputate. Aenean ultrices neque risus nunc accumsan dolor sit aliquam dui. Donec diam arcu orci in lectus ligula urna nisl massa.'
    },
    {
      type: 'STRENGTH',
      guide: 'Kelvin',
      guideimg: guideimg,
      level: 'EXPERT',
      weeks: '12 WEEKS',
      image: workout,
      title: 'Consultancy',
      desc: 'Lorem ipsum dolor sit amet consectetur. Erat praesent sollicitudin odio ullamcorper. A mattis dictumst id volutpat fringilla vulputate. Aenean ultrices neque risus nunc accumsan dolor sit aliquam dui. Donec diam arcu orci in lectus ligula urna nisl massa.'
    },
    {
      type: 'STRENGTH',
      guide: 'Kelvin',
      guideimg: guideimg,
      level: 'EXPERT',
      weeks: '12 WEEKS',
      image: workout,
      title: '1-1 Training',
      desc: 'Lorem ipsum dolor sit amet consectetur. Erat praesent sollicitudin odio ullamcorper. A mattis dictumst id volutpat fringilla vulputate. Aenean ultrices neque risus nunc accumsan dolor sit aliquam dui. Donec diam arcu orci in lectus ligula urna nisl massa.'
    },
   ] 
   const [scrollp,setScrollp]=useState()
   let bar = document.getElementById('scrollp')
  //  bar?.addEventListener('scroll',scroll)
  //   bar?.addEventListener('touchmove',scroll)


      useEffect(() => {
        
  function scroll(){
    let scroll = bar.scrollLeft
    let width = bar.scrollWidth
    let view = bar.clientWidth
    let scrollpercent = (scroll/(width-view))
    setScrollp((scrollpercent-scrollpercent/5)*100+'%')
   }   
          bar?.addEventListener('scroll',scroll)
          bar?.addEventListener('touchmove',scroll)
        
      }, [])
    
    
   return (
    <div className='bg-white'>

    <div className='radialbg py-14 pl-[4%]  lg:py-20 '>
        <div className="flex mb-14  lg:mb-20  flex-col items-center">
            <h2 className='whitespace-break-spaces text-xs font-semibold text-black lg:text-sm'>L O R E M   I P S U M</h2>
            <p className=' text-3xl lg:text-4xl font-semibold mt-5'>Packages here</p>
        </div>
        <div id='scrollp' className=' scroll-smooth flex flex-row overflow-x-scroll will-change-scroll px-1 no-scrollbar '>
        {
          CardData.map((data,index) => {
            return (
              <PackageCard key={index} type={data.type} guide={data.guide} guideimg={data.guideimg} level={data.level} weeks={data.weeks} image={data.image} title={data.title} desc={data.desc}/>
            )
          })
        }
        </div>
        <div  className='h-1 rounded-full bg-[#D4D4D4] mx-8 mt-5 max-w-60'>
          <div  style={{marginLeft:scrollp}} className='h-1 bg-[#C94277] w-[20%]' ></div>
        </div>
        
    </div>
        </div>
  )
}
