import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="w-full flex flex-col items-center px-5 pb-5">
        <div className="flex flex-col items-center w-full">
          <div className="text-center px-5 py-10 w-full max-w-[800px]">
            <p className="text-[#FFC000] font-semibold text-[24px]">Contact Me</p>
            <h2 className="text-white font-bold text-[48px] leading-tight">
              Let’s collaborate and create something amazing!
            </h2>
            <p className="text-white text-[18px] mt-3 leading-relaxed">
              Take the first step by sending me an email, and I’ll reply as soon as possible.
            </p>
            <a
              href="mailto:linsangan.paola@clsu2.edu.ph"
              className="mt-6 inline-block text-white text-[20px] font-semibold border-b-2 border-[#FFC000] transition duration-300 ease-in-out hover:text-[#FFC000] hover:border-white"
            >
              linsangan.paolaysabel23@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
