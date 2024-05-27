"use client"
import React from 'react'
import Slider from "react-slick";
import UseScreenSize from '../hooks/UseScreenSize';

const data=[
    {
        img:"https://provisa.com.np/wp-content/uploads/2021/02/sourthern.png.webp",
    },
    {
        img:"https://provisa.com.np/wp-content/uploads/2021/02/UIA_Logo_FINAL.png.webp",
    },
    {
        img:"https://provisa.com.np/wp-content/uploads/2021/02/skyline-college.png.webp",
    },
    {
        img:"https://provisa.com.np/wp-content/uploads/2021/02/rto_logo_big.png.webp",
    },
    {
        img:"https://provisa.com.np/wp-content/uploads/2021/02/queensford-college.png.webp",
    },
    {
        img:"https://provisa.com.np/wp-content/uploads/2021/02/UniversityofTheSunshineCoast.png.webp",
    },
    {
        img:"https://provisa.com.np/wp-content/uploads/2021/02/vibe-logo-copy.png.webp",
    },
]
const Universities = () => {
    const { isSmallScreen } = UseScreenSize();   //custom hook
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isSmallScreen ? 2 : 6,  //to show lower number of slides on min screen
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1000,
        
      };
  return (
    <main>
        <div className='mt-10'>
            <h2 className="slider-container font-semibold text-2xl text-center">Top Universities</h2>
            <div className='max-w-[1300px] md:mx-auto mx-4 my-10 cursor-pointer'>
            <Slider {...settings}>
                {data.map((data,index)=> (
                    <div key={index} className='border-none outline-none'>
                        <img src={data.img} alt="universities" className='max-w-40 h-20' />
                    </div>
                ))}
                    </Slider>
            </div>
        </div>
    </main>
  )
}

export default Universities