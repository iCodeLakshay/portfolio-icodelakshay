'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import Button from './Button';
import LinkedinButton from './LinkedinButton';

const Home = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
        offset: 200
    });
}, []);
  return (
    <div className="flex items-center justify-between">
        <div  className="max-w-lg mx-auto mt-20">
          <div data-aos="fade-up-right">
          <h1 className="text-5xl font-bold text-gray-800">
            <span  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Hello
            </span>
            , this is <br />
            Lakshay Saxena
          </h1>
          </div>
          <div data-aos="fade-down-left">
          <p className="mt-5 text-lg text-gray-600 leading-7">
            20-Year-Old Junior Java Backend Developer, Building Scalable Systems
            & Clean Code Solutions, Driven by Innovation & Precision 🚀
          </p>
          </div>
          <div className="w-full mt-5 flex gap-4 items-center">
            <Button className='btn-donate' title={"Download CV"} href={"/CV-Lakshay.pdf"} download={"CV-Lakshay"}/>
            <Button className='btn-donate' title={"LinkedIn"} href={"https://www.linkedin.com/in/icodelakshay/"} />
          </div>  
        </div>
        <div data-aos="zoom-in-up" className="max-w-[41rem]">
          <img src="/mypic.png" alt="my pic" />
        </div>
      </div>
  )
}

export default Home