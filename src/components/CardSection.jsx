import React from 'react'

function CardSection() {
  return (
    <div className='max-w-5/6 mx-auto my-4 md:my-6 py-8 sm:py-12 flex flex-col items-center cursor-default'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold lg:max-w-[60%] text-center leading-8 sm:leading-10 md:leading-12 tracking-wide'>Get Experienced Support Wherever You Need It</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 mt-8 sm:mt-10 md:mt-12'>
            <div className='relative bg-[#FCD151] rounded-2xl text-center'>
                <img className='absolute top-0 left-1/2 -translate-1/2' src="src/assets/images/card-icon1.png" alt="card-icon1" />
                <h1 className='text-xl font-bold px-6 pt-18 pb-4'>IT Consulting</h1>
                <p className='px-6 pb-24 text-sm text-gray-600'>Our IT consulting services are designed to pinpoint existing technological inefficiencies and turn them into strengths through tailored growth roadmaps that help you achieve your objectives.</p>
                <div className='absolute w-full h-px bg-gray-500 bottom-12 left-1/2 -translate-1/2'>
                    <button className='-translate-y-1/2 border border-gray-500 bg-[#FCD151] cursor-pointer px-6 py-1 rounded-full'>Learn More</button>
                </div>
            </div>
            <div className='relative bg-[#ffeaaa] rounded-2xl text-center'>
                <img className='absolute top-0 left-1/2 -translate-1/2' src="src/assets/images/card-icon2.png" alt="card-icon2" />
                <h1 className='text-xl font-bold px-6 pt-18 pb-4'>Software Development</h1>
                <p className='px-6 pb-24 text-sm text-gray-600'>Our end-to-end software development services equip businesses with high-performing, bespoke applications across devices, operating systems, and platforms.</p>
                <div className='absolute w-full h-px bg-gray-500 bottom-12 left-1/2 -translate-1/2'>
                    <button className='-translate-y-1/2 border border-gray-500 bg-[#ffeaaa] cursor-pointer px-6 py-1 rounded-full'>Learn More</button>
                </div>
            </div>
            <div className='relative bg-[#FCD151] sm:bg-[#ffeaaa] lg:bg-[#FCD151] rounded-2xl text-center'>
                <img className='absolute top-0 left-1/2 -translate-1/2' src="src/assets/images/card-icon3.png" alt="card-icon3" />
                <h1 className='text-xl font-bold px-6 pt-18 pb-4'>Network Security & Monitoring</h1>
                <p className='px-6 pb-24 text-sm text-gray-600'>Your network is your business's lifeline. Treat it with care through all-encompassing security and monitoring services that bolster network resiliency, health, longevity, and performance.</p>
                <div className='absolute w-full h-px bg-gray-500 bottom-12 left-1/2 -translate-1/2'>
                    <button className='-translate-y-1/2 border border-gray-500 bg-[#FCD151] sm:bg-[#ffeaaa] lg:bg-[#FCD151] cursor-pointer px-6 py-1 rounded-full'>Learn More</button>
                </div>
            </div>
            <div className='relative bg-[#ffeaaa] sm:bg-[#FCD151] lg:bg-[#ffeaaa] rounded-2xl text-center'>
                <img className='absolute top-0 left-1/2 -translate-1/2' src="src/assets/images/card-icon4.png" alt="card-icon4" />
                <h1 className='text-xl font-bold px-6 pt-18 pb-4'>Disaster Recovery</h1>
                <p className='px-6 pb-24 text-sm text-gray-600'>Withstand any shock with Golden Road! We'll identify your vulnerabilities, plan around them, and execute your recovery strategies to ensure your data and systems remain uncompromised.</p>
                <div className='absolute w-full h-px bg-gray-500 bottom-12 left-1/2 -translate-1/2'>
                    <button className='-translate-y-1/2 border border-gray-500 bg-[#ffeaaa] sm:bg-[#FCD151] lg:bg-[#ffeaaa] cursor-pointer px-6 py-1 rounded-full'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardSection