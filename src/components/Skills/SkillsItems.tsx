import Image from "next/image";
import "./Skills.css";
import { nunito } from "../fonts";

interface SkillsItemsProps {
  name: string;
  icon: string;
}

export const SkillsItems: React.FC<SkillsItemsProps> = ({ name, icon }) => {
  return (
    <div className="skills-items">
      <Image
        src={icon}
        alt={name}
        width={100}
        height={70}
        className="skills-items-img"
      />
      <div
        className={`${nunito.className} font-medium text-white text-sm min-[460px]:text-lg`}
      >
        {name}
      </div>
    </div>
  );
};
