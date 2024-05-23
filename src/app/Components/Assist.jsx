import React from 'react'
import { assist } from '../db/mockdata'

const Assist = () => {
  return (
    <main>
        <div className='w-[1100px] mx-auto text-center'>
            <h2 className='font-semibold text-2xl'>We Assist You With</h2>
            <div className='grid grid-cols-3 gap-y-10 gap-x-6 my-14'>
              {assist.map((assist,index)=>(
                <div key={index} className='bg-gray-100 hover:bg-[#F4310A] hover:text-white duration-500 ease-in-out cursor-pointer rounded-3xl py-10 px-4 h-80 grid gap-2 text-left'>
                    <h2 className='font-bold text-xl'>{assist.title}</h2>
                    <p className='text-sm leading-7'>{assist.desc}</p>
                    <a href="#" className='font-semibold'>{assist.link}</a>
                </div>
              ))}
            </div>
        </div>
    </main>
  )
}

export default Assist