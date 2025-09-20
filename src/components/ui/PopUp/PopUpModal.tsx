import React from "react";
import Image from "next/image";
import { ProjectModalProps } from "./entitis";
import ButtonHover from "../Button/buttonHover";

const PopupsModal = ({ projectArr }: ProjectModalProps) => {
  return (
    <div className="flex flex-col items-center w-[100%] lg:w-[90%] pb-14">
      <h1 className="text-white text-2xl font-bold md:text-4xl pb-20">
        Proyectos
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {projectArr.map((project, index) => (
          <div
            key={index}
            // ✅ AGREGAR: h-full flex flex-col para que la card use toda la altura disponible
            className="bg-[var(--background-sidebar)] rounded-xl pb-4 h-full flex flex-col"
          >
            {/* Contenedor de los redondeles de colores - MANTENER FIJO */}
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

            <div className="flex flex-col flex-grow">
              <Image
                className="rounded-3xl min-w-full object-cover p-4"
                src={project.imagen}
                alt={project.title}
                width={100}
                height={100}
                loading="lazy"
              />

              <div className="flex flex-col px-4 gap-y-4 flex-grow">
                {/* Contenido superior que crece */}
                <div className="flex-grow">
                  {/* Título */}
                  <div>
                    <h2 className="mt-0.5 text-lg font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                  </div>

                  {/* Descripción e iconos */}
                  <div className="flex flex-col flex-wrap gap-y-4 mt-4">
                    <p className="text-sm text-white font-medium">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.svgs?.map((svg, svgIndex) => (
                        <Image
                          className="w-10 h-10 p-2 bg-(--background-primary) rounded-full border border-[#bcb7b760] md:hover:border-[#bcb7b7] md:hover:scale-105 md:duration-300 ease-in-out"
                          key={svgIndex}
                          src={svg.svg}
                          alt={svg.alt}
                          width={100}
                          height={100}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                    {project.urlDemo && (
                      <ButtonHover
                        propsButton={{
                          text: "Demo",
                          link: project.urlDemo,
                          image: "/external-link.svg",
                        }}
                      />
                    )}

                    {project.urlCode && (
                      <ButtonHover
                        propsButton={{
                          text: "Código",
                          link: project.urlCode,
                          image: "/github.svg",
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PopupsModal;
