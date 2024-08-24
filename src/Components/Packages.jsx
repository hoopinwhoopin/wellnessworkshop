import React, { useState, useEffect } from 'react'
import workout from '../assets/Workout.svg'
import PackageCard from './PackageCard'
import guideimg from '../assets/guide.svg'
import { useRef } from 'react'



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
   const myRef = useRef(null)
   
  //  useEffect(() => {
  //   setScrollp(`${ myRef.current.scrollLeft/myRef.current.scrollWidth*500}%`);
  //   myRef.current.addEventListener('scroll',()=>{
  //     setScrollp(`${myRef.current.scrollLeft/myRef.current.scrollWidth*500}%`)
  //   })
   
  //  },
  //  [0||myRef.current.scrollLeft]);
   return (
    <div className='bg-white'>
    <div className='radialbg py-14 pl-[4%]  lg:py-20 '>
        <div className="flex mb-14  lg:mb-20  flex-col items-center">
            <h2 className='whitespace-break-spaces text-xs font-semibold text-black lg:text-sm'>L O R E M   I P S U M</h2>
            <p className=' text-3xl lg:text-4xl font-semibold mt-5'>Packages here</p>
        </div>
        <div ref={myRef} className=' scroll-smooth cursor-all-scroll flex flex-row overflow-x-scroll px-1 no-scrollbar '>
        {
          CardData.map((data,index) => {
            return (
              <PackageCard key={index} type={data.type} guide={data.guide} guideimg={data.guideimg} level={data.level} weeks={data.weeks} image={data.image} title={data.title} desc={data.desc}/>
            )
          })
        }
        </div >
        <div className='flex flex-row items-center justify-between mt-5 p-8'>
        <div  className='h-1  rounded-full bg-[#D4D4D4] mx-8 w-[80%] max-w-60'>
          <div  style={{transform:`translateX(${scrollp})`,transition:'ease-in-out'}} className='h-1 bg-[#C94277] w-[20%]' ></div>
        </div>
        <div className='flex flex-nowrap'> 
          <button id='left' onClick={()=>{myRef.current.scrollLeft>0? myRef.current.scrollLeft -= 50:""  }} className='focus:text-black text-[#626262] font-semibold mx-2 text-2xl'>{'<'}</button>
          <button id='right' onClick={()=>{myRef.current.scrollLeft<myRef.current.scrollWidth? myRef.current.scrollLeft+=50:"" }} className='focus:text-black text-[#626262] font-semibold mx-2 text-2xl'>{'>'}</button>
        </div>
        </div>
    </div>
        </div>
  )
}
