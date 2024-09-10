import React, { useEffect, useState } from 'react'
import placeHolder from "../assets/Image Placeholder.svg"
import createClient from '../client';
export default function Testimonials({page='home'}) {
    const [testimonials, setTestimonials] = useState([{testimonial:"",file:{asset:{url:""}},name:"",position:""}, {testimonial:"",file:{asset:{url:""}},name:"",position:""}]);
    useEffect(() => { 
		createClient
			.fetch(
				`*[_type == "testimonial"]{
      testimonial,
      file{
        asset->{
          _id,
          url
        },
      },
      name,
      position,
    }`
			)
			.then((data) => setTestimonials(data))
            .catch(console.error);
	}, []);
  return (
    <div className='flex bg-white flex-col justify-center items-center p-20 px-[9.5vw]'>
        <h3 className='text-[#211E1D] text-base tracking-widest font-extrabold  '>T E S T I M O N I A L S</h3>
        <div className=' text-5xl mt-5 tracking-wide text-center text-[#211E1D] font-extrabold'>What are our students saying</div>
        <div className='flex flex-col'>
            <div className='mt-20  items-center flex flex-col lg:grid lg:grid-cols-2 gap-y-20 lg:grid-rows-2'>
                <div className='flex flex-col  p-1'>
                <h4 className='text-[24px] Aktiv-Regular'>{testimonials[0].testimonial}</h4>
                <div className='flex flex-col mt-5'>
                    <h2 className='font-extrabold text-3xl tracking-wide py-2'>{testimonials[0].name}</h2>
                    <h4 className='font-extrabold whitespace-pre text-sm text-[#626262] tracking-widest'>{testimonials[0].position}</h4>
                </div>
                </div>
                <div className='self-center flex justify-start rounded-lg overflow-hidden lg:p-5 lg:ml-3'>
                    {/* <img src={placeHolder} alt='video'/> */}
                    <video className='w-[120%] h-[120%] min-h-52 rounded-lg' loop autoPlay={true} muted src={testimonials[0].file.asset.url} type="video/mp4" />
                </div>
                <div className='self-center flex justify-start rounded-lg overflow-hidden lg:p-5 lg:mr-3'>
                    {/* <img src={placeHolder} alt='video'/> */}
                    <video className='w-[120%] h-[120%] min-h-52 rounded-lg' loop autoPlay muted src={testimonials[1].file.asset.url} type="video/mp4" />
                </div>
                <div className='flex flex-col  p-1'>
                {/* <h4 className='text-[24px]'>“Lorem ipsum dolor sit amet consectetur. Viverra elit <span className={`${page==='home'? 'text-[#C94277]':'text-[#CD7F32]'} tracking-wide font-extrabold`}>suspendisse semper lectus </span> amet velit. Aliquet duis orci in convallis.”</h4> */}
                <h4 className='text-[24px]'>{testimonials[1].testimonial}</h4>
                <div className='flex flex-col mt-5'>
                    <h2 className='font-extrabold text-3xl tracking-wide py-2'>{testimonials[1].name}</h2>
                    <h4 className='font-extrabold whitespace-pre text-sm text-[#626262] tracking-widest'>{testimonials[1].position}</h4>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}
