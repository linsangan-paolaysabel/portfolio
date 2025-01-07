import React from "react";
import paola from './images/paola.png';

function Home(props) {
  return (
    <div className="w-full h-screen relative px-[120px] py-[300px] z-10">
      <div className="w-full h-full absolute right-0 bottom-0 flex justify-end">
        <img src={paola} alt="" className="h-full object-cover" />
      </div>
      <p className="text-[#005B96] font-semibold text-[18px] leading-3 px-1">Hi, I am</p>
      <p className="text-[#FFC000] font-bold text-[80px] mt-[-10px]">{props.name}</p>
      <p className="w-[550px] text-left mt-[-18px] px-1 pb-3">{props.desc}</p>

      <div className="flex">
        <div className="button-link text-white font-semibold bg-[#005B96] py-3 px-7 rounded-lg text-[18px]">
          <a href="#contact">START A PROJECT</a>
        </div>
        <div className="button-link2 ml-4 w-[200px] text-[#005B96] text-center font-semibold border-2 border-[#005B96] py-2 px-4 rounded-lg text-[18px]">
          <a href="#portfolio">VIEW PORTFOLIO</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
