import React from "react";
import Image from "next/image";
import { ProjectModalProps } from "./entitis";
import ButtonHover from "../Button/buttonHover"; // replace './ButtonHover' with the correct path

const PopupsModal = ({ projectArr }: ProjectModalProps) => {
  return (
    <div className="w-full pb-14">
      <h1 className="text-center text-white text-4xl mb-16 font-bold max-[768px]:text-2xl ">
        Proyectos
      </h1>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Mapear el array de Popups */}
        {projectArr.map((project, index) => (
          <article
            key={index}
            className="rounded-t-[50%] rounded-b-xl pb-4 bg-[--background-sidebar]"
          >
            <div className="flex flex-col gap-1 ">
              <Image
                className="rounded-3xl min-w-full max-h-[300px] object-cover"
                src={project.imagen}
                alt={project.title}
                width={100}
                height={100}
              />
              <div className="px-4 pt-6 flex flex-col gap-y-4 ">
                <h2 className="mt-0.5 text-lg font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-white font-medium">
                  {project.description}
                </p>

                <ButtonHover
                  propsButton={{ text: "Código", link: project.urlCode }}
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PopupsModal;
