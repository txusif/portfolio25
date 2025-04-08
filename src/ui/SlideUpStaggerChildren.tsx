import { motion } from "motion/react";

interface SlideUpStaggerChildrenProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

export function SlideUpStaggerChildren({
  children,
  index,
  className,
}: SlideUpStaggerChildrenProps) {
  return (
    <motion.span
      className={className}
      whileHover={{
        y: -4,
      }}
      initial={{
        y: 10,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.1 * index,
        },
      }}
    >
      {children}
    </motion.span>
  );
}
