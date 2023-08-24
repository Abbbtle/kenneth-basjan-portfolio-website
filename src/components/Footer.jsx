import React from 'react'
import {logo} from '../assets';
import FLine from './FLine';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaDiscord} from 'react-icons/fa';

const Footer = () => {
  return(
    <div>
      {/* horizontal footer line */}
      <div className='mt-40'>
        <FLine/>
      </div>

      <div className='ml-40 mr-40 mt-10 md:flex justify-between'>
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt='logo' className='w-80 h-auto object-contain' />
        </div>

        <div className='md:flex'>
          {/* Socials */}
          <div className='mr-20'>
            <h4 className='uppercase font-medium text-center text-[22px] mt-5 text-white'>Socials</h4>
            <div className='text-3xl mt-3 md:flex'>
              <FaLinkedin className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer md:mr-5'/>
              <FaGithub className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer md:mr-5 md:ml-5'/>
              <FaDiscord className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer md:ml-5'/>
            </div>
          </div>
          {/* Links */}
          <div className='ml-20'>
          <h4 className='uppercase font-medium text-[22px] mt-5 text-white text-center'>Links</h4>
            <ul className='text-center text-[18px] font-medium uppercase text-[#A1A1A1]'>
              <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer mb-1 mt-1'>About</li>
              <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer mb-1'>Services</li>
              <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer mb-1'>Work</li>
              <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer mb-1'>Testimonials</li>
              <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer mb-1'>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='text-[#808080] text-center mt-20 mb-10'>
        <p>© 2023 Kenneth Basjan. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer