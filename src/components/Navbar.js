"use client";
import React, { useState } from 'react'
import Logo from "../../public/assets/dunagiriLogo.svg"
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-2 shadow-sm h-48px lg:px-16">
      <Link href={'/'} className="flex items-center justify-center">
        <Image src={Logo} alt="Void" width={100} height={100} />
      </Link>

      {/* Hamburger menu for small screens */}
      {!isMobileMenuOpen &&
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />

            </svg>
          </button>
        </div>
      }

      <div className={`lg:flex items-center justify-evenly gap-8 p-2 ${isMobileMenuOpen ? 'absolute top-10 flex flex-col items-start justify-start gap-5 w-44 py-5 right-4 shadow-xl z-50 rounded-lg bg-white' : 'hidden'}`}>
        <Link onClick={() => setMobileMenuOpen(false)} href={"/"} className='montserrat w-full text-lg font-medium text-center text-[#324D2E] md:hover:text-[#E4DFD2] whitespace-nowrap'>About Us</Link>
        <Link onClick={() => setMobileMenuOpen(false)} href={"/"} className='montserrat w-full text-lg font-medium text-center text-[#324D2E] md:hover:text-[#E4DFD2]'>Accomodation</Link>
        <Link onClick={() => setMobileMenuOpen(false)} href={"/"} className='montserrat w-full text-lg font-medium text-center text-[#324D2E] md:hover:text-[#E4DFD2]'>Retreats</Link>
        <Link onClick={() => setMobileMenuOpen(false)} href={"/"} className=' montserrat w-full text-lg font-medium text-center text-[#324D2E] md:hover:text-[#E4DFD2] '>Blog</Link>
        <Link onClick={() => setMobileMenuOpen(false)} href={"/"} className="px-8 py-2 font-medium montserrat text-white text-center rounded-sm bg-[#324D2E] text-md whitespace-nowrap hover:bg-[#E4DFD2] hover:text-[#324D2E]">
          Contact Us
        </Link>

        {/* close icon */}
        {isMobileMenuOpen &&
          <button
            onClick={toggleMobileMenu}
            className="absolute p-2 text-gray-600 focus:outline-none top-2 right-2 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        }
      </div>
    </nav>
  )
}

export default Navbar
