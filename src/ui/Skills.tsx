import { Chips } from "./Chips";

interface SkillsProps {
  field: string;
  tools: string[];
}

export function Skills({ field, tools }: SkillsProps) {
  return (
    <div className="justify-center font-vietnam flex flex-col gap-1  ">
      <Chips skills={tools} title={field} center={true} />
    </div>
  );
}
