"use client"
import React, { useRef } from 'react'
import { motion } from "framer-motion"

const Contact = () => {
  const transitiony = {
    initial:{y:-15, opacity: 0},
    animate:{  y: 0,opacity:1 } 
  }
  const transition = {
    initial:{y:15,opacity:0},
    animate:{y:0,opacity:1}
  }
  return (
   <main>
    <div className='max-w-[1100px] md:mx-auto mx-2 flex xl:flex-nowrap flex-wrap justify-center gap-6 my-12 relative'>
    <motion.div
    variants={transitiony}
       initial="initial"
       whileInView="animate"
       viewport={{ once: true,amount:1 }}
       transition={{ ease: "easeOut", duration: 1 }}
        className='w-[40em]'>
            <img src="https://provisa.com.np/wp-content/uploads/2022/10/confused-provisa-nepal.jpg.webp" alt="" />
            <div className='md:absolute hidden top-80 mx-40 bg-orange-400 opacity-75 h-60 p-6'>
              <p className='text-2xl font-bold text-white'>Choosing Us As Your Education Partner, We Can Assure You Your Future While You Focus On Your Study.</p>
            </div>
        </motion.div>

        <motion.div 
        variants={transition}
        initial="initial"
        whileInView="animate"
        transition={{duration:1,ease:"easeInOut"}}
        viewport={{once:true}}
        className='bg-gray-200 max-w-[40em]  py-4 px-8'>
            <form action="#">
            <h2 className='font-semibold text-2xl'>For Your Inquiries</h2>
               <div className='grid mt-4 gap-2'>
              <div className='grid gap-2'> 
                <label htmlFor="">Full Name *</label>
                <input type="text" placeholder='Enter Full Name' className='  text-[12px] p-3 outline-none border-none' />
                </div>
                <div className='grid gap-2'>
                <label htmlFor="">Email Address *</label>
                <input type="email" placeholder='Enter Your Email Address' className='text-[12px] p-3 outline-none border-none'  />
                </div>
                <div className='grid gap-2'>
                    <label htmlFor="">Phone Number *</label>
                <input type="text" placeholder='Enter Your Phone Number' className='text-[12px] p-3 outline-none border-none'  />
                </div>
               <div className='grid gap-2'>
                 <label htmlFor="">Message *</label>
               <textarea name="" id="" rows='6' placeholder='Enter Your Message' className='text-[12px] p-3 outline-none border-none' ></textarea>
               </div>
               <button className='bg-[#F4310A] w-28 py-2 rounded-lg text-white mt-2'>Submit</button>
               </div>
            </form>
        </motion.div>
    </div>
   </main>
  )
}

export default Contact