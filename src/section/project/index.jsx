import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectModal from "../../components/ProjectModal";

const Project = () => {
  const projects = [
    {
      title: "C2 Montreal",
      development: "Fullstack",
      src: "one.jng",
      color: "#000000",
    },

    {
      title: "Office Studio",
      development: "Backend",
      src: "two.png",
      color: "#8C8C8C",
    },

    {
      title: "Locomotive",
      development: "Frontend",
      src: "three.png",
      color: "#EFE8D3",
    },

    {
      title: "Silencio",
      development: "Design & Frontend",
      src: "two.png",
      color: "#706D63",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main>
      <div className="max-w-screen-lg px-5 mx-auto ">
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
        <ProjectModal modal={modal} projects={projects} />
      </div>
    </main>
  );
};

export default Project;
