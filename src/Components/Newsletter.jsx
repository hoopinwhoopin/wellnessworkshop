import React, { useState } from 'react'

export default function Newsletter() {
    const [open, setOpen] = useState(true)
  return (
    <div aria-disabled={true} className={open? "fixed max-sm:hidden  p-48 bg-[#626262] flex flex-row justify-center bg-opacity-30 h-screen w-full z-50":"hidden p-48 bg-[#626262] bg-opacity-30 h-screen w-full z-50" }>
        <div className='flex rounded-md overflow-hidden shadow-[10px_10px_14px_#6262625A] '>

        <div className='bg-white flex flex-1'>
            <img src='https://images.rosewoodhotels.com/is/image/rwhg/RosewoodMansion_FitnessCenter:TALL-LARGE-9-16' alt='newsletter' className='w-full'/>
        </div>

        <div className='bg-white p-16 flex flex-col  flex-1'>
            <p className='text-4xl font-semibold'>Subscribe to our Newsletter</p>
            <p className='text-lg font-medium mt-4'>Get the latest updates and offers delivered to your inbox</p>
            <div className='flex flex-col mt-8'>
                <input type='text' placeholder='Enter your email' className='border-2 border-[#626262] p-2'/>
                <button className='bg-[#C94277] text-white p-2 mt-4'>Subscribe</button>
            </div>

        </div>
        </div>
        
        <button onClick={()=>{setOpen(false)}} className='-ml-9 mt-3 flex'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button> 
    </div>
  )
}
