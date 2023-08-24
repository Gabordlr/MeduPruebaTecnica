import React from 'react';

export default function Header() {
  return (
    <header className="flex flex-col bg-gradient-to-r from-[#00ffd1] via-cyan-400 to-sky-400 w-screen h-1/12">
      <div className="flex justify-between">
        <h1 className="text-4xl p-5 font-bold text-gray-950">Medu Movie Service</h1>
        <div>
          {/* Button that currently doesnt have any function*/}
          <button
            className="self-end m-5 relative text-center h-10 px-5 transition-all duration-500
            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all
            before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50
            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
            after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
          >
            <span className="relative text-white uppercase font-thin">Login</span>
          </button>
          {/* Button that currently doesnt have any function*/}
          <button
            className="m-5 relative text-center h-10 px-5 transition-all duration-500
            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all
            before:duration-300 before:opacity-40 before:hover:opacity-0 before:hover:scale-50
            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
            after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
          >
            <span className="relative text-white uppercase font-thin">Free Trail</span>
          </button>
        </div>
      </div>
    </header>
  );
}