'use client';

const Home = () => {
  const Docs = [
    {heading:'Seamless integration of Tools for Effortless Game Development and Design', describe:'Experience a streamlined workflow from concept to completion.', butt:'Explore Docs', svg:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={30} width={30}><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>), svg2:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={15} width={15}><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>)},
    {heading:'Comprehensive Learning Resources to Enhance Your Development Skills', describe:'Access tutorials, guides, and community support to sharpen your expertise.', butt:'Learn More', svg:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={30} width={30}><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>), svg2:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={15} width={15}><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>)},
    {heading:'Collaborative Environment for Developers to Share and Innovates Together', describe:'Join a vibrant community that fosters creativity and collaboration.', butt:'Join Us', svg:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={30} width={30}><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>), svg2:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={15} width={15}><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>)}
  ];
  return (
    <>
    {/*  */}
    <div className=" w-full h-auto pt-4 pb-4 flex justify-center items-center ">
      <div className=" w-[92%] flex flex-col flex-wrap justify-center items-start">
        <p className=" text-3xl sm:text-4xl  lg:text-7xl md:w-[60%] lg:w-[70%] ">Unleash Your Creativity: Build Games and 3D Assests Like Never Before!</p>
        <p className="text-sm text-gray-400 mt-5">Join our innovation platform to transform your ideas into stunning 3D experiances and games.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="border-2 border-gray-700 pt-2 pb-2 pl-5 pr-5 bg-gray-900 text-white">Sign Up</button>
          <button className="border-2 border-gray-900 pt-2 pb-2 pl-5 pr-5">Learn More</button>
        </div>
      </div>
    </div>
    {/* video */}
    <div className=" w-full h-auto pt-4 pb-4 flex justify-center items-center mt-4 ">
      <div className=" w-[92%] bg-gray-300 h-[200px] md:h-[650px] ">
      </div>
    </div>
    {/* texts */}
    <div className=" w-full h-auto pt-4 pb-4 flex justify-center items-center ">
      <div className=" w-[92%] flex flex-wrap justify-center items-start mt-9 ">
        <div className=" lg:w-[50%] sm:text-5xl text-4xl ">Unlock Your Creative Potential with Our Cutting-Edge Development Features</div>
        <div className=" lg:w-[50%] sm:text-[16px] text-[13px] text-wrap lg:mt-0 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam assumenda omnis molestiae ab consequatur magni harum ad neque dolorum consectetur, eos quidem quas sequi vel velit suscipit architecto quis illum nobis maiores excepturi nemo mollitia! Tempora rem incidunt adipisci beatae explicabo dolores! Optio aspernatur at cumque recusandae ducimus. Laboriosam, perferendis, nulla maxime voluptates iure tempore minus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque enim sed sapiente qui laudantium dolor deleniti deserunt, dolores ad consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, consectetur doloremque est totam repellat animi ipsam distinctio magni quidem nihil.
        </div>
      </div>
    </div>
    {/*  */}
    <div className=" w-full h-auto pt-4 pb-4 flex justify-center items-center ">
      <div className=" w-[92%] mt-9 cols-3 grids gap-15">
        {Docs.map(({heading,describe,butt,svg})=>(
          <div key={heading} className=" flex flex-col flex-wrap justify-center items-centeer w-full ">
          <div className=" w-full h-[50px] ">{svg}</div>
          <p className=" w-[85%] text-2xl mt-2 ">{heading}</p>
          <p className=" w-full text-md text-gray-400 mt-2 ">{describe}</p>
          <button className=" mt-2 w-full flex justify-start items-center text-gray-500 ">{butt} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={20} height={10}><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>
        </div>
        ))}
      </div>
    </div>
    {/*  */}
    <div className=" w-full h-auto pt-4 pb-4 flex justify-center items-center ">
      <div className=" w-[92%] grids cols-2 gap-3 lg:gap-20 mt-9 ">
        <div className=" h-auto w-full flex flex-col items-center justify-center ">
          <h2 className=" w-full text-5xl/13 ">Unlock Your Creative Potential with Our Game Development Platform</h2>
          <p className=" mt-5 text-lg ">Our platform streamlines the game development process, allowing you to focus on Creativity. Join a thriving community of developers and elevate your projects with collaborative support.</p>
          <div className=" w-full flex flex-col ">
            {Docs.map(({heading,svg2})=>(
              <div key={heading} className=" flex justify-start items-center gap-3 mt-4 ">{svg2} {heading}</div>
            ))}
        </div>
        </div>
        <div className="bg-gray-400 h-[650px] w-full"></div>
      </div>
    </div>
    {/*  */}
    <div className=" w-full h-auto pt-4 pb-4 flex justify-center items-center mt-13 ">
      <div className=" w-[92%] grids cols-2 gap-20  ">
        <div className="bg-gray-400 h-[650px] w-full"></div>
        <div className=" h-auto w-full flex flex-col items-center justify-center ">
          <h2 className=" w-full text-5xl/13 ">Unlock Your Creative Potential with Our Game Development Platform</h2>
          <p className=" mt-5 text-lg ">Our platform streamlines the game development process, allowing you to focus on Creativity. Join a thriving community of developers and elevate your projects with collaborative support.</p>
          <div className=" w-full flex flex-col ">
            {Docs.map(({heading,svg2})=>(
              <div key={heading} className=" flex justify-start items-center gap-3 mt-4 ">{svg2} {heading}</div>
            ))}
        </div>
        </div>
      </div>
    </div>
    {/* <div className=" w-full h-auto pt-4 pb-4 bg-amber-400 flex justify-center items-center ">
      <div className=" w-[92%] bg-amber-950 h-5 "></div>
    </div> */}
    {/*  */}
    <div className=" w-full h-auto pt-4 pb-4 flex justify-center items-center mt-9 ">
      <div className=" w-[92%] bg-gray-200 h-[300px] p-20 ">
        <h1 className=" text-5xl ">Start Your Creativity Journey Today</h1>
        <p className=" mt-2 text-gray-400 text-sm ">Unlock your potential with a free trail of our innovative game development platform</p>
        <div className="flex gap-2 mt-4">
          <button className=" pl-4 pr-4 pt-2 pb-2 border-2 border-black text-white bg-black ">Try</button>
          <button className=" pl-4 pr-4 pt-2 pb-2 border-2 border-black ">Learn More</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
