const experiences = [
  {
    year: "2025 - Presente",
    title: "WordPress Developer (Freelance)",
    company: "JuninSoft",
    description:
      "Trabajo como desarrollador freelance para JuninSoft, participando en el desarrollo, personalización y mantenimiento de sitios web realizados con WordPress. Mi rol incluye la implementación de funcionalidades a medida, ajustes de rendimiento, integración de plugins y adaptación de soluciones según los requerimientos de cada cliente.",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    side: "left",
  },
  {
    year: "2025 - Presente",
    title: "Full Stack Developer (Freelance)",
    company: "Independiente",
    description:
      "Trabajo de forma independiente como desarrollador Full Stack, enfocado principalmente en el desarrollo backend. Diseño y desarrollo APIs REST, manejo autenticación, bases de datos y lógica de negocio, además de integrar servicios externos y colaborar en el desarrollo frontend cuando el proyecto lo requiere.",
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
    year: "2024",
    title: "Backend Specialization",
    company: "CoderHouse",
    description:
      "Me especialicé en desarrollo backend a través del curso de Programación Backend en CoderHouse. Durante la cursada desarrollé una API de e-commerce utilizando Node.js y Express, con autenticación JWT, manejo de roles, integración de pagos con Stripe y un sistema de chat en tiempo real con Socket.io. Como evolución del aprendizaje, comencé a trabajar con NestJS y conceptos de arquitectura y microservicios.",
    technologies: ["Node.js", "Express.js", "MongoDB", "NestJS", "JWT"],
    side: "left",
  },
  {
    year: "2023",
    title: "Frontend Development",
    company: "CoderHouse",
    description:
      "Completé mi formación en desarrollo frontend, enfocándome en JavaScript moderno y React. Desarrollé proyectos prácticos que incluyeron aplicaciones interactivas, manejo de estado y maquetado de interfaces responsivas aplicando buenas prácticas de desarrollo web.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "SASS"],
    side: "right",
  },
  {
    year: "2022",
    title: "Inicio en Programación",
    company: "Autodidacta",
    description:
      "Comencé a aprender programación de forma autodidacta, incorporando los fundamentos de HTML, CSS y JavaScript. Realicé mis primeros proyectos personales, aprendiendo control de versiones con Git y sentando las bases para el desarrollo web.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
    side: "left",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-neutral-950 z-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-red-500 font-medium mb-2 tracking-widest uppercase text-sm">
            Mi Trayectoria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experiencia<span className="text-red-500">.</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-neutral-800 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
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
                  <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 hover:scale-105 transition-all duration-300">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
