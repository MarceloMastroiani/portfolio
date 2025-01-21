import React from "react";
import { TimelineItem } from "./TimelineItem";
import "./Timeline.css";
import { timelineData } from "@/data/timelineData";

//componente principal encargado de mostrar la sección de mi trayectoria pasandole los datos de timelineData a TimelineItem para mostrarlos
export default function Timeline() {
  return (
    <section className=" timeLine-section">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
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
