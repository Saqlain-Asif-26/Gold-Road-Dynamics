import React from 'react'

function PartnerSection() {
  return (
    <div className='max-w-5/6 mx-auto my-4 md:my-6 cursor-default'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold lg:max-w-[60%] text-center leading-8 sm:leading-10 md:leading-12 tracking-wide mb-6 lg:mb-12'>A Partner In Every Challenge</h1>
            <div className='md:w-1/2 text-center md:text-left'>
                <p className='text-gray-700 text-sm mb-4'>Technology moves quickly, and so do the obstacles that come with it. Golden Road Dynamics approaches every challenge as an opportunity to strengthen and sharpen your operations. Through open communication, diligent support, and a focus on long-term outcomes, we ensure your business is prepared for whatever lies ahead. See more about who we are!</p>
                <button className='bg-[#FCD151] px-8 py-2 rounded-full'>See More</button>
            </div>
        </div>
        <div className='mt-10 sm:flex justify-between items-center gap-8'>
          <div className='w-full sm:w-1/2 h-72 sm:h-96 rounded-xl overflow-hidden bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("src/assets/images/challenge-pic.jpg")] bg-cover'></div>
          <div className='w-full sm:w-1/2 mt-6 text-center sm:text-start sm:mt-0'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold leading-8 sm:leading-10 md:leading-12 tracking-wide mb-8 sm:mb-10 md:mb-12'>Take Your Next Step With Confidence</h1>
            <p className='text-sm text-gray-700'>At Golden Road Dynamics, we're about more than today. We're also about arming your business with the insight, technologies, and roadmaps that it can use to navigate the challenges of tomorrow more effectively. Whether we're working to optimise your network security or build a new, cutting-edge application from the ground up, we always work with your best interests at heart to ensure that you can take every one of your next steps in complete confidence.</p>
          </div>
        </div>
    </div>
  )
}

export default PartnerSection