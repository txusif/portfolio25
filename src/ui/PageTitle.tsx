import { motion } from "motion/react";

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <motion.h2
      className="animate-gradient animate-gradient mx-auto w-full max-w-min text-nowrap bg-gradient-to-r from-gold-light to-gold-dark bg-clip-text text-2xl font-extrabold uppercase text-transparent xs:ml-0 xs:mr-auto xs:text-3xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      {title}
    </motion.h2>
  );
}
