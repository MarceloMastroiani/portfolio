"use client";

import Image from "next/image";
import Link from "next/link";
import { montserrat } from "@/components/fonts";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ArrowDown, FileUser, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setAnimation("");

    const timer = setTimeout(() => {
      setAnimation("animate-img-div-transition");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // TODO: Agregar redes sociales
  return (
    <main
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden "
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-size-[60px_60px] bg-background z-30" />

      {/* section-container */}
      <section className="flex pt-[4em]items-center px-4 md:py-[4em] lg:px-48 overflow-hidden z-40 max-[768px]:flex-col ">
        {/* Imagen */}

        <div className=" max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Imagen */}
            <div
              id="img"
              className={`relative flex-none overflow-hidden animate-img-transition max-[768px]:flex max-[768px]:items-center max-[768px]:justify-center max-[768px]:w-[50vw] max-[768px]:mr-0`}
            >
              <div
                id="imgDiv"
                className={`absolute top-0 w-[80%] h-full rounded-3xl bg-(--color-primary) ${animation} md:w-80 md:h-80`}
              >
                <Image
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src="/smile.svg"
                  alt="smile"
                  width={80}
                  height={80}
                  priority={true}
                  quality={75}
                />
              </div>

              <Image
                className="md:w-80 md:h-80 object-cover rounded-3xl"
                src={"/foto-perfil.webp"}
                alt="Profile picture of Marcelo Mastroiani"
                width={600}
                height={400}
                priority={true}
                quality={75}
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-red-500 font-medium mb-3 tracking-wide">
                ¡Hola! Soy
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
                Marcelo Mastroiani
              </h1>
              <h2 className="text-xl md:text-2xl text-neutral-400 mb-6">
                Programador Full-Stack
              </h2>
              <p className="text-neutral-400 max-w-lg mb-8 leading-relaxed">
                Trabajo tanto en back-end como en front-end para crear
                aplicaciones que combinan diseño atractivo y funcionalidad
                eficiente.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
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
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/marcelomastroiani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/marcelomastroiani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:contacto@marcelomastroiani.com"
                  className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about">
            <ArrowDown className="text-neutral-500" size={24} />
          </a>
        </div>
      </section>
    </main>
  );
}
