import { AnimatePresence, motion } from "motion/react";
import { MdOpenInNew, MdOutlineOpenInNew } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router";
import { qualifications } from "../data/qualification";

export function Certificate() {
  const [isCertificateHover, setIsCertificateHover] = useState<string | null>(
    null,
  );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-2 2xl:grid-cols-4">
      {qualifications[1].certificates!.map((certificate) => {
        const { course, issuedAt, issuedBy, id, link } = certificate;

        return (
          <motion.div
            className="relative"
            key={id}
            onMouseEnter={() => setIsCertificateHover(id)}
            onMouseLeave={() => setIsCertificateHover(null)}
            initial={{
              y: 40,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                staggerChildren: 0.3,
              },
            }}
          >
            <Link to={link} target="_blank" className=" overflow-hidden">
              <AnimatePresence>
                {isCertificateHover === id && (
                  <motion.div
                    className={` absolute left-0 top-0 z-[1] flex h-full w-full cursor-pointer items-center justify-center gap-1 self-stretch bg-glass font-vietnam text-sm font-medium capitalize text-text outline outline-[1px] outline-accent backdrop-blur-custom transition-all duration-300 active:text-accent xs:text-base  ${
                      isCertificateHover === id
                        ? "show-certificate"
                        : "hide-certificate"
                    }`}
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "100%",
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                  >
                    show certificate
                    <MdOpenInNew className="text-base xs:text-lg" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>

            <div className=" flex h-full flex-col justify-between gap-6 self-stretch p-4 font-vietnam capitalize shadow-card outline-[2px] outline-background backdrop-blur-custom">
              <div className=" flex justify-between gap-4">
                <h3 className=" text-sm font-semibold text-text xs:text-base">
                  {course}
                </h3>
                <MdOutlineOpenInNew className=" min-w-min text-lg text-text-secondary xs:text-xl" />
              </div>

              <div className=" flex flex-col gap-1">
                <span className=" text-xs text-accent xs:text-sm">
                  {issuedBy}
                </span>
                <div className=" flex justify-between gap-1 text-[10px] text-text-secondary xs:text-xs">
                  <span className=" text-nowrap ">{issuedAt}</span>
                  <span>
                    {id.length < 13 ? id : id.substring(0, 12) + "..."}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
