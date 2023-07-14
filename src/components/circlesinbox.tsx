import { styled } from "styled-components";
import { motion } from "framer-motion";

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const boxVariants = {
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const CircleVariants = {
  start: {
    opacity: 0,
    y: 120,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 1,
    },
  },
};
const CirclesInBox = () => {
  return (
    <Box variants={boxVariants} initial="start" animate="end">
      <Circle variants={CircleVariants} />
      <Circle variants={CircleVariants} />
      <Circle variants={CircleVariants} />
      <Circle variants={CircleVariants} />
    </Box>
  );
};

export default CirclesInBox;
