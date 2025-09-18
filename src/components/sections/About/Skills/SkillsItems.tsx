import Image from "next/image";
import { nunito } from "@/components/fonts";

interface SkillsItemsProps {
  name: string;
  icon: string;
}

export const SkillsItems: React.FC<SkillsItemsProps> = ({ name, icon }) => {
  return (
    //SKILLS-ITEMS
    <div className="flex flex-col items-center justify-center w-auto  gap-y-2 opacity-90 hover:scale-110 ease-in-out duration-300 max-[768px]:gap-y-1 max-[768px]:hover:scale-100 ] ">
      <Image
        src={icon}
        alt={name}
        width={100}
        height={70}
        className="h-[70px] max-[768px]:h-[60px] max-[768px]:w-[80px] max-[460px]:h-[30px] max-[460px]:w-[50px] "
      />
      <div
        className={`${nunito.className} font-medium text-white text-sm min-[460px]:text-lg`}
      >
        {name}
      </div>
    </div>
  );
};
