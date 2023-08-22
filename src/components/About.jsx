import React from 'react'
import { kenneth1 } from '../assets';
import HorizontalRule from './HorizontalRule';
import {LuGraduationCap} from "react-icons/lu";

const About = () => {
  return (
    <div name='about' className='bg-white mx-10 mt-10 pb-10 pt-1 rounded-3xl'>
      <div className='mx-10 mt-10'>

        <h2 className='text-5xl font-bold text-black'>Meet Kenneth Basjan</h2>
        <h4 className='text-3xl font-bold text-[#4E30A5]'>Your Web Development Partner</h4>

        <div className='md:flex mt-10 items-center'>

          <img src={kenneth1} alt="Kenneth Basjan" className='w-80 h-auto object-contain rounded-3xl'/>

          <p className='text-black font-medium md:ml-11 text-[20px]'>
            I have always been captivated by the <span className='text-[#4E30A5]'>boundless possibilities</span> that the digital world offers. 
            With <span className='text-[#4E30A5]'>experience</span> as a <span className='text-[#4E30A5]'>MERN Stack web developer</span>, I have honed my skills to create websites that 
            marry <span className='text-[#4E30A5]'>stunning design</span> with <span className='text-[#4E30A5]'>robust functionality</span>. From concept to execution, I thrive on transforming 
            your visions into reality. My relentless pursuit of <span className='text-[#4E30A5]'>innovation and passion</span> for crafting <span className='text-[#4E30A5]'>exceptional online experiences </span> 
            drive me to stay at the <span className='text-[#4E30A5]'>forefront</span> of the <span className='text-[#4E30A5]'>ever-evolving</span> web development landscape.
          </p>

        </div>

         
        <div className='bg-[#1E1E1E] mt-10 rounded-3xl p-10'>

          {/* Education Heading */}
          <h3 className='text-4xl font-semibold text-white'>
            Education
            <div className='mr-[960px] mt-[-20px]'><HorizontalRule/></div>
          </h3>

          {/* Institution 1 Details */}
          <div className='flex'>
            <div className='mr-5 text-[25px] text-white'>
            <LuGraduationCap/>
            </div>
            <div>
              <p className='text-[18px] font-semibold text-white'>National Diploma in Information Technology</p>
              <p className='text-white text-[16px]'>Central University of Technology: Bloemfontein</p>
              <p className='text-[#906EF0]'>Jan 2016 - Nov 2019</p>
            </div>
          </div>

          {/* Institution 2 Details */}
          <div className='flex mt-10'>
            <div className='mr-5 text-[25px] text-white'>
            <LuGraduationCap/>
            </div>
            <div>
              <p className='text-[18px] font-semibold text-white'>Creative Business 101 for Videographers</p>
              <p className='text-white text-[16px]'>ORMS Cape Town School of Photography</p>
              <p className='text-[#906EF0]'>Aug 2021</p>
            </div>
          </div>

          

        </div>

      </div>
    </div>
  );
};

export default About