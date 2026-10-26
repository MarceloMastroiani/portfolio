export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  demoLabel?: string;
}

export const projects: Project[] = [
  {
    title: "Flexio API Core",
    description:
      "API para la gestión de turnos, clientes, empleados, servicios y caja de un negocio de servicios. Incluye autenticación JWT con roles, cálculo de disponibilidad, validación de solapamientos, documentación Swagger y entorno Docker con PostgreSQL.",
    image: "/covers/flexio-api-core",
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Swagger",
    ],
    github: "https://github.com/MarceloMastroiani/flexio-api-core",
    demo: null,
  },
  {
    title: "Stoqra",
    description:
      "Bot de Telegram que funciona como agente de IA. Cada usuario configura su proveedor y API key; las claves se guardan cifradas y las conversaciones persisten en SQLite.",
    image: "/covers/stoqra",
    technologies: [
      "Bun",
      "TypeScript",
      "Telegraf",
      "LangChain",
      "LangGraph",
      "SQLite",
    ],
    github: "https://github.com/MarceloMastroiani/stoqra",
    demo: null,
  },
  {
    title: "LazyPlan",
    description:
      "TUI en Python para capturar y gestionar ideas de proyectos desde la terminal. Permite buscar, filtrar y editar ideas, crear la estructura de carpetas y generar el repositorio en GitHub sin salir de la app.",
    image: "/covers/lazyplan",
    technologies: ["Python", "Textual", "Typer", "JSON", "GitHub CLI"],
    github: "https://github.com/MarceloMastroiani/lazyPlan",
    demo: "https://pypi.org/project/lazyplan/",
    demoLabel: "PyPI",
  },
  {
    title: "RISC vs CISC",
    description:
      "Presentación interactiva tipo scrollytelling sobre arquitecturas RISC y CISC, con animaciones al scroll, comparadores visuales y drag & drop. Desarrollada para el coloquio de Arquitectura de Computadoras en la UNER.",
    image: "/covers/risc-vs-cisc",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "dnd-kit",
    ],
    github: "https://github.com/MarceloMastroiani/risc-vs-cisc",
    demo: "https://marcelomastroiani.github.io/risc-vs-cisc/",
  },
  {
    title: "E-commerce React",
    description:
      "E-commerce desarrollado como proyecto final del curso de React en CoderHouse. Catálogo, detalle de producto, carrito y alta de productos, con Firebase como backend y estado global con Redux Toolkit.",
    image: "/covers/ecommerce-react",
    technologies: [
      "React",
      "Vite",
      "Firebase",
      "Redux Toolkit",
      "React Router",
      "Bootstrap",
      "React Hook Form",
    ],
    github:
      "https://github.com/MarceloMastroiani/React-proyectoFinal-mastroiani",
    demo: null,
  },
  {
    title: "Energon - Sistemas de Riego",
    description:
      "Sitio web corporativo en WordPress con personalización en JavaScript y CSS. Se trabajó en la optimización del diseño, la navegación y la presentación de soluciones de riego para el campo.",
    image: "/agriculture-irrigation-systems-corporate-website-g",
    technologies: ["WordPress", "JavaScript", "CSS", "PHP"],
    github: null,
    demo: "https://energon.com.ar",
  },
];
