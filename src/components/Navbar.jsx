'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
    const menuClass = 'text-[14px] hover:text-blue-400 hover:cursor-pointer transition-all duration-200 hover:scale-105'

    return (
        <>
            <div className='fixed top-0 left-0 w-full bg-transparent z-50'>
                <div className='z-10 grid grid-cols-[1fr_3fr_1fr] justify-center'>
                    <div className='flex justify-center w-[10rem] mx-auto'>
                        <Link className='flex items-center' href="/"><img className='w-full h-auto transition-all duration-200 hover:scale-105 invert-0 object-contain' src="/myLogo.png" alt="my logo" /></Link>
                    </div>
                    <div className='w-fit mx-auto flex flex-cols gap-20 px-10 py-3 my-5 rounded-full border-3 border-gray-200'>
                        <Link href="/" className={menuClass}>Home</Link>
                        <Link href="/about" className={menuClass}>About</Link>
                        <Link href="/projects" className={menuClass}>Projects</Link>
                        <Link href="/contact"><div className={menuClass}>Contact</div></Link>
                    </div>
                    <div className='flex justify-center w-[10rem] mx-auto'>
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
                </div>
            </div>
        </>
    )
}

export default Navbar;