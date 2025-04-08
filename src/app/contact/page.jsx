"use client";
import React, { useEffect } from 'react'
import AOS from 'aos';

export default function Contact() {

  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
        offset: 200
    });
}, []);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "be475212-875a-4fbb-97a3-42ce46b8c7cd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <div data-aos="zoom-in-up" className="h-[calc(100vh-4rem)] relative">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="font-['Helvetica'] w-fit flex flex-col border-2 border-gray-300 p-6 rounded-lg">
          <div className="font-['Roboto-Mono'] text-3xl mb-5 font-bold text-gray-700 text-center">Send Enquiry</div>
          <form onSubmit={handleSubmit} className="w-[20rem] flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-[14px] text-gray-500 ml-2">your name</label>
              <input className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none" type="text" name="name" placeholder="Enter your name" />
            </div>

            <div>
              <label htmlFor="email" className="text-[14px] text-gray-500 ml-2">your email</label>
              <input className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none" type="email" name="email" placeholder="Enter your email" />
            </div>

            <div>
              <label htmlFor="message" className="text-[14px] text-gray-500 ml-2">message </label>
              <textarea className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none" name="message" placeholder="Enter your message"></textarea>
            </div>

            <button className="bg-[#c1672b] w-1/2 mx-auto px-6 py-2 rounded-lg text-white font-medium transition-all duration-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:outline-none">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}