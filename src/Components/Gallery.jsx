
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import createClient from "../client";
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        }
      ],
  };
function Gallery(){
    const [images, setImages] = useState({title:"",images:[{asset:{url:""}}]});
    useEffect(() => { 
        createClient
            .fetch(
                `*[_type == "Gallery"]{
                    title,
                    images[]{
                        asset->{
                            url
                        }
                    } 
        }`
            )
            .then((data) => {setImages(data[0])})
            .catch(console.error);
    } , []);

    return(<div id="Gallery" className="px-6 lg:px-[70px] py-[80px] bg-white   text-[#211E1D] bg-gradient-to-r from-[#F6C0A90D] to-[#EB9ABA0D]">
    <div className="flex flex-col gap-2">
        <pre className=" text-base font-bold text-left mb-2">G A L L E R Y</pre>
        <p className="text-2xl lg:text-4xl font-semibold tracking-wide text-left mb-3 lg:max-w-[85%]">{images.title}</p>
    </div>
    <Slider {...settings} className=" flex mt-10 gap-5">
        {images.images.map((image, index) => (
            <div key={index} className="">
            <img className="max-md:h-56 aspect-[16/9]" src={image.asset.url} alt="Gallery" />
            </div>
        ))}
      </Slider>
</div>)
}

export default Gallery