import React, { useState } from 'react';

function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className='relative bg-[url("src/assets/images/hero-section.png")] bg-cover bg-center w-full h-screen cursor-default'>
        <div className='max-w-5/6 mx-auto h-full flex flex-col justify-center'>
            <h1 className='sm:leading-14 md:leading-18 lg:leading-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white'>Walk The Road To<span className='block font-medium text-[#FCD151]'>Exceptional IT</span>Performance</h1>
            <p className='text-gray-300 text-sm sm:text-[16px] py-4 w-80% lg:w-[65%]'>Golden Road Dynamics is an inspired IT support firm dedicated to serving our diverse clients' infrastructure needs. Our teams are aligned in vision and purpose: to transform underperforming IT technologies into dynamic catalysts for growth and development.</p>
            <p className='text-gray-300 text-sm sm:text-[16px] w-80% lg:w-[65%]'>Whether your business has just begun its quest for exceptional IT performance or has encountered obstacles that need a helping hand to overcome effectively, our teams are here for you, working tirelessly in the background to achieve your goals.</p>
        </div>
        <div onClick={() => setMenuOpen(true)} className='absolute bottom-0 left-1/2 -translate-x-1/2 text-sm sm:text-xl bg-[#FCD151] px-8 sm:px-16 py-4 rounded-t-3xl inline-flex gap-1 sm:gap-2 items-center justify-center cursor-pointer'>
            <p className='text-nowrap'>Scroll Down</p>
            <div className='flex justify-center items-center'>
                <div className='h-0.5 w-2 sm:w-4 bg-black rounded-full rotate-45'></div>
                <div className='h-0.5 w-2 sm:w-4 bg-black rounded-full -rotate-45 -ml-1 sm:-ml-1.5'></div>
            </div>
        </div>
    </div>
    {/* menu overlay */}
        <div className={`fixed inset-0 bg-[#FFFCF2] z-50 h-screen overflow-hidden flex items-stretch justify-center transition-transform duration-1000 ease-in-out ${menuOpen ? 'translate-y-0 overflow-auto' : '-translate-y-full overflow-hidden'}`}>

            <div className='py-7 hide-scrollbar overflow-y-scroll h-screen'>
                <div className='flex flex-col text-xl sm:text-3xl lg:text-5xl font-extrabold gap-4 sm:gap-8 md:gap-10 lg:gap-12 text-start items-start px-6 md:px-12'>
                    
                    <div className='inline-flex gap-3 border-2 px-6 py-2 rounded-full cursor-pointer' onClick={() => setMenuOpen(false)}>
                        <div className='flex flex-col justify-center items-center w-6 relative'>
                            <div className='rounded-full absolute w-full h-0.5 bg-black rotate-45'></div>
                            <div className='rounded-full absolute w-full h-0.5 bg-black -rotate-45'></div>
                        </div>
                        <p className='font-semibold text-lg'>Close</p>
                    </div>

                    <h1 className='cursor-pointer'>HOME</h1>
                    <h1 className='cursor-pointer'>OUR TEAM</h1>
                    <h1 className='cursor-pointer'>IT CONSULTING</h1>
                    <h1 className='cursor-pointer'>SOFTWARE DEVELOPMENT</h1>
                    <h1 className='cursor-pointer'>NETWORK SECURITY & <br /> MONITORING</h1>
                    <h1 className='cursor-pointer'>DISASTER RECOVERY</h1>
                    <h1 className='cursor-pointer'>REACH US</h1>
                </div>
            </div>

            <div className='hidden md:flex w-150 h-screen overflow-y-scroll hide-scrollbar flex-col gap-6 mr-16'>
                <img className='h-100 object-cover' src="src/assets/images/menu-pic1.jpg" alt="menu-pic1" />
                <img className='h-100 object-cover' src="src/assets/images/menu-pic2.jpg" alt="menu-pic2" />
                <img className='h-100 object-cover' src="src/assets/images/menu-pic3.jpg" alt="menu-pic3" />
                <img className='h-100 object-cover' src="src/assets/images/menu-pic4.jpg" alt="menu-pic4" />
                <img className='h-100 object-cover' src="src/assets/images/menu-pic5.jpg" alt="menu-pic5" />
                <img className='h-100 object-cover' src="src/assets/images/menu-pic6.jpg" alt="menu-pic6" />
                <img className='h-100 object-cover' src="src/assets/images/menu-pic7.jpg" alt="menu-pic7" />
            </div>
        </div>
    </>
  )
}

export default HeroSection