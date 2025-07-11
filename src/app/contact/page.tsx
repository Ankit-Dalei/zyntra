'use client'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import React, { useEffect, useRef } from 'react'


const Contact = () => {
  const focon=useRef(null);
  useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(focon.current, 
      { y: 0, opacity: 0 },
      { y: 0, opacity: 1, duration: 5 }
    );


  },[])
  return (
    <>
      <div ref={focon} className=" w-full h-auto flex justify-center items-center flex-col mb-6 ">
        <div className=" w-[92%] h-auto text-4xl sm:text-8xl mt-5 ">GET IN TOUCH</div>
        <div className=" w-[92%] h-auto mt-5 grids cols-2 gap-5 ">
          <div className=" w-full h-[90px] flex flex-col items-start justify-center gap-2 ">
            <label htmlFor="Name" className=" text-xl ">YOUR NAME</label>
            <input type="text" name="Name" id="Name" className=" border border-gray-300 h-[90%] w-full rounded-md " />
          </div>
          <div className=" w-full h-[90px] flex flex-col items-start justify-center gap-2 ">
            <label htmlFor="Email" className=" text-xl ">EMAIL ADDRESS</label>
            <input type="email" name="Email" id="Email" className=" border border-gray-300 h-[90%] w-full rounded-md " />
          </div>
          <div className=" w-full h-[90px] flex flex-col items-start justify-center gap-2 ">
            <label htmlFor="Contact" className=" text-xl ">CONTACT NUMBER</label>
            <input type="number" name="Contact" id="Contact" className=" border border-gray-300 h-[90%] w-full rounded-md  " />
          </div>
          <div className=" w-full h-[90px] flex flex-col items-start justify-center gap-2 ">
            <label htmlFor="Service" className=" text-xl ">{`SERVICES YOU'RE LOOKING FOR?`}</label>
            <input type="text" name="Service" id="Service" className=" border border-gray-300 h-[90%] w-full rounded-md " />
          </div>
        </div>
        <div className=" w-[92%] h-[290px] mt-5 flex flex-col items-start justify-center gap-2 ">
          <label htmlFor="message" className=" text-xl ">YOUR MESSAGE</label>
          <textarea name="message" id="message" className=" border border-gray-300 h-[90%] w-full rounded-md "></textarea>
        </div>
      </div>
    </>
  )
}

export default Contact

