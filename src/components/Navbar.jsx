'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const menuClass = 'text-sm hover:text-blue-400 hover:cursor-pointer transition-all duration-200 hover:scale-105';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='fixed top-0 left-0 w-full bg-transparent z-50'>
        {/* Top Navigation Bar - Always Visible */}
        <div className='flex justify-between items-center px-4 py-4 bg-white/90 md:bg-transparent'>
          {/* Logo Section */}
          <div className='flex justify-center md:w-40'>
            <Link className='flex items-center' href="/">
              <img className='h-10 md:h-auto w-auto md:w-full transition-all duration-200 hover:scale-105 invert-0 object-contain' src="/myLogo.png" alt="my logo" />
            </Link>
          </div>
          
          {/* Navigation Menu - Desktop */}
          <div className='hidden md:flex w-fit mx-auto gap-20 px-10 py-3 rounded-full border-3 border-gray-200'>
            <Link href="/" className={menuClass}>Home</Link>
            <Link href="/about" className={menuClass}>About</Link>
            <Link href="/projects" className={menuClass}>Projects</Link>
            <Link href="/contact"><div className={menuClass}>Contact</div></Link>
          </div>

          {/* Hire Me Button - Desktop */}
          <div className='hidden md:flex justify-center w-40'>
            <div className="relative inline-flex items-center justify-center gap-4 group">
              <div
                className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
              ></div>
              <Link
                role="button"
                className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                title="payment"
                href="/contact"
              >Hire Me<svg
                aria-hidden="true"
                viewBox="0 0 10 10"
                height="10"
                width="10"
                fill="none"
                className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
              >
                  <path
                    d="M0 5h7"
                    className="transition opacity-0 group-hover:opacity-100"
                  ></path>
                  <path
                    d="M1 1l4 4-4 4"
                    className="transition group-hover:translate-x-[3px]"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button - Always accessible */}
          <div className='md:hidden z-50'>
            <button 
              className={`flex flex-col justify-center items-center w-10 h-10 space-y-1.5 border border-gray-300 rounded-md p-2 bg-white ${isMenuOpen ? 'fixed top-4 right-4' : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}
          style={{paddingTop: '5rem'}} // Add space for the fixed hamburger button
        >
          <div className='flex flex-col items-center gap-6 p-5'>
            <Link href="/" onClick={toggleMenu} className={`text-lg ${menuClass}`}>Home</Link>
            <Link href="/about" onClick={toggleMenu} className={`text-lg ${menuClass}`}>About</Link>
            <Link href="/projects" onClick={toggleMenu} className={`text-lg ${menuClass}`}>Projects</Link>
            <Link href="/contact" onClick={toggleMenu}><div className={`text-lg ${menuClass}`}>Contact</div></Link>
          </div>
          
          {/* Mobile Hire Me Button */}
          <div className='fixed bottom-20 left-0 right-0 flex justify-center'>
            <div className="relative inline-flex items-center justify-center gap-4 group">
              <div
                className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
              ></div>
              <Link
                role="button"
                className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                title="payment"
                href="/contact"
                onClick={toggleMenu}
              >Hire Me<svg
                aria-hidden="true"
                viewBox="0 0 10 10"
                height="10"
                width="10"
                fill="none"
                className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
              >
                  <path
                    d="M0 5h7"
                    className="transition opacity-0 group-hover:opacity-100"
                  ></path>
                  <path
                    d="M1 1l4 4-4 4"
                    className="transition group-hover:translate-x-[3px]"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;