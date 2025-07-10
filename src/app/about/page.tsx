import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
    <div className=' w-full h-auto mt-0 lg:mt-4 flex-wrap flex justify-center items-center '>
      <div className=' w-[92%] h-auto sm:h-[600px] bg-gray-200 flex justify-center items-center p-7 text-[90px] lg:text-[190px] '>
        WHO ARE WE
      </div>
    </div>
    <div className=' w-full h-auto mt-4 lg:mt-15 flex-wrap flex justify-center items-center '>
      <div className=' w-[92%] p-8 h-auto lg:h-[400px] bg-amber-300 flex flex-col lg:flex-row justify-center lg:justify-between items-center '>
        <p className=' w-full lg:w-[50%] p-4 lg:p-0 text-5xl/19 lg:text-6xl/19 '>We creafting a<span className=' text-gray-400 '>  better</span> platform for<span className=' text-gray-400 '>   developer</span></p>
        <p className=' lg:w-[30%] h-[90%] text-lg hidden lg:flex justify-center items-end '>Together we build a metaverse platform for next generation. It should be helpfull for personality development, creative thinking also learning new thing etc</p>
      </div>
    </div>
    <div className=' w-full h-auto mt-15 flex-wrap flex justify-center items-center '>
      <div className=' w-[92%] h-auto flex flex-col lg:flex-row justify-center items-center gap-4  '>
        <div className='  sm:h-[500px] h-[300px] w-full lg:w-[30%] bg-gray-400 '></div>
        <div className='  sm:h-[500px] h-[300px] w-full lg:w-[70%] bg-gray-400 relative '>
          <div className=' absolute bottom-0 left-0 rignttr '></div>
        </div>
      </div>
    </div>
    <div className=' w-full h-auto mt-15 flex-wrap flex justify-center items-center '>
      <div className=' w-[92%] h-auto flex flex-col lg:flex-row justify-center items-center gap-4 '>
        <div className=' w-full lg:w-[20%] h-auto lg:h-[500px] flex justify-center lg:justify-start items-center lg:items-start  '>
          <p className=' text-4xl flex justify-center items-start '>
          Our Story 
          <Image
          src={'./arrowrightdown.svg'}
          alt='Arrow'
          width={100}
          height={100}
          className='hidden lg:flex'
          />
          </p>
        </div>
        <div className=' w-full lg:w-[80%] h-[500px] bg-amber-800 p-4 '></div>
      </div>
    </div>
    <div className=' w-full h-auto mt-15 flex justify-center items-center '>
      <div className=' w-[92%] h-auto flex justify-center items-center flex-col flex-wrap bg-gray-300 p-4 '>
        <div className=' w-full text-6xl flex justify-center items-center '>Our team</div>
        <div className=' w-full h-[500px] '></div>
        <div className=' w-full h-[500px] '></div>
        <div className=' w-full h-[500px] '></div>
      </div>
    </div>
    {/* <div className=' w-full h-auto mt-5 flex justify-center items-center '>
      <div className=' w-[92%] h-[500px] bg-amber-300 '></div>
    </div> */}
    {/* <div className=' w-full h-auto mt-5 flex justify-center items-center '>
      <div className=' w-[92%] h-[500px] bg-amber-300 '></div>
    </div> */}
    {/* <div className=' w-full h-auto mt-5 flex justify-center items-center '>
      <div className=' w-[92%] h-[500px] bg-amber-300 '></div>
    </div> */}
    <div className=" w-full h-auto pt-4 pb-4 flex justify-center items-center mt-15 ">
      <div className=" w-[92%] bg-gray-200 lg:h-[300px] p-10 lg:p-20 ">
        <h1 className=" text-2xl lg:text-5xl ">Start Your Creativity Journey Today</h1>
        <p className=" mt-2 text-gray-400 text-[10px] lg:text-sm ">Unlock your potential with a free trail of our innovative game development platform</p>
        <div className="flex gap-2 mt-4">
          <button className=" pl-2 lg:pl-4 pr-2 lg:pr-4 pt-1 lg:pt-2 pb-1 lg:pb-2 border-2 border-black text-white bg-black ">Try</button>
          <button className=" pl-2 lg:pl-4 pr-2 lg:pr-4 pt-1 lg:pt-2 pb-1 lg:pb-2 border-2 border-black ">Learn More</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
