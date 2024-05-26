import React from 'react'
import { assist } from '../db/mockdata'

const Assist = () => {
  return (
    <main>
        <div className='max-w-[1100px] mx-auto mt-20 text-center'>
            <h2 className='font-semibold text-2xl border-b-4 w-fit mx-auto border-[#F4310A] py-2'>We Assist You With</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 justify-center gap-y-16 gap-x-6 my-14 mx-2 relative'>
              {assist.map((assist, index) => (
                <div key={index} className='relative'>
                    <img src={assist.img} alt="img" className='bg-[#F4310A] w-16 h-16 absolute top-[-45px] z-10 left-8 rounded-full p-2 border-4 border-white'/>
                   <div className='bg-gray-100 lg:w-80 max-w-[50em] hover:bg-[#F4310A] hover:text-white duration-500 ease-in-out cursor-pointer rounded-3xl py-10 px-4 lg:h-80 grid gap-2 text-left'>
                   <h2 className='font-semibold text-xl'>{assist.title}</h2>
                    <p className='text-sm leading-7'>{assist.desc}</p>
                    <a href="#" className='font-semibold'>{assist.link}</a>
                   </div>
                </div>
              ))}
            </div>
        </div>
    </main>
  )
}

export default Assist;
