import React from "react";
import { motion } from "framer-motion";

const letterAnimate = {
  initial: {
    y: "65%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.1 }}
      className="max-w-screen-lg px-5 mx-auto flex flex-col leading-none mt-3 text-dynamic tracking-wide font-mango py-10">
      <HeroRowTop title={"FullStack."} />
      <HeroRowCenter title={"Passionate."} />
      <HeroRowBottom title={"Learning."} />
    </motion.div>
  );
};

const AnimateHeroLetters = ({ title }) => (
  <motion.span variants={letterAnimate} className="inline-block uppercase">
    {title}
  </motion.span>
);

const HeroRowTop = ({ title }) => {
  return (
    <div className="flex items-center justify-end space-x-8">
      <div className="w-[17rem] text-sm font-medium font-dmsan tracking-normal">
        I’m a junior web developer with a passion for innovation and
        creativity. I craft elegant and engaging websites that deliver
        exceptional user experiences.
      </div>
      <AnimateHeroLetters title={title} />
    </div>
  );
};

const HeroRowCenter = ({ title }) => {
  return (
    <div className="flex items-center justify-start space-x-8 -mt-8">
      <AnimateHeroLetters title={title} />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 0.6 }}
        className="h-0.5 bg-black"></motion.div>
    </div>
  );
};

const HeroRowBottom = ({ title }) => {
  return (
    <div className="flex justify-end -mt-8">
      <AnimateHeroLetters title={title} />
    </div>
  );
};

export default Hero;
