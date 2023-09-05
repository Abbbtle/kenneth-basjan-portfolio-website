import React from 'react'
import { kenneth1 } from '../assets';
import HorizontalRule from './HorizontalRule';
import {LuGraduationCap} from "react-icons/lu";
import {FaUserTie} from "react-icons/fa";
import TechStack from './TechStack';
import Button2 from './Button2';
import Popup from "./Popup";
import '../index.css'

const About = () => {
  return (
    <div name='about' className='bg-white mx-10 mt-10 pb-10 pt-1 rounded-3xl shadow-inner shadow-black'>
      <div className='mx-10 mt-10'>

        <h2 className='text-5xl font-bold text-black'>Meet Kenneth Basjan</h2>
        <h4 className='text-3xl font-bold text-[#4E30A5]'>Your Web Development Partner</h4>

        <div className='md:flex mt-10 items-center'>

          <img data-aos="zoom-in" data-aos-duration="1500" src={kenneth1} alt="Kenneth Basjan" className='w-80 h-auto object-contain rounded-3xl'/>

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
          <div className='flex items-center'>
            <div className='mr-5 text-[25px] text-white'>
            <LuGraduationCap/>
            </div>
            <div>
              <p className='text-[18px] font-semibold text-white'>National Diploma in Information Technology</p>
              <p className='text-white text-[16px]'>Central University of Technology: Bloemfontein</p>
              <p className='text-[#906EF0]'>Jan 2016 - Nov 2019</p>
              <div className='flex mt-2'>
                <div className='md:mr-2'>
                  <Popup>
                      What I learnt:<br/><br/>
                      - Programming languages (e.g. Java, C#, JavaScript).<br/>
                      - Algorithms and data structures.<br/>
                      - Object-oriented programming concepts (e.g. inheritance, polymorphism).<br/>
                      - Software design principles and patterns.<br/>
                      - Mobile app development (Android Studio).<br/>
                      - Software project management (e.g. project planning, estimation, risk management).<br/>
                  </Popup>
                </div>
                <div className='md:ml-2'><Button2><a href="https://www.cut.ac.za/campus/1/bloemfontein" target='_blank' rel="noopener noreferrer">Go To Website</a></Button2></div>
              </div>
            </div>
          </div>

          {/* Institution 2 Details */}
          <div className='flex mt-10 items-center'>
            <div className='mr-5 text-[25px] text-white'>
            <LuGraduationCap/>
            </div>
            <div>
              <p className='text-[18px] font-semibold text-white'>Creative Business 101 for Videographers</p>
              <p className='text-white text-[16px]'>ORMS Cape Town School of Photography</p>
              <p className='text-[#906EF0]'>Aug 2021</p>
              <div className='flex mt-2'>
                <div className='md:mr-2'>
                  <Popup>
                  What I learnt:<br/><br/>
                    - Understanding the video production process (e.g. pre-production, production, post-production).<br/>
                    - Business planning and budgeting for video projects.<br/>
                    - Branding and marketing for videographers.<br/>
                    - Legal and ethical considerations in videography (e.g. contracts, copyrights, model releases).<br/>
                    - Technical skills and techniques for video production (e.g. camera settings, lighting setups, editing software).<br/>
                    - Networking and collaboration in the videography industry.<br/>
                  </Popup>
                </div>
                <div className='md:ml-2'><Button2><a href="https://www.ormsdirect.co.za/pages/ctsp" target='_blank' rel="noopener noreferrer">Go To Website</a></Button2></div>
              </div>
            </div>
          </div>

          {/* Experience Heading */}
          <h3 className='text-4xl font-semibold text-white mt-10'>
            Experience
            <div className='mr-[945px] mt-[-20px]'><HorizontalRule/></div>
          </h3>

          {/* Work Experience 1 Details */}
          <div className='flex items-center'>
            <div className='mr-5 text-[25px] text-white'>
            <FaUserTie/>
            </div>
            <div>
              <p className='text-[18px] font-semibold text-white'>Founder</p>
              <p className='text-white text-[16px]'>Weberu</p>
              <p className='text-[#906EF0]'>Nov 2021 - Present</p>
              <div className='flex mt-2'>
                <div className='md:mr-2'><Popup>Description</Popup></div>
                <div className='md:ml-2'><Button2>Go To Website</Button2></div>
              </div>
            </div>
          </div>

          {/* Work Experience 2 Details */}
          <div className='flex mt-10 items-center'>
            <div className='mr-5 text-[25px] text-white'>
            <FaUserTie/>
            </div>
            <div>
              <p className='text-[18px] font-semibold text-white'>Junior Software Developer Intern</p>
              <p className='text-white text-[16px]'>UVU Africa - Capaciti Division</p>
              <p className='text-[#906EF0]'>Jan 2023 - July 2023</p>
              <div className='flex mt-2'>
                <div className='md:mr-2'><Popup>Description</Popup></div>
                <div className='md:ml-2'><Button2>Go To Website</Button2></div>
              </div>
            </div>
          </div>

          {/* Work Experience 3 Details */}
          <div className='flex mt-10 items-center'>
            <div className='mr-5 text-[25px] text-white'>
            <FaUserTie/>
            </div>
            <div>
              <p className='text-[18px] font-semibold text-white'>Junior Software Developer</p>
              <p className='text-white text-[16px]'>Younglings Africa</p>
              <p className='text-[#906EF0]'>July 2023 - Present</p>
              <div className='flex mt-2'>
                <div className='md:mr-2'><Popup>Description</Popup></div>
                <div className='md:ml-2'><Button2>Go To Website</Button2></div>
              </div>
            </div>
          </div>

          {/* Tech Stack Heading */}
          <h3 className='text-4xl font-semibold text-white mt-10'>
            Tech Stack
            <div className='mr-[940px] mt-[-20px]'><HorizontalRule/></div>
          </h3>
          <TechStack/>
        </div>
      </div>
    </div>
  );
};

export default About