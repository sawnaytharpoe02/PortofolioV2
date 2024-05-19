import React, { useState } from "react";
import { projects } from "../../utils/constant";
import ProjectCard from "../../components/ProjectCard";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Project = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <main className="max-w-screen-lg mx-auto mt-20">
      <div className="pb-20 space-y-4">
        <h3 className="text-5xl font-semibold">All Projects</h3>
        <p>
          I will update these projects alittle by little. All of this project
          show my starting point of my web development learning.{" "}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
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
          className="py-2 px-4 mb-20 flex items-center space-x-2 text-neutral-800 transition duration-150 ease-in rounded-full cursor-pointer mt-6">
          <p>{!showMore ? "More Projects" : "Less Projects"}</p>
          <FaArrowUpRightFromSquare />
        </div>
      </div>
    </main>
  );
};

export default Project;
