import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    const iconBase = 'transition-all duration-300 ease-in-out transform hover:scale-110';
    const instaAnim = `${iconBase} hover:text-pink-500 hover:-translate-y-1`;
    const linkedInAnim = `${iconBase} hover:text-blue-500 hover:-translate-y-1`;
    const mailAnim = `${iconBase} hover:text-green-400 hover:-translate-y-1`;

    return (
        <footer className="fixed bottom-0 w-full z-50">
            <div className="bg-gray-900 text-white py-3">
                <div className="flex items-center justify-center">
                    <div className="flex gap-10">
                        <a href="https://www.instagram.com/iamlakshay_._/" target='_blank' rel="noopener noreferrer">
                            <IoLogoInstagram size={30} className={instaAnim} />
                        </a>
                        <a href="https://www.linkedin.com/in/icodelakshay/" target='_blank' rel="noopener noreferrer">
                            <FaLinkedin size={30} className={linkedInAnim} />
                        </a>
                        <a href="mailto:lakshay.personal022@gmail.com" target='_blank' rel="noopener noreferrer">
                            <FiMail size={30} className={mailAnim} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
