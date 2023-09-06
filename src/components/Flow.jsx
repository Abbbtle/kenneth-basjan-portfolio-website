import React from 'react'
import HorizontalRule from './HorizontalRule';

const Flow = () => {
  return (
    <div className='mt-40 md:mr-20 md:flex justify-between'>

      <div className='uppercase text-[35px] font-bold text-center md:ml-14'>
        <h1>My Work <br /><span className='text-[#906EF0]'>Flow</span></h1>
      </div>

      <div className='mx-30'>
        {/* Vertical Timeline */}
        <ol className="relative border-l-[4px] border-gray-200">                  
            <li className="mb-10  ">            
                <span className="absolute flex items-center justify-center mt-1 w-8 h-8 rounded-full -left-5 ring-4 ring-white dark:bg-[#1E1E1E]">
                  1
                </span>
                <h3 className='text-4xl font-semibold text-white ml-8 uppercase'>
                  Discusion With Me
                  <div className='mr-[480px] mt-[-20px]'><HorizontalRule/></div>
                </h3>
                <p className="mb-4 ml-8 text-base font-normal text-white">
                The primary objective is to gain a comprehensive understanding of my client's business, aspirations, objectives, 
                and obstacles in order to provide the most effective assistance and support tailored to their specific needs.
                </p>
            </li>
            
        </ol>

      </div>
    </div>
  );
};

export default Flow