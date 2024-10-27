import React, { useState, useEffect } from 'react'
import PackageCard from './PackageCard'
import { useRef } from 'react'
import { packages } from './apicalls'


export default function Packages() {
  const [data, setData] = useState([{title:"",type:"",level:"",weeks:"",image:{asset:{url:""}},desc:""}])
  useEffect(() => { 
		setData(packages);
	}, [packages]);
   const [scrollp,setScrollp]=useState()
   const myRef = useRef(null)
   const barRef = useRef(null)
   const [scrolls, setScrolls] = useState(0);
   useEffect(() => {
     setScrollp(`${ (myRef.current.scrollLeft+myRef.current.scrollLeft/(data.length-1))/myRef.current.scrollWidth*myRef.current.clientWidth}%`);
     
     myRef.current.addEventListener('scroll',()=>{
      setScrollp(`${(myRef.current.scrollLeft+myRef.current.scrollLeft/(data.length-1))/myRef.current.scrollWidth*myRef.current.clientWidth}%`)
    })
   },
   [scrolls]);
   return (
    <div className='bg-white'>
    <div className='radialbg py-14 pl-[4%]  lg:py-20 '>
        <div className="flex mb-14  lg:mb-20  flex-col items-center">
            <h2 className='whitespace-break-spaces text-xs font-semibold text-black lg:text-sm'>L O R E M   I P S U M</h2>
            <p className=' text-3xl lg:text-4xl font-semibold mt-5'>Packages here</p>
        </div>
        <div ref={myRef} className=' scroll-smooth cursor-all-scroll flex flex-row overflow-x-scroll px-1 no-scrollbar '>
        {
          data.map((data,index) => {
            return (
              <PackageCard key={index} type={data.type} level={data.level} weeks={data.weeks} image={data.image.asset.url} title={data.title} desc={data.desc}/>
            )
          })
        }
        </div >
        <div className='flex flex-row items-center justify-between mt-5 p-8'>
        <div ref={barRef}  className='h-1  rounded-full bg-[#D4D4D4] mx-8 w-60'>
          <div  style={{transform:`translateX(${scrollp})`,transition:'ease-in-out'}} className='h-1 bg-[#C94277] w-[20%]' ></div>
        </div>
        <div className='flex flex-nowrap'> 
          <button id='left' onClick={()=>{myRef.current.scrollLeft>0? myRef.current.scrollLeft -= 200:"";setScrolls(myRef.current.scrollLeft)  }} className='focus:text-black text-[#626262] font-semibold mx-2 text-2xl'>{'<'}</button>
          <button id='right' onClick={()=>{myRef.current.scrollLeft<myRef.current.scrollWidth? myRef.current.scrollLeft+=200:"";setScrolls(myRef.current.scrollLeft) }} className='focus:text-black text-[#626262] font-semibold mx-2 text-2xl'>{'>'}</button>
        </div>
        </div>
    </div>
        </div>
  )
}
