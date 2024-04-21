import React from "react";

const ProjectCard = ({ index, setModal, title, development }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="w-full flex justify-between items-center py-6 px-28 cursor-pointer border-t broder-t-neutral-500 group">
      <h2 className="text-4xl group-hover:translate-x-[-10px] group-hover:opacity-50 transition-all duration-300 ease-in-out">
        {title}
      </h2>

      <p className="group-hover:translate-x-[10px] group-hover:opacity-50 transition-all duration-300 ease-in-out">
        {development} Development
      </p>
    </div>
  );
};

export default ProjectCard;
