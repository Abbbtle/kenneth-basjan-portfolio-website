import React from 'react';
import HorizontalRule from './HorizontalRule';
import Button1 from './Button1';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='uppercase text-[38px] sm:ml-3 sm:mr-3 sm:text-lg md:text-3xl lg:text-[45px] text-center font-bold'>
        <span>
          <h1>Elevate Your <br /><span className='text-[#906EF0]'>Digital Presence</span></h1>
        </span>
      </div>
      <div className='text-center font-semibold'>
        <h3 className='text-[46px] sm:ml-3 sm:mr-3 sm:text-2xl md:text-3xl lg:text-[48px]'>
          Welcome to the World of <span className='text-[#906EF0]'>Innovation</span> and <span className='text-[#906EF0]'>Functionality</span>
        </h3>
      </div>
      <div className='mx-10 sm:mx-5'>
        <HorizontalRule />
      </div>
      <div className='flex justify-between flex-col md:flex-row mx-10 items-center'>
        <p className='text-[20px] sm:text-center md:text-left sm:text-[15px] md:w-3/4 font-semibold'>
          Are you looking for a <span className='text-[#906EF0]'>dynamic</span> and <span className='text-[#906EF0]'>cutting-edge web presence</span>? Look no further! <br />
          I bring your <span className='text-[#906EF0]'>ideas to life</span> on the <span className='text-[#906EF0]'>digital canvas</span>. Let's <span className='text-[#906EF0]'>collaborate</span> and <span className='text-[#906EF0]'>build</span> <br />
          something <span className='text-[#906EF0]'>extraordinary together</span>!
        </p>
        <div className='mt-4 md:mt-0'>
          <Button1>Let's Talk</Button1>
        </div>
      </div>
    </div>
  );
};

export default Hero;