import React from 'react'
import HorizontalRule from './HorizontalRule';

const Services = () => {
  return (
    <div>
      {/* Services Heading */}
      <h2 className='text-[72px] font-semibold text-white mt-10 uppercase text-center'>
          What I do <span className='text-[#906EF0]'>best</span>
          <div className='mr-[405px] ml-[405px] mt-[-40px]'><HorizontalRule/></div>
      </h2>
      <p className='font-semibold text-center text-[20px]'>
      Discover an Array of <span className='text-[#906EF0]'>Expert Services Customized</span> for Your <span className='text-[#906EF0]'>Needs</span>
      </p>
    </div>
  );
};

export default Services