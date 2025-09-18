import React from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}
//Componente de
export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <div className="flex flex-row h-auto">
      <div className="flex flex-col w-[10vw] items-center ">
        {/* circulo de la linea temporal */}
        <div className="w-8 h-8 bg-[--color-primary] rounded-full shadow-lg border-[3px] border-[#bcb7b7] animate-pulse"></div>
        {/* linea vertical de la linea temporal */}
        <div className="w-2 h-full bg-[--colort-secondary] "></div>
      </div>
      <div className="flex-grow w-[90vw] h-full mt-0 ml-8 pb-8">
        <div className="font-bold text-lg text-white">{date}</div>
        <div className="font-semibold text-xl text-[--color-primary] mt-1">
          {title}
        </div>
        <div className="mt-2 text-base text-gray-400 w-full">{description}</div>
      </div>
    </div>
  );
};
