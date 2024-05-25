import React from "react";
import { featuredProjects } from "../../utils/constant";
import Double from "../../components/Double";
import FeaturedProjectCardForSc from "../../components/FeaturedProjectCardForSc";

const FeatureProjects = () => {
  return (
    <main className="w-full mx-auto py-12 lg:py-24">
      <h2 className="text-4xl lg:text-5xl mb-4 px-4 lg:px-10">
        Featured Projects
      </h2>
      <div className="h-fit">
        {/* laptop device */}
        <div className="hidden lg:block">
          <Double
            featuredProjects={[featuredProjects[0], featuredProjects[1]]}
          />
          <Double
            featuredProjects={[featuredProjects[0], featuredProjects[1]]}
            reversed={true}
          />
        </div>

        {/* mobile device */}
        <div className="block lg:hidden">
          {featuredProjects.map((project, index) => (
            <div key={index} className="px-4">
              <FeaturedProjectCardForSc project={project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FeatureProjects;
