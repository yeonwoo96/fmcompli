import { motion, AnimatePresence } from "framer-motion";
import { styled } from "styled-components";
import { useState } from "react";
const Wrap = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: #181818;
  position: relative;
`;
const Box = styled(motion.div)`
  position: absolute;
  top: 100px;
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVars = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  },
};

const Slider = () => {
  const [visible, setvisible] = useState(1);
  const nextPlease = () => setvisible((prev) => (prev === 10 ? 1 : prev + 1));
  return (
    <Wrap>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              variants={boxVars}
              initial="invisible"
              animate="visible"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={nextPlease}>클릭</button>
    </Wrap>
  );
};

export default Slider;
