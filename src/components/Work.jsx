import React from 'react'
import HorizontalRule from './HorizontalRule'
import jam from '../assets/Images/Screenshots/jam-blog.png'
import billiard from '../assets/Images/Screenshots/thebilliardman.png'
import {LuStars} from 'react-icons/lu'
import Button1 from './Button1'
import jam_favicon from '../assets/Images/Favicon/jam-favicon.webp'
import tbm_favicon from '../assets/Images/Favicon/billiard-man-logo.png'

const Work = () => {
  return (
    <div>
      {/* Work Heading */} 
      <h2 className='text-5xl md:text-[72px] font-bold text-white uppercase text-center mt-40 md:mb-[10px]'>
        Exploring
      </h2>
      <h2 className='text-4xl md:text-[72px] font-bold text-[#906EF0] uppercase text-center'>
        Past Creations
        <div className='mx-10 md:mx-[385px] mt-[-22px] md:mt-[20px]'><HorizontalRule/></div>
      </h2>
      <p className='font-medium text-center text-lg md:text-[20px] mx-12 md:mr-20 md:ml-20'>
        Take a glimpse into a few of my past projects, where <span className='text-[#906EF0]'>creativity meets functionality </span>  
        in a seamless dance. Each website represents a <span className='text-[#906EF0]'>unique challenge </span>
        that I <span className='text-[#906EF0]'>embraced with enthusiasm</span>, ensuring that every line of code and 
        pixel was meticulously curated. As you browse through these <span className='text-[#906EF0]'>creations</span>, 
        you'll witness my <span className='text-[#906EF0]'>commitment to excellence</span> and an <span className='text-[#906EF0]'>unwavering dedication </span> 
        to delivering digital solutions that leave a <span className='text-[#906EF0]'>lasting impact</span>.
      </p>

      {/* Past Work Cards */}
      <div>
        {/* Card 1 */}
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-20 lg:px-2">
          <div className="border-[1px] border-[#808080] relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
              <div className='bg-[#795a5a] mb-5 rounded-[10px] w-14 h-14 items-center flex justify-center shadow-inner shadow-[#d1afaf]'>
                  <img 
                    src= {jam_favicon} 
                    alt="JAM Favicon" 
                    width={50}
                    height={50}
                  />
              </div>
              <h2 className="text-2xl md:text-[30px] text-left font-bold text-white">
                JAM Consulting –– Business Consulting, Management, & Startup Coaching
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-100 text-left">
                At JAM Consulting, I took charge of creating their dynamic website, crafting a seamless digital 
                presence to complement their business consulting, management, and startup coaching services.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                
                <a href="https://meetjanicepatterson.com" className="text-lg font-normal leading-6 text-white mb-14 md:mb-0" target="_blank" rel="noopener noreferrer">
                  Go To Website <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[60rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src= {jam}
                alt="JAM Consulting Home Screen"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-20 lg:px-2">
          <div className="border-[1px] border-[#808080] relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
              <div className='bg-[#40584b] mb-5 rounded-[10px] w-14 h-14 items-center flex justify-center shadow-inner shadow-[#96bea9]'>
                  <img 
                    src= {tbm_favicon} 
                    alt="JAM Favicon" 
                    width={50}
                    height={50}
                  />
              </div>
              <h2 className="text-[30px] font-bold text-white sm:text-4xl text-left">
                The Billiard Man –– Pool Table Service Providers Near New York, NY
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-100 text-left">
                As the dedicated web developer for The Billiard Man, I designed and developed a captivating online 
                platform that showcases their expertise as premier pool table service providers near New York, NY.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                
                <a href="https://thebilliardman.com" className="text-lg font-normal leading-6 text-white mb-14 md:mb-0" target="_blank" rel="noopener noreferrer">
                  Go To Website <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[60rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src= {billiard}
                alt="The Billiard Man Home Screen"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='mx-auto max-w-6xl py-24 sm:px-6 sm:py-20 lg:px-8'>
          <div className='bg-[#181818] shadow-lg shadow-black rounded-3xl border-dashed border-[1px] border-[#808080]'>
            <div className='flex flex-col items-center mt-28 mb-28 justify-center'>
              <LuStars className='text-[70px]'/>
              <h3 className='uppercase text-center font-bold text-xl md:text-[40px] mt-10'>Your project goes here</h3>
              <p className='text-lg md:text-[20px] font-light mt-2'>Let's turn your idea into reality</p>
              <div className='mt-20'>
                <Button1>GET IN TOUCH</Button1>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default Work