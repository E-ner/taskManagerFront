import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ title }) => {

    const transition = { type:"spring",duration:0.8};

  return (
    <AnimatePresence>
      <motion.div className="self-center flex flex-col" 
      initial={{
        x:100,
        y:0,
        opacity:0,
        transition:{...transition,delay:0.5}
    }}
      animate={{
        x:0,
        y:0,
        opacity:1,
        transition:{...transition,delay:0,damping:6,stiffness:50}
      }}
      exit={{
        x:0,
        y:100,
        transition: {...transition,delay:0}
      }}
      >
        <h1 className="text-gray-300 text-4xl text-center font-bold mb-4">{title}</h1>
        <span className="font-italic font-mono">
            Manage your tasks more efficient using <b>{ title }</b><br/>
            <center className="mt-0" >Try It.</center>
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

Header.defaultProps = {
  title: "TaskManager",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
