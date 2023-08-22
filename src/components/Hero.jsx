import React from 'react';
import HorizontalRule from './HorizontalRule';
import Button1 from './Button1';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='uppercase text-[38px] text-center font-bold'>
        <h1>Elevate Your <br/><span className='text-[#906EF0]'>Digital Presence</span></h1>
      </div>
      <div className='text-center font-semibold'>
        <h3 className='text-[46px]'>Welcome to the World of <span className='text-[#906EF0]'>Innovation</span> and <span className='text-[#906EF0]'>Functionality</span></h3>
      </div>
      <div className='mx-10'>
        <HorizontalRule/>
      </div>
      <div className='flex justify-between mx-10 items-center'>
        <p className='text-[20px] font-semibold'>
          Are you looking for a <span className='text-[#906EF0]'>dynamic</span> and <span className='text-[#906EF0]'>cutting-edge web presence</span>? Look no further! <br/>
          I bring your <span className='text-[#906EF0]'>ideas to life</span> on the <span className='text-[#906EF0]'></span>digital canvas. Let's <span className='text-[#906EF0]'>collaborate</span> and <span className='text-[#906EF0]'>build</span> <br/>
          something <span className='text-[#906EF0]'>extraordinary together</span>!
        </p>
        <div>
          <Button1>Let's Talk</Button1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
