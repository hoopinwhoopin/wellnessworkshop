import group from "../assets/Group Photo.svg"
import infinity from "../assets/infinity.svg"
import checkheart from "../assets/check-heart.svg"
import smile from "../assets/face-happy.svg"
import award from "../assets/award-05.svg"
function WhyUs() {
    return (
        <div id="WhyUs" className='grid grid-rows-[35%,35%,35%] overflow-hidden md:grid-cols-[27%,46%,27%] px-5 xl:px-[70px] py-[80px] sm:pb-[80px]'>   
            <div className="mt-4 flex   md:hidden items-center justify-center flex-col">  
                  <h1 className=" text-lg tracking-widest font-bold mb-5 text-center Atvik-Regular whitespace-break-spaces ">W H Y   U S</h1>
            <div className="text-4xl px-2 md:text-5xl font-semibold  text-center Atvik-Regular " >Lorem ipsum dolor sit amet, consectetur</div>
            <img className="md:w-[50vw]  relative  mt-2 " alt="group" src={group} />
             </div>
            <div className="flex-container   mt-10"> 
         
            <div className ="grid grid-rows-2 gap-3" > 
            <img className="h-[48px] w-[48px] ml-auto object-[top-right] " alt="infinity" src={infinity} />
                <h1 className="  text-3xl font-bold mt-3 text-right">Lorem ipsum </h1>
                <h2 className="  text-1xl font-medium text-right">
                Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id. Lorem ipsum dolor sit amet 
                                </h2>
                 </div>

                 <div className ="grid  grid-rows-2 gap-3 mt-10" > 
                 <img className="h-[48px] w-[48px] ml-auto mt-auto object-[top-right] " alt="checkheart" src={checkheart} />
                <h1 className="  text-3xl font-bold mt-3 text-right">Lorem ipsum </h1>
                <h2 className="  text-1xl font-medium text-right">
                 Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id. Lorem ipsum dolor sit amet 
                </h2>
                </div>
             </div>  
            <div className="mt-4 hidden md:flex -mb-[260px] justify-center flex-col">  
                  <h1 className=" text-base font-medium text-center Atvik-Regular">Why Us</h1>
            <div className=" text-[250%]   text-center Atvik-Regular " >Lorem ipsum dolor sit amet, consectetur</div>
            <img className="h-[50vh] relative mt-5 -mb-[120px] object-[center_bottom] " alt="group" src={group} />
             </div>
            <div className="flex  flex-col mt-10"> 
                <div className ="grid grid-rows-2 gap-3 " > 
            <img className="h-[48px] w-[48px] " alt="infinity" src={smile} />
         
                <h1 className="  text-3xl font-bold mt-3 text-left">Lorem ipsum </h1>
                <h2 className="  text-1xl font-medium text-left">
                Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id. Lorem ipsum dolor sit amet 
                                </h2>
                 </div>
                 <div className ="grid grid-rows-2 gap-3 mt-10 " > 
                 <img className="h-[48px] w-[48px]   object-[top-left] " alt="checkheart" src={award} />
                <h1 className="  text-3xl font-bold mt-3 text-left">Lorem ipsum </h1>
                <h2 className="  text-1xl font-medium text-left">
                 Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id. Lorem ipsum dolor sit amet 
                </h2>
                </div> </div>
         
        </div> 
    );
}

export default WhyUs;