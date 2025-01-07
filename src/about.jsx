import React from 'react';
import { CgFigma } from "react-icons/cg";
import { SiAdobephotoshop } from "react-icons/si";
import { IoLogoWordpress } from "react-icons/io";
import { SiCanva } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import UX from './images/ux.png';
import UI from './images/ui.png';
import Flutterflow from './images/flutter.png';


function About() {
  return (
    <div className="w-full flex flex-col lg:flex-row px-[5%] py-10 ml-[60px]" id="about">

      <div className="px-5 w-full lg:w-[60%]" data-aos="fade-right">
        <p className="text-[#FFC000] font-semibold text-[20px]">SKILLS</p>
        <p className="text-[#005B96] font-bold text-[30px] mb-6">MY EXPERTISE</p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

          <div className="skill-card">
            <CgFigma className="skill-icon" />
            <p className="skill-title">FIGMA</p>
            <p className="skill-desc">Creating wireframes and prototypes for seamless UX/UI design.</p>
          </div>

          <div className="skill-card">
            <IoLogoWordpress className="skill-icon" />
            <p className="skill-title">WORDPRESS</p>
            <p className="skill-desc">Building websites with custom themes and plugins.</p><br />
          </div>

          <div className="skill-card">
            <SiAdobephotoshop className="skill-icon" />
            <p className="skill-title">PHOTOSHOP</p>
            <p className="skill-desc">Designing graphics and images for web and print media.</p><br />
          </div>

          <div className="skill-card">
            <SiCanva className="skill-icon" />
            <p className="skill-title">CANVA</p>
            <p className="skill-desc">Creating marketing materials, social posts, and presentations.</p>
          </div>

          <div className="skill-card">
            <FaHtml5 className="skill-icon" />
            <p className="skill-title">HTML</p>
            <p className="skill-desc">Developing the structure of web pages using semantic HTML.</p>
          </div>

          <div className="skill-card">
            <FaCss3Alt className="skill-icon" />
            <p className="skill-title">CSS</p>
            <p className="skill-desc">Styling web applications with modern CSS frameworks.</p>
          </div>

          <div className="skill-card">
            <IoLogoJavascript className="skill-icon" />
            <p className="skill-title">JAVASCRIPT</p>
            <p className="skill-desc">Adding interactivity and dynamic elements to websites.</p>
          </div>

          <div className="skill-card">
            <img src={Flutterflow} alt="FlutterFlow" className="skill-icon h-[60px]" />
            <p className="skill-title">FLUTTERFLOW</p>
            <p className="skill-desc">Building responsive apps with a drag-and-drop interface.</p><br />
          </div>
        </div>
      </div>


      <div className="w-full lg:w-[40%] flex flex-col py-10 lg:py-0" data-aos="fade-left">
        <p className="text-[#FFC000] font-semibold text-[20px]">OFFERED</p>
        <p className="text-[#005B96] font-bold text-[30px] mb-6">SERVICES</p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-2"> 

          <div className="service-card h-[255px] w-[185px]">
            <img src={UX} alt="UX Design" className="service-icon" />
            <p className="service-title">UX DESIGN</p>
            <p className="service-desc">Designing user-friendly interfaces with a focus on experience.</p>
          </div>

          <div className="service-card w-[185px] ml-[-80px]">
            <img src={UI} alt="UI Design" className="service-icon" />
            <p className="service-title">UI DESIGN</p>
            <p className="service-desc">Creating visually appealing, functional user interfaces.</p>
          </div>

          <div className="service-card h-[235px] w-[185px]">
            <FaCode className="service-icon" />
            <p className="service-title">WEB DEVELOPMENT</p>
            <p className="service-desc">Building responsive websites with modern technologies.</p>
          </div>

          <div className="service-card w-[185px] ml-[-80px]">
            <MdDesignServices className="service-icon" />
            <p className="service-title">GRAPHIC DESIGN</p>
            <p className="service-desc">Creating branding and marketing materials for businesses.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
