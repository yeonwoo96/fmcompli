import { useRef } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const boxVariants = {
  hover: { rotateZ: 90 },
  tap: { borderRadius: "50%" },
  drag: {
    backgroundColor: "#2ecc71",
    transition: { duration: 1 },
  },
};

const Drag = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <BiggerBox ref={biggerBoxRef}>
      {/*biggerBoxRef 설정 */}
      <Box
        drag // drag 속성을 줌
        dragSnapToOrigin // 원래 위치로 돌아가게 함
        dragElastic={0} //제약 조건 외부에서 허용되는 움직임의 정도. 0 = 움직임 없음, 1 = 전체 움직임.기본적으로 설정 0.5.
        dragConstraints={biggerBoxRef} // drag  가능 영역 제약
        variants={boxVariants}
        whileDrag="drag"
        whileHover="hover"
        whileTap="tap"
      ></Box>
    </BiggerBox>
  );
};

export default Drag;
