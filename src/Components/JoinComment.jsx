import React, { useEffect, useState } from 'react'
import createClient from '../client'
export default function JoinComment({page='home'}) {
  let bg = page === 'home' ? 'bg-gradient-to-l from-[#C94277] to-[#F4743B]' : 'bg-gradient-to-tr from-[#D7BEBA] via-[#D79D87] to-[#EF9674]'
  let text = page === 'home' ? 'bg-white text-[#C94277]' : 'bg-[#CD7F32] text-white'
  const [data, setData] = useState({title:'',whatsapp_link:''})
  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "JoinUs"]{
                title,
                whatsapp_link
    }`
      )
      .then((data) => {setData(data[0])})
      .catch(console.error);
  }, []);
  return (
    <div className='p-8 bg-white lg:p-[70px] -z-10'>
    <div className={`bg-white p-2 flex flex-col md:flex-row max-h-80 max-sm:mb-64 rounded-3xl ${bg}  justify-between`}>
        <div className='max-sm:max-h-80  flex flex-col justify-center items-center '>
            <div className=' flex justify-between h-full flex-col p-8 pt-12 lg:p-10 lg:pt-16'>
            <div className='text-white text-3xl lg:text-5xl w-[85%]  font-extrabold'>
            {data.title}
            </div>
            <a href={data.whatsapp_link} className={` mt-4 flex  w-[60%] sm:w-[25%] justify-center items-center  rounded-md text-sm py-4 px-8 font-bold ${text}`}>Join Us Now</a>
            </div>
        </div>
    </div>
    </div>
  )
}
