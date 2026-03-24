import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";


const projects = [
  {
    title: "Microservicios E-commerce",
    description:
      "Conjunto de microservicios desarrollados con NestJS y TypeScript, implementando arquitectura modular para gestionar productos, clientes, pedidos y pagos. Integración de NATS para comunicación entre servicios, autenticación JWT, manejo de bases de datos con Prisma y pagos mediante Stripe.",
    image: "/microservices-architecture-dashboard-dark-theme.jpg",
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "NATS",
      "Docker",
      "Stripe",
    ],
    github: "https://github.com/marcelomastroiani",
    demo: null,
  },
  {
    title: "E-commerce React",
    description:
      "E-commerce desarrollado como proyecto final del curso de React en Coderhouse. Construido con React y Vite, conectado a Firebase para la base de datos. Incluye componentes reutilizables, carrito de compras y flujo optimizado para escalar nuevas funcionalidades.",
    image: "/modern-ecommerce-mobile-app-interface.jpg",
    technologies: ["React", "Vite", "Firebase", "JavaScript", "CSS"],
    github: "https://github.com/marcelomastroiani",
    demo: null,
  },
  {
    title: "App de Películas",
    description:
      "Aplicación web interactiva desarrollada con React y Vite, que consume la API pública de OMDB para mostrar información detallada sobre películas. Implementación de búsqueda dinámica, manejo de estados con hooks y optimización de rendimiento con Vite.",
    image: "/movie-streaming-app-interface-dark-theme-posters.jpg",
    technologies: ["React", "Vite", "OMDB API", "CSS"],
    github: "https://github.com/marcelomastroiani",
    demo: null,
  },
  {
    title: "Energon - Sistemas de Riego",
    description:
      "Desarrollo de sitio web corporativo en WordPress con personalización en JavaScript y CSS. Se trabajó en la optimización de diseño, navegación y presentación de soluciones de riego para el campo moderno.",
    image: "/agriculture-irrigation-systems-corporate-website-g.jpg",
    technologies: ["WordPress", "JavaScript", "CSS", "PHP"],
    github: null,
    demo: "https://energon.com.ar",
  },
  {
    title: "Circulo Fertil",
    description:
      "Desarrollo de sitio web corporativo en WordPress con personalización en JavaScript y CSS. Se trabajó en la optimización de diseño, navegación y velocidad de carga para mejorar la experiencia del usuario.",
    image: "/sustainable-agriculture-corporate-website-modern.jpg",
    technologies: ["WordPress", "JavaScript", "CSS", "PHP"],
    github: null,
    demo: "https://circulofertil.juninsoft.com",
  },
  {
    title: "Historias Wanderlust",
    description:
      "Blog de viajes desarrollado con WordPress, Elementor y JavaScript, enfocado en un diseño visual atractivo, navegación fluida y experiencia de usuario optimizada.",
    image: "/historias-wanderlust.jpg",
    technologies: ["WordPress", "Elementor", "JavaScript", "CSS"],
    github: null,
    demo: "https://historiaswanderlust.com/",
  },
];

export default function ProjectX() {
  return (
    <section id="proyectos" className="py-24 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-red-500 font-medium mb-2 tracking-widest uppercase text-sm">
            Mi trabajo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos<span className="text-red-500">.</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-xl"
            >
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
              <div className="aspect-video overflow-hidden">
                <img
                  width={1000}
                  height={1000}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-neutral-700 hover:border-neutral-600 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <FiGithub className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
