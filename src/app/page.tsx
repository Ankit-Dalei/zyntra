const Home = () => {
  return (
    <>
      {/* Optional: Show loader here */}
      {/* <Loader /> */}

      <div className="md:h-[89vh] w-full flex justify-center items-center mt-3 mb-3">
        <div className="w-[88.7%] h-full bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 shadow-2xl rounded-3xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

          {/* Left Panel: 3D canvas or illustration */}
          <div className="h-full flex items-center justify-center bg-gradient-to-tr from-[#f97316] to-[#fb923c] text-white p-10 lg:rounded-tr-none lg:rounded-bl-3xl">
            {/* Replace this with a 3D canvas or model viewer */}
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Welcome to <br /> <span className="text-[#fff]">Zyntra 3D Community</span>
            </h1>
          </div>

          {/* Right Panel: Description and Actions */}
          <div className="h-full flex flex-col justify-center items-start p-10 bg-[#fff7ed] text-gray-800 lg:rounded-tr-3xl lg:rounded-bl-none">
            <h2 className="text-2xl font-bold mb-4">Collaborate, Create & Learn</h2>
            <p className="mb-6 text-lg">
              Join a vibrant community of 3D developers, learners, and designers building the future of immersive learning platforms.
            </p>
            <div className="space-x-4">
              <button className="relative px-6 py-2 rounded-xl bg-orange-500 text-white font-semibold overflow-hidden transition-all duration-500 group">
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 group-hover:text-white">Explore Now</span>
              </button>
              <button className="relative group inline-block rounded-2xl overflow-hidden bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-pink-400 via-orange-400 to-yellow-400 animate-border-spin border border-orange-500 mt-1.5 ">
                <span className="block w-full h-full rounded-2xl bg-white px-6 py-2 text-orange-500 font-semibold transition-all duration-700 ease-in-out group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:via-orange-400 group-hover:to-pink-400 group-hover:text-white">
                  Join Community
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
