import React from 'react'
import { IoCall } from "react-icons/io5";

const HeaderWLogo = () => {
  return (
    <main>
        <div className='flex items-center justify-between w-[1100px] mx-auto border-b my-2'>
            <figure className='w-60'>
                <img src="https://provisa.com.np/wp-content/uploads/2022/08/logo_provisa@3x_corrected-e1659629955744.png" alt="logo" />
            </figure>
            <section className='flex items-center gap-20'>
                <div className='flex items-center'>
                <IoCall className='text-4xl' />
                <div>
                    <p className='text-sm'>Speak with us</p>
                    <h2 className='font-semibold text-[#F4310A] text-l'>+9779851101782</h2>
                </div>
                </div>
                <button className='bg-[#F4310A] text-white p-3'>Book an Appointment</button>
            </section>
        </div>
    </main>
  )
}

export default HeaderWLogo