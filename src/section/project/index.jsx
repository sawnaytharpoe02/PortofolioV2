import React, { useState, useRef, useEffect } from "react";
import { projects } from "../../utils/constant";
import ProjectCard from "../../components/ProjectCard";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  const projectSection = useRef(null);

  useEffect(() => {
    const el = projectSection.current;

    const trigger = {
      trigger: el,
      start: "-20% center",
      end: "80% center",
      scrub: true,
      markers: true,
      onEnter: () => {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        document.body.style.transition = "all 0.4s";
      },
      onLeave: () => {
        document.body.style.backgroundColor = "initial";
        document.body.style.color = "#222";
        document.body.style.transition = "all 0.4s";
      },
      onEnterBack: () => {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        document.body.style.transition = "all 0.4s";
      },
      onLeaveBack: () => {
        document.body.style.backgroundColor = "initial";
        document.body.style.color = "#222";
        document.body.style.transition = "all 0.4s";
      },
    };

    ScrollTrigger.create(trigger);
  }, []);

  return (
    <main ref={projectSection} className="max-w-screen-xl mx-auto mt-32">
      <div className="px-32 pb-20 space-y-4">
        <h3 className="text-5xl font-semibold">All Projects</h3>
        <p>I will update these projects alittle by little. All of this project show my starting point of my web development learning. </p>
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
          className="py-2 px-4 mb-20 transition duration-150 ease-in text-white rounded-full cursor-pointer mt-6">
          {!showMore ? "More Projects" : "Less Projects"}
          <FaArrowUpRightFromSquare />
        </div>
      </div>
    </main>
  );
};

export default Project;
