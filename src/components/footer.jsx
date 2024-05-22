import React from "react";
import {
  LinkedinIcon,
  GithubIcon,
  CodepenIcon,
  EmailIcon,
} from "../utils/general-icons";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-skiny">
      <div className="h-20 max-w-screen-lg mx-auto flex items-center justify-between">
        <div>
          <p className="text-dark font-medium">
            My portfolio is a living document, just like the web. © 2024
            Saw Nay Thar Poe.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <a href="https://www.linkedin.com/in/saw-nay-thar-poe-5a827b256/">
            <LinkedinIcon />
          </a>

          <a href="https://github.com/sawnaytharpoe02/">
            <GithubIcon />
          </a>

          <a href="https://codepen.io/duralumin02">
            <CodepenIcon />
          </a>

          <a href="mailto:sawnaytharhpoe02@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
