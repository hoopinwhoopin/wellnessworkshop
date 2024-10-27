import dude from "../assets/Dude.svg"
import medal from "../assets/Bronze_Medal.svg"
import link from "../assets/link.svg"
import award from "../assets/award-05.svg"
function BronzeCourse() {
  return (
    <div className=" sm:px-[70px] sm:py-[80px] bg-gradient-to-r from-[#F6C0A905] to-[#EB9ABA05] sm:grid sm:grid-cols-2 gap-8">
        <div className="inline-block justify-center max-w-[500px] max-sm:max-w-[300px]">
          {/* <div className="bg-white absolute shadow-[0_4px_20px_#80808080] w-[15%] h-[10%] px-[1.5%] py-[0.5rem] justify-evenly flex flex-col translate-y-[200%] translate-x-[150%] max-w-[25%] rounded-[10px]">
          <img className="w-[18%] md:h-[60px] align-middle -m-2" src={award} />
          <p className="text-[85%] leading-4 font-[600]">Users have seen progress in less than 2 months</p>
          </div> */}
          <img className="w-[100%] h-[100%] my-3 " alt="dude" src={dude} />
        </div>
        <div className="flex p-5 flex-col justify-center">
        <img className="w-9 md:w-[43.9px] md:h-[60px]  align-middle " alt="link" src={medal} />
            <p className="text-3xl mt-4 lg:text-5xl font-medium text-left mb-3">Online Bronze Course</p>
            <p className=" text-base text-[#626262] font-normal text-left mb-7">September 2023</p>
            <p className=" text-[20px] text-[#626262] font-normal text-left mb-7">Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla porttitor duis hendrerit id. Sed quisque aliquam neque egestas quis sed tempus pellentesque feugiat.</p>
            <div className="flex gap-2 align-middle">
                <p className=" flex text-[20px] pinkcolor font-normal text-left justify-center align-middle">Get in Touch</p>
                <img className="w-[32px] h-[32px]  align-middle " alt="link" src={link} />
            </div>
        </div>
    </div>
  );
}

export default BronzeCourse;