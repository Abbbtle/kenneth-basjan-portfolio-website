import React from 'react';
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import Button1 from './Button1';

const NavbarMobile = ({showMenu, active}) =>{
  return (
    <div>
        <ul className={active ? 'md:hidden z-10 flex flex-col items-center fixed inset-0 left-1/4 justify-center uppercase gap-8 p-8 bg-black/30 backdrop-blur-lg ' : 'hidden'}>
            <CgClose onClick={ showMenu } className='text-2xl cursor-pointer'/>
            <li className='hover:text-[#906EF0] hover:animate-pulse'><Link to='/' className='cursor-pointer'>About</Link></li>
            <li className='hover:text-[#906EF0] hover:animate-pulse'><Link to='/' className='cursor-pointer'>Services</Link></li>
            <li className='hover:text-[#906EF0] hover:animate-pulse'><Link to='/' className='cursor-pointer'>Work</Link></li>
            <li className='hover:text-[#906EF0] hover:animate-pulse'><Link to='/' className='cursor-pointer'>Testimonials</Link></li>
            <Button1><Link to='/' className='hover:text-white cursor-pointer'>Contact</Link></Button1>
        </ul>
    </div>
  );
};

export default NavbarMobile