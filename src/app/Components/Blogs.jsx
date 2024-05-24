import React from 'react'
import { blogs } from '../db/mockdata'
import { IoMdPerson } from "react-icons/io";


const Blogs = () => {
  return (
   <main>
    <div className='w-[1100px] mx-auto text-center'>
        <h2 className='font-semibold text-2xl border-b-4 w-fit mx-auto border-[#F4310A] py-2'>Latest Blogs</h2>
        <p className='text-right font-semibold'>View all</p>
        <div className='grid grid-cols-3 gap-y-10 gap-x-6 my-14'>
              {blogs.map((blogs,index)=>(
                <div key={index} className='bg-gray-100 hover:shadow-xl duration-500 ease-in-out cursor-pointer grid gap-2 text-left'>
                   <img src={blogs.img} alt="blog" className='h-60 object-cover' />
                   <div className='flex justify-between items-center px-2 text-gray-600'>
                    <p>{blogs.date}</p>
                    <IoMdPerson />
                   </div>
                   <div className='px-2'>
                   <h2 className='font-semibold text-l my-3'>{blogs.title}</h2>
                   <p className='text-sm leading-7 pb-10'>{blogs.desc}</p>
                   </div>
                    
                </div>
              ))}
            </div>
    </div>
   </main>
  )
}

export default Blogs