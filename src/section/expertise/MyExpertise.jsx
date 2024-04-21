import React from "react";
import { GoTriangleRight } from "react-icons/go";

const Languages = [
  "HTML",
  "CSS",
  "VANILLA JAVASCRIPT",
  "SASS/SCSS",
  "TYPESCRIPT",
];

const Frameworks = [
  "React.js",
  "Next.js",
  "Redux/Redux Toolkit",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Nest.js",
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "Ant Design",
  "Git",
  "Postman",
];

const MyExpertise = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex py-24 border border-red-600">
      <p className="basis-5/12 text-5xl mb-4">My Expertise</p>
      <div className="basis-7/12 space-y-4 font-medium tracking-wide text-grey">
        <p className="text-lg leading-6 px-2 font-normal tracking-wide mb-10">
          I love bridging the gap between your vision and reality. I craft
          impactful digital experiences! Turning ideas into beautiful,
          user-friendly websites using a developer's toolkit. Always eager to
          learn more and explore new possibilities.
        </p>
        <div className="flex gap-12 px-2">
          <div>
            <p className="uppercase text-black mb-4 font-lg">languages</p>
            <div>
              {Languages.map((language, index) => (
                <div key={index} className="flex items-center mt-2 space-x-2">
                  <GoTriangleRight />
                  <p>{language}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="uppercase text-black mb-4 font-lg">
              frameworks/ libraries/ OTHERS
            </p>
            <div className="grid grid-cols-2">
              {Frameworks.slice(0, 8).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center mt-2 space-x-2 mr-12">
                  <GoTriangleRight />
                  <p>{item}</p>
                </div>
              ))}
              {Frameworks.slice(8, 15).map((item, index) => (
                <div key={index} className="flex items-center mt-2 space-x-2">
                  <GoTriangleRight />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExpertise;
