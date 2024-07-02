import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { TbView360 } from "react-icons/tb";
import { useInView, useAnimation, motion } from "framer-motion";

const FeaturedProjectCardForSc = ({ project }) => {
  const ref = useRef(null);
  const inViewControls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      inViewControls.start("animate");
    }
  }, [inView, inViewControls]);

  const projectCardForScVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inViewControls}
      variants={projectCardForScVariants}
      className="mt-12">
      <div
        className="h-[12rem] rounded-sm"
        style={{ background: project.bgColor }}>
        <div className="h-full flex justify-center items-center">
          <p
            className="text-4xl tracking-wider uppercase text-center"
            style={{ color: project.titleColor }}>
            {project.title}
          </p>
        </div>
      </div>

      <div className="space-y-3 mt-4">
        <div>
          <h4 className="text-lg uppercase">Project Concept</h4>
          <p className="text-grey mt-1">{project.description}</p>
        </div>
        <div className="space-y-2">
          <h5 className="text-lg uppercase">Tech Behind Implemented</h5>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <div
                key={index}
                className="bg-skiny rounded-[.44rem] text-[14px] tracking-wide py-0.5 px-2.5 inline-block">
                {tech}
              </div>
            ))}
          </div>
        </div>
        {project.demoCredentials && (
          <div className="space-y-1">
            <h5 className="text-lg uppercase">Demo Credentials</h5>
            <div className="flex flex-wrap gap-2 text-[15px]">
              {project.demoCredentials.email ? (
                <p>Email ({project.demoCredentials.email})</p>
              ) : (
                <p>Username ({project.demoCredentials.username})</p>
              )}
              <p>Password ({project.demoCredentials.password})</p>
            </div>
          </div>
        )}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <FaGithub className="text-2xl" />
            <a
              href={project.repo}
              className="cursor-pointer hover:text-grey"
              target="_blank">
              Source Code
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <TbView360 className="text-2xl" />
            <a
              href={project.href}
              className="cursor-pointer hover:text-grey"
              target="_blank">
              Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCardForSc;
