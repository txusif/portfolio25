import { ButtonPop } from "./ButtonPop";

interface ProjectChipsProps {
  skills: string[];
  title: string;
}

export function ProjectChips({ skills, title }: ProjectChipsProps) {
  return (
    <div
      className={`flex flex-col gap-2 xs:justify-start xs:text-left 2xl:gap-4 
      `}
    >
      <h4 className="text-sm capitalize text-text-secondary md:text-base">
        {title}
      </h4>
      <div className={`flex flex-wrap gap-2 gap-y-3 2xl:gap-4`}>
        {skills.map((skill) => {
          return (
            <ButtonPop
              key={skill}
              className="inline-block text-nowrap px-[10px] py-[3px] text-[10px] font-light capitalize text-text outline outline-[1px] outline-shadow backdrop-blur-custom  md:text-xs"
            >
              {skill}
            </ButtonPop>
          );
        })}
      </div>
    </div>
  );
}
