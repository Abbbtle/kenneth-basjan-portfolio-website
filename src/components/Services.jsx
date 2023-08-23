import React from 'react'
import HorizontalRule from './HorizontalRule';

const Services = () => {
  return (
    <div>
      {/* Services Heading */}
      <h2 className='text-[72px] font-bold text-white mt-10 uppercase text-center'>
          What I do <span className='text-[#906EF0]'>best</span>
          <div className='mr-[405px] ml-[405px] mt-[-40px]'><HorizontalRule/></div>
      </h2>
      <p className='font-medium text-center text-[20px]'>
        Discover an array of <span className='text-[#906EF0]'>expert services customized</span> for your <span className='text-[#906EF0]'>needs</span>
      </p>
    </div>
  );
};

export default Services