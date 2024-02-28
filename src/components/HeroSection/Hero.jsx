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
      className="w-full flex flex-col leading-none px-16 mt-3 text-dynamic tracking-wide font-mango">
      <HeroRowTop title={"Crafting"} />
      <HeroRowCenter title={"Tomorrow's"} />
      <HeroRowBottom title={"Digital Techscape"} />
    </motion.div>
  );
};

const AnimateHeroLetters = ({ title }) => (
  <motion.span variants={letterAnimate} className="inline-block uppercase">
    {title}
  </motion.span>
);

const introPara = `I’m a junior fullstack developer with a passion for innovation and
        creativity. I craft elegant and engaging websites that deliver
        exceptional user experiences.`;

const HeroRowTop = ({ title }) => {
  return (
    <div className="flex items-center justify-end space-x-8">
      <div className="w-[18rem] mt-10 leading-5 font-anderson text-base tracking-normal">
        {introPara.split("").map((char, index) => (
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            key={index}>
            {char}
          </motion.span>
        ))}
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
