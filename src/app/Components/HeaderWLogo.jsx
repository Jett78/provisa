import React from 'react'
import { IoCall } from "react-icons/io5";

const HeaderWLogo = () => {
  return (
    <main>
        <div className='flex flex-wrap items-center md:justify-between justify-center max-w-[1100px] md:mx-auto mx-2 border-b my-2'>
            <figure className='w-60'>
                <img src="https://provisa.com.np/wp-content/uploads/2022/08/logo_provisa@3x_corrected-e1659629955744.png" alt="logo" />
            </figure>
            <section className='flex items-center gap-20 mb-2'>
                <div className='flex items-center'>
                <IoCall className='text-4xl' />
                <div>
                    <p className='text-sm'>Speak with us</p>
                    <h2 className='font-semibold text-[#F4310A] text-l'>+9779851101782</h2>
                </div>
                </div>
                <button className='bg-[#F4310A] hover:bg-[#2D1D54] duration-300 text-white md:p-3 p-1 text-sm'>Book an Appointment</button>
            </section>
        </div>
    </main>
  )
}

export default HeaderWLogo