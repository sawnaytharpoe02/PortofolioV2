import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const ProjectModal = ({ modal, projects }) => {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

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

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
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
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="w-[80px] h-[80px] rounded-full bg-[#455CE9] absolute text-white z-10 flex items-center justify-center text-sm pointer-events-none"></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="w-[80px] h-[80px] rounded-full bg-[#455CE9] absolute text-white z-10 flex items-center justify-center text-sm pointer-events-none bg-transparent">
        View
      </motion.div>
    </>
  );
};

export default ProjectModal;
