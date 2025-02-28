import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: "-50vh" }, // Départ légèrement au-dessus
  in: { opacity: 1, y: 0 }, // Arrivée douce
  out: { opacity: 0, y: "50vh" }, // Disparition en bas
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1], // Courbe de Bézier ultra fluide (comme CSS "ease-in-out")
  duration: 0.5, // Ajuste la vitesse pour plus de fluidité
};

function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: "absolute", width: "100%" }} // Important pour éviter les décalages
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
