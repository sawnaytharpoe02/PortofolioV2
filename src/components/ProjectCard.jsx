import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full grid grid-cols-4 gap-4 items-center py-5 border-t border-t-neutral-200 group text-neutral-500">
      <div>
        <h2 className="text-lg group-hover:text-neutral-600 transition-all duration-300 ease-in-out">
          {project.title}
        </h2>
      </div>

      <div className="flex gap-2">
        {project.stacks.map((stack, index) => (
          <div
            key={index}
            className="border border-neutral-800 text-neutral-900 rounded-full text-[14px] tracking-wide py-0.5 px-2.5 inline-block">
            {stack}
          </div>
        ))}
      </div>

      <div>
        <p className="group-hover:text-neutral-600 transition-all duration-300 ease-in-out">
          {project.development}
        </p>
      </div>

      <div>
        {project.href ? (
          <a
            href={project.href}
            className="group-hover:text-neutral-600 transition-all duration-300 ease-in-out">
            {project.href.replace(/^https?:\/\//, "")}
          </a>
        ) : (
          <a
            href={project.github}
            className="group-hover:text-neutral-600 transition-all duration-300 ease-in-out">
            Github
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
