import React, { useEffect, useState } from 'react'
import check from '../assets/check-green.svg'
import PriceCard from './PriceCard'
import { useSearchParams } from 'react-router-dom';
import x from '../assets/red-x-icon.svg'
import { description } from './apicalls';

export default function PriceCategory() {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || "1_on_1_Training"; // Default to page 1
    const [card, setCard] = useState('Gold')
    const data = description[page].Benefits
  return (
    <div id="PriceCategory" className='bg-white flex flex-col max-md:p-[7%] py-20'>
        <div className='bg-white flex flex-col flex-grow items-center justify-center text-center pt-8 p-3'>
            <p className='font-semibold text-xs lg:text-base whitespace-break-spaces'>W H A T   W E   O F F E R</p>
            <p className='font-semibold text-3xl lg:text-5xl py-10'>Choose your Transformation Package</p>
        </div>
        <div className='flex flex-col lg:flex-row w-full items-center justify-center  max-md:flex-col'>
            <div className='flex flex-col w-[100%] flex-grow items-center justify-center gap-5 lg:px-16'>
            <PriceCard type={'Gold'} page={page} benefs={setCard}/>
            <PriceCard type={'Silver'} page={page} benefs={setCard}/>
            <PriceCard type={'Bronze'} page={page} benefs={setCard}/>
            </div>
            <div className='flex flex-col min-w-[50%] lg:border-l-2 my-7 lg:px-7 '>
                <p className='text-3xl font-semibold m-3 tracking-wide'>What will you get in this plan?</p>
                {data? data.map((value,index)=>{
                    return (
                        <div className='group'>
                        <div key={index} className='flex flex-row items-center p-[6px] ml-2 z-[2]'>
                            <img className='w-5 h-5 ' src={value[`${card}`]? check:x} alt='check'/>
                            <p className='pl-6 font-medium text-lg'>{value.Text}</p>
                        </div>
                        <div className='-z-[2] h-0 group-hover:h-4 -translate-y-8 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1  transition-all'>
                            <p className='pl-12 text-sm text-[#626262]'>{value.Subtext}</p>
                        </div>
                        </div>
                    )
                }):null}
            </div>
        </div>
    </div>
  )
}
