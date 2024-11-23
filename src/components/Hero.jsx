import React from 'react';
import HorizontalRule from './HorizontalRule';
import Button1 from './Button1';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div 
    data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-duration="300" data-aos-offset="0"
      className='flex flex-col justify-center'>
      <div className='uppercase text-[38px] sm:ml-3 sm:mr-3 sm:text-lg md:text-3xl lg:text-[45px] text-center font-bold'>
        <span>
          <h1>Elevate Your <br /><span className='text-[#906EF0]'>Digital Presence</span></h1>
        </span>
      </div>
      <div className='text-center font-semibold'>
        <h3 
          data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-duration="300" data-aos-offset="0" 
          className='text-[46px] sm:ml-3 sm:mr-3 sm:text-2xl md:text-3xl lg:text-[48px]'>
          Welcome to the World of <span className='text-[#906EF0]'>Innovation</span> and <span className='text-[#906EF0]'>Functionality</span>
        </h3>
      </div>
      <div 
        data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-duration="300" data-aos-offset="0"
        className='mx-2 md:mx-6'>
        <HorizontalRule />
      </div>
      <div className='flex justify-between flex-col md:flex-row mx-2 md:mx-10 items-center'>
        <p 
          data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-duration="600" data-aos-offset="0"
          className='text-lg md:text-[20px] text-center md:text-left md:w-3/4 font-semibold'>
          Are you looking for a <span className='text-[#906EF0]'>dynamic</span> and <span className='text-[#906EF0]'>cutting-edge web presence</span>? Look no further! <br />
          I bring your <span className='text-[#906EF0]'>ideas to life</span> on the <span className='text-[#906EF0]'>digital canvas</span>. Let's <span className='text-[#906EF0]'>collaborate</span> and <span className='text-[#906EF0]'>build</span> <br />
          something <span className='text-[#906EF0]'>extraordinary together</span>!
        </p>
        <div className='mt-4 md:mt-0'>
        <a href='https://drive.google.com/uc?export=download&id=1C4kEOSvlX0_l_Vy_jqfPVRYt0dIKqFwY' target="_blank" rel="noopener noreferrer" className='hover:text-white cursor-pointer'><Button1>Download CV</Button1></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;