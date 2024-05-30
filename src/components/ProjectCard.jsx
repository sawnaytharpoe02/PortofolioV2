import React, { useRef, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { GithubIcon } from "../utils/general-icons";
import { useAnimation, useInView, motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  if (isInView) {
    controls.start("animate");
  }

  const cardVariants = { 
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={cardVariants}
        className="w-full flex py-5 border-t border-t-neutral-200 text-grey">
        <div className="basis-3/12 lg:basis-1/12">
          <p>{project.year}</p>
        </div>

        <div className="hidden lg:block basis-3/12">
          <h2 className="text-lg font-medium">{project.title}</h2>
        </div>

        <div className="block lg:hidden lg:basis-9/12 ">
          <a
            href={project.href ? project.href : project.github}
            target="_blank"
            className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-neutral-400">
            <h2 className="text-md font-medium tracking-wide">
              {project.title}
            </h2>
            <MdArrowOutward />
          </a>
        </div>

        <div className="hidden lg:block basis-2/12">
          <div className="flex flex-wrap">
            {project.development.map((el, index) => (
              <p key={index}>
                {index !== project.development.length - 1 ? el + " ," : el}
              </p>
            ))}
          </div>
        </div>

        <div className="hidden lg:block basis-3/12">
          <div className="flex flex-wrap gap-2">
            {project.stacks.map((stack, index) => (
              <div
                key={index}
                className="bg-skiny text-neutral-800 rounded-full text-[14px] tracking-wide py-0.5 px-2.5 inline-block">
                {stack}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block basis-3/12 pl-8">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              className="transition-all duration-300 ease-in-out flex items-center hover:text-neutral-400">
              {project.href.replace(/^https?:\/\//, "")}
              <MdArrowOutward />
            </a>
          ) : (
            <a
              href={project.github}
              target="_blank"
              className="transition-all duration-300 ease-in-out flex items-center gap-1 hover:text-neutral-400">
              Github <GithubIcon />
            </a>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
