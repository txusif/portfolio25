import { motion } from "motion/react";
import { useAppContext } from "../../context/AppContext";
import { Logo } from "../../ui/Logo";
import { NavigationLink } from "../../ui/NavigationLink";
import { ThemeButton } from "../../ui/ThemeButton";

export function NavLinkContainer() {
  const { setIsNavOpen } = useAppContext();

  const navLink = {
    animate: {
      scale: 1.01,
      originX: -2,
      originY: 0,
      transition: {
        duration: 0.2,
        type: "spring",
      },
    },
  };

  return (
    <motion.header className="flex h-screen select-none flex-col justify-center gap-6 border-l-2 border-background bg-glass shadow-custom-sm backdrop-blur-custom xl:gap-10">
      <div className="px-8">
        <Logo width={"w-[60px] h-[61px]"} />
      </div>
      <nav onClick={() => setIsNavOpen(false)}>
        <ul className="flex flex-col font-vietnam text-sm uppercase tracking-wider xl:text-base">
          <motion.li variants={navLink} whileHover={"animate"}>
            <NavigationLink title={"home"} to={"/"} />
          </motion.li>
          <motion.li variants={navLink} whileHover={"animate"}>
            <NavigationLink title={"projects"} to={"/projects"} />
          </motion.li>
          <motion.li variants={navLink} whileHover={"animate"}>
            <NavigationLink title={"experience"} to={"/experience"} />
          </motion.li>
          <motion.li variants={navLink} whileHover={"animate"}>
            <NavigationLink title={"qualification"} to={"/qualification"} />
          </motion.li>
          <motion.li variants={navLink} whileHover={"animate"}>
            <NavigationLink title={"about"} to={"/about"} />
          </motion.li>
          <motion.li variants={navLink} whileHover={"animate"}>
            <NavigationLink title={"contact"} to={"/contact"} />
          </motion.li>
        </ul>
      </nav>
      <ThemeButton />
    </motion.header>
  );
}
