import React, { useRef, useEffect } from "react";
import { GoTriangleRight } from "react-icons/go";
import { languages, frameworks } from "../../utils/constant";
import { useInView, useAnimation, motion, stagger } from "framer-motion";

const MyExpertise = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  const contentVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const languagesFrameworksVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={controls}
      variants={staggerContainer}
      id="expertise"
      className="max-w-screen-xl mx-auto flex flex-col lg:flex-row px-4 lg:px-0 py-16 lg:py-24">
      <motion.p
        variants={contentVariants}
        className="basis-full lg:basis-5/12 text-4xl lg:text-5xl mb-4">
        My Expertise
      </motion.p>
      <motion.div
        variants={staggerContainer}
        className="basis-full lg:basis-7/12 space-y-4 font-medium tracking-wide text-grey">
        <motion.p
          variants={contentVariants}
          className="text-lg lg:leading-6 lg:px-2 font-normal tracking-wide mb-10">
          I love bridging the gap between your vision and reality. I craft
          impactful digital experiences! Turning ideas into beautiful,
          user-friendly websites using a developer's toolkit. Always eager to
          learn more and explore new possibilities.
        </motion.p>
        <motion.div
          variants={languagesFrameworksVariants}
          className="flex flex-col lg:flex-row gap-12 lg:px-2">
          <div>
            <p className="uppercase text-black mb-4 font-lg">languages</p>
            <div>
              {languages.map((language, index) => (
                <div key={index} className="flex items-center mt-2 space-x-2">
                  <GoTriangleRight />
                  <p>{language}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="uppercase text-black mb-4 font-lg"></p>
            <div className="grid grid-cols-2">
              {frameworks.slice(0, 8).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center mt-2 space-x-2 lg:mr-12">
                  <GoTriangleRight />
                  <p>{item}</p>
                </div>
              ))}
              {frameworks.slice(8, 15).map((item, index) => (
                <div key={index} className="flex items-center mt-2 space-x-2">
                  <GoTriangleRight />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default MyExpertise;
