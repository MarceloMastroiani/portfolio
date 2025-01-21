import "./Skills.css";
import { SkillsItems } from "./SkillsItems";
import { skillsBackEnd, skillsFrontEnd } from "@/data/skills";
import { montserrat } from "../fonts";

export default function Skills() {
  return (
    <article className={`${montserrat.className} skills-section`}>
      <h1 className="text-center text-white text-4xl mb-16 font-bold">
        Tecnologias 💻
      </h1>
      {/* SECCION DE FRONTEND Y BACKEND */}
      <section className="flex flex-row gap-x-5 w-full h-full">
        {/* SECCION DE FRONTEND */}
        <div className="flex flex-col w-[50vw] h-full gap-y-5 ">
          {/* TITULO FRONTEND */}
          <h2 className="text-center text-white text-2xl">Frontend</h2>

          {/* CONTENEDOR DE SKILLS FRONTEND */}
          <div className="skills-content-frontend">
            {/* se mapean los skillsFrontEnd y se manda a SkillsItems para mostrarlos */}
            {skillsFrontEnd.map((skill, index) => (
              <SkillsItems key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* SECCION DE BACKEND */}
        <div className="flex flex-col w-[50vw] h-full gap-y-5 ">
          {/* TITULO BACKEND */}
          <h2 className="text-center text-white text-2xl">Backend</h2>

          {/* CONTENEDOR DE SKILLS BACKEND */}
          <div className="skills-content-backend">
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
