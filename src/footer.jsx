import React from'react';
import { CgMail } from "react-icons/cg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer(){
    return(
        <div className='w-full flex justify-between items-center bg-[#005B96] h-[70px] px-[50px] text-white'>
            <p>© 2024 Paola Ysabel B. Linsangan. All right reserved.</p>
            <div className='flex items-center text-white text-lg'>
                <a href="mailto:linsangan.paola@clsu2.edu.ph">
                    <CgMail className='text-2xl mx-1'/>
                </a>
                <a href="https://www.instagram.com/idkwhopolais/">
                    <FaInstagramSquare className='text-xl mx-1'/>
                </a>
                <a href="https://www.facebook.com/paolaysabellinsangan">
                    <FaFacebook className=' mx-1'/>
                </a>
            </div>
        </div>
    );
}
export default Footer;