import React from 'react'
import { presentation } from '../assets'
import HorizontalRule from './HorizontalRule';

const Info = () => {
  return (
    <div>
      {/* Background Image */}
      <div className='w-full h-auto mt-40'>
        <img src= {presentation} alt="" />
      </div>

      {/* Big Text */}
      <div>
        {/* More Info Heading */} 
      <h2 className='text-[72px] font-bold text-white uppercase text-center mt-40 mb-[-40px]'>
        Crafting tailored
      </h2>
      <h2 className='text-[72px] font-bold text-[#906EF0] uppercase text-center'>
        Digital Solutions
        <div className='mr-[320px] ml-[320px] mt-[-40px]'><HorizontalRule/></div>
      </h2>
      <p className='text-[48px] font-bold text-center mr-24 ml-24'>
        In the <span className='text-[#906EF0]'>ever-evolving digital landscape</span>, I offer a range of 
        <span className='text-[#906EF0]'> bespoke services</span> to meet your <span className='text-[#906EF0]'>specific needs</span>. 
        Whether you're an <span className='text-[#906EF0]'>ambitious startup</span> or an <span className='text-[#906EF0]'>established enterprise</span>, 
        my expertise covers the <span className='text-[#906EF0]'>full spectrum of web development</span>. 
        From <span className='text-[#906EF0]'>captivating front-end design</span> to 
        <span className='text-[#906EF0]'> robust back-end functionality</span>, I <span className='text-[#906EF0]'>tailor each project</span> to 
        match your <span className='text-[#906EF0]'>unique requirements</span>. 
        <span className='text-[#906EF0]'> Embrace innovation</span> and let's embark on a <span className='text-[#906EF0]'>transformative journey together</span>.
      </p>
      </div>
    </div>
  );
};

export default Info