import { motion } from "motion/react";
import { useRevealVariants } from "@/lib/animations";
import { techStack } from "@/data/skills";

export function Skills() {
  const { container, item } = useRevealVariants();
  return (
    <section
      id="skills"
      className="relative py-24 bg-noise noise-strong bg-neutral-950 z-20 "
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={item} className="text-center mb-16">
          <p className="text-red-500 font-medium mb-2 tracking-widest uppercase text-sm">
            Mi Arsenal
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tecnologías<span className="text-red-500">.</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              className="group flex flex-col items-center justify-center p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-red-500/50 transition-all duration-300 hover:bg-neutral-800/50"
            >
              <img
                src={tech.icon}
                alt={`${tech.name} icon`}
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="w-8 h-8 object-contain mb-3 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
