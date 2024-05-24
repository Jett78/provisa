import React from 'react'

const StudyAbroad = () => {
  return (
    <main>
      <div className='w-[1100px] mx-auto my-20 text-center'>
        <h2  className='font-semibold text-2xl border-b-4 w-fit mx-auto border-[#F4310A] py-2'>Study Abroad</h2>
        <div className='flex gap-6 items-center mt-10'>
          <figure className='relative'>
            <img src="https://provisa.com.np/wp-content/uploads/2021/02/christopher-burns-FUh6nK3s0po-unsplash.jpg.webp" className='brightness-50' alt="img" />
            <div className=' text-white text-3xl absolute top-[12em] text-left px-4'>
              <h2 className='text-[22px] font-bold'>Study in Australia</h2>
              <p className='text-[14px] font-bold'>Australia has one of the best institutions and universities</p>
              <button className='bg-[#0C71B7] font-semibold text-sm w-40 py-4'>Learn More</button>
            </div>
          </figure>
          <section className='grid grid-cols-2 gap-y-10 gap-4'>
            <div className='relative'>
            <img src="https://provisa.com.np/wp-content/uploads/2022/04/japan.jpg.webp" alt="" className='w-[100%] h-60 object-cover brightness-50' />
           <div className=' text-white text-3xl absolute top-[6.2em] text-left px-4' >
            <h2 className='font-bold text-[18px] border-b pb-1'>STUDY IN JAPAN</h2>
           </div>
            </div>
            <div  className='relative'>
            <img src="https://provisa.com.np/wp-content/uploads/2022/04/canal-g1228989ee_640.jpg.webp" alt="" className='w-[100%] h-60 object-cover brightness-50' />
            <div className=' text-white text-3xl absolute top-[6.2em] text-left px-4' >
            <h2 className='font-bold text-[18px] border-b pb-1'>STUDY IN EUROPE</h2>
           </div>
            </div>
            <div className='relative'>
            <img src="https://provisa.com.np/wp-content/uploads/2020/09/jason-hafso-C2keINMOhIE-unsplash.jpg.webp" alt="" className='w-[100%] h-60 object-cover brightness-50' />
            <div className=' text-white text-3xl absolute top-[6.2em] text-left px-4' >
            <h2 className='font-bold text-[18px] border-b pb-1'>STUDY IN CANADA</h2>
           </div>
            </div>
            <div className='relative'>
            <img src="https://provisa.com.np/wp-content/uploads/2021/02/remi-thorel-304R7qkgHe8-unsplash.jpg.webp" alt="" className='w-[100%] h-60 object-cover brightness-50' />
            <div className=' text-white text-3xl absolute top-[6.2em] text-left px-4' >
            <h2 className='font-bold text-[18px] border-b pb-1'>STUDY IN USA</h2>
           </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default StudyAbroad