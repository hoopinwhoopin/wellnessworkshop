import star from '../assets/star-01.svg';
import TestimonialImg from '../assets/testimonials.svg';
import quotes from '../assets/Quotes.svg';
import VideoImg from '../assets/Demo_Video.svg';
function AboutUsTestimonial(){
    return(
        <div id='AboutUs'>
        <div className="about-us-testimonial bg-white  px-[4%] py-[80px]  sm:grid sm:grid-cols-[30%,70%] border-[1px] border-[#D4D4D4]">
            <div className="flex flex-col md:justify-center px-5">
                <div className="flex gap-3 justify-start items-start align-top w-1/2">
                    <img className="" alt="star svg" src={star} />
                    <p className="text-5xl font-medium text-left text-[#000]">4.9</p>
                </div>
                <div className=' my-5 lg:w-1/2'>
                    <img className="max-md:w-[70%] w-full" alt="testimonial" src={TestimonialImg} />
                </div>
            </div>
            <div className='flex align-top gap-2 px-5 lg:mt-10 max-sm:flex-col'>
                <img className="w-[32px] align-top mb-auto" alt="quotes" src={quotes} />
                <p className=' text-[180%] font-medium max-lg:text-2xl'>The comprehensive range of workout options caters to every fitness preference, from high-intensity training to yoga and strength conditioning. The cutting-edge equipment and impeccably clean facilities create an inviting environment that motivates and energises.</p>
            </div>
        </div>
        <div className='flex flex-col px-5 md:grid bg-white md:grid-cols-[40%,60%] md:p-[5%] py-[80px]'>
            <div className='flex flex-col p-2 justify-center'>
                <p className='max-lg:text-3xl text-5xl font-medium text-left'>Lorem ipsum dolor sit amet, consectetur </p>
                <p className='max-lg:text-lg text-3xl leading-8 font-medium text-left mt-5'>Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id.  </p>
                <div className='flex flex-row max-sm:justify-center gap-7 mt-8'>
                    <div className=' bg-gradient-to-r from-[#C94277] to-[#F4743B] rounded-xl p-[3px]'>
                        <div className=' bg-white hehe px-4 lg:px-7 py-4'>   
                            <p className=' max-lg:text-3xl text-5xl font-medium text-center'>2,900 </p>
                            <p className=' text-base leading-8 font-medium text-center text-[#626262]'>people joined </p>
                        </div>
                    </div>
                    <div className=' bg-gradient-to-r from-[#C94277] to-[#F4743B] rounded-xl p-[3px]'>
                        <div className=' bg-white hehe px-4 lg:px-7 py-4'>   
                            <p className=' max-lg:text-3xl text-5xl font-medium text-center'>2,900 </p>
                            <p className=' text-base leading-8 font-medium text-center text-[#626262]'>people joined </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-auto max-sm:mt-5 lg:p-10 max-lg:p-2'>
                <img className=" h-[100%] md:pl-8" alt="Video" src={VideoImg} />
            </div>
        </div>
        </div>
    );
}

export default AboutUsTestimonial;