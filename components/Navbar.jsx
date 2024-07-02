import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="absolute left-0 top-0 z-20 w-full pt-16 text-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold uppercase"
          >
            <span className="text-primary">Kleefi</span> Logo.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            onClick={() => setSidebar(!sidebar)}
          >
            <GiHamburgerMenu className="cursor-pointer text-3xl" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
