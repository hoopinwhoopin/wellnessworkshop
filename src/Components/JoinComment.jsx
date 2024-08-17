import React from 'react'
import group from '../assets/Group Photo.svg'
export default function JoinComment() {
  return (
    <div className='p-8 bg-white lg:p-[70px]'>
    <div className='bg-white p-2 flex flex-col md:flex-row  bg-gradient-to-l max-h-80 max-sm:mb-64 from-[#C94277] rounded-3xl to-[#F4743B]'>
        <div className='max-sm:max-h-80  flex flex-col justify-center items-center '>
            <div className=' flex justify-between h-full flex-col p-8 pt-12 lg:p-10 lg:pt-16'>
            <div className='text-white text-3xl lg:text-5xl w-[85%] font-extrabold'>
            Lorem ipsum dolor sit amet, consectetur adipis
            </div>
            <button className=' bg-white mt-4 block  w-[60%] sm:w-[25%] pinkcolor rounded-md text-sm py-4 px-8 font-bold'>Join Us Now</button>
            </div>
        </div>
            <img className='relative scale-125 -bottom-7 lg:-bottom-11' src={group } alt="" />
    </div>
    </div>
  )
}
