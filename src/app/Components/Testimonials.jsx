"use client"
import { testimonials } from "../db/mockdata";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import UseScreenSize from '../hooks/UseScreenSize';

const Testimonials = () => {
  const { isSmallScreen } = UseScreenSize();   //custom hook
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 2,  //to show lower number of slides on min screen
    slidesToScroll: 1,
    arrows:true
  };
  return (
    <main className="bg-[#2D1D54] text-white h-[80vh]">
      <div className=" max-w-[1200px] md:mx-auto mx-2 text-center py-10">
        <h2 className="slider-container font-bold md:text-4xl">Student's Testimonials</h2>
        <div className="lg:mt-16 mt-4 ">
        <Slider {...settings}>
          {testimonials.map((testi, index) => (
            <div key={index} className="border w-[50em] min-h-[22em] sm:py-8 py-2 sm:px-6 px-2 text-left">
               <div className="text-3xl text-[#F4310A] pb-2">
               <FaQuoteLeft/>
               </div>
              <p>{testi.desc}</p>
              <div className="flex items-center gap-4 text-left mt-10">
                <img src={testi.img} alt="img" className='w-16 rounded-full' />
                <div>
                  <h2 className="font-bold text-xl">{testi.name}</h2>
                  <p className="text-[12px] text-gray-400">{testi.university}</p>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
  
      </div>
    
    </main>
  );
};

export default Testimonials;
