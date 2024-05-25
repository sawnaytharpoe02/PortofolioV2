import React, { useState } from "react";
import { projects } from "../../utils/constant";
import ProjectCard from "../../components/ProjectCard";

const Project = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="max-w-screen-lg mx-auto mt-10 lg:mt-0">
      <div className="mb-10 lg:mb-20 space-y-2 px-4 lg:px-0">
        <h3 className="text-4xl lg:text-5xl">All Projects</h3>
        <p className="text-md lg:text-lg tracking-wide">
          I will be updating these projects gradually to reflect my growth.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center px-4 lg:px-0">
        <div className="w-full flex mb-4 font-medium">
          <div className="basis-3/12 lg:basis-1/12">
            <p>Year</p>
          </div>
          <div className="basis-9/12 lg:basis-3/12">
            <p>Project</p>
          </div>
          <div className="hidden lg:block basis-2/12">
            <p>Development</p>
          </div>
          <div className="hidden lg:block basis-3/12">
            <p>Built with</p>
          </div>
          <div className="hidden lg:block basis-3/12 pl-8">
            <p>Link</p>
          </div>
        </div>
        {projects
          .filter((v) => v.id <= 8)
          .map((project, index) => (
            <ProjectCard index={index} project={project} key={index} />
          ))}
        {showMore && (
          <>
            {projects
              .filter((v) => v.id > 8)
              .map((project, index) => (
                <ProjectCard index={index} project={project} key={index} />
              ))}
          </>
        )}
        <div
          onClick={handleClick}
          className="bg-neutral-800 hover:bg-neutral-700 text-white py-2 px-6 mb-20 flex items-center space-x-2 transition duration-150 ease-in rounded-full cursor-pointer mt-6">
          <p>{!showMore ? "More Projects" : "Less Projects"}</p>
        </div>
      </div>
    </section>
  );
};

export default Project;
