import { motion, AnimatePresence } from "framer-motion";
import { styled } from "styled-components";
import { useState } from "react";
const Wrap = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVars = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
  leaving: {
    opacity: 0,
    y: 100,
    transition: { duration: 1 },
  },
};

const Animatepresence = () => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrap>
      <button onClick={toggleShowing}>클릭</button>
      <AnimatePresence>
        {/* AnimatePresence는 항상 존재해야 하며 visible인 상태와 invisible 상태를 모두 감싸고 있어야한다! */}
        {showing ? (
          <Box
            variants={boxVars}
            initial="initial"
            animate="visible"
            exit="leaving"
            // exit는 컴포넌트가 사라질 때 일어나는 애니메이션이다.
          />
        ) : null}
      </AnimatePresence>
    </Wrap>
  );
};

export default Animatepresence;
