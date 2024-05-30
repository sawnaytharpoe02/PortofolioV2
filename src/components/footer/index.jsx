import React from "react";
import {
  LinkedinIcon,
  GithubIcon,
  CodepenIcon,
  EmailIcon,
} from "../../utils/general-icons";
import Magnetic from "../Magnetic";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-skiny">
      <div className="h-20 px-4 lg:px-0 max-w-screen-lg mx-auto flex items-center justify-between">
        <div>
          <p className="hidden lg:block text-dark font-medium">
            My portfolio is a living document, just like the web. © 2024 Saw Nay
            Thar Poe.
          </p>
          <p className="block lg:hidden text-dark font-medium">
            © 2024 Saw Nay Thar Poe.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Magnetic>
            <a
              className="hidden lg:block"
              href="https://www.linkedin.com/in/saw-nay-thar-poe-5a827b256/">
              <LinkedinIcon />
            </a>
          </Magnetic>

          <Magnetic>
            <a href="https://github.com/sawnaytharpoe02/">
              <GithubIcon />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              className="hidden lg:block"
              href="https://codepen.io/duralumin02">
              <CodepenIcon />
            </a>
          </Magnetic>

          <Magnetic>
            <a href="mailto:sawnaytharhpoe02@gmail.com">
              <EmailIcon />
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default Footer;
