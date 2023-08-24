import React from 'react'
import HorizontalRule from './HorizontalRule'

const Contact = () => {
  return (
    <div>
      {/* Contact Heading */}
      <h2 className='text-[72px] font-bold text-white mt-10 uppercase text-center'>
          Let's start <span className='text-[#906EF0]'>building</span> your<span className='text-[#906EF0]'>vision</span>
          <div className='mr-[75px] ml-[75px] mt-[-40px]'><HorizontalRule/></div>
      </h2>
    </div>
  );
};

export default Contact