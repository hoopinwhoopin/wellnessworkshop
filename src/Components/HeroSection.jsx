
import Vector from "../assets/vector.svg"
import dude from "../assets/image 1.png"
import scrolldown2 from "../assets/Scroll Down.svg"
import AktivGrotesk from '../Fonts/AktivGrotesk-Medium.ttf'
import { useEffect, useState } from "react";
import createClient from "../client";
function HeroSection() {
    const [data, setData] = useState({whatsapp_link:''})
    useEffect(() => {
        createClient
          .fetch(
            `*[_type == "JoinUs"]{
                    whatsapp_link
        }`
          )
          .then((data) => {setData(data[0])})
          .catch(console.error);
      }, []);
    return (
        <div className="hero-section h-full max-sm:mt-10 pt-7 bg-gradient-to-r from-[#FFFFFF00] to-[#F5753B0D] flex flex-col">
            <div id="Hero" className=" flex md:grid md:grid-cols-[55%,1fr] flex-col flex-1 relative sm:pl-7">
            <div className="flex flex-col justify-center px-[7%] items-left">
                <h1 style={{fontFamily:{AktivGrotesk}}} className="text-5xl flex flex-row flex-wrap font-semibold max-sm:pr-5 mt-10 lg:text-7xl  text-left text-[#000] text-wrap whitespace-nowrap"><span >Start Training Today with a <span className="pinkcolor whitespace-nowrap">Lifestyle</span> <span className="pinkcolor whitespace-break-spaces">Change</span></span></h1>
                <p className="text-xl lg:text-2xl text-left font-normal text-[#000] mt-5 mb-5">We offer Online, Offline, Consultancy, and One-on-One consultation packages, focusing on fitness, lifestyle modification, nutrition, and stress management.</p>
                <div className="flex max-sm:gap-4 w-full gap-8">
                <a href={data.whatsapp_link} className="pink px-6 py-4 rounded-lg text-base text-white">Get in Touch</a>
                </div>
            </div>
            <div className="flex h-fit aspect-auto align-bottom max-sm:mt-5 justify-center items-center self-end bottom-0  relative">
                <img className="absolute lg::top-[10%]  -z-10 -bottom-8 right-0"  alt="Vector"  src={Vector}/>
                <img className="lg:h-[75%]  w-[75%] mt-auto" alt="dude" src={dude} />
            </div>
            <img className="absolute bottom-[32px] ml-[5%]" alt="scrolldown2" src={scrolldown2} />
            </div>
        </div>
    )
}

export default HeroSection