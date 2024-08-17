import React from 'react'
import logo from '../assets/Logo_w.svg'
import footv from '../assets/footerC.svg'
function Footer() {
  return (
    <div>
    <div className='flex bg-[#211E1D] flex-col lg:flex-row justify-between pt-20 p-12'>
        <div className='md:w-[24vw] mb-8 flex flex-col'>
        <img className='aspect-auto w-[90%]' src={logo} alt='logo'/>
        <div className='flex text-lg flex-wrap text-white mt-14'>
        Lorem ipsum dolor sit amet consectetur. Velit vestibulum dignissim morbi aenean lorem risus.
        </div>
        <div className='max-md:hidden text-white mt-24'>
            <h3>getintouch@moseseffect.com</h3>
            <h3>All rights</h3>
        </div>
        </div>
        <div className='grid grid-row-3 md:grid-cols-3 max-md:items-center md:justify-center'>
        <div className='grid min-h-52 gap-0 grid-rows-[14%,12%,12%,12%,12%]'>
                <h1 className='text-white font-bold text-lg'>Company</h1>
                <h1>Home</h1>
                <h1>About Us</h1>
                <h1>Features</h1>
                <h1>Courses</h1>
            </div>
            <div className='grid min-h-52 max-md:-mt-10 grid-flow-row grid-rows-[14%,12%,12%]'>
                <h1 className='text-white font-bold text-lg'>Support</h1>
                <h1>Blogs</h1>
                <h1>Terms & Conditions</h1>
            </div>
            <div className='grid max-md:-mt-20'>
                <div className='grid min-h-28 grid-rows-[28%,24%,24%]'>
                    <h1 className='text-white font-bold text-lg'>Legal</h1>
                    <h1>Privacy Policy</h1>
                    <h1>Sale Terms & Conditions</h1>
                </div>
                <div className='grid min-h-28 grid-rows-[28%,24%,24%]'>
                    <h1 className='text-white font-bold text-lg'>Legal</h1>
                    <h1>Privacy Policy</h1>
                    <h1>Sale Terms & Conditions</h1>
                </div>
            </div>
        </div>
    <div className='md:hidden text-white mt-24'>
            <h3>getintouch@moseseffect.com</h3>
            <h3>All rights</h3>
        </div>
    </div>
    <img className='-mt-1' src={footv} alt="" />
    </div>
  )
}

export default Footer