import React, { useState } from "react";
import AnimatedNavLink from "./AnimatedNavLink";
import { motion, AnimatePresence } from "framer-motion";
import MobileNavLink from "./MobileNavLink";
import Magnetic from "../Magnetic";

const navLinks = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Expertise", href: "#expertise" },
  { title: "Projects", href: "#featured-projects" },
  { title: "Contact", href: "#contact" },
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
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.4,
      }}
      className="h-[10vh] grid items-center">
      <nav className="w-full flex px-3 lg:px-12 bg-transparent justify-between">
        {/* PORTFOLIO LOGO */}
        <Magnetic>
          <div className="flex gap-1 items-center">
            <h1 className="uppercase font-bold flex items-center">naythar</h1>
            <img src="/favicon.png" alt="logo" width={8} height={8} />
          </div>
        </Magnetic>

        {/* Desktop Navbar */}
        <div className="hidden sm:flex space-x-8 md:space-x-12">
          {navLinks?.map((link, i) => (
            <div key={i} className="relative overflow-hidden">
              <AnimatedNavLink title={link.title} href={link.href} />
            </div>
          ))}
        </div>

        {/* Mobile Navbar */}
        <div onClick={toggleMenu} className="flex sm:hidden cursor-pointer">
          Menu
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen origin-top bg-black text-white px-4 py-6 z-10">
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <div className="flex gap-1 items-center">
                    <h1 className="uppercase font-bold flex items-center">
                      naythar
                    </h1>
                  </div>
                  <div className="cursor-pointer" onClick={toggleMenu}>
                    Go Back
                  </div>
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
                        toggleMenu={toggleMenu}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
