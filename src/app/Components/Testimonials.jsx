"use client"
import { testimonials } from "../db/mockdata";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";


const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:true
  };
  return (
    <main className="bg-[#2D1D54] text-white h-[80vh]">
      <div className=" max-w-[1200px] mx-auto text-center py-10">
        <h2 className="slider-container font-bold text-4xl">Student's Testimonials</h2>
        <div className="mt-16">
        <Slider {...settings}>
          {testimonials.map((testi, index) => (
            <div key={index} className="border w-[50em] h-[22em] py-8 px-6 text-left">
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
