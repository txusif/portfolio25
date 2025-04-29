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
        className=""
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
        <p className="bg-background p-4 text-center font-vietnam text-sm text-text shadow-card backdrop-blur-custom xs:text-left xs:text-base">
          I&apos;m an enthusiastic individual based in Mumbai with a passion for
          coding, problem-solving, and continuous learning. I specialize in
          building dynamic web applications, with a strong focus on frontend
          development-crafting intuitive interfaces and bringing designs to life
          with clean, maintainable code.
          <br />
          <br />
          While I usually take on both design and development in my personal
          projects, my primary strength and interest lie in frontend and full
          stack development. I enjoy translating ideas into functional digital
          experiences using modern technologies.
          <br />
          <br />
          Beyond traditional web development, I'm deeply curious about
          blockchain and Web3. I'm actively expanding my skill set by exploring
          decentralized technologies through hands-on projects, self-learning,
          and certifications.
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
        className="flex flex-col gap-2 xs:gap-3"
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
        <PageTitleSecondary title={"currently learning"} />
        <Paragraph className={"text-center xs:text-left"}>
          I'm learning React Native through Simon Grimm's course at galaxies.dev
          to expand my skills in cross-platform mobile development.
        </Paragraph>
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
          maintaining a healthy lifestyle with fitness activities, reading
          books, exploring new places, doing random research out of curiosity,
          and finding relaxation in discovering and exploring music.
        </Paragraph>
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
