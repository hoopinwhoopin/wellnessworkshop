import React from 'react'
import check from '../assets/check-green.svg'
import PriceCard from './PriceCard'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

export default function PriceCategory() {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || "1_on_1_Training"; // Default to page 1

    let benefits = [
        'Pre-Assessment',
        'Nutrition Road Map',
        'Supplement Guide',
        'Performance Screening',
        'Report on Start',
        'Weekly Health Analysis',
        'Trainer Allocation',
        'Monthly Wellness Questionare',
        'Blood Work Analysis',
        'Premium Resources',
        'Membership Cards',
        'Real Time Progress Tracking',
        'Access to Personalised Data Bank'
    ]

  return (
    <div id="PriceCategory" className='bg-white flex flex-col max-md:p-[7%] py-20'>
        <div className='bg-white flex flex-col flex-grow items-center justify-center text-center pt-8 p-3'>
            <p className='font-semibold text-xs lg:text-base whitespace-break-spaces'>W H A T   W E   O F F E R</p>
            <p className='font-semibold text-3xl lg:text-5xl py-10'>Choose your Transformation Package</p>
        </div>
        <div className='flex flex-col lg:flex-row w-full items-center justify-center  max-md:flex-col'>
            <div className='flex flex-col w-[100%] flex-grow items-center justify-center gap-5 lg:px-16'>
            <PriceCard type={'Gold'} page={page}/>
            <PriceCard type={'Silver'} page={page}/>
            <PriceCard type={'Bronze'} page={page}/>
            </div>
            <div className='flex flex-col min-w-[50%] lg:border-l-2 my-7 lg:px-7 '>
                <p className='text-3xl font-semibold m-3 tracking-wide'>What will you get in this plan?</p>
                {benefits.map((value)=>{
                    return (
                        <div className='flex flex-row items-center p-[6px] ml-2'>
                            <img className='w-5 h-5' src={check} alt='check'/>
                            <p className='pl-6 font-medium text-lg'>{value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
