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

  // Validation
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name) {
      newErrors.name = "Please enter your name";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (!formData.email) {
      newErrors.email = "Please enter your email address";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.subject) {
      newErrors.subject = "Please enter a subject";
      isValid = false;
    } else {
      newErrors.subject = "";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Submission logic here
    }
  };
  return (
    <div>
      {/* Contact Heading */}
      <h2 className='text-[72px] font-bold text-white mt-10 uppercase text-center'>
          Let's start <span className='text-[#906EF0]'>building</span> your<span className='text-[#906EF0]'> vision</span>
          <div className='mr-[68px] ml-[68px] mt-[-40px]'><HorizontalRule/></div>
      </h2>

      {/* Contact Form */}
      <div className='border-solid bg-[#181818] border-[#808080] border-[1px] rounded-3xl mx-16 mt-16 shadow-2xl shadow-black'>
        <h4 className='text-center mt-3'>New Message</h4>

        <form className="rounded-3xl" onSubmit={handleSubmit}>
          <div className="ml-8 mt-10">
            <label htmlFor="name">Name: </label>
            <input
            className="appearance-none rounded ml-3 bg-transparent w-[90%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          <div className='mr-[45px] ml-[30px] mt-[-15px]'><HorizontalRule2/></div>

          <div className="ml-8 mt-10">
            <label htmlFor="name">Email: </label>
            <input
            className="appearance-none rounded ml-4 bg-transparent w-[90%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div className='mr-[45px] ml-[30px] mt-[-15px]'><HorizontalRule2/></div>

          <div className="ml-8 mt-10">
            <label htmlFor="name">Subject: </label>
            <input
            className="appearance-none rounded  bg-transparent w-[90%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.subject}</p>}
          </div>
          <div className='mr-[45px] ml-[30px] mt-[-15px]'><HorizontalRule2/></div>

          <div className="ml-8 mt-10">
            <textarea
            className="appearance-none rounded text-white bg-[#0D0D0D]  w-[96%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            rows="10"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.message}</p>}
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