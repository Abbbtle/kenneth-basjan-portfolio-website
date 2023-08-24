import React, { useState } from "react";
import HorizontalRule from "./HorizontalRule";
import HorizontalRule2 from "./HorizontalRule2";
import Button1 from "./Button1";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <div>
      {/* Contact Heading */}
      <h2 className='text-[72px] font-bold text-white mt-10 uppercase text-center'>
          Let's start <span className='text-[#906EF0]'>building</span> your<span className='text-[#906EF0]'> vision</span>
          <div className='mr-[68px] ml-[68px] mt-[-40px]'><HorizontalRule/></div>
      </h2>

      {/* Contact Form */}
      <div className='border-solid border-[#808080] border-[1px] rounded-3xl mx-16 mt-16'>
        <h4 className='text-center mt-3'>New Message</h4>

        <form className="rounded-3xl" onSubmit={handleSubmit}>
          <div className="ml-8 mt-10">
            <label htmlFor="name">Name: </label>
            <input
            className="appearance-none rounded ml-5 w-[90%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          </div>
          <div className='mr-[45px] ml-[30px] mt-[-15px]'><HorizontalRule2/></div>

          <div className="ml-8 mt-10">
            <label htmlFor="name">Email: </label>
            <input
            className="appearance-none rounded ml-6 w-[90%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          </div>
          <div className='mr-[45px] ml-[30px] mt-[-15px]'><HorizontalRule2/></div>

          <div className="ml-8 mt-10">
            <label htmlFor="name">Subject: </label>
            <input
            className="appearance-none rounded ml-2 w-[90%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="subject"
            name="subject"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter subject"
          />
          </div>
          <div className='mr-[45px] ml-[30px] mt-[-15px]'><HorizontalRule2/></div>

          <div className="ml-8 mt-10">
            <textarea
            className="appearance-none rounded text-[#1E1E1E]  w-[96%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="message"
            id="message"
            name="message"
            value={formData.name}
            onChange={handleChange}
            placeholder="Write your message here"
            rows="10"
          />
          </div>

          <div type="submit" className="text-right mt-5 mr-12 mb-5">
          <Button1>
            Send
          </Button1>
          </div>

        </form>


      </div>
    </div>
  );
};

export default Contact