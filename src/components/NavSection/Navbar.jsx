import React, { useState } from "react";
import AnimatedNavLink from "./AnimatedNavLink";
import { motion, AnimatePresence } from "framer-motion";
import MobileNavLink from "./MobileNavLink";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prevOpen) => !prevOpen);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <nav className="flex px-16 py-4 bg-white justify-between">
      <div>LOGO</div>
      {/* <div className="flex space-x-16">
        {navLinks?.map((link, i) => (
          <div key={i} className="relative overflow-hidden">
            <AnimatedNavLink title={link.title} />
          </div>
        ))}
      </div> */}
      <div onClick={toggleMenu} className="cursor-pointer">
        Menu
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-black p-10">
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-black">Portfolio</h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}>
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center space-y-6">
                {navLinks.map((link, i) => (
                  <div key={i} className="overflow-hidden">
                    <MobileNavLink
                      key={i}
                      title={link.title}
                      href={link.href}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
