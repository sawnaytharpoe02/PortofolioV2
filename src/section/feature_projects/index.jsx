import React, { useEffect, useRef } from "react";
import { featuredProjects } from "../../utils/constant";
import Double from "../../components/Double";
import FeaturedProjectCardForSc from "../../components/FeaturedProjectCardForSc";
import { motion, useAnimation, useInView } from "framer-motion";

const FeatureProjects = () => {
  const titleRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(titleRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  const titleVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="featured-projects" className="w-full mx-auto py-12 lg:py-24">
      <motion.h2
        ref={titleRef}
        initial="initial"
        animate={controls}
        variants={titleVariants}
        className="text-4xl lg:text-5xl mb-4 px-4 lg:px-10">
        Featured Projects
      </motion.h2>
      <div className="h-fit">
        {/* laptop device */}
        <div className="hidden lg:block">
          <Double
            featuredProjects={[featuredProjects[0], featuredProjects[1]]}
          />
          {/* <Double
            featuredProjects={[featuredProjects[2], featuredProjects[3]]}
            reversed={true}
          /> */}
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
    </section>
  );
};

export default FeatureProjects;
