import React, { useState } from 'react'
import check from '../assets/check.svg'
export default function PriceCard({type, autofocus=false}) {
    const [month, setMonth] = useState(1)

    let deets = {
        'Gold': {
            'bgcolor': 'focus-within:bg-[#E9AE16]',
            'textcolor': 'group-focus-within:text-[#E9AE16]',
            'bordercolor': 'group-focus-within:border-[#E9AE16]',
            1: 10500,
            3: 9450,
            6: 8925,
        },
        'Silver': {
            'bgcolor': 'focus-within:bg-[#211E1D]',
            'textcolor': 'group-focus-within:text-[#211E1D]',
            'bordercolor': 'group-focus-within:border-[#211E1D]',
            1: 9500,
            3: 8300,
            6: 7650,
        },
        'Bronze': {
            'bgcolor': 'focus-within:bg-[#CD7F32]',
            'textcolor': 'group-focus-within:text-[#CD7F32]',
            'bordercolor': 'group-focus-within:border-[#CD7F32]',   
            1: 8500,
            3: 7500,
            6: 7000,
        }
        
    }
    
    let buttonstyle = type === 'Gold' ? 'focus:bg-[#E9AE16] focus:bg-opacity-10' : 
                      type === 'Silver'? 'focus:bg-[#211E1D] focus:bg-opacity-10' : 
                      'focus:bg-[#CD7F32] focus:bg-opacity-10'
    let buttonst = `flex text-xs items-center border-2 justify-center border-[1px] 
                      group-focus-within:border-opacity-30 focus:border-2
                      ${deets[type]['bordercolor']} border-[#6262624D] 
                      font-semibold py-1 max-sm:pt-2 flex-1 mr-1 rounded-md text-[#626262] 
                      ${deets[type]['textcolor']} ${buttonstyle}`
  return (
    <div className={`w-full group flex flex-col overflow-hidden rounded-xl p-0.5 bg-[#D4D4D4]
     ${deets[type]['bgcolor']}`}>
        <div className={`text-white group-focus-within:relative absolute font-semibold flex 
            flex-row text-center justify-center rounded-t-xl  ${deets[type]['bgcolor']}`}>
            Recommended For You
        </div>
        <div className='bg-white flex flex-col top-0 bottom-0 relative rounded-[10px]'>

        <div className='bg-[#B86C53] bg-opacity-5 flex flex-col  p-5'>
            <div className='flex flex-row justify-between items-center my-4'>
            <p className='font-semibold text-xl'> {type} Package</p>
            <img className='w-5 h-5 hidden group-focus-within:block' src={check} alt='medal'/>
            </div>
            <div className='grid grid-flow-col grid-cols-3 grid-rows-2 text-center justify-between 
                gap-x-2 gap-y-1 max-w-80'>
                <button className={buttonst} autoFocus={autofocus}
                      onFocus={()=>{setMonth(1)}} onClick={()=>{setMonth(1)}}>1 MONTH</button>
                <p></p>
                <button className={buttonst} onFocus={()=>{setMonth(3)}}
                      onClick={()=>{setMonth(3)}} >3 MONTHS</button>
                <p className='text-xxs tracking-wider font-semibold text-[#3AA342]'>SAVE 10%</p>
                <button className={buttonst} onFocus={()=>{setMonth(6)}} 
                     onClick={()=>{setMonth(6)}}>6 MONTHS</button>
                <p className='text-xxs tracking-wider font-semibold text-[#3AA342]'>SAVE 15%</p>
            </div>
        </div>
            <div className=' flex-row bg-[#B86C53] bg-opacity-5 hidden group-focus-within:flex
                items-center justify-between pt-0 p-5'>
                <div className='flex flex-col items-center'>
                <p className='text-xl font-semibold'>
                    ₹{deets[type][month]}<span className='font-normal'>/month</span></p>
                <p className={month!==1? 'flex text-[#626262] font-medium':
                    'hidden text-[#626262] font-medium'}>
                    ₹{deets[type][month]*month}<span className='line-through decoration-1 ml-1'>
                        ₹{deets[type][1]*month}</span></p>
                </div>
                <button className={`text-white font-semibold flex min-h-12 justify-center items-center 
                    px-4 rounded-md group-${deets[type]['bgcolor']}`}>Purchase Plan</button>
            </div>
        </div>
    </div>
)
}
