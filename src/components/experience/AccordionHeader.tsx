import { IoIosArrowDown } from "react-icons/io";
import { motion } from "motion/react";

import { StartEnd } from "./StartEnd";
import { TypeLocation } from "./TypeLocation";

interface AccordionHeaderProps {
  isAccordionOpen: number | null;
  i: number;
  company: string;
  role: string;
  viewportWidth: number;
  start: string;
  end: string;
  type: string;
  location: string;
}

export function AccordionHeader({
  isAccordionOpen,
  i,
  company,
  role,
  viewportWidth,
  start,
  end,
  type,
  location,
}: AccordionHeaderProps) {
  return (
    <div
      className={` group flex items-center justify-between px-4 py-4 xs:px-6 xs:py-5 md:px-8 md:py-6 ${
        isAccordionOpen === i
          ? "border-b-[1px] border-shadow shadow-xp"
          : "border-y-[1px] border-shadow"
      }`}
    >
      <div className=" group flex items-center">
        <div className=" flex flex-col gap-2 ">
          <h2
            className={` ${
              isAccordionOpen === i ? " text-accent" : "text-text"
            }  font-vietnam text-sm font-semibold capitalize transition-colors duration-300 group-hover:text-accent xs:text-base `}
          >
            {role}
          </h2>
          <h3 className="text-xs capitalize text-text-secondary xs:text-base ">
            {company}
          </h3>
        </div>
      </div>

      <div className=" flex items-center gap-4 text-xs xs:text-sm md:gap-6 ">
        {viewportWidth > 786 && (
          <>
            <TypeLocation type={type} location={location} />
            <StartEnd start={start} end={end} />
          </>
        )}
        {viewportWidth > 560 && viewportWidth < 786 && (
          <StartEnd start={start} end={end} />
        )}
        <motion.span
          className={` ${
            isAccordionOpen === i ? " outline-accent" : " outline-shadow"
          } rounded-full p-1 outline outline-[1px] md:p-[6px] `}
          animate={{
            rotate: isAccordionOpen === i ? 180 : 0,
            transition: {
              duration: 0.3,
            },
          }}
        >
          <IoIosArrowDown
            className={` transition-colors duration-300 group-hover:text-accent xs:text-xl  ${
              isAccordionOpen === i ? "text-accent" : "text-text"
            }`}
          />
        </motion.span>
      </div>
    </div>
  );
}
