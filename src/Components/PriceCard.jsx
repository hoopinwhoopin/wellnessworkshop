import React, { useEffect, useState } from 'react'
import check from '../assets/check.svg'
import createClient from '../client';
import { Router, useHref, useNavigate, useNavigation, useRoutes, useSearchParams } from 'react-router-dom';
export default function PriceCard({type,page,benefs, autofocus=false}) {
    const [month, setMonth] = useState(1)
    const [prices, setPrices] = useState({Gold: {'Months_1':10500,'Discount_1':null,'Months_3':90,'Discount_3':null,'Months_6':101,'Discount_6':null }, Silver: {'Months_1':10500,'Discount_1':null,'Months_3':90,'Discount_3':null,'Months_6':101,'Discount_6':null }, Bronze: {'Months_1':10500,'Discount_1':null,'Months_3':90,'Discount_3':null,'Months_6':101,'Discount_6':null }, PDFfile: {asset: {url: ""}}})
    const [prices1, setPrices1] = useState({Gold: 1500, Silver: 1000, Bronze: 750, PDFfile: {asset: {url: ""}}})
    const [prices2, setPrices2] = useState({Gold: {"Weeks_8":10500,"Weeks_12":90,"Weeks_24":101 }, Silver: {"Weeks_8":10500,"Weeks_12":90,"Weeks_24":101 }, Bronze: {"Weeks_8":10500,"Weeks_12":90,"Weeks_24":101 }, PDFfile: {asset: {url: ""}}})
    useEffect(() => { 
        if (page === 'Online' || page === 'Offline') {
		createClient
			.fetch(
				`*[_type == "${page}"]{
                Gold{
                    Months_1,
                    Discount_1,
                    Months_3,
                    Discount_3,
                    Months_6,
                    Discount_6,
                },
                Silver{
                    Months_1,
                    Discount_1,
                    Months_3,
                    Discount_3,
                    Months_6,
                    Discount_6,
                },
                Bronze{
                    Months_1,
                    Discount_1,
                    Months_3,
                    Discount_3,
                    Months_6,
                    Discount_6,
                },
                PDFfile{
                asset->{
                    url
                }}
    }`
			)
			.then((data) => {setPrices(data[0])})
            .catch(console.error);}
            else if (page === 'Consultancy') {
                createClient
                .fetch(
                    `*[_type == "${page}"]{
                    Gold{
                        Weeks_8,
                        Weeks_12,
                        Weeks_24,
                    },
                    Silver{
                        Weeks_8,
                        Weeks_12,
                        Weeks_24,
                    },
                    Bronze{
                        Weeks_8,
                        Weeks_12,
                        Weeks_24,
                    },
                    PDFfile{
                    asset->{
                        url
                    }}
            }`).then((data) => {setPrices2(data[0])}).catch(console.error);}
            else {
                createClient
                .fetch(
                    `*[_type == "${page}"]{
                    Gold,
                    Silver,
                    Bronze,
                    PDFfile{
                    asset->{
                        url
                    }}
            }`
        ).then((data) => {setPrices1(data[0])}).catch(console.error);}
	}, []);
    var deets = {

        'Gold': {
            'bgcolor': ['focus-within:bg-[#E9AE16]', 'group-focus-within:bg-[#E9AE16]'],
            'textcolor': 'group-focus-within:text-[#E9AE16]',
            'bordercolor': 'group-focus-within:border-[#E9AE16]',
            1: prices.Gold.Months_1,
            '1d': prices.Gold.Discount_1,
            3: prices.Gold.Months_3,
            '3d': prices.Gold.Discount_3,
            6: prices.Gold.Months_6,
            '6d': prices.Gold.Discount_6,
        },
        'Silver': {
            'bgcolor': ['focus-within:bg-[#211E1D]','group-focus-within:bg-[#211E1D]'],
            'textcolor': 'group-focus-within:text-[#211E1D]',
            'bordercolor': 'group-focus-within:border-[#211E1D]',
            1: prices.Silver.Months_1,
            '1d': prices.Silver.Discount_1,
            3: prices.Silver.Months_3,
            '3d': prices.Silver.Discount_3,
            6: prices.Silver.Months_6,
            '6d': prices.Silver.Discount_6,
        },
        'Bronze': {
            'bgcolor': ['focus-within:bg-[#CD7F32]', 'group-focus-within:bg-[#CD7F32]'],
            'textcolor': 'group-focus-within:text-[#CD7F32]',
            'bordercolor': 'group-focus-within:border-[#CD7F32]',   
            1: prices.Bronze.Months_1,
            '1d': prices.Bronze.Discount_1,
            3: prices.Bronze.Months_3,
            '3d': prices.Bronze.Discount_3,
            6: prices.Bronze.Months_6,
            '6d': prices.Bronze.Discount_6,
        }
        
    }
    if (page === '1_on_1_Training') {
        deets['Gold'][1] = prices1.Gold
        deets['Silver'][1] = prices1.Silver
        deets['Bronze'][1] = prices1.Bronze
    }
    if (page === 'Consultancy') {
        deets['Gold'][1] = prices2.Gold.Weeks_8
        deets['Silver'][1] = prices2.Silver.Weeks_8
        deets['Bronze'][1] = prices2.Bronze.Weeks_8
        deets['Gold'][3] = prices2.Gold.Weeks_12
        deets['Silver'][3] = prices2.Silver.Weeks_12
        deets['Bronze'][3] = prices2.Bronze.Weeks_12
        deets['Gold'][6] = prices2.Gold.Weeks_24
        deets['Silver'][6] = prices2.Silver.Weeks_24
        deets['Bronze'][6] = prices2.Bronze.Weeks_24
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
            <button className='font-semibold text-xl'> {type} Package</button>
            <img className='w-5 h-5 hidden group-focus-within:block' src={check} alt='medal'/>
            </div>
            {page === '1_on_1_Training' ? null :
            <div className='grid grid-flow-col grid-cols-3 grid-rows-2 text-center justify-between 
                gap-x-2 gap-y-1 max-w-80'>
                <button className={buttonst}
    
    onFocus={()=>{setMonth(1),benefs(type)} } onClick={()=>{setMonth(1)}} >{page==='Consultancy'?'8 WEEKS':'1 MONTH'}</button>
                {(page==='Consultancy' || deets[type]['1d']==null) ? <p></p>:<p className='text-xxs tracking-wider font-semibold text-[#3AA342]'>{`SAVE ${deets[type]['1d']}%`}</p>}
                <button className={buttonst} onFocus={()=>{setMonth(3),benefs(type)} }
                      onClick={()=>{setMonth(3)}} >{page==='Consultancy'?'12 WEEKS':'3 MONTH'}</button>
                {page==='Consultancy' || deets[type]['3d']==null ? <p></p>:<p className='text-xxs tracking-wider font-semibold text-[#3AA342]'>{`SAVE ${deets[type]['3d']}%`}</p>}
                <button className={buttonst} onFocus={()=>{setMonth(6),benefs(type)} } 
                     onClick={()=>{setMonth(6)}}>{page==='Consultancy'?'24 WEEKS':'6 MONTH'}</button>
                { page==='Consultancy' || deets[type]['6d']==null ? <p></p>:<p className='text-xxs tracking-wider font-semibold text-[#3AA342]'>{`SAVE ${deets[type]['6d']}%`}</p>}
            </div>}
        </div>
            <div className=' flex-row bg-[#B86C53] bg-opacity-5 hidden group-focus-within:flex
                items-center justify-between pt-0 p-5'>
                <div className='flex flex-col items-center'>
                <p className='text-xl font-semibold'>
                    ₹{deets[type][month]}{page==='Consultancy'? <p></p>:<span className='font-normal'>/month</span>}</p>
                {page==='Consultancy'? <p></p>:<p className={month!==1? 'flex text-[#626262] font-medium':
                    'hidden text-[#626262] font-medium'}>
                    ₹{deets[type][month]*month}<span className='line-through decoration-1 ml-1'>
                        ₹{deets[type][1]*month}</span></p>}
                </div>
                <a href={prices.PDFfile.asset.url} className={`text-white font-semibold flex min-h-12 justify-center items-center 
                    px-4 rounded-md ${deets[type]['bgcolor'][1]}`}>Learn More</a>
            </div>
        </div>
    </div>
)
}
