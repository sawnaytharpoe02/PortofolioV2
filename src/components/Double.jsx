import React, { useRef } from "react";
import FeaturedProjectCard from "./FeaturedProjectCard";

const Double = ({ featuredProjects, reversed }) => {
  const firstDiv = useRef(null);
  const secondDiv = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    const firstDivPercent = 66.66 - currentXPercent * 0.33;
    const secondDivPercent = 33.33 + currentXPercent * 0.33;
    firstDiv.current.style.width = `${firstDivPercent}%`;
    secondDiv.current.style.width = `${secondDivPercent}%`;

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="flex mt-[10vh] h-[54vw]">
      {/* feature projcet 01 */}
      <div ref={firstDiv} className="w-[66.66%]">
        <FeaturedProjectCard project={featuredProjects[0]} />
      </div>

      {/* feature project 02 */}
      <div ref={secondDiv} className="w-[33.33%]">
        <FeaturedProjectCard project={featuredProjects[1]} />
      </div>
    </div>
  );
};

export default Double;
