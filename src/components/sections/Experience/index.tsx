import { motion } from "motion/react";
import { useRevealVariants } from "@/lib/animations";

const experiences = [
  {
    year: "2026 - Presente",
    title: "Especialización backend y proyectos propios",
    company: "Flexio · LazyPlan · Stoqra",
    description:
      "Encaré proyectos de mayor alcance: Flexio, una API de gestión de turnos con NestJS, Prisma y PostgreSQL; LazyPlan, una herramienta en Python publicada en PyPI; y Stoqra, un bot de Telegram con agentes de IA. También desarrollé una presentación interactiva sobre RISC y CISC para el coloquio de Arquitectura de Computadoras en la UNER.",
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Python",
      "Bun",
      "LangChain",
      "React",
    ],
    side: "left",
  },
  {
    year: "2025 - Presente",
    title: "Full Stack Developer (Freelance)",
    company: "Independiente",
    description:
      "Trabajo de forma independiente con foco en backend. Diseño APIs REST, implemento autenticación, modelo bases de datos y resuelvo lógica de negocio; también integro servicios externos y colaboro en el frontend cuando el proyecto lo requiere.",
    technologies: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "JWT",
      "React",
      "Docker",
    ],
    side: "right",
  },
  {
    year: "2025 - Presente",
    title: "WordPress Developer (Freelance)",
    company: "JuninSoft",
    description:
      "Desarrollo, personalizo y mantengo sitios WordPress para clientes de JuninSoft. Implemento funcionalidades a medida, ajustes de rendimiento, integración de plugins y adaptaciones según cada requerimiento.",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    side: "left",
  },
  {
    year: "2024",
    title: "Backend Specialization",
    company: "CoderHouse",
    description:
      "Me especialicé en backend con el curso de Programación Backend. Desarrollé una API de e-commerce con Node.js y Express, autenticación JWT, roles, pagos con Stripe y chat en tiempo real con Socket.io. A partir de ahí empecé a trabajar con NestJS y arquitectura de microservicios.",
    technologies: ["Node.js", "Express.js", "MongoDB", "NestJS", "JWT"],
    side: "right",
  },
  {
    year: "2023",
    title: "Frontend Development",
    company: "CoderHouse",
    description:
      "Completé mi formación frontend, enfocada en JavaScript moderno y React. Desarrollé aplicaciones interactivas, manejo de estado y maquetado responsive, y cerré con un e-commerce como proyecto final.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "SASS"],
    side: "left",
  },
  {
    year: "2022",
    title: "Inicio en Programación",
    company: "Autodidacta",
    description:
      "Arranqué a programar por mi cuenta. Aprendí HTML, CSS y JavaScript, armé mis primeros proyectos y empecé a usar Git y GitHub.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
    side: "right",
  },
];

export default function Experience() {
  const { container, item } = useRevealVariants();

  return (
    <section id="experience" className="relative py-24 bg-neutral-950 z-20">
      <motion.div
        className="max-w-5xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={item} className="text-center mb-16">
          <p className="text-red-500 font-medium mb-2 tracking-widest uppercase text-sm">
            Mi Trayectoria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experiencia<span className="text-red-500">.</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
          <p className="max-w-3xl mx-auto mt-6 text-neutral-400 leading-relaxed text-left sm:text-center">
            Empecé a programar de forma autodidacta en 2022. Desde entonces
            combiné formación, proyectos personales y trabajo freelance: pasé
            del frontend con React al backend con Node.js y NestJS, y hoy
            trabajo en APIs, herramientas propias y proyectos con IA. Esta es
            la línea de tiempo de ese recorrido.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-neutral-800 hidden md:block" />

          <motion.div variants={container} className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={item} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-neutral-950 hidden md:block" />

                {/* Content Card */}
                <div
                  className={`md:w-[calc(50%-40px)] ${
                    exp.side === "left"
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-noise noise-strong bg-neutral-950 rounded-xl border border-neutral-800 p-6 hover:scale-105 transition-all duration-300">
                    <span className="text-red-500 font-medium text-sm">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {exp.title}
                    </h3>
                    <p className="text-neutral-500 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
