import React from 'react';
import { kenneth1 } from '../assets';
import HorizontalRule from './HorizontalRule';
import { LuGraduationCap } from 'react-icons/lu';
import { FaUserTie } from 'react-icons/fa';
import TechStack from './TechStack';
import Button2 from './Button2';
import Popup from './Popup';
import Weberu from './Weberu';
import '../index.css';
import soon from '../assets/Images/coming-soon.gif';

const About = () => {
  return (
    <div name='about' className='bg-white mx-5 md:mx-10 mt-10 pb-10 pt-1 rounded-3xl shadow-inner shadow-black'>
      <div className='mx-2 md:mx-10 mt-10'>

        <h2 className='text-center md:text-left text-4xl md:text-5xl font-bold text-black'>Meet Kenneth Basjan</h2>
        <h4 className='text-center md:text-left text-2xl md:text-3xl font-bold text-[#4E30A5]'>Your Web Development Partner</h4>

        <div className='md:flex mt-5 md:mt-10 items-center'>

          <img data-aos="zoom-in" data-aos-duration="1500" src={kenneth1} alt="Kenneth Basjan" className='mb-5 mx-auto sm:w-60 md:w-80 h-auto object-contain rounded-3xl' />

          <p className='text-black font-medium sm:text-center sm:text-[18px] mx-2 md:text-left md:ml-11 text-lg md:text-[20px]'>
            I have always been captivated by the <span className='text-[#4E30A5]'>boundless possibilities</span> that the digital world offers. 
            With <span className='text-[#4E30A5]'>experience</span> as a <span className='text-[#4E30A5]'>MERN Stack web developer</span>, I have honed my skills to create websites that 
            marry <span className='text-[#4E30A5]'>stunning design</span> with <span className='text-[#4E30A5]'>robust functionality</span>. From concept to execution, I thrive on transforming 
            your visions into reality. My relentless pursuit of <span className='text-[#4E30A5]'>innovation and passion</span> for crafting <span className='text-[#4E30A5]'>exceptional online experiences </span> 
            drive me to stay at the <span className='text-[#4E30A5]'>forefront</span> of the <span className='text-[#4E30A5]'>ever-evolving</span> web development landscape.
          </p>

        </div>

         
        <div className='bg-[#1E1E1E] mt-5 md:mt-10 rounded-3xl p-4  md:p-10'>

          {/* Education Heading */}
          <h3 className='mt-5 md:mt-0 text-center md:text-left text-5xl font-semibold text-white'>
            Education
            <div className='mx-7 md:mx-0 md:mr-[900px] mt-[-20px] md:mt-[-15px]'><HorizontalRule /></div>
          </h3>

          {/* Institution 1 Details */}
          <div className='flex'>
            <div className='text-center md:text-left mt-1 mr-2 md:mr-5 text-lg md:text-[25px] text-white'>
              <LuGraduationCap />
            </div>
            <div>
              <p className='text-lg md:text-[18px] font-semibold text-white'>National Diploma in Information Technology:</p>
              <p className='text-white text-md md:text-[16px]'>Central University of Technology: Bloemfontein</p>
              <p className='text-[#906EF0]'>Jan 2016 - Nov 2019</p>
              <div className='flex flex-col space-y-2 mt-2 md:flex-row md:space-y-0'>
                <div className='md:mr-2'>
                  <Popup>
                      What I learnt:<br/><br/>
                      - Programming languages (e.g. Java, C#, JavaScript).<br/>
                      - Algorithms and data structures.<br/>
                      - Object-oriented programming concepts (e.g. inheritance, polymorphism).<br/>
                      - Software design principles and patterns.<br/>
                      - Mobile app development (Android Studio).<br/>
                      - Software project management (e.g. project planning, estimation, risk management).
                  </Popup>
                </div>
                <div className='md:ml-2'><Button2><a href="https://www.cut.ac.za/campus/1/bloemfontein" target='_blank' rel="noopener noreferrer">Go To Website</a></Button2></div>
              </div>
            </div>
          </div>

          {/* Institution 2 Details */}
          <div className='flex mt-5 md:mt-10'>
            <div className='text-center md:text-left mt-1 mr-2 md:mr-5 text-lg md:text-[25px] text-white'>
              <LuGraduationCap />
            </div>
            <div>
              <p className='text-lg md:text-[18px] font-semibold text-white'>Creative Business 101 for Videographers</p>
              <p className='text-white text-md md:text-[16px]'>ORMS Cape Town School of Photography</p>
              <p className='text-[#906EF0]'>Aug 2021</p>
              <div className='flex flex-col space-y-2 mt-2 md:flex-row md:space-y-0'>
                <div className='md:mr-2'>
                  <Popup>
                  What I learnt:<br/><br/>
                    - Understanding the video production process (e.g. pre-production, production, post-production).<br/>
                    - Business planning and budgeting for video projects.<br/>
                    - Branding and marketing for videographers.<br/>
                    - Legal and ethical considerations in videography (e.g. contracts, copyrights, model releases).<br/>
                    - Technical skills and techniques for video production (e.g. camera settings, lighting setups, editing software).<br/>
                    - Networking and collaboration in the videography industry.
                  </Popup>
                </div>
                <div className='md:ml-2'><Button2><a href="https://www.ormsdirect.co.za/pages/ctsp" target='_blank' rel="noopener noreferrer">Go To Website</a></Button2></div>
              </div>
            </div>
          </div>

          {/* Experience Heading */}
          <h3 className='mt-5 text-center md:text-left text-5xl font-semibold text-white'>
            Experience
            <div className='mx-5 md:mx-0 md:mr-[880px] mt-[-20px] md:mt-[-15px]'><HorizontalRule /></div>
          </h3>

          {/* Work Experience 1 Details */}
          <div className='flex'>
            <div className='text-center md:text-left mt-1 mr-2 md:mr-5 text-lg md:text-[25px] text-white'>
              <FaUserTie />
            </div>
            <div>
              <p className='text-lg md:text-[18px] font-semibold text-white'>Founder</p>
              <p className='text-white text-md md:text-[16px]'>Weberu</p>
              <p className='text-[#906EF0]'>Nov 2021 - Present</p>
              <div className='flex flex-col space-y-2 mt-2 md:flex-row md:space-y-0'>
                <div className='md:mr-2'>
                  <Popup>
                    Responsibilities:<br/><br/>
                    - Developing and maintaining web applications using WordPress, Elementor and other related technologies.<br/>
                    - Managing and executing social media campaigns across multiple platforms. They create content, monitor analytics, and engage with the audience.<br/>
                    - Creating engaging and high-quality content for social media platforms. This can include graphics, videos, blog posts, and other forms of content.<br/>
                    - Creating visually appealing graphics and designs for social media posts, ads, and other marketing materials.<br/>
                    - Managing client relationships, ensuring client satisfaction, and maintaining regular communication.<br/>
                    - Developing and implementing digital marketing strategies that align with the client's goals and objectives.<br/>
                    - Creating compelling and effective copy for social media posts, ads, and other marketing materials.<br/>
                    - Monitoring and analyzing social media data to track performance, identify trends, and make data-driven decisions.<br/>
                    - Generating new business leads, developing proposals, and closing deals.
                  </Popup>
                </div>
                <div className='md:mr-2'>
                  <Weberu>
                    <img src= {soon} alt="Weberu-Coming-Soon" className='rounded-3xl' />
                  </Weberu>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience 2 Details */}
          <div className='flex mt-5 md:mt-10'>
            <div className='text-center md:text-left mt-1 mr-2 md:mr-5 text-lg md:text-[25px] text-white'>
              <FaUserTie />
            </div>
            <div>
              <p className='text-lg md:text-[18px] font-semibold text-white'>Junior Software Developer Intern</p>
              <p className='text-white text-md md:text-[16px]'>UVU Africa - Capaciti Division</p>
              <p className='text-[#906EF0]'>Jan 2023 - July 2023</p>
              <div className='flex flex-col space-y-2 mt-2 md:flex-row md:space-y-0'>
                <div className='md:mr-2'>
                  <Popup>
                    Responsibilities:<br/><br/>
                    - Developing and maintaining web applications using HTML5, CSS3, JavaScript, Bootstrap, Python, MERN and other related technologies.<br/>
                    - Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.<br/>
                    - Implementing responsive design and ensuring cross-browser compatibility.<br/>
                    - Participating in code reviews and providing constructive feedback to other developers.<br/>
                    - Supporting the design and development of software programs under the guidance of senior developers.<br/>
                    - Work closely with other members of the development team to ensure that project tasks are being completed on time and within scope.<br/>
                    - Responsible for documenting my work and processes to ensure that other team members can understand and work on the code you write.<br/>
                  </Popup>
                </div>
                <div className='md:ml-2'><Button2><a href="https://uvuafrica.com/capaciti/" target='_blank' rel="noopener noreferrer">Go To Website</a></Button2></div>
              </div>
            </div>
          </div>

          {/* Work Experience 3 Details */}
          <div className='flex mt-5 md:mt-10'>
            <div className='text-center md:text-left mt-1 mr-2 md:mr-5 text-lg md:text-[25px] text-white'>
              <FaUserTie />
            </div>
            <div>
              <p className='text-lg md:text-[18px] font-semibold text-white'>Junior Software Developer</p>
              <p className='text-white text-md md:text-[16px]'>Younglings Africa</p>
              <p className='text-[#906EF0]'>July 2023 - Present</p>
              <div className='flex flex-col space-y-2 mt-2 md:flex-row md:space-y-0'>
                <div className='md:mr-2'>
                  <Popup>
                    Responsibilities:<br/><br/>
                    - Developing and maintaining web applications using HTML5, CSS3, JavaScript, Bootstrap, MERN and other related technologies.<br/>
                    - Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.<br/>
                    - Implementing responsive design and ensuring cross-browser compatibility.<br/>
                    - Paticipate in Hackathons with other developers, and also joining staff team to facilitate ABSA Hackathons.<br/>
                    - Participating in code reviews and providing constructive feedback to other developers.<br/>
                    - Supporting the design and development of software programs under the guidance of senior developers.<br/>
                    - Work closely with other members of the development team to ensure that project tasks are being completed on time and within scope.<br/>
                    - Responsible for documenting my work and processes to ensure that other team members can understand and work on the code you write.<br/>
                  </Popup>
                </div>
                <div className='md:ml-2'><Button2><a href="https://www.younglings.academy" target='_blank' rel="noopener noreferrer">Go To Website</a></Button2></div>
              </div>
            </div>
          </div>

          {/* Tech Stack Heading */}
          <h3 className='text-center md:text-left text-5xl font-semibold text-white mt-5'>
            Tech Stack
            <div className='mx-4 md:mx-0 md:mr-[875px] mt-[-20px] md:mt-[-15px]'><HorizontalRule /></div>
          </h3>
          <TechStack/>
        </div>
      </div>
    </div>
  );
};

export default About;
