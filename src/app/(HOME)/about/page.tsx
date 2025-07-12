'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const About = () => {
  const waw=useRef(null);
  const wawInner=useRef(null);

  const aboutcontent=useRef(null);
  const aboutmain=useRef(null);

  const abouttag=useRef(null);
  const abouttaglt=useRef(null);
  const abouttaglr=useRef(null);
  
  const storyhead=useRef(null);
  const storyhdlt=useRef(null);
  const storyhdlr=useRef(null);

  const teams=useRef(null);

  const mainlast=useRef(null);
  const mainlast1=useRef(null);

  useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);

   gsap.fromTo(
     wawInner.current,
     { opacity: 0 },
     { opacity: 1, duration: 2 }
   );
   gsap.to(wawInner.current, {
      scale: 2,
      scrollTrigger: {
        trigger: waw.current,
        start: 'top top',
        end: '+=500',
        scrub: true
      }
   });


    gsap.fromTo(
    aboutmain.current,
    {y:100 , opacity:0},
    {
      y:0,
      opacity:1,
      duration:2,
      scrollTrigger: {
        trigger: aboutcontent.current,
        start: "top 60%",
        end:'end 10%',
        toggleActions: "play none play reverse",
        scrub:true,
      }
    }
   )



   gsap.fromTo(
    abouttaglt.current,
    {x:-100 , opacity:0},
    {
      x:0,
      opacity:1,
      duration:2,
      scrollTrigger: {
        trigger: abouttag.current,
        start: "top 60%",
        end:'end 30%',
        toggleActions: "play none play reverse",
        scrub:true,
      }
    }
   )
   gsap.fromTo(
    abouttaglr.current,
    {x:100 , opacity:0},
    {
      x:0,
      opacity:1,
      duration:2,
      scrollTrigger: {
        trigger: abouttag.current,
        start: "top 60%",
        end:'end 30%',
        toggleActions: "play none play reverse",
        scrub:true,
      }
    }
   )



   gsap.fromTo(
    storyhdlt.current,
    {x:-100 , opacity:0},
    {
      x:0,
      opacity:1,
      duration:2,
      scrollTrigger: {
        trigger: storyhead.current,
        start: "top 60%",
        end:'end 30%',
        toggleActions: "play none play reverse",
        scrub:true,
      }
    }
   )
   gsap.fromTo(
    storyhdlr.current,
    {x:100 , opacity:0},
    {
      x:0,
      opacity:1,
      duration:2,
      scrollTrigger: {
        trigger: storyhead.current,
        start: "top 60%",
        end:'end 30%',
        toggleActions: "play none play reverse",
        scrub:true,
      }
    }
   )


   gsap.fromTo(
    teams.current,
    {y:-200 , opacity:0},
    {
      y:0,
      opacity:1,
      duration:2,
      scrollTrigger: {
        trigger: teams.current,
        start: "top 60%",
        end:'end 30%',
        toggleActions: "play none play reverse",
        scrub:true,
      }
    }
   )





   // mainlast animation
  gsap.fromTo(
    mainlast1.current,
    {opacity:0},
    {
      opacity:1,
      duration:2,
      scrollTrigger: {
        trigger: mainlast.current,
        start: "top 50%",
        toggleActions: "play none play reverse",
      }
    }
  )



  },[])
  return (
    <>
    <div ref={waw} className=' w-full h-auto mt-0 lg:mt-4 flex-wrap flex justify-center items-center overflow-hidden '>
      <div ref={wawInner} className=' w-[92%] h-auto sm:h-[600px] bg-gray-200 flex justify-center items-center p-7 text-[90px] lg:text-[190px] '>
        WHO ARE WE
      </div>
    </div>

    <div ref={aboutmain} className=' w-full h-auto mt-4 lg:mt-15 flex-wrap flex justify-center items-center '>
      <div ref={aboutcontent} className=' w-[92%] p-8 h-auto lg:h-[400px] bg-amber-300 flex flex-col lg:flex-row justify-center lg:justify-between items-center '>
        <p className=' w-full lg:w-[50%] p-4 lg:p-0 text-5xl/19 lg:text-6xl/19 '>We creafting a<span className=' text-gray-400 '>  better</span> platform for<span className=' text-gray-400 '>   developer</span></p>
        <p className=' lg:w-[30%] h-[90%] text-lg hidden lg:flex justify-center items-end '>Together we build a metaverse platform for next generation. It should be helpfull for personality development, creative thinking also learning new thing etc</p>
      </div>
    </div>

    <div ref={abouttag} className=' w-full h-auto mt-15 flex-wrap flex justify-center items-center overflow-hidden '>
      <div className=' w-[92%] h-auto flex flex-col lg:flex-row justify-center items-center gap-4  '>
        <div ref={abouttaglt} className='  sm:h-[500px] h-[300px] w-full lg:w-[30%] bg-gray-400 '></div>
        <div ref={abouttaglr} className='  sm:h-[500px] h-[300px] w-full lg:w-[70%] bg-gray-400 relative '>
          <div className=' absolute bottom-0 left-0 rignttr '></div>
        </div>
      </div>
    </div>

    <div ref={storyhead} className=' w-full h-auto mt-15 flex-wrap flex justify-center items-center overflow-hidden '>
      <div className=' w-[92%] h-auto flex flex-col lg:flex-row justify-center items-center gap-4 '>
        <div ref={storyhdlt} className=' w-full lg:w-[20%] h-auto lg:h-[500px] flex justify-center lg:justify-start items-center lg:items-start  '>
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
        <div ref={storyhdlr} className=' w-full lg:w-[80%] h-[500px] bg-amber-800 p-4 '></div>
      </div>
    </div>

    <div ref={teams} className=' w-full h-auto mt-15 flex justify-center items-center overflow-hidden '>
      <div className=' w-[92%] h-auto flex justify-center items-center flex-col flex-wrap bg-gray-300 p-4 '>
        <div className=' w-full text-6xl flex justify-center items-center '>Our team</div>
        <div className=' w-full h-[500px] '></div>
        <div className=' w-full h-[500px] '></div>
        <div className=' w-full h-[500px] '></div>
      </div>
    </div>
    {/* <div className=' w-full h-auto mt-5 flex justify-center items-center '>
      <div className=' w-[92%] h-[500px] bg-amber-300 flex flex-col justify-center items-center '>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div> */}
    {/* <div className=' w-full h-auto mt-5 flex justify-center items-center '>
      <div className=' w-[92%] h-[500px] bg-amber-300 '></div>
    </div> */}
    {/* <div className=' w-full h-auto mt-5 flex justify-center items-center '>
      <div className=' w-[92%] h-[500px] bg-amber-300 '></div>
    </div> */}
    <div ref={mainlast} className=" w-full h-auto pt-4 pb-4 flex justify-center items-center mt-9 ">
      <div ref={mainlast1} className=" w-[92%] bg-gray-200 lg:h-[300px] p-10 lg:p-20 ">
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
