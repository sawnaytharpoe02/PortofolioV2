import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-[90vh] border border-red-400 flex items-end font-mango px-20 py-10 pb-10">
      <div className="flex items-end">
        <p className="relative text-dynamic leading-none tracking-tight font-thin font-anderson">
          <span>Web</span>
          <br />
          <span>Developer</span>
          <span className="absolute w-[8rem] h-[8rem] bg-skiny -z-10 rounded-full bottom-[18px] right-[-30px]"></span>
        </p>
        <p className="w-[20rem] text-sm font-medium font-dmsan tracking-normal mb-8">
          Junior Web Developer passionate about crafting elegant, engaging
          websites with exceptional user experiences.
        </p>
      </div>
    </div>
  );
};

export default Hero;
