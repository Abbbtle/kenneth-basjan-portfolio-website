import React from 'react'
import {logo} from '../assets';
import FLine from './FLine';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaDiscord} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return(
    <div>
      {/* horizontal footer line */}
      <div className='mt-40'>
        <FLine/>
      </div>

      <div className=' md:mx-40 mt-10 flex flex-col md:flex-row items-center md:items-start justify-between '>
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt='logo' className='w-60 md:w-80 h-auto object-contain' />
        </div>

        <div className='md:flex'>
          {/* Socials */}
          <div className='md:mr-20'>
            <h4 className='uppercase font-medium text-center text-[22px] mt-5 text-white'>Socials</h4>
            <div className='text-3xl mt-3 flex items-center md:flex-col md:space-y-7 space-x-10 md:space-x-0'>
              <FaLinkedin className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer'/>
              <FaGithub className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer'/>
              <FaDiscord className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer'/>
            </div>
          </div>
          {/* Links */}
          <div className='md:ml-20'>
          <h4 className='uppercase font-medium text-[22px] mt-5 text-white text-center'>Links</h4>
            <ul className='text-center text-[20px] font-medium uppercase'>
              <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer mb-1 mt-1'><Link to='about' smooth={true} duration={2000} className='text-[#A1A1A1] cursor-pointer'>About</Link></li>
              <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer mb-1'><Link to='services' smooth={true} duration={1800} className='text-[#A1A1A1] cursor-pointer'>Services</Link></li>
              <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer mb-1'><Link to='work' smooth={true} duration={1400} className='text-[#A1A1A1] cursor-pointer'>Work</Link></li>
              <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer mb-1'><Link to='testimonials' smooth={true} duration={1200} className='text-[#A1A1A1] cursor-pointer'>Testimonials</Link></li>
              <li className='hover:text-[#906EF0] hover:animate-pulse cursor-pointer mb-1'><Link to='contact' smooth={true} duration={1000} className='text-[#A1A1A1] cursor-pointer'>Contact</Link></li>
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