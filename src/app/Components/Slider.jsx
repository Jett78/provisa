"use client"
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Grab 50% OFF in IELTS and PTE',
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'We can hep you live the life you been dreaming of',
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'WELCOME TO PROFESSIONAL VISA AND EDUCATION SERVICES',
    },
  ];
  

const Slider = () => {
  return (
        <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index} className='h-[80vh] relative'>
              <img style={{ width: '100%' }} src={fadeImage.url} className='object-full' />
              <div>
                <h2 className='absolute  top-40 left-[18em] bg-black text-white border-2 border-white h-60 w-[20em] text-center px-4 py-20 text-3xl font-bold '>{fadeImage.caption}</h2>
              </div>
            </div>
          ))}
        </Fade>
      </div>
      )
}

export default Slider