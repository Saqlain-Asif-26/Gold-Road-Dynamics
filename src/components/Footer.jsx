import React from 'react'
import ContactUs from '../ContactUs'

function Footer() {
  return (
    <div className='bg-[#FFF8E3] relative mt-48'>
        <div className='absolute -top-48 w-full'>
            <ContactUs />
        </div>
        <div className='max-w-5/6 mx-auto md:mt-8 lg:mt-16 pt-56 sm:pt-28 md:pt-36 lg:pt-48 pb-8 cursor-default flex flex-col items-center gap-8'>
            <img src="src/assets/images/logo.png" alt="logo" />
            <div className='w-full md:flex justify-between items-center gap-4 text-sm text-center md:text-start'>
                <p><span className='font-bold'>Address:</span> XCOMPANYADDRESSX</p>
                <p className='sm:text-nowrap'>Privacy Policy - Terms & Conditions - Cookie Policy</p>
                <p><span className='font-bold'>Email:</span> XCOMPANYEMAILX</p>
            </div>
        </div>
        <p className='bg-[#ffeaaa] text-sm text-center p-4 tracking-wider'>© 2025 Gold Road Dynamics, All Rights Reserved</p>
    </div>
  )
}

export default Footer