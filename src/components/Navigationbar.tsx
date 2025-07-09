'use client'

import Link from "next/link";
import { useState } from "react";

const Navigationbar = () => {
  const[mobileNav,setMobileNav]=useState(false);
  const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "about" },
  { label: "SERVICES", href: "service" },
  { label: "CONTACT", href: "contact" },
  { label: "DOCS", href: "docs" },
  { label: "TOOLS", href: "tools" },
  ];
 
  return (
    <>
    {/* navigation panal */}
    <nav className=" navigations w-full h-[90px] flex justify-center items-center flex-wrap relative " aria-label="Main Navigation">
      <div className="w-[95%] h-full flex justify-center items-center gap-3">
        {/* for mobile navigation */}
        <div className="bars_menu lg:hidden flex flex-col justify-center items-center gap-1 h-full w-auto">
          <div className="flex flex-col justify-center items-center gap-1" onClick={() => setMobileNav(prev => !prev)}>
            <div className="bar bg-gray-900 h-[3px] w-[25px] rounded-md"></div>
            <div className="bar bg-gray-900 h-[3px] w-[25px] rounded-md"></div>
            <div className="bar bg-gray-900 h-[3px] w-[25px] rounded-md"></div>
          </div>
        </div>
        {/* name or logo of website */}
        <div className="logo w-[76%] sm:w-[80%] md:w-[84%] text-4xl lg:text-3xl lg:w-auto h-full flex flex-wrap justify-start items-center">ZYNTRA</div>
        {/* main routing panal */}
        <div className="navigation lg:w-[89%] w-auto h-full flex items-center justify-center flex-wrap">
          {/* for 1024px width device navigation panal */}
          <div className="hidden navigation_main_links lg:flex items-center justify-start flex-wrap w-[70%] h-full gap-10 text-sm">
            {navItems.map(({label,href})=>(
              <div key={href}>
                <Link href={href}>{label}</Link>
              </div>
            ))}
          </div>
          {/* login or signup routes */}
          <div className="navigation_side_links w-auto lg:w-[30%] h-full flex justify-end items-center gap-1 lg:gap-3">
            <button><Link href={''} className="border-2 border-gray-500 pl-4 pr-4 pt-1 pb-1">Join</Link></button>
            <button><Link href={''} className="hidden lg:block border-2 border-gray-900 pl-4 pr-4 pt-1 pb-1 bg-gray-900 text-white">Start</Link></button>
          </div>
        </div>
      </div>
    </nav>
    {mobileNav?<>
    <div className="absolute top-0 left-0 h-screen w-[80%] bg-gray-50 flex flex-col justify-start items-center">
      <div className="w-[95%] h-[90px] flex justify-start items-center gap-3">
        <div className="bars_menu lg:hidden flex flex-col justify-center items-center gap-1 h-full w-auto">
          <div className="flex flex-col justify-center items-center gap-1" onClick={() => setMobileNav(prev => !prev)}>
            <div className="bar bg-gray-900 h-[3px] w-[25px] rounded-md"></div>
            <div className="bar bg-gray-900 h-[3px] w-[25px] rounded-md"></div>
            <div className="bar bg-gray-900 h-[3px] w-[25px] rounded-md"></div>
          </div>
        </div>
        <div className="logo w-[60%] text-4xl lg:text-3xl lg:w-[8%] h-full flex flex-wrap justify-start items-center">ZYNTRA</div>
      </div>
      <div className="w-[95%] h-auto flex flex-col items-start justify-center gap-6">
        {navItems.map(({label,href})=>(
          <div key={href} onClick={() => setMobileNav(prev => !prev)} className="text-5xl hover:bg-gray-400">
            <Link href={href}>{label}</Link>
          </div>
        ))}
      </div>
    </div>
    </>:<></>}
    </>
  );
};

export default Navigationbar;
