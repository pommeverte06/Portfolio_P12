import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: "-50vh" }, 
  in: { opacity: 1, y: 0 }, 
  out: { opacity: 0, y: "50vh" }, 
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1], 
  duration: 0.5,  
};

function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute", width: "100%" }} // important pour éviter les décalages
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
