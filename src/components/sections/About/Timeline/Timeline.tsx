import React from "react";
import { TimelineItem } from "./TimelineItem";
import { timelineData } from "@/data/timelineData";

//componente principal encargado de mostrar la sección de mi trayectoria pasandole los datos de timelineData a TimelineItem para mostrarlos
export default function Timeline() {
  return (
    <section className="flex flex-col items-center h-full overflow-hidden bg-(--background-primary) py-[4em] px-[8em] z-30 max-[768px]:py-[2em] max-[768px]:px-[2em]">
      <h2 className="text-4xl font-bold text-center text-white mb-8 max-[768px]:text-2xl">
        Mi Trayectoria 🏃‍♂️‍➡️
      </h2>
      <div className="h-full w-full ">
        {/* Se mapean los "items" de timelineData a TimelineItem para mostrarlos por separado */}
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
