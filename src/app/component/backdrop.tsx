import { motion } from "framer-motion";
import React, { MouseEventHandler } from "react"
const Backdrop = (props:{ children:React.ReactNode, onClick:MouseEventHandler }) => {
 
  return (
    <motion.div
      onClick={props.onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default Backdrop;