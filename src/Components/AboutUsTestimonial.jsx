import star from '../assets/star-01.svg';
import TestimonialImg from '../assets/testimonials.svg';
import quotes from '../assets/Quotes.svg';
import VideoImg from '../assets/Demo_Video.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import createClient  from '../client';
function AboutUsTestimonial(){

    const [data,setData]= useState({rating:4.9,rating_content:"",testimonial_title:"",testimonial_content:"",numbers:[],data_name:[],video:{asset:{url:""}}})
    useEffect(() => { 
		createClient
			.fetch(
				`*[_type == "Data"]{
                rating,
                rating_content,
                testimonial_title,
                testimonial_content,
                numbers,
                data_name,
                video{
                asset->{
                _id,
                url
                }
                }
                
    }`
			)
			.then((data) => {setData(data[0])})
            .catch(console.error);
	}, []);
    return(
        <div id='AboutUs'>
        <div className="about-us-testimonial bg-white  px-[4%] py-[80px]  sm:grid sm:grid-cols-[30%,70%] border-[1px] border-[#D4D4D4]">
            <div className="flex flex-col md:justify-center px-5">
                <div className="flex gap-3 justify-start items-start align-top w-1/2">
                    <p className="text-5xl font-medium text-left text-[#000]">{data.rating}</p>
                </div>
                <div className=' my-5 lg:w-1/2'>
                    <img className="max-md:w-[70%] w-full" alt="testimonial" src={TestimonialImg} />
                </div>
            </div>
            <div className='flex align-top gap-2 px-5 lg:mt-10 max-sm:flex-col'>
                <img className="w-[32px] align-top mb-auto" alt="quotes" src={quotes} />
                <p className=' text-[180%] font-medium max-lg:text-2xl'>{data.rating_content}</p>
            </div>
        </div>
        <div className='flex flex-col px-5 md:grid bg-white md:grid-cols-[40%,60%] md:p-[5%] py-[80px]'>
            <div className='flex flex-col p-2 justify-center'>
                <p className='max-lg:text-3xl text-5xl font-medium text-left'>{data.testimonial_title} </p>
                <p className='max-lg:text-lg text-3xl leading-8 font-medium text-left mt-5'>{data.testimonial_content}</p>
                <div className='flex flex-row max-sm:justify-center gap-7 mt-8'>
                    <div className=' bg-gradient-to-r from-[#C94277] to-[#F4743B] rounded-xl p-[3px]'>
                        <div className=' bg-white hehe px-4 lg:px-7 py-4'>   
                            <p className=' max-lg:text-3xl text-5xl font-medium text-center'>{data.numbers[0]}</p>
                            <p className=' text-base leading-8 font-medium text-center text-[#626262]'>{data.data_name[0]} </p>
                        </div>
                    </div>
                    <div className=' bg-gradient-to-r from-[#C94277] to-[#F4743B] rounded-xl p-[3px]'>
                        <div className=' bg-white hehe px-4 lg:px-7 py-4'>   
                            <p className=' max-lg:text-3xl text-5xl font-medium text-center'>{data.numbers[1]}</p>
                            <p className=' text-base leading-8 font-medium text-center text-[#626262]'>{data.data_name[1]} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-auto max-sm:mt-5 lg:p-10 max-lg:p-2 rounded-lg overflow-hidden'>
                <video className=" h-[100%] md:ml-8 rounded-lg" alt="Video" src={data.video.asset.url} autoPlay muted loop/>
            </div>
        </div>
        </div>
    );
}

export default AboutUsTestimonial;