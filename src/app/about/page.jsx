'use client';
import React, { useEffect, useRef } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Timeline from "../../components/Timeline";
import { TechStackMarquee } from "../../components/TechStackMarquee";

const Page = () => {
    const highlightTextClass = 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text';
    const techStackRef = useRef(null);
    const timelineRef = useRef(null);
    const aboutRef = useRef(null);
    let lastScrollTime = 0;
    const scrollCooldown = 1000; // 1 second cooldown between scrolls

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 200
        });

        const handleScroll = (e) => {
            const currentTime = Date.now();
            if (currentTime - lastScrollTime < scrollCooldown) return;

            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollDirection = e.deltaY > 0 ? 'down' : 'up';

            // If scrolling down
            if (scrollDirection === 'down') {
                // If we're in the first section (About Me)
                if (scrollPosition < windowHeight * 0.5) {
                    e.preventDefault();
                    techStackRef.current?.scrollIntoView({ behavior: 'smooth' });
                    lastScrollTime = currentTime;
                }
                // If we're in the Tech Stack section
                else if (scrollPosition < windowHeight * 1.25) {
                    e.preventDefault();
                    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
                    lastScrollTime = currentTime;
                }
            }
            // If scrolling up
            else {
                // If we're in the Timeline section
                if (scrollPosition > windowHeight * 1.5) {
                    e.preventDefault();
                    techStackRef.current?.scrollIntoView({ behavior: 'smooth' });
                    lastScrollTime = currentTime;
                }
                // If we're in the Tech Stack section
                else if (scrollPosition > windowHeight * 0.5) {
                    e.preventDefault();
                    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
                    lastScrollTime = currentTime;
                }
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => window.removeEventListener('wheel', handleScroll);
    }, []);

    return (
        <div className="relative">
            {/* About Me Section */}
            <div ref={aboutRef} className='flex items-center justify-center min-h-screen'>
                <div className='text-center w-2/3 flex flex-col gap-10'>
                    <h1 data-aos="fade-right" className='text-5xl font-bold font-[Playfair_Display]'>About Me</h1>
                    <div data-aos="fade-left" className='text-gray-600'>Hey there! I'm Lakshay, a passionate 
                        <span className={highlightTextClass}> Full Stack Developer</span> skilled in 
                        <span className={highlightTextClass}> Java (Spring Boot)</span> and the 
                        <span className={highlightTextClass}> MERN stack</span>. I specialize in building scalable, efficient, and user-friendly web applications that deliver seamless user experiences.</div>
                    <div data-aos="fade-left" className='text-gray-600' >
                        I've worked on projects like 
                        <span className={highlightTextClass}>Movie-Site UI</span>, 
                        <span className={highlightTextClass}> Jaipur Chakki UI</span> (with routing), a full-stack 
                        <span className={highlightTextClass}> User Enquiry app</span>, and a 
                        <span className={highlightTextClass}> WhatsApp-on-Windows UI</span>. On the backend, I've built projects like 
                        <span className={highlightTextClass}> Task Manager API</span> and an 
                        <span className={highlightTextClass}> E-Commerce API</span> from scratch. You can check them out on my LinkedIn or GitHub. Below is my tech stack!
                    </div>
                    <div data-aos="fade-left" className='text-gray-600'>
                        Currently working as a <span className={highlightTextClass}>Full Stack Web Intern </span> at <span className={highlightTextClass}>JEEVijay Technologies</span>, where I contribute to building scalable web applications using modern technologies. Gaining hands-on experience in both frontend and backend development while refining my problem-solving skills
                    </div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div ref={techStackRef} className="min-h-screen flex flex-col justify-center">
                <h1 className="text-5xl font-bold font-[Playfair_Display] text-center mb-20">Tech Stack</h1>
                <TechStackMarquee />
            </div>

            {/* Timeline Section */}
            <div ref={timelineRef} className="min-h-screen pt-24">
                <Timeline />
            </div>
        </div>
    )
}

export default Page