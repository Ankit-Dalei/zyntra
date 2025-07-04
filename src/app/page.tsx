'use client';

import About from "./about/page";
import Contact from "./contact/page";
import Service from "./service/page";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-[100vh] w-full overflow-hidden bg-gradient-to-br from-[#0e0c28] via-[#1e1f36] to-[#3f3e99] text-white grids cols-2">
        {/* Glowing circles */}
        <div className="absolute w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse" />
        <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-ping" />
        
        {/* Centered Content */}
        <div className="z-10 text-center px-6 mt-[9vh] flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            Welcome to ZYNTRA
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
            A futuristic 3D learning and creative collaboration platform.
          </p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </div>
        <div className="mt-[9vh] flex flex-col items-center justify-center">
dvscdas
        </div>
      </header>

      {/* About Section */}
        <div id="#about">
          <About />
        </div>
        <div id="#service">
          <Service/>
        </div>
        <div id="#contact">
          <Contact/>
        </div>
    </>
  );
};

export default Home;
