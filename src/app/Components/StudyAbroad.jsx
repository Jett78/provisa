import React from 'react'

const StudyAbroad = () => {
  return (
    <main>
      <div className='w-[1100px] mx-auto my-20 text-center'>
        <h2  className='font-semibold text-2xl border-b-4 w-fit mx-auto border-[#F4310A] py-2'>Study Abroad</h2>
        <div className='flex gap-6 items-center mt-10'>
          <section className='relative group overflow-hidden'>
            <img src="https://provisa.com.np/wp-content/uploads/2021/02/christopher-burns-FUh6nK3s0po-unsplash.jpg.webp" className='brightness-50 group-hover:scale-125 ease-in-out duration-300 ' alt="img" />
            <div className=' text-white text-3xl absolute inset-0 py-80 text-left px-4 group-hover:bg-orange-400 group-hover:bg-opacity-75 '>
              <h2 className='text-[22px] font-bold'>Study in Australia</h2>
              <p className='text-[14px] font-bold'>Australia has one of the best institutions and universities</p>
              <button className='bg-[#0C71B7] font-semibold text-sm w-36 py-4'>Learn More</button>
            </div>
          </section>

          <section className='grid grid-cols-2 gap-y-10 gap-4'>
            <div className='relative overflow-hidden group'>
            <img src="https://provisa.com.np/wp-content/uploads/2022/04/japan.jpg.webp" alt="" className='w-[100%] h-60 object-cover group-hover:scale-125 ease-in-out duration-300' />
           <div className=' text-white text-3xl absolute inset-0 text-left px-4 bg-gradient-to-b from-transparent via-transparent to-black translate-y-[62%] group-hover:translate-y-0 py-10  group-hover:bg-orange-400  group-hover:bg-opacity-75  transition-ease-in-out duration-500 ' >
            <h2 className='font-bold text-[18px] border-b pb-1'>STUDY IN JAPAN</h2>
            <p className='text-[14px] font-bold'>Education System in Japan In the decades following World [...]</p>
            <button className='bg-[#0C71B7] font-semibold text-sm w-36 py-4'>Learn More</button>
           </div>
            </div>
            <div  className='relative overflow-hidden group'>
            <img src="https://provisa.com.np/wp-content/uploads/2022/04/canal-g1228989ee_640.jpg.webp" alt="" className='w-[100%] h-60 object-cover group-hover:scale-125 ease-in-out duration-300' />
            <div className=' text-white text-3xl absolute inset-0 text-left px-4 bg-gradient-to-b from-transparent via-transparent to-black translate-y-[62%] group-hover:translate-y-0 py-10 group-hover:bg-orange-400 group-hover:bg-opacity-75  transition-ease-in-out duration-500 ' >
            <h2 className='font-bold text-[18px] border-b pb-1'>STUDY IN EUROPE</h2>
            <p className='text-[14px] font-bold'>In terms of Research and education Europe is[....]</p>
            <button className='bg-[#0C71B7] font-semibold text-sm w-36 py-4'>Learn More</button>
           </div>
            </div>
            <div className='relative overflow-hidden group'>
            <img src="https://provisa.com.np/wp-content/uploads/2020/09/jason-hafso-C2keINMOhIE-unsplash.jpg.webp" alt="" className='w-[100%] h-60 object-cover group-hover:scale-125 ease-in-out duration-300' />
            <div className=' text-white text-3xl absolute inset-0 text-left px-4 bg-gradient-to-b from-transparent via-transparent to-black translate-y-[62%] group-hover:translate-y-0 py-10 group-hover:bg-orange-400 group-hover:bg-opacity-75  transition-ease-in-out duration-500 ' >
            <h2 className='font-bold text-[18px] border-b pb-1'>STUDY IN CANADA</h2>
            <p className='text-[14px] font-bold'>Education System In Canada It's common knowledge that studying [...]</p>
            <button className='bg-[#0C71B7] font-semibold text-sm w-36 py-4'>Learn More</button>
           </div>
            </div>
            <div className='relative overflow-hidden group'>
            <img src="https://provisa.com.np/wp-content/uploads/2021/02/remi-thorel-304R7qkgHe8-unsplash.jpg.webp" alt="" className='w-[100%] h-60 object-cover group-hover:scale-125 ease-in-out duration-300' />
            <div className=' text-white text-3xl absolute inset-0 text-left px-4 bg-gradient-to-b from-transparent via-transparent to-black translate-y-[62%] group-hover:translate-y-0 py-10 group-hover:bg-orange-400 group-hover:bg-opacity-75  transition-ease-in-out duration-500 ' >
            <h2 className='font-bold text-[18px] border-b pb-1'>STUDY IN USA</h2>
            <p className='text-[14px] font-bold'>Education System in USA There are two major intakes [...]</p>
            <button className='bg-[#0C71B7] font-semibold text-sm w-36 py-4'>Learn More</button>
           </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default StudyAbroad