import { motion } from "motion/react";

interface ButtonPopProps {
  children: React.ReactNode;
  className?: string;
}

export function ButtonPop({ children, className }: ButtonPopProps) {
  return (
    <motion.span
      className={className}
      whileHover={{
        y: -4,
      }}
    >
      {children}
    </motion.span>
  );
}
