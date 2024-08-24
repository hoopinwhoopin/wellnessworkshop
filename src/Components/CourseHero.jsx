
import Vector from "../assets/Vector2.svg"
import dude from "../assets/image 1.png"
import scrolldown2 from "../assets/Scroll Down.svg"
import AktivGrotesk from '../Fonts/AktivGrotesk-Medium.ttf'
import check from "../assets/check.svg"

function CourseHero() {
    return (
        <div className="max-sm:mt-20 hero-section h-full pt-7 bg-gradient-to-r from-[#FFFFFF00] to-[#F5753B0D] flex flex-col">
            <div id="Hero" className=" flex md:grid md:grid-cols-[55%,1fr] flex-col flex-1 relative sm:pl-7">
            <div className="flex flex-col  pl-[7%] lg:pt-[10%] items-left">
                <p className="font-semibold text-[#C94277] whitespace-break-spaces text-base">O N L I N E   P A C K A G E S</p>
                <h1 style={{fontFamily:{AktivGrotesk}}} className="text-2xl flex flex-row flex-wrap font-semibold max-sm:pr-5 mt-5 lg:text-4xl  text-left text-[#000] text-wrap whitespace-nowrap">Lose weight, bulk up, get healthy. Whatr your fitness goals, we got you covered</h1>
                <div className="flex flex-col justify-around min-h-36 pt-5">
                    <div className="flex flex-row">
                        <img className="w-5 h-5" alt="check" src={check} />
                        <p className="text-[#000] text-base ml-2">Get Personalised training plans</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className="w-5 h-5" alt="check" src={check} />
                        <p className="text-[#000] text-base ml-2">Unlimited calls with coaches</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className="w-5 h-5" alt="check" src={check} />
                        <p className="text-[#000] text-base ml-2">Nutrition plans made for your lifestyle</p>
                    </div>
                    
                </div>
                <div className="flex max-md:flex-col flex-row mt-5 w-[70%] gap-x-4 ">
                        <p className=" bg-[#C94277] text-white text-nowrap font-semibold w-fit rounded-md text-xs py-[6px] my-1 px-4 tracking-wider">10+ COACHES</p>
                        <p className=" bg-[#C94277] text-white text-nowrap font-semibold w-fit rounded-md text-xs py-[6px] my-1 px-4 tracking-wider">200+ 5 STAR REVIEW   </p>
                        <p className=" bg-[#C94277] text-white text-nowrap font-semibold w-fit rounded-md text-xs py-[6px] my-1 px-4 tracking-wider">1000+ TRANSFORMATIONS</p>
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

export default CourseHero