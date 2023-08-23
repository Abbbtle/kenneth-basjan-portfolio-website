import React from 'react'
import HorizontalRule from './HorizontalRule'

const Work = () => {
  return (
    <div>
      {/* Work Heading */} 
      <h2 className='text-[72px] font-bold text-white uppercase text-center mt-40 mb-[-40px]'>
        Exploring
      </h2>
      <h2 className='text-[72px] font-bold text-[#906EF0] uppercase text-center'>
        Past Creations
        <div className='mr-[390px] ml-[390px] mt-[-40px]'><HorizontalRule/></div>
      </h2>
      <p className='font-medium text-center text-[20px] mr-20 ml-20'>
        Take a glimpse into a few of my past projects, where <span className='text-[#906EF0]'>creativity meets functionality </span>  
        in a seamless dance. Each website represents a <span className='text-[#906EF0]'>unique challenge </span>
        that I <span className='text-[#906EF0]'>embraced with enthusiasm</span>, ensuring that every line of code and 
        pixel was meticulously curated. As you browse through these <span className='text-[#906EF0]'>creations</span>, 
        you'll witness my <span className='text-[#906EF0]'>commitment to excellence</span> and an <span className='text-[#906EF0]'>unwavering dedication </span> 
        to delivering digital solutions that leave a <span className='text-[#906EF0]'>lasting impact</span>.
      </p>
    </div>
  );
};

export default Work