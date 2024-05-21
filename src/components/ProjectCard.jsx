import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { GithubIcon } from "../utils/general-icons";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="w-full flex py-5 border-t border-t-neutral-200 text-neutral-900">
        <div className="basis-1/12">
          <p>{project.year}</p>
        </div>

        <div className="basis-3/12">
          <h2 className="text-lg font-medium">{project.title}</h2>
        </div>

        <div className="basis-2/12">
          <div className="flex flex-wrap">
            {project.development.map((el, index) => (
              <p key={index}>{index !== project.development.length - 1 ? el + " ," : el}</p>
            ))}
          </div>
        </div>

        <div className="basis-3/12">
          <div className="flex flex-wrap gap-2">
            {project.stacks.map((stack, index) => (
              <div
                key={index}
                className="bg-neutral-200 text-neutral-800 rounded-full text-[14px] tracking-wide py-0.5 px-2.5 inline-block">
                {stack}
              </div>
            ))}
          </div>
        </div>

        <div className="basis-3/12 pl-8">
          {project.href ? (
            <a
              href={project.href}
              className="transition-all duration-300 ease-in-out flex items-center hover:text-neutral-400">
              {project.href.replace(/^https?:\/\//, "")}
              <MdArrowOutward />
            </a>
          ) : (
            <a
              href={project.github}
              className="transition-all duration-300 ease-in-out flex items-center gap-1 hover:text-neutral-400">
              Github <GithubIcon />
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
