import React from 'react'
import placeHolder from "../assets/Image Placeholder.svg"
export default function Testimonials({page='home'}) {
  return (
    <div className='flex bg-white flex-col justify-center items-center p-20 px-[9.5vw]'>
        <h3 className='text-[#211E1D] text-base tracking-widest font-extrabold  '>T E S T I M O N I A L S</h3>
        <div className=' text-5xl mt-5 tracking-wide text-center text-[#211E1D] font-extrabold'>What are our students saying</div>
        <div className='flex flex-col'>
            <div className='mt-20  items-center flex flex-col lg:grid lg:grid-cols-2 gap-y-20 lg:grid-rows-2'>
                <div className='flex flex-col  p-1'>
                <h4 className='text-[24px]'>“Lorem ipsum dolor sit amet consectetur. Viverra elit <span className={`${page==='home'? 'text-[#C94277]':'text-[#CD7F32]'} tracking-wide font-extrabold`}>suspendisse semper lectus </span> amet velit. Aliquet duis orci in convallis.”</h4>
                <div className='flex flex-col mt-5'>
                    <h2 className='font-extrabold text-3xl tracking-wide py-2'>John Doe</h2>
                    <h4 className='font-extrabold whitespace-pre text-sm text-[#626262]'>T E C H   E N T R E P R E N E U R ,   S A A S    F O U N D E R</h4>
                </div>
                </div>
                <div className='self-center flex justify-end '>
                    <img src={placeHolder} alt='video'/>
                </div>
                <div className='self-center flex justify-start '>
                    <img src={placeHolder} alt='video'/>
                </div>
                <div className='flex flex-col  p-1'>
                <h4 className='text-[24px]'>“Lorem ipsum dolor sit amet consectetur. Viverra elit <span className={`${page==='home'? 'text-[#C94277]':'text-[#CD7F32]'} tracking-wide font-extrabold`}>suspendisse semper lectus </span> amet velit. Aliquet duis orci in convallis.”</h4>
                <div className='flex flex-col mt-5'>
                    <h2 className='font-extrabold text-3xl tracking-wide py-2'>John Doe</h2>
                    <h4 className='font-extrabold whitespace-pre text-sm text-[#626262]'>T E C H   E N T R E P R E N E U R ,   S A A S    F O U N D E R</h4>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}
