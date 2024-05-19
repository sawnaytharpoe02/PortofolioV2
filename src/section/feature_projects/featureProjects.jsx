import React from "react";
import { featuredProjects } from "../../utils/constant";

const FeatureProjects = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 border border-red-600">
      <h2 className="text-5xl mb-4">Featured Projects</h2>

      {/* feat projcet 01 */}
      <div className="mt-20 w-[65vw]">
        <div className="w-full h-[400px]">
          <img
            className="w-full h-full object-cover"
            src={featuredProjects[0].src}
            alt="project 01"
          />
        </div>
        <div className="max-w-3xl space-y-3 mt-2">
          <h4 className="text-6xl tracking-wider uppercase">
            {featuredProjects[0].title}
          </h4>
          <div className="space-y-2">
            <h5 className="text-xl uppercase">Project concept</h5>
            <p className="text-neutral-600">
              {featuredProjects[0].description}
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="text-xl uppercase">Tech featured</h5>
            <div className="flex flex-wrap gap-2">
              {featuredProjects[0].tech.map((tech, index) => (
                <div
                  key={index}
                  className="bg-neutral-200 rounded-[.55rem] text-[14px] tracking-wide py-0.5 px-2.5 inline-block">
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3 items-center pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2"
                clipRule="evenodd"></path>
            </svg>
            <a href={featuredProjects[0].repo} target="_blank">
              <span className="uppercase text-sm text-neutral-600 hover:text-black">
                view repo
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* feat project 02 */}
      <div className="mt-40 w-[60vw] ml-auto">
        <div className="w-full h-[400px]">
          <img
            className="w-full h-full object-cover"
            src={featuredProjects[1].src}
            alt="project 02"
          />
        </div>
        <div className="max-w-3xl space-y-3 mt-2">
          <h4 className="text-6xl tracking-wider uppercase">
            {featuredProjects[1].title}
          </h4>
          <div className="space-y-2">
            <h5 className="text-xl uppercase">Project concept</h5>
            <p className="text-neutral-600">
              {featuredProjects[1].description}
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="text-xl uppercase">Tech behind implemented</h5>
            <div className="flex flex-wrap gap-2">
              {featuredProjects[1].tech.map((tech, index) => (
                <div
                  key={index}
                  className="bg-neutral-200 rounded-[.55rem] text-[14px] tracking-wide py-0.5 px-2.5 inline-block">
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3 items-center pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2"
                clipRule="evenodd"></path>
            </svg>
            <a href={featuredProjects[1].repo} target="_blank">
              <span className="uppercase text-sm text-neutral-600 hover:text-black">
                view repo
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProjects;
