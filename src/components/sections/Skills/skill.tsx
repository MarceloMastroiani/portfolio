import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "SASS", icon: SiSass },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },
  { name: "Material UI", icon: SiMui },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "NestJS", icon: SiNestjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "Prisma", icon: SiPrisma },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Docker", icon: SiDocker },
  { name: "PostgreSQL", icon: SiPostgresql },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-neutral-950 z-20 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-red-500 font-medium mb-2 tracking-widest uppercase text-sm">
            Mi Arsenal
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tech Stack<span className="text-red-500">.</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-red-500/50 transition-all duration-300 hover:bg-neutral-800/50"
            >
              <tech.icon className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors mb-3" />
              <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
