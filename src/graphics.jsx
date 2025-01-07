import React from 'react';
import g2 from './images/g2.jpg';
import g3 from './images/g3.jpg';
import g5 from './images/g5.jpg';
import g8 from './images/g8.jpg';

function Graphics() {
    const images = [g2, g3, g5, g8];

    return (
        <div className="pb-7">
             <div className="w-full px-[190px] mx-[55px] mb-10">
                <p class = "text-[#005B96] font-bold text-[27px] px-5"> CUSTOMIZED DESIGNS</p>
            </div>

            <div className="ml-[100px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[210px]">
                {images.map((img, index) => (
                    <div key={index} className="w-full h-[360px]">
                        <img
                            src={img}
                            alt={`Design ${index + 1}`}
                            className="w-full h-full object-contain rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                        />
                    </div>
                ))}
            </div>
            </div>
            
        </div>
    );
}

export default Graphics;