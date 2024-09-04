import React from 'react'
import AG from '../Fonts/AktivGrotesk-Regular.otf'


export default function PackageCard({type, title, image, guide, weeks, level , desc,guideimg}) {
  return (
    <div className='rounded-lg max-sm:min-w-[95vw] md:min-w-[30vw] flex flex-col mx-2 overflow-hidden'>
        <div className='relative flex flex-row h-fit'>
            <div className='bg-[#ffffff] flex justify-center items-center rounded-[4px] mx-5 mt-4 absolute bg-opacity-95'>
            <h3 className='bg-[#C94277]  px-4 py-[6px] pt-[8px] bg-opacity-15  text-[#C94277] font-semibold text-xs'>{type}</h3>
            </div>
            <h3 style={{fontFamily:AG}} className='absolute self-end mx-5 mb-3 text-white text-4xl'>{title}</h3>
            <img className='w-[100%]' src={image} alt='workout'/>
        </div>
        <div className='bg-white p-4 flex flex-col'>
            <div className='flex flex-row items-center w-fit'>
            <img className='w-12 h-12' src={guideimg} alt='guide'/>
            <p className='font-semibold ml-3'>by {guide}</p>
            </div>
            <div className='flex flex-row my-4 w-1/2'>
            <p className='text-[#C94277] flex flex-grow-[1] justify-center items-center text-center py-[6px] pt-[8px] font-bold text-xs rounded-md bg-[#C94277] m-1 bg-opacity-15 '>{weeks}</p>
            <p className='text-[#C94277] flex flex-grow-[1] py-[6px] pt-[8px] justify-center items-center text-center font-bold text-xs rounded-md bg-[#C94277] m-1 bg-opacity-15'>{level}</p>
            </div>
            <div className=' overflow-ellipsis text-wrap flex'>
            <p style={{fontFamily:AG}} className='text-lg text-ellipsis h- line-clamp-3'>{desc}</p>
            </div>
            <a href={`/Packages?page=${title.split(' ').join('_')}`} className='bg-[#C94277] w-fit text-white my-4 p-5 px-7 rounded-lg'>Read More</a>
        </div>
    </div>
  )
}
