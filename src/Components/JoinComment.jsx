import React from 'react'
import group from '../assets/Group Photo.svg'
export default function JoinComment({page='home'}) {
  let bg = page === 'home' ? 'bg-gradient-to-l from-[#C94277] to-[#F4743B]' : 'bg-gradient-to-tr from-[#D7BEBA] via-[#D79D87] to-[#EF9674]'
  let text = page === 'home' ? 'bg-white text-[#C94277]' : 'bg-[#CD7F32] text-white'
  return (
    <div className='p-8 bg-white lg:p-[70px]'>
    <div className={`bg-white p-2 flex flex-col md:flex-row max-h-80 max-sm:mb-64 rounded-3xl ${bg} `}>
        <div className='max-sm:max-h-80  flex flex-col justify-center items-center '>
            <div className=' flex justify-between h-full flex-col p-8 pt-12 lg:p-10 lg:pt-16'>
            <div className='text-white text-3xl lg:text-5xl w-[85%] font-extrabold'>
            Lorem ipsum dolor sit amet, consectetur adipis
            </div>
            <button className={` mt-4 block  w-[60%] sm:w-[25%] rounded-md text-sm py-4 px-8 font-bold ${text}`}>Join Us Now</button>
            </div>
        </div>
            <img className='relative scale-125 -bottom-7 lg:-bottom-11' src={group } alt="" />
    </div>
    </div>
  )
}
