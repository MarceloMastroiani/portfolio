"use client";

import { motion } from "motion/react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useRevealVariants } from "@/lib/animations";
import DarkVeil from "@/components/DarkVeil";

export default function Hero() {
  const { container, item } = useRevealVariants();
  return (
    <main
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="w-full h-full md:h-screen absolute">
        <DarkVeil
          hueShift={238}
          noiseIntensity={0.05}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={2.5}
          warpAmount={3}
        />
      </div>

      {/* section-container */}
      <section className="flex items-center  md:py-[4em] lg:px-48 overflow-hidden z-40 max-[768px]:flex-col ">
        <div className=" max-w-6xl mx-auto px-6 py-20 relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Imagen */}
            <motion.div
              variants={item}
              className="relative flex-none max-[768px]:flex max-[768px]:items-center max-[768px]:justify-center max-[768px]:w-[50vw] max-[768px]:mr-0"
            >
              <img
                className="md:w-80 md:h-80 object-cover rounded-3xl"
                src={"/foto-perfil-480.webp"}
                alt="Profile picture of Marcelo Mastroiani"
                width={480}
                height={480}
                fetchPriority="high"
                decoding="async"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              variants={container}
            >
              <motion.p
                variants={item}
                className="text-white font-medium mb-3 tracking-widest uppercase text-sm"
              >
                ¡Hola! Soy
              </motion.p>
              <motion.h1
                variants={item}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance"
              >
                Marcelo Mastroiani
              </motion.h1>

              <motion.h2
                variants={item}
                className="text-xl md:text-2xl text-neutral-400 mb-6"
              >
                Programador Full-Stack
              </motion.h2>
              <motion.p
                variants={item}
                className="text-neutral-400 max-w-lg mb-8 leading-relaxed"
              >
                Trabajo tanto en back-end como en front-end para crear
                aplicaciones que combinan diseño atractivo y funcionalidad
                eficiente.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
              >
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors w-full sm:w-auto"
                >
                  Descubre más sobre mí
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 hover:border-neutral-600 text-white font-medium rounded-lg transition-colors w-full sm:w-auto"
                >
                  Contáctame
                </a>
                <a
                  href="/CV-Marcelo-Mastroiani.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 border border-red-500/40 hover:border-red-500/70 text-white font-medium rounded-lg transition-colors w-full sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={item}
                className="flex items-center gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://github.com/MarceloMastroiani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcelo-mastroiani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:mastroianimarcelo04@gmail.com"
                  className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <a href="#about">
            <ArrowDown className="text-neutral-500" size={24} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
