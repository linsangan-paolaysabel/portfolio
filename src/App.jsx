import React, { useEffect } from 'react';
import Home from './home.jsx';
import About from './about.jsx';
import Portfolio from './portfolio.jsx';
import Contact from './contact.jsx';
import logo from './images/logo.png';
import './App.css';
import Footer from './footer.jsx';
import Graphics from './graphics.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div>
      <nav className="bg-white w-full flex justify-between items-center py-4 px-12 sticky top-0 z-20 drop-shadow-lg">
        <div className="w-[170px]">
          <img src={logo} alt="" />
        </div>
        <div className="font-semibold text-[18px]">
          <a className="nav-link mx-3" href="#home">HOME</a>
          <a className="nav-link mx-3" href="#about">ABOUT ME</a>
          <a className="nav-link mx-3" href="#portfolio">PORTFOLIO</a>
        </div>
        <div className="button-link text-white font-semibold bg-[#005B96] py-3 px-7 rounded-lg text-[18px]">
          <a href="#contact">START A PROJECT</a>
        </div>
      </nav>

      <section id="home" data-aos="fade-up">
        <Home name={'PAOLA YSABEL'} desc={'I am a 4th-year BSIT student focused on web development and user experience design. Skilled in WordPress, FlutterFlow, prototyping, and graphic design, I aim to build intuitive and visually appealing websites. My goal is to become a UI/UX designer, driven by creativity and attention to detail.'} />
      </section>

      <section id="about" data-aos="fade-up">
        <About />
      </section>

      <section id="portfolio" data-aos="fade-up">
        <Portfolio />
      </section>

      <section id="graphics" data-aos="fade-up">
        <Graphics />
      </section>

      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
