import React from "react";
import { FaGithub } from "react-icons/fa6";

const FeaturedProjectCard = ({ project }) => {
  return (
    <>
      <div
        onClick={() => console.log(project.href)}
        className="pb-[66%] relative"
        style={{ background: project.bgColor }}>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center">
            <p className="text-6xl tracking-wider uppercase" style={{color: project.titleColor}}>
              {project.title}
            </p>
            <div className="text-center mt-2">
              <p className="text-grey">{project.description}</p>
            </div>
            {/* <div className="text-lg flex items-center mt-2 space-x-2 text-neutral-500">
              <GithubIcon />
              <a href={project.repo} target="_blank">
                Source Code
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-2 px-5">
        <div className="space-y-2">
          <h5 className="text-xl uppercase">Tech Behind Implemented</h5>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <div
                key={index}
                className="bg-skiny rounded-[.55rem] text-[14px] tracking-wide py-0.5 px-2.5 inline-block">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaGithub className="text-3xl" />
          <a href={project.repo} className="cursor-pointer hover:text-grey" target="_blank">Source Code</a>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjectCard;
