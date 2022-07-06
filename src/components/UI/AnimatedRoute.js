import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 1, x: 100 },
  animate: { opactity: 0, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const AnimatedRoute = (props) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedRoute;
