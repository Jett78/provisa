import { testimonials } from "../db/mockdata";
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
  return (
    <main className="bg-[#2D1D54] text-white h-[80vh]">
      <div className="w-[1100px] mx-auto text-center py-10">
        <h2 className="font-bold text-4xl">Student's Testimonials</h2>
        <div className="flex gap-4 mt-20">
          {testimonials.map((testi, index) => (
            <div key={index} className="border w-[50em] h-[22em] py-10 px-6 text-left">
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
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
