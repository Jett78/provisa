"use client"
import React from 'react'
import Slider from "react-slick";
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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1000,
        
      };
  return (
    <main>
        <div className='mt-10'>
            <h2 className="slider-container font-semibold text-2xl text-center">Top Universities</h2>
            <div className='max-w-[1300px] mx-auto my-10 cursor-pointer'>
            <Slider {...settings}>
                {data.map((data,index)=> (
                    <div key={index} className='border-none outline-none'>
                        <img src={data.img} alt="" className='w-40 h-20' />
                    </div>
                ))}
                    </Slider>
            </div>
        </div>
    </main>
  )
}

export default Universities