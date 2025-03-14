import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-50"
      >
        <div className="blur-[106px] lg:h-56 h-44 bg-gradient-to-br from-primary to-purple-400 dark:from-slate-100"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r  to-sky-300 from-cyan-400 dark:to-white"></div>
      </div>
    </div>
  );
};

export default Hero;
