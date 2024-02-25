import { motion } from "framer-motion";

const MobileNavLink = ({ title, href }) => {
  const MobileNavLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      variants={MobileNavLinkVars}
      className="text-6xl leading-tight tracking-wider uppercase text-black font-lemurmure">
      <a href={href}>{title}</a>
    </motion.div>
  );
};

export default MobileNavLink;
