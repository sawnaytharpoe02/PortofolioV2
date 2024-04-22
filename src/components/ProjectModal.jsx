import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const ProjectModal = ({ modal, projects }) => {
  const { active, index } = modal;

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  const container = useRef(null);
  useEffect(() => {
    let xMoveContainer = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="w-[400px] h-[350px] absolute bg-white overflow-hidden pointer-events-none flex justify-center items-center">
        <div
          style={{ top: index * -100 + "%" }}
          className="w-full h-full absolute transition-all duration-150 ease-[cubic-bezier(0.76, 0, 0.24, 1)]">
          {projects.map((project, index) => {
            const { src, color } = project;

            return (
              <div
                className="w-full h-full flex justify-center items-center"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}>
                <img src={`/${src}`} width="300px" height="0" alt="image" />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectModal;
