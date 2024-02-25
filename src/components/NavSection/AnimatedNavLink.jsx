import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedNavLink = ({ title }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-pointer">
      <AnimateWord
        title={title}
        animation={letterAnimation}
        isHovered={isHovered}
      />
      <div className="absolute top-0">
        <AnimateWord
          title={title}
          animation={letterAnimationTwo}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
};

const titlteAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.003,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.003,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      // ease: [0.6, 0.01, 0.05, 0.95],
      ease: [0.01, 0.08, 0.09, 0.55],
      type: "tween",
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      // ease: [0.6, 0.01, 0.05, 0.95],
      ease: [0.01, 0.08, 0.09, 0.55],
      type: "tween",
    },
  },
};

const AnimateWord = ({ title, animation, isHovered }) => {
  return (
    <motion.span
      variants={titlteAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative">
      {title.split("").map((letter, i) =>
        letter === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            key={i}
            variants={animation}
            className="relative inline-block whitespace-nowrap">
            {letter}
          </motion.span>
        )
      )}
    </motion.span>
  );
};

export default AnimatedNavLink;
