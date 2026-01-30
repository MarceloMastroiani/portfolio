const experiences = [
  {
    year: "2025 - Presente",
    title: "Full Stack Developer / WordPress",
    company: "JuninSoft",
    description:
      "Actualmente trabajo como Full Stack Developer en JuninSoft, una startup especializada en desarrollo de software que combina soluciones custom con WordPress. Mi rol incluye el desarrollo de aplicaciones web usando stack moderno como NestJS, React y PostgreSQL, así como la implementación de soluciones WordPress personalizadas para clientes corporativos.",
    technologies: [
      "NestJS",
      "PostgreSQL",
      "WordPress",
      "Docker",
      "Next.js",
      "TypeScript",
    ],
    side: "left",
  },
  {
    year: "2024",
    title: "Specialization Backend & Architecture",
    company: "CoderHouse",
    description:
      "Me especialicé en desarrollo backend a través del curso de Programación Backend en CoderHouse, donde construí una API de e-commerce completa usando Node.js y Express. Esta API incluía un sistema de autenticación JWT con refresh tokens, integración de pagos con Stripe incluyendo webhooks, y un chat en tiempo real con Socket.io. Posteriormente, evolucioné hacia NestJS para desarrollar un sistema de microservicios.",
    technologies: ["Node.js", "Express.js", "MongoDB", "NestJS", "JWT"],
    side: "right",
  },
  {
    year: "2023",
    title: "Frontend Development",
    company: "CoderHouse",
    description:
      "Completé mi formación en desarrollo frontend, aprendiendo React, JavaScript moderno y las mejores prácticas de desarrollo web. Construí múltiples proyectos incluyendo aplicaciones interactivas y sitios web responsivos.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "SASS"],
    side: "left",
  },
  {
    year: "2022",
    title: "Inicio en Programación",
    company: "Autodidacta",
    description:
      "Comencé mi viaje en el mundo de la programación, aprendiendo los fundamentos de HTML, CSS y JavaScript. Desarrollé mis primeros proyectos personales y descubrí mi pasión por el desarrollo web.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
    side: "right",
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
            Experience<span className="text-red-500">.</span>
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
                  <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 hover:border-red-500/30 transition-colors">
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
