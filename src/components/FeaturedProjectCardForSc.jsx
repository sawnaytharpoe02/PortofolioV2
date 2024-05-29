import React from "react";
import { FaGithub } from "react-icons/fa6";
import { TbView360 } from "react-icons/tb";

const FeaturedProjectCardForSc = ({ project }) => {
  return (
    <div className="mt-10">
      <div className="h-[12rem] rounded-sm" style={{ background: project.bgColor }}>
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
          <h4 className="text-xl uppercase">Project Concept</h4>
          <p className="text-grey mt-1">{project.description}</p>
        </div>
        <div className="space-y-2">
          <h5 className="text-xl uppercase">Tech Behind Implemented</h5>
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
        <div className="flex items-center gap-4">
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
            <TbView360 className="text-2xl"/>
            <a
              href={project.href}
              className="cursor-pointer hover:text-grey"
              target="_blank">
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCardForSc;
