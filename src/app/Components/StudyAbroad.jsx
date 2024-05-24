import React from 'react'

const StudyAbroad = () => {
  return (
    <main>
      <div className='w-[1100px] mx-auto text-center'>
        <h2  className='font-semibold text-2xl'>Study Abroad</h2>
        <div className='flex gap-6 items-center'>
          <figure>
            <img src="https://provisa.com.np/wp-content/uploads/2021/02/christopher-burns-FUh6nK3s0po-unsplash.jpg.webp" alt="img" />
          </figure>
          <section className='grid grid-cols-2 gap-y-10 gap-4'>
            <img src="https://provisa.com.np/wp-content/uploads/2022/04/japan.jpg.webp" alt="" className='w-[100%] h-60 object-cover' />
            <img src="https://provisa.com.np/wp-content/uploads/2022/04/canal-g1228989ee_640.jpg.webp" alt="" className='w-[100%] h-60 object-cover' />
            <img src="https://provisa.com.np/wp-content/uploads/2020/09/jason-hafso-C2keINMOhIE-unsplash.jpg.webp" alt="" className='w-[100%] h-60 object-cover' />
            <img src="https://provisa.com.np/wp-content/uploads/2021/02/remi-thorel-304R7qkgHe8-unsplash.jpg.webp" alt="" className='w-[100%] h-60 object-cover' />
          </section>
        </div>
      </div>
    </main>
  )
}

export default StudyAbroad