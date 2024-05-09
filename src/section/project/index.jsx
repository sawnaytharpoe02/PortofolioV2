import React, { useState } from "react";
import ProjectCard from "../../components/projectCard";
import ProjectModal from "../../components/projectModal"
import { projects } from "../../constant";

const Project = () => {

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className="max-w-screen-xl h-screen mx-auto flex justify-center items-center">
      <div className="w-full flex flex-col items-center justify-center">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              index={index}
              title={project.title}
              development={project.development}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <ProjectModal modal={modal} projects={projects} />
    </main>
  );
};

export default Project;
