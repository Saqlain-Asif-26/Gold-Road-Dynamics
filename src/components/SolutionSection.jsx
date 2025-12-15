import React from 'react'

function SolutionSection() {
  return (
    <div className='max-w-5/6 mx-auto my-4 md:my-6 py-8 sm:py-12 flex flex-col items-center cursor-default'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold lg:max-w-[60%] text-center leading-8 sm:leading-10 md:leading-12 tracking-wide mb-8 sm:mb-10 md:mb-12'>Comprehensive Solutions Built For Resilience</h1>
        <div className='bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/Gold-Road-Dynamics/images/solution-bg.jpg")] bg-cover bg-right sm:bg-center flex flex-col items-center rounded-2xl'>
            <img className='py-32 sm:py-44 md:py-52' src="/Gold-Road-Dynamics/images/solution-icon.png" alt="solution-icon" />
            <div className='bg-[#ffeaaa] p-6 text-center flex justify-center rounded-b-xl'>
                <p className='sm:max-w-[80%] lg:max-w-[60%] text-sm text-gray-700'>At Golden Road Dynamics, success begins with a strong foundation. That is why we do not simply apply quick fixes — we build comprehensive, scalable IT frameworks that support sustainable business growth. Our teams stay with you through every phase of improvement, offering guidance and support to ensure your infrastructure remains robust, efficient, and future-ready.</p>
            </div>
        </div>
    </div>
  )
}

export default SolutionSection