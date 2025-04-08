import { motion } from "motion/react";
import { useViewPort } from "../../hooks/useViewPort";
import { Logo } from "../../ui/Logo";
import { Title } from "./Title";

export function LandingPage() {
  const { viewportWidth } = useViewPort();

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center xs:flex-row xs:text-left">
      <motion.span
        initial={
          viewportWidth < 480
            ? {
                opacity: 0,
                y: -100,
              }
            : {
                opacity: 0,
                x: -100,
              }
        }
        animate={
          viewportWidth < 480
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 1,
                x: 0,
              }
        }
        transition={{
          duration: 0.3,
        }}
      >
        <Logo width={"w-[80px] md:w-[100px]"} />
      </motion.span>
      <motion.span
        initial={
          viewportWidth < 480
            ? {
                opacity: 0,
                y: 100,
              }
            : {
                opacity: 0,
                x: 100,
              }
        }
        animate={
          viewportWidth < 480
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 1,
                x: 0,
              }
        }
        transition={{
          duration: 0.3,
        }}
      >
        <Title />
      </motion.span>
    </div>
  );
}
