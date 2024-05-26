"use client"
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    {
      url: 'https://provisa.com.np/wp-content/uploads/2022/10/JourneyToAustralia.jpeg.webp',
      caption: 'Grab 50% OFF in IELTS and PTE',
    },
    {
      url: 'https://provisa.com.np/wp-content/uploads/2022/12/newzealand.png.webp',
      caption: 'We can hep you live the life you been dreaming of',
    },
    {
      url: 'https://provisa.com.np/wp-content/uploads/2022/10/study_abroad_provisa-nepal.jpg.webp',
      caption: 'WELCOME TO PROFESSIONAL VISA AND EDUCATION SERVICES',
    },
  ];
  

const Slider = () => {
  return (
        <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index} className='h-[100vh]'>
              <img style={{ width: '100%' }} src={fadeImage.url} className='object-contain w-fit brightness-50' />
      
                <h2 className='absolute mx-auto my-auto  inset-0 bg-black bg-opacity-75 text-white border-2 border-white py-10 h-40 w-[20em] text-center text-3xl font-bold '>{fadeImage.caption}</h2>
         
            </div>
          ))}
        </Fade>
      </div>
      )
}

export default Slider