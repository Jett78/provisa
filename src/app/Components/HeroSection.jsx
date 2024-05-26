"use client"
import React from "react";
import Slider from "./Slider";
import FullImageOnScroll from "./FullImageOnScroll";

const HeroSection = () => {
  return (
    <main>
      <Slider />
      <div className="mt-16 text-center">
        <h2 className="font-semibold text-3xl text-purple-900">PROFESSIONAL VISA AND EDUCATION SERVICES</h2>
        <p className="px-40 py-5  mx-auto text-gray-500">
          Professional Visa and Education Services Pvt. Ltd. (Pro-Visa) is a
          professional visa and educational consultancy authorized by the
          Ministry of Education (MOE) and offering free education to students
          interested in studying abroad. Our offices are in Kathmandu and
          Nepalgunj. We have a Learning Center that is fully equipped with
          ultra-modern facilities and provides students with our best advisors
          and tutors for Test Preparation Classes in order to provide better
          service to our students. We are proud of our students who have been
          successful in their careers as a result of our counseling and
          guidance, in addition to our high visa success rate. As a result, we
          may be Nepal's best education consultancy.
        </p>
      </div>
      <div className="flex items-center justify-center bg-parallax bg-fixed bg-cover h-80 mt-5">
        <div className="w-full h-full bg-orange-400 opacity-80 flex justify-center items-center ">
           <section className="flex justify-center gap-40">
           <div className="text-white flex flex-col  items-center gap-2">
            <img src="https://provisa.com.np/wp-content/uploads/2021/02/campus.png" alt="university" className="w-20 filter invert brightness-0" />
            <h2 className="font-bold text-2xl">200+</h2>
            <p className="text-sm font-semibold">College and Universities</p>
           </div>
           <div className="text-white flex flex-col  items-center gap-2">
            <img src="https://provisa.com.np/wp-content/uploads/2021/02/coronavirus.png" alt="university" className="w-20 filter invert brightness-0" />
            <h2 className="font-bold text-2xl">5+</h2>
            <p className="text-sm font-semibold">Countries</p>
           </div>
           <div className="text-white flex flex-col  items-center gap-2">
            <img src="https://provisa.com.np/wp-content/uploads/2021/02/graduated.png" alt="university" className="w-20 filter invert brightness-0" />
            <h2 className="font-bold text-2xl">1500+</h2>
            <p className="text-sm font-semibold">Happy Student</p>
           </div>
           <div className="text-white flex flex-col  items-center gap-2">
            <img src="https://provisa.com.np/wp-content/uploads/2021/02/online-learning.png" alt="university" className="w-20 filter invert brightness-0" />
            <h2 className="font-bold text-2xl">150+</h2>
            <p className="text-sm font-semibold">Courses</p>
           </div>
           </section>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
