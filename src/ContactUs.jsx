import React from 'react'

function ContactUs() {
  return (
    <div className='relative max-w-5/6 mx-auto my-6 md:my-8 lg:my-16 cursor-default bg-[#FCD151] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden'>
        <img className='absolute top-0 left-0' src="src/assets/images/isolation-pic.png" alt="isolation-pic" />
        <div className='w-full p-10 text-center'>
            <h1 className='text-xl sm:text-3xl md:text-4xl font-extrabold leading-6 sm:leading-10 md:leading-12 tracking-wide'>Let's Revolutionise Your Infrastructure Performance</h1>
            <p className='text-sm text-gray-700 py-4'>Contact Golden Road today to let us know how we can help your business achieve its technology objectives.</p>
            <button className='bg-white px-8 py-2 rounded-full cursor-pointer'>Contact Us</button>
        </div>
        <img className='block sm:hidden lg:block absolute bottom-0 right-0 rotate-180' src="src/assets/images/isolation-pic.png" alt="isolation-pic" />
    </div>
  )
}

export default ContactUs