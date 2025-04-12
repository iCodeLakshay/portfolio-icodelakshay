'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import Button from './Button';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });
  }, []);

  return (
    <div className="relative top-30 lg:top-0  flex items-center justify-center flex-col-reverse md:flex-row">
      <div className="lg:max-w-lg w-full mx-auto text-center md:text-left mt-10 md:mt-0">
        <div data-aos="fade-up-right">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Hello
            </span>
            , this is <br />
            Lakshay Saxena
          </h1>
        </div>
        <div data-aos="fade-down-left">
          <p className="p-5 lg:p-0 lg:mt-5 text-lg text-gray-600 leading-7">
            20-Year-Old Junior Java Backend Developer, Building Scalable Systems
            & Clean Code Solutions, Driven by Innovation & Precision 🚀
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-7 flex  sm:flex-row gap-4 items-center justify-center md:justify-start">
          <Button className="btn-donate" title={"Download CV"} href={"/CV-Lakshay.pdf"} download={"CV-Lakshay"} />
          <Button className="btn-donate" title={"LinkedIn"} href={"https://www.linkedin.com/in/icodelakshay/"} />
        </div>
      </div>
      <div data-aos="zoom-in-up" className="max-w-[41rem] hidden md:block">
        <img src="/mypic.png" alt="my pic" />
      </div>
    </div>
  );
};

export default Home;
