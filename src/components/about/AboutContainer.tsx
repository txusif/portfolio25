import { motion } from "motion/react";
import { Container } from "../../ui/Container";
import { PageTitle } from "../../ui/PageTitle";
import { PageTitleSecondary } from "../../ui/PageTitleSecondary";
import { Paragraph } from "../../ui/Paragraph";
import { FollowMe } from "../../ui/FollowMe";
import { Skills } from "../../ui/Skills";
import { skills } from "../../data/skills";

const {
  skillOne: { field: skillOneField },
  skillOne: { tools: skillOneTools },
  skillTwo: { field: skillTwoField },
  skillTwo: { tools: skillTwoTools },
  skillThree: { field: skillThreeField },
  skillThree: { tools: skillThreeTools },
  skillFour: { field: skillFourField },
  skillFour: { tools: skillFourTools },
  skillFive: { field: skillFiveField },
  skillFive: { tools: skillFiveTools },
} = skills[0];

export function AboutContainer() {
  return (
    <Container>
      <PageTitle title={"about"} />
      <motion.div
        className=" lg:relative"
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <div className="h-[200px] shadow-card xs:h-auto">
          <img
            className="h-full object-cover object-left"
            src={"/vite.svg"}
            alt="toushief ansari"
          />
        </div>
        <p className="bg-background p-4 font-vietnam text-sm text-text shadow-card backdrop-blur-custom xs:p-6 xs:text-base lg:absolute lg:right-6 lg:top-6 lg:max-w-[480px] lg:shadow-card lg:outline lg:outline-[1px] lg:outline-accent xl:right-8 xl:top-8 xl:max-w-[660px] ">
          I&apos;m an enthusiastic individual based in Mumbai with a passion for
          coding and continuous learning, specializing in frontend development
          to create intuitive user interfaces and bring designs to life. While I
          typically handle both design and development aspects in my personal
          and freelance projects, my primary focus remains on development.
          <br />
          <br />
          Having previously worked as an image editor and designer for several
          years, I have transitioned into web development with newfound
          enthusiasm. I am looking forward to work as a web developer and focus
          on honing my skills in this exciting field and diving into the world
          of creating awesome web applications.
        </p>
      </motion.div>
      <motion.div
        className=" flex flex-col gap-2 gap-y-4 xs:gap-4 xs:gap-y-6"
        initial={{
          y: 40,
          opacity: 0,
          transition: {
            staggerChild: 0.3,
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
        <PageTitleSecondary title={"skills"} />
        <Skills field={skillOneField} tools={skillOneTools} />
        <Skills field={skillTwoField} tools={skillTwoTools} />
        <Skills field={skillThreeField} tools={skillThreeTools} />
        <Skills field={skillFourField} tools={skillFourTools} />
        <Skills field={skillFiveField} tools={skillFiveTools} />
      </motion.div>
      <motion.div
        className=" flex flex-col gap-2 xs:gap-3"
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <PageTitleSecondary title={"hobbies"} />
        <Paragraph className={"text-center xs:text-left"}>
          Beyond my professional pursuits, I value personal growth and
          well-being through a variety of interests and hobbies. These include
          maintaining a healthy lifestyle with fitness activities, developing my
          creative skills in design and editing, and finding relaxation in
          recreational gaming.
        </Paragraph>
      </motion.div>
      <motion.div
        className="overflow-hidden outline outline-background "
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <img src={"/vite.svg"} alt="toushief ansari" />
      </motion.div>
      <motion.div
        className="flex flex-col gap-2 xs:gap-4"
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <FollowMe usage={"about"} />
      </motion.div>
    </Container>
  );
}
