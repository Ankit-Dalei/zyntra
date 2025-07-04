'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NavLinks from './NavLink';
import Link from "next/link";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

const Navigationbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="flex items-center justify-center pt-4 pb-4 pl-3 pr-3 h-14 w-full relative z-50">
        
        {/* Hamburger Menu */}
        <div
          className="lg:hidden flex flex-col gap-1 w-[20%] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-[20px] h-[3px] bg-white rounded-2xl transition-all duration-300"></div>
          <div className="w-[20px] h-[3px] bg-white rounded-2xl transition-all duration-300"></div>
          <div className="w-[20px] h-[3px] bg-white rounded-2xl transition-all duration-300"></div>
        </div>

        {/* Center NavLinks */}
        <NavLinks />


        {/* Logo */}
        <p className="w-[59%] lg:w-[35%] flex items-center lg:justify-start justify-center text-2xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text select-none">
          Zyntra
        </p>


        {/* Login Button */}
        <div className="w-[20%] lg:w-[20%] end">
          <Button className="rounded-full border px-6 py-2 w-full lg:w-[135px] bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-pink-500 hover:to-orange-500 transition-all duration-700 ease-in-out cursor-pointer">
            Login
          </Button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-full w-[75%] bg-white z-40 shadow-lg p-6 lg:hidden"
          style={{
            animation: 'slideIn 0.4s ease-in-out forwards',
          }}
        >
            <div
            className="lg:hidden flex flex-col gap-1 w-[20%] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-[20px] h-[3px] bg-black rounded-2xl transition-all duration-300"></div>
            <div className="w-[20px] h-[3px] bg-black rounded-2xl transition-all duration-300"></div>
            <div className="w-[20px] h-[3px] bg-black rounded-2xl transition-all duration-300"></div>
          </div>
          <div className="flex flex-col gap-6 mt-14">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold hover:text-orange-500 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Inline CSS keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            z-index:100;
          }
          100% {
            transform: translateX(0);
            z-index:100;
          }
        }
      `}</style>
    </>
  );
};

export default Navigationbar;
