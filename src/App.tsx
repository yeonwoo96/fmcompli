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
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },

  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

const App = () => {
  const [visible, setvisible] = useState(1);
  const [back, setback] = useState(false);
  const nextPlease = () => {
    setback(false);
    setvisible((prev) => (prev === 3 ? 3 : prev + 1));
  };
  const prevPlease = () => {
    setback(true);
    setvisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrap>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={boxVars}
          initial="entry"
          animate="center"
          exit="exit"
          // 컴포넌트가 삭제될 떄 발동
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>다음</button>
      <button onClick={prevPlease}>이전</button>
    </Wrap>
  );
};

export default App;
