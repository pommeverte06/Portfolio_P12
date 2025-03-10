import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: "-50vh" }, // départ légèrement au-dessus
  in: { opacity: 1, y: 0 }, // arrivée douce
  out: { opacity: 0, y: "50vh" }, // disparition en bas
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1], // courbe de bezier 
  duration: 0.5, // ajuste la vitesse 
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
