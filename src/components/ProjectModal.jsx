import React from "react";

const ProjectModal = ({ modal, projects }) => {
  return (
    <div className="absolute bg-white width-[400px] height-[350px] overflow-hidden pointer-events-none flex items-center justify-center">
      <div className="w-full h-full absolute transition duration-500 ">
        {projects.map((project, index) => {
          const { src, color } = project;

          return (
            <div
              key={`projectmodal_${index}`}
              className=""
              style={{ backgroundColor: color }}>
              <img src={`/${src}`} width={300} height={0} alt="image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectModal;
