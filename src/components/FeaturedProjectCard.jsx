import React from "react";

const FeaturedProjectCard = ({ project }) => {
  return (
    <>
      <div
      onClick={() => console.log(project.href)}
        className="pb-[66%] relative"
        style={{ backgroundColor: project.color }}>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h4 className="text-6xl tracking-wider uppercase text-white">
            {project.title}
          </h4>
          <a href={project.repo} target="_blank">Source Code</a>
          <a href={project.href} target="_blank">Link</a>
        </div>
      </div>

      <div className="space-y-3 mt-2 px-5">
        <div className="space-y-2">
          <h5 className="text-xl uppercase">Project concept</h5>
          <p className="text-grey">{project.description}</p>
        </div>
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
      </div>
    </>
  );
};

export default FeaturedProjectCard;
