import { useState } from "react";
import { motion } from "motion/react";

import { useViewPort } from "../../hooks/useViewPort";
import { AccordionContent } from "./AccordionContent";
import { AccordionHeader } from "./AccordionHeader";
import { work } from "../../data/workExperience";

export function Accordion() {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number | null>(null);
  const { viewportWidth } = useViewPort();

  const container = {
    hidden: { opacity: 0, y: 50, height: 0 },
    show: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className=" flex flex-col font-vietnam shadow-card backdrop-blur-custom"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {work.map((xp, i) => {
        const {
          role,
          company,
          start,
          end,
          responsibilities,
          type,
          location,
          link,
        } = xp;

        return (
          <motion.div
            className={` flex cursor-pointer select-none flex-col text-nowrap ${
              isAccordionOpen === i && " border-y-[1px] border-accent"
            }`}
            key={company}
            onClick={() => setIsAccordionOpen(isAccordionOpen === i ? null : i)}
            variants={item}
          >
            <AccordionHeader
              isAccordionOpen={isAccordionOpen}
              i={i}
              company={company}
              role={role}
              viewportWidth={viewportWidth}
              start={start}
              end={end}
              type={type}
              location={location}
              link={link}
            />

            <AccordionContent
              viewportWidth={viewportWidth}
              isAccordionOpen={isAccordionOpen}
              responsibilities={responsibilities}
              start={start}
              end={end}
              type={type}
              location={location}
              i={i}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
