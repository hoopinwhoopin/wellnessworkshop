import createClient from "../client";
import { useEffect, useState } from "react";

function AboutUs2() {
  const [data, setData] = useState({caption:"",text:[]});
  useEffect(() => { 
		createClient
			.fetch(
				`*[_type == "AboutUs"]{
                caption,
                text[]
    }`
			)
			.then((data) => {setData(data[0])})
            .catch(console.error);
	}, []);
  return (
    <div className=" grid grid-rows-[40%,60%] lg:grid-cols-[40%,60%] px-6 lg:px-[70px] py-[80px] bg-white border-2 border-[#D4D4D4] text-[#211E1D] ">
        <div className="flex flex-col lg:gap-6">
            <pre className=" text-base font-bold text-left mb-5">A B O U T  U S</pre>
            <p className="text-3xl md::text-5xl font-medium text-left lg:mb-3">{data.caption}</p>
        </div>
        <div className="flex flex-col gap-5 max-lg:mb-10 lg:ml-[72px]">
            {/* <p className=" text-lg font-normal text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
            <p className=" text-lg font-normal text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
            <p className=" text-lg font-normal text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. </p> */}
            {/* <p className=" text-lg font-normal text-left whitespace-break-spaces">{data.text}</p> */}
            {data.text.map((value,index)=>{
                return (
                    <p key={index} className=" text-lg font-normal text-left whitespace-break-spaces">{value}</p>
                )
            })}
        </div>
    </div>
  );
}

export default AboutUs2;