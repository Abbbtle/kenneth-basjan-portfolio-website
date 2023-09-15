import React from 'react'

const Flow = () => {
  return (
    <div className='mt-40 mx-10 md:mx-0 md:mr-10 md:flex justify-evenly'>

      <div className='uppercase text-2xl mb-10 md:text-[60px] font-bold text-center md:text-start md:ml-10 md:mr-40'>
        <h1>My Work <br /><span className='text-[#906EF0]'>Flow</span></h1>
      </div>

      <div className='md:mr-10'>
        {/* Vertical Timeline */}
        <ol className="relative border-l-[4px] border-gray-200">                  
            <li className="mb-10  ">            
                <span className="absolute flex items-center justify-center mt-1 w-8 md:w-8 h-8 md:h-8 rounded-full -left-[18px] ring-[5px] ring-white dark:bg-[#1E1E1E]">
                  1
                </span>
                <h3 className='text-2xl md:text-4xl font-semibold text-white ml-8 uppercase mb-5'>
                  Discusion With Me
                </h3>
                <p className="mb-4 ml-8 text-base font-normal text-white">
                  The primary objective is to gain a comprehensive understanding of my client's business, aspirations, objectives, 
                  and obstacles in order to provide the most effective assistance and support tailored to their specific needs.
                </p>
            </li>
            <li className="mb-10  ">            
                <span className="absolute flex items-center justify-center mt-1 w-8 h-8 rounded-full -left-[18px] ring-4 ring-white dark:bg-[#1E1E1E]">
                  2
                </span>
                <h3 className='text-2xl md:text-4xl font-semibold text-white ml-8 uppercase mb-5'>
                  BRAINSTORMING
                </h3>
                <p className="mb-4 ml-8 text-base font-normal text-white">
                  Working hand in hand with my clients during brainstorming sessions is absolutely crucial. It's during these moments 
                  that we bring together their expectations and find the perfect technical solution to tackle their unique problems. 
                  It's a real team effort!
                </p>
            </li>
            <li className="mb-10  ">            
                <span className="absolute flex items-center justify-center mt-1 w-8 h-8 rounded-full -left-[18px] ring-4 ring-white dark:bg-[#1E1E1E]">
                  3
                </span>
                <h3 className='text-2xl md:text-4xl font-semibold text-white ml-8 uppercase mb-5'>
                  CREATE A TIMELINE
                </h3>
                <p className="mb-4 ml-8 text-base font-normal text-white">
                  Using the information gathered from my clients, combined with thorough market research, I develop a proposed 
                  timeline outlining the projected duration of the project. This timeline serves as a guide to ensure a well-structured 
                  and realistic approach to the project's completion.
                </p>
            </li>
            <li className="mb-10  ">            
                <span className="absolute flex items-center justify-center mt-1 w-8 h-8 rounded-full -left-[18px] ring-4 ring-white dark:bg-[#1E1E1E]">
                  4
                </span>
                <h3 className='text-2xl md:text-4xl font-semibold text-white ml-8 uppercase mb-5'>
                  FEEDBACK LOOP
                </h3>
                <p className="mb-4 ml-8 text-base font-normal text-white">
                  I seek client feedback to align the project timeline with their needs and expectations, while considering my own 
                  capabilities. This fosters a collaborative approach and builds trust for successful project outcomes.
                </p>
            </li>
            <li className="mb-10  ">            
                <span className="absolute flex items-center justify-center mt-1 w-8 h-8 rounded-full -left-[18px] ring-4 ring-white dark:bg-[#1E1E1E]">
                  5
                </span>
                <h3 className='text-2xl md:text-4xl font-semibold text-white ml-8 uppercase mb-5'>
                  BUILDING YOUR SOLUTION
                </h3>
                <p className="mb-4 ml-8 text-base font-normal text-white">
                  At this stage, I begin constructing the desired solution, leveraging best practices and utilizing the data 
                  gathered to fulfill my clients' specific requirements precisely. By integrating the insights obtained and employing industry standards, I strive to deliver a solution that precisely aligns with their expectations and desires.
                </p>
            </li>
            <li className="mb-10  ">            
                <span className="absolute flex items-center justify-center mt-1 w-8 h-8 rounded-full -left-[18px] ring-4 ring-white dark:bg-[#1E1E1E]">
                  6
                </span>
                <h3 className='text-2xl md:text-4xl font-semibold text-white ml-8 uppercase mb-5'>
                  FEEDBACK LOOP
                </h3>
                <p className="mb-4 ml-8 text-base font-normal text-white">
                  During this phase, I share prototypes with my clients, actively seeking their feedback and input. This collaborative 
                  approach helps refine the solution to meet their specific needs and expectations, fostering a sense of ownership and trust.
                </p>
            </li>
            <li className="mb-10  ">            
                <span className="absolute flex items-center justify-center mt-1 w-8 h-8 rounded-full -left-[18px] ring-4 ring-white dark:bg-[#1E1E1E]">
                  7
                </span>
                <h3 className='text-2xl md:text-4xl font-semibold text-white ml-8 uppercase mb-5'>
                  FINAL PRESENTATION
                </h3>
                <p className="mb-4 ml-8 text-base font-normal text-white">
                  At this phase, I showcase the final project to the client, incorporating their feedback to ensure it meets their 
                  expectations before concluding the project.
                </p>
            </li>
            <li className="">            
                <span className="absolute flex items-center justify-center mt-2 w-8 h-8 rounded-full -left-[18px] ring-4 ring-white dark:bg-[#1E1E1E]">
                  8
                </span>
                <h3 className='text-2xl md:text-4xl font-semibold text-white ml-8 uppercase mb-5'>
                  PROJECT CLOSURE
                </h3>
            </li>
        </ol>
        <p className="mb-4 ml-8 text-base font-normal text-white">
          At this stage, the project is officially concluded, and I grant the client full access to their new solution. They 
          now have complete ownership and control over the final product, enabling them to utilize it according to their 
          specific needs and requirements. This transfer of access marks the successful completion of the project, and 
          the client can confidently proceed with implementing and utilizing the solution for their business or objectives.
        </p>
      </div>
    </div>
  );
};

export default Flow