export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
}

export const projects: Project[] = [
  {
    title: "Microservicios E-commerce",
    description:
      "Conjunto de microservicios desarrollados con NestJS y TypeScript, implementando arquitectura modular para gestionar productos, clientes, pedidos y pagos. Integración de NATS para comunicación entre servicios, autenticación JWT, manejo de bases de datos con Prisma y pagos mediante Stripe.",
    image: "/microservices-architecture-dashboard-dark-theme",
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "NATS",
      "Docker",
      "Stripe",
    ],
    github: "https://github.com/MarceloMastroiani",
    demo: null,
  },
  {
    title: "E-commerce React",
    description:
      "E-commerce desarrollado como proyecto final del curso de React en Coderhouse. Construido con React y Vite, conectado a Firebase para la base de datos. Incluye componentes reutilizables, carrito de compras y flujo optimizado para escalar nuevas funcionalidades.",
    image: "/modern-ecommerce-mobile-app-interface",
    technologies: ["React", "Vite", "Firebase", "JavaScript", "CSS"],
    github: "https://github.com/MarceloMastroiani",
    demo: null,
  },
  {
    title: "App de Películas",
    description:
      "Aplicación web interactiva desarrollada con React y Vite, que consume la API pública de OMDB para mostrar información detallada sobre películas. Implementación de búsqueda dinámica, manejo de estados con hooks y optimización de rendimiento con Vite.",
    image: "/movie-streaming-app-interface-dark-theme-posters",
    technologies: ["React", "Vite", "OMDB API", "CSS"],
    github: "https://github.com/MarceloMastroiani",
    demo: null,
  },
  {
    title: "Energon - Sistemas de Riego",
    description:
      "Desarrollo de sitio web corporativo en WordPress con personalización en JavaScript y CSS. Se trabajó en la optimización de diseño, navegación y presentación de soluciones de riego para el campo moderno.",
    image: "/agriculture-irrigation-systems-corporate-website-g",
    technologies: ["WordPress", "JavaScript", "CSS", "PHP"],
    github: null,
    demo: "https://energon.com.ar",
  },
  {
    title: "Circulo Fertil",
    description:
      "Desarrollo de sitio web corporativo en WordPress con personalización en JavaScript y CSS. Se trabajó en la optimización de diseño, navegación y velocidad de carga para mejorar la experiencia del usuario.",
    image: "/sustainable-agriculture-corporate-website-modern",
    technologies: ["WordPress", "JavaScript", "CSS", "PHP"],
    github: null,
    demo: "https://circulofertil.juninsoft.com",
  },
  {
    title: "Historias Wanderlust",
    description:
      "Blog de viajes desarrollado con WordPress, Elementor y JavaScript, enfocado en un diseño visual atractivo, navegación fluida y experiencia de usuario optimizada.",
    image: "/historias-wanderlust",
    technologies: ["WordPress", "Elementor", "JavaScript", "CSS"],
    github: null,
    demo: "https://historiaswanderlust.com/",
  },
];
