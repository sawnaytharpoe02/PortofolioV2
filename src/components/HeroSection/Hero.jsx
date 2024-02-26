import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex flex-col leading-none px-10 mt-3">
      <div className="flex items-center justify-center space-x-8">
        <div className="w-[18rem] mt-6 leading-5">
          I’m a junior fullstack developer with a passion for innovation and
          creativity. I craft elegant and engaging websites that deliver
          exceptional user experiences.
        </div>
        <div className="w-68 h-0.5 bg-black"></div>
        <h1 className="font-mango text-[12em] tracking-wider uppercase">
          Crafting
        </h1>
      </div>
      {/* second part */}
      <div className="flex items-center justify-start space-x-8">
        <h1 className="font-mango text-[12em] tracking-wider uppercase ml-20">
          Tomorrow's
        </h1>
        <div className="w-[10em] h-0.5 bg-black"></div>
      </div>

      {/* third part */}
      <h1 className="font-mango text-[12em] tracking-wider uppercase ml-52">
        Digital Landscape
      </h1>
    </div>
  );
};

export default Hero;
