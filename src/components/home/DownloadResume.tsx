import { Link } from "react-router";
import { motion } from "motion/react";
import { resumeUrl } from "../../ui/AppLayout";

export function DownloadResume() {
  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-gold-light to-gold-dark md:top-[-11px] "></div>
      <Link
        to={resumeUrl}
        target="_blank"
        className=" absolute right-[50%] flex translate-x-[120%] translate-y-[-50%] items-center gap-2 bg-background px-2 py-1 font-vietnam text-xs capitalize text-text-secondary transition-colors duration-300 hover:text-accent xs:translate-x-[158%] md:translate-x-[182%] md:translate-y-[-90%] md:text-sm"
      >
        download resume
      </Link>
    </motion.div>
  );
}
