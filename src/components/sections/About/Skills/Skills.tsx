import { SkillsItems } from "./SkillsItems";
import { skillsBackEnd, skillsFrontEnd } from "@/data/skills";
import { montserrat } from "@/components/fonts";

export default function Skills() {
  return (
    <article
      className={`${montserrat.className} flex flex-col items-center justify-center  font-extrabold overflow-hidden bg-(--background-primary) py-[4em] px-[8em] gap-y-8 z-30 max-[768px]:py-[2em] max-[768px]:px-[2em] max-[768px]:gap-y-4`}
    >
      <h1 className="text-center text-white text-4xl mb-16 font-bold max-[768px]:text-2xl ">
        Tecnologias
      </h1>
      {/* SECCION DE FRONTEND Y BACKEND */}
      <section className="flex flex-col items-center gap-y-16 w-full max-[768px]:gap-x-3">
        {/* SECCION DE FRONTEND */}
        <div className="flex flex-col items-center w-[50vw] h-full gap-y-10 max-[768px]:gap-y-5 ">
          {/* TITULO FRONTEND */}
          <h2 className="text-center text-white text-2xl max-[768px]:text-lg ">
            Frontend
          </h2>

          {/* TODO: MEJORAR ESTO */}

          {/* CONTENEDOR DE SKILLS-CONTENT-FRONTEND */}
          <div className="grid grid-cols-5 gap-x-8 gap-y-5 items-center max-[768px]:grid-cols-4 max-[768px]:gap-x-4 max-[768px]:gap-y-3 ">
            {/* se mapean los skillsFrontEnd y se manda a SkillsItems para mostrarlos */}
            {skillsFrontEnd.map((skill, index) => (
              <SkillsItems key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* SECCION DE BACKEND */}
        <div className="flex flex-col items-center w-[50vw] h-full gap-y-10 max-[768px]:gap-y-5">
          {/* TITULO BACKEND */}
          <h2 className="text-center text-white text-2xl max-[768px]:text-lg">
            Backend
          </h2>

          {/* CONTENEDOR DE SKILLS-CONTENT-BACKEND */}
          <div className="grid grid-cols-5 gap-x-8 gap-y-5 items-center max-[768px]:grid-cols-4 max-[768px]:gap-x-4 max-[768px]:gap-y-3 ">
            {/* se mapean los skillsBackEnd y se manda a SkillsItems para mostrarlos */}
            {skillsBackEnd.map((skill, index) => (
              <SkillsItems key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
