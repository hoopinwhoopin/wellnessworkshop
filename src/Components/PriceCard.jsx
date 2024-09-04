import React, { useEffect, useState } from 'react'
import check from '../assets/check.svg'
import createClient from '../client';
import { Router, useHref, useNavigate, useNavigation, useRoutes, useSearchParams } from 'react-router-dom';
export default function PriceCard({type,page,benefs, autofocus=false}) {
    const [month, setMonth] = useState(1)
    const [prices, setPrices] = useState({Gold: {"Months_1":10500,"Months_3":90,"Months_6":101 }, Silver: {"Months_1":10500,"Months_3":90,"Months_6":101 }, Bronze: {"Months_1":10500,"Months_3":90,"Months_6":101 }, PDFfile: {asset: {url: ""}}})
    useEffect(() => { 
		createClient
			.fetch(
				`*[_type == "${page}"]{
                Gold{
                    Months_1,
                    Months_3,
                    Months_6,
                },
                Silver{
                    Months_1,
                    Months_3,
                    Months_6,
                },
                Bronze{
                    Months_1,
                    Months_3,
                    Months_6,
                },
                PDFfile{
                asset->{
                    url
                }}
    }`
			)
			.then((data) => {setPrices(data[0]),console.log(data[0])})
            .catch(console.error);
	}, []);
    let deets = {

        'Gold': {
            'bgcolor': ['focus-within:bg-[#E9AE16]', 'group-focus-within:bg-[#E9AE16]'],
            'textcolor': 'group-focus-within:text-[#E9AE16]',
            'bordercolor': 'group-focus-within:border-[#E9AE16]',
            1: prices.Gold.Months_1,
            3: prices.Gold.Months_3,
            6: prices.Gold.Months_6,
        },
        'Silver': {
            'bgcolor': ['focus-within:bg-[#211E1D]','group-focus-within:bg-[#211E1D]'],
            'textcolor': 'group-focus-within:text-[#211E1D]',
            'bordercolor': 'group-focus-within:border-[#211E1D]',
            1: prices.Silver.Months_1,
            3: prices.Silver.Months_3,
            6: prices.Silver.Months_6,
        },
        'Bronze': {
            'bgcolor': ['focus-within:bg-[#CD7F32]', 'group-focus-within:bg-[#CD7F32]'],
            'textcolor': 'group-focus-within:text-[#CD7F32]',
            'bordercolor': 'group-focus-within:border-[#CD7F32]',   
            1: prices.Bronze.Months_1,
            3: prices.Bronze.Months_3,
            6: prices.Bronze.Months_6,
        }
        
    }
    
    let buttonstyle = type === 'Gold' ? 'focus:bg-[#E9AE16] focus:bg-opacity-10' : 
                      type === 'Silver'? 'focus:bg-[#211E1D] focus:bg-opacity-10' : 
                      'focus:bg-[#CD7F32] focus:bg-opacity-10'
    let buttonst = `flex text-xs items-center outline-0 border-2 justify-center border-[1px] 
                      group-focus-within:border-opacity-30 focus:border-2
                      ${deets[type]['bordercolor']} border-[#6262624D] 
                      font-semibold py-1 max-sm:pt-2 flex-1 mr-1 rounded-md text-[#626262] 
                      ${deets[type]['textcolor']} ${buttonstyle}`
  return (
    <div className={`w-full group flex flex-col overflow-hidden rounded-xl p-0.5 bg-[#D4D4D4]
     ${deets[type]['bgcolor'][0]}`}>
        <div className={`text-white group-focus-within:relative absolute font-semibold flex 
            flex-row text-center justify-center rounded-t-xl  ${deets[type]['bgcolor'][1]}`}>
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
                <button className={buttonst}
    
    onFocus={()=>{setMonth(1),benefs(type)} } onClick={()=>{setMonth(1)}} >1 MONTH</button>
                <p></p>
                <button className={buttonst} onFocus={()=>{setMonth(3),benefs(type)} }
                      onClick={()=>{setMonth(3)}} >3 MONTHS</button>
                <p className='text-xxs tracking-wider font-semibold text-[#3AA342]'>SAVE 10%</p>
                <button className={buttonst} onFocus={()=>{setMonth(6),benefs(type)} } 
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
                <a href={prices.PDFfile.asset.url} className={`text-white font-semibold flex min-h-12 justify-center items-center 
                    px-4 rounded-md ${deets[type]['bgcolor'][1]}`}>Learn More</a>
            </div>
        </div>
    </div>
)
}
