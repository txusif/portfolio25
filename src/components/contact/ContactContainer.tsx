import { motion } from "motion/react";

import { Container } from "../../ui/Container";
import { PageTitle } from "../../ui/PageTitle";
import { Developer } from "./Developer";
import { CtaButtons } from "./CtaButtons";
import { Content } from "./Content";
import { SlideUp } from "../../ui/SlideUp";
import { FollowMe } from "../../ui/FollowMe";

export function ContactContainer() {
  return (
    <motion.div
      className=" mx-auto flex h-screen max-w-[1600px] flex-col justify-between "
      initial={{
        y: 40,
        opacity: 0,
        transition: {
          staggerChild: 0.3,
          when: "beforeChildren",
        },
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <Container>
        <PageTitle title={"contact"} />
        <SlideUp className="flex flex-col gap-2 xs:gap-3">
          <Content />
        </SlideUp>
        <SlideUp className="flex w-full flex-wrap justify-center gap-6 xs:flex-row xs:justify-start">
          <CtaButtons />
        </SlideUp>
      </Container>
      <SlideUp className="flex flex-col gap-4 px-4 py-6 pb-20 text-center font-vietnam capitalize xs:p-8 xs:pb-24 xs:text-left sm:p-10 sm:pb-26 md:flex-row md:justify-between lg:p-12 lg:pb-28">
        <FollowMe />
        <Developer />
      </SlideUp>
    </motion.div>
  );
}
