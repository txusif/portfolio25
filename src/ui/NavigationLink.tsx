import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { NavLink, useLocation } from "react-router";
import { useAppContext } from "../context/AppContext";

type NavigationKey =
  | "home"
  | "projects"
  | "experience"
  | "qualification"
  | "about"
  | "contact";

interface NavigationLinkProps {
  title: NavigationKey;
  to: string;
}

export function NavigationLink({ title, to }: NavigationLinkProps) {
  const { setNavigation } = useAppContext();
  const [active, setActive] = useState({
    home: true,
    projects: false,
    experience: false,
    qualification: false,
    about: false,
    contact: false,
  });
  const location = useLocation();
  const pathName = location.pathname;
  const [isHovered, setIsHovered] = useState(false);

  function handleNavClick(navLink: NavigationKey) {
    if (navLink === "home") {
      setNavigation(1);
      setActive({
        home: true,
        projects: false,
        experience: false,
        qualification: false,
        about: false,
        contact: false,
      });
    }
    if (navLink === "projects") {
      setNavigation(2);
      setActive({
        home: false,
        projects: true,
        experience: false,
        qualification: false,
        about: false,
        contact: false,
      });
    }
    if (navLink === "experience") {
      setNavigation(3);
      setActive({
        home: false,
        projects: false,
        experience: true,
        qualification: false,
        about: false,
        contact: false,
      });
    }
    if (navLink === "qualification") {
      setNavigation(4);
      setActive({
        home: false,
        projects: false,
        experience: false,
        qualification: true,
        about: false,
        contact: false,
      });
    }
    if (navLink === "about") {
      setNavigation(5);
      setActive({
        home: false,
        projects: false,
        experience: false,
        qualification: false,
        about: true,
        contact: false,
      });
    }
    if (navLink === "contact") {
      setNavigation(6);
      setActive({
        home: false,
        projects: false,
        experience: false,
        qualification: false,
        about: false,
        contact: true,
      });
    }
  }

  useEffect(() => {
    switch (pathName) {
      case "/":
        setActive({
          home: true,
          projects: false,
          experience: false,
          qualification: false,
          about: false,
          contact: false,
        });
        break;
      case "/projects":
        setActive({
          home: false,
          projects: true,
          experience: false,
          qualification: false,
          about: false,
          contact: false,
        });
        break;
      case "/experience":
        setActive({
          home: false,
          projects: false,
          experience: true,
          qualification: false,
          about: false,
          contact: false,
        });
        break;
      case "/qualification":
        setActive({
          home: false,
          projects: false,
          experience: false,
          qualification: true,
          about: false,
          contact: false,
        });
        break;
      case "/about":
        setActive({
          home: false,
          projects: false,
          experience: false,
          qualification: false,
          about: true,
          contact: false,
        });
        break;
      case "/contact":
        setActive({
          home: false,
          projects: false,
          experience: false,
          qualification: false,
          about: false,
          contact: true,
        });
        break;

      default:
        break;
    }
  }, [pathName]);

  return (
    <NavLink
      className={`flex w-full gap-2 text-nowrap px-8 py-2 pr-16 font-medium active:text-accent xs:py-3 xl:gap-3 xl:py-4 ${
        active[title]
          ? "text-accent hover:text-accent"
          : "text-text-secondary hover:text-text"
      }`}
      to={to}
      onClick={() => handleNavClick(title)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        initial={{
          x: 0,
        }}
        animate={
          isHovered
            ? {
                x: [2, -2],
                transition: {
                  repeat: Infinity,
                  delay: 0.1,
                  repeatType: "mirror",
                  duration: 0.3,
                  ease: "easeOut",
                },
              }
            : { x: 0 }
        }
      >
        ›
      </motion.span>
      {title}
    </NavLink>
  );
}
