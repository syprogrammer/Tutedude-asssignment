import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Enrolled from './Enrolled';

const data = [
  {
    id:1
  },
  {
    id:2
  },
  {
    id:3
  },
  {
    id:4
  },
  {
    id:5
  },
  {
    id:6
  },
]
const Carousels = () => {
   const settings = {
     infinite: true,
     dots: true,
     slidesToShow: 2.5,
     slidesToScroll: 1,
     lazyLoad: true,
     autoplay: true,
     autoplaySpeed: 2000,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2.5,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };
  return (
    <>
      <div className="main-container px-5 efont">
        <div className="name text-xl mb-2 darkpurple font-semibold">
          Friends Who Enrolled <span className="md:text-slate-400">(3)</span>
        </div>

        <div className=" w-full  text-white hidden lg:block md:block">
          {/* -------------box-------------------------------- */}
          <Slider {...settings}>
            {data.map((item) => {
              return <Enrolled />;
            })}
         
          </Slider>

          {/* ----------------------------box---------------------------- */}
        </div>

        <div className="flex flex-wrap text-white gap-5 md:hidden lg:hidden">
          {
             data.map((item) => {
              return <Enrolled />;
            })
          }
        </div>
      </div>
      
    </>
  );
}

export default Carousels