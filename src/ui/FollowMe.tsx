import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
import { socialMedia } from "../data/socialMedia";
import { PageTitleSecondary } from "./PageTitleSecondary";
import { SlideUpStaggerChildren } from "./SlideUpStaggerChildren";

interface FollowMeProps {
  usage?: "about" | "home";
}

export function FollowMe({ usage }: FollowMeProps) {
  return (
    <div className=" flex flex-col gap-2 xs:gap-4">
      <div className=" flex items-center justify-center gap-2 xs:justify-start">
        {usage === "about" ? (
          <>
            <PageTitleSecondary title={"follow me"} />
            <MdOpenInNew className=" text-xl text-accent xs:text-2xl" />
          </>
        ) : (
          <div className=" flex items-center gap-1 text-text-secondary ">
            <span className=" text-sm  xs:text-base">follow me</span>
            <MdOpenInNew className=" text-xs text-text-secondary xs:text-base" />
          </div>
        )}
      </div>
      <div className=" flex flex-wrap justify-center gap-2 gap-y-1 xs:justify-start xs:gap-4 lg:gap-6">
        {socialMedia.map((media, i) => {
          const { name, link } = media;

          return (
            <SlideUpStaggerChildren key={name} index={i}>
              <Link
                className=" font-vietnam text-sm capitalize text-text hover:text-accent xs:text-base"
                to={link}
                target="_blank"
              >
                {name}
              </Link>
            </SlideUpStaggerChildren>
          );
        })}
      </div>
    </div>
  );
}
