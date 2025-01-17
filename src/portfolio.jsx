import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/9.png';
import img7 from './images/8.png';
import img8 from './images/6.png';
import img9 from './images/7.png';

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "PORTFOLIO V1",
            made: "WordPress",
            desc: "Portfolio V1 built using WordPress.",
            image: { src: img1, alt: "Portfolio V1 Image" },
        },
        {
            id: 2,
            title: "EXAMALTER",
            made: "Html, CSS, Javascript, Php",
            desc: "ExamAlter scrambles exam questions and answers to minimize cheating.",
            image: { src: img4, alt: "ExamAlter Image" },
        },
        {
            id: 3,
            title: "SHOE CENTER",
            made: "Html, CSS, Javascript, Php",
            desc: "A website for selling shoes built using modern web technologies.",
            image: { src: img3, alt: "Shoe Center Image" },
        },
        {
            id: 4,
            title: "PHILTRIP",
            made: "Html, CSS, Javascript, Php",
            desc: "PhilTrip is a travel platform offering local experiences.",
            image: { src: img2, alt: "PhilTrip Image" },
        },
        {
            id: 5,
            title: "LOCALPOINT",
            made: "Html, CSS, Javascript, Php",
            desc: "LocalPoint is an e-commerce platform.",
            image: { src: img5, alt: "LocalPoint Image" },
        },
        {
            id: 6,
            title: "A. Gregorio - Resma Medical Clinic",
            made: "Tailwind CSS, Motoko",
            desc: "A medical record and appointment handling management system.",
            image: { src: img6, alt: "Resma Image" },
        },
        {
            id: 7,
            title: "Mangan Tayo",
            made: "Html, CSS, Javascript, Php",
            desc: "Mangan Tayo is a Filipino food blog.",
            image: { src: img7, alt: "ManganTayo Image" },
        },
        {
            id: 8,
            title: "College of Engineering",
            made: "Wordpress",
            desc: "The College of Engineering blog highlights all activities and achievements.",
            image: { src: img8, alt: "CEn Image" },
        },
        {
            id: 9,
            title: "Office Supplies",
            made: "Java",
            desc: "The Office Supplies system manages office supplies inventory.",
            image: { src: img9, alt: "OfficeSupplies Image" },
        },
    ];

    // State to track the active index of the carousel
    const [activeIndex, setActiveIndex] = useState(0);

    const projectTemplate = (project) => {
        return (
            <div className="flex justify-center items-center h-full">
                <img src={project.image.src} alt={project.image.alt} className="w-full h-[400px] object-cover" />
            </div>
        );
    };

    // Function to update the active index when the carousel changes
    const onCarouselChange = (e) => {
        setActiveIndex(e.page);
    };

    return (
        <div className="w-screen py-[70px] ">
            <div className="w-full px-[200px] mx-[55px]">
                <p class = "text-[#FFC000] font-semibold text-[18px]">RECENT</p>
                <p class = "text-[#005B96] font-bold text-[27px] px-5"> PROJECTS</p>
            </div>
            
            <div className="flex flex-col items-center p-3">
                <div className="carousel-container my-6">
                    <Carousel
                        value={projects}
                        numVisible={1}
                        numScroll={1}
                        itemTemplate={projectTemplate}
                        showIndicators
                        circular
                        autoplayInterval={3000}
                        onPageChange={onCarouselChange}
                    />
                </div>

                {/* Render title and description below the carousel */}
                <h2 className="text-2xl font-bold text-[#005B96] mt-6">{projects[activeIndex].title}</h2>
                <p className="text-base text-[#979393] w-full text-center">{projects[activeIndex].made}</p>
                <p className="text-base mb-4 w-[900px] w-full text-center mb-7">{projects[activeIndex].desc}</p>
            </div>
        </div>
    );
}

export default Portfolio;
