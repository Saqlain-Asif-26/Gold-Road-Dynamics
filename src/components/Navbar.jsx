import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='relative'>
      {/* Navbar */}
      <div className='flex justify-between items-center max-w-5/6 mx-auto py-4 md:py-6'>
        <img className='cursor-pointer' src="/Gold-Road-Dynamics/images/logo.png" alt="logo" />
        <div 
          className='flex gap-3 border-2 px-6 py-2 rounded-full cursor-pointer'
          onClick={() => setMenuOpen(true)}
        >
          <div className='w-4 flex flex-col justify-center gap-1 items-center'>
            <div className='rounded-full bg-black w-full h-0.5'></div>
            <div className='rounded-full bg-black w-2/3 h-0.5'></div>
            <div className='rounded-full bg-black w-1/3 h-0.5'></div>
          </div>
          <p className='font-semibold text-lg'>Menu</p>
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
                <img className='h-100 object-cover' src="/Gold-Road-Dynamics/images/menu-pic1.jpg" alt="menu-pic1" />
                <img className='h-100 object-cover' src="/Gold-Road-Dynamics/images/menu-pic2.jpg" alt="menu-pic2" />
                <img className='h-100 object-cover' src="/Gold-Road-Dynamics/images/menu-pic3.jpg" alt="menu-pic3" />
                <img className='h-100 object-cover' src="/Gold-Road-Dynamics/images/menu-pic4.jpg" alt="menu-pic4" />
                <img className='h-100 object-cover' src="/Gold-Road-Dynamics/images/menu-pic5.jpg" alt="menu-pic5" />
                <img className='h-100 object-cover' src="/Gold-Road-Dynamics/images/menu-pic6.jpg" alt="menu-pic6" />
                <img className='h-100 object-cover' src="/Gold-Road-Dynamics/images/menu-pic7.jpg" alt="menu-pic7" />
            </div>
        </div>
    </div>
  );
}

export default Navbar;
