import React from "react";
import Image from "next/image";
import { ProjectModalProps } from "./entitis";
import ButtonHover from "../Button/buttonHover"; // replace './ButtonHover' with the correct path

const PopupsModal = ({ projectArr }: ProjectModalProps) => {
  return (
    <div className="w-11/12 pt-28 pb-14">
      <h1 className="text-center text-white text-4xl mb-16 font-bold max-[768px]:text-2xl ">
        Proyectos
      </h1>

      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3 justify-items-center">
        {/* Mapear el array de Popups */}
        {projectArr.map((project, index) => (
          <div
            key={index}
            className="w-86 bg-[var(--background-sidebar)] rounded-xl shadow-2xl pb-4"
          >
            {/* Contenedor de los redondeles de colores */}
            <div className="flex items-center p-3">
              <div className="px-1">
                <span className="w-4 h-4 rounded-full inline-block bg-red-500"></span>
              </div>
              <div className="px-1">
                <span className="w-4 h-4 rounded-full inline-block bg-yellow-400"></span>
              </div>
              <div className="px-1">
                <span className="w-4 h-4 rounded-full inline-block bg-green-500"></span>
              </div>
            </div>

            {/* Contenedor con el contenido */}
            <div>
              <Image
                className="rounded-3xl min-w-full max-h-72 p-4 object-cover"
                src={project.imagen}
                alt={project.title}
                width={100}
                height={100}
              />
              <div className="flex flex-col px-4 gap-y-4 ">
                <h2 className="mt-0.5 text-lg font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <div className="flex flex-col flex-wrap gap-4">
                  <p className="text-sm text-white font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.svgs?.map((svg, index) => (
                      <Image
                        className="w-10 h-10 p-2 bg-(--background-primary) rounded-full border border-[#bcb7b760] md:hover:border-[#bcb7b7] md:hover:scale-105 md:duration-300 ease-in-out"
                        key={index}
                        src={svg.svg}
                        alt={svg.alt}
                        width={100}
                        height={100}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {/* Si project.urlDemo existe y es un valor "truthy" (&& => no es null, undefined, false, 0, ""), entonces renderiza lo que está dentro de los paréntesis. */}
                  {project.urlDemo && (
                    <ButtonHover
                      propsButton={{
                        text: "Demo",
                        link: project.urlDemo,
                        image: "/external-link.svg",
                      }}
                    />
                  )}
                  <ButtonHover
                    propsButton={{
                      text: "Código",
                      link: project.urlCode,
                      image: "/github.svg",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          // <article
          //   key={index}
          //   className="rounded-t-[50%] rounded-b-xl pb-4 bg-(--background-sidebar)"
          // >
          //   <div className="flex flex-col gap-1 ">
          // <Image
          //   className="rounded-3xl min-w-full max-h-[300px] object-cover"
          //   src={project.imagen}
          //   alt={project.title}
          //   width={100}
          //   height={100}
          // />
          // <div className="px-4 pt-6 flex flex-col gap-y-4 ">
          //   <h2 className="mt-0.5 text-lg font-bold text-gray-900 dark:text-white">
          //     {project.title}
          //   </h2>
          //   <p className="text-sm text-white font-medium">
          //     {project.description}
          //   </p>

          //   <ButtonHover
          //     propsButton={{ text: "Código", link: project.urlCode }}
          //   />
          // </div>
          //   </div>
          // </article>
        ))}
      </section>
    </div>
  );
};

export default PopupsModal;
