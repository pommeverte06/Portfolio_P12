import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: "100vw", transition: { duration: 0.3 } },
};

function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>Bienvenue sur mon portfolio</h1>
    </motion.div>
  );
}

export default Home;
