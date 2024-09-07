import { SkillsProps } from "@/constants/skills";
import { RxDoubleArrowRight } from "react-icons/rx";

interface SkillProp {
  skill: SkillsProps;
}

const Skills = ({ skill }: SkillProp) => {
  const { name } = skill;
  return (
    <li className='flex items-center gap-2'>
      <span className='text-textGreen mt-1'>
        <RxDoubleArrowRight />
      </span>
      {name}
    </li>
  );
};

export default Skills;
