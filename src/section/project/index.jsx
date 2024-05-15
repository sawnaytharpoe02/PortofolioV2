import React, { useState } from "react";
import ProjectCard from "../../components/projectCard";
import ProjectModal from "../../components/projectModal";
import { projects } from "../../constant";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const Project = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    console.log("more pjs");
    setShowMore(!showMore);
  };

  console.log(showMore);
  return (
    <main className="max-w-screen-xl min-h-screen mx-auto flex justify-center items-center">
      <div className="w-full flex flex-col items-center justify-center">
        {projects
          .filter((v) => v.id <= 4)
          .map((project, index) => {
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
          {showMore && (
            <>
              {projects
                .filter((v) => v.id > 4)
                .map((project, index) => (
                  <CSSTransition
                    className="w-full flex flex-col items-center justify-center"
                    timeout={500}
                    classNames="fade">
                    <ProjectCard
                      index={index}
                      title={project.title}
                      development={project.development}
                      setModal={setModal}
                      key={index}
                    />
                  </CSSTransition>
                ))}
            </>
          )}
        <div
          onClick={handleClick}
          className="py-2 px-4 bg-blue-500 text-white uppercase rounded-lg cursor-pointer mt-6">
          more projects
        </div>
      </div>

      <ProjectModal modal={modal} projects={projects} />
    </main>
  );
};

export default Project;
