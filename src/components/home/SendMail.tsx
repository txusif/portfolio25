import { Link } from "react-router";
import { motion } from "motion/react";

export function SendMail() {
  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-gold-light to-gold-dark md:top-[11px]"></div>
      <Link
        to={"mailto:toushiefansari.dev@gmail.com"}
        className=" absolute left-[50%] translate-x-[-210%] translate-y-[-50%] bg-background px-2 py-1 font-vietnam text-xs capitalize text-text-secondary transition-all duration-300 hover:text-accent xs:translate-x-[-275%] md:translate-x-[-320%] md:translate-y-[-2px] md:text-sm"
        target="_blank"
      >
        send mail
      </Link>
    </motion.div>
  );
}
