import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-[34rem] px-20 border border-red-400 flex items-end font-mango py-10 pb-0 mt-18">
      <div className="flex items-end">
        <p className="relative text-dynamic leading-none tracking-tight font-thin font-anderson">
          <span>Web</span>
          <br />
          <span>Developer</span>
          <span className="absolute w-[8rem] h-[8rem] bg-[#ebdcc9] -z-10 rounded-full bottom-[18px] right-[-30px]"></span>
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
