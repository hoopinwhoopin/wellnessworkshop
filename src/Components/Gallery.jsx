
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        },
        {
        original: "https://picsum.photos/id/1019/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
    },
  ];
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
    return(<div id="Gallery" className="px-6 lg:px-[70px] py-[80px] bg-white   text-[#211E1D] bg-gradient-to-r from-[#F6C0A90D] to-[#EB9ABA0D]">
    <div className="flex flex-col gap-2">
        <pre className=" text-base font-bold text-left mb-2">G A L L E R Y</pre>
        <p className="text-3xl lg:text-5xl font-semibold tracking-wide text-left mb-3 lg:max-w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <Slider {...settings} className=" flex mt-10 gap-5">
        {images.map((image, index) => (
            <div key={index} className="">
            <img className="max-md:h-56 aspect-[16/9]" src={image.original} alt="Gallery" />
            </div>
        ))}
      </Slider>
</div>)
}

export default Gallery