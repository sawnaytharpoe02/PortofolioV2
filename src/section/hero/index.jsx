import React from "react";
import { motion, transform } from "framer-motion";

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.05,
    },
  },
};

const letterVariant = {
  initial: { opacity: 0, y: 50 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const paragraphVariant = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.4,
    },
  },
};

const Hero = () => {
  const title = "Web Developer";

  return (
    <div className="w-full h-[90vh] lg:max-w-screen-xl lg:mx-auto  border border-red-400 flex items-center lg:items-end font-mango px-2 lg:px-20 py-10 pb-10">
      <div className="flex flex-col lg:flex-row items-end">
        <motion.h2
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative text-dynamic leading-none tracking-tight font-thin font-anderson">
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariant}>
              {char}
            </motion.span>
          ))}
          <span className="absolute w-[6rem] h-[6rem] lg:w-[10rem] lg:h-[10rem] bg-skiny -z-10 rounded-full bottom-[-20px] right-[20px] lg:bottom-[2px] lg:right-[100px]"></span>
        </motion.h2>
        <motion.p
          initial="initial"
          animate="animate"
          variants={paragraphVariant}
          className="w-[14rem] lg:w-[24rem] text-sm tracking-wide font-thin font-anderson mt-14 lg:mb-10 lg:-ml-32">
          Junior Web Developer passionate about crafting elegant, engaging
          websites with exceptional user experiences.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
