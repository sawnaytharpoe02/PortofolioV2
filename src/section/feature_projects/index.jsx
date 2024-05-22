import React from "react";
import { featuredProjects } from "../../utils/constant";
import Double from "../../components/Double";

const FeatureProjects = () => {
  return (
    <main className="w-full mx-auto py-24">
      <h2 className="text-5xl mb-4 px-10">Featured Projects</h2>
      <div className="h-fit">
        <Double featuredProjects={[featuredProjects[0], featuredProjects[1]]} />
        <Double
          featuredProjects={[featuredProjects[0], featuredProjects[1]]}
          reversed={true}
        />
      </div>
    </main>
  );
};

export default FeatureProjects;
