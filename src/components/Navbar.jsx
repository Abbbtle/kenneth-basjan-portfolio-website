import React from 'react';
import {logo} from '../assets';
import Button1 from './Button1';

function Navbar() {
  return (
    <nav className='flex justify-between p-4 items-center font-medium'>
        <div>
          <div className="logo">
          <img src={logo} alt='logo' className='w-40 h-auto object-contain' />
          </div>
        </div>

        <div className='mx-10'>
            <ul className='md:flex justify-around flex-row items-center text-white text-[18px] uppercase gap-8'>
                <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer'>About</li>
                <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer'>Services</li>
                <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer'>Work</li>
                <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer'>Testimonials</li>
                <Button1>Contact</Button1>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar