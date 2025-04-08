import { AnimatePresence, motion } from "motion/react";

import { TypeLocation } from "./TypeLocation";
import { StartEnd } from "./StartEnd";

interface AccordionContentProps {
  isAccordionOpen: number | null;
  i: number;
  viewportWidth: number;
  start: string;
  end: string;
  type: string;
  location: string;
  responsibilities: string[];
}

export function AccordionContent({
  isAccordionOpen,
  i,
  viewportWidth,
  start,
  end,
  type,
  location,
  responsibilities,
}: AccordionContentProps) {
  const padding =
    (viewportWidth < 480 && "16px") ||
    (viewportWidth > 480 && viewportWidth < 786 && "24px") ||
    (viewportWidth > 786 && "32px") ||
    "0px"; // Provide a default value to ensure padding is always a valid string

  const accParent = {
    hidden: {
      padding: 0,
      opacity: 0,
      height: 0,
    },
    show: {
      opacity: 1,
      height: "auto",
      padding: padding,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      padding: 0,
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const accChildren = {
    hidden: {
      opacity: 0,
      x: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isAccordionOpen === i && (
        <motion.div
          className="box-content flex flex-col gap-2 bg-glass p-4 xs:gap-3 xs:p-6 md:gap-4 md:p-8"
          variants={accParent}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {viewportWidth < 786 && (
            <div className="mb-2 flex flex-wrap items-center gap-4 gap-y-2">
              {viewportWidth < 560 && (
                <>
                  <StartEnd start={start} end={end} />
                  <TypeLocation type={type} location={location} />
                </>
              )}
              {viewportWidth > 560 && viewportWidth < 786 && (
                <StartEnd start={start} end={end} />
              )}
            </div>
          )}
          {responsibilities.map((li, index) => {
            return (
              <motion.div
                className="list-none space-x-2 text-wrap text-xs leading-5 text-text xs:text-base"
                key={index}
                variants={accChildren}
              >
                <span className="h-auto w-[2px]">›</span>
                <span>{li}.</span>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
