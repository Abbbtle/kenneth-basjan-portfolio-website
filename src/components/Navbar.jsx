import React from 'react';
import {logo} from '../assets';
import Button1 from './Button1';

function Navbar() {
  return (
    <nav className='flex justify-between'>
        <div>
          <div className="logo">
          <img src={logo} alt='logo' className='w-40 h-auto object-contain' />
          </div>
        </div>

        <div className='px-auto mx-0'>
            <ul className='flex justify-around flex-row text-white text-[18px] uppercase'>
                <li>About</li>
                <li>Services</li>
                <li>Work</li>
                <li>Testimonials</li>
                <Button1>Contact</Button1>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar