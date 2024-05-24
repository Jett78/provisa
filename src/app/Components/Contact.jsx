import React from 'react'

const Contact = () => {
  return (
   <main>
    <div className='w-[1100px] mx-auto flex gap-6 my-12'>
        <figure className='w-[40em] relative'>
            <img src="https://provisa.com.np/wp-content/uploads/2022/10/confused-provisa-nepal.jpg.webp" alt="" />
            <div className='absolute top-80 mx-40 bg-orange-400 h-60 p-6'>
              <p className='text-2xl font-bold text-white'>Choosing Us As Your Education Partner, We Can Assure You Your Future While You Focus On Your Study.</p>
            </div>
        </figure>
        <div className='bg-gray-100 w-[40%] py-4 px-8'>
            <form action="#">
            <h2 className='font-semibold text-2xl'>For Your Inquiries</h2>
               <div className='grid mt-4 gap-2'>
              <div className='grid gap-2'> 
                <label htmlFor="">Full Name *</label>
                <input type="text" placeholder='Enter Full Name' className='p-4 outline-none border-none' />
                </div>
                <div className='grid gap-2'>
                <label htmlFor="">Email Address *</label>
                <input type="email" placeholder='Enter Your Email Address' className='p-4 outline-none border-none'  />
                </div>
                <div className='grid gap-2'>
                    <label htmlFor="">Phone Number *</label>
                <input type="text" placeholder='Enter Your Phone Number' className='p-4 outline-none border-none'  />
                </div>
               <div className='grid gap-2'>
                 <label htmlFor="">Message *</label>
               <textarea name="" id="" rows='6' placeholder='Enter Your Message' className='p-4 outline-none border-none' ></textarea>
               </div>
               <button className='bg-[#F4310A] w-28 py-2 rounded-lg text-white mt-2'>Submit</button>
               </div>
            </form>
        </div>
    </div>
   </main>
  )
}

export default Contact