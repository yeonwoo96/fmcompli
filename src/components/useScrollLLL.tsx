import { styled } from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Scroll = () => {
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to right, #e0eafc, #cfdef3)",
      "linear-gradient(to right, #ff5f6d, #ffc371)",
      "linear-gradient(to right, #232526, #414345)",
    ]
  );

  // useMotionValueEvent(rotateZ, "change", (el) => console.log(el));

  console.log(scrollYProgress);
  const rotate = useTransform(scrollYProgress, [0, 1], [-360, 360]);
  return (
    <Wrapper style={{ background }}>
      <button onClick={() => x.set(200)}>click me</button>
      <Box style={{ x, rotateZ, rotate }} drag dragSnapToOrigin />
    </Wrapper>
  );
};

export default Scroll;
