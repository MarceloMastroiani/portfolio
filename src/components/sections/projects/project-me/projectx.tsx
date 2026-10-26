import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useRevealVariants } from "@/lib/animations";
import { projects } from "@/data/projects";

export default function ProjectX() {
  const { container, item } = useRevealVariants();
  return (
    <section id="projects" className="py-24 ">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={item} className="text-center mb-16">
          <p className="text-red-500 font-medium mb-2 tracking-widest uppercase text-sm">
            Mi trabajo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos<span className="text-red-500">.</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const imageBase = project.image;
            return (
            <motion.article
              key={project.title}
              variants={item}
              className="group bg-noise noise-strong bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-xl"
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
                  width={960}
                  height={540}
                  src={`${imageBase}-640.webp`}
                  srcSet={`${imageBase}-640.webp 640w, ${imageBase}-960.webp 960w`}
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 340px, 100vw"
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
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
                      aria-label={`Ver el código de ${project.title} en GitHub`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-neutral-700 hover:border-neutral-600 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        project.demoLabel
                          ? `Ver ${project.title} en ${project.demoLabel}`
                          : `Abrir la demo de ${project.title}`
                      }
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {project.demoLabel ?? "Demo"}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
